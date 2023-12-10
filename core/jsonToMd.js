const path = require('path');
const fs = require('fs');

const formatUrl = (url) => {
  return url.replace(/\{/g, '${params.');
};

async function createMarkdown(bizName, data) {
  // api markdown生成
  const apiMdTemplate = data.reduce((pre, item) => pre + '// ' + item.summary + '\n' + (item.methodName || 'methodName') + ': (params, config) => this._getConfig(`' + formatUrl(item.url) + '`, "' + item.methods + '", params, config), \n', '\n');
  //biz方法生成
  const bizMdTemplate = data.reduce((pre, item) => {
    let formatParamsData = item.methods === 'get' ? item.parameters || [] : [].concat(item.parameters || [], item.requestBody || []) || [];
    const requiredParams = [];
    // 非get请求必填query参数，不过脑子乱写接口
    const requiredQueryParams = [];
    const needParamsInConfig = item.methods !== 'get' && formatParamsData.some((i) => i.in === 'query');

    const formatParamsStr = formatParamsData.reduce((str, i) => {
      // 如果是必填项，判断请求方式，如果不是get请求，并且i.in为query，那么要修改configParams字符串
      if (i.required) {
        if ((item.methods === 'get' && i.in === 'query') || ['path', 'requestBody'].includes(i.in)) {
          requiredParams.push(i.key);
        }
        if (item.methods !== 'get' || i.in === 'query') {
          requiredQueryParams.push(i.key);
        }
      }
      // 解构出来没问题，主要是要判断下必填参数是放到哪
      return `${str} * @${i?.in === 'header' ? 'headers' : 'params'} ${i.key} {${i.type}} ${i.description}${i.default ? ' 默认：' + i.default : ''} ${i.required ? '（必填）' : ''}\n`;
    }, '');

    const formatTResponsesData = !item.responses ? [] : item.responses.reduce((str, i) => `${str} *    @${i.key} {${i.type}} ${i.description}\n`, ``);
    const methodName = item.methodName || 'methodName';
    const requiredParamsGather = [...new Set([...requiredParams.concat(requiredQueryParams)])];

    // 参数格式化
    const configVersion = item.version !== 'v1' ? `{headers: { 'X-version': '2' }, ...config}` : 'config';
    const specialConfigVersion = item.version !== 'v1' ? `headers: { 'X-version': '2' }, ...config` : '...config';
    /**
     * params处理，如果
     */
    let formatParams = `${requiredParams.length ? `{${requiredParams.join(', ')},...params}` : 'params'},${
      needParamsInConfig ? (requiredQueryParams.length ? `{params:{${requiredQueryParams.join(', ')},...params}, ${specialConfigVersion}}` : `config`) : configVersion
    }`;

    // 对于参数总长度为1的方法，简化参数设置（只对get和delete接口生效）
    let fnParamsSimple = '';
    if (['get', 'delete'].includes(item.methods)) {
      if (formatParamsData.length === 1 && formatParamsData[0].required) {
        fnParamsSimple = formatParamsData[0]?.key;
        formatParams = `{ ${formatParamsData[0]?.key} }, ${configVersion}`;
      }
    }
    const formatFnStr = `async ${methodName}(${
      requiredParamsGather.length ? fnParamsSimple || `{ ${requiredParamsGather.join(', ')}  , ...params}` : 'params = {}'
    }, config = {}) {\n    try {\n        const { data } = await this.api.${methodName}(${formatParams});\n        return data;\n    } catch (error) {\n        return utils.formatError('${bizName} ~ ${methodName}', error);\n    }\n}`;

    return pre + '\n/**\n * ' + item.summary + '\n' + formatParamsStr + ' * @returns\n' + formatTResponsesData + '*/\n' + formatFnStr + '\n\n';
  }, '');

  // vscode插件模板代码生成
  const pluginMdTemplate = data.reduce((pre, item) => {
    const formatParamsData = item.methods === 'get' ? item.parameters || [] : [].concat(item.parameters || [], item.requestBody || []) || [];
    const requiredParams = [];
    if (!formatParamsData) {
      console.log(formatParamsData);
      console.log([].concat(item.parameters || [], item.requestBody || []));
    }
    const formatParamsStr = formatParamsData.reduce((str, i) => {
      i.required && requiredParams.push(i.key);
      return `${str}@${i?.in === 'header' ? 'headers' : 'params'} ${i.key} {${i.type}} ${i.description}${i.default ? ' 默认：' + i.default : ''} ${i.required ? '（必填）' : ''}\n`;
    }, '');

    const methodName = item.methodName || 'methodName';
    const labelLine = `        label: '${methodName}',\n`;
    const kindLine = '        kind: vscode.CompletionItemKind.Method,\n';
    const insertTextLine = '        insertText: new vscode.SnippetString("' + methodName + '(${0:' + requiredParams.length === 1 ? requiredParams[0] : 'params' + '})"),\n';
    const documentationLine = '        documentation: new vscode.MarkdownString().appendMarkdown(`#### ' + item.summary + '`).appendCodeblock(`\n';
    const urlLine = `@URL ${item.url}\n`;
    const ExampleLine = `Exp: ${methodName}(${requiredParams.length === 1 ? requiredParams[0] : 'params'})\n`;
    const formatTResponsesData = !item.responses
      ? []
      : item.responses.reduce((str, i) => {
          return `${str}    @${i.key} {${i.type}} ${i.description}\n`;
        }, `@returns\n`);
    return pre + `    {\n${labelLine}${kindLine}${insertTextLine}${documentationLine}${urlLine}${ExampleLine}${formatParamsStr}${formatTResponsesData}    },\n`;
  }, '\n');

  const templateFormat = '// api \n``` js' + apiMdTemplate + '```\n\n // biz \n``` js' + bizMdTemplate + '```\n\n ';

  await fs.writeFileSync(path.join(__dirname, `/dist/${bizName}.md`), templateFormat, 'utf8');
}

module.exports = {
  createMarkdown,
};
