const path = require('path');
const fs = require('fs');
const { createMarkdown } = require('./jsonToMd');
const requestConfig = require('./dist/biz.json');

const newMethods = {};

let changeLogTemplate = '';

let warehouseMethodsTemPlate = ``;

(async () => {
  // 处理warehouseMethods内容生成
  for (const key in requestConfig) {
    await createMarkdown(key, requestConfig[key]);
    warehouseMethodsTemPlate += `\n### ${key}\n`;
    changeLogTemplate += `\n### ${key}\n|methodsName|url|methodType|describe|version|\n|--|--|--|--|--|\n`;
    newMethods[key] = requestConfig[key].reduce((obj, item) => {
      if (item.methodName) {
        changeLogTemplate += '|`' + item.methodName + '`|`' + item.url + '`|' + item.methods + '|' + item.summary + '|' + item.version + '|\n';
        warehouseMethodsTemPlate += `'${item.methods}&${item.url}${item.version != 'v1' ? '&' + item.version : ''}':'${item.methodName}',\n`;
      }
      return { ...obj, [`${item.methods}&${item.url}`]: item.methodName };
    }, {});
  }
  const template = `\n## 新增方法集合\n${warehouseMethodsTemPlate}\n\n## 改动记录${changeLogTemplate}`;
  await fs.writeFileSync(path.join(__dirname, `/dist/changeLog.md`), template, 'utf8');
})();
