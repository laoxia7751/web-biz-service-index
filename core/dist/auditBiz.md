// api 
``` js
// 按条件查询操作
getOperation: (params, config) => this._getConfig(`/api/Operation`, "get", params, config), 
// 按条件查询操作
searchOperation: (params, config) => this._getConfig(`/api/Operation`, "post", params, config), 
// 通过操作记录ID获取详细操作记录
getRecordById: (params, config) => this._getConfig(`/api/Record/${params.id}`, "get", params, config), 
```

 // biz 
``` js
/**
 * 按条件查询操作
 * @params key {string} 关键字:用户账号、操作说明 
 * @params product {integer} 产品(应用); 默认0是全部 
 * @params platformId {string} 分级 
 * @params date_start {string} 记录起始时间 
 * @params date_stop {string} 记录终结时间 
 * @params sort_field {string} 排序字段 
 * @params service {string} 记录归属服务gateway/vs 默认：gateway（操作日志） 
 * @params user_ip {string} 用户IP 
 * @params usr_id {string} 用户ID 
 * @params Uri {string} url 
 * @params result {undefined} 操作结果0-全部 1-成功  2-失败 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getOperation(params = {}, config = {}) {
    try {
        const { data } = await this.api.getOperation(params,config);
        return data;
    } catch (error) {
        return utils.formatError('auditBiz ~ getOperation', error);
    }
}


/**
 * 按条件查询操作
 * @params key {string} 关键字:用户账号、操作说明 
 * @params product {integer} 产品(应用); 默认0是全部 
 * @params platformId {string} 分级 
 * @params date_start {string} 记录起始时间 
 * @params date_stop {string} 记录终结时间 
 * @params sort_field {string} 排序字段 
 * @params service {string} 记录归属服务gateway/vs 默认：gateway（操作日志） 
 * @params user_ip {string} 用户IP 
 * @params usr_id {string} 用户ID 
 * @params Uri {string} url 
 * @params result {undefined} 操作结果0-全部 1-成功  2-失败 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchOperation(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchOperation(params,config);
        return data;
    } catch (error) {
        return utils.formatError('auditBiz ~ searchOperation', error);
    }
}


/**
 * 通过操作记录ID获取详细操作记录
 * @params id {string} id （必填）
 * @params service {string} 操作日志归属的服务，默认为网关 
 * @returns
 *    @id {string} 预案ID
 *    @userId {string} 用户id
 *    @account {string} 用户账户
 *    @userAgent {string} 用户浏览器
 *    @dateTime {string} 时间
 *    @remoteAddress {string} 远端地址
 *    @upAddress {string} 后台地址
 *    @requestTime {string} 请求时间
 *    @responseTime {string} 上游响应时间
 *    @application {string} 前端服务
 *    @method {string} 操作
 *    @status {integer} 操作结果
*/
async getRecordById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getRecordById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('auditBiz ~ getRecordById', error);
    }
}

```

 