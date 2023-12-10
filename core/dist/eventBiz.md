// api 
``` js
// 获取事件关联的通话数据
getCommunications: (params, config) => this._getConfig(`/api/events/${params.eventId}/communications`, "get", params, config), 
// 关联通话数据
connectCommunications: (params, config) => this._getConfig(`/api/events/${params.eventId}/communications`, "post", params, config), 
// 根据Id获取通话项
getCommunicationsById: (params, config) => this._getConfig(`/api/events/${params.eventId}/communications/${params.id}`, "get", params, config), 
// 取消关联
cancelConnectCommunications: (params, config) => this._getConfig(`/api/events/${params.eventId}/communications/${params.id}`, "delete", params, config), 
// 获取事件关联的标绘数据
getDraws: (params, config) => this._getConfig(`/api/events/${params.eventId}/draws`, "get", params, config), 
// 关联标绘数据
connectDraws: (params, config) => this._getConfig(`/api/events/${params.eventId}/draws`, "post", params, config), 
// 根据Id获取标绘项
getDrawsById: (params, config) => this._getConfig(`/api/events/${params.eventId}/draws/${params.id}`, "get", params, config), 
// 取消关联
cancelConnectDraws: (params, config) => this._getConfig(`/api/events/${params.eventId}/draws/${params.id}`, "delete", params, config), 
// 根据事件 Id 获取对应的事件日志
getEventLogs: (params, config) => this._getConfig(`/api/events/${params.eventId}/logs`, "get", params, config), 
// 获取事件关联的传真数据
getFaxes: (params, config) => this._getConfig(`/api/events/${params.eventId}/faxes`, "get", params, config), 
// 关联传真数据
connectFaxes: (params, config) => this._getConfig(`/api/events/${params.eventId}/faxes`, "post", params, config), 
// 根据Id获取传真项
getFaxesById: (params, config) => this._getConfig(`/api/events/${params.eventId}/faxes/${params.id}`, "get", params, config), 
// 取消关联
cancelConnectFaxes: (params, config) => this._getConfig(`/api/events/${params.eventId}/faxes/${params.id}`, "delete", params, config), 
// 获取事件关联的文件数据
getFiles: (params, config) => this._getConfig(`/api/events/${params.eventId}/files`, "get", params, config), 
// 关联文件数据
connectFiles: (params, config) => this._getConfig(`/api/events/${params.eventId}/files`, "post", params, config), 
// 根据Id获取文件项
getFilesById: (params, config) => this._getConfig(`/api/events/${params.eventId}/files/${params.id}`, "get", params, config), 
// 取消关联
cancelConnectFiles: (params, config) => this._getConfig(`/api/events/${params.eventId}/files/${params.id}`, "delete", params, config), 
// 获取事件关联的拍传数据
getMultimediatransfers: (params, config) => this._getConfig(`/api/events/${params.eventId}/multimediatransfers`, "get", params, config), 
// 关联拍传数据
connectMultimediatransfers: (params, config) => this._getConfig(`/api/events/${params.eventId}/multimediatransfers`, "post", params, config), 
// 根据Id获取拍传项
getMultimediatransfersById: (params, config) => this._getConfig(`/api/events/${params.eventId}/multimediatransfers/${params.id}`, "get", params, config), 
// 取消关联
cancelConnectMultimediatransfers: (params, config) => this._getConfig(`/api/events/${params.eventId}/multimediatransfers/${params.id}`, "delete", params, config), 
// 获取事件关联的图片数据
getPictures: (params, config) => this._getConfig(`/api/events/${params.eventId}/pictures`, "get", params, config), 
// 关联图片数据
connectPictures: (params, config) => this._getConfig(`/api/events/${params.eventId}/pictures`, "post", params, config), 
// 根据Id获取图片项
getPicturesById: (params, config) => this._getConfig(`/api/events/${params.eventId}/pictures/${params.id}`, "get", params, config), 
// 取消关联
cancelConnectPictures: (params, config) => this._getConfig(`/api/events/${params.eventId}/pictures/${params.id}`, "delete", params, config), 
// 获取事件关联的短信消息数据
getTextmessages: (params, config) => this._getConfig(`/api/events/${params.eventId}/textmessages`, "get", params, config), 
// 关联短信消息数据
connectTextmessages: (params, config) => this._getConfig(`/api/events/${params.eventId}/textmessages`, "post", params, config), 
// 根据Id获取短信消息项
getTextmessagesById: (params, config) => this._getConfig(`/api/events/${params.eventId}/textmessages/${params.id}`, "get", params, config), 
// 取消关联
cancelConnectTextmessages: (params, config) => this._getConfig(`/api/events/${params.eventId}/textmessages/${params.id}`, "delete", params, config), 
// 获取事件关联的视频数据
getVideos: (params, config) => this._getConfig(`/api/events/${params.eventId}/videos`, "get", params, config), 
// 关联视频数据
connectVideos: (params, config) => this._getConfig(`/api/events/${params.eventId}/videos`, "post", params, config), 
// 根据Id获取视频项
getVideosById: (params, config) => this._getConfig(`/api/events/${params.eventId}/videos/${params.id}`, "get", params, config), 
// 取消关联
cancelConnectVideos: (params, config) => this._getConfig(`/api/events/${params.eventId}/videos/${params.id}`, "delete", params, config), 
// 创建事件反馈接口
addEventFeedBacks: (params, config) => this._getConfig(`/api/EventFeedbacks`, "post", params, config), 
// 获取指定事件的反馈的接口
getEventFeedBackByEventId: (params, config) => this._getConfig(`/api/EventFeedbacks/${params.eventId}/feedback`, "get", params, config), 
// 获取指定反馈的接口
getEventFeedBackById: (params, config) => this._getConfig(`/api/EventFeedbacks/${params.id}`, "get", params, config), 
// 获取符合查询条件的事件实体
getEvents: (params, config) => this._getConfig(`/api/Events`, "get", params, config), 
// 创建事件实体
addEvents: (params, config) => this._getConfig(`/api/Events`, "post", params, config), 
// 获取指定id的事件实体详情
getEventsById: (params, config) => this._getConfig(`/api/Events/${params.id}`, "get", params, config), 
// 更新事件实体
updateEvents: (params, config) => this._getConfig(`/api/Events/${params.id}`, "put", params, config), 
// 删除事件实体
deleteEvents: (params, config) => this._getConfig(`/api/Events/${params.id}`, "delete", params, config), 
// 获取状态为`未开始`、`处理中`的事件实体
getRunningEvents: (params, config) => this._getConfig(`/api/Events/running`, "get", params, config), 
// 获取状态为`已结束`的事件实体
getEventsHistory: (params, config) => this._getConfig(`/api/Events/history`, "get", params, config), 
// 获取自身相关事件
getOwnerEvents: (params, config) => this._getConfig(`/api/Events/owner`, "get", params, config), 
// 更新事件实体的优先级
updateEventsPriority: (params, config) => this._getConfig(`/api/Events/${params.id}/priority`, "put", params, config), 
// 更新事件实体的状态
updateEventsState: (params, config) => this._getConfig(`/api/Events/${params.id}/state`, "put", params, config), 
// 修改事件预案接口
updateEventPreplan: (params, config) => this._getConfig(`/api/Events/${params.id}/preplan`, "put", params, config), 
// 导入事件
importEvents: (params, config) => this._getConfig(`/api/Events/import`, "post", params, config), 
// 通过 Id 获取事件类型组
getEventTypeGroupsById: (params, config) => this._getConfig(`/api/EventTypeGroups/${params.id}`, "get", params, config), 
// 更新事件类型组
updateEventTypeGroups: (params, config) => this._getConfig(`/api/EventTypeGroups/${params.id}`, "put", params, config), 
// 删除事件类型组
deleteEventTypeGroups: (params, config) => this._getConfig(`/api/EventTypeGroups/${params.id}`, "delete", params, config), 
// 获取所有事件类型组(可通过参数只获取根事件类型组)
getEventTypeGroups: (params, config) => this._getConfig(`/api/EventTypeGroups`, "get", params, config), 
// 创建事件类型组
addEventTypeGroups: (params, config) => this._getConfig(`/api/EventTypeGroups`, "post", params, config), 
// 通过父级 Id 获取子事件任务组
getEventTypeGroupsChildren: (params, config) => this._getConfig(`/api/EventTypeGroups/${params.id}/children`, "get", params, config), 
// 创建子事件类型组
addEventTypeGroupsChildren: (params, config) => this._getConfig(`/api/EventTypeGroups/parent/${params.id}`, "post", params, config), 
// 根据事件类型组id分页获取事件类型
getEventTypesByGroupId: (params, config) => this._getConfig(`/api/EventTypeGroups/${params.id}/EventTypes`, "get", params, config), 
// 用户可根据类型组名称，事件类型搜索对应的事件类型组和事件类型
searchEventTypeGroups: (params, config) => this._getConfig(`/api/EventTypeGroups/search`, "get", params, config), 
// 导入事件类型组
importEventTypeGroups: (params, config) => this._getConfig(`/api/EventTypeGroups/import`, "post", params, config), 
// 获取事件类型子组【父级ID不传默认查询根级组】
getChildEventTypeGroups: (params, config) => this._getConfig(`/api/EventTypeGroups/children`, "post", params, config), 
// 将事件类型ID集合合并为对应的事件类型组
mergeEventTypeGroup: (params, config) => this._getConfig(`/api/EventTypeGroups/children/mergence`, "post", params, config), 
// 批量事件类型组ID获取事件类型【包含下级事件类型】
getEventTypeGroupsByIds: (params, config) => this._getConfig(`/api/EventTypeGroups/subordinates`, "post", params, config), 
// 获取所有事件类型
getEventTypes: (params, config) => this._getConfig(`/api/EventTypes`, "get", params, config), 
// 根据事件类型 Id 获取事件类型
getEventTypesById: (params, config) => this._getConfig(`/api/EventTypes/${params.id}`, "get", params, config), 
// 更新事件类型
updateEventTypes: (params, config) => this._getConfig(`/api/EventTypes/${params.id}`, "put", params, config), 
// 删除事件类型
deleteEventTypes: (params, config) => this._getConfig(`/api/EventTypes/${params.id}`, "delete", params, config), 
// 获取事件类型的组路径
getEventTypePath: (params, config) => this._getConfig(`/api/EventTypes/${params.id}/path`, "get", params, config), 
// 批量Ids/ResourceIDs获取事件类型集合
searchEventTypes: (params, config) => this._getConfig(`/api/EventTypes/batch`, "post", params, config), 
// 导入事件类型
importEventTypes: (params, config) => this._getConfig(`/api/EventTypes/import`, "post", params, config), 
// 创建事件类型
addEventTypes: (params, config) => this._getConfig(`/api/EventTypeGroups/${params.eventTypeGroupId}/EventTypes`, "post", params, config), 
// 导出事件类型(包含组)
exportEventType: (params, config) => this._getConfig(`/api/EventTypes/export/relationship`, "post", params, config), 
// 导入事件类型(包含组)【此接口适用于export/relationship导出的数据】
importEventType: (params, config) => this._getConfig(`/api/EventTypes/import/relationship`, "post", params, config), 
// 按条件查询预案
getPreplans: (params, config) => this._getConfig(`/api/Preplans`, "get", params, config), 
// 通过预案ID获取预案
getPreplansById: (params, config) => this._getConfig(`/api/Preplans/${params.id}`, "get", params, config), 
// 更新预案
updatePreplans: (params, config) => this._getConfig(`/api/Preplans/${params.id}`, "put", params, config), 
// 删除预案
deletePreplans: (params, config) => this._getConfig(`/api/Preplans/${params.id}`, "delete", params, config), 
// 批量Ids/ResourceIDs获取预案集合
searchPreplans: (params, config) => this._getConfig(`/api/Preplans/batch`, "post", params, config), 
// 创建预案
addPreplans: (params, config) => this._getConfig(`/api/${params.eventTypeId}/Preplans`, "post", params, config), 
// 导入预案
importPreplans: (params, config) => this._getConfig(`/api/Preplans/import`, "post", params, config), 
// 获取预案模板
getPreplanTemplate: (params, config) => this._getConfig(`/api/Preplans/template`, "get", params, config), 
// 按条件获取分组预案集合（分组包括（推荐、其他））
searchPreplanGroup: (params, config) => this._getConfig(`/api/Preplans/grouping`, "post", params, config), 
// 通过反馈Id/反馈资源Id获取任务反馈
getFeedbacksById: (params, config) => this._getConfig(`/api/tasks/${params.taskId}/feedbacks/${params.id}`, "get", params, config), 
// 获取任务下所有反馈
getFeedbacks: (params, config) => this._getConfig(`/api/tasks/${params.taskId}/feedbacks`, "get", params, config), 
// 创建任务反馈
addFeedbacks: (params, config) => this._getConfig(`/api/tasks/${params.taskId}/feedbacks`, "post", params, config), 
// 导入任务反馈
importTaskFeedback: (params, config) => this._getConfig(`/api/taskFeedback/import`, "post", params, config), 
// 通过任务Id获取任务
getTasksById: (params, config) => this._getConfig(`/api/Tasks/${params.id}`, "get", params, config), 
// 更新指定任务
updateTasks: (params, config) => this._getConfig(`/api/Tasks/${params.id}`, "put", params, config), 
// 删除指定任务,如果是父任务会连同子任务一起删除
deleteTasks: (params, config) => this._getConfig(`/api/Tasks/${params.id}`, "delete", params, config), 
// 通过事件ID查询所有任务
getTasksByEventId: (params, config) => this._getConfig(`/api/event/${params.eventId}/Tasks`, "get", params, config), 
// 创建新的父任务
addTasks: (params, config) => this._getConfig(`/api/event/${params.eventId}/Tasks`, "post", params, config), 
// 模糊查询任务
getTasks: (params, config) => this._getConfig(`/api/Tasks`, "get", params, config), 
// 通过父任务ID查询子任务
getSubTasks: (params, config) => this._getConfig(`/api/Tasks/${params.id}/children`, "get", params, config), 
// 获取自身相关任务
getOwnerTasks: (params, config) => this._getConfig(`/api/Tasks/owner`, "get", params, config), 
// 导入任务
importTasks: (params, config) => this._getConfig(`/api/Tasks/import`, "post", params, config), 
// 创建新的子任务
addSubTasks: (params, config) => this._getConfig(`/api/Tasks/${params.parentId}/children`, "post", params, config), 
// 更新任务状态
updateTasksStatus: (params, config) => this._getConfig(`/api/Tasks/${params.taskId}/state/${params.state}`, "put", params, config), 
// 更改任务的排序，需要提交整个事件全部任务的排序，序号由0开始
updateTasksOrder: (params, config) => this._getConfig(`/api/events/${params.eventId}/Tasks/order`, "put", params, config), 
// 通过任务模板Id获取任务模板
getTaskTemplatesById: (params, config) => this._getConfig(`/api/TaskTemplates/${params.id}`, "get", params, config), 
// 更新指定任务模板
updateTaskTemplates: (params, config) => this._getConfig(`/api/TaskTemplates/${params.id}`, "put", params, config), 
// 删除指定任务模板
deleteTaskTemplates: (params, config) => this._getConfig(`/api/TaskTemplates/${params.id}`, "delete", params, config), 
// 条件查询任务模板，不带条件时返回所有任务模板
getTaskTemplates: (params, config) => this._getConfig(`/api/TaskTemplates`, "get", params, config), 
// 创建任务模板
addTaskTemplates: (params, config) => this._getConfig(`/api/TaskTemplates`, "post", params, config), 
```

 // biz 
``` js
/**
 * 获取事件关联的通话数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getCommunications({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCommunications({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getCommunications', error);
    }
}


/**
 * 关联通话数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @params communicationId {string} 通话信息Id （必填）
 * @params callerName {string} 主叫名称 
 * @params callerNumber {string} 主叫号码 
 * @params calledName {string} 被叫名称 
 * @params calledNumber {string} 被叫号码 
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params hasAnswered {boolean} 是否接听 
 * @params type {integer} 通话记录类型 
 * @params recordId {string} 录音文件 Id 
 * @params logId {string} 唯一记录id 
 * @params duration {integer} 时长 
 * @returns
 *    @communicationId {string} 通话信息Id
 *    @callerName {string} 主叫名称
 *    @callerNumber {string} 主叫号码
 *    @calledName {string} 被叫名称
 *    @calledNumber {string} 被叫号码
 *    @startTime {string} 开始时间
 *    @endTime {string} 结束时间
 *    @hasAnswered {boolean} 是否接听
 *    @taskInfos {array} 任务基本信息
 *    @type {integer} 通话记录类型
 *    @recordId {string} 录音记录 Id
 *    @fileRecord {object} 文件记录
 *    @logId {string} 唯一记录id
 *    @duration {integer} 时长
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async connectCommunications({ eventId, communicationId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.connectCommunications({eventId, communicationId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ connectCommunications', error);
    }
}


/**
 * 根据Id获取通话项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @communicationId {string} 通话信息Id
 *    @callerName {string} 主叫名称
 *    @callerNumber {string} 主叫号码
 *    @calledName {string} 被叫名称
 *    @calledNumber {string} 被叫号码
 *    @startTime {string} 开始时间
 *    @endTime {string} 结束时间
 *    @hasAnswered {boolean} 是否接听
 *    @taskInfos {array} 任务基本信息
 *    @type {integer} 通话记录类型
 *    @recordId {string} 录音记录 Id
 *    @fileRecord {object} 文件记录
 *    @logId {string} 唯一记录id
 *    @duration {integer} 时长
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async getCommunicationsById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCommunicationsById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getCommunicationsById', error);
    }
}


/**
 * 取消关联
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
*/
async cancelConnectCommunications({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cancelConnectCommunications({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ cancelConnectCommunications', error);
    }
}


/**
 * 获取事件关联的标绘数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getDraws({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDraws({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getDraws', error);
    }
}


/**
 * 关联标绘数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @params drawId {string} 标绘 Id （必填）
 * @params name {string} 标绘名称 
 * @params coordinates {string} 标绘坐标点 
 * @params type {string} 标绘类型 
 * @params markerType {string} 标志类型 
 * @params properties {string} 扩展属性 
 * @returns
 *    @drawId {string} 标绘 Id
 *    @name {string} 标绘名称
 *    @coordinates {string} 标绘坐标点
 *    @type {string} 标绘类型
 *    @markerType {string} 标志类型
 *    @properties {string} 扩展属性
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async connectDraws({ eventId, drawId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.connectDraws({eventId, drawId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ connectDraws', error);
    }
}


/**
 * 根据Id获取标绘项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @drawId {string} 标绘 Id
 *    @name {string} 标绘名称
 *    @coordinates {string} 标绘坐标点
 *    @type {string} 标绘类型
 *    @markerType {string} 标志类型
 *    @properties {string} 扩展属性
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async getDrawsById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDrawsById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getDrawsById', error);
    }
}


/**
 * 取消关联
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
*/
async cancelConnectDraws({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cancelConnectDraws({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ cancelConnectDraws', error);
    }
}


/**
 * 根据事件 Id 获取对应的事件日志
 * @params eventId {string} eventId （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getEventLogs({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventLogs({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventLogs', error);
    }
}


/**
 * 获取事件关联的传真数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getFaxes({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFaxes({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getFaxes', error);
    }
}


/**
 * 关联传真数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @params faxId {string} 传真 Id 
 * @params faxTitle {string} 传真记录主题 
 * @params internationalCode {string} 国际区号 
 * @params faxNumber {string} 传真号码 
 * @params receiverId {string} 收件人Id 
 * @params receiver {string} 收件人 
 * @params receiverTitle {string} 收件人职位 
 * @params receiveCompany {string} 收件人公司 
 * @params senderId {string} 发件人Id 
 * @params sender {string} 发件人 
 * @params senderTitle {string} 发件人职位 
 * @params sendCompany {string} 发件人公司 
 * @params status {integer} 发送状态 
 * @params faxFiles {array} 文件列表 
 * @returns
 *    @faxId {string} 传真 Id
 *    @faxTitle {string} 传真记录主题
 *    @internationalCode {string} 国际区号
 *    @faxNumber {string} 传真号码
 *    @receiverId {string} 收件人Id
 *    @receiver {string} 收件人
 *    @receiverTitle {string} 收件人职位
 *    @receiveCompany {string} 收件人公司
 *    @senderId {string} 发件人Id
 *    @sender {string} 发件人
 *    @senderTitle {string} 发件人职位
 *    @sendCompany {string} 发件人公司
 *    @status {integer} 发送状态
 *    @faxFiles {array} 文件列表
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async connectFaxes({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.connectFaxes({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ connectFaxes', error);
    }
}


/**
 * 根据Id获取传真项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @faxId {string} 传真 Id
 *    @faxTitle {string} 传真记录主题
 *    @internationalCode {string} 国际区号
 *    @faxNumber {string} 传真号码
 *    @receiverId {string} 收件人Id
 *    @receiver {string} 收件人
 *    @receiverTitle {string} 收件人职位
 *    @receiveCompany {string} 收件人公司
 *    @senderId {string} 发件人Id
 *    @sender {string} 发件人
 *    @senderTitle {string} 发件人职位
 *    @sendCompany {string} 发件人公司
 *    @status {integer} 发送状态
 *    @faxFiles {array} 文件列表
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async getFaxesById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFaxesById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getFaxesById', error);
    }
}


/**
 * 取消关联
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
*/
async cancelConnectFaxes({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cancelConnectFaxes({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ cancelConnectFaxes', error);
    }
}


/**
 * 获取事件关联的文件数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getFiles({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFiles({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getFiles', error);
    }
}


/**
 * 关联文件数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @params fileRecordID {string} 文件记录ID 
 * @returns
 *    @fileRecordID {string} 文件记录ID
 *    @fileRecord {object} 文件实体
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async connectFiles({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.connectFiles({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ connectFiles', error);
    }
}


/**
 * 根据Id获取文件项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @fileRecordID {string} 文件记录ID
 *    @fileRecord {object} 文件实体
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async getFilesById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFilesById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getFilesById', error);
    }
}


/**
 * 取消关联
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
*/
async cancelConnectFiles({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cancelConnectFiles({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ cancelConnectFiles', error);
    }
}


/**
 * 获取事件关联的拍传数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getMultimediatransfers({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMultimediatransfers({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getMultimediatransfers', error);
    }
}


/**
 * 关联拍传数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @params recordId {string} 拍传记录Id 
 * @returns
 *    @recordId {string} 拍传记录Id
 *    @multimediaTransferDetail {object} 拍传数据
 *    @taskInfos {array} 任务基本信息
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async connectMultimediatransfers({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.connectMultimediatransfers({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ connectMultimediatransfers', error);
    }
}


/**
 * 根据Id获取拍传项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @recordId {string} 拍传记录Id
 *    @multimediaTransferDetail {object} 拍传数据
 *    @taskInfos {array} 任务基本信息
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async getMultimediatransfersById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMultimediatransfersById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getMultimediatransfersById', error);
    }
}


/**
 * 取消关联
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
*/
async cancelConnectMultimediatransfers({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cancelConnectMultimediatransfers({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ cancelConnectMultimediatransfers', error);
    }
}


/**
 * 获取事件关联的图片数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getPictures({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPictures({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getPictures', error);
    }
}


/**
 * 关联图片数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @params fileRecordID {string} 文件记录ID 
 * @returns
 *    @fileRecordID {string} 文件记录ID
 *    @fileRecord {object} 文件实体
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async connectPictures({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.connectPictures({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ connectPictures', error);
    }
}


/**
 * 根据Id获取图片项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @fileRecordID {string} 文件记录ID
 *    @fileRecord {object} 文件实体
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async getPicturesById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPicturesById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getPicturesById', error);
    }
}


/**
 * 取消关联
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
*/
async cancelConnectPictures({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cancelConnectPictures({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ cancelConnectPictures', error);
    }
}


/**
 * 获取事件关联的短信消息数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getTextmessages({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTextmessages({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getTextmessages', error);
    }
}


/**
 * 关联短信消息数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @params textMessageId {string} 短信 Id 
 * @params receiver {string} 短信接收者 
 * @params receiverNumber {string} 接收号码 
 * @params sender {string} 短信发送者 
 * @params senderNumber {string} 发送号码 
 * @params content {string} 短信内容 
 * @params sendTime {string} 发送时间 
 * @returns
 *    @textMessageId {string} 短信 Id
 *    @receiver {string} 短信接收者
 *    @receiverNumber {string} 接收号码
 *    @sender {string} 短信发送者
 *    @senderNumber {string} 发送号码
 *    @content {string} 短信内容
 *    @sendTime {string} 发送时间
 *    @taskInfos {array} 任务基本信息
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async connectTextmessages({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.connectTextmessages({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ connectTextmessages', error);
    }
}


/**
 * 根据Id获取短信消息项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @textMessageId {string} 短信 Id
 *    @receiver {string} 短信接收者
 *    @receiverNumber {string} 接收号码
 *    @sender {string} 短信发送者
 *    @senderNumber {string} 发送号码
 *    @content {string} 短信内容
 *    @sendTime {string} 发送时间
 *    @taskInfos {array} 任务基本信息
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async getTextmessagesById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTextmessagesById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getTextmessagesById', error);
    }
}


/**
 * 取消关联
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
*/
async cancelConnectTextmessages({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cancelConnectTextmessages({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ cancelConnectTextmessages', error);
    }
}


/**
 * 获取事件关联的视频数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getVideos({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getVideos({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getVideos', error);
    }
}


/**
 * 关联视频数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @params fileRecordID {string} 文件记录ID 
 * @returns
 *    @fileRecordID {string} 文件记录ID
 *    @fileRecord {object} 文件实体
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async connectVideos({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.connectVideos({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ connectVideos', error);
    }
}


/**
 * 根据Id获取视频项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @fileRecordID {string} 文件记录ID
 *    @fileRecord {object} 文件实体
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @associtedDataId {string} 数据记录 Id
*/
async getVideosById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getVideosById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getVideosById', error);
    }
}


/**
 * 取消关联
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
*/
async cancelConnectVideos({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cancelConnectVideos({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ cancelConnectVideos', error);
    }
}


/**
 * 创建事件反馈接口
 * @headers X-version {string}  
 * @params eventId {string} 事件Id 
 * @params content {string} 内容 
 * @params fileGroupId {string} 文件组Id 
 * @params reporter {string} 反馈人名 
 * @returns
 *    @id {string} 反馈Id
 *    @taskId {string} 任务Id
 *    @taskName {string} 任务名
 *    @taskState {integer} 任务状态 1-未开始 2-已确认 4-进行中 8-暂停中 16-已完成
 *    @content {string} 反馈内容
 *    @createdTime {string} 反馈时间
 *    @user {object} 用户响应信息
 *    @group {object} 组信息
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @type {integer} 任务反馈类型，1-用户反馈|2-系统反馈
 *    @fileGroupId {string} 文件组Id
*/
async addEventFeedBacks(params = {}, config = {}) {
    try {
        const { data } = await this.api.addEventFeedBacks(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ addEventFeedBacks', error);
    }
}


/**
 * 获取指定事件的反馈的接口
 * @params eventId {string} eventId （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getEventFeedBackByEventId({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventFeedBackByEventId({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventFeedBackByEventId', error);
    }
}


/**
 * 获取指定反馈的接口
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 事件 Id
 *    @eventId {string} 事件Id
 *    @eventName {string} 事件名
 *    @type {integer} 反馈类型。1-用户反馈信息，2-启动响应，3-取消响应
 *    @createdTime {string} 创建时间
 *    @content {string} 内容
 *    @fileGroupId {string} 文件组Id
 *    @userId {string} 用户Id
 *    @reporter {string} 反馈人名
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
*/
async getEventFeedBackById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventFeedBackById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventFeedBackById', error);
    }
}


/**
 * 获取符合查询条件的事件实体
 * @params status {array} 事件状态 
 * @params up_left.Longitude {number} 经度 
 * @params up_left.Latitude {number} 纬度 
 * @params bottom_right.Longitude {number} 经度 
 * @params bottom_right.Latitude {number} 纬度 
 * @params is_sort {boolean} 是否排序 
 * @params IsAudited {boolean} 是否已审核 
 * @params resourceId {string} 资源Id 
 * @params keyword {string} 模糊匹配关键字 
 * @params eventTypes {string} 事件类型，使用英文","隔开 
 * @params priorities {string} 事件优先级，使用英文","隔开 
 * @params areaCodes {string} 行政区域码，使用英文","隔开 
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开 
 * @params groupIds {array} 事件组 
 * @params sourceId {string} 事件源Id 
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getEvents(params = {}, config = {}) {
    try {
        const { data } = await this.api.getEvents(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEvents', error);
    }
}


/**
 * 创建事件实体
 * @headers X-version {string}  
 * @params priority {integer} 事件等级 1-未定级 2-IV级(一般) 4-III级(较大) 8-II级(重大) 16-I级(特大) 
 * @params name {string} 事件名称 （必填）
 * @params description {string} 事件详情 
 * @params groupId {string} 关联组 Id 
 * @params sceneGroupId {string} 事件现场指挥组 
 * @params happenedTime {string} 发生时间 
 * @params address {string} 事件发生地址 
 * @params submitUnit {object} 事件归属单位 
 * @params unit {object} 事件归属单位 
 * @params source {object} 事件来源 
 * @params extension {string} 扩展字段，用于项目中存放额外的信息 
 * @params longitude {number} 事件发生地址经度 
 * @params latitude {number} 事件发生地址纬度 
 * @params typeId {string} 事件类型Id （必填）
 * @params expectStartedTime {string} 事件预期开始时间 
 * @params expectFinishedTime {string} 事件预期结束时间 
 * @params isMock {boolean} 是否为模拟事件 
 * @params areaCode {string} 行政区域码 
 * @params responseLevel {object} 事件绑定的响应等级 
 * @params principal {array} 负责人 
 * @params disposer {array} 处置人 
 * @params disposalInstruction {string} 处置说明 
 * @params notifyType {integer} 事件通知方式 
 * @params associatePreplanId {string} 关联预案ID 
 * @params resourceId {string} 外部资源唯一Id 
 * @params isAudited {boolean} 是否已审核 
 * @returns
 *    @id {string} Id
 *    @name {string} 事件名称
 *    @description {string} 事件描述
 *    @group {object} 组信息
 *    @sceneGroup {object} 组信息
 *    @happenedTime {string} 事件发生时间
 *    @finishedTime {string} 时间完成时间
 *    @priority {integer} 事件优先级
 *    @state {integer} 事件状态
 *    @address {string} 事件发生地址
 *    @submitUnit {object} 事件归属单位
 *    @unit {object} 事件归属单位
 *    @source {object} 事件来源
 *    @extension {string} 事件扩展字段，用于存项目额外信息
 *    @longitude {number} 事件发生地经度
 *    @latitude {number} 事件发生地纬度
 *    @typeID {string} 事件类型 Id
 *    @eventType {object} 事件类型
 *    @expectStartedTime {string} 事件期望发生时间
 *    @expectFinishedTime {string} 事件期望结束时间
 *    @createdTime {string} 事件创建时间
 *    @isMock {boolean} 是否模拟事件
 *    @totalTaskCount {integer} 任务总数（父任务）
 *    @noStatedTaskCount {integer} 未开始的任务总数（父任务）
 *    @finishedTaskCount {integer} 已结束的任务总数（父任务）
 *    @confirmedTaskCount {integer} 已确认的任务总数（父任务）
 *    @inProcessTaskCount {integer} 进行中的任务总数（父任务）
 *    @pausedTaskCount {integer} 暂停中的任务总数（父任务）
 *    @areaCode {string} 行政区域码
 *    @isDeleted {boolean} 是否已被删除
 *    @responseLevel {object} 事件绑定的响应等级
 *    @associatePreplanId {string} 匹配的预案id
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @updateTime {string} 最新修改时间
 *    @principal {array} 负责人
 *    @disposer {array} 处置人
 *    @serialNumber {integer} 编号
 *    @disposalInstruction {string} 处置说明
 *    @notifyType {integer} 事件通知方式
 *    @isAudited {boolean} 是否已审核
*/
async addEvents({ name, typeId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addEvents({name, typeId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ addEvents', error);
    }
}


/**
 * 获取指定id的事件实体详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @firstResponseLevel {object} 事件响应等级返回实体
 *    @secondResponseLevel {object} 事件响应等级返回实体
 *    @thirdResponseLevel {object} 事件响应等级返回实体
 *    @fourthResponseLevel {object} 事件响应等级返回实体
 *    @id {string} Id
 *    @name {string} 事件名称
 *    @description {string} 事件描述
 *    @group {object} 组信息
 *    @sceneGroup {object} 组信息
 *    @happenedTime {string} 事件发生时间
 *    @finishedTime {string} 时间完成时间
 *    @priority {integer} 事件优先级
 *    @state {integer} 事件状态
 *    @address {string} 事件发生地址
 *    @submitUnit {object} 事件归属单位
 *    @unit {object} 事件归属单位
 *    @source {object} 事件来源
 *    @extension {string} 事件扩展字段，用于存项目额外信息
 *    @longitude {number} 事件发生地经度
 *    @latitude {number} 事件发生地纬度
 *    @typeID {string} 事件类型 Id
 *    @eventType {object} 事件类型
 *    @expectStartedTime {string} 事件期望发生时间
 *    @expectFinishedTime {string} 事件期望结束时间
 *    @createdTime {string} 事件创建时间
 *    @isMock {boolean} 是否模拟事件
 *    @totalTaskCount {integer} 任务总数（父任务）
 *    @noStatedTaskCount {integer} 未开始的任务总数（父任务）
 *    @finishedTaskCount {integer} 已结束的任务总数（父任务）
 *    @confirmedTaskCount {integer} 已确认的任务总数（父任务）
 *    @inProcessTaskCount {integer} 进行中的任务总数（父任务）
 *    @pausedTaskCount {integer} 暂停中的任务总数（父任务）
 *    @areaCode {string} 行政区域码
 *    @isDeleted {boolean} 是否已被删除
 *    @responseLevel {object} 事件绑定的响应等级
 *    @associatePreplanId {string} 匹配的预案id
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @updateTime {string} 最新修改时间
 *    @principal {array} 负责人
 *    @disposer {array} 处置人
 *    @serialNumber {integer} 编号
 *    @disposalInstruction {string} 处置说明
 *    @notifyType {integer} 事件通知方式
 *    @isAudited {boolean} 是否已审核
*/
async getEventsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventsById', error);
    }
}


/**
 * 更新事件实体
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 事件名称 （必填）
 * @params description {string} 事件详情 
 * @params groupId {string} 关联组 Id 
 * @params sceneGroupId {string} 事件现场指挥组 
 * @params happenedTime {string} 发生时间 
 * @params address {string} 事件发生地址 
 * @params submitUnit {object} 事件归属单位 
 * @params unit {object} 事件归属单位 
 * @params source {object} 事件来源 
 * @params extension {string} 扩展字段，用于项目中存放额外的信息 
 * @params longitude {number} 事件发生地址经度 
 * @params latitude {number} 事件发生地址纬度 
 * @params typeId {string} 事件类型Id （必填）
 * @params expectStartedTime {string} 事件预期开始时间 
 * @params expectFinishedTime {string} 事件预期结束时间 
 * @params isMock {boolean} 是否为模拟事件 
 * @params areaCode {string} 行政区域码 
 * @params responseLevel {object} 事件绑定的响应等级 
 * @params principal {array} 负责人 
 * @params disposer {array} 处置人 
 * @params disposalInstruction {string} 处置说明 
 * @params notifyType {integer} 事件通知方式 
 * @params associatePreplanId {string} 关联预案ID 
 * @params resourceId {string} 外部资源唯一Id 
 * @params isAudited {boolean} 是否已审核 
 * @returns
*/
async updateEvents({ id, name, typeId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateEvents({id, name, typeId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ updateEvents', error);
    }
}


/**
 * 删除事件实体
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteEvents({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteEvents({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ deleteEvents', error);
    }
}


/**
 * 获取状态为`未开始`、`处理中`的事件实体
 * @params keyword {string} 模糊匹配关键字 
 * @params eventTypes {string} 事件类型，使用英文","隔开 
 * @params priorities {string} 事件优先级，使用英文","隔开 
 * @params areaCodes {string} 行政区域码，使用英文","隔开 
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开 
 * @params groupIds {array} 事件组 
 * @params sourceId {string} 事件源Id 
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getRunningEvents(params = {}, config = {}) {
    try {
        const { data } = await this.api.getRunningEvents(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getRunningEvents', error);
    }
}


/**
 * 获取状态为`已结束`的事件实体
 * @params isDelete {boolean} 是否被删除 
 * @params keyword {string} 模糊匹配关键字 
 * @params eventTypes {string} 事件类型，使用英文","隔开 
 * @params priorities {string} 事件优先级，使用英文","隔开 
 * @params areaCodes {string} 行政区域码，使用英文","隔开 
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开 
 * @params groupIds {array} 事件组 
 * @params sourceId {string} 事件源Id 
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getEventsHistory(params = {}, config = {}) {
    try {
        const { data } = await this.api.getEventsHistory(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventsHistory', error);
    }
}


/**
 * 获取自身相关事件
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getOwnerEvents(params = {}, config = {}) {
    try {
        const { data } = await this.api.getOwnerEvents(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getOwnerEvents', error);
    }
}


/**
 * 更新事件实体的优先级
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params value {integer} 事件等级 1-未定级 2-IV级(一般) 4-III级(较大) 8-II级(重大) 16-I级(特大) （必填）
 * @params taskResetType {integer} 任务处重置方式 
 * @returns
*/
async updateEventsPriority({ id, value  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateEventsPriority({id, value,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ updateEventsPriority', error);
    }
}


/**
 * 更新事件实体的状态
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params value {integer} 事件状态值 0-未开始 1-处理中 2-结束 （必填）
 * @returns
*/
async updateEventsState({ id, value  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateEventsState({id, value,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ updateEventsState', error);
    }
}


/**
 * 修改事件预案接口
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params preplanId {string} 预案id 
 * @params isResetTask {boolean} 是否重置事件任务 
 * @returns
*/
async updateEventPreplan({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateEventPreplan({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ updateEventPreplan', error);
    }
}


/**
 * 导入事件
 * @headers X-version {string}  
 * @params importEvents {array} 事件 （必填）
 * @returns
*/
async importEvents({ importEvents  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importEvents({importEvents,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ importEvents', error);
    }
}


/**
 * 通过 Id 获取事件类型组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 事件类型组 Id
 *    @name {string} 事件类型组名
 *    @description {string} 事件类型组描述
 *    @parentId {string} 父级事件类型组 Id
 *    @eventTypes {array} 事件类型
 *    @childEventTypeGroupInfos {array} 子事件类型组
 *    @extension {string} 扩展
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
*/
async getEventTypeGroupsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventTypeGroupsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventTypeGroupsById', error);
    }
}


/**
 * 更新事件类型组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 事件类型组名 （必填）
 * @params description {string} 事件类型组描述 
 * @params extension {string} 扩展 
 * @returns
*/
async updateEventTypeGroups({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateEventTypeGroups({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ updateEventTypeGroups', error);
    }
}


/**
 * 删除事件类型组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteEventTypeGroups({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteEventTypeGroups({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ deleteEventTypeGroups', error);
    }
}


/**
 * 获取所有事件类型组(可通过参数只获取根事件类型组)
 * @params Keyword {string} 关键字 
 * @params EventTypeId {string} 事件类型 
 * @params Root {boolean} 是否只获取根事件类型组 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getEventTypeGroups(params = {}, config = {}) {
    try {
        const { data } = await this.api.getEventTypeGroups(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventTypeGroups', error);
    }
}


/**
 * 创建事件类型组
 * @headers X-version {string}  
 * @params name {string} 事件类型组名 （必填）
 * @params description {string} 事件类型组描述 
 * @params extension {string} 扩展 
 * @returns
 *    @id {string} 事件类型组 Id
 *    @name {string} 事件类型组名
 *    @description {string} 事件类型组描述
 *    @parentId {string} 父级事件类型组 Id
 *    @eventTypes {array} 事件类型
 *    @childEventTypeGroupInfos {array} 子事件类型组
 *    @extension {string} 扩展
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
*/
async addEventTypeGroups({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addEventTypeGroups({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ addEventTypeGroups', error);
    }
}


/**
 * 通过父级 Id 获取子事件任务组
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getEventTypeGroupsChildren({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventTypeGroupsChildren({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventTypeGroupsChildren', error);
    }
}


/**
 * 创建子事件类型组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 事件类型组名 （必填）
 * @params description {string} 事件类型组描述 
 * @params extension {string} 扩展 
 * @returns
 *    @id {string} 事件类型组 Id
 *    @name {string} 事件类型组名
 *    @description {string} 事件类型组描述
 *    @parentId {string} 父级事件类型组 Id
 *    @eventTypes {array} 事件类型
 *    @childEventTypeGroupInfos {array} 子事件类型组
 *    @extension {string} 扩展
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
*/
async addEventTypeGroupsChildren({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addEventTypeGroupsChildren({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ addEventTypeGroupsChildren', error);
    }
}


/**
 * 根据事件类型组id分页获取事件类型
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getEventTypesByGroupId({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventTypesByGroupId({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventTypesByGroupId', error);
    }
}


/**
 * 用户可根据类型组名称，事件类型搜索对应的事件类型组和事件类型
 * @params Keyword {string} 关键字"类型组名称，事件类型" （必填）
 * @params Limit {integer} 最大查询返回数量 
 * @headers X-version {string}  
 * @returns
 *    @eventTypeGroups {object} 分页查询结果
 *    @eventTypes {object} 分页查询结果
*/
async searchEventTypeGroups({ Keyword  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchEventTypeGroups({Keyword,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ searchEventTypeGroups', error);
    }
}


/**
 * 导入事件类型组
 * @headers X-version {string}  
 * @params importEventTypeGroups {array} 事件类型组 
 * @returns
*/
async importEventTypeGroups(params = {}, config = {}) {
    try {
        const { data } = await this.api.importEventTypeGroups(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ importEventTypeGroups', error);
    }
}


/**
 * 获取事件类型子组【父级ID不传默认查询根级组】
 * @headers X-version {string}  
 * @params parentId {string} 父级ID 
 * @params selectedIds {array} 选择中Id 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量 
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getChildEventTypeGroups(params = {}, config = {}) {
    try {
        const { data } = await this.api.getChildEventTypeGroups(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getChildEventTypeGroups', error);
    }
}


/**
 * 将事件类型ID集合合并为对应的事件类型组
 * @headers X-version {string}  
 * @params ids {array} 事件类型ID 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量 
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async mergeEventTypeGroup(params = {}, config = {}) {
    try {
        const { data } = await this.api.mergeEventTypeGroup(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ mergeEventTypeGroup', error);
    }
}


/**
 * 批量事件类型组ID获取事件类型【包含下级事件类型】
 * @headers X-version {string}  
 * @params ids {array} 事件类型组ID集合 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量 
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getEventTypeGroupsByIds(params = {}, config = {}) {
    try {
        const { data } = await this.api.getEventTypeGroupsByIds(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventTypeGroupsByIds', error);
    }
}


/**
 * 获取所有事件类型
 * @params Keyword {string} 关键字 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getEventTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.getEventTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventTypes', error);
    }
}


/**
 * 根据事件类型 Id 获取事件类型
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 事件类型 Id
 *    @name {string} 事件类型名称
 *    @description {string} 事件类型描述
 *    @value {integer} 事件类型值
 *    @isEffective {boolean} 事件类型是否有效
 *    @code {string} 事件类型编码
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
*/
async getEventTypesById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventTypesById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventTypesById', error);
    }
}


/**
 * 更新事件类型
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 事件类型名称 （必填）
 * @params description {string} 事件类型详情 
 * @params value {integer} 事件类型值 （必填）
 * @params code {string} 事件类型编码 
 * @returns
*/
async updateEventTypes({ id, name, value  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateEventTypes({id, name, value,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ updateEventTypes', error);
    }
}


/**
 * 删除事件类型
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteEventTypes({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteEventTypes({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ deleteEventTypes', error);
    }
}


/**
 * 获取事件类型的组路径
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @idPath {string} ID的路径
 *    @namePath {string} 名称的路径
*/
async getEventTypePath({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventTypePath({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getEventTypePath', error);
    }
}


/**
 * 批量Ids/ResourceIDs获取事件类型集合
 * @headers X-version {string}  
 * @params ids {array} 事件类型ID查询 （必填）
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async searchEventTypes({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchEventTypes({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ searchEventTypes', error);
    }
}


/**
 * 导入事件类型
 * @headers X-version {string}  
 * @params groupingItems {array} 事件类型 
 * @returns
 *    @id {string} 事件类型 Id
 *    @name {string} 事件类型名称
 *    @description {string} 事件类型描述
 *    @value {integer} 事件类型值
 *    @isEffective {boolean} 事件类型是否有效
 *    @code {string} 事件类型编码
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
*/
async importEventTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.importEventTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ importEventTypes', error);
    }
}


/**
 * 创建事件类型
 * @params eventTypeGroupId {string} eventTypeGroupId （必填）
 * @headers X-version {string}  
 * @params name {string} 事件类型名称 （必填）
 * @params description {string} 事件类型详情 
 * @params value {integer} 事件类型值 （必填）
 * @params code {string} 事件类型编码 
 * @returns
 *    @id {string} 事件类型 Id
 *    @name {string} 事件类型名称
 *    @description {string} 事件类型描述
 *    @value {integer} 事件类型值
 *    @isEffective {boolean} 事件类型是否有效
 *    @code {string} 事件类型编码
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
*/
async addEventTypes({ eventTypeGroupId, name, value  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addEventTypes({eventTypeGroupId, name, value,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ addEventTypes', error);
    }
}


/**
 * 导出事件类型(包含组)
 * @headers X-version {string}  
 * @params ids {array} 事件类型ID查询 （必填）
 * @returns
 *    @eventType {array} 事件类型
 *    @eventTypeGroup {array} 事件类型组
*/
async exportEventType({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.exportEventType({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ exportEventType', error);
    }
}


/**
 * 导入事件类型(包含组)【此接口适用于export/relationship导出的数据】
 * @headers X-version {string}  
 * @params eventType {array} 事件类型 
 * @params eventTypeGroup {array} 事件类型组 
 * @returns
*/
async importEventType(params = {}, config = {}) {
    try {
        const { data } = await this.api.importEventType(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ importEventType', error);
    }
}


/**
 * 按条件查询预案
 * @params event_type_id {string} 事件类型ID,Empty为所有类型,"type_id1,type_id2,type_id3……" 
 * @params event_priority {string} 事件优先级值,Empty为所有类型,"priority1,priority2,priority3……" 
 * @params areaCode {string} 区域码，Empty为所有,格式："areaCode1,areaCode2,areaCode3……" 
 * @params prefixAreaCode {string} 区域码前缀，当AreaCode不为空时，以AreaCode为准，Empty为所有,格式："prefixAreaCode1,prefixAreaCode2,prefixAreaCode3……" 
 * @params keyword {string} 模糊匹配关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getPreplans(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPreplans(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getPreplans', error);
    }
}


/**
 * 通过预案ID获取预案
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 预案ID
 *    @name {string} 预案名称
 *    @eventType {object} 事件类型信息
 *    @areaCode {string} 区域码
 *    @eventPriority {integer} 适用于哪种事件优先级
 *    @eventAffectRadius {integer} 事件影响半径
 *    @dangerousSources {array} 危险源
 *    @keyProtections {array} 重点防护目标
 *    @shelters {array} 避难场所
 *    @warehouses {array} 仓库
 *    @emergencyFacilities {array} 应急设备
 *    @manpowerResources {array} 人力资源
 *    @medicalResources {array} 医疗资源
 *    @pollutionSources {array} 污染源
 *    @textTemplate {string} 文本模板
 *    @sceneParameters {array} 情景参数
 *    @directoryRecordId {string} 预案文档储存文件夹ID
 *    @taskTemplate {object} 任务模板简略信息
 *    @associatedGroup {object} 组信息
 *    @sceneGroup {object} 组信息
 *    @firstResponseLevel {object} 响应级别
 *    @secondResponseLevel {object} 响应级别
 *    @thirdResponseLevel {object} 响应级别
 *    @fourthResponseLevel {object} 响应级别
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @cameraLabels {array} 监控标签
 *    @preplanGroups {array} 预案组
 *    @videoConferenceTerminals {array} 视频会议终端
 *    @thirdPlatforms {array} 业务系统
 *    @customResources {object} 自定义类型
*/
async getPreplansById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPreplansById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getPreplansById', error);
    }
}


/**
 * 更新预案
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 预案名称 
 * @params eventPriority {integer} 适用于哪种事件优先级 
 * @params areaCode {string} 区域码 
 * @params eventAffectRadius {integer} 事件影响半径 
 * @params dangerousSources {array} 危险源 
 * @params keyProtections {array} 重点防护目标 
 * @params shelters {array} 避难场所 
 * @params warehouses {array} 仓库 
 * @params emergencyFacilities {array} 应急设备 
 * @params manpowerResources {array} 人力资源 
 * @params medicalResources {array} 医疗资源 
 * @params pollutionSources {array} 污染源 
 * @params textTemplate {string} 文本模板 
 * @params sceneParameters {array} 情景参数 
 * @params directoryRecordId {string} 预案文档储存文件夹ID 
 * @params taskTemplateId {string} 关联的任务模板Id 
 * @params associatedGroup {object} 组信息 
 * @params sceneGroup {object} 组信息 
 * @params firstResponseLevel {object} 响应级别 
 * @params secondResponseLevel {object} 响应级别 
 * @params thirdResponseLevel {object} 响应级别 
 * @params fourthResponseLevel {object} 响应级别 
 * @params cameraLabels {array} 监控标签 
 * @params preplanGroups {array} 预案组 
 * @params videoConferenceTerminals {array} 视频会议终端 
 * @params thirdPlatforms {array} 业务系统 
 * @params customResources {object} 自定义类型 
 * @returns
*/
async updatePreplans({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updatePreplans({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ updatePreplans', error);
    }
}


/**
 * 删除预案
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deletePreplans({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deletePreplans({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ deletePreplans', error);
    }
}


/**
 * 批量Ids/ResourceIDs获取预案集合
 * @headers X-version {string}  
 * @params ids {array} ID/ResourceID集合 （必填）
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async searchPreplans({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchPreplans({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ searchPreplans', error);
    }
}


/**
 * 创建预案
 * @params eventTypeId {string} eventTypeId （必填）
 * @headers X-version {string}  
 * @params name {string} 预案名称 
 * @params eventPriority {integer} 适用于哪种事件优先级 
 * @params areaCode {string} 区域码 
 * @params eventAffectRadius {integer} 事件影响半径 
 * @params dangerousSources {array} 危险源 
 * @params keyProtections {array} 重点防护目标 
 * @params shelters {array} 避难场所 
 * @params warehouses {array} 仓库 
 * @params emergencyFacilities {array} 应急设备 
 * @params manpowerResources {array} 人力资源 
 * @params medicalResources {array} 医疗资源 
 * @params pollutionSources {array} 污染源 
 * @params textTemplate {string} 文本模板 
 * @params sceneParameters {array} 情景参数 
 * @params directoryRecordId {string} 预案文档储存文件夹ID 
 * @params taskTemplateId {string} 关联的任务模板Id 
 * @params associatedGroup {object} 组信息 
 * @params sceneGroup {object} 组信息 
 * @params firstResponseLevel {object} 响应级别 
 * @params secondResponseLevel {object} 响应级别 
 * @params thirdResponseLevel {object} 响应级别 
 * @params fourthResponseLevel {object} 响应级别 
 * @params cameraLabels {array} 监控标签 
 * @params preplanGroups {array} 预案组 
 * @params videoConferenceTerminals {array} 视频会议终端 
 * @params thirdPlatforms {array} 业务系统 
 * @params customResources {object} 自定义类型 
 * @returns
 *    @id {string} 预案ID
 *    @name {string} 预案名称
 *    @eventType {object} 事件类型信息
 *    @areaCode {string} 区域码
 *    @eventPriority {integer} 适用于哪种事件优先级
 *    @eventAffectRadius {integer} 事件影响半径
 *    @dangerousSources {array} 危险源
 *    @keyProtections {array} 重点防护目标
 *    @shelters {array} 避难场所
 *    @warehouses {array} 仓库
 *    @emergencyFacilities {array} 应急设备
 *    @manpowerResources {array} 人力资源
 *    @medicalResources {array} 医疗资源
 *    @pollutionSources {array} 污染源
 *    @textTemplate {string} 文本模板
 *    @sceneParameters {array} 情景参数
 *    @directoryRecordId {string} 预案文档储存文件夹ID
 *    @taskTemplate {object} 任务模板简略信息
 *    @associatedGroup {object} 组信息
 *    @sceneGroup {object} 组信息
 *    @firstResponseLevel {object} 响应级别
 *    @secondResponseLevel {object} 响应级别
 *    @thirdResponseLevel {object} 响应级别
 *    @fourthResponseLevel {object} 响应级别
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @cameraLabels {array} 监控标签
 *    @preplanGroups {array} 预案组
 *    @videoConferenceTerminals {array} 视频会议终端
 *    @thirdPlatforms {array} 业务系统
 *    @customResources {object} 自定义类型
*/
async addPreplans({ eventTypeId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addPreplans({eventTypeId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ addPreplans', error);
    }
}


/**
 * 导入预案
 * @headers X-version {string}  
 * @params preplanItems {array} 预案导入集合 （必填）
 * @returns
*/
async importPreplans({ preplanItems  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importPreplans({preplanItems,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ importPreplans', error);
    }
}


/**
 * 获取预案模板
 * @headers X-version {string}  
 * @returns
*/
async getPreplanTemplate(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPreplanTemplate(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getPreplanTemplate', error);
    }
}


/**
 * 按条件获取分组预案集合（分组包括（推荐、其他））
 * @headers X-version {string}  
 * @params eventTypeId {string} 事件类型ID,Empty为所有类型 
 * @params eventPriority {integer} 事件优先级值,Empty为所有类型 
 * @params areaCode {string} 区域码，Empty为所有 
 * @params prefixAreaCodes {array} 区域码前缀集合，集合不空，以该集合为准，配合“IsContainCurrentAreCodePreplan” 
 * @params isMatchNullAreaCode {boolean} 是否匹配空区域码的预案 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {object} 预案分组数据输出实体
*/
async searchPreplanGroup(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchPreplanGroup(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ searchPreplanGroup', error);
    }
}


/**
 * 通过反馈Id/反馈资源Id获取任务反馈
 * @params id {string} 反馈Id/反馈资源Id （必填）
 * @params taskId {string} taskId （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 反馈Id
 *    @taskId {string} 任务Id
 *    @taskName {string} 任务名
 *    @taskState {integer} 任务状态 1-未开始 2-已确认 4-进行中 8-暂停中 16-已完成
 *    @content {string} 反馈内容
 *    @createdTime {string} 反馈时间
 *    @user {object} 用户响应信息
 *    @group {object} 组信息
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @type {integer} 任务反馈类型，1-用户反馈|2-系统反馈
 *    @fileGroupId {string} 文件组Id
*/
async getFeedbacksById({ id, taskId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFeedbacksById({id, taskId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getFeedbacksById', error);
    }
}


/**
 * 获取任务下所有反馈
 * @params taskId {string} taskId （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getFeedbacks({ taskId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFeedbacks({taskId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getFeedbacks', error);
    }
}


/**
 * 创建任务反馈
 * @params taskId {string} taskId （必填）
 * @headers X-version {string}  
 * @params content {string} 任务反馈内容 （必填）
 * @params fileGroupId {string} 文件组Id 
 * @returns
 *    @id {string} 反馈Id
 *    @taskId {string} 任务Id
 *    @taskName {string} 任务名
 *    @taskState {integer} 任务状态 1-未开始 2-已确认 4-进行中 8-暂停中 16-已完成
 *    @content {string} 反馈内容
 *    @createdTime {string} 反馈时间
 *    @user {object} 用户响应信息
 *    @group {object} 组信息
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @type {integer} 任务反馈类型，1-用户反馈|2-系统反馈
 *    @fileGroupId {string} 文件组Id
*/
async addFeedbacks({ taskId, content  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addFeedbacks({taskId, content,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ addFeedbacks', error);
    }
}


/**
 * 导入任务反馈
 * @headers X-version {string}  
 * @params taskFeedbackItems {array} 任务反馈导入集合 （必填）
 * @returns
*/
async importTaskFeedback({ taskFeedbackItems  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importTaskFeedback({taskFeedbackItems,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ importTaskFeedback', error);
    }
}


/**
 * 通过任务Id获取任务
 * @params id {string} 任务Id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 任务Id
 *    @name {string} 任务名
 *    @description {string} 任务详情
 *    @associateEventId {string} 任务关联事件
 *    @parentId {string} 父任务 Id
 *    @type {integer} 任务类型 1-类型1 2-类型2 4-类型3 8-类型4
 *    @state {integer} 任务状态 1-未开始 2-已确认 4-进行中 8-暂停中 16-已完成
 *    @group {object} 组信息
 *    @groupMembers {array} 任务组成员
 *    @destination {object} 任务目的地
 *    @expectStartedTime {string} 预计开始时间
 *    @actualStartedTime {string} 实际开始时间
 *    @expectFinishedTime {string} 预计结束时间
 *    @actualFinishedTime {string} 实际结束时间
 *    @createdTime {string} 任务创建时间
 *    @order {integer} 任务顺序
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @updateTime {string} 最新修改时间
*/
async getTasksById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTasksById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getTasksById', error);
    }
}


/**
 * 更新指定任务
 * @params id {string} 任务ID （必填）
 * @headers X-version {string}  
 * @params name {string} 任务名 （必填）
 * @params description {string} 任务描述 
 * @params groupId {string} 组Id 
 * @params destination {object} 任务目的地 
 * @params expectStartedTime {string} 预计开始时间 
 * @params expectFinishedTime {string} 预计结束时间 
 * @returns
*/
async updateTasks({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateTasks({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ updateTasks', error);
    }
}


/**
 * 删除指定任务,如果是父任务会连同子任务一起删除
 * @params id {string} 任务ID （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteTasks({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteTasks({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ deleteTasks', error);
    }
}


/**
 * 通过事件ID查询所有任务
 * @params eventId {string} 事件ID （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getTasksByEventId({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTasksByEventId({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getTasksByEventId', error);
    }
}


/**
 * 创建新的父任务
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @params name {string} 任务名 （必填）
 * @params description {string} 任务描述 
 * @params groupId {string} 组Id 
 * @params destination {object} 任务目的地 
 * @params expectStartedTime {string} 预计开始时间 
 * @params expectFinishedTime {string} 预计结束时间 
 * @returns
 *    @id {string} 任务Id
 *    @name {string} 任务名
 *    @description {string} 任务详情
 *    @associateEventId {string} 任务关联事件
 *    @parentId {string} 父任务 Id
 *    @type {integer} 任务类型 1-类型1 2-类型2 4-类型3 8-类型4
 *    @state {integer} 任务状态 1-未开始 2-已确认 4-进行中 8-暂停中 16-已完成
 *    @group {object} 组信息
 *    @groupMembers {array} 任务组成员
 *    @destination {object} 任务目的地
 *    @expectStartedTime {string} 预计开始时间
 *    @actualStartedTime {string} 实际开始时间
 *    @expectFinishedTime {string} 预计结束时间
 *    @actualFinishedTime {string} 实际结束时间
 *    @createdTime {string} 任务创建时间
 *    @order {integer} 任务顺序
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @updateTime {string} 最新修改时间
*/
async addTasks({ eventId, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addTasks({eventId, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ addTasks', error);
    }
}


/**
 * 模糊查询任务
 * @params keyword {string} 模糊匹配关键字 
 * @params EventId {string} 事件ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getTasks(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTasks(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getTasks', error);
    }
}


/**
 * 通过父任务ID查询子任务
 * @params id {string} 父任务ID （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getSubTasks({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getSubTasks({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getSubTasks', error);
    }
}


/**
 * 获取自身相关任务
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getOwnerTasks(params = {}, config = {}) {
    try {
        const { data } = await this.api.getOwnerTasks(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getOwnerTasks', error);
    }
}


/**
 * 导入任务
 * @headers X-version {string}  
 * @params importTasks {array} 任务 （必填）
 * @returns
*/
async importTasks({ importTasks  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importTasks({importTasks,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ importTasks', error);
    }
}


/**
 * 创建新的子任务
 * @params parentId {string} parentId （必填）
 * @headers X-version {string}  
 * @params name {string} 任务名 （必填）
 * @params description {string} 任务描述 
 * @params groupId {string} 组Id 
 * @params destination {object} 任务目的地 
 * @params expectStartedTime {string} 预计开始时间 
 * @params expectFinishedTime {string} 预计结束时间 
 * @returns
 *    @id {string} 任务Id
 *    @name {string} 任务名
 *    @description {string} 任务详情
 *    @associateEventId {string} 任务关联事件
 *    @parentId {string} 父任务 Id
 *    @type {integer} 任务类型 1-类型1 2-类型2 4-类型3 8-类型4
 *    @state {integer} 任务状态 1-未开始 2-已确认 4-进行中 8-暂停中 16-已完成
 *    @group {object} 组信息
 *    @groupMembers {array} 任务组成员
 *    @destination {object} 任务目的地
 *    @expectStartedTime {string} 预计开始时间
 *    @actualStartedTime {string} 实际开始时间
 *    @expectFinishedTime {string} 预计结束时间
 *    @actualFinishedTime {string} 实际结束时间
 *    @createdTime {string} 任务创建时间
 *    @order {integer} 任务顺序
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
 *    @updateTime {string} 最新修改时间
*/
async addSubTasks({ parentId, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addSubTasks({parentId, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ addSubTasks', error);
    }
}


/**
 * 更新任务状态
 * @params taskId {string} taskId （必填）
 * @params state {undefined}  （必填）
 * @headers X-version {string}  
 * @returns
*/
async updateTasksStatus({ taskId, state  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateTasksStatus({taskId, state,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ updateTasksStatus', error);
    }
}


/**
 * 更改任务的排序，需要提交整个事件全部任务的排序，序号由0开始
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @params taskOrderInfos {array} 任务排序的信息 （必填）
 * @returns
*/
async updateTasksOrder({ eventId, taskOrderInfos  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateTasksOrder({eventId, taskOrderInfos,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ updateTasksOrder', error);
    }
}


/**
 * 通过任务模板Id获取任务模板
 * @params id {string} 任务模板Id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 模板Id
 *    @name {string} 模板名称
 *    @description {string} 任务模板描述
 *    @parentTaskTempInfos {array} 任务模板信息
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
*/
async getTaskTemplatesById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTaskTemplatesById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getTaskTemplatesById', error);
    }
}


/**
 * 更新指定任务模板
 * @params id {string} 需更新的任务模板Id （必填）
 * @headers X-version {string}  
 * @params name {string} 任务名称 （必填）
 * @params description {string} 任务详情 
 * @params parentTaskTempInfos {array} 任务模板信息 
 * @returns
*/
async updateTaskTemplates({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateTaskTemplates({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ updateTaskTemplates', error);
    }
}


/**
 * 删除指定任务模板
 * @params id {string} 任务模板Id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteTaskTemplates({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteTaskTemplates({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ deleteTaskTemplates', error);
    }
}


/**
 * 条件查询任务模板，不带条件时返回所有任务模板
 * @params keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getTaskTemplates(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTaskTemplates(params,config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ getTaskTemplates', error);
    }
}


/**
 * 创建任务模板
 * @headers X-version {string}  
 * @params name {string} 任务名称 （必填）
 * @params description {string} 任务详情 
 * @params parentTaskTempInfos {array} 任务模板信息 
 * @returns
 *    @id {string} 模板Id
 *    @name {string} 模板名称
 *    @description {string} 任务模板描述
 *    @parentTaskTempInfos {array} 任务模板信息
 *    @platformId {string} 平台来源ID
 *    @resourceId {string} 外部资源唯一Id
*/
async addTaskTemplates({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addTaskTemplates({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('eventBiz ~ addTaskTemplates', error);
    }
}

```

 