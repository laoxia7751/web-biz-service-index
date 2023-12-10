// api 
``` js
// 获取行业分类列表
getBusinesses: (params, config) => this._getConfig(`/api/Businesses`, "get", params, config), 
// 查询质检规则
searchCheckRule: (params, config) => this._getConfig(`/api/CheckRule/Search`, "get", params, config), 
// 查询质检规则的关联元数据信息
getCheckRuleRelatedMetadata: (params, config) => this._getConfig(`/api/CheckRule/${params.resourceId}/CheckRuleRelationMetadata`, "get", params, config), 
// 添加质检规则
addCheckRule: (params, config) => this._getConfig(`/api/CheckRule`, "post", params, config), 
// 修改质检规则
editCheckRule: (params, config) => this._getConfig(`/api/CheckRule/${params.resourceId}`, "put", params, config), 
// 删除质检规则
deleteCheckRule: (params, config) => this._getConfig(`/api/CheckRule/${params.resourceId}`, "delete", params, config), 
// 获取质检规则
getCheckRuleType: (params, config) => this._getConfig(`/api/CheckRuleType`, "get", params, config), 
// 按照条件查询质检任务列表
getCheckTaskInfo: (params, config) => this._getConfig(`/api/CheckTaskInfo/Search`, "get", params, config), 
// 按照Id查询质检任务详情信息
getCheckTaskInfoById: (params, config) => this._getConfig(`/api/CheckTaskInfo/${params.id}/Detail`, "get", params, config), 
// 立即执行作业
runCheckTask: (params, config) => this._getConfig(`/api/CheckTaskInfo/SingleExecution`, "put", params, config), 
// 按照条件查询质检任务执行记录列表
searchCheckTaskInfo: (params, config) => this._getConfig(`/api/CheckTaskInfo/${params.id}/CheckTaskExecuteRecord/Search`, "get", params, config), 
// 查询质检任务执行记录单个信息
getCheckTaskExecuteRecordById: (params, config) => this._getConfig(`/api/CheckTaskInfo/CheckTaskExecuteRecord/${params.id}`, "get", params, config), 
// 查询质检任务搜索执行记录
getCheckTaskExecuteRecord: (params, config) => this._getConfig(`/api/CheckTaskInfo/CheckTaskExecuteRecord/Search`, "get", params, config), 
// 分页查询质检任务检测详情出错的数据列表
getCheckTaskExecuteRecordErrors: (params, config) => this._getConfig(`/api/CheckTaskInfo/CheckTaskExecuteRecord/${params.id}/Errors`, "get", params, config), 
// 
getDataSource: (params, config) => this._getConfig(`/api/DataSource`, "get", params, config), 
// 添加数据源
addDataSource: (params, config) => this._getConfig(`/api/DataSource`, "post", params, config), 
// 修改数据源
editDataSource: (params, config) => this._getConfig(`/api/DataSource/${params.resourceId}`, "put", params, config), 
// 删除数据源
deleteDataSource: (params, config) => this._getConfig(`/api/DataSource/${params.resourceId}`, "delete", params, config), 
// 提供数据库信息
getDbInfosByResourceId: (params, config) => this._getConfig(`/api/DataSource/${params.resourceId}/DbInfos`, "get", params, config), 
// 抓取数据源提供的元数据
searchMetadataInfoByResourceId: (params, config) => this._getConfig(`/api/DataSource/${params.resourceId}/DbInfos`, "post", params, config), 
// 分页获取行政部门列表
getDepartments: (params, config) => this._getConfig(`/api/Departments`, "get", params, config), 
// 新增行政部门
addDepartments: (params, config) => this._getConfig(`/api/Departments`, "post", params, config), 
// 获取行政部门详情（支持资源Id）
getDepartmentById: (params, config) => this._getConfig(`/api/Departments/${params.id}`, "get", params, config), 
// 修改行政部门
editDepartment: (params, config) => this._getConfig(`/api/Departments/${params.id}`, "put", params, config), 
// 删除行政部门
deleteDepartment: (params, config) => this._getConfig(`/api/Departments/${params.id}`, "delete", params, config), 
// 批量Ids/ResourceIDs获取部门集合
getDepartmentsByIds: (params, config) => this._getConfig(`/api/Departments/batch`, "post", params, config), 
// 导入行政部门
importDepartments: (params, config) => this._getConfig(`/api/Departments/import`, "post", params, config), 
// 获取行政区域列表
getDistricts: (params, config) => this._getConfig(`/api/Districts`, "get", params, config), 
// 分页获取领域列表
getDomains: (params, config) => this._getConfig(`/api/Domains`, "get", params, config), 
// 新增领域
addDomain: (params, config) => this._getConfig(`/api/Domains`, "post", params, config), 
// 获取领域详情（支持资源Id）
getDomainById: (params, config) => this._getConfig(`/api/Domains/${params.id}`, "get", params, config), 
// 修改领域
editDomain: (params, config) => this._getConfig(`/api/Domains/${params.id}`, "put", params, config), 
// 删除领域
deleteDomain: (params, config) => this._getConfig(`/api/Domains/${params.id}`, "delete", params, config), 
// 批量Ids/ResourceIDs获取领域集合
getDomainsByIds: (params, config) => this._getConfig(`/api/Domains/batch`, "post", params, config), 
// 导入行政部门
importDomains: (params, config) => this._getConfig(`/api/Domains/import`, "post", params, config), 
// 导出数据需求目录
exportDataRequestCategory: (params, config) => this._getConfig(`/api/Export/ExportDataRequestCategory`, "get", params, config), 
// 获取ETLJob的实体列表
getKettleJobs: (params, config) => this._getConfig(`/api/KettleJobs`, "get", params, config), 
// 添加EtlJob
addKettleJobs: (params, config) => this._getConfig(`/api/KettleJobs`, "post", params, config), 
// 更新EtlJob
editKettleJobs: (params, config) => this._getConfig(`/api/KettleJobs/${params.resourceId}`, "put", params, config), 
// 删除EtlJob
deleteKettleJobs: (params, config) => this._getConfig(`/api/KettleJobs/${params.resourceId}`, "delete", params, config), 
// 查询ETLJob的实体列表
searchKettleJobs: (params, config) => this._getConfig(`/api/KettleJobs/Search`, "get", params, config), 
// Etl具体信息
getKettleJobById: (params, config) => this._getConfig(`/api/KettleJobs/${params.id}`, "get", params, config), 
// 返回执行记录列表
getKettleJobRecords: (params, config) => this._getConfig(`/api/KettleJobs/${params.id}/Records`, "get", params, config), 
// 根据元数据ID返回ETL执行记录
getKettleJobRecordsByMetadataId: (params, config) => this._getConfig(`/api/KettleJobs/Records/Search`, "get", params, config), 
// 获取ETL作业的标签
getTags: (params, config) => this._getConfig(`/api/KettleJobs/Tags`, "get", params, config), 
// 导入kettle
importKettleJobs: (params, config) => this._getConfig(`/api/KettleJobs/Import`, "post", params, config), 
// 导出所有资源库的json数据
exportKettleJobs: (params, config) => this._getConfig(`/api/KettleJobs/Export`, "post", params, config), 
// 运行作业
runJobs: (params, config) => this._getConfig(`/api/KettleJobs/${params.id}/Run`, "put", params, config), 
// 停止作业
stopJobs: (params, config) => this._getConfig(`/api/KettleJobs/${params.id}/Stop`, "put", params, config), 
// 立即执行作业
singleExecJobs: (params, config) => this._getConfig(`/api/KettleJobs/SingleExecution`, "put", params, config), 
// 导出某个ETL作业的前10条执行日志记录
exportTop10Jobs: (params, config) => this._getConfig(`/api/KettleJobs/${params.id}/Records/Export`, "get", params, config), 
// 导出ETL执行记录的日志记录
exportETLJobRecords: (params, config) => this._getConfig(`/api/KettleJobs/Records/${params.id}/Export`, "get", params, config), 
// 获取元数据详情
getMetadataById: (params, config) => this._getConfig(`/api/Metadata/${params.id}`, "get", params, config), 
// 修改元数据
editMetadata: (params, config) => this._getConfig(`/api/Metadata/${params.id}`, "put", params, config), 
// 删除元数据
deleteMetadata: (params, config) => this._getConfig(`/api/Metadata/${params.id}`, "delete", params, config), 
// 元数据对接统计
getMetadataDockInfo: (params, config) => this._getConfig(`/api/Metadata/dockInfo`, "get", params, config), 
// 根据（领域、主题、行业、服务、部门、行政区域）查询元数据（分页）
getMetadata: (params, config) => this._getConfig(`/api/Metadata`, "get", params, config), 
// 添加元数据
addMetadata: (params, config) => this._getConfig(`/api/Metadata`, "post", params, config), 
// 根据（领域、主题、行业、服务、部门、行政区域、标签）查询元数据
searchMetadata: (params, config) => this._getConfig(`/api/Metadata/FindPageBySearch`, "post", params, config), 
// 更新元数据的统计信息
updateMetadataCountInfo: (params, config) => this._getConfig(`/api/Metadata/UpdateMetadataCountInfo`, "post", params, config), 
// 分页获取项目列表
getProjects: (params, config) => this._getConfig(`/api/Projects`, "get", params, config), 
// 新增项目
addProject: (params, config) => this._getConfig(`/api/Projects`, "post", params, config), 
// 获取项目（支持资源Id）
getProjectById: (params, config) => this._getConfig(`/api/Projects/${params.id}`, "get", params, config), 
// 修改项目
editProject: (params, config) => this._getConfig(`/api/Projects/${params.id}`, "put", params, config), 
// 删除项目
deleteProject: (params, config) => this._getConfig(`/api/Projects/${params.id}`, "delete", params, config), 
// 获取项目详情（支持资源Id）
getProjectDetailById: (params, config) => this._getConfig(`/api/Projects/${params.id}/detail`, "get", params, config), 
// 导入项目专题
importProjects: (params, config) => this._getConfig(`/api/Projects/import`, "post", params, config), 
// 根据项目Id创建模板资源库
addResourceDbsByProjectId: (params, config) => this._getConfig(`/api/Projects/${params.id}/defaultResourceDbs`, "post", params, config), 
// 查询资源库树
getResourceDbTree: (params, config) => this._getConfig(`/api/ResourceDb/tree`, "get", params, config), 
// 查询符合条件的资源库
getResourceDb: (params, config) => this._getConfig(`/api/ResourceDb`, "get", params, config), 
// 添加资源库
addResourceDb: (params, config) => this._getConfig(`/api/ResourceDb`, "post", params, config), 
// 查询资源库详情
getResourceDbById: (params, config) => this._getConfig(`/api/ResourceDb/${params.id}`, "get", params, config), 
// 修改资源库
editResourceDb: (params, config) => this._getConfig(`/api/ResourceDb/${params.id}`, "put", params, config), 
// 删除资源库
deleteResourceDb: (params, config) => this._getConfig(`/api/ResourceDb/${params.id}`, "delete", params, config), 
// 批量Ids/ResourceIDs/Numbers获取资源库集合（带元数据和数据源,ps:Number为图层LayerId）
getResourceDbsByIds: (params, config) => this._getConfig(`/api/ResourceDb/search/batch`, "post", params, config), 
// 导入资源库（带元数据和数据源）
importResourceDbs: (params, config) => this._getConfig(`/api/ResourceDb/import`, "post", params, config), 
// 批量添加资源库
batchAddResourceDb: (params, config) => this._getConfig(`/api/ResourceDb/Batch`, "post", params, config), 
// 查询资源库关联的元数据
getMetadataByResourceDb: (params, config) => this._getConfig(`/api/ResourceDb/${params.id}/Metadata`, "get", params, config), 
// 查询外部数据
searchExternalResource: (params, config) => this._getConfig(`/api/ResourceDb/${params.id}/ExternalResource/Search`, "post", params, config), 
// 统计资源库子项对应的外部数据总量
getExternalResourceAmount: (params, config) => this._getConfig(`/api/ResourceDb/${params.id}/ExternalResource/Statistic`, "get", params, config), 
// 新增外部数据
addExternalResource: (params, config) => this._getConfig(`/api/ResourceDb/${params.id}/ExternalResource`, "post", params, config), 
// 修改外部数据
editExternalResource: (params, config) => this._getConfig(`/api/ResourceDb/${params.id}/ExternalResource`, "put", params, config), 
// 删除外部数据
deleteExternalResource: (params, config) => this._getConfig(`/api/ResourceDb/${params.id}/ExternalResource`, "delete", params, config), 
// 批量删除外部数据
batchDeleteExternalResource: (params, config) => this._getConfig(`/api/ResourceDb/${params.id}/ExternalResource/Batch`, "delete", params, config), 
// 获取服务分类列表
getServices: (params, config) => this._getConfig(`/api/Services`, "get", params, config), 
// 返回近30天的同步记录信息
getThirtyEtlJobWriteCount: (params, config) => this._getConfig(`/api/Statistics/Metadata/ThirtyEtlJobWriteCount`, "get", params, config), 
// 返回近30天的执行记录信息
getLastThirtyTimesRecord: (params, config) => this._getConfig(`/api/Statistics/CheckTaskExecuteRecord/LastThirtyTimesRecord`, "get", params, config), 
// 返回近30天的执行评分信息
getLastThirtyTimesRaise: (params, config) => this._getConfig(`/api/Statistics/CheckTaskExecuteRecord/LastThirtyTimesRaise`, "get", params, config), 
// 统计元数据数量
getMetadataCount: (params, config) => this._getConfig(`/api/Statistics/Metadata/Count`, "get", params, config), 
// 统计规则数量
getCheckRuleCount: (params, config) => this._getConfig(`/api/Statistics/CheckRule/Count`, "get", params, config), 
// 统计元数据的活跃度
getMetadataActivity: (params, config) => this._getConfig(`/api/Statistics/Metadata/Activity`, "get", params, config), 
// 获取标签列表
getTags: (params, config) => this._getConfig(`/api/Tags`, "get", params, config), 
// 分页获取专题列表
getThemes: (params, config) => this._getConfig(`/api/Themes`, "get", params, config), 
// 新增专题
addTheme: (params, config) => this._getConfig(`/api/Themes`, "post", params, config), 
// 获取专题（支持资源Id）
getThemeById: (params, config) => this._getConfig(`/api/Themes/${params.id}`, "get", params, config), 
// 修改专题
editTheme: (params, config) => this._getConfig(`/api/Themes/${params.id}`, "put", params, config), 
// 删除专题
deleteTheme: (params, config) => this._getConfig(`/api/Themes/${params.id}`, "delete", params, config), 
```

 // biz 
``` js
/**
 * 获取行业分类列表
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getBusinesses(params = {}, config = {}) {
    try {
        const { data } = await this.api.getBusinesses(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getBusinesses', error);
    }
}


/**
 * 查询质检规则
 * @params Name {string} 名称 
 * @params TypeId {string} 类型Id 
 * @params UpdateTimeBegin {string} 更新时间左端点 
 * @params UpdateTimeEnd {string} 更新时间右端点 
 * @params Updater {string} 更新人 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchCheckRule(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchCheckRule(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ searchCheckRule', error);
    }
}


/**
 * 查询质检规则的关联元数据信息
 * @params resourceId {string} resourceId （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCheckRuleRelatedMetadata({ resourceId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCheckRuleRelatedMetadata({resourceId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getCheckRuleRelatedMetadata', error);
    }
}


/**
 * 添加质检规则
 * @params name {string} 名称 （必填）
 * @params creator {string} 创建者 
 * @params updater {string} 更新者 
 * @params note {string} 规则备注 
 * @params ruleConfig {string} 规则配置 （必填）
 * @params ruleTypeId {string} 关联的规则Id （必填）
 * @params relationMetadataIds {array} 关联的元数据列表 
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @resourceId {string} 资源Id
 *    @createTime {string} 创建时间
 *    @updateTime {string} 修改时间
 *    @creator {string} 创建者
 *    @updater {string} 更新者
 *    @note {string} 规则备注
 *    @ruleConfig {string} 规则配置
 *    @ruleTypeId {string} 关联的规则Id
 *    @relationMetadataIds {array} 关联的元数据列表
 *    @checkRuleRelationMetadatas {array} 关联的字段信息
 *    @checkRuleType {object} 校验规则类型
*/
async addCheckRule({ name, ruleConfig, ruleTypeId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addCheckRule({name, ruleConfig, ruleTypeId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ addCheckRule', error);
    }
}


/**
 * 修改质检规则
 * @params resourceId {string} resourceId （必填）
 * @params id {string} Id （必填）
 * @params name {string} 名称 （必填）
 * @params createTime {string} 创建时间 
 * @params updateTime {string} 修改时间 
 * @params creator {string} 创建者 
 * @params updater {string} 更新者 
 * @params note {string} 规则备注 
 * @params ruleConfig {string} 规则配置 （必填）
 * @params ruleTypeId {string} 关联的规则Id （必填）
 * @params relationMetadataIds {array} 关联的元数据列表 
 * @returns
*/
async editCheckRule({ resourceId, id, name, ruleConfig, ruleTypeId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editCheckRule({resourceId, id, name, ruleConfig, ruleTypeId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ editCheckRule', error);
    }
}


/**
 * 删除质检规则
 * @params resourceId {string} resourceId （必填）
 * @returns
*/
async deleteCheckRule(resourceId, config = {}) {
    try {
        const { data } = await this.api.deleteCheckRule({ resourceId }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ deleteCheckRule', error);
    }
}


/**
 * 获取质检规则
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @resourceId {string} 资源Id
 *    @createTime {string} 创建时间
 *    @updateTime {string} 修改时间
 *    @creator {string} 创建者
 *    @updater {string} 更新者
 *    @ruleType {integer} 规则类型
 *    @configTemplate {string} 配置模板
 *    @description {string} 描述
*/
async getCheckRuleType(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCheckRuleType(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getCheckRuleType', error);
    }
}


/**
 * 按照条件查询质检任务列表
 * @params Name {string} 名称 
 * @params MetadataName {string} 元数据名称 
 * @params UpdateTimeBegin {string} 更新时间起点 
 * @params UpdateTimeEnd {string} 更新时间终点 
 * @params ExecuteStatus {undefined} 执行状态 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCheckTaskInfo(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCheckTaskInfo(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getCheckTaskInfo', error);
    }
}


/**
 * 按照Id查询质检任务详情信息
 * @params id {string} id （必填）
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @resourceId {string} 资源ID
 *    @createTime {string} 创建时间
 *    @updateTime {string} 修改时间
 *    @creator {string} 创建者
 *    @updater {string} 更新者
 *    @checkMetadataId {string} 质检元数据对象Id
 *    @checkMetadataName {string} 检测对象名称
 *    @cronExpression {string} Cron表达式
 *    @note {string} 备注
 *    @allCheckDataCount {integer} 检测数据总量
 *    @allCheckErrorDataCount {integer} 检测失败总量
 *    @allCheckCount {integer} 检查数量
 *    @lastCheckDataCount {integer} 上一次检查数量
 *    @checkAvgRating {number} 检测平均评分
 *    @lastCheckTime {string} 最近一次检测时间
 *    @timeConsuming {number} 耗时
 *    @isErrors {boolean} 是否出错
*/
async getCheckTaskInfoById(id, config = {}) {
    try {
        const { data } = await this.api.getCheckTaskInfoById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getCheckTaskInfoById', error);
    }
}


/**
 * 立即执行作业
 * @params id {string} id （必填）
 * @returns
*/
async runCheckTask({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.runCheckTask(params,{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ runCheckTask', error);
    }
}


/**
 * 按照条件查询质检任务执行记录列表
 * @params id {string} id （必填）
 * @params MetadataId {string} 元数据Id 
 * @params StartTimeBegin {string} 开始时间起点 
 * @params StartTimeEnd {string} 开始时间终点 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchCheckTaskInfo({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchCheckTaskInfo({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ searchCheckTaskInfo', error);
    }
}


/**
 * 查询质检任务执行记录单个信息
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 检查记录ID
 *    @checkTaskId {string} 检查任务Id
 *    @checkRowCount {integer} 检查行数
 *    @checkErrorCount {integer} 检查错误数
 *    @checkRating {number} 质检评分
 *    @startTime {string} 开始时间
 *    @endTime {string} 结束时间
 *    @timeConsumer {integer} 耗时
 *    @checkMetadaName {string} 检查的元数据名称
 *    @isErrors {boolean} 是否执行错误
*/
async getCheckTaskExecuteRecordById(id, config = {}) {
    try {
        const { data } = await this.api.getCheckTaskExecuteRecordById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getCheckTaskExecuteRecordById', error);
    }
}


/**
 * 查询质检任务搜索执行记录
 * @params MetadataId {string} 元数据Id 
 * @params StartTimeBegin {string} 开始时间起点 
 * @params StartTimeEnd {string} 开始时间终点 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @id {string} 检查记录ID
 *    @checkTaskId {string} 检查任务Id
 *    @checkRowCount {integer} 检查行数
 *    @checkErrorCount {integer} 检查错误数
 *    @checkRating {number} 质检评分
 *    @startTime {string} 开始时间
 *    @endTime {string} 结束时间
 *    @timeConsumer {integer} 耗时
 *    @checkMetadaName {string} 检查的元数据名称
 *    @isErrors {boolean} 是否执行错误
*/
async getCheckTaskExecuteRecord(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCheckTaskExecuteRecord(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getCheckTaskExecuteRecord', error);
    }
}


/**
 * 分页查询质检任务检测详情出错的数据列表
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCheckTaskExecuteRecordErrors({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCheckTaskExecuteRecordErrors({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getCheckTaskExecuteRecordErrors', error);
    }
}


/**
 * 
 * @params DataSourceName {string} 数据源名称 
 * @params DatabaseName {string} 数据库名称 
 * @params Ip {string} 数据库Ip 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDataSource(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDataSource(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getDataSource', error);
    }
}


/**
 * 添加数据源
 * @params name {string} 数据源名称 （必填）
 * @params host {string} 域名 （必填）
 * @params port {integer} 端口 （必填）
 * @params account {string} 账号 （必填）
 * @params password {string} 密码 （必填）
 * @params schema {string} 模式名 
 * @params dbType {integer} 数据源类型 
 * @params resourceId {string} 数据源id （必填）
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @host {string} 域名
 *    @port {integer} 端口
 *    @account {string} 账号
 *    @password {string} 密码
 *    @schema {string} 模式名
 *    @dbType {integer} 数据源类型
 *    @updateTIme {string} 更新时间
*/
async addDataSource({ name, host, port, account, password, resourceId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addDataSource({name, host, port, account, password, resourceId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ addDataSource', error);
    }
}


/**
 * 修改数据源
 * @params resourceId {string} resourceId （必填）
 * @params name {string} 数据源名称 （必填）
 * @params host {string} 域名 （必填）
 * @params port {integer} 端口 （必填）
 * @params account {string} 账号 （必填）
 * @params password {string} 密码 （必填）
 * @params schema {string} 模式名 
 * @params dbType {integer} 数据源类型 
 * @returns
*/
async editDataSource({ resourceId, name, host, port, account, password  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editDataSource({resourceId, name, host, port, account, password,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ editDataSource', error);
    }
}


/**
 * 删除数据源
 * @params resourceId {string} resourceId （必填）
 * @returns
*/
async deleteDataSource(resourceId, config = {}) {
    try {
        const { data } = await this.api.deleteDataSource({ resourceId }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ deleteDataSource', error);
    }
}


/**
 * 提供数据库信息
 * @params resourceId {string} resourceId （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDbInfosByResourceId(resourceId, config = {}) {
    try {
        const { data } = await this.api.getDbInfosByResourceId({ resourceId }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getDbInfosByResourceId', error);
    }
}


/**
 * 抓取数据源提供的元数据
 * @params resourceId {string} resourceId （必填）
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @code {string} 元数据信息资源编码
 *    @description {string} 元数据描述(摘要)
 *    @keyWords {string} 关键字
 *    @developmentMode {integer} 开放方式
 *    @updateFrequency {integer} 更新频率
 *    @createTime {string} 创建日期
 *    @updateTime {string} 更新日期
 *    @publishTime {string} 发布日期
 *    @resourceType {integer} 资源格式
 *    @administrativeMatters {string} 所属行政事项
 *    @resourceStatus {integer} 资源状态
 *    @language {string} 语种
 *    @onlineResourceLink {string} 在线资源链接
 *    @sourceSystem {string} 来源系统
 *    @spaceScope {string} 空间（地域）范围
 *    @timeScope {string} 时间范围
 *    @openLevel {integer} 开放级别
 *    @dataItemDescriptions {array} 数据项
 *    @displayDataItemDescriptions {array} 可展示字段
 *    @tagIds {array} 标签ID列表
 *    @kettleJobIds {array} 关联的作业
 *    @businessOut {object} 行业数据
 *    @serviceOut {object} 服务数据
 *    @domainOut {object} 领域数据
 *    @departmentOut {object} 部门数据
 *    @districtOut {object} 区域数据
 *    @themeOut {object} 主题数据
 *    @dockInfo {object} 对接信息
 *    @projectInfo {object} 对接项目
 *    @totalDownloads {integer} 下载量
 *    @totalViews {integer} 浏览量
 *    @totalDataItems {integer} 记录条数
 *    @fileSize {integer} 文件大小(bytes)
 *    @fileCount {integer} 文件数量(份)
 *    @dataSize {integer} 数据量(条)
 *    @checkErrorDataCount {integer} 检查错误的数据数量
 *    @dataRating {number} 数据评分
 *    @bindTable {string} 绑定的库表
 *    @bindSchema {string} 绑定的模式
 *    @dasJobName {string} das job name
 *    @dataSourceId {string} 数据源DataSource的id
 *    @selectDataItems {object} 外部数据筛选类型数据
*/
async searchMetadataInfoByResourceId({ resourceId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchMetadataInfoByResourceId({resourceId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ searchMetadataInfoByResourceId', error);
    }
}


/**
 * 分页获取行政部门列表
 * @params keyword {string} 关键词 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDepartments(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDepartments(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getDepartments', error);
    }
}


/**
 * 新增行政部门
 * @params name {string} 名称 （必填）
 * @params parentId {string} 部门父Id 
 * @params description {string} 描述 
 * @params address {string} 地址 
 * @params resourceId {string} 资源Id 
 * @params areaCode {string} 行政区划 
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @parentId {string} 父Id
 *    @description {string} 部门描述
 *    @address {string} 部门地址
 *    @areaCode {string} 行政区划
 *    @totalMetadataCount {integer} 
*/
async addDepartments({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addDepartments({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ addDepartments', error);
    }
}


/**
 * 获取行政部门详情（支持资源Id）
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @parentId {string} 父Id
 *    @description {string} 部门描述
 *    @address {string} 部门地址
 *    @areaCode {string} 行政区划
 *    @totalMetadataCount {integer} 
*/
async getDepartmentById(id, config = {}) {
    try {
        const { data } = await this.api.getDepartmentById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getDepartmentById', error);
    }
}


/**
 * 修改行政部门
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @params parentId {string} 部门父Id 
 * @params description {string} 描述 
 * @params address {string} 地址 
 * @params resourceId {string} 资源Id 
 * @params areaCode {string} 行政区划 
 * @returns
*/
async editDepartment({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editDepartment({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ editDepartment', error);
    }
}


/**
 * 删除行政部门
 * @params id {string} id （必填）
 * @returns
*/
async deleteDepartment(id, config = {}) {
    try {
        const { data } = await this.api.deleteDepartment({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ deleteDepartment', error);
    }
}


/**
 * 批量Ids/ResourceIDs获取部门集合
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params ids {array} Id集合 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDepartmentsByIds(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDepartmentsByIds(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getDepartmentsByIds', error);
    }
}


/**
 * 导入行政部门
 * @params importDepartments {array} 行政部门 （必填）
 * @returns
*/
async importDepartments({ importDepartments  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importDepartments({importDepartments,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ importDepartments', error);
    }
}


/**
 * 获取行政区域列表
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDistricts(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDistricts(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getDistricts', error);
    }
}


/**
 * 分页获取领域列表
 * @params keyword {string} 关键词 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDomains(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDomains(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getDomains', error);
    }
}


/**
 * 新增领域
 * @params name {string} 领域名称 （必填）
 * @params resourceId {string} 资源Id 
 * @params description {string} 描述 
 * @params parentId {string} 父Id 
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @parentId {string} 父主题Id
 *    @description {string} 领域描述
 *    @totalMetadataCount {integer} 
*/
async addDomain({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addDomain({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ addDomain', error);
    }
}


/**
 * 获取领域详情（支持资源Id）
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @parentId {string} 父主题Id
 *    @description {string} 领域描述
 *    @totalMetadataCount {integer} 
*/
async getDomainById(id, config = {}) {
    try {
        const { data } = await this.api.getDomainById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getDomainById', error);
    }
}


/**
 * 修改领域
 * @params id {string} id （必填）
 * @params name {string} 领域名称 （必填）
 * @params resourceId {string} 资源Id 
 * @params description {string} 描述 
 * @params parentId {string} 父Id 
 * @returns
*/
async editDomain({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editDomain({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ editDomain', error);
    }
}


/**
 * 删除领域
 * @params id {string} id （必填）
 * @returns
*/
async deleteDomain(id, config = {}) {
    try {
        const { data } = await this.api.deleteDomain({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ deleteDomain', error);
    }
}


/**
 * 批量Ids/ResourceIDs获取领域集合
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params ids {array} Id集合 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDomainsByIds(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDomainsByIds(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getDomainsByIds', error);
    }
}


/**
 * 导入行政部门
 * @params importDomains {array} 领域 （必填）
 * @returns
*/
async importDomains({ importDomains  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importDomains({importDomains,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ importDomains', error);
    }
}


/**
 * 导出数据需求目录
 * @params projectTagId {string} projectTagId （必填）
 * @returns
*/
async exportDataRequestCategory(projectTagId, config = {}) {
    try {
        const { data } = await this.api.exportDataRequestCategory({ projectTagId }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ exportDataRequestCategory', error);
    }
}


/**
 * 获取ETLJob的实体列表
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getKettleJobs(params = {}, config = {}) {
    try {
        const { data } = await this.api.getKettleJobs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getKettleJobs', error);
    }
}


/**
 * 添加EtlJob
 * @params name {string} 作业名称 
 * @params resourceId {string} 资源Id 
 * @params description {string} 描述 
 * @params cron {string} 执行Cron表达式 
 * @params isRun {boolean} 是否运行 
 * @params tags {array} 标签列表 
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @source {string} 源点
 *    @destination {string} 终点
 *    @description {string} 描述
 *    @createTime {string} 作业创建时间
 *    @updateTime {string} 作业修改时间
 *    @startTime {string} 开始时间
 *    @lastSyncTime {string} 上一次同步时间
 *    @syncMetadata {string} 同步的元数据
 *    @syncMetadataId {string} 同步的元数据ID
 *    @timeConsuming {number} 耗时
 *    @errors {integer} 错误行数
 *    @cronExpression {string} Cron表达式信息
 *    @syncDataCount {integer} 同步数据量
 *    @isRun {boolean} 是否运行
 *    @fileInfos {array} 文件信息列表
 *    @tags {array} 分类标签
*/
async addKettleJobs(params = {}, config = {}) {
    try {
        const { data } = await this.api.addKettleJobs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ addKettleJobs', error);
    }
}


/**
 * 更新EtlJob
 * @params resourceId {string} resourceId （必填）
 * @params name {string} 作业名称 
 * @params resourceId {string} 资源Id 
 * @params description {string} 描述 
 * @params cron {string} 执行Cron表达式 
 * @params isRun {boolean} 是否运行 
 * @params tags {array} 标签列表 
 * @returns
*/
async editKettleJobs({ resourceId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editKettleJobs({resourceId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ editKettleJobs', error);
    }
}


/**
 * 删除EtlJob
 * @params resourceId {string} resourceId （必填）
 * @returns
*/
async deleteKettleJobs(resourceId, config = {}) {
    try {
        const { data } = await this.api.deleteKettleJobs({ resourceId }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ deleteKettleJobs', error);
    }
}


/**
 * 查询ETLJob的实体列表
 * @params KettleJobName {string} 作业名称 
 * @params Source {string} 源端 
 * @params Destination {string} 对端 
 * @params ExecuteStatus {undefined} 执行状态枚举 0=所有 1=返回执行成功的作业数 2=返回执行失败作业数 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchKettleJobs(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchKettleJobs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ searchKettleJobs', error);
    }
}


/**
 * Etl具体信息
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @source {string} 源点
 *    @destination {string} 终点
 *    @description {string} 描述
 *    @createTime {string} 作业创建时间
 *    @updateTime {string} 作业修改时间
 *    @startTime {string} 开始时间
 *    @lastSyncTime {string} 上一次同步时间
 *    @syncMetadata {string} 同步的元数据
 *    @syncMetadataId {string} 同步的元数据ID
 *    @timeConsuming {number} 耗时
 *    @errors {integer} 错误行数
 *    @cronExpression {string} Cron表达式信息
 *    @syncDataCount {integer} 同步数据量
 *    @isRun {boolean} 是否运行
 *    @fileInfos {array} 文件信息列表
 *    @tags {array} 分类标签
 *    @executeCount {integer} 执行数量
 *    @creator {string} 创建者
 *    @updater {string} 更新者
 *    @syncAllDataCount {integer} 总数据量
*/
async getKettleJobById(id, config = {}) {
    try {
        const { data } = await this.api.getKettleJobById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getKettleJobById', error);
    }
}


/**
 * 返回执行记录列表
 * @params id {string} id （必填）
 * @params StartTimeBegin {string} 开始时间起始点 
 * @params StartTimeEnd {string} 开始时间终点 
 * @params ExecuteStatus {undefined} 执行状态枚举 0=所有 1=返回执行成功的作业数 2=返回执行失败作业数 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getKettleJobRecords({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getKettleJobRecords({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getKettleJobRecords', error);
    }
}


/**
 * 根据元数据ID返回ETL执行记录
 * @params MetadataId {string} 元数据id 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getKettleJobRecordsByMetadataId(params = {}, config = {}) {
    try {
        const { data } = await this.api.getKettleJobRecordsByMetadataId(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getKettleJobRecordsByMetadataId', error);
    }
}


/**
 * 获取ETL作业的标签
 * @returns
 *    @tags {array} 标签列表
*/
async getTags(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTags(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getTags', error);
    }
}


/**
 * 导入kettle
 * @returns
*/
async importKettleJobs(params = {}, config = {}) {
    try {
        const { data } = await this.api.importKettleJobs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ importKettleJobs', error);
    }
}


/**
 * 导出所有资源库的json数据
 * @params fileName {string} 导出文件名 
 * @params tags {array} 导出标签 （必填）
 * @returns
*/
async exportKettleJobs({ tags  , ...params}, config = {}) {
    try {
        const { data } = await this.api.exportKettleJobs({tags,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ exportKettleJobs', error);
    }
}


/**
 * 运行作业
 * @params id {string} id （必填）
 * @returns
*/
async runJobs({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.runJobs({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ runJobs', error);
    }
}


/**
 * 停止作业
 * @params id {string} id （必填）
 * @returns
*/
async stopJobs({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.stopJobs({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ stopJobs', error);
    }
}


/**
 * 立即执行作业
 * @params id {string} id （必填）
 * @returns
*/
async singleExecJobs({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.singleExecJobs(params,{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ singleExecJobs', error);
    }
}


/**
 * 导出某个ETL作业的前10条执行日志记录
 * @params id {string} id （必填）
 * @returns
*/
async exportTop10Jobs(id, config = {}) {
    try {
        const { data } = await this.api.exportTop10Jobs({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ exportTop10Jobs', error);
    }
}


/**
 * 导出ETL执行记录的日志记录
 * @params id {string} id （必填）
 * @returns
*/
async exportETLJobRecords(id, config = {}) {
    try {
        const { data } = await this.api.exportETLJobRecords({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ exportETLJobRecords', error);
    }
}


/**
 * 获取元数据详情
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @code {string} 元数据信息资源编码
 *    @description {string} 元数据描述(摘要)
 *    @keyWords {string} 关键字
 *    @developmentMode {integer} 开放方式
 *    @updateFrequency {integer} 更新频率
 *    @createTime {string} 创建日期
 *    @updateTime {string} 更新日期
 *    @publishTime {string} 发布日期
 *    @resourceType {integer} 资源格式
 *    @administrativeMatters {string} 所属行政事项
 *    @resourceStatus {integer} 资源状态
 *    @language {string} 语种
 *    @onlineResourceLink {string} 在线资源链接
 *    @sourceSystem {string} 来源系统
 *    @spaceScope {string} 空间（地域）范围
 *    @timeScope {string} 时间范围
 *    @openLevel {integer} 开放级别
 *    @dataItemDescriptions {array} 数据项
 *    @displayDataItemDescriptions {array} 可展示字段
 *    @tagIds {array} 标签ID列表
 *    @kettleJobIds {array} 关联的作业
 *    @businessOut {object} 行业数据
 *    @serviceOut {object} 服务数据
 *    @domainOut {object} 领域数据
 *    @departmentOut {object} 部门数据
 *    @districtOut {object} 区域数据
 *    @themeOut {object} 主题数据
 *    @dockInfo {object} 对接信息
 *    @projectInfo {object} 对接项目
 *    @totalDownloads {integer} 下载量
 *    @totalViews {integer} 浏览量
 *    @totalDataItems {integer} 记录条数
 *    @fileSize {integer} 文件大小(bytes)
 *    @fileCount {integer} 文件数量(份)
 *    @dataSize {integer} 数据量(条)
 *    @checkErrorDataCount {integer} 检查错误的数据数量
 *    @dataRating {number} 数据评分
 *    @bindTable {string} 绑定的库表
 *    @bindSchema {string} 绑定的模式
 *    @dasJobName {string} das job name
 *    @dataSourceId {string} 数据源DataSource的id
 *    @selectDataItems {object} 外部数据筛选类型数据
*/
async getMetadataById(id, config = {}) {
    try {
        const { data } = await this.api.getMetadataById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getMetadataById', error);
    }
}


/**
 * 修改元数据
 * @params id {string} id （必填）
 * @params name {string} 名称 
 * @params resourceId {string} 资源id 
 * @params parentId {string} 父元数据Id 
 * @params code {string} 元数据信息资源编码 
 * @params description {string} 元数据描述(摘要) 
 * @params keyWords {string} 关键字 
 * @params developmentMode {integer} 开放方式 
 * @params updateFrequency {integer} 更新频率 
 * @params createTime {string} 创建日期 
 * @params updateTime {string} 更新日期 
 * @params publishTime {string} 发布日期 
 * @params resourceType {integer} 资源格式 
 * @params administrativeMatters {string} 所属行政事项 
 * @params resourceStatus {integer} 资源状态 
 * @params language {string} 语种 
 * @params onlineResourceLink {string} 在线资源链接 
 * @params sourceSystem {string} 来源系统 
 * @params spaceScope {string} 空间（地域）范围 
 * @params timeScope {string} 时间范围 
 * @params openLevel {integer} 开放级别 
 * @params dataItemDescriptions {array} 数据项 
 * @params displayDataItemDescriptions {array} 可展示字段 
 * @params tagIds {array} 标签ID列表 
 * @params kettleJobIds {array} 关联的作业 
 * @params businessResourceId {string} 行业分类资源Id 
 * @params serviceResourceId {string} 服务分类资源Id 
 * @params domainResourceId {string} 数据领域资源Id 
 * @params departmentResourceId {string} 行政单位资源Id 
 * @params districtResourceId {string} 行政区域资源Id 
 * @params themeResourceId {string} 主题分类资源Id 
 * @params dockInfo {object} 对接信息 
 * @params projectInfo {object} 对接项目 
 * @params totalDownloads {integer} 下载量 
 * @params totalViews {integer} 浏览量 
 * @params totalDataItems {integer} 记录条数 
 * @params fileSize {integer} 文件大小(bytes) 
 * @params fileCount {integer} 文件数量(份) 
 * @params dataSize {integer} 数据量(条) 
 * @params checkErrorDataCount {integer} 检查错误的数据数量 
 * @params dataRating {number} 数据评分 
 * @params bindTable {string} 绑定的库表 
 * @params bindSchema {string} 绑定的模式 
 * @params dasJobName {string} das job name 
 * @params dataSourceId {string} 数据源DataSource的id 
 * @returns
*/
async editMetadata({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editMetadata({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ editMetadata', error);
    }
}


/**
 * 删除元数据
 * @params id {string} id （必填）
 * @returns
*/
async deleteMetadata(id, config = {}) {
    try {
        const { data } = await this.api.deleteMetadata({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ deleteMetadata', error);
    }
}


/**
 * 元数据对接统计
 * @returns
 *    @dockInfoItems {object} 元数据对接状态
*/
async getMetadataDockInfo(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMetadataDockInfo(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getMetadataDockInfo', error);
    }
}


/**
 * 根据（领域、主题、行业、服务、部门、行政区域）查询元数据（分页）
 * @params TagIds {array} 标签ID列表 
 * @params KeyWord {string} 关键字 
 * @params DomainResourceId {string} 领域 
 * @params ThemeResourceId {string} 主题分类 
 * @params BusinessResourceId {string} 行业分类 
 * @params DepartmentResourceId {string} 行政单位 
 * @params DistrictResourceId {string} 行政区域 
 * @params ServiceResourceId {string} 服务分类 
 * @params UpdateTimeBegin {string} 更新时间起始点 
 * @params UpdateTimeEnd {string} 更新时间终点 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMetadata(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMetadata(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getMetadata', error);
    }
}


/**
 * 添加元数据
 * @params name {string} 名称 
 * @params resourceId {string} 资源id 
 * @params parentId {string} 父元数据Id 
 * @params code {string} 元数据信息资源编码 
 * @params description {string} 元数据描述(摘要) 
 * @params keyWords {string} 关键字 
 * @params developmentMode {integer} 开放方式 
 * @params updateFrequency {integer} 更新频率 
 * @params createTime {string} 创建日期 
 * @params updateTime {string} 更新日期 
 * @params publishTime {string} 发布日期 
 * @params resourceType {integer} 资源格式 
 * @params administrativeMatters {string} 所属行政事项 
 * @params resourceStatus {integer} 资源状态 
 * @params language {string} 语种 
 * @params onlineResourceLink {string} 在线资源链接 
 * @params sourceSystem {string} 来源系统 
 * @params spaceScope {string} 空间（地域）范围 
 * @params timeScope {string} 时间范围 
 * @params openLevel {integer} 开放级别 
 * @params dataItemDescriptions {array} 数据项 
 * @params displayDataItemDescriptions {array} 可展示字段 
 * @params tagIds {array} 标签ID列表 
 * @params kettleJobIds {array} 关联的作业 
 * @params businessResourceId {string} 行业分类资源Id 
 * @params serviceResourceId {string} 服务分类资源Id 
 * @params domainResourceId {string} 数据领域资源Id 
 * @params departmentResourceId {string} 行政单位资源Id 
 * @params districtResourceId {string} 行政区域资源Id 
 * @params themeResourceId {string} 主题分类资源Id 
 * @params dockInfo {object} 对接信息 
 * @params projectInfo {object} 对接项目 
 * @params totalDownloads {integer} 下载量 
 * @params totalViews {integer} 浏览量 
 * @params totalDataItems {integer} 记录条数 
 * @params fileSize {integer} 文件大小(bytes) 
 * @params fileCount {integer} 文件数量(份) 
 * @params dataSize {integer} 数据量(条) 
 * @params checkErrorDataCount {integer} 检查错误的数据数量 
 * @params dataRating {number} 数据评分 
 * @params bindTable {string} 绑定的库表 
 * @params bindSchema {string} 绑定的模式 
 * @params dasJobName {string} das job name 
 * @params dataSourceId {string} 数据源DataSource的id 
 * @returns
*/
async addMetadata(params = {}, config = {}) {
    try {
        const { data } = await this.api.addMetadata(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ addMetadata', error);
    }
}


/**
 * 根据（领域、主题、行业、服务、部门、行政区域、标签）查询元数据
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params keyWord {string} 关键字 
 * @params domainResourceId {string} 领域 
 * @params themeResourceId {string} 主题分类 
 * @params businessResourceId {string} 行业分类 
 * @params departmentResourceId {string} 行政单位 
 * @params districtResourceId {string} 行政区域 
 * @params serviceResourceId {string} 服务分类 
 * @params updateTimeBegin {string} 更新时间起始点 
 * @params updateTimeEnd {string} 更新时间终点 
 * @params tagIds {array} 标签ID列表 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchMetadata(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchMetadata(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ searchMetadata', error);
    }
}


/**
 * 更新元数据的统计信息
 * @returns
*/
async updateMetadataCountInfo(params = {}, config = {}) {
    try {
        const { data } = await this.api.updateMetadataCountInfo(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ updateMetadataCountInfo', error);
    }
}


/**
 * 分页获取项目列表
 * @params keyword {string} 关键词 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getProjects(params = {}, config = {}) {
    try {
        const { data } = await this.api.getProjects(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getProjects', error);
    }
}


/**
 * 新增项目
 * @params name {string} 项目名称 （必填）
 * @params resourceId {string} 资源Id 
 * @params description {string} 描述 
 * @params parentId {string} 父Id 
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @parentId {string} 父Id
 *    @totalMetadataCount {integer} 元数据统计总数
 *    @description {string} 项目描述
 *    @themes {array} 项目专题列表
*/
async addProject({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addProject({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ addProject', error);
    }
}


/**
 * 获取项目（支持资源Id）
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @parentId {string} 父Id
 *    @totalMetadataCount {integer} 元数据统计总数
 *    @description {string} 项目描述
 *    @themes {array} 项目专题列表
*/
async getProjectById(id, config = {}) {
    try {
        const { data } = await this.api.getProjectById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getProjectById', error);
    }
}


/**
 * 修改项目
 * @params id {string} id （必填）
 * @params name {string} 项目名称 （必填）
 * @params resourceId {string} 资源Id 
 * @params description {string} 描述 
 * @params parentId {string} 父Id 
 * @returns
*/
async editProject({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editProject({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ editProject', error);
    }
}


/**
 * 删除项目
 * @params id {string} id （必填）
 * @returns
*/
async deleteProject(id, config = {}) {
    try {
        const { data } = await this.api.deleteProject({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ deleteProject', error);
    }
}


/**
 * 获取项目详情（支持资源Id）
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @themes {array} 项目专题列表
 *    @parentId {string} 父Id
 *    @description {string} 项目描述
*/
async getProjectDetailById(id, config = {}) {
    try {
        const { data } = await this.api.getProjectDetailById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getProjectDetailById', error);
    }
}


/**
 * 导入项目专题
 * @params importProjects {array} 项目 （必填）
 * @returns
*/
async importProjects({ importProjects  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importProjects({importProjects,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ importProjects', error);
    }
}


/**
 * 根据项目Id创建模板资源库
 * @params id {string} id （必填）
 * @returns
*/
async addResourceDbsByProjectId({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addResourceDbsByProjectId({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ addResourceDbsByProjectId', error);
    }
}


/**
 * 查询资源库树
 * @params ProductId {string} ProductId 
 * @returns
 *    @id {string} 对应数据类型的主键id
 *    @name {string} 节点名称
 *    @parentId {string} 父节点id，为空时表示根节点
 *    @index {integer} 排序编号
 *    @dataType {integer} 数据类型，1:资源库分组，2：资源库  3：元数据分组 4：元数据
 *    @nodeType {integer} 节点类型，0：非叶子节点，1：叶子节点
 *    @resourceId {string} 数据源id
 *    @number {string} GDS图层id信息
 *    @productId {string} ProductId
*/
async getResourceDbTree(params = {}, config = {}) {
    try {
        const { data } = await this.api.getResourceDbTree(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getResourceDbTree', error);
    }
}


/**
 * 查询符合条件的资源库
 * @params keyword {string} 模糊匹配关键字 
 * @params SelectDataItems {object} 查询条件 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getResourceDb(params = {}, config = {}) {
    try {
        const { data } = await this.api.getResourceDb(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getResourceDb', error);
    }
}


/**
 * 添加资源库
 * @params name {string} 名称 
 * @params resourceId {string}  
 * @params parentId {string} 父Id 
 * @params resourceDbType {integer} 资源类型 
 * @params relationship {object} 元数据信息 
 * @params extension {string} 拓展信息 
 * @params productId {string} ProductId 
 * @returns
*/
async addResourceDb(params = {}, config = {}) {
    try {
        const { data } = await this.api.addResourceDb(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ addResourceDb', error);
    }
}


/**
 * 查询资源库详情
 * @params id {string} id （必填）
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @resourceId {string} 资源id（数据同步使用）
 *    @parentName {string} 父名称
 *    @parentId {string} 父Id
 *    @resourceDbType {integer} 资源类型
 *    @relationship {object} 元数据信息
 *    @extension {string} 拓展信息(资源库的筛选拓展信息)
 *    @productId {string} ProductId
*/
async getResourceDbById(id, config = {}) {
    try {
        const { data } = await this.api.getResourceDbById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getResourceDbById', error);
    }
}


/**
 * 修改资源库
 * @params id {string} id （必填）
 * @params name {string} 名称 
 * @params resourceId {string}  
 * @params parentId {string} 父Id 
 * @params resourceDbType {integer} 资源类型 
 * @params relationship {object} 元数据信息 
 * @params extension {string} 拓展信息 
 * @params productId {string} ProductId 
 * @returns
*/
async editResourceDb({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editResourceDb({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ editResourceDb', error);
    }
}


/**
 * 删除资源库
 * @params id {string} id （必填）
 * @returns
*/
async deleteResourceDb(id, config = {}) {
    try {
        const { data } = await this.api.deleteResourceDb({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ deleteResourceDb', error);
    }
}


/**
 * 批量Ids/ResourceIDs/Numbers获取资源库集合（带元数据和数据源,ps:Number为图层LayerId）
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params ids {array} Id集合 
 * @params productId {string} 项目Id 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getResourceDbsByIds(params = {}, config = {}) {
    try {
        const { data } = await this.api.getResourceDbsByIds(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getResourceDbsByIds', error);
    }
}


/**
 * 导入资源库（带元数据和数据源）
 * @params importResourceDbs {array} 导入资源库列表 
 * @returns
*/
async importResourceDbs(params = {}, config = {}) {
    try {
        const { data } = await this.api.importResourceDbs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ importResourceDbs', error);
    }
}


/**
 * 批量添加资源库
 * @returns
*/
async batchAddResourceDb(params = {}, config = {}) {
    try {
        const { data } = await this.api.batchAddResourceDb(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ batchAddResourceDb', error);
    }
}


/**
 * 查询资源库关联的元数据
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @code {string} 元数据信息资源编码
 *    @description {string} 元数据描述(摘要)
 *    @keyWords {string} 关键字
 *    @developmentMode {integer} 开放方式
 *    @updateFrequency {integer} 更新频率
 *    @createTime {string} 创建日期
 *    @updateTime {string} 更新日期
 *    @publishTime {string} 发布日期
 *    @resourceType {integer} 资源格式
 *    @administrativeMatters {string} 所属行政事项
 *    @resourceStatus {integer} 资源状态
 *    @language {string} 语种
 *    @onlineResourceLink {string} 在线资源链接
 *    @sourceSystem {string} 来源系统
 *    @spaceScope {string} 空间（地域）范围
 *    @timeScope {string} 时间范围
 *    @openLevel {integer} 开放级别
 *    @dataItemDescriptions {array} 数据项
 *    @displayDataItemDescriptions {array} 可展示字段
 *    @tagIds {array} 标签ID列表
 *    @kettleJobIds {array} 关联的作业
 *    @businessOut {object} 行业数据
 *    @serviceOut {object} 服务数据
 *    @domainOut {object} 领域数据
 *    @departmentOut {object} 部门数据
 *    @districtOut {object} 区域数据
 *    @themeOut {object} 主题数据
 *    @dockInfo {object} 对接信息
 *    @projectInfo {object} 对接项目
 *    @totalDownloads {integer} 下载量
 *    @totalViews {integer} 浏览量
 *    @totalDataItems {integer} 记录条数
 *    @fileSize {integer} 文件大小(bytes)
 *    @fileCount {integer} 文件数量(份)
 *    @dataSize {integer} 数据量(条)
 *    @checkErrorDataCount {integer} 检查错误的数据数量
 *    @dataRating {number} 数据评分
 *    @bindTable {string} 绑定的库表
 *    @bindSchema {string} 绑定的模式
 *    @dasJobName {string} das job name
 *    @dataSourceId {string} 数据源DataSource的id
 *    @selectDataItems {object} 外部数据筛选类型数据
*/
async getMetadataByResourceDb(id, config = {}) {
    try {
        const { data } = await this.api.getMetadataByResourceDb({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getMetadataByResourceDb', error);
    }
}


/**
 * 查询外部数据
 * @params id {string} id （必填）
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params keyword {string} 模糊匹配关键字 
 * @params selectDataItems {object} 查询条件 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchExternalResource({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchExternalResource({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ searchExternalResource', error);
    }
}


/**
 * 统计资源库子项对应的外部数据总量
 * @params id {string} id （必填）
 * @params areaCode {string} 行政区域码 
 * @returns
 *    @id {string} 资源库id
 *    @parentId {string} 父id
 *    @name {string} 资源名称
 *    @amount {integer} 统计数量
 *    @isLeaf {boolean} 是否为叶子节点
*/
async getExternalResourceAmount({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getExternalResourceAmount({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getExternalResourceAmount', error);
    }
}


/**
 * 新增外部数据
 * @params id {string} id （必填）
 * @params externalResourceObject {object} 外部资源数据项(key，value)集合(修改时需带主键信息) （必填）
 * @returns
*/
async addExternalResource({ id, externalResourceObject  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addExternalResource({id, externalResourceObject,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ addExternalResource', error);
    }
}


/**
 * 修改外部数据
 * @params id {string} id （必填）
 * @params externalResourceObject {object} 外部资源数据项(key，value)集合(修改时需带主键信息) （必填）
 * @returns
*/
async editExternalResource({ id, externalResourceObject  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editExternalResource({id, externalResourceObject,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ editExternalResource', error);
    }
}


/**
 * 删除外部数据
 * @params id {string} id （必填）
 * @params primaryKey {string} 主键key （必填）
 * @params primaryValue {string} 主键value （必填）
 * @returns
*/
async deleteExternalResource({ id, primaryKey, primaryValue  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteExternalResource({id, primaryKey, primaryValue,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ deleteExternalResource', error);
    }
}


/**
 * 批量删除外部数据
 * @params id {string} id （必填）
 * @params primaryKey {string} 主键key （必填）
 * @params primaryValues {array} 主键值集合 （必填）
 * @returns
*/
async batchDeleteExternalResource({ id, primaryKey, primaryValues  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchDeleteExternalResource({id, primaryKey, primaryValues,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ batchDeleteExternalResource', error);
    }
}


/**
 * 获取服务分类列表
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getServices(params = {}, config = {}) {
    try {
        const { data } = await this.api.getServices(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getServices', error);
    }
}


/**
 * 返回近30天的同步记录信息
 * @params id {string} id （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getThirtyEtlJobWriteCount(id, config = {}) {
    try {
        const { data } = await this.api.getThirtyEtlJobWriteCount({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getThirtyEtlJobWriteCount', error);
    }
}


/**
 * 返回近30天的执行记录信息
 * @params id {string} id 
 * @returns
 *    @source {array} 字段信息
*/
async getLastThirtyTimesRecord(params = {}, config = {}) {
    try {
        const { data } = await this.api.getLastThirtyTimesRecord(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getLastThirtyTimesRecord', error);
    }
}


/**
 * 返回近30天的执行评分信息
 * @params id {string} id 
 * @returns
 *    @source {array} 字段信息
*/
async getLastThirtyTimesRaise(params = {}, config = {}) {
    try {
        const { data } = await this.api.getLastThirtyTimesRaise(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getLastThirtyTimesRaise', error);
    }
}


/**
 * 统计元数据数量
 * @returns
 *    @categories {integer} 总数
 *    @yesterday {integer} 昨天的总数
 *    @today {integer} 今天的总数
*/
async getMetadataCount(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMetadataCount(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getMetadataCount', error);
    }
}


/**
 * 统计规则数量
 * @returns
 *    @categories {integer} 总数
 *    @yesterday {integer} 昨天的总数
 *    @today {integer} 今天的总数
*/
async getCheckRuleCount(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCheckRuleCount(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getCheckRuleCount', error);
    }
}


/**
 * 统计元数据的活跃度
 * @params timeType {undefined}  （必填）
 * @returns
 *    @category {string} 元数据名称
 *    @value {undefined} 
*/
async getMetadataActivity(timeType, config = {}) {
    try {
        const { data } = await this.api.getMetadataActivity({ timeType }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getMetadataActivity', error);
    }
}


/**
 * 获取标签列表
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTags(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTags(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getTags', error);
    }
}


/**
 * 分页获取专题列表
 * @params keyword {string} 关键词 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getThemes(params = {}, config = {}) {
    try {
        const { data } = await this.api.getThemes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getThemes', error);
    }
}


/**
 * 新增专题
 * @params name {string} 专题名称 （必填）
 * @params resourceId {string} 资源Id 
 * @params description {string} 描述 
 * @params parentId {string} 父Id 
 * @params code {string} 主题编码 
 * @params projectId {string} 所属项目Id 
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @parentId {string} 父主题Id
 *    @description {string} 主题描述
 *    @code {string} 主题编码
 *    @totalMetadataCount {integer} 
 *    @projectId {string} 所属项目Id
*/
async addTheme({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addTheme({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ addTheme', error);
    }
}


/**
 * 获取专题（支持资源Id）
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @resourceId {string} 
 *    @parentId {string} 父主题Id
 *    @description {string} 主题描述
 *    @code {string} 主题编码
 *    @totalMetadataCount {integer} 
 *    @projectId {string} 所属项目Id
*/
async getThemeById(id, config = {}) {
    try {
        const { data } = await this.api.getThemeById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ getThemeById', error);
    }
}


/**
 * 修改专题
 * @params id {string} id （必填）
 * @params name {string} 专题名称 （必填）
 * @params resourceId {string} 资源Id 
 * @params description {string} 描述 
 * @params parentId {string} 父Id 
 * @params code {string} 主题编码 
 * @params projectId {string} 所属项目Id 
 * @returns
*/
async editTheme({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editTheme({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ editTheme', error);
    }
}


/**
 * 删除专题
 * @params id {string} id （必填）
 * @returns
*/
async deleteTheme(id, config = {}) {
    try {
        const { data } = await this.api.deleteTheme({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('dcsBiz ~ deleteTheme', error);
    }
}

```

 