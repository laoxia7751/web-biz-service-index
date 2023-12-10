/*
 * @Author: xiajitao xiajitao@genew.com
 * @Date: 2023-07-28 16:44:22
 * @LastEditors: xiajitao xiajitao@genew.com
 * @LastEditTime: 2023-07-31 14:23:58
 * @Description: 检查不存在的业务库方法
 */
const fnStore = require('./warehouseMethods');
const bizJson = require('./dist/biz.json');
const path = require('path');
const fs = require('fs');

const start = async () => {
  let res = {};
  let str = '';
  for (const bizName in fnStore) {
    // 线上数据
    const onlineMethods = bizJson[bizName];
    // 业务库方法库
    const fnObj = fnStore[bizName];
    if (Array.isArray(onlineMethods)) {
      const data = Object.entries(fnObj).reduce((arr, [str, fnName]) => {
        if (typeof fnName === 'string') {
          if (onlineMethods.some((i) => i.methodName === fnName)) {
            return arr;
          }
          return [...arr, fnName];
        } else {
          if (onlineMethods.some((i) => i.methodName === fnName.name)) {
            return arr;
          }
          return [...arr, fnName.name];
        }
      }, []);
      if (data.length) {
        console.log(`🚨:${bizName}有${data.length}个api待删除`);
        res[bizName] = data;
        str += `\n\n## ${bizName} \n${data.join('\n')}`;
      }
    }
  }

  if (str) {
    await fs.writeFileSync(path.join(__dirname, `nullMethods.md`), str, 'utf8');
    console.log(`🍀:待删除接口统计完毕`);
  }
};

start();
