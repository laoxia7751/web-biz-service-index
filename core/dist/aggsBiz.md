// api 
``` js
// 获取告警的信息
getAlarmInfo: (params, config) => this._getConfig(`/api/Alarms/GetAlarmInfo`, "post", params, config), 
// 根据行政区域id列表查询告警数据
getAlarmsByDistrictIds: (params, config) => this._getConfig(`/api/Alarms/GetAlarmsByDistrictIds`, "get", params, config), 
// 高级搜索告警记录
searchAlertRecord: (params, config) => this._getConfig(`/api/AlertRecords/search`, "post", params, config), 
// 告警转事件
alarmToEvent: (params, config) => this._getConfig(`/api/AlertRecords/converter/event`, "post", params, config), 
// 获取资产详情
getAssetsById: (params, config) => this._getConfig(`/api/Assets/${params.id}`, "get", params, config), 
// 搜索资产
searchAssets: (params, config) => this._getConfig(`/api/Assets`, "post", params, config), 
// 周边资产
getNearAssets: (params, config) => this._getConfig(`/api/Assets/circle_area`, "post", params, config), 
// 周边告警资产
getNearAlerts: (params, config) => this._getConfig(`/api/Assets/circle_area/Alert`, "post", params, config), 
// 获取事件关联的通话数据
getCommunicationByEventId: (params, config) => this._getConfig(`/api/events/${params.eventId}/communications`, "get", params, config), 
// 根据Id获取通话项
getCommunicationById: (params, config) => this._getConfig(`/api/events/${params.eventId}/communications/${params.id}`, "get", params, config), 
// 获取事件关联的文件数据
getFilesByEventId: (params, config) => this._getConfig(`/api/events/${params.eventId}/files`, "get", params, config), 
// 根据Id获取文件项
getFilesById: (params, config) => this._getConfig(`/api/events/${params.eventId}/files/${params.id}`, "get", params, config), 
// 获取事件关联的拍传数据
getMultimediaTransfersByEventId: (params, config) => this._getConfig(`/api/events/${params.eventId}/multimediatransfers`, "get", params, config), 
// 根据Id获取拍传项
getMultimediaTransfersById: (params, config) => this._getConfig(`/api/events/${params.eventId}/multimediatransfers/${params.id}`, "get", params, config), 
// 获取事件关联的图片数据
getEventPictures: (params, config) => this._getConfig(`/api/events/${params.eventId}/pictures`, "get", params, config), 
// 根据Id获取图片项
getEventPictureById: (params, config) => this._getConfig(`/api/events/${params.eventId}/pictures/${params.id}`, "get", params, config), 
// 获取事件关联的视频数据
getEventVideos: (params, config) => this._getConfig(`/api/events/${params.eventId}/videos`, "get", params, config), 
// 根据Id获取视频项
getEventVideoById: (params, config) => this._getConfig(`/api/events/${params.eventId}/videos/${params.id}`, "get", params, config), 
// 获取全部的分组列表。
getAllCameraGroups: (params, config) => this._getConfig(`/api/Camera/groups`, "get", params, config), 
// 搜索监控
searchCameras: (params, config) => this._getConfig(`/api/Camera`, "post", params, config), 
// 周边监控
getNearCameras: (params, config) => this._getConfig(`/api/Camera/circle_area`, "post", params, config), 
// 添加监控终端
addCameraTerminal: (params, config) => this._getConfig(`/api/Camera/custom`, "post", params, config), 
// 修改监控终端
editCameraTerminal: (params, config) => this._getConfig(`/api/Camera/custom/${params.id}`, "put", params, config), 
// 获取巡检任务列表
getDetectionTasks: (params, config) => this._getConfig(`/api/DetectionTasks`, "get", params, config), 
// 获取指定巡检任务详情
getDetectionTaskById: (params, config) => this._getConfig(`/api/DetectionTasks/${params.id}`, "get", params, config), 
// 指定人是否具备对应的行政区域权限
judgeAreaCodePermission: (params, config) => this._getConfig(`/api/Districts/${params.userId}`, "post", params, config), 
// 通过经纬度获取行政区域列表集合（国家、省、市、县）
getDistrictByCoordinate: (params, config) => this._getConfig(`/api/Districts/Coordinate`, "get", params, config), 
// 获取符合查询条件的事件实体
getEvents: (params, config) => this._getConfig(`/api/Events`, "get", params, config), 
// 支持关系资源的事件搜索
searchEvents: (params, config) => this._getConfig(`/api/Events`, "post", params, config), 
// 获取符合查询条件的基础事件实体
getBaseEvents: (params, config) => this._getConfig(`/api/Events/base`, "get", params, config), 
// 获取指定id的事件实体
getEventInfo: (params, config) => this._getConfig(`/api/Events/${params.id}`, "get", params, config), 
// 获取状态为`未开始`、`处理中`的事件实体
getRunningEvents: (params, config) => this._getConfig(`/api/Events/running`, "get", params, config), 
// 获取状态为`已结束`的事件实体
getEventsHistory: (params, config) => this._getConfig(`/api/Events/history`, "get", params, config), 
// 获取事件关联相关数据
getEventsAssociateData: (params, config) => this._getConfig(`/api/Events/AssociateData`, "get", params, config), 
// 根据事件id获取当前事件所关联的所有成员（指挥部成员、任务组成员）
getEventsMembers: (params, config) => this._getConfig(`/api/Events/${params.id}/Members`, "get", params, config), 
// 多条件查询设施信息
queryFacilities: (params, config) => this._getConfig(`/api/Facilities/condition_query`, "post", params, config), 
// 获取资源关系下图层的基于事件周边设施
searchFacilitiesByEventId: (params, config) => this._getConfig(`/api/Facilities/event/${params.eventId}`, "post", params, config), 
// 获取资源关系下图层基于事件周边的统计信息
searchFacilityTotalByEventId: (params, config) => this._getConfig(`/api/Facilities/event/${params.eventId}/statistics`, "post", params, config), 
// 周边设施
getNearFacilities: (params, config) => this._getConfig(`/api/Facilities/circle_area`, "post", params, config), 
// 获取目录下的文件
getFiles: (params, config) => this._getConfig(`/api/Files`, "get", params, config), 
// 分页查询国标下级域列表接口
getGbLowerDomains: (params, config) => this._getConfig(`/api/GbLowerDomains`, "get", params, config), 
// 创建下级域信息包含下级域定时任务
addGbLowerDomains: (params, config) => this._getConfig(`/api/GbLowerDomains`, "post", params, config), 
// 根据下级域id获取下级域详细信息接口
getGbLowerDomainsById: (params, config) => this._getConfig(`/api/GbLowerDomains/${params.id}`, "get", params, config), 
// 删除指定下级域
deleteGbLowerDomains: (params, config) => this._getConfig(`/api/GbLowerDomains/${params.id}`, "delete", params, config), 
// 修改下级域信息
editGbLowerDomains: (params, config) => this._getConfig(`/api/GbLowerDomains/${params.id}`, "put", params, config), 
// 模糊查询物资（分权分域）
searchGoods: (params, config) => this._getConfig(`/api/Goods/search`, "post", params, config), 
// GPS点位搜索
getGps: (params, config) => this._getConfig(`/api/GpsSearch`, "get", params, config), 
// 查询指定设备的最新活跃点位
getDeviceGps: (params, config) => this._getConfig(`/api/GpsSearch/active/${params.device}/latest`, "get", params, config), 
// 查询多个指定设备的最新活跃点位
searchDevicesGps: (params, config) => this._getConfig(`/api/GpsSearch/active/devices/latest`, "post", params, config), 
// 查询设备GPS历史轨迹
getDeviceGpsHistory: (params, config) => this._getConfig(`/api/GpsSearch/history/${params.device}`, "get", params, config), 
// 获取设备最后的Gps点位
getDeviceLatestGps: (params, config) => this._getConfig(`/api/GpsSearch/history/${params.device}/latest`, "get", params, config), 
// 分页查询组成员
getGroupMember: (params, config) => this._getConfig(`/api/Groups/${params.id}/members`, "get", params, config), 
// 搜索资源关系下预案组
getGroups: (params, config) => this._getConfig(`/api/Groups`, "post", params, config), 
// 搜索资源关系下预案组组和联系人
searchGroups: (params, config) => this._getConfig(`/api/Groups/search`, "post", params, config), 
// 获取根图层的下级图层的资源统计信息
getLayerStatisticsTotal: (params, config) => this._getConfig(`/api/Layers/statistics/root_layers`, "get", params, config), 
// 批量获取多个区域的根图层下级图层的资源统计信息
getRootLayerStatisticsTotal: (params, config) => this._getConfig(`/api/Layers/statistics/batch_layers`, "get", params, config), 
// 查询拍传详情
getMultimediaTransferDetails: (params, config) => this._getConfig(`/api/MultimediaTransfers/${params.id}`, "get", params, config), 
// 查询拍传
searchMultimediaTransfers: (params, config) => this._getConfig(`/api/MultimediaTransfers`, "post", params, config), 
// 搜索第三方平台
getPlatforms: (params, config) => this._getConfig(`/api/Platforms`, "post", params, config), 
// 搜索
searchPreplanGroups: (params, config) => this._getConfig(`/api/Preplans/${params.id}/group`, "get", params, config), 
// 按条件查询预案
searchPreplans: (params, config) => this._getConfig(`/api/Preplans`, "post", params, config), 
// 通过事件ID匹配预案
getPreplansByEventId: (params, config) => this._getConfig(`/api/Preplans/${params.eventId}/match`, "get", params, config), 
// 按条件查询分组的预案（分组包括（推荐预案列表、其他预案列表））
searchPreplanGroup: (params, config) => this._getConfig(`/api/Preplans/grouping`, "post", params, config), 
// 新增项目
addProject: (params, config) => this._getConfig(`/api/Projects`, "post", params, config), 
// 获取项目
getProjectById: (params, config) => this._getConfig(`/api/Projects/${params.id}`, "get", params, config), 
// 导出
exportProject: (params, config) => this._getConfig(`/api/Projects/${params.id}/export`, "get", params, config), 
// 导入
importProject: (params, config) => this._getConfig(`/api/Projects/import`, "post", params, config), 
// 查询主体下全部类型资源
getMainResource: (params, config) => this._getConfig(`/api/ResourceRelationships/resource`, "post", params, config), 
// 查询主体下资源
getSingleResource: (params, config) => this._getConfig(`/api/ResourceRelationships/resource/single`, "post", params, config), 
// 资源搜索
searchResource: (params, config) => this._getConfig(`/api/ResourceRelationships/resource/search`, "post", params, config), 
// 主体绑定事件类型组
bindEventTypeGroup: (params, config) => this._getConfig(`/api/ResourceRelationships/eventTypeGroup`, "post", params, config), 
// 主体绑定告警类型
bindAlarmType: (params, config) => this._getConfig(`/api/ResourceRelationships/alarmType`, "post", params, config), 
// 获取指定角色Id权限角色成员数据列表
getMembersByRole: (params, config) => this._getConfig(`/api/Roles/${params.role}/members`, "get", params, config), 
// 获取指定角色Id权限组织架构数据列表
getOrganizationsByRole: (params, config) => this._getConfig(`/api/Roles/${params.role}/organizations`, "get", params, config), 
// 获取指定角色Id权限行政区划数据列表
getDistrictsByRole: (params, config) => this._getConfig(`/api/Roles/${params.role}/districts`, "get", params, config), 
// 获取指定角色Id权限监控组数据列表
getCameraGroupsByRole: (params, config) => this._getConfig(`/api/Roles/${params.role}/camera/groups`, "get", params, config), 
// 绑定批量组织架构下用户到指定的角色
batchAddRole: (params, config) => this._getConfig(`/api/Roles/${params.role}/participators/batch`, "put", params, config), 
// 搜索（联系人、组、监控、视频会议终端）
queryResource: (params, config) => this._getConfig(`/api/search/resource`, "get", params, config), 
// 获取所有状态下的事件总数
getEventCount: (params, config) => this._getConfig(`/api/Statistical/events`, "get", params, config), 
// 获取资源统计数量
getResourceCount: (params, config) => this._getConfig(`/api/Statistical/resources`, "get", params, config), 
// 按行政区域统计终端
getTerminalByArea: (params, config) => this._getConfig(`/api/Statistical/Area/Terminal`, "post", params, config), 
// 按行政区域统计第三方平台
getPlatformByArea: (params, config) => this._getConfig(`/api/Statistical/Area/Platform`, "post", params, config), 
// 资产总览
getAssetOverview: (params, config) => this._getConfig(`/api/Statistical/overview/asset`, "post", params, config), 
// 客户端总览
getClientOverview: (params, config) => this._getConfig(`/api/Statistical/overview/client`, "post", params, config), 
// 终端总览
getTerminalOverview: (params, config) => this._getConfig(`/api/Statistical/overview/terminal`, "post", params, config), 
// 周边设施按根图层聚合统计
getSurroundFacilitiesTotal: (params, config) => this._getConfig(`/api/Statistical/facilities/circle_area/mergence`, "post", params, config), 
// 图层资源统计
getLayerResourceTotal: (params, config) => this._getConfig(`/api/Statistical/Layers/resource`, "post", params, config), 
// 创建定时保活任务
addStreamKeepAliveJobs: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs`, "post", params, config), 
// 获取保活任务列表
getStreamKeepAliveJobs: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs`, "get", params, config), 
// 获取指定保活任务
getStreamKeepAliveJobById: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}`, "get", params, config), 
// 修改定时保活任务
editStreamKeepAliveJob: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}`, "put", params, config), 
// 删除定时保活任务
deleteStreamKeepAliveJob: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}`, "delete", params, config), 
// 通过任务Id获取任务
getTasksById: (params, config) => this._getConfig(`/api/Tasks/${params.id}`, "get", params, config), 
// 通过事件ID查询所有任务
getTasksByEventId: (params, config) => this._getConfig(`/api/event/${params.eventId}/Tasks`, "get", params, config), 
// 模糊查询任务
queryTasks: (params, config) => this._getConfig(`/api/Tasks`, "get", params, config), 
// 通过父任务ID查询子任务
getChildrenTasksById: (params, config) => this._getConfig(`/api/Tasks/${params.id}/children`, "get", params, config), 
// 获取任务关联相关数据
getTaskAssociateData: (params, config) => this._getConfig(`/api/Tasks/AssociateData`, "get", params, config), 
// 搜索终端
searchTerminals: (params, config) => this._getConfig(`/api/Terminals`, "post", params, config), 
// 搜索带监控终端
searchCameraTerminals: (params, config) => this._getConfig(`/api/Terminals/Camera`, "post", params, config), 
// 获取资产拓扑
getTopology: (params, config) => this._getConfig(`/api/Topologys`, "get", params, config), 
```

 // biz 
``` js
/**
 * 获取告警的信息
 * @headers X-version {string}  
 * @params keyword {string} 模糊匹配关键字 
 * @params timeQueryType {integer} 告警时间查询类型            产生时间=0，确认时间=1，删除时间=20:_0; 1:_1; 2:_2;  
 * @params pageIndex {integer} 页码,从1开始 
 * @params pageSize {integer} 页容量, [1,1024] 
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params districtIds {array} 前缀区域码列表 
 * @params prefixDistrictIds {array} 前缀区域码，传入完整的区域码也会处理为前缀区域码 
 * @params queryType {integer} 告警查询类型            All = 0,Confirmed = 1,NotConfirm = 20:_0; 1:_1; 2:_2;  
 * @params types {array} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测 
 * @params alarmSourceIds {array} 告警源Id列表 
 * @params alarmLevels {array} 告警级别 
 * @params organizationIds {array} 所属组织架构ID列表 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAlarmInfo(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmInfo(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getAlarmInfo', error);
    }
}


/**
 * 根据行政区域id列表查询告警数据
 * @params beginTime {string} 查询开始时间 
 * @params endTime {string} 查询结束时间 
 * @params districtIds {array} 行政区域Id列表 
 * @params prefixDistrictIds {array} 前缀行政区域Id列表 
 * @params queryType {undefined} 查询类型 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAlarmsByDistrictIds(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmsByDistrictIds(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getAlarmsByDistrictIds', error);
    }
}


/**
 * 高级搜索告警记录
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params keyword {string} 关键字 
 * @params level {integer} 告警等级，1-一般 | 2-较大 | 4-重大 | 8-特大 
 * @params status {array} 告警状态，0-告警中|1-已解决|2-手动解决 
 * @params platformId {string} 平台 Id 
 * @params ignoreOtherPlatform {boolean} 查询结果是否忽略其他平台数据。 
 * @params areaCode {string} 行政区域码 
 * @params includeSubTypes {boolean} 是否包含子类型记录。true 时包含子告警类型记录，否则只查当前告警类型记录 
 * @params startTime {string} 开始时间（基于告警产生时间查询） 
 * @params endTime {string} 结束时间（基于告警产生时间查询） 
 * @params typeIds {array} 类型 Id 
 * @params sourceTypeIds {array} 源类型 Id 
 * @params assetIds {array} 资产 Id 
 * @params upLeft {object} 坐标 
 * @params bottomRight {object} 坐标 
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchAlertRecord(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchAlertRecord(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchAlertRecord', error);
    }
}


/**
 * 告警转事件
 * @headers X-version {string}  
 * @params alertId {integer} 告警ID（apts告警Id） （必填）
 * @params eventTypeId {string} 事件类型Id （必填）
 * @params eventPriority {integer} 事件等级 1-未定级 2-IV级(一般) 4-III级(较大) 8-II级(重大) 16-I级(特大)1:One; 2:Two; 4:Three; 8:Four; 16:Five;  
 * @returns
 *    @id {string} Id
 *    @name {string} 事件名称
 *    @priority {integer} 事件优先级
 *    @state {integer} 事件状态
 *    @longitude {number} 事件发生地经度
 *    @latitude {number} 事件发生地纬度
 *    @eventType {object} 事件类型
 *    @createdTime {string} 事件创建时间
 *    @areaCode {string} 行政区域码
 *    @updateTime {string} 更新时间
 *    @description {string} 事件描述
 *    @group {object} 组信息
 *    @sceneGroup {object} 组信息
 *    @happenedTime {string} 事件发生时间
 *    @finishedTime {string} 时间完成时间
 *    @address {string} 事件发生地址
 *    @submitUnit {object} 事件归属单位
 *    @unit {object} 事件归属单位
 *    @source {object} 事件来源
 *    @extension {string} 事件扩展字段，用于存项目额外信息
 *    @typeID {string} 事件类型 Id
 *    @expectStartedTime {string} 事件期望发生时间
 *    @expectFinishedTime {string} 事件期望结束时间
 *    @isMock {boolean} 是否模拟事件
 *    @totalTaskCount {integer} 任务总数（父任务）
 *    @noStatedTaskCount {integer} 未开始的任务总数（父任务）
 *    @finishedTaskCount {integer} 已结束的任务总数（父任务）
 *    @isDeleted {boolean} 是否已被删除
 *    @responseLevel {object} 事件绑定的响应等级
 *    @associatePreplanId {string} 事件绑定的预案id
 *    @resourceId {string} 资源Id
*/
async alarmToEvent({ alertId, eventTypeId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.alarmToEvent({alertId, eventTypeId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ alarmToEvent', error);
    }
}


/**
 * 获取资产详情
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @headers X-version {string}  
 * @returns
 *    @id {string} 标识
 *    @assetType {integer} 资产类型0:Device,设备; 1:Client,客户端; 2:Terminal,终端; 3:Network,网络; 4:ThirdPlatform,第三方平台; 5:PositionEquipment,定位装备; 
 *    @assetMetrics {array} 指标
 *    @alertRecords {array} 告警记录
 *    @areaCode {string} 行政区域码
 *    @areaName {string} 行政区域名称
 *    @alertLevel {integer} 告警等级
 *    @alertTime {string} 告警时间
 *    @resourceId {string} 来源Id
*/
async getAssetsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAssetsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getAssetsById', error);
    }
}


/**
 * 搜索资产
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params platformId {string} 分级平台ID 
 * @params assetIds {array} 资产ID 
 * @params keyword {string} 关键词 
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @params assetType {integer} 资产类型0:Device,设备; 1:Client,客户端; 2:Terminal,终端; 3:Network,网络; 4:ThirdPlatform,第三方平台; 5:PositionEquipment,定位装备;  
 * @params secondaryAssetType {integer} 二级资产类型（依赖一级资产类型） 
 * @params relateTypeId {string} 关联类型ID 
 * @params isAlertAsset {boolean} 是否只查告警资产 
 * @params alertSortType {integer} 告警排序规则0:None,不处理排序; 1:LevelThenStartTimeDesc,等级再开始时间倒序排;  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchAssets(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchAssets(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchAssets', error);
    }
}


/**
 * 周边资产
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params platformId {string} 分级平台ID 
 * @params assetIds {array} 资产ID 
 * @params keyword {string} 关键词 
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @params assetType {integer} 资产类型0:Device,设备; 1:Client,客户端; 2:Terminal,终端; 3:Network,网络; 4:ThirdPlatform,第三方平台; 5:PositionEquipment,定位装备;  
 * @params secondaryAssetType {integer} 二级资产类型（依赖一级资产类型） 
 * @params relateTypeId {string} 关联类型ID 
 * @params upLeft {object} 坐标 （必填）
 * @params bottomRight {object} 坐标 （必填）
 * @params center {object} 坐标 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params sortRule {integer} 排序类型0:AscendingByDistance,距离升序; 1:DescendingByDistance,距离降序;  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getNearAssets({ upLeft, bottomRight, center, radius  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getNearAssets({upLeft, bottomRight, center, radius,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getNearAssets', error);
    }
}


/**
 * 周边告警资产
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params platformId {string} 分级平台ID 
 * @params assetIds {array} 资产ID 
 * @params keyword {string} 关键词 
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @params assetType {integer} 资产类型0:Device,设备; 1:Client,客户端; 2:Terminal,终端; 3:Network,网络; 4:ThirdPlatform,第三方平台; 5:PositionEquipment,定位装备;  
 * @params secondaryAssetType {integer} 二级资产类型（依赖一级资产类型） 
 * @params relateTypeId {string} 关联类型ID 
 * @params alert {object} 告警筛选 
 * @params assetSortRule {integer} 资产排序规则0:AscendingByDistance,距离升序; 1:DescendingByDistance,距离降序; 2:DescendingByAlertCount,告警数降序;  
 * @params upLeft {object} 坐标 （必填）
 * @params bottomRight {object} 坐标 （必填）
 * @params center {object} 坐标 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getNearAlerts({ upLeft, bottomRight, center, radius  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getNearAlerts({upLeft, bottomRight, center, radius,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getNearAlerts', error);
    }
}


/**
 * 获取事件关联的通话数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCommunicationByEventId({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCommunicationByEventId({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getCommunicationByEventId', error);
    }
}


/**
 * 根据Id获取通话项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @communicationId {string} 通话信息Id
 *    @callerName {string} 主叫名称
 *    @callerNumber {string} 主叫号码
 *    @calledName {string} 被叫名称
 *    @calledNumber {string} 被叫号码
 *    @startTime {string} 开始时间
 *    @endTime {string} 结束时间
 *    @hasAnswered {boolean} 是否接听
 *    @taskInfos {array} 任务基本信息
 *    @type {integer} 通话记录类型1:_1; 2:_2; 4:_4; 8:_8; 16:_16; 32:_32; 64:_64; 128:_128; 256:_256; 512:_512; 
 *    @recordId {string} 录音记录 Id
 *    @fileRecord {object} 文件记录
 *    @logId {string} 日志记录id
 *    @duration {integer} 时长（单位：秒）
*/
async getCommunicationById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCommunicationById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getCommunicationById', error);
    }
}


/**
 * 获取事件关联的文件数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFilesByEventId({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFilesByEventId({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getFilesByEventId', error);
    }
}


/**
 * 根据Id获取文件项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @fileRecordID {string} 文件记录ID
 *    @fileRecord {object} 文件实体
*/
async getFilesById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFilesById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getFilesById', error);
    }
}


/**
 * 获取事件关联的拍传数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMultimediaTransfersByEventId({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMultimediaTransfersByEventId({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getMultimediaTransfersByEventId', error);
    }
}


/**
 * 根据Id获取拍传项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @recordId {string} 拍传记录Id
 *    @multimediaTransferDetail {object} 拍传返回实体
 *    @taskInfos {array} 任务基本信息
*/
async getMultimediaTransfersById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMultimediaTransfersById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getMultimediaTransfersById', error);
    }
}


/**
 * 获取事件关联的图片数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getEventPictures({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventPictures({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getEventPictures', error);
    }
}


/**
 * 根据Id获取图片项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @fileRecordId {string} 图片记录Id
 *    @fileRecord {object} 文件实体
 *    @taskInfos {array} 任务基本信息
 *    @associatedUserID {string} 关联操作人ID
 *    @associatedUserName {string} 关联操作人名称
*/
async getEventPictureById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventPictureById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getEventPictureById', error);
    }
}


/**
 * 获取事件关联的视频数据
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getEventVideos({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventVideos({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getEventVideos', error);
    }
}


/**
 * 根据Id获取视频项
 * @params id {string} id （必填）
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 数据Id
 *    @eventId {string} 关联事件Id
 *    @eventName {string} 事件名称
 *    @createdTime {string} 创建事件关联时间
 *    @fileRecordId {string} 视频记录Id
 *    @fileRecord {object} 文件实体
 *    @taskInfos {array} 任务基本信息
*/
async getEventVideoById({ id, eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventVideoById({id, eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getEventVideoById', error);
    }
}


/**
 * 获取全部的分组列表。
 * @params GroupType {undefined} -1：全部(默认)；0：监控组 1：预案组 2：自定义组 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAllCameraGroups(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAllCameraGroups(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getAllCameraGroups', error);
    }
}


/**
 * 搜索监控
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @params labelIds {array} 标签 
 * @params online {boolean} 是否在线 
 * @params keyword {string} 关键词 
 * @params resourceRelationship {object} 资源关系查询(不带分页) 
 * @params isContainMainResource {boolean} 返回结果是否包含主体资源 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchCameras(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchCameras(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchCameras', error);
    }
}


/**
 * 周边监控
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params upLeft {object} 坐标 （必填）
 * @params bottomRight {object} 坐标 （必填）
 * @params center {object} 坐标 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params labelIds {array} 监控标签集合 
 * @params sortRule {integer} 排序类型0:AscendingByDistance,距离升序; 1:DescendingByDistance,距离降序;  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getNearCameras({ upLeft, bottomRight, center, radius  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getNearCameras({upLeft, bottomRight, center, radius,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getNearCameras', error);
    }
}


/**
 * 添加监控终端
 * @headers X-version {string}  
 * @params name {string} 名称 （必填）
 * @params latitude {number} 纬度 
 * @params longitude {number} 经度 
 * @params parentId {string} 监控组 Id 
 * @params type {integer} 终端类型0:Gb; 1:VideoPull; 2:VideoPush; 3:VideoFile;  
 * @params extension {undefined} 扩展字段, 根据不同的终端类型需要传对应的字段 （必填）
 * @returns
 *    @id {string} Id
 *    @name {string} 名称
 *    @status {integer} 监控状态1:_1; 2:_2; 3:_3; 4:_4; 
 *    @quality {integer} 图片质量类型0:_0; 1:_1; 2:_2; 3:_3; 4:_4; 
 *    @areaCode {string} 行政区域码
 *    @thumbnailID {string} 图片id
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @videoEncoder {integer} 视频编码类型0:H264; 1:H265; 
 *    @resolution {integer} 分辨率0:HD; 1:SD; 2:FullHd; 3:UHD; 
 *    @audio {boolean} 是否有音频
 *    @result {integer} 图片质量类型0:UnDetected; 1:Bad; 2:Excellent; 3:Good; 4:Fault; 
 *    @resultDetail {object} 图片质量
 *    @namePath {string} 监控名字路径
 *    @idPath {string} 监控ID路径
 *    @order {integer} 排序字段
 *    @detectionCount {integer} 巡检的次数
 *    @faultDetail {integer} 质量故障的错误码：http://git.rdapp.com/product/knowledge-planet/issues/818
 *    @isManual {boolean} 是否是手动设置
 *    @labels {array} 标签
 *    @audioEncodingFormat {string} 音频编码属性
 *    @isSupportPTZ {boolean} 是否可以进行云台控制
*/
async addCameraTerminal({ name, extension  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addCameraTerminal({name, extension,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ addCameraTerminal', error);
    }
}


/**
 * 修改监控终端
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 名称 （必填）
 * @params latitude {number} 纬度 
 * @params longitude {number} 经度 
 * @params parentId {string} 监控组 Id 
 * @params type {integer} 终端类型0:Gb; 1:VideoPull; 2:VideoPush; 3:VideoFile;  
 * @params extension {undefined} 扩展字段, 根据不同的终端类型需要传对应的字段 （必填）
 * @params aliasName {string} 监控别名 
 * @params quality {integer} 图片质量类型0:UnDetected; 1:Bad; 2:Excellent; 3:Good; 4:Fault;  
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改 
 * @params labelIds {array} 监控标签id （必填）
 * @returns
*/
async editCameraTerminal({ id, name, extension, labelIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editCameraTerminal({id, name, extension, labelIds,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ editCameraTerminal', error);
    }
}


/**
 * 获取巡检任务列表
 * @params Keyword {string} 关键字搜索 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDetectionTasks(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDetectionTasks(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getDetectionTasks', error);
    }
}


/**
 * 获取指定巡检任务详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @jobId {string} QTS 的任务 Id
 *    @jobName {string} QTS 的任务名
 *    @jobGroup {string} QTS 的任务组
 *    @jobMode {integer} 定时任务的模式（1-定时|2-手动）1:Timing; 2:Manual; 
 *    @jobBeginTime {string} QTS 定时任务开始时间
 *    @jobEndTime {string} QTS 定时任务结束时间
 *    @nextExecuteTime {string} 下次执行时间
 *    @jobStatus {integer} Qts的状态(0-正常|1-已停止|2-完成|3-错误|4-已有任务执行中|5-触发器不存在)0:Normal; 1:Stopped; 2:Completed; 3:Error; 4:Executing; 5:TriggerNoExist; 
 *    @jobCron {string} QTS 定时任务的Cron表达式
 *    @detectCameraGroupId {string} 巡检的监控组 Id
 *    @detectCameraGroupName {string} 巡检的监控组名称
 *    @isPicture {boolean} 巡检任务是否截图
 *    @isRecord {boolean} 巡检任务是否录像
 *    @taskId {string} VFS 巡检任务 Id
 *    @taskBeginTime {string} VFS 巡检任务开始时间
 *    @taskExecutedCount {integer} 该定时任务已执行次数
 *    @cameraDetectedCount {integer} 巡检任务已巡检的监控数
 *    @remainingDuration {string} 剩余时长
 *    @taskStatus {integer} 巡检任务状态(0-巡检中|1-巡检结束|2-巡检取消|3-巡检暂停|4-未巡检)0:Detecting; 1:DetectingFinish; 2:DetectionCancel; 3:DetectionPause; 4:NoneDetection; 
 *    @cameraAmount {integer} 监控总数
 *    @excellentCameraAmount {integer} 质量优的监控总数
 *    @goodCameraAmount {integer} 质量良的监控总数
 *    @badCameraAmount {integer} 质量差的监控总数
 *    @faultCameraAmount {integer} 故障监控总数
 *    @isSendNotifications {boolean} 是否发送巡检通知
 *    @detectionType {integer} 巡检类型 0 - 监控组， 1 - 标签0:CameraGroup; 1:CameraLabel; 
 *    @isSendEmail {boolean} 是否发送邮件
 *    @owners {array} 通知人
 *    @progress {integer} 进度
*/
async getDetectionTaskById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDetectionTaskById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getDetectionTaskById', error);
    }
}


/**
 * 指定人是否具备对应的行政区域权限
 * @params userId {string} 指定人用户id （必填）
 * @headers X-version {string}  
 * @params areaCodes {array} 行政区域码 
 * @returns
 *    @hasPermission {boolean} 是否具备数据权限
 *    @areaCode {string} 行政区域码
*/
async judgeAreaCodePermission({ userId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.judgeAreaCodePermission({userId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ judgeAreaCodePermission', error);
    }
}


/**
 * 通过经纬度获取行政区域列表集合（国家、省、市、县）
 * @params Longitude {number} 经度 
 * @params Latitude {number} 纬度 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDistrictByCoordinate(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDistrictByCoordinate(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getDistrictByCoordinate', error);
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
 * @params keyword {string} 模糊匹配关键字 
 * @params eventTypes {string} 事件类型，使用英文","隔开 
 * @params priorities {string} 事件优先级，使用英文","隔开 
 * @params areaCodes {string} 行政区域码，使用英文","隔开 
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开，传入完整的行政区域码也会分割处理为区域码前缀 
 * @params groupIds {array} 事件组 
 * @params sourceId {string} 事件源Id 
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getEvents(params = {}, config = {}) {
    try {
        const { data } = await this.api.getEvents(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getEvents', error);
    }
}


/**
 * 支持关系资源的事件搜索
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params status {array} 事件状态 
 * @params upLeft {object} 坐标 
 * @params bottomRight {object} 坐标 
 * @params isSorted {boolean} 是否排序 
 * @params isAudited {boolean} 是否已审核 
 * @params resourceId {string} 资源Id 
 * @params keyword {string} 模糊匹配关键字 
 * @params groupIds {array} 事件组 
 * @params sourceId {string} 事件源Id 
 * @params eventTypes {array} 事件类型ID集合 
 * @params priorities {array} 事件优先级集合 
 * @params areaCodes {array} 行政区域码集合 
 * @params prefixAreaCodes {array} 行政区域码前缀集合 
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params resourceRelationship {object} 资源关系查询(不带分页) 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchEvents(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchEvents(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchEvents', error);
    }
}


/**
 * 获取符合查询条件的基础事件实体
 * @params status {array} 事件状态 
 * @params up_left.Longitude {number} 经度 
 * @params up_left.Latitude {number} 纬度 
 * @params bottom_right.Longitude {number} 经度 
 * @params bottom_right.Latitude {number} 纬度 
 * @params is_sort {boolean} 是否排序 
 * @params keyword {string} 模糊匹配关键字 
 * @params eventTypes {string} 事件类型，使用英文","隔开 
 * @params priorities {string} 事件优先级，使用英文","隔开 
 * @params areaCodes {string} 行政区域码，使用英文","隔开 
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开，传入完整的行政区域码也会分割处理为区域码前缀 
 * @params groupIds {array} 事件组 
 * @params sourceId {string} 事件源Id 
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getBaseEvents(params = {}, config = {}) {
    try {
        const { data } = await this.api.getBaseEvents(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getBaseEvents', error);
    }
}


/**
 * 获取指定id的事件实体
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} Id
 *    @name {string} 事件名称
 *    @priority {integer} 事件优先级
 *    @state {integer} 事件状态
 *    @longitude {number} 事件发生地经度
 *    @latitude {number} 事件发生地纬度
 *    @eventType {object} 事件类型
 *    @createdTime {string} 事件创建时间
 *    @areaCode {string} 行政区域码
 *    @updateTime {string} 更新时间
 *    @resourceId {string} 外部资源唯一Id
 *    @isAudited {boolean} 是否已审核
 *    @description {string} 事件描述
 *    @group {object} 组信息
 *    @sceneGroup {object} 组信息
 *    @happenedTime {string} 事件发生时间
 *    @finishedTime {string} 时间完成时间
 *    @address {string} 事件发生地址
 *    @submitUnit {object} 事件归属单位
 *    @unit {object} 事件归属单位
 *    @source {object} 事件来源
 *    @extension {string} 事件扩展字段，用于存项目额外信息
 *    @typeID {string} 事件类型 Id
 *    @expectStartedTime {string} 事件期望发生时间
 *    @expectFinishedTime {string} 事件期望结束时间
 *    @isMock {boolean} 是否模拟事件
 *    @totalTaskCount {integer} 任务总数（父任务）
 *    @noStatedTaskCount {integer} 未开始的任务总数（父任务）
 *    @finishedTaskCount {integer} 已结束的任务总数（父任务）
 *    @isDeleted {boolean} 是否已被删除
 *    @responseLevel {object} 事件绑定的响应等级
 *    @associatePreplanId {string} 事件绑定的预案id
 *    @associatePreplanName {string} 事件绑定的预案的名字
 *    @isHasRecommendPreplan {boolean} 是否拥有推荐预案
 *    @recommendPreplan {object} 事件预案基本实体
*/
async getEventInfo({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventInfo({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getEventInfo', error);
    }
}


/**
 * 获取状态为`未开始`、`处理中`的事件实体
 * @params keyword {string} 模糊匹配关键字 
 * @params eventTypes {string} 事件类型，使用英文","隔开 
 * @params priorities {string} 事件优先级，使用英文","隔开 
 * @params areaCodes {string} 行政区域码，使用英文","隔开 
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开，传入完整的行政区域码也会分割处理为区域码前缀 
 * @params groupIds {array} 事件组 
 * @params sourceId {string} 事件源Id 
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getRunningEvents(params = {}, config = {}) {
    try {
        const { data } = await this.api.getRunningEvents(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getRunningEvents', error);
    }
}


/**
 * 获取状态为`已结束`的事件实体
 * @params isDelete {boolean} 是否被删除 
 * @params keyword {string} 模糊匹配关键字 
 * @params eventTypes {string} 事件类型，使用英文","隔开 
 * @params priorities {string} 事件优先级，使用英文","隔开 
 * @params areaCodes {string} 行政区域码，使用英文","隔开 
 * @params prefixAreaCodes {string} 行政区域码前缀查询，使用英文","隔开，传入完整的行政区域码也会分割处理为区域码前缀 
 * @params groupIds {array} 事件组 
 * @params sourceId {string} 事件源Id 
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getEventsHistory(params = {}, config = {}) {
    try {
        const { data } = await this.api.getEventsHistory(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getEventsHistory', error);
    }
}


/**
 * 获取事件关联相关数据
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getEventsAssociateData({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventsAssociateData({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getEventsAssociateData', error);
    }
}


/**
 * 根据事件id获取当前事件所关联的所有成员（指挥部成员、任务组成员）
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getEventsMembers({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventsMembers({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getEventsMembers', error);
    }
}


/**
 * 多条件查询设施信息
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params keyWord {string} 关键字 
 * @params layerIds {array} 图层Id 
 * @params layerName {string} 图层名,可模糊匹配 
 * @params areaCodes {array} 行政区域代码 
 * @params prefixAreaCodes {array} 行政区域前缀代码,传入完整区域码也会被处理为前缀区域码 
 * @params querySubordinateFacility {boolean} 是否查询下级行政区域设施 （必填）
 * @params resourceRelationship {object} 资源关系查询(不带分页) 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async queryFacilities({ querySubordinateFacility  , ...params}, config = {}) {
    try {
        const { data } = await this.api.queryFacilities({querySubordinateFacility,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ queryFacilities', error);
    }
}


/**
 * 获取资源关系下图层的基于事件周边设施
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params keyWord {string} 关键字 
 * @params layerIds {array} 图层Id 
 * @params layerName {string} 图层名,可模糊匹配 
 * @params areaCodes {array} 行政区域代码 
 * @params prefixAreaCodes {array} 行政区域前缀代码,传入完整区域码也会被处理为前缀区域码 
 * @params querySubordinateFacility {boolean} 是否查询下级行政区域设施 （必填）
 * @params resourceRelationship {object} 资源关系查询(不带分页) 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchFacilitiesByEventId({ eventId, querySubordinateFacility  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchFacilitiesByEventId({eventId, querySubordinateFacility,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchFacilitiesByEventId', error);
    }
}


/**
 * 获取资源关系下图层基于事件周边的统计信息
 * @params eventId {string} eventId （必填）
 * @headers X-version {string}  
 * @params resourceRelationship {object} 资源关系查询(不带分页) （必填）
 * @params radius {number} 半径范围(单位米) 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchFacilityTotalByEventId({ eventId, resourceRelationship  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchFacilityTotalByEventId({eventId, resourceRelationship,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchFacilityTotalByEventId', error);
    }
}


/**
 * 周边设施
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params upLeft {object} 坐标 （必填）
 * @params bottomRight {object} 坐标 （必填）
 * @params layerIds {array} 图层Id列表 （必填）
 * @params keyword {string} 关键字 
 * @params center {object} 坐标 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params sortRule {integer} 排序类型0:AscendingByDistance,距离升序; 1:DescendingByDistance,距离降序;  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getNearFacilities({ upLeft, bottomRight, layerIds, center, radius  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getNearFacilities({upLeft, bottomRight, layerIds, center, radius,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getNearFacilities', error);
    }
}


/**
 * 获取目录下的文件
 * @params directoryId {string} 目录id （必填）
 * @params storageKind {undefined} 储存类型 （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFiles({ directoryId, storageKind  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFiles({directoryId, storageKind,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getFiles', error);
    }
}


/**
 * 分页查询国标下级域列表接口
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getGbLowerDomains(params = {}, config = {}) {
    try {
        const { data } = await this.api.getGbLowerDomains(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getGbLowerDomains', error);
    }
}


/**
 * 创建下级域信息包含下级域定时任务
 * @headers X-version {string}  
 * @params activeRegister {boolean} 是否主动注册 
 * @params civilcode {string} 区域编码 
 * @params gbId {string} 下级域的国标id （必填）
 * @params heartbeadCycle {integer} 心跳周期 
 * @params heartbeadTimeoutCount {integer} 心跳超时次数 
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params manufacturer {integer} 厂商，可为空 
 * @params model {string} 型号，可为空 
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {boolean} 是否需要认证 
 * @params password {string} 认证密码 
 * @params networkType {integer} 下级域网络1:IntranetNetwork; 2:PublicNetwork;  
 * @params sipPort {integer} 下级域的SIP信令端口号 （必填）
 * @params status {integer} 下级域状态1:Onlive; 2:Offline;  
 * @params type {integer} 用户代理类型2:Platform; 113:Encoder; 114:Decoder; 118:NVR; 131:IPC; 300:VCE;  
 * @params userName {string} 登录的用户名，认证时需要 
 * @params rtpRecvType {integer} 国标流媒体收流协议0:UDP; 1:TCPPassive; 2:TCPProactive;  
 * @params rtpSendType {integer} 国标流媒体向下级发流协议0:UDP; 1:TCPPassive; 2:TCPProactive;  
 * @params sipTransProtocol {integer} SIP传输协议类型0:UDP; 1:TCP;  
 * @params extension {undefined} 扩展字段 
 * @params scheduleTask {object} 定时任务 
 * @returns
 *    @jobId {string} 定时任务的Id
 *    @jobName {string} 定时任务名称
 *    @name {string} 下级域名称
 *    @ip {string} 下级域ip地址
 *    @type {integer} 用户代理类型，常见类型，            IPC:131            NVR:118            Platform(国标平台):2            Encoder:113            Decoder:114
 *    @gbId {string} 下级域标识
 *    @sipPort {integer} 端口
 *    @heartBeadCycle {integer} 心跳周期
 *    @heartBeadTimeoutCount {integer} 心跳超时次数
 *    @needAuth {boolean} 是否需要认证
 *    @password {string} 认证密码
 *    @networkType {integer} 网络类型（1：内网，2：公网）
 *    @jobMode {integer} job 的模式1:_1; 2:_2; 
 *    @cron {string} Cron表达式
 *    @nextExecuteTime {string} 下次执行时间
 *    @beginTime {string} 定时任务开始时间
 *    @endTime {string} 定时任务结束时间
 *    @status {integer} 在线状态1-离线2-在线
 *    @taskStatus {integer} 同步状态1:Syncing; 2:SyncCompleted; 3:Applying; 4:ApplyCompleted; 
 *    @timeRemaining {integer} 同步剩余时间，单位/毫秒
 *    @progress {integer} 同步进度，百分比
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @rtpRecvType {integer} 国标流媒体收流协议0:UDP; 1:TCPPassive; 2:TCPProactive; 
 *    @rtpSendType {integer} 国标流媒体向下级发流协议0:UDP; 1:TCPPassive; 2:TCPProactive; 
 *    @sipTransProtocol {integer} SIP传输协议类型0:UDP; 1:TCP; 
 *    @extension {undefined} 扩展字段
 *    @stateDuration {string} 在线/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
*/
async addGbLowerDomains({ gbId, ip, name, sipPort  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addGbLowerDomains({gbId, ip, name, sipPort,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ addGbLowerDomains', error);
    }
}


/**
 * 根据下级域id获取下级域详细信息接口
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @jobId {string} 定时任务的Id
 *    @jobName {string} 定时任务名称
 *    @name {string} 下级域名称
 *    @ip {string} 下级域ip地址
 *    @type {integer} 用户代理类型，常见类型，            IPC:131            NVR:118            Platform(国标平台):2            Encoder:113            Decoder:114
 *    @gbId {string} 下级域标识
 *    @sipPort {integer} 端口
 *    @heartBeadCycle {integer} 心跳周期
 *    @heartBeadTimeoutCount {integer} 心跳超时次数
 *    @needAuth {boolean} 是否需要认证
 *    @password {string} 认证密码
 *    @networkType {integer} 网络类型（1：内网，2：公网）
 *    @jobMode {integer} job 的模式1:_1; 2:_2; 
 *    @cron {string} Cron表达式
 *    @nextExecuteTime {string} 下次执行时间
 *    @beginTime {string} 定时任务开始时间
 *    @endTime {string} 定时任务结束时间
 *    @status {integer} 在线状态1-离线2-在线
 *    @taskStatus {integer} 同步状态1:Syncing; 2:SyncCompleted; 3:Applying; 4:ApplyCompleted; 
 *    @timeRemaining {integer} 同步剩余时间，单位/毫秒
 *    @progress {integer} 同步进度，百分比
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @rtpRecvType {integer} 国标流媒体收流协议0:UDP; 1:TCPPassive; 2:TCPProactive; 
 *    @rtpSendType {integer} 国标流媒体向下级发流协议0:UDP; 1:TCPPassive; 2:TCPProactive; 
 *    @sipTransProtocol {integer} SIP传输协议类型0:UDP; 1:TCP; 
 *    @extension {undefined} 扩展字段
 *    @stateDuration {string} 在线/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
*/
async getGbLowerDomainsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGbLowerDomainsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getGbLowerDomainsById', error);
    }
}


/**
 * 删除指定下级域
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteGbLowerDomains({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteGbLowerDomains({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ deleteGbLowerDomains', error);
    }
}


/**
 * 修改下级域信息
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params heartbeadCycle {integer} 心跳周期 
 * @params heartbeadTimeoutCount {integer} 心跳超时次数 
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {boolean} 是否需要认证 
 * @params password {string} 认证密码 
 * @params networkType {integer} 下级域网络1:IntranetNetwork; 2:PublicNetwork;  
 * @params sipPort {integer} 下级域的SIP信令端口号 （必填）
 * @params userName {string} 用户名,建议同gbid 
 * @params rtpRecvType {integer} 国标流媒体收流协议0:UDP; 1:TCPPassive; 2:TCPProactive;  
 * @params rtpSendType {integer} 国标流媒体向下级发流协议0:UDP; 1:TCPPassive; 2:TCPProactive;  
 * @params sipTransProtocol {integer} SIP传输协议类型0:UDP; 1:TCP;  
 * @params extension {undefined} 扩展字段 
 * @params updateJobIn {object} 修改定时任务参数 
 * @returns
*/
async editGbLowerDomains({ id, ip, name, sipPort  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editGbLowerDomains({id, ip, name, sipPort,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ editGbLowerDomains', error);
    }
}


/**
 * 模糊查询物资（分权分域）
 * @headers X-version {string}  
 * @params keyWord {string} 关键字 
 * @params maxCount {integer} 最大返回值 
 * @params locations {array} 点位集合 
 * @params areaCodes {array} 行政区域代码 
 * @params prefixAreaCodes {array} 行政区域前缀代码,传入完整区域码也会被处理为前缀区域码 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchGoods(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchGoods(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchGoods', error);
    }
}


/**
 * GPS点位搜索
 * @params up_left.Longitude {number} 经度 （必填）
 * @params up_left.Latitude {number} 纬度 （必填）
 * @params bottom_right.Longitude {number} 经度 （必填）
 * @params bottom_right.Latitude {number} 纬度 （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getGps({ up_left.Longitude, up_left.Latitude, bottom_right.Longitude, bottom_right.Latitude  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGps({up_left.Longitude, up_left.Latitude, bottom_right.Longitude, bottom_right.Latitude,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getGps', error);
    }
}


/**
 * 查询指定设备的最新活跃点位
 * @params device {string} 设备Id （必填）
 * @params upload_source_type {undefined} 上报源类型（0:人员上报类型(默认值)；1:终端资产类型） （必填）
 * @headers X-version {string}  
 * @returns
 *    @deviceId {string} 设备Id
 *    @gps {object} GPS数据
 *    @reportTime {string} 上报时间
 *    @uploadSourceType {integer} 上报源类型0:Person; 1:Terminal; 
*/
async getDeviceGps({ device, upload_source_type  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDeviceGps({device, upload_source_type,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getDeviceGps', error);
    }
}


/**
 * 查询多个指定设备的最新活跃点位
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params devices {array} 设备Id:上报源类型，用 "," 分开多个 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchDevicesGps(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchDevicesGps(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchDevicesGps', error);
    }
}


/**
 * 查询设备GPS历史轨迹
 * @params device {string} 设备ID （必填）
 * @params start_time {string} 起始时间 （必填）
 * @params end_time {string} 结束时间 （必填）
 * @params upload_source_type {undefined} 上报源类型（0:人员上报类型(默认值)；1:终端资产类型） 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDeviceGpsHistory({ device, start_time, end_time  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDeviceGpsHistory({device, start_time, end_time,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getDeviceGpsHistory', error);
    }
}


/**
 * 获取设备最后的Gps点位
 * @params day_intervals {integer} 最近多少天内 默认：1 
 * @params device {string} 设备Id （必填）
 * @params upload_source_type {undefined} 上报源类型（0:人员上报类型(默认值)；1:终端资产类型） （必填）
 * @headers X-version {string}  
 * @returns
 *    @deviceId {string} 设备Id
 *    @gps {object} GPS数据
 *    @reportTime {string} 上报时间
 *    @uploadSourceType {integer} 上报源类型0:Person; 1:Terminal; 
*/
async getDeviceLatestGps({ device, upload_source_type  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDeviceLatestGps({device, upload_source_type,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getDeviceLatestGps', error);
    }
}


/**
 * 分页查询组成员
 * @params id {string} id （必填）
 * @params Type {integer} 查询成员类型 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getGroupMember({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGroupMember({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getGroupMember', error);
    }
}


/**
 * 搜索资源关系下预案组
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params resourceRelationship {object} 资源关系查询(不带分页) （必填）
 * @params keyword {string} 关键词 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getGroups({ resourceRelationship  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGroups({resourceRelationship,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getGroups', error);
    }
}


/**
 * 搜索资源关系下预案组组和联系人
 * @headers X-version {string}  
 * @params resourceRelationship {object} 资源关系查询(不带分页) （必填）
 * @params keyword {string} 关键词 
 * @params limit {integer} 最大获取条数 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {object} 组和联系人
*/
async searchGroups({ resourceRelationship  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchGroups({resourceRelationship,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchGroups', error);
    }
}


/**
 * 获取根图层的下级图层的资源统计信息
 * @params LayerName {string} 根图层名称(完全匹配) （必填）
 * @params Keywords {string} 该关键字用于搜索带有关键字的图层 
 * @params AreaCode {string} 行政区域码，查指定区域的统计（不包含下级），如AreaCode只查深圳的统计（不包含下级南山统计） 
 * @params ProductId {string} 产品Id 
 * @params PrefixAreaCodes {array} 行政区域码，查询包括下级的统计，AreaCode，PrefixAreaCodes都传以AreaCode为准 
 * @headers X-version {string}  
 * @returns
 *    @layerId {string} 图层id
 *    @layerName {string} 图层名称
 *    @subordinateLayersTotal {integer} 图层总数
 *    @facilitiesTotal {integer} 设施总数
 *    @subordinateLayers {array} 下级图层资源
*/
async getLayerStatisticsTotal({ LayerName  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getLayerStatisticsTotal({LayerName,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getLayerStatisticsTotal', error);
    }
}


/**
 * 批量获取多个区域的根图层下级图层的资源统计信息
 * @params LayerName {string} 根图层名称(完全匹配) （必填）
 * @params ProductId {string} 产品Id 
 * @params AreaCodes {array} 行政区域码列表，查指定区域的统计（不包含下级），如AreaCode只查深圳的统计（不包含下级南山统计） 
 * @params PrefixAreaCodes {array} 完整区域码，查询包括下级的统计，AreaCode，PrefixAreaCodes都传以AreaCode为准 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getRootLayerStatisticsTotal({ LayerName  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getRootLayerStatisticsTotal({LayerName,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getRootLayerStatisticsTotal', error);
    }
}


/**
 * 查询拍传详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 拍传ID
 *    @name {string} 拍传名称
 *    @templateId {string} 拍传模板Id
 *    @templateName {string} 拍传模板名称
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @address {string} 地址
 *    @fileGroupId {string} 文件组Id
 *    @fileCount {integer} 文件数量
 *    @userId {string} 拍传用户id
 *    @userName {string} 用户名称
 *    @organizationId {string} 组织机构Id
 *    @organizationName {string} 组织机构名称
 *    @uploadTime {string} 上传时间
 *    @company {string} 单位名称
 *    @companyAddress {string} 单位地址
 *    @resourceId {string} 资源ID
 *    @platformId {string} 平台Id
 *    @areaCode {string} 行政区域码
 *    @fileRecords {array} 文件记录
*/
async getMultimediaTransferDetails({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMultimediaTransferDetails({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getMultimediaTransferDetails', error);
    }
}


/**
 * 查询拍传
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params templateId {string} 模板Id 
 * @params keyWord {string} 关键字模糊查询 
 * @params organizationId {string} 组织机构Id 
 * @params userId {string} 用户Id 
 * @params resourceId {string} 资源ID 
 * @params platformId {string} 平台 ID 
 * @params prefixAreaCodes {array} 行政区域码前缀 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchMultimediaTransfers(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchMultimediaTransfers(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchMultimediaTransfers', error);
    }
}


/**
 * 搜索第三方平台
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params platformId {string} 分级平台ID 
 * @params resourceRelationship {object} 资源关系查询(不带分页) 
 * @params platformIds {array} 平台ID 
 * @params keyword {string} 关键词 
 * @params networkId {string} 网络环境id 
 * @params status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线;  
 * @params prefixAreaCodes {array} 行政区域码前缀集合 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @params isContainMainResource {boolean} 返回结果是否包含主体资源 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPlatforms(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPlatforms(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getPlatforms', error);
    }
}


/**
 * 搜索
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchPreplanGroups({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchPreplanGroups({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchPreplanGroups', error);
    }
}


/**
 * 按条件查询预案
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params keyword {string} 模糊匹配关键字 
 * @params eventTypeIds {array} 事件类型ID集合,Empty为所有类型 
 * @params eventPriorities {array} 事件优先级值集合,Empty为所有类型 
 * @params areaCodes {array} 区域码集合，Empty为所有 
 * @params prefixAreaCodes {array} 区域码前缀集合，当AreaCodes不为空时，以AreaCodes为准，Empty为所有 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchPreplans(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchPreplans(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchPreplans', error);
    }
}


/**
 * 通过事件ID匹配预案
 * @params eventId {string} 事件对象内的associatePreplanId预案 > RRS资源关系下的预案 > 同一事件类型同一优先级的预案 > 同一事件类型下未定级预案 >同一事件类型其他优先级的预案 （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 预案ID
 *    @name {string} 预案名称
 *    @eventType {object} 事件类型信息
 *    @eventPriority {integer} 适用于哪种事件优先级
 *    @areaCode {string} 行政区域码
 *    @districtIdPath {string} 行政区域IDPath
 *    @districtNamePath {string} 行政区域NamePath
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
*/
async getPreplansByEventId({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPreplansByEventId({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getPreplansByEventId', error);
    }
}


/**
 * 按条件查询分组的预案（分组包括（推荐预案列表、其他预案列表））
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params eventTypeId {string} 事件类型ID集合,Empty为所有类型 
 * @params eventPriority {integer} 事件优先级 
 * @params areaCode {string} 区域码 
 * @params isMatchNullAreaCode {boolean} 是否匹配空区域码的预案 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {object} 预案分组数据输出实体
*/
async searchPreplanGroup(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchPreplanGroup(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchPreplanGroup', error);
    }
}


/**
 * 新增项目
 * @headers X-version {string}  
 * @params name {string} 项目名称 （必填）
 * @params resourceId {string} 资源Id 
 * @params description {string} 描述 
 * @params parentId {string} 父Id 
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @parentId {string} 父Id
 *    @totalMetadataCount {integer} 元数据统计总数
 *    @description {string} 项目描述
 *    @themes {array} 项目专题列表
 *    @resourceId {string} ResourceId
*/
async addProject({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addProject({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ addProject', error);
    }
}


/**
 * 获取项目
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @resourceId {string} 资源ID
 *    @themes {array} 专题
 *    @parentId {string} 父级ID
 *    @description {string} 描述
*/
async getProjectById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getProjectById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getProjectById', error);
    }
}


/**
 * 导出
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async exportProject({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.exportProject({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ exportProject', error);
    }
}


/**
 * 导入
 * @headers X-version {string}  
 * @returns
*/
async importProject(params = {}, config = {}) {
    try {
        const { data } = await this.api.importProject(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ importProject', error);
    }
}


/**
 * 查询主体下全部类型资源
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params mainResource {object} 查询资源 （必填）
 * @params productId {string} 产品ID 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMainResource({ mainResource  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMainResource({mainResource,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getMainResource', error);
    }
}


/**
 * 查询主体下资源
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params mainResources {array} 主体资源集合 （必填）
 * @params type {string} 资源类型 （必填）
 * @params dataHandleType {integer} 数据类型0:Union,并集; 1:Intersect,交集;  
 * @params productId {string} 产品ID 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getSingleResource({ mainResources, type  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getSingleResource({mainResources, type,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getSingleResource', error);
    }
}


/**
 * 资源搜索
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params mainResources {array} 主体资源集合 （必填）
 * @params type {string} 资源类型 （必填）
 * @params dataHandleType {integer} 数据类型0:Union,并集; 1:Intersect,交集;  
 * @params productId {string} 产品ID 
 * @params keyword {string} 资源类型 
 * @params prefixAreaCodes {array} 行政区域码前缀集合 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchResource({ mainResources, type  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchResource({mainResources, type,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchResource', error);
    }
}


/**
 * 主体绑定事件类型组
 * @headers X-version {string}  
 * @params mainResource {object} 主体 （必填）
 * @params eventTypeGroupRelationships {array} 事件类型组操作集合 
 * @returns
*/
async bindEventTypeGroup({ mainResource  , ...params}, config = {}) {
    try {
        const { data } = await this.api.bindEventTypeGroup({mainResource,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ bindEventTypeGroup', error);
    }
}


/**
 * 主体绑定告警类型
 * @headers X-version {string}  
 * @params mainResource {object} 主体 （必填）
 * @params alarmTypeRelationships {array} 告警类型操作集合 
 * @returns
*/
async bindAlarmType({ mainResource  , ...params}, config = {}) {
    try {
        const { data } = await this.api.bindAlarmType({mainResource,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ bindAlarmType', error);
    }
}


/**
 * 获取指定角色Id权限角色成员数据列表
 * @params role {string} 角色Id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMembersByRole({ role  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMembersByRole({role,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getMembersByRole', error);
    }
}


/**
 * 获取指定角色Id权限组织架构数据列表
 * @params role {string} 角色Id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
 *    @hasAllDataPermission {boolean} 是否有数据全权限
*/
async getOrganizationsByRole({ role  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getOrganizationsByRole({role,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getOrganizationsByRole', error);
    }
}


/**
 * 获取指定角色Id权限行政区划数据列表
 * @params role {string} 角色Id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
 *    @hasAllDataPermission {boolean} 是否有数据全权限
*/
async getDistrictsByRole({ role  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDistrictsByRole({role,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getDistrictsByRole', error);
    }
}


/**
 * 获取指定角色Id权限监控组数据列表
 * @params role {string} 角色Id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
 *    @hasAllDataPermission {boolean} 是否有数据全权限
*/
async getCameraGroupsByRole({ role  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCameraGroupsByRole({role,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getCameraGroupsByRole', error);
    }
}


/**
 * 绑定批量组织架构下用户到指定的角色
 * @params role {string}  （必填）
 * @headers X-version {string}  
 * @params memberIds {array} 成员Id集合 （必填）
 * @params departmentIds {array} 部门成员Id集合 （必填）
 * @returns
*/
async batchAddRole({ role, memberIds, departmentIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchAddRole({role, memberIds, departmentIds,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ batchAddRole', error);
    }
}


/**
 * 搜索（联系人、组、监控、视频会议终端）
 * @params Keyword {string} 关键词 （必填）
 * @params Limit {integer} 搜索数量范围(单一资源和群组资源数量不共享) 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @resources {object} 分页查询结果
 *    @resourceGroups {object} 分页查询结果
*/
async queryResource({ Keyword  , ...params}, config = {}) {
    try {
        const { data } = await this.api.queryResource({Keyword,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ queryResource', error);
    }
}


/**
 * 获取所有状态下的事件总数
 * @headers X-version {string}  
 * @returns
 *    @todayFinishedEventCount {string} 今日已完成事件
 *    @finishedEventCount {string} 结束事件
 *    @notStartedEventCount {string} 未开始事件
 *    @processingEventCount {string} 处理中事件
*/
async getEventCount(params = {}, config = {}) {
    try {
        const { data } = await this.api.getEventCount(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getEventCount', error);
    }
}


/**
 * 获取资源统计数量
 * @params BeginTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params AreaCode {string} 行政区域码，查指定区域的统计（不包含下级），如AreaCode只查深圳的统计（不包含下级南山统计） 
 * @params PrefixAreaCodes {array} 行政区域码前缀，查询包括下级的统计，AreaCode，PrefixAreaCodes都传以AreaCode为准 
 * @headers X-version {string}  
 * @returns
 *    @alarmAmount {integer} 告警数量
 *    @cameraAmount {integer} 监控数量
 *    @eventAmount {integer} 事件数量
 *    @multimediaTransferAmount {integer} 拍传数量
 *    @alertAmount {integer} APTS 告警数量
 *    @monitorDeviceCounts {array} 监测设备终端统计
*/
async getResourceCount(params = {}, config = {}) {
    try {
        const { data } = await this.api.getResourceCount(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getResourceCount', error);
    }
}


/**
 * 按行政区域统计终端
 * @headers X-version {string}  
 * @params areaCodes {array} 行政区域【包含下级】 （必填）
 * @params terminalType {integer} 终端类型0:LawEnforcementInstrument,执法记录仪; 1:ControlTheBall4G,4G布控球; 2:VideoConferenceTerminal,视频会议终端; 3:MobileClusterVehicleStation,移动集群车载台; 4:Other,其他终端; 5:MonitorDevice,监测设备终端; 6:Uav,无人机; 7:IntercomTerminal,对讲终端;  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTerminalByArea({ areaCodes  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTerminalByArea({areaCodes,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getTerminalByArea', error);
    }
}


/**
 * 按行政区域统计第三方平台
 * @headers X-version {string}  
 * @params areaCodes {array} 行政区域【包含下级】 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPlatformByArea({ areaCodes  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPlatformByArea({areaCodes,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getPlatformByArea', error);
    }
}


/**
 * 资产总览
 * @headers X-version {string}  
 * @params platformId {string} 分级id 
 * @params prefixAreaCodes {array} 行政区域码前缀 
 * @params ignoreOtherPlatform {string} 告警：忽略其他平台 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAssetOverview(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAssetOverview(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getAssetOverview', error);
    }
}


/**
 * 客户端总览
 * @headers X-version {string}  
 * @params platformId {string} 分级id 
 * @params prefixAreaCodes {array} 行政区域码前缀 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getClientOverview(params = {}, config = {}) {
    try {
        const { data } = await this.api.getClientOverview(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getClientOverview', error);
    }
}


/**
 * 终端总览
 * @headers X-version {string}  
 * @params platformId {string} 分级id 
 * @params prefixAreaCodes {array} 行政区域码前缀 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTerminalOverview(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTerminalOverview(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getTerminalOverview', error);
    }
}


/**
 * 周边设施按根图层聚合统计
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params layerIds {array} 图层ID 
 * @params upLeft {object} 坐标 （必填）
 * @params bottomRight {object} 坐标 （必填）
 * @params center {object} 坐标 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getSurroundFacilitiesTotal({ upLeft, bottomRight, center, radius  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getSurroundFacilitiesTotal({upLeft, bottomRight, center, radius,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getSurroundFacilitiesTotal', error);
    }
}


/**
 * 图层资源统计
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params productId {string} 产品ID（项目） 
 * @params path {string} 路径，默认根节点 
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params prefixAreaCodes {array} 行政区域码前缀，查询包括下级的统计 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getLayerResourceTotal(params = {}, config = {}) {
    try {
        const { data } = await this.api.getLayerResourceTotal(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getLayerResourceTotal', error);
    }
}


/**
 * 创建定时保活任务
 * @headers X-version {string}  
 * @params jobName {string} 定时任务Name （必填）
 * @params businessId {string} 需要保活的组Id （必填）
 * @params type {integer} 巡检类型 0 - 监控组， 1 - 标签0:CameraGroup; 1:CameraLabel;  
 * @params keepAliveTime {string} 保活时长 单位分钟 （必填）
 * @params isRecording {boolean} 是否录像 
 * @params owners {array} 负责人 
 * @params notificationType {integer} 通知类型 （必填）
 * @params scheduleTask {object} 定时任务 （必填）
 * @returns
 *    @jobId {string} 定时任务Id
 *    @status {integer} 保活任务状态0:NotStarted; 1:InProgress; 2:Ended; 
 *    @jobName {string} 任务名称
 *    @businessId {string} 业务名称监控组Id或者标签Id
 *    @businessName {string} 业务名称
 *    @cameraTotal {integer} 监控数量,保活的监控数量
 *    @createTime {string} 创建时间
 *    @modifyTime {string} 修改时间
 *    @jobMode {integer} 定时任务的模式（1-定时|2-手动）1:Timing; 2:Manual; 
 *    @cron {string} Cron表达式
 *    @nextExecuteTime {string} 下次执行时间
 *    @beginTime {string} 定时任务开始时间
 *    @endTime {string} 定时任务结束时间
 *    @owners {array} 负责人
 *    @notificationType {integer} 通知类型
 *    @keepAliveTime {string} 保活时长
 *    @isRecording {boolean} 是否录制
 *    @executionsTotal {integer} 执行总数
 *    @retryTotal {integer} 重试总数
 *    @successesTotal {integer} 保活成功监控总数
 *    @failTotal {integer} 保活失败监控总数
 *    @type {integer} 巡检类型 0 - 监控组， 1 - 标签0:CameraGroup; 1:CameraLabel; 
*/
async addStreamKeepAliveJobs({ jobName, businessId, keepAliveTime, notificationType, scheduleTask  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addStreamKeepAliveJobs({jobName, businessId, keepAliveTime, notificationType, scheduleTask,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ addStreamKeepAliveJobs', error);
    }
}


/**
 * 获取保活任务列表
 * @params Keyword {string} 关键字，作业的名称 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getStreamKeepAliveJobs(params = {}, config = {}) {
    try {
        const { data } = await this.api.getStreamKeepAliveJobs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getStreamKeepAliveJobs', error);
    }
}


/**
 * 获取指定保活任务
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @jobId {string} 定时任务Id
 *    @status {integer} 保活任务状态0:NotStarted; 1:InProgress; 2:Ended; 
 *    @jobName {string} 任务名称
 *    @businessId {string} 业务名称监控组Id或者标签Id
 *    @businessName {string} 业务名称
 *    @cameraTotal {integer} 监控数量,保活的监控数量
 *    @createTime {string} 创建时间
 *    @modifyTime {string} 修改时间
 *    @jobMode {integer} 定时任务的模式（1-定时|2-手动）1:Timing; 2:Manual; 
 *    @cron {string} Cron表达式
 *    @nextExecuteTime {string} 下次执行时间
 *    @beginTime {string} 定时任务开始时间
 *    @endTime {string} 定时任务结束时间
 *    @owners {array} 负责人
 *    @notificationType {integer} 通知类型
 *    @keepAliveTime {string} 保活时长
 *    @isRecording {boolean} 是否录制
 *    @executionsTotal {integer} 执行总数
 *    @retryTotal {integer} 重试总数
 *    @successesTotal {integer} 保活成功监控总数
 *    @failTotal {integer} 保活失败监控总数
 *    @type {integer} 巡检类型 0 - 监控组， 1 - 标签0:CameraGroup; 1:CameraLabel; 
*/
async getStreamKeepAliveJobById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getStreamKeepAliveJobById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getStreamKeepAliveJobById', error);
    }
}


/**
 * 修改定时保活任务
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params jobName {string} 定时任务Name （必填）
 * @params businessId {string} 需要保活的组Id （必填）
 * @params type {integer} 巡检类型 0 - 监控组， 1 - 标签0:CameraGroup; 1:CameraLabel;  
 * @params keepAliveTime {string} 保活时长 单位分钟 （必填）
 * @params isRecording {boolean} 是否录像 
 * @params owners {array} 负责人 
 * @params notificationType {integer} 通知类型 （必填）
 * @params scheduleTask {object} 定时任务 （必填）
 * @returns
*/
async editStreamKeepAliveJob({ id, jobName, businessId, keepAliveTime, notificationType, scheduleTask  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editStreamKeepAliveJob({id, jobName, businessId, keepAliveTime, notificationType, scheduleTask,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ editStreamKeepAliveJob', error);
    }
}


/**
 * 删除定时保活任务
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @jobId {string} 定时任务Id
 *    @status {integer} 保活任务状态0:NotStarted; 1:InProgress; 2:Ended; 
 *    @jobName {string} 任务名称
 *    @businessId {string} 业务名称监控组Id或者标签Id
 *    @businessName {string} 业务名称
 *    @cameraTotal {integer} 监控数量,保活的监控数量
 *    @createTime {string} 创建时间
 *    @modifyTime {string} 修改时间
 *    @jobMode {integer} 定时任务的模式（1-定时|2-手动）1:Timing; 2:Manual; 
 *    @cron {string} Cron表达式
 *    @nextExecuteTime {string} 下次执行时间
 *    @beginTime {string} 定时任务开始时间
 *    @endTime {string} 定时任务结束时间
 *    @owners {array} 负责人
 *    @notificationType {integer} 通知类型
 *    @keepAliveTime {string} 保活时长
 *    @isRecording {boolean} 是否录制
 *    @executionsTotal {integer} 执行总数
 *    @retryTotal {integer} 重试总数
 *    @successesTotal {integer} 保活成功监控总数
 *    @failTotal {integer} 保活失败监控总数
 *    @type {integer} 巡检类型 0 - 监控组， 1 - 标签0:CameraGroup; 1:CameraLabel; 
*/
async deleteStreamKeepAliveJob({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteStreamKeepAliveJob({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ deleteStreamKeepAliveJob', error);
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
 *    @type {integer} 任务类型             1-类型1             2-类型2             4-类型3             8-类型4            1:_1; 2:_2; 4:_4; 8:_8; 
 *    @state {integer} 任务状态             1-未开始             2-已确认             4-进行中             8-暂停中             16-已完成            1:_1; 2:_2; 4:_4; 8:_8; 16:_16; 
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
 *    @updateTime {string} 更新时间
*/
async getTasksById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTasksById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getTasksById', error);
    }
}


/**
 * 通过事件ID查询所有任务
 * @params eventId {string} 事件ID （必填）
 * @params isRoot {integer} 是否查父节点，0为查出所有，1为查出父任务，默认为0 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTasksByEventId({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTasksByEventId({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getTasksByEventId', error);
    }
}


/**
 * 模糊查询任务
 * @params keyword {string} 模糊匹配关键字 
 * @params EventId {string} 事件ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async queryTasks(params = {}, config = {}) {
    try {
        const { data } = await this.api.queryTasks(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ queryTasks', error);
    }
}


/**
 * 通过父任务ID查询子任务
 * @params id {string} 父任务ID （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getChildrenTasksById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getChildrenTasksById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getChildrenTasksById', error);
    }
}


/**
 * 获取任务关联相关数据
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTaskAssociateData({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTaskAssociateData({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getTaskAssociateData', error);
    }
}


/**
 * 搜索终端
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params platformId {string} 分级平台ID 
 * @params resourceRelationship {object} 资源关系类型查询(不带分页) 
 * @params terminalIds {array} 终端ID 
 * @params keyword {string} 关键词 
 * @params terminalType {integer} 终端类型0:LawEnforcementInstrument,执法记录仪; 1:ControlTheBall4G,4G布控球; 2:VideoConferenceTerminal,视频会议终端; 3:MobileClusterVehicleStation,移动集群车载台; 4:Other,其他终端; 5:MonitorDevice,监测设备终端; 6:Uav,无人机; 7:IntercomTerminal,对讲终端;  
 * @params status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线;  
 * @params networkID {string} 所属网络 
 * @params relateTypeId {string} 关联类型ID 
 * @params sourceId {string} 来源ID 
 * @params groupId {string} 组ID 
 * @params isContainMainResource {boolean} 返回结果是否包含主体资源 
 * @params prefixAreaCodes {array} 行政区域码前缀集合 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchTerminals(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchTerminals(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchTerminals', error);
    }
}


/**
 * 搜索带监控终端
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params platformId {string} 分级平台ID 
 * @params resourceRelationship {object} 资源关系类型查询(不带分页) 
 * @params terminalIds {array} 终端ID 
 * @params keyword {string} 关键词 
 * @params terminalType {integer} 终端类型0:LawEnforcementInstrument,执法记录仪; 1:ControlTheBall4G,4G布控球; 2:VideoConferenceTerminal,视频会议终端; 3:MobileClusterVehicleStation,移动集群车载台; 4:Other,其他终端; 5:MonitorDevice,监测设备终端; 6:Uav,无人机; 7:IntercomTerminal,对讲终端;  
 * @params status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线;  
 * @params networkID {string} 所属网络 
 * @params relateTypeId {string} 关联类型ID 
 * @params sourceId {string} 来源ID 
 * @params groupId {string} 组ID 
 * @params isContainMainResource {boolean} 返回结果是否包含主体资源 
 * @params prefixAreaCodes {array} 行政区域码前缀集合 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchCameraTerminals(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchCameraTerminals(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ searchCameraTerminals', error);
    }
}


/**
 * 获取资产拓扑
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTopology(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTopology(params,config);
        return data;
    } catch (error) {
        return utils.formatError('aggsBiz ~ getTopology', error);
    }
}

```

 