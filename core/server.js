/*
 * @Author: xiajitao xiajitao@genew.com
 * @Date: 2022-09-30 14:29:00
 * @LastEditors: xiajitao xiajitao@genew.com
 * @LastEditTime: 2022-09-30 15:51:45
 * @Description: 自动化脚本辅助接口服务
 */
const Koa = require('koa');
const app = new Koa();

/**
 * TODO：
 * 1. 获取菜单json；
 * 2. 获取全部方法，或者某个服务下的方法；
 * 3. 添加方法；
 */

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  await next();
  // todo
});

app.use(async (ctx, next) => {
  await next();
  // todo
});

// 在端口8081监听:
app.listen(100);
