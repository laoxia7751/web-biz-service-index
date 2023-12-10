// api 
``` js
// 获取危险设施
getDangerousSourcesByAlarmId: (params, config) => this._getConfig(`/Alarm/DangerousSources`, "get", params, config), 
// 获取重点保护对象
getKeyProtectionsByAlarmId: (params, config) => this._getConfig(`/Alarm/KeyProtections`, "get", params, config), 
// 获取避难场所
getSheltersByAlarmId: (params, config) => this._getConfig(`/Alarm/Shelters`, "get", params, config), 
// 获取应急物资
getWarehousesByAlarmId: (params, config) => this._getConfig(`/Alarm/Warehouses`, "get", params, config), 
// 获取应急设施
getEmergencyFacilitiesByAlarmId: (params, config) => this._getConfig(`/Alarm/EmergencyFacilities`, "get", params, config), 
// 获取人力资源
getManpowerResourcesByAlarmId: (params, config) => this._getConfig(`/Alarm/ManpowerResources`, "get", params, config), 
// 获取医疗资源
getMedicalResourcesByAlarmId: (params, config) => this._getConfig(`/Alarm/MedicalResources`, "get", params, config), 
// 获取污染源
getPollutionSourcesByAlarmId: (params, config) => this._getConfig(`/Alarm/PollutionSources`, "get", params, config), 
// 通过GroupKey获取告警周边资源
getAlarmFacilitiesByGroupKey: (params, config) => this._getConfig(`/api/AlarmFacilities`, "get", params, config), 
// 根据前缀名称匹配到对应预案的图层信息返回树结构
getAlarmFacilitiesStatistics: (params, config) => this._getConfig(`/api/AlarmFacilitiesStatistics`, "get", params, config), 
// 根据GroupKey查询事件设施
getEventFacilitiesByGroupKey: (params, config) => this._getConfig(`/api/EventFacilities`, "get", params, config), 
// DangerousSources
getDangerousSources: (params, config) => this._getConfig(`/DangerousSources`, "get", params, config), 
// KeyProtections
getKeyProtections: (params, config) => this._getConfig(`/KeyProtections`, "get", params, config), 
// Shelters
getShelters: (params, config) => this._getConfig(`/Shelters`, "get", params, config), 
// Warehouses
getWarehouses: (params, config) => this._getConfig(`/Warehouses`, "get", params, config), 
// EmergencyFacilities
getEmergencyFacilities: (params, config) => this._getConfig(`/EmergencyFacilities`, "get", params, config), 
// ManpowerResources
getManpowerResources: (params, config) => this._getConfig(`/ManpowerResources`, "get", params, config), 
// MedicalResources
getMedicalResources: (params, config) => this._getConfig(`/MedicalResources`, "get", params, config), 
// 根据前缀名称匹配到对应预案的图层信息返回树结构
getEventFacilitiesStatistics: (params, config) => this._getConfig(`/api/EventFacilitiesStatistics`, "get", params, config), 
// 根据前缀名称匹配到对应预案的图层信息返回树结构排除掉模型分析的区域设施数量
queryEventFacilitiesStatistics: (params, config) => this._getConfig(`/api/EventFacilitiesStatistics`, "post", params, config), 
```

 // biz 
``` js
/**
 * 获取危险设施
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDangerousSourcesByAlarmId({ AlarmId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDangerousSourcesByAlarmId({AlarmId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getDangerousSourcesByAlarmId', error);
    }
}


/**
 * 获取重点保护对象
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getKeyProtectionsByAlarmId({ AlarmId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getKeyProtectionsByAlarmId({AlarmId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getKeyProtectionsByAlarmId', error);
    }
}


/**
 * 获取避难场所
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getSheltersByAlarmId({ AlarmId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getSheltersByAlarmId({AlarmId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getSheltersByAlarmId', error);
    }
}


/**
 * 获取应急物资
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getWarehousesByAlarmId({ AlarmId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getWarehousesByAlarmId({AlarmId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getWarehousesByAlarmId', error);
    }
}


/**
 * 获取应急设施
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getEmergencyFacilitiesByAlarmId({ AlarmId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEmergencyFacilitiesByAlarmId({AlarmId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getEmergencyFacilitiesByAlarmId', error);
    }
}


/**
 * 获取人力资源
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getManpowerResourcesByAlarmId({ AlarmId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getManpowerResourcesByAlarmId({AlarmId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getManpowerResourcesByAlarmId', error);
    }
}


/**
 * 获取医疗资源
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMedicalResourcesByAlarmId({ AlarmId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMedicalResourcesByAlarmId({AlarmId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getMedicalResourcesByAlarmId', error);
    }
}


/**
 * 获取污染源
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPollutionSourcesByAlarmId({ AlarmId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPollutionSourcesByAlarmId({AlarmId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getPollutionSourcesByAlarmId', error);
    }
}


/**
 * 通过GroupKey获取告警周边资源
 * @params groupKey {string}  （必填）
 * @params AlarmId {string} 告警ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAlarmFacilitiesByGroupKey({ groupKey, AlarmId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAlarmFacilitiesByGroupKey({groupKey, AlarmId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getAlarmFacilitiesByGroupKey', error);
    }
}


/**
 * 根据前缀名称匹配到对应预案的图层信息返回树结构
 * @params AlarmId {string} 告警Id （必填）
 * @params Radius {integer} 半径范围 
 * @params LayerName {string} 图层名称 （必填）
 * @returns
 *    @layerId {string} 图层id
 *    @layerName {string} 图层名称
 *    @facilitiesTotal {integer} 图层对应的设施资源总数
 *    @subordinateLayersTotal {integer} 下级图层总数
 *    @bottomRight {object} 坐标点
 *    @upLeft {object} 坐标点
 *    @subordinateLayers {array} 下级图层信息
*/
async getAlarmFacilitiesStatistics({ AlarmId, LayerName  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAlarmFacilitiesStatistics({AlarmId, LayerName,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getAlarmFacilitiesStatistics', error);
    }
}


/**
 * 根据GroupKey查询事件设施
 * @params groupKey {string}  （必填）
 * @params EventId {string} 事件ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getEventFacilitiesByGroupKey({ groupKey, EventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventFacilitiesByGroupKey({groupKey, EventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getEventFacilitiesByGroupKey', error);
    }
}


/**
 * DangerousSources
 * @params EventId {string} 事件ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDangerousSources({ EventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDangerousSources({EventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getDangerousSources', error);
    }
}


/**
 * KeyProtections
 * @params EventId {string} 事件ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getKeyProtections({ EventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getKeyProtections({EventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getKeyProtections', error);
    }
}


/**
 * Shelters
 * @params EventId {string} 事件ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getShelters({ EventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getShelters({EventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getShelters', error);
    }
}


/**
 * Warehouses
 * @params EventId {string} 事件ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getWarehouses({ EventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getWarehouses({EventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getWarehouses', error);
    }
}


/**
 * EmergencyFacilities
 * @params EventId {string} 事件ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getEmergencyFacilities({ EventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEmergencyFacilities({EventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getEmergencyFacilities', error);
    }
}


/**
 * ManpowerResources
 * @params EventId {string} 事件ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getManpowerResources({ EventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getManpowerResources({EventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getManpowerResources', error);
    }
}


/**
 * MedicalResources
 * @params EventId {string} 事件ID （必填）
 * @params Radius {integer} 半径范围 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMedicalResources({ EventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMedicalResources({EventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getMedicalResources', error);
    }
}


/**
 * 根据前缀名称匹配到对应预案的图层信息返回树结构
 * @params EventId {string} 事件ID （必填）
 * @params Radius {integer} 半径范围 
 * @params LayerName {string} 图层名称 （必填）
 * @returns
 *    @layerId {string} 图层id
 *    @layerName {string} 图层名称
 *    @facilitiesTotal {integer} 图层对应的设施资源总数
 *    @subordinateLayersTotal {integer} 下级图层总数
 *    @bottomRight {object} 坐标点
 *    @upLeft {object} 坐标点
 *    @subordinateLayers {array} 下级图层信息
*/
async getEventFacilitiesStatistics({ EventId, LayerName  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventFacilitiesStatistics({EventId, LayerName,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ getEventFacilitiesStatistics', error);
    }
}


/**
 * 根据前缀名称匹配到对应预案的图层信息返回树结构排除掉模型分析的区域设施数量
 * @params points {array} 多边形经纬度 
 * @params eventId {string} 事件ID （必填）
 * @params radius {integer} 半径范围 
 * @params layerName {string} 图层名称 （必填）
 * @returns
 *    @layerId {string} 图层id
 *    @layerName {string} 图层名称
 *    @facilitiesTotal {integer} 图层对应的设施资源总数
 *    @subordinateLayersTotal {integer} 下级图层总数
 *    @bottomRight {object} 坐标点
 *    @upLeft {object} 坐标点
 *    @subordinateLayers {array} 下级图层信息
*/
async queryEventFacilitiesStatistics({ eventId, layerName  , ...params}, config = {}) {
    try {
        const { data } = await this.api.queryEventFacilitiesStatistics({eventId, layerName,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('preplanAnalysisBiz ~ queryEventFacilitiesStatistics', error);
    }
}

```

 