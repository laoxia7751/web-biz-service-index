const { createMarkdown } = require('./jsonToMd');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const { argv } = require('process');
const { ignorePaths, swaggerJSON, warehouseMethods, staticRequest } = require('./config');


let requestConfig = {};
let schemaData = {};
const descReg = /\r|\n|;\"|(<.+\/?>)/g;

/**
 * swagger转json并生成markdown
 * @param {Number} buildType {0:打印全部，1：打印没有入库的方法，2：打印入库了的方法}
 */
async function init(buildType = 0) {
  let swaggerList = {};
  const bizNameList = [];
  Object.entries(swaggerJSON).forEach(([bizName, swaggerDataConfig]) => {
    bizNameList.push(bizName);
    const { primaryName, address, port, url } = swaggerDataConfig;
    // 走54429
    const headers = primaryName ? { 'X-Service-Address': address, 'X-Service-Port': port } : {};
    if (typeof url === 'string') {
      swaggerList[bizName] = { url, headers };
    } else {
      Object.keys(url).forEach((version) => {
        swaggerList[`${bizName}-${version}`] = { url: url[version], headers };
      });
    }
    requestConfig[bizName] = [];
  });
  console.log('请求拼装成功，开始请求swagger文档接口数据');
  const res = await Promise.all(Object.values(swaggerList).map((item) => axios.get(item.url, { headers: item.headers }))).catch((error) => {
    const errormsg = `请求错误,错误码:${error.code}，请求url:${error.config.url}`;
    throw new Error(errormsg);
  });
  res.forEach((item) => console.log(item.config.url, item.status === 200 ? `success` : 'fail'));
  res.map((bizRes, index) => {
    try {
      const {
        paths,
        components: { schemas },
      } = bizRes.data;

      let bizName = Object.keys(swaggerList)[index];
      console.log('开始处理' + bizName);
      let version = 'v1';
      if (bizName.includes('-v')) {
        const [n, v] = bizName.split('-');
        bizName = n;
        version = v;
      }
      const warehouseMethodsData = warehouseMethods[bizName] || {};
      // schema模型处理
      schemaData = Object.entries(schemas).reduce((pre, [schemaName, schemaData]) => {
        if (schemaData.type === 'object') {
          const { type, properties = {}, description = '', required = [] } = schemaData;
          const params = Object.entries(properties).map(([key, value]) => {
            if (value.$ref || value.allOf) {
              // 再做解构
              const refName = value?.$ref ? value.$ref.split('/')?.at(-1) : value?.allOf?.at(0)?.$ref.split('/')?.at(-1);
              const refObj = pre[refName] || {};
              const details = refObj.properties ? Object.keys(refObj.properties)?.map((i) => ({ key: i, type: refObj[i]?.type, description: refObj[i]?.description })) : null;
              return {
                key,
                type: refObj.type,
                description: refObj.description ? refObj.description.replace(descReg, '') : '',
                required: required.includes(key),
                details: details,
              };
            } else {
              return {
                key,
                type: value.type,
                description: value.description ? value.description.replace(descReg, '') : '',
                required: required.includes(key),
              };
            }
          });
          return { ...pre, [schemaName]: { type, description: description.replace(descReg, ''), properties: params } };
        } else {
          return { ...pre, [schemaName]: schemaData };
        }
      }, {});
      const ignorePathList = [...ignorePaths.common, ...(ignorePaths[bizName] || [])];
      // 请求处理
      Object.keys(paths)
        .filter((url) => !ignorePathList.includes(url))
        .forEach((url) => {
          Object.entries(paths[url]).forEach(([methods, { operationId, tags, summary, parameters, requestBody, responses }]) => {
            // 分类
            const tag = tags.length ? tags[0] : '';
            // 过滤回调型接口
            if (tag === 'Callbacks') return;
            // params参数处理
            const transformParams = !Array.isArray(parameters)
              ? null
              : parameters.map((i) => {
                  // 基本参数
                  let paramInfo = {
                    key: i.name,
                    type: i.schema?.type,
                    description: i.description ? i.description.replace(descReg, '') : /id$/i.test(i.name) ? i.name : '',
                    required: i.required,
                    default: i.schema?.default || null,
                    in: i.in,
                  };
                  // 走schema模型的参数
                  if (i.type === 'undefined' && i.schema.$ref) {
                    const refData = schemaData?.[i.schema.$ref.split('/')?.at(-1)] || {};
                    paramInfo.type = refData?.type;
                  }

                  // 请求头参数
                  if (i.in === 'header') {
                    paramInfo.in = 'header';
                    paramInfo.type = i?.schema?.type ?? 'string';
                  }

                  return paramInfo;
                });
            // requestBody参数处理
            let transformRequestBody = null;
            if (requestBody) {
              const schemaWrap = requestBody.content['application/json']?.schema ?? {};
              const schemaRef = schemaWrap?.$ref || schemaWrap?.allOf?.at(0)?.$ref || '';
              const schemaName = schemaRef.split('/').at(-1);
              const schema = schemaData[schemaName] || {};
              transformRequestBody = schema.properties?.map((i) => ({ ...i, in: 'requestBody' })) || [];
            }
            // responses结果处理
            const responsesData = responses['200'] || responses['201'] || responses['204'] || {};
            let transformResponses = null;
            if (responsesData.content) {
              const schemaObj = responsesData.content['application/json'].schema;
              let responseSchemaRef = schemaObj.$ref || schemaObj?.items?.$ref || '';
              const responseSchemaName = responseSchemaRef.split('/').at(-1) || '';
              const transformSchema = schemaData[responseSchemaName] || {};
              transformResponses = transformSchema.properties || null;
            }
            const warehouseMethodsDataInfo = warehouseMethodsData[`${methods}&${url}${version != 'v1' ? '&' + version : ''}`];
            let subBiz = typeof warehouseMethodsDataInfo === 'object' ? warehouseMethodsDataInfo.subBiz : null;
            const methodName = subBiz ? warehouseMethodsDataInfo?.name || '' : warehouseMethodsDataInfo || '';
            const canSave = buildType == 0 || (buildType == 1 && !methodName) || (buildType == 2 && !!methodName);
            canSave &&
              requestConfig[bizName].push({
                url,
                tag,
                subBiz,
                methods,
                summary,
                version,
                methodName,
                operationId,
                parameters: transformParams,
                responses: transformResponses,
                requestBody: transformRequestBody,
              });
          });
        });
    } catch (error) {
      console.log(bizRes);
    }
  });

  // schemaData JSON
  await fs.writeFileSync(path.join(__dirname, `/dist/schema.json`), JSON.stringify(schemaData, null, '\t'), 'utf8');

  buildType != 1 && Object.assign(requestConfig, staticRequest);

  // 对空的biz模块进行移除
  Reflect.ownKeys(requestConfig).forEach((key) => {
    if (requestConfig[key].length === 0 || key === 'facilityBiz') {
      Reflect.deleteProperty(requestConfig, key);
    } else {
      buildType == 1 && key !== 'facilityBiz' && console.log(`${key} 新增接口${requestConfig[key].length}个`);
    }
  });

  // 函数json
  await fs.writeFileSync(path.join(__dirname, `/dist/biz.json`), JSON.stringify(requestConfig, null, '\t'), 'utf8');

  if (buildType == 2) {
    console.log('json转化成功，开始生成markdown文件');
    // markdown模板生成
    for (const key in requestConfig) {
      await createMarkdown(key, requestConfig[key]);
    }
  }

  console.log('success');
}

init(argv[2]);
