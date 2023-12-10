// api 
``` js
// 上报GPS点位
updateDevice: (params, config) => this._getConfig(`/api/active_gps/${params.device}`, "put", params, config), 
// 查询可视区域内的设备活跃点
getActiveGps: (params, config) => this._getConfig(`/api/active_gps`, "get", params, config), 
// 查询指定设备的最新活跃点位
getActiveGpsByDevice: (params, config) => this._getConfig(`/api/active_gps/${params.device}/latest`, "get", params, config), 
// 查询多个指定设备的最新活跃点位
getActiveGpsDevicesLatest: (params, config) => this._getConfig(`/api/active_gps/devices/latest`, "get", params, config), 
// 获取设备最后的Gps点位
getHistoryGpsDeviceLatest: (params, config) => this._getConfig(`/api/history_gps/${params.device}/latest`, "get", params, config), 
// 查询设备GPS历史轨迹
getHistoryGpsByDevice: (params, config) => this._getConfig(`/api/history_gps/${params.device}`, "get", params, config), 
// 查询某区域在某个时段内的所有途经设备
getHistoryGps: (params, config) => this._getConfig(`/api/history_gps`, "get", params, config), 
// 历史点补全
updateHistoryGps: (params, config) => this._getConfig(`/api/history_gps`, "put", params, config), 
// 查询某区域在某个时段内的所有途经设备（返回设备Id带类型）
getDevicesHistory: (params, config) => this._getConfig(`/api/history_gps/devices`, "get", params, config), 
```

 // biz 
``` js
/**
 * 上报GPS点位
 * @params device {string}  （必填）
 * @params coordinate {object} 坐标 （必填）
 * @params metersPerSecond {number} 速度(米/秒) （必填）
 * @params direction {number} 方向(取值0-360, 以正北为参考基准) （必填）
 * @params altitude {number} 海拔高度 （必填）
 * @params address {string} 地址 
 * @params reportTime {string} 上报时间(UTC) 
 * @params sourceCoordinateType {integer} 坐标系类型1-WGS84LL3-GCJ02LL5-BD09LL 
 * @params uploadSourceType {integer} 上报源类型（0:人员上报类型(默认值)；1:终端资产类型） 
 * @returns
*/
async updateDevice({ device, coordinate, metersPerSecond, direction, altitude  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateDevice({device, coordinate, metersPerSecond, direction, altitude,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('gcsBiz ~ updateDevice', error);
    }
}


/**
 * 查询可视区域内的设备活跃点
 * @params up_left.longitude {number} 经度 （必填）
 * @params up_left.latitude {number} 纬度 （必填）
 * @params bottom_right.longitude {number} 经度 （必填）
 * @params bottom_right.latitude {number} 纬度 （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, 从1开始 默认：100 
 * @returns
 *    @totalCount {integer} 符合条件的结果总量
 *    @items {array} 结果集
*/
async getActiveGps({ up_left.longitude, up_left.latitude, bottom_right.longitude, bottom_right.latitude  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getActiveGps({up_left.longitude, up_left.latitude, bottom_right.longitude, bottom_right.latitude,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('gcsBiz ~ getActiveGps', error);
    }
}


/**
 * 查询指定设备的最新活跃点位
 * @params device {string}  （必填）
 * @params upload_source_type {integer} 上报源类型（0:人员上报（默认值），1:终端上报类型） 
 * @returns
 *    @deviceId {string} 设备Id
 *    @gps {object} GPS数据
 *    @reportTime {string} 上报时间
 *    @uploadSourceType {integer} 上报源类型
*/
async getActiveGpsByDevice({ device  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getActiveGpsByDevice({device,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('gcsBiz ~ getActiveGpsByDevice', error);
    }
}


/**
 * 查询多个指定设备的最新活跃点位
 * @params Devices {string} 设备Id:上报源类型，用 "," 分开多个 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, 从1开始 默认：100 
 * @returns
 *    @totalCount {integer} 符合条件的结果总量
 *    @items {array} 结果集
*/
async getActiveGpsDevicesLatest(params = {}, config = {}) {
    try {
        const { data } = await this.api.getActiveGpsDevicesLatest(params,config);
        return data;
    } catch (error) {
        return utils.formatError('gcsBiz ~ getActiveGpsDevicesLatest', error);
    }
}


/**
 * 获取设备最后的Gps点位
 * @params device {string} 设备Id （必填）
 * @params day_intervals {integer} 最近多少天内 默认：1 
 * @params upload_source_type {integer} 上报源类型 
 * @returns
 *    @deviceId {string} 设备Id
 *    @gps {object} 
 *    @reportTime {string} 上报时间
 *    @uploadSourceType {integer} 上报源类型
*/
async getHistoryGpsDeviceLatest({ device  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getHistoryGpsDeviceLatest({device,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('gcsBiz ~ getHistoryGpsDeviceLatest', error);
    }
}


/**
 * 查询设备GPS历史轨迹
 * @params device {string} 设备ID （必填）
 * @params start_time {string} 起始时间 （必填）
 * @params end_time {string} 结束时间 （必填）
 * @params upload_source_type {integer} 上报源类型（0:人员上报类型(默认值)；1:终端资产类型） 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, 从1开始 默认：100 
 * @returns
 *    @totalCount {integer} 符合条件的结果总量
 *    @items {array} 结果集
*/
async getHistoryGpsByDevice({ device, start_time, end_time  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getHistoryGpsByDevice({device, start_time, end_time,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('gcsBiz ~ getHistoryGpsByDevice', error);
    }
}


/**
 * 查询某区域在某个时段内的所有途经设备
 * @params up_left.Longitude {number} 经度 （必填）
 * @params up_left.Latitude {number} 纬度 （必填）
 * @params bottom_right.Longitude {number} 经度 （必填）
 * @params bottom_right.Latitude {number} 纬度 （必填）
 * @params start_time {string} 起始时间 （必填）
 * @params minute_intervals {integer} 区间 默认：10 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, 从1开始 默认：100 
 * @returns
 *    @totalCount {integer} 符合条件的结果总量
 *    @items {array} 结果集
*/
async getHistoryGps({ up_left.Longitude, up_left.Latitude, bottom_right.Longitude, bottom_right.Latitude, start_time  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getHistoryGps({up_left.Longitude, up_left.Latitude, bottom_right.Longitude, bottom_right.Latitude, start_time,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('gcsBiz ~ getHistoryGps', error);
    }
}


/**
 * 历史点补全
 * @params deviceId {string} 设备ID （必填）
 * @params gps {object} GPS数据 （必填）
 * @params historyTime {string} 该点应该上报的历史时间 （必填）
 * @params currentTime {string} 客户端当前时间 （必填）
 * @params uploadSourceType {integer} 上报源类型0：人员上报类型（默认值），1：资产终端类型 
 * @returns
*/
async updateHistoryGps({ deviceId, gps, historyTime, currentTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateHistoryGps({deviceId, gps, historyTime, currentTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('gcsBiz ~ updateHistoryGps', error);
    }
}


/**
 * 查询某区域在某个时段内的所有途经设备（返回设备Id带类型）
 * @params up_left.Longitude {number} 经度 （必填）
 * @params up_left.Latitude {number} 纬度 （必填）
 * @params bottom_right.Longitude {number} 经度 （必填）
 * @params bottom_right.Latitude {number} 纬度 （必填）
 * @params start_time {string} 起始时间 （必填）
 * @params minute_intervals {integer} 区间 默认：10 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, 从1开始 默认：100 
 * @returns
 *    @totalCount {integer} 符合条件的结果总量
 *    @items {array} 结果集
*/
async getDevicesHistory({ up_left.Longitude, up_left.Latitude, bottom_right.Longitude, bottom_right.Latitude, start_time  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDevicesHistory({up_left.Longitude, up_left.Latitude, bottom_right.Longitude, bottom_right.Latitude, start_time,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('gcsBiz ~ getDevicesHistory', error);
    }
}

```

 