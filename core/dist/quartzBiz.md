// api 
``` js
// 查询所有定时任务
getJobs: (params, config) => this._getConfig(`/api/Jobs`, "get", params, config), 
// 添加一个定时任务
addJob: (params, config) => this._getConfig(`/api/Jobs`, "post", params, config), 
// 查询指定定时任务
getJobById: (params, config) => this._getConfig(`/api/Jobs/${params.id}`, "get", params, config), 
// 修改一个定时任务
editJob: (params, config) => this._getConfig(`/api/Jobs/${params.id}`, "put", params, config), 
// 删除定时任务
deleteJob: (params, config) => this._getConfig(`/api/Jobs/${params.id}`, "delete", params, config), 
// 立刻执行任务一次
startJob: (params, config) => this._getConfig(`/api/Jobs/${params.id}/immediate_execute`, "put", params, config), 
// 停止指定任务
stopJob: (params, config) => this._getConfig(`/api/Jobs/${params.id}/pause`, "put", params, config), 
// 恢复指定任务
restoreJob: (params, config) => this._getConfig(`/api/Jobs/${params.id}/resume`, "put", params, config), 
// 添加作业，包含子作业
addJobBiz: (params, config) => this._getConfig(`/api/Jobs/multiple`, "post", params, config), 
// 搜索作业，包含子作业
getJobBiz: (params, config) => this._getConfig(`/api/Jobs/multiple`, "get", params, config), 
// 获取作业，包含子作业
getJobBizById: (params, config) => this._getConfig(`/api/Jobs/multiple/${params.id}`, "get", params, config), 
// 更新作业，包含子作业
editJobBiz: (params, config) => this._getConfig(`/api/Jobs/multiple/${params.id}`, "put", params, config), 
// 删除作业，包含子作业
deleteJobBiz: (params, config) => this._getConfig(`/api/Jobs/multiple/${params.id}`, "delete", params, config), 
```

 // biz 
``` js
/**
 * 查询所有定时任务
 * @params Keyword {string} 关键字 
 * @params BizName {string} 业务名 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getJobs(params = {}, config = {}) {
    try {
        const { data } = await this.api.getJobs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ getJobs', error);
    }
}


/**
 * 添加一个定时任务
 * @params beginTime {string} 定时任务开始时间 （必填）
 * @params endTime {string} 定时任务结束时间 
 * @params cron {string} 定时任务的 Cron 表达式 
 * @params name {string} 定时任务名称 （必填）
 * @params description {string} 定时任务描述 
 * @params mode {integer} job 的模式 
 * @params bizName {string} 业务名 （必填）
 * @params bizData {object} 业务所需的参数，用于传到 RabbitMq 上 （必填）
 * @returns
 *    @id {string} 定时任务 Id
 *    @name {string} 定时任务名称
 *    @groupName {string} 定时任务所属组
 *    @mode {integer} job 的模式
 *    @description {string} 定时任务描述
 *    @beginTime {string} 定时任务开始时间
 *    @endTime {string} 定时任务结束时间
 *    @cron {string} 定时任务的 Cron 表达式
 *    @status {integer} 
 *    @nextExecuteTime {string} 下次执行时间
 *    @bizName {string} 业务名
 *    @bizData {object} 业务数据
 *    @createTime {string} 创建时间
*/
async addJob({ beginTime, name, bizName, bizData  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addJob({beginTime, name, bizName, bizData,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ addJob', error);
    }
}


/**
 * 查询指定定时任务
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 定时任务 Id
 *    @name {string} 定时任务名称
 *    @groupName {string} 定时任务所属组
 *    @mode {integer} job 的模式
 *    @description {string} 定时任务描述
 *    @beginTime {string} 定时任务开始时间
 *    @endTime {string} 定时任务结束时间
 *    @cron {string} 定时任务的 Cron 表达式
 *    @status {integer} 
 *    @nextExecuteTime {string} 下次执行时间
 *    @bizName {string} 业务名
 *    @bizData {object} 业务数据
 *    @createTime {string} 创建时间
*/
async getJobById(id, config = {}) {
    try {
        const { data } = await this.api.getJobById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ getJobById', error);
    }
}


/**
 * 修改一个定时任务
 * @params id {string} id （必填）
 * @params beginTime {string} 定时任务开始时间 （必填）
 * @params endTime {string} 定时任务结束时间 
 * @params cron {string} 定时任务的 Cron 表达式 
 * @params name {string} 定时任务名称 （必填）
 * @params description {string} 定时任务描述 
 * @params mode {integer} job 的模式 
 * @params bizName {string} 业务名 （必填）
 * @params bizData {object} 业务所需的参数，用于传到 RabbitMq 上 （必填）
 * @returns
*/
async editJob({ id, beginTime, name, bizName, bizData  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editJob({id, beginTime, name, bizName, bizData,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ editJob', error);
    }
}


/**
 * 删除定时任务
 * @params id {string} id （必填）
 * @returns
*/
async deleteJob(id, config = {}) {
    try {
        const { data } = await this.api.deleteJob({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ deleteJob', error);
    }
}


/**
 * 立刻执行任务一次
 * @params id {string} id （必填）
 * @returns
*/
async startJob({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.startJob({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ startJob', error);
    }
}


/**
 * 停止指定任务
 * @params id {string} id （必填）
 * @returns
*/
async stopJob({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.stopJob({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ stopJob', error);
    }
}


/**
 * 恢复指定任务
 * @params id {string} id （必填）
 * @returns
*/
async restoreJob({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.restoreJob({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ restoreJob', error);
    }
}


/**
 * 添加作业，包含子作业
 * @params subJobs {array} 子任务 
 * @params parentJobId {string} 父任务ID 
 * @params beginTime {string} 定时任务开始时间 （必填）
 * @params endTime {string} 定时任务结束时间 
 * @params cron {string} 定时任务的 Cron 表达式 
 * @params name {string} 定时任务名称 （必填）
 * @params description {string} 定时任务描述 
 * @params mode {integer} job 的模式 
 * @params bizName {string} 业务名 （必填）
 * @params bizData {object} 业务所需的参数，用于传到 RabbitMq 上 （必填）
 * @returns
 *    @subJobs {array} 子作业，非必有
 *    @id {string} 定时任务 Id
 *    @name {string} 定时任务名称
 *    @groupName {string} 定时任务所属组
 *    @mode {integer} job 的模式
 *    @description {string} 定时任务描述
 *    @beginTime {string} 定时任务开始时间
 *    @endTime {string} 定时任务结束时间
 *    @cron {string} 定时任务的 Cron 表达式
 *    @status {integer} 
 *    @nextExecuteTime {string} 下次执行时间
 *    @bizName {string} 业务名
 *    @bizData {object} 业务数据
 *    @createTime {string} 创建时间
*/
async addJobBiz({ beginTime, name, bizName, bizData  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addJobBiz({beginTime, name, bizName, bizData,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ addJobBiz', error);
    }
}


/**
 * 搜索作业，包含子作业
 * @params BizName {string} 组名 （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getJobBiz({ BizName  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getJobBiz({BizName,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ getJobBiz', error);
    }
}


/**
 * 获取作业，包含子作业
 * @params id {string} id （必填）
 * @returns
 *    @subJobs {array} 子作业，非必有
 *    @id {string} 定时任务 Id
 *    @name {string} 定时任务名称
 *    @groupName {string} 定时任务所属组
 *    @mode {integer} job 的模式
 *    @description {string} 定时任务描述
 *    @beginTime {string} 定时任务开始时间
 *    @endTime {string} 定时任务结束时间
 *    @cron {string} 定时任务的 Cron 表达式
 *    @status {integer} 
 *    @nextExecuteTime {string} 下次执行时间
 *    @bizName {string} 业务名
 *    @bizData {object} 业务数据
 *    @createTime {string} 创建时间
*/
async getJobBizById(id, config = {}) {
    try {
        const { data } = await this.api.getJobBizById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ getJobBizById', error);
    }
}


/**
 * 更新作业，包含子作业
 * @params id {string} id （必填）
 * @params subJobs {array} 子任务 
 * @params beginTime {string} 定时任务开始时间 （必填）
 * @params endTime {string} 定时任务结束时间 
 * @params cron {string} 定时任务的 Cron 表达式 
 * @params name {string} 定时任务名称 （必填）
 * @params description {string} 定时任务描述 
 * @params mode {integer} job 的模式 
 * @params bizName {string} 业务名 （必填）
 * @params bizData {object} 业务所需的参数，用于传到 RabbitMq 上 （必填）
 * @returns
*/
async editJobBiz({ id, beginTime, name, bizName, bizData  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editJobBiz({id, beginTime, name, bizName, bizData,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ editJobBiz', error);
    }
}


/**
 * 删除作业，包含子作业
 * @params id {string} id （必填）
 * @returns
*/
async deleteJobBiz(id, config = {}) {
    try {
        const { data } = await this.api.deleteJobBiz({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('quartzBiz ~ deleteJobBiz', error);
    }
}

```

 