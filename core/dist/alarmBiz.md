// api 
``` js
// 返回单个id
getAlarmsByID: (params, config) => this._getConfig(`/api/alarms/${params.id}`, "get", params, config), 
// 消除告警
clearAlarm: (params, config) => this._getConfig(`/api/alarms/${params.id}`, "delete", params, config), 
// 分页查找告警
getAlarmsByPage: (params, config) => this._getConfig(`/api/alarms`, "get", params, config), 
// 获取所有告警
getAllAlarms: (params, config) => this._getConfig(`/api/alarms/GetAll`, "get", params, config), 
// 获取告警的信息
getAlarmInfo: (params, config) => this._getConfig(`/api/alarms/GetAlarmInfo`, "post", params, config), 
// 根据时间段查询告警通知数据
getAlarmByTypeIds: (params, config) => this._getConfig(`/api/alarms/GetAlarmByTypeIds`, "get", params, config), 
// 根据行政区域id列表查询告警数据
getAlarmsByDistrictIds: (params, config) => this._getConfig(`/api/alarms/GetAlarmsByDistrictIds`, "get", params, config), 
// 根据行政区域id列表查询告警总数
getAlarmCounterByDistrictId: (params, config) => this._getConfig(`/api/alarms/GetAlarmCounterByDistrictId`, "get", params, config), 
// 根据时间段统计告警类型
getAlarmTypeCounterByTime: (params, config) => this._getConfig(`/api/alarms/GetAlarmTypeCounterByTime`, "get", params, config), 
// 根据时间段统计告警总数
getAlarmCounterByTime: (params, config) => this._getConfig(`/api/alarms/GetAlarmCounterByTime`, "get", params, config), 
// 根据时间段统计告警各行政区域总数
getAlarmDistrictCounterByTime: (params, config) => this._getConfig(`/api/alarms/GetAlarmDistrictCounterByTime`, "get", params, config), 
// 添加告警
addAlarm: (params, config) => this._getConfig(`/api/alarms/Add`, "post", params, config), 
// 更新告警数据
editAlarms: (params, config) => this._getConfig(`/api/alarms/Update`, "put", params, config), 
// 确认告警
confirmAlarm: (params, config) => this._getConfig(`/api/alarms/ConfirmAlarm`, "put", params, config), 
// 按条件查询预案
getPreplans: (params, config) => this._getConfig(`/api/Preplans`, "get", params, config), 
// 创建告警预案
addPreplans: (params, config) => this._getConfig(`/api/Preplans`, "post", params, config), 
// 通过预案ID获取预案
getPreplanById: (params, config) => this._getConfig(`/api/Preplans/${params.id}`, "get", params, config), 
// 更新告警预案
updatePreplan: (params, config) => this._getConfig(`/api/Preplans/${params.id}`, "put", params, config), 
// 删除告警预案
deletePreplan: (params, config) => this._getConfig(`/api/Preplans/${params.id}`, "delete", params, config), 
// 根据行政区域id列表查询告警总数
getAlarmCounterByDistrictIds: (params, config) => this._getConfig(`/api/statisticians/GetAlarmCounterByDistrictIds`, "post", params, config), 
// 提供按类型ID分组的告警总数
getAlarmCounterByTypes: (params, config) => this._getConfig(`/api/statisticians/GetAlarmCounterByTypes`, "post", params, config), 
// 提供按告警源ID分组的告警总数
getAlarmCounterByAlarmSourceIds: (params, config) => this._getConfig(`/api/statisticians/GetAlarmCounterByAlarmSourceIds`, "post", params, config), 
// 提供按级别分组的告警总数
getAlarmCounterByLevel: (params, config) => this._getConfig(`/api/statisticians/GetAlarmCounterByLevel`, "post", params, config), 
// 提供按所属组织架构分组的告警总数
getAlarmCounterByOrganization: (params, config) => this._getConfig(`/api/statisticians/GetAlarmCounterByOrganization`, "post", params, config), 
// 提供告警总数的统计
getAlarmCounter: (params, config) => this._getConfig(`/api/statisticians/AlarmCounter`, "post", params, config), 
// 提供按时间分组的告警总数
getAlarmCounterByMinute: (params, config) => this._getConfig(`/api/statisticians/AlarmCounterByMinute`, "post", params, config), 
// 提供按时间分组的告警总数
queryAlarmCounterByTime: (params, config) => this._getConfig(`/api/statisticians/AlarmCounterByTime`, "post", params, config), 
// 创建告警信息
addThirdAlarms: (params, config) => this._getConfig(`/api/ThirdAlarms`, "post", params, config), 
```

 // biz 
``` js
/**
 * 返回单个id
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @alarmSourceId {string} 告警源ID
 *    @alarmSourceName {string} 告警源名称
 *    @alarmSourceType {integer} 告警源类型
 *    @alarmProcessUrl {string} 告警处置 URL
 *    @alarmDescription {string} 告警描述
 *    @alarmTypeId {integer} 告警类型
 *    @alarmTypeName {string} 告警类型名称
 *    @alarmName {string} 告警名称
 *    @level {integer} 告警等级
 *    @aroseTime {string} 告警产生时间
 *    @longitude {string} 经度
 *    @latitude {string} 纬度
 *    @address {string} 地址
 *    @isConfirmed {boolean} 是否被确认
 *    @confirmTime {string} 确认时间
 *    @extension {string} 拓展字段
 *    @districtId {string} 告警关联的行政区域ID
 *    @districtName {string} 告警关联的行政区域名称
 *    @organizationId {string} 告警关联的组织架构ID
 *    @organizationName {string} 告警关联的组织架构名称
 *    @affirmantId {string} 确认者Id
 *    @affirmantName {string} 确认者名称
 *    @deleteTime {string} 告警消除时间
 *    @id {string} Mongo流水编号
*/
async getAlarmsByID({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAlarmsByID({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmsByID', error);
    }
}


/**
 * 消除告警
 * @params id {string} 告警 Id （必填）
 * @headers X-version {string}  
 * @returns
*/
async clearAlarm({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.clearAlarm({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ clearAlarm', error);
    }
}


/**
 * 分页查找告警
 * @params Keyword {string} 关键字 
 * @params BeginTime {string} 开始时间（作用于告警产生时间） 
 * @params EndTime {string} 结束时间（作用于告警产生时间） 
 * @params bottom_right.Longitude {number} 经度 
 * @params bottom_right.Latitude {number} 纬度 
 * @params up_left.Longitude {number} 经度 
 * @params up_left.Latitude {number} 纬度 
 * @params Type {integer} 告警类型 
 * @params IsConfirmed {boolean} 状态 
 * @params AlarmSourceTypes {array} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台  
 * @params DistrictIds {array} 行政区域ID 
 * @params PrefixDistrictIds {array} 行政区域ID前缀过滤 
 * @params IsSort {boolean} 是否排序 
 * @params page {integer} 页码,从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getAlarmsByPage(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmsByPage(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmsByPage', error);
    }
}


/**
 * 获取所有告警
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getAllAlarms(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAllAlarms(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAllAlarms', error);
    }
}


/**
 * 获取告警的信息
 * @headers X-version {string}  
 * @params keyword {string} 模糊匹配关键字 
 * @params timeQueryType {integer} 告警时间查询类型产生时间=0，确认时间=1，删除时间=2 
 * @params pageIndex {integer} 页码,从1开始 
 * @params pageSize {integer} 页容量, [1,1024] 
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params districtIds {array} 行政区域ID列表 
 * @params prefixDistrictIds {array} 行政区域ID前缀列表 
 * @params queryType {integer} 告警查询类型All = 0,Confirmed = 1,NotConfirm = 2 
 * @params types {array} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测 
 * @params alarmSourceIds {array} 告警源Id列表 
 * @params alarmLevels {array} 告警级别 
 * @params organizationIds {array} 所属组织架构ID列表 
 * @params alarmSourceTypes {array} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getAlarmInfo(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmInfo(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmInfo', error);
    }
}


/**
 * 根据时间段查询告警通知数据
 * @params beginTime {string}  
 * @params endTime {string}  
 * @params queryType {undefined} All = 0,Confirmed = 1,NotConfirm = 2 
 * @params typeIds {array} 告警ID类型，目前暂定EquipmentAlarm = 0,PeopleAlarm = 1,TyphoonAlarm = 2 
 * @params alarmLevels {array} 告警级别列表 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getAlarmByTypeIds(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmByTypeIds(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmByTypeIds', error);
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
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getAlarmsByDistrictIds(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmsByDistrictIds(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmsByDistrictIds', error);
    }
}


/**
 * 根据行政区域id列表查询告警总数
 * @params beginTime {string}  
 * @params endTime {string}  
 * @params districtId {string} districtId 
 * @params queryType {undefined} All = 0,Confirmed = 1,NotConfirm = 2 
 * @headers X-version {string}  
 * @returns
 *    @districtId {string} 行政区域id
 *    @districtName {string} 行政区域名称
 *    @count {integer} 总数
*/
async getAlarmCounterByDistrictId(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmCounterByDistrictId(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmCounterByDistrictId', error);
    }
}


/**
 * 根据时间段统计告警类型
 * @params beginTime {string} 结束时间 
 * @params endTime {string} 开始时间 
 * @params queryType {undefined} All = 0,Confirmed = 1,NotConfirm = 2 
 * @params districtIds {array}  
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getAlarmTypeCounterByTime(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmTypeCounterByTime(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmTypeCounterByTime', error);
    }
}


/**
 * 根据时间段统计告警总数
 * @params timeType {undefined} Hour = 0,Day = 1,Month = 2,Year = 3 
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params queryType {undefined} All = 0,Confirmed = 1,NotConfirm = 2 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getAlarmCounterByTime(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmCounterByTime(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmCounterByTime', error);
    }
}


/**
 * 根据时间段统计告警各行政区域总数
 * @params beginTime {string} 结束时间 
 * @params endTime {string} 开始时间 
 * @params queryType {undefined} All = 0,Confirmed = 1,NotConfirm = 2 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getAlarmDistrictCounterByTime(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmDistrictCounterByTime(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmDistrictCounterByTime', error);
    }
}


/**
 * 添加告警
 * @headers X-version {string}  
 * @params alarmSyncId {string} 告警同步Id （必填）
 * @params alarmSourceId {string} 告警源ID 
 * @params alarmSourceName {string} 告警源名称 
 * @params alarmSourceType {integer} 告警源类型 
 * @params alarmProcessUrl {string} 告警处置 URL 
 * @params alarmDescription {string} 告警描述 
 * @params alarmTypeId {integer} 告警类型 
 * @params alarmTypeName {string} 告警类型 
 * @params alarmName {string} 告警名称 
 * @params level {integer} 告警等级 
 * @params aroseTime {string} 告警产生时间 
 * @params longitude {string} 经度 
 * @params latitude {string} 纬度 
 * @params address {string} 地址 
 * @params isConfirmed {boolean} 是否被确认 
 * @params confirmTime {string} 确认时间 
 * @params extension {string} 拓展字段 
 * @params districtId {string} 告警关联的行政区域ID 
 * @params districtName {string} 告警关联的行政区域名称 
 * @params organizationId {string} 告警关联的组织架构ID 
 * @params organizationName {string} 告警关联的组织架构名称 
 * @params affirmantId {string} 确认者Id 
 * @params affirmantName {string} 确认者名称 
 * @returns
 *    @alarmSourceId {string} 告警源ID
 *    @alarmSourceName {string} 告警源名称
 *    @alarmSourceType {integer} 告警源类型
 *    @alarmProcessUrl {string} 告警处置 URL
 *    @alarmDescription {string} 告警描述
 *    @alarmTypeId {integer} 告警类型
 *    @alarmTypeName {string} 告警类型名称
 *    @alarmName {string} 告警名称
 *    @level {integer} 告警等级
 *    @aroseTime {string} 告警产生时间
 *    @longitude {string} 经度
 *    @latitude {string} 纬度
 *    @address {string} 地址
 *    @isConfirmed {boolean} 是否被确认
 *    @confirmTime {string} 确认时间
 *    @extension {string} 拓展字段
 *    @districtId {string} 告警关联的行政区域ID
 *    @districtName {string} 告警关联的行政区域名称
 *    @organizationId {string} 告警关联的组织架构ID
 *    @organizationName {string} 告警关联的组织架构名称
 *    @affirmantId {string} 确认者Id
 *    @affirmantName {string} 确认者名称
 *    @deleteTime {string} 告警消除时间
 *    @id {string} Mongo流水编号
*/
async addAlarm({ alarmSyncId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addAlarm({alarmSyncId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ addAlarm', error);
    }
}


/**
 * 更新告警数据
 * @params id {string} id 
 * @headers X-version {string}  
 * @params alarmSyncId {string} 告警同步Id （必填）
 * @params alarmSourceId {string} 告警源ID 
 * @params alarmSourceName {string} 告警源名称 
 * @params alarmSourceType {integer} 告警源类型 
 * @params alarmProcessUrl {string} 告警处置 URL 
 * @params alarmDescription {string} 告警描述 
 * @params alarmTypeId {integer} 告警类型 
 * @params alarmTypeName {string} 告警类型 
 * @params alarmName {string} 告警名称 
 * @params level {integer} 告警等级 
 * @params aroseTime {string} 告警产生时间 
 * @params longitude {string} 经度 
 * @params latitude {string} 纬度 
 * @params address {string} 地址 
 * @params isConfirmed {boolean} 是否被确认 
 * @params confirmTime {string} 确认时间 
 * @params extension {string} 拓展字段 
 * @params districtId {string} 告警关联的行政区域ID 
 * @params districtName {string} 告警关联的行政区域名称 
 * @params organizationId {string} 告警关联的组织架构ID 
 * @params organizationName {string} 告警关联的组织架构名称 
 * @params affirmantId {string} 确认者Id 
 * @params affirmantName {string} 确认者名称 
 * @returns
*/
async editAlarms({ alarmSyncId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editAlarms({alarmSyncId,...params},{params:{alarmSyncId,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ editAlarms', error);
    }
}


/**
 * 确认告警
 * @params id {string} id 
 * @headers X-version {string}  
 * @params alarmId {string} 告警ID （必填）
 * @params confirmTime {string} 确认时间 （必填）
 * @params affirmantId {string} 确认者Id 
 * @params affirmantName {string} 确认者名称 
 * @returns
*/
async confirmAlarm({ alarmId, confirmTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.confirmAlarm({alarmId, confirmTime,...params},{params:{alarmId, confirmTime,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ confirmAlarm', error);
    }
}


/**
 * 按条件查询预案
 * @params Keyword {string} 关键字 
 * @params AlarmLevel {integer} 告警级别 
 * @params AlarmType {integer} 告警类型TypeNumber 
 * @params page {integer} 页码,从1开始 默认：1 
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
        return utils.formatError('alarmBiz ~ getPreplans', error);
    }
}


/**
 * 创建告警预案
 * @headers X-version {string}  
 * @params name {string} 告警图层名称 
 * @params alarmTypeId {integer} 告警类型ID 
 * @params alarmLevel {integer} 告警级别 
 * @params dangerousSources {array} 危险源 
 * @params keyProtections {array} 重点防护目标 
 * @params shelters {array} 避难场所 
 * @params warehouses {array} 仓库 
 * @params emergencyFacilities {array} 应急设备 
 * @params manpowerResources {array} 人力资源 
 * @params medicalResources {array} 医疗资源 
 * @params pollutionSources {array} 污染源 
 * @params customResources {object} 自定义类型 
 * @returns
 *    @id {string} 告警图层ID
 *    @name {string} 告警图层名称
 *    @alarmTypeId {integer} 告警类型ID
 *    @alarmTypeName {string} 告警类型名称
 *    @alarmLevel {integer} 告警级别
 *    @dangerousSources {array} 危险源
 *    @keyProtections {array} 重点防护目标
 *    @shelters {array} 避难场所
 *    @warehouses {array} 仓库
 *    @emergencyFacilities {array} 应急设备
 *    @manpowerResources {array} 人力资源
 *    @medicalResources {array} 医疗资源
 *    @pollutionSources {array} 污染源
 *    @customResources {object} 自定义类型
*/
async addPreplans(params = {}, config = {}) {
    try {
        const { data } = await this.api.addPreplans(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ addPreplans', error);
    }
}


/**
 * 通过预案ID获取预案
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 告警图层ID
 *    @name {string} 告警图层名称
 *    @alarmTypeId {integer} 告警类型ID
 *    @alarmTypeName {string} 告警类型名称
 *    @alarmLevel {integer} 告警级别
 *    @dangerousSources {array} 危险源
 *    @keyProtections {array} 重点防护目标
 *    @shelters {array} 避难场所
 *    @warehouses {array} 仓库
 *    @emergencyFacilities {array} 应急设备
 *    @manpowerResources {array} 人力资源
 *    @medicalResources {array} 医疗资源
 *    @pollutionSources {array} 污染源
 *    @customResources {object} 自定义类型
*/
async getPreplanById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPreplanById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getPreplanById', error);
    }
}


/**
 * 更新告警预案
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 告警图层名称 
 * @params alarmTypeId {integer} 告警类型ID 
 * @params alarmLevel {integer} 告警级别 
 * @params dangerousSources {array} 危险源 
 * @params keyProtections {array} 重点防护目标 
 * @params shelters {array} 避难场所 
 * @params warehouses {array} 仓库 
 * @params emergencyFacilities {array} 应急设备 
 * @params manpowerResources {array} 人力资源 
 * @params medicalResources {array} 医疗资源 
 * @params pollutionSources {array} 污染源 
 * @params customResources {object} 自定义类型 
 * @returns
*/
async updatePreplan({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updatePreplan({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ updatePreplan', error);
    }
}


/**
 * 删除告警预案
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deletePreplan({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deletePreplan({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ deletePreplan', error);
    }
}


/**
 * 根据行政区域id列表查询告警总数
 * @headers X-version {string}  
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params districtIds {array} 行政区域ID列表 
 * @params prefixDistrictIds {array} 行政区域ID前缀列表 
 * @params queryType {integer} 告警查询类型All = 0,Confirmed = 1,NotConfirm = 2 
 * @params types {array} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测 
 * @params alarmSourceIds {array} 告警源Id列表 
 * @params alarmLevels {array} 告警级别 
 * @params organizationIds {array} 所属组织架构ID列表 
 * @params alarmSourceTypes {array} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台  
 * @returns
 *    @districtId {string} 行政区域id
 *    @districtName {string} 行政区域名称
 *    @count {integer} 总数
*/
async getAlarmCounterByDistrictIds(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmCounterByDistrictIds(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmCounterByDistrictIds', error);
    }
}


/**
 * 提供按类型ID分组的告警总数
 * @headers X-version {string}  
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params districtIds {array} 行政区域ID列表 
 * @params prefixDistrictIds {array} 行政区域ID前缀列表 
 * @params queryType {integer} 告警查询类型All = 0,Confirmed = 1,NotConfirm = 2 
 * @params types {array} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测 
 * @params alarmSourceIds {array} 告警源Id列表 
 * @params alarmLevels {array} 告警级别 
 * @params organizationIds {array} 所属组织架构ID列表 
 * @params alarmSourceTypes {array} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台  
 * @returns
 *    @districtId {string} 行政区域id
 *    @districtName {string} 行政区域名称
 *    @count {integer} 总数
*/
async getAlarmCounterByTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmCounterByTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmCounterByTypes', error);
    }
}


/**
 * 提供按告警源ID分组的告警总数
 * @headers X-version {string}  
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params districtIds {array} 行政区域ID列表 
 * @params prefixDistrictIds {array} 行政区域ID前缀列表 
 * @params queryType {integer} 告警查询类型All = 0,Confirmed = 1,NotConfirm = 2 
 * @params types {array} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测 
 * @params alarmSourceIds {array} 告警源Id列表 
 * @params alarmLevels {array} 告警级别 
 * @params organizationIds {array} 所属组织架构ID列表 
 * @params alarmSourceTypes {array} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台  
 * @returns
 *    @districtId {string} 行政区域id
 *    @districtName {string} 行政区域名称
 *    @count {integer} 总数
*/
async getAlarmCounterByAlarmSourceIds(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmCounterByAlarmSourceIds(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmCounterByAlarmSourceIds', error);
    }
}


/**
 * 提供按级别分组的告警总数
 * @headers X-version {string}  
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params districtIds {array} 行政区域ID列表 
 * @params prefixDistrictIds {array} 行政区域ID前缀列表 
 * @params queryType {integer} 告警查询类型All = 0,Confirmed = 1,NotConfirm = 2 
 * @params types {array} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测 
 * @params alarmSourceIds {array} 告警源Id列表 
 * @params alarmLevels {array} 告警级别 
 * @params organizationIds {array} 所属组织架构ID列表 
 * @params alarmSourceTypes {array} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台  
 * @returns
 *    @districtId {string} 行政区域id
 *    @districtName {string} 行政区域名称
 *    @count {integer} 总数
*/
async getAlarmCounterByLevel(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmCounterByLevel(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmCounterByLevel', error);
    }
}


/**
 * 提供按所属组织架构分组的告警总数
 * @headers X-version {string}  
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params districtIds {array} 行政区域ID列表 
 * @params prefixDistrictIds {array} 行政区域ID前缀列表 
 * @params queryType {integer} 告警查询类型All = 0,Confirmed = 1,NotConfirm = 2 
 * @params types {array} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测 
 * @params alarmSourceIds {array} 告警源Id列表 
 * @params alarmLevels {array} 告警级别 
 * @params organizationIds {array} 所属组织架构ID列表 
 * @params alarmSourceTypes {array} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台  
 * @returns
 *    @districtId {string} 行政区域id
 *    @districtName {string} 行政区域名称
 *    @count {integer} 总数
*/
async getAlarmCounterByOrganization(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmCounterByOrganization(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmCounterByOrganization', error);
    }
}


/**
 * 提供告警总数的统计
 * @headers X-version {string}  
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params districtIds {array} 行政区域ID列表 
 * @params prefixDistrictIds {array} 行政区域ID前缀列表 
 * @params queryType {integer} 告警查询类型All = 0,Confirmed = 1,NotConfirm = 2 
 * @params types {array} 类型列表,1=断开连接、2=紧急呼叫、3=暴雨、4=音视频联动、5=寒潮、6=大风、7=沙尘暴、8=录音服务器存储空间剩余20%、9=干旱、10=雷电、11=冰雹、12=霜冻、13=大雾、14=霾、15=道路结冰、16=录音服务器存储空间剩余5%、17=环保设备告警、18=消防设备告警、19=可燃气体告警、20=有毒有害告警、21=雷雨大风、22=高温、23=暴雪、24=台风、25=监测设备告警、32=人员告警、65535=其他、26=温度识别、27=液位监测、28=压力监测、29=气体监测 
 * @params alarmSourceIds {array} 告警源Id列表 
 * @params alarmLevels {array} 告警级别 
 * @params organizationIds {array} 所属组织架构ID列表 
 * @params alarmSourceTypes {array} 告警源类型列表10000000-设备 20000000-网关 30000000-服务器 40000000-平台  
 * @returns
 *    @count {integer} 数量
*/
async getAlarmCounter(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmCounter(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmCounter', error);
    }
}


/**
 * 提供按时间分组的告警总数
 * @headers X-version {string}  
 * @returns
 *    @timeSpan {string} 时间点
 *    @count {integer} 数量
 *    @typeName {string} 类型名称
*/
async getAlarmCounterByMinute(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlarmCounterByMinute(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ getAlarmCounterByMinute', error);
    }
}


/**
 * 提供按时间分组的告警总数
 * @headers X-version {string}  
 * @returns
 *    @timeSpan {string} 时间点
 *    @count {integer} 数量
 *    @typeName {string} 类型名称
*/
async queryAlarmCounterByTime(params = {}, config = {}) {
    try {
        const { data } = await this.api.queryAlarmCounterByTime(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ queryAlarmCounterByTime', error);
    }
}


/**
 * 创建告警信息
 * @headers X-version {string}  
 * @params alarmSourceId {string} 测点编号 （必填）
 * @params alarmSourceName {string} 测点名称 （必填）
 * @params alarmSourceType {integer} 异常类型Id 
 * @params alarmSourceTypeName {string} 异常类型名称 
 * @params alarmDescription {string} 告警描述 
 * @params alarmName {string} 告警名称 
 * @params aroseTime {string} 告警产生时间 （必填）
 * @params longitude {number} 经度 
 * @params latitude {number} 纬度 
 * @params deleteTime {string} 告警消除时间 
 * @params alarmTypeId {integer} 告警类型Id （必填）
 * @returns
*/
async addThirdAlarms({ alarmSourceId, alarmSourceName, aroseTime, alarmTypeId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addThirdAlarms({alarmSourceId, alarmSourceName, aroseTime, alarmTypeId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('alarmBiz ~ addThirdAlarms', error);
    }
}

```

 