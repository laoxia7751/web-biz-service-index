// api 
``` js
// 通过IP获取资产信息
getAssetsByIp: (params, config) => this._getConfig(`/api/Assets/${params.type}/ip/${params.ip}`, "get", params, config), 
// 资产状态上报
reportAssetsStatus: (params, config) => this._getConfig(`/api/Assets/${params.id}/status/report`, "post", params, config), 
// 获取资产详情
getAssetById: (params, config) => this._getConfig(`/api/Assets/${params.id}`, "get", params, config), 
// 搜索资产
searchAssets: (params, config) => this._getConfig(`/api/Assets`, "post", params, config), 
// 周边资产搜索
searchCircleAreaAsset: (params, config) => this._getConfig(`/api/Assets/circle_area`, "post", params, config), 
// 通用搜索
commonAssetSearch: (params, config) => this._getConfig(`/api/Assets/search`, "post", params, config), 
// 批量获取资产联系人
searchContacts: (params, config) => this._getConfig(`/api/Assets/contacts`, "post", params, config), 
// 重载资产缓存
reloadCache: (params, config) => this._getConfig(`/api/Assets/ReloadCache`, "put", params, config), 
// 获取客户端总览
getClientOverview: (params, config) => this._getConfig(`/api/Client`, "put", params, config), 
// 搜索客户端
getClients: (params, config) => this._getConfig(`/api/Client`, "get", params, config), 
// 新增客户端
addClient: (params, config) => this._getConfig(`/api/Client`, "post", params, config), 
// 通过ID获取客户端
getClientsById: (params, config) => this._getConfig(`/api/Client/${params.id}`, "get", params, config), 
// 更新客户端
editClient: (params, config) => this._getConfig(`/api/Client/${params.id}`, "put", params, config), 
// 删除客户端
deleteClient: (params, config) => this._getConfig(`/api/Client/${params.id}`, "delete", params, config), 
// 导入客户端
importClient: (params, config) => this._getConfig(`/api/Client/import`, "post", params, config), 
// 获取设备总览
getDeviceOverview: (params, config) => this._getConfig(`/api/Device`, "put", params, config), 
// 设备搜索
getDevice: (params, config) => this._getConfig(`/api/Device`, "get", params, config), 
// 新增设备
addDevice: (params, config) => this._getConfig(`/api/Device`, "post", params, config), 
// 获取设备
getDeviceById: (params, config) => this._getConfig(`/api/Device/${params.id}`, "get", params, config), 
// 更新设备
editDevice: (params, config) => this._getConfig(`/api/Device/${params.id}`, "put", params, config), 
// 删除设备
deleteDevice: (params, config) => this._getConfig(`/api/Device/${params.id}`, "delete", params, config), 
// 导入设备（创建NC和MCU不支持指定resourceId）
importDevice: (params, config) => this._getConfig(`/api/Device/import`, "post", params, config), 
// 搜索服务器
getMachines: (params, config) => this._getConfig(`/api/Machines`, "get", params, config), 
// 新增服务器
addMachines: (params, config) => this._getConfig(`/api/Machines`, "post", params, config), 
// 通过ID获取服务器
getMachineById: (params, config) => this._getConfig(`/api/Machines/${params.id}`, "get", params, config), 
// 更新服务器
editMachine: (params, config) => this._getConfig(`/api/Machines/${params.id}`, "put", params, config), 
// 删除服务器
deleteMachine: (params, config) => this._getConfig(`/api/Machines/${params.id}`, "delete", params, config), 
// 获取平台接入MCU
getMcu: (params, config) => this._getConfig(`/api/MCU`, "get", params, config), 
// 根据ID获取MCU
getMcuById: (params, config) => this._getConfig(`/api/MCU/${params.id}`, "get", params, config), 
// 获取符合查询条件的终端
getMcuTerminal: (params, config) => this._getConfig(`/api/MCU/terminal`, "get", params, config), 
// 获取指标
getMetricsById: (params, config) => this._getConfig(`/api/Metrics/${params.id}`, "get", params, config), 
// 更新指标
editMetrics: (params, config) => this._getConfig(`/api/Metrics/${params.id}`, "put", params, config), 
// 删除指标
deleteMetrics: (params, config) => this._getConfig(`/api/Metrics/${params.id}`, "delete", params, config), 
// 搜索指标
getMetrics: (params, config) => this._getConfig(`/api/Metrics`, "get", params, config), 
// 新增指标
addMetrics: (params, config) => this._getConfig(`/api/Metrics`, "post", params, config), 
// 导入指标
importMetrics: (params, config) => this._getConfig(`/api/Metrics/import`, "post", params, config), 
// 获取平台接入NC
getNc: (params, config) => this._getConfig(`/api/Nc`, "get", params, config), 
// 获取NC通过ID
getNcById: (params, config) => this._getConfig(`/api/Nc/${params.id}`, "get", params, config), 
// 获取指定VNC下的号码列表
getNcPhones: (params, config) => this._getConfig(`/api/Nc/${params.id}/phones`, "get", params, config), 
// 获取对应VNC设备的中继群配置
getNcTrunkGroupConfigs: (params, config) => this._getConfig(`/api/Nc/${params.id}/trunk_group_configs`, "get", params, config), 
// 获取网络总览
getNetworksOverview: (params, config) => this._getConfig(`/api/Networks`, "put", params, config), 
// 获取所有网络
getNetworks: (params, config) => this._getConfig(`/api/Networks`, "get", params, config), 
// 增加网络
addNetworks: (params, config) => this._getConfig(`/api/Networks`, "post", params, config), 
// 通过ID获取网络
getNetworkById: (params, config) => this._getConfig(`/api/Networks/${params.id}`, "get", params, config), 
// 更新网络
editNetwork: (params, config) => this._getConfig(`/api/Networks/${params.id}`, "put", params, config), 
// 删除网络
deleteNetwork: (params, config) => this._getConfig(`/api/Networks/${params.id}`, "delete", params, config), 
// 网络导入
importNetworks: (params, config) => this._getConfig(`/api/Networks/import`, "post", params, config), 
// 获取平台总览
getPlatformsOverview: (params, config) => this._getConfig(`/api/Platforms`, "put", params, config), 
// 搜索第三方平台
getPlatforms: (params, config) => this._getConfig(`/api/Platforms`, "get", params, config), 
// 增加平台
addPlatform: (params, config) => this._getConfig(`/api/Platforms`, "post", params, config), 
// POST查询平台集合
searchPlatformsById: (params, config) => this._getConfig(`/api/Platforms/search`, "post", params, config), 
// 获取平台
getPlatformById: (params, config) => this._getConfig(`/api/Platforms/${params.id}`, "get", params, config), 
// 更新平台
editPlatform: (params, config) => this._getConfig(`/api/Platforms/${params.id}`, "put", params, config), 
// 删除平台
deletePlatform: (params, config) => this._getConfig(`/api/Platforms/${params.id}`, "delete", params, config), 
// 批量删除
deletePlatforms: (params, config) => this._getConfig(`/api/Platforms/Batch`, "delete", params, config), 
// 第三方平台导入
importPlatforms: (params, config) => this._getConfig(`/api/Platforms/import`, "post", params, config), 
// 搜索定点装备
getPositionEquipment: (params, config) => this._getConfig(`/api/PositionEquipment`, "get", params, config), 
// 增加定点装备
addPositionEquipment: (params, config) => this._getConfig(`/api/PositionEquipment`, "post", params, config), 
// 通过ID获取定点装备
getPositionEquipmentById: (params, config) => this._getConfig(`/api/PositionEquipment/${params.id}`, "get", params, config), 
// 更新定点装备
editPositionEquipment: (params, config) => this._getConfig(`/api/PositionEquipment/${params.id}`, "put", params, config), 
// 删除定点装备
deletePositionEquipment: (params, config) => this._getConfig(`/api/PositionEquipment/${params.id}`, "delete", params, config), 
// 定位装备导入
importPositionEquipment: (params, config) => this._getConfig(`/api/PositionEquipment/import`, "post", params, config), 
// 总览
getStatisticsOverview: (params, config) => this._getConfig(`/api/Statistics/Overview`, "get", params, config), 
// 支持行政区域前缀获取总览
overviewByPrefixAreaCodes: (params, config) => this._getConfig(`/api/Statistics/Overview/Search`, "post", params, config), 
// 客户端总览
getStatisticsClientOverview: (params, config) => this._getConfig(`/api/Statistics/Overview/Client`, "get", params, config), 
// 支持行政区域前缀获取客户端总览
clientOverviewByPrefixAreaCodes: (params, config) => this._getConfig(`/api/Statistics/Overview/Client/Search`, "post", params, config), 
// 终端总览
getStatisticsTerminalOverview: (params, config) => this._getConfig(`/api/Statistics/Overview/Terminal`, "get", params, config), 
// 支持行政区域前缀获取终端总览
terminalOverviewByPrefixAreaCodes: (params, config) => this._getConfig(`/api/Statistics/Overview/Terminal/Search`, "post", params, config), 
// 按行政区域统计终端
getTerminalByArea: (params, config) => this._getConfig(`/api/Statistics/Area/Terminal`, "post", params, config), 
// 按行政区域统计第三方平台
getPlatformByArea: (params, config) => this._getConfig(`/api/Statistics/Area/Platform`, "post", params, config), 
// 获取监测设备终端分类统计
getMonitorDeviceStatistics: (params, config) => this._getConfig(`/api/Statistics/MonitorDevice`, "post", params, config), 
// 获取终端总览
getTerminals: (params, config) => this._getConfig(`/api/Terminals`, "put", params, config), 
// 终端搜索
searchTerminals: (params, config) => this._getConfig(`/api/Terminals`, "get", params, config), 
// 新增终端
addTerminals: (params, config) => this._getConfig(`/api/Terminals`, "post", params, config), 
// POST查询终端集合
searchTerminalsById: (params, config) => this._getConfig(`/api/Terminals/search`, "post", params, config), 
// 获取终端
getTerminalById: (params, config) => this._getConfig(`/api/Terminals/${params.id}`, "get", params, config), 
// 更新终端
editTerminal: (params, config) => this._getConfig(`/api/Terminals/${params.id}`, "put", params, config), 
// 删除终端
deleteTerminal: (params, config) => this._getConfig(`/api/Terminals/${params.id}`, "delete", params, config), 
// 批量删除
deleteTerminals: (params, config) => this._getConfig(`/api/Terminals/Batch`, "delete", params, config), 
// 同步VCS视频会议终端
syncVcsTerminal: (params, config) => this._getConfig(`/api/Terminals/SyncVcsTerminal`, "put", params, config), 
// 导入终端（创建视频会议终端不支持指定resourceId）
importTerminals: (params, config) => this._getConfig(`/api/Terminals/import`, "post", params, config), 
// 获取来源
getTerminalSource: (params, config) => this._getConfig(`/api/Terminals/source`, "get", params, config), 
// 通过终端号码获取该终端来源
getTerminalSourceByNumber: (params, config) => this._getConfig(`/api/Terminals/source/number`, "get", params, config), 
// 更新资产拓扑
editTopology: (params, config) => this._getConfig(`/api/Topologys/${params.id}`, "put", params, config), 
// 获取资产拓扑
getTopology: (params, config) => this._getConfig(`/api/Topologys`, "get", params, config), 
// 获取类型配置
getTypeConfig: (params, config) => this._getConfig(`/api/TypeConfigs/${params.id}`, "get", params, config), 
// 更新类型配置
editTypeConfig: (params, config) => this._getConfig(`/api/TypeConfigs/${params.id}`, "put", params, config), 
// 删除类型配置
deleteTypeConfig: (params, config) => this._getConfig(`/api/TypeConfigs/${params.id}`, "delete", params, config), 
// 搜索类型配置
getTypeConfigs: (params, config) => this._getConfig(`/api/TypeConfigs`, "get", params, config), 
// 新增类型配置
addTypeConfig: (params, config) => this._getConfig(`/api/TypeConfigs`, "post", params, config), 
// 导入类型配置
importTypeConfigs: (params, config) => this._getConfig(`/api/TypeConfigs/import`, "post", params, config), 
```

 // biz 
``` js
/**
 * 通过IP获取资产信息
 * @params ip {string}  （必填）
 * @params type {undefined}  （必填）
 * @returns
 *    @id {string} 资产ID
 *    @name {string} 资产名称
 *    @ip {string} IP(辅助通过IP查资产、可能为空)
 *    @assetType {undefined} 
 *    @secondaryAssetType {integer} 二级资产类型（依赖一级资产类型，无法枚举）
 *    @contactID {string} 联系人ID
 *    @contactName {string} 联系人名称
 *    @contactPhone {string} 联系人电话
 *    @resourceId {string} 资源关系ID
 *    @areaCode {string} 行政区域码
 *    @isRealAsset {boolean} 是否真实资产【对讲组不是真实资产】
 *    @relateTypeId {string} 关联类型
 *    @detectInfo {undefined} 
 *    @networkID {string} 网络ID【用于探测的网络筛选】
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
*/
async getAssetsByIp({ ip, type  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAssetsByIp({ip, type,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getAssetsByIp', error);
    }
}


/**
 * 资产状态上报
 * @params id {string} id （必填）
 * @params assetType {integer} 资产类型0:Device,设备; 1:Client,客户端; 2:Terminal,终端; 3:Network,网络; 4:ThirdPlatform,第三方平台; 5:PositionEquipment,定位装备;  （必填）
 * @params assetStatus {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线;  （必填）
 * @returns
*/
async reportAssetsStatus({ id, assetType, assetStatus  , ...params}, config = {}) {
    try {
        const { data } = await this.api.reportAssetsStatus({id, assetType, assetStatus,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ reportAssetsStatus', error);
    }
}


/**
 * 获取资产详情
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @returns
*/
async getAssetById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAssetById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getAssetById', error);
    }
}


/**
 * 搜索资产
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params platformId {string} 分级平台ID 
 * @params assetIds {array} 资产ID 
 * @params keyword {string} 关键词 
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @params assetType {integer} 资产类型0:Device,设备; 1:Client,客户端; 2:Terminal,终端; 3:Network,网络; 4:ThirdPlatform,第三方平台; 5:PositionEquipment,定位装备;  （必填）
 * @params secondaryAssetType {integer} 二级资产类型（依赖一级资产类型） 
 * @params relateTypeId {string} 关联类型ID 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchAssets({ assetType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchAssets({assetType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ searchAssets', error);
    }
}


/**
 * 周边资产搜索
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params platformId {string} 分级平台ID 
 * @params assetIds {array} 资产ID 
 * @params keyword {string} 关键词 
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @params assetType {integer} 资产类型0:Device,设备; 1:Client,客户端; 2:Terminal,终端; 3:Network,网络; 4:ThirdPlatform,第三方平台; 5:PositionEquipment,定位装备;  （必填）
 * @params secondaryAssetType {integer} 二级资产类型（依赖一级资产类型） 
 * @params relateTypeId {string} 关联类型ID 
 * @params upLeft {object} 坐标点 （必填）
 * @params bottomRight {object} 坐标点 （必填）
 * @params center {object} 坐标点 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params sortRule {integer} 排序规则0:AscendingByDistance; 1:DescendingByDistance;  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchCircleAreaAsset({ assetType, upLeft, bottomRight, center, radius  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchCircleAreaAsset({assetType, upLeft, bottomRight, center, radius,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ searchCircleAreaAsset', error);
    }
}


/**
 * 通用搜索
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params platformId {string} 分级平台ID 
 * @params assetIds {array} 资产ID 
 * @params keyword {string} 关键词 
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @params assetType {integer} 资产类型0:Device,设备; 1:Client,客户端; 2:Terminal,终端; 3:Network,网络; 4:ThirdPlatform,第三方平台; 5:PositionEquipment,定位装备;  （必填）
 * @params secondaryAssetType {integer} 二级资产类型（依赖一级资产类型） 
 * @params relateTypeId {string} 关联类型ID 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async commonAssetSearch({ assetType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.commonAssetSearch({assetType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ commonAssetSearch', error);
    }
}


/**
 * 批量获取资产联系人
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params platformId {string} 分级平台ID 
 * @params assetIds {array} 资产ID集合 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchContacts(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchContacts(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ searchContacts', error);
    }
}


/**
 * 重载资产缓存
 * @returns
*/
async reloadCache(params = {}, config = {}) {
    try {
        const { data } = await this.api.reloadCache(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ reloadCache', error);
    }
}


/**
 * 获取客户端总览
 * @params platformId {string} platformId 
 * @returns
 *    @name {string} 资产名称
 *    @description {string} 资源描述
 *    @totalCount {integer} 总数
 *    @onlineCount {number} 在线资产数量
 *    @isHaveOnlineState {boolean} 是否存在在线状态
 *    @onlinePercent {number} 在线率
 *    @group {array} 子分类
 *    @managerAddress {string} 资产管理地址
*/
async getClientOverview(params = {}, config = {}) {
    try {
        const { data } = await this.api.getClientOverview(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getClientOverview', error);
    }
}


/**
 * 搜索客户端
 * @params keyword {string} 关键词 
 * @params networkID {string} 所属网络ID 
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getClients(params = {}, config = {}) {
    try {
        const { data } = await this.api.getClients(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getClients', error);
    }
}


/**
 * 新增客户端
 * @params name {string} 名称 （必填）
 * @params ip {string} IP （必填）
 * @params mac {string} MAC 
 * @params model {string} 型号 
 * @params os {string} 操作系统 
 * @params description {string} 描述信息 
 * @params extension {undefined} 拓展 
 * @params contact {object} 联系人 
 * @params clientType {integer} 客户端类型0:CommandDispatchClient,指挥调度客户端; 1:MobileCommandDispatchIntegratedBox,移动指挥调度一体箱; 2:LeadDecisionCommandClient,领导决策指挥客户端;  
 * @params networkID {string} 所属网络ID 
 * @params resourceId {string} 资源ID 
 * @params areaCode {string} 行政区域码 
 * @params location {undefined}  
 * @params assetMetrics {array} 指标 
 * @params maintenance {undefined}  
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @ip {string} IP
 *    @mac {string} MAC
 *    @model {string} 型号
 *    @os {string} 操作系统
 *    @description {string} 描述信息
 *    @extension {undefined} 拓展
 *    @contact {object} 联系人
 *    @clientType {integer} 客户端类型0:CommandDispatchClient,指挥调度客户端; 1:MobileCommandDispatchIntegratedBox,移动指挥调度一体箱; 2:LeadDecisionCommandClient,领导决策指挥客户端; 
 *    @resourceId {string} 资源ID
 *    @createTime {string} 添加时间
 *    @network {undefined} 
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @areaCode {string} 行政区域码
 *    @location {undefined} 
 *    @assetMetrics {array} 指标
 *    @maintenance {undefined} 
*/
async addClient({ name, ip  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addClient({name, ip,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ addClient', error);
    }
}


/**
 * 通过ID获取客户端
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @ip {string} IP
 *    @mac {string} MAC
 *    @model {string} 型号
 *    @os {string} 操作系统
 *    @description {string} 描述信息
 *    @extension {undefined} 拓展
 *    @contact {object} 联系人
 *    @clientType {integer} 客户端类型0:CommandDispatchClient,指挥调度客户端; 1:MobileCommandDispatchIntegratedBox,移动指挥调度一体箱; 2:LeadDecisionCommandClient,领导决策指挥客户端; 
 *    @resourceId {string} 资源ID
 *    @createTime {string} 添加时间
 *    @network {undefined} 
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @areaCode {string} 行政区域码
 *    @location {undefined} 
 *    @assetMetrics {array} 指标
 *    @maintenance {undefined} 
*/
async getClientsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getClientsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getClientsById', error);
    }
}


/**
 * 更新客户端
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @params ip {string} IP （必填）
 * @params mac {string} MAC 
 * @params model {string} 型号 
 * @params os {string} 操作系统 
 * @params description {string} 描述信息 
 * @params extension {undefined} 拓展 
 * @params contact {object} 联系人 
 * @params clientType {integer} 客户端类型0:CommandDispatchClient,指挥调度客户端; 1:MobileCommandDispatchIntegratedBox,移动指挥调度一体箱; 2:LeadDecisionCommandClient,领导决策指挥客户端;  
 * @params networkID {string} 所属网络ID 
 * @params resourceId {string} 资源ID 
 * @params areaCode {string} 行政区域码 
 * @params location {undefined}  
 * @params assetMetrics {array} 指标 
 * @params maintenance {undefined}  
 * @returns
*/
async editClient({ id, name, ip  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editClient({id, name, ip,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ editClient', error);
    }
}


/**
 * 删除客户端
 * @params id {string} id （必填）
 * @returns
*/
async deleteClient(id, config = {}) {
    try {
        const { data } = await this.api.deleteClient({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ deleteClient', error);
    }
}


/**
 * 导入客户端
 * @params importClients {array} 客户端 （必填）
 * @returns
*/
async importClient({ importClients  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importClient({importClients,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ importClient', error);
    }
}


/**
 * 获取设备总览
 * @params platformId {string} platformId 
 * @returns
 *    @name {string} 资产名称
 *    @description {string} 资源描述
 *    @totalCount {integer} 总数
 *    @onlineCount {number} 在线资产数量
 *    @isHaveOnlineState {boolean} 是否存在在线状态
 *    @onlinePercent {number} 在线率
 *    @group {array} 子分类
 *    @managerAddress {string} 资产管理地址
*/
async getDeviceOverview(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDeviceOverview(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getDeviceOverview', error);
    }
}


/**
 * 设备搜索
 * @params keyword {string} 关键词 
 * @params networkID {string} 所属网络ID 
 * @params deviceType {undefined} 类型 
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDevice(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDevice(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getDevice', error);
    }
}


/**
 * 新增设备
 * @params name {string} 服务器名称 （必填）
 * @params netInfos {array} 网络信息 
 * @params description {string} 描述 
 * @params os {string} 操作系统 
 * @params extension {undefined} 拓展 
 * @params contact {object} 联系人 
 * @params account {string} 账号 
 * @params password {string} 密码 
 * @params deviceType {integer} 设备类型0:MCU,MCU; 1:NC,NC; 2:Machine,服务器; 3:SBC,SBC;  
 * @params networkID {string} 所属网络ID 
 * @params resourceId {string} 资源ID 
 * @params areaCode {string} 行政区域码 
 * @params location {undefined}  
 * @params assetMetrics {array} 指标 
 * @params maintenance {undefined}  
 * @returns
 *    @id {string} 标识
 *    @name {string} 服务器名称
 *    @netInfos {array} 网络信息
 *    @description {string} 描述
 *    @os {string} 操作系统
 *    @extension {undefined} 拓展
 *    @contact {object} 联系人
 *    @account {string} 账号
 *    @password {string} 密码
 *    @resourceId {string} 资源ID
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @createTime {string} 添加时间
 *    @deviceType {integer} 设备类型0:MCU,MCU; 1:NC,NC; 2:Machine,服务器; 3:SBC,SBC; 
 *    @network {undefined} 
 *    @areaCode {string} 行政区域码
 *    @location {undefined} 
 *    @assetMetrics {array} 指标
 *    @maintenance {undefined} 
*/
async addDevice({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addDevice({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ addDevice', error);
    }
}


/**
 * 获取设备
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @returns
 *    @id {string} 标识
 *    @name {string} 服务器名称
 *    @netInfos {array} 网络信息
 *    @description {string} 描述
 *    @os {string} 操作系统
 *    @extension {undefined} 拓展
 *    @contact {object} 联系人
 *    @account {string} 账号
 *    @password {string} 密码
 *    @resourceId {string} 资源ID
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @createTime {string} 添加时间
 *    @deviceType {integer} 设备类型0:MCU,MCU; 1:NC,NC; 2:Machine,服务器; 3:SBC,SBC; 
 *    @network {undefined} 
 *    @areaCode {string} 行政区域码
 *    @location {undefined} 
 *    @assetMetrics {array} 指标
 *    @maintenance {undefined} 
*/
async getDeviceById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDeviceById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getDeviceById', error);
    }
}


/**
 * 更新设备
 * @params id {string} id （必填）
 * @params name {string} 服务器名称 （必填）
 * @params netInfos {array} 网络信息 
 * @params description {string} 描述 
 * @params os {string} 操作系统 
 * @params extension {undefined} 拓展 
 * @params contact {object} 联系人 
 * @params account {string} 账号 
 * @params password {string} 密码 
 * @params deviceType {integer} 设备类型0:MCU,MCU; 1:NC,NC; 2:Machine,服务器; 3:SBC,SBC;  
 * @params networkID {string} 所属网络ID 
 * @params resourceId {string} 资源ID 
 * @params areaCode {string} 行政区域码 
 * @params location {undefined}  
 * @params assetMetrics {array} 指标 
 * @params maintenance {undefined}  
 * @returns
*/
async editDevice({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editDevice({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ editDevice', error);
    }
}


/**
 * 删除设备
 * @params id {string} id （必填）
 * @returns
*/
async deleteDevice(id, config = {}) {
    try {
        const { data } = await this.api.deleteDevice({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ deleteDevice', error);
    }
}


/**
 * 导入设备（创建NC和MCU不支持指定resourceId）
 * @params importDevices {array} 设备 （必填）
 * @returns
*/
async importDevice({ importDevices  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importDevice({importDevices,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ importDevice', error);
    }
}


/**
 * 搜索服务器
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMachines(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMachines(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getMachines', error);
    }
}


/**
 * 新增服务器
 * @params name {string} 服务器名称 （必填）
 * @params netInfos {array} 网络信息 
 * @params description {string} 描述 
 * @params os {string} 操作系统 
 * @params extension {undefined} 拓展 
 * @params contact {object} 联系人 
 * @params account {string} 账号 
 * @params password {string} 密码 
 * @params deviceType {integer} 设备类型0:MCU,MCU; 1:NC,NC; 2:Machine,服务器; 3:SBC,SBC;  
 * @params networkID {string} 所属网络ID 
 * @params resourceId {string} 资源ID 
 * @params areaCode {string} 行政区域码 
 * @params location {undefined}  
 * @params assetMetrics {array} 指标 
 * @params maintenance {undefined}  
 * @returns
 *    @id {string} 标识
 *    @name {string} 服务器名称
 *    @netInfos {array} 网络信息
 *    @description {string} 描述
 *    @os {string} 操作系统
 *    @extension {undefined} 拓展
 *    @contact {object} 联系人
 *    @account {string} 账号
 *    @password {string} 密码
 *    @resourceId {string} 资源ID
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @createTime {string} 添加时间
 *    @deviceType {integer} 设备类型0:MCU,MCU; 1:NC,NC; 2:Machine,服务器; 3:SBC,SBC; 
 *    @network {undefined} 
 *    @areaCode {string} 行政区域码
 *    @location {undefined} 
 *    @assetMetrics {array} 指标
 *    @maintenance {undefined} 
*/
async addMachines({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addMachines({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ addMachines', error);
    }
}


/**
 * 通过ID获取服务器
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @returns
 *    @id {string} 标识
 *    @name {string} 服务器名称
 *    @netInfos {array} 网络信息
 *    @description {string} 描述
 *    @os {string} 操作系统
 *    @extension {undefined} 拓展
 *    @contact {object} 联系人
 *    @account {string} 账号
 *    @password {string} 密码
 *    @resourceId {string} 资源ID
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @createTime {string} 添加时间
 *    @deviceType {integer} 设备类型0:MCU,MCU; 1:NC,NC; 2:Machine,服务器; 3:SBC,SBC; 
 *    @network {undefined} 
 *    @areaCode {string} 行政区域码
 *    @location {undefined} 
 *    @assetMetrics {array} 指标
 *    @maintenance {undefined} 
*/
async getMachineById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMachineById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getMachineById', error);
    }
}


/**
 * 更新服务器
 * @params id {string} id （必填）
 * @params name {string} 服务器名称 （必填）
 * @params netInfos {array} 网络信息 
 * @params description {string} 描述 
 * @params os {string} 操作系统 
 * @params extension {undefined} 拓展 
 * @params contact {object} 联系人 
 * @params account {string} 账号 
 * @params password {string} 密码 
 * @params deviceType {integer} 设备类型0:MCU,MCU; 1:NC,NC; 2:Machine,服务器; 3:SBC,SBC;  
 * @params networkID {string} 所属网络ID 
 * @params resourceId {string} 资源ID 
 * @params areaCode {string} 行政区域码 
 * @params location {undefined}  
 * @params assetMetrics {array} 指标 
 * @params maintenance {undefined}  
 * @returns
*/
async editMachine({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editMachine({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ editMachine', error);
    }
}


/**
 * 删除服务器
 * @params id {string} id （必填）
 * @returns
*/
async deleteMachine(id, config = {}) {
    try {
        const { data } = await this.api.deleteMachine({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ deleteMachine', error);
    }
}


/**
 * 获取平台接入MCU
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMcu(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMcu(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getMcu', error);
    }
}


/**
 * 根据ID获取MCU
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @returns
 *    @id {string} 标识
 *    @type {integer} 平台类型
 *    @name {string} MCU名称
 *    @accessKeyID {string} 授权码
 *    @accessKeySecret {string} 秘钥
 *    @domain {string} IP地址
 *    @description {string} 描述
 *    @extension {undefined} 拓展信息
*/
async getMcuById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMcuById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getMcuById', error);
    }
}


/**
 * 获取符合查询条件的终端
 * @params keyword {string} 模糊匹配关键字 
 * @params type {undefined} 查找的终端类型 
 * @params organization {string} 所属组织架构 
 * @params id {string} MCU ID 
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMcuTerminal(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMcuTerminal(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getMcuTerminal', error);
    }
}


/**
 * 获取指标
 * @params id {string} id （必填）
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @alertTypeId {string} 告警类型ID
 *    @resourceId {string} 来源ID
*/
async getMetricsById(id, config = {}) {
    try {
        const { data } = await this.api.getMetricsById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getMetricsById', error);
    }
}


/**
 * 更新指标
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @params alertTypeId {string} 告警类型ID 
 * @params resourceId {string} 来源ID 
 * @returns
*/
async editMetrics({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editMetrics({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ editMetrics', error);
    }
}


/**
 * 删除指标
 * @params id {string} id （必填）
 * @returns
*/
async deleteMetrics(id, config = {}) {
    try {
        const { data } = await this.api.deleteMetrics({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ deleteMetrics', error);
    }
}


/**
 * 搜索指标
 * @params keyword {string} 关键词 
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMetrics(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMetrics(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getMetrics', error);
    }
}


/**
 * 新增指标
 * @params name {string} 名称 （必填）
 * @params alertTypeId {string} 告警类型ID 
 * @params resourceId {string} 来源ID 
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @alertTypeId {string} 告警类型ID
 *    @resourceId {string} 来源ID
*/
async addMetrics({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addMetrics({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ addMetrics', error);
    }
}


/**
 * 导入指标
 * @params importMetrics {array} 指标 
 * @returns
*/
async importMetrics(params = {}, config = {}) {
    try {
        const { data } = await this.api.importMetrics(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ importMetrics', error);
    }
}


/**
 * 获取平台接入NC
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getNc(params = {}, config = {}) {
    try {
        const { data } = await this.api.getNc(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getNc', error);
    }
}


/**
 * 获取NC通过ID
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @connectionState {integer} 连接状态，0:无效,1:已连接,2:未连接
 *    @description {string} 描述
 *    @prefix {string} VNC字冠
 *    @isKeepAlive {boolean} 是否开启心跳
 *    @timeInterval {integer} 心跳时长
 *    @masterNCDevice {object} NC设备数据
 *    @slaveNCDevice {object} NC设备数据
 *    @longitude {number} 经度
 *    @latitude {number} 维度
*/
async getNcById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getNcById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getNcById', error);
    }
}


/**
 * 获取指定VNC下的号码列表
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字查询 
 * @params IsPhoneLine {boolean} 是否电话线路 
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getNcPhones({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getNcPhones({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getNcPhones', error);
    }
}


/**
 * 获取对应VNC设备的中继群配置
 * @params id {string} id （必填）
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getNcTrunkGroupConfigs({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getNcTrunkGroupConfigs({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getNcTrunkGroupConfigs', error);
    }
}


/**
 * 获取网络总览
 * @params platformId {string} platformId 
 * @returns
 *    @name {string} 资产名称
 *    @description {string} 资源描述
 *    @totalCount {integer} 总数
 *    @onlineCount {number} 在线资产数量
 *    @isHaveOnlineState {boolean} 是否存在在线状态
 *    @onlinePercent {number} 在线率
 *    @group {array} 子分类
 *    @managerAddress {string} 资产管理地址
*/
async getNetworksOverview(params = {}, config = {}) {
    try {
        const { data } = await this.api.getNetworksOverview(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getNetworksOverview', error);
    }
}


/**
 * 获取所有网络
 * @params keyword {string} 关键词 
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getNetworks(params = {}, config = {}) {
    try {
        const { data } = await this.api.getNetworks(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getNetworks', error);
    }
}


/**
 * 增加网络
 * @params name {string} 网络名称 （必填）
 * @params networkInterface {string} 接入网段 （必填）
 * @params boundWidth {integer} 带宽 
 * @params description {string} 描述 
 * @params networkType {integer} 网络类型0:ClusterNetwork,集群网; 1:PoliceNetwork,公安网; 2:GovernmentIntranet,政务内网; 3:GovernmentExtranet,政务外网; 4:VideoPrivateNetwork,视频专网; 5:WiredAndWireless,有线/无线; 6:Network4_5G,4G/5G; 7:LocalAreaNetwork,局域网; 8:NarrowBandNetwork,窄带网; 9:E1,E1; 10:Other,其他网络;  
 * @params extension {undefined} 拓展 
 * @params contact {object} 联系人 
 * @params resourceId {string} 资源ID 
 * @params areaCode {string} 行政区域码 
 * @params location {object} 位置信息 
 * @params assetMetrics {array} 指标 
 * @params maintenance {object} 检测信息 
 * @params proxyIp {string} 代理IP 
 * @params proxyPort {integer} 代理端口 
 * @returns
 *    @id {string} ID
 *    @name {string} 网络名称
 *    @networkInterface {string} 接入网段
 *    @boundWidth {integer} 带宽
 *    @description {string} 描述
 *    @networkType {integer} 网络类型0:ClusterNetwork,集群网; 1:PoliceNetwork,公安网; 2:GovernmentIntranet,政务内网; 3:GovernmentExtranet,政务外网; 4:VideoPrivateNetwork,视频专网; 5:WiredAndWireless,有线/无线; 6:Network4_5G,4G/5G; 7:LocalAreaNetwork,局域网; 8:NarrowBandNetwork,窄带网; 9:E1,E1; 10:Other,其他网络; 
 *    @extension {undefined} 拓展
 *    @contact {object} 联系人
 *    @resourceId {string} 资源ID
 *    @createTime {string} 添加时间
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @areaCode {string} 行政区域码
 *    @location {object} 位置信息
 *    @assetMetrics {array} 指标
 *    @maintenance {object} 检修信息
 *    @proxyIp {string} 代理IP
 *    @proxyPort {integer} 代理端口
*/
async addNetworks({ name, networkInterface  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addNetworks({name, networkInterface,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ addNetworks', error);
    }
}


/**
 * 通过ID获取网络
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @returns
 *    @id {string} ID
 *    @name {string} 网络名称
 *    @networkInterface {string} 接入网段
 *    @boundWidth {integer} 带宽
 *    @description {string} 描述
 *    @networkType {integer} 网络类型0:ClusterNetwork,集群网; 1:PoliceNetwork,公安网; 2:GovernmentIntranet,政务内网; 3:GovernmentExtranet,政务外网; 4:VideoPrivateNetwork,视频专网; 5:WiredAndWireless,有线/无线; 6:Network4_5G,4G/5G; 7:LocalAreaNetwork,局域网; 8:NarrowBandNetwork,窄带网; 9:E1,E1; 10:Other,其他网络; 
 *    @extension {undefined} 拓展
 *    @contact {object} 联系人
 *    @resourceId {string} 资源ID
 *    @createTime {string} 添加时间
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @areaCode {string} 行政区域码
 *    @location {object} 位置信息
 *    @assetMetrics {array} 指标
 *    @maintenance {object} 检修信息
 *    @proxyIp {string} 代理IP
 *    @proxyPort {integer} 代理端口
*/
async getNetworkById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getNetworkById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getNetworkById', error);
    }
}


/**
 * 更新网络
 * @params id {string} id （必填）
 * @params name {string} 网络名称 （必填）
 * @params networkInterface {string} 接入网段 （必填）
 * @params boundWidth {integer} 带宽 
 * @params description {string} 描述 
 * @params networkType {integer} 网络类型0:ClusterNetwork,集群网; 1:PoliceNetwork,公安网; 2:GovernmentIntranet,政务内网; 3:GovernmentExtranet,政务外网; 4:VideoPrivateNetwork,视频专网; 5:WiredAndWireless,有线/无线; 6:Network4_5G,4G/5G; 7:LocalAreaNetwork,局域网; 8:NarrowBandNetwork,窄带网; 9:E1,E1; 10:Other,其他网络;  
 * @params extension {undefined} 拓展 
 * @params contact {object} 联系人 
 * @params resourceId {string} 资源ID 
 * @params areaCode {string} 行政区域码 
 * @params location {object} 位置信息 
 * @params assetMetrics {array} 指标 
 * @params maintenance {object} 检测信息 
 * @params proxyIp {string} 代理IP 
 * @params proxyPort {integer} 代理端口 
 * @returns
*/
async editNetwork({ id, name, networkInterface  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editNetwork({id, name, networkInterface,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ editNetwork', error);
    }
}


/**
 * 删除网络
 * @params id {string} id （必填）
 * @returns
*/
async deleteNetwork(id, config = {}) {
    try {
        const { data } = await this.api.deleteNetwork({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ deleteNetwork', error);
    }
}


/**
 * 网络导入
 * @params importNetworks {array} 网络 （必填）
 * @returns
*/
async importNetworks({ importNetworks  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importNetworks({importNetworks,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ importNetworks', error);
    }
}


/**
 * 获取平台总览
 * @params platformId {string} platformId 
 * @returns
 *    @name {string} 资产名称
 *    @description {string} 资源描述
 *    @totalCount {integer} 总数
 *    @onlineCount {number} 在线资产数量
 *    @isHaveOnlineState {boolean} 是否存在在线状态
 *    @onlinePercent {number} 在线率
 *    @group {array} 子分类
 *    @managerAddress {string} 资产管理地址
*/
async getPlatformsOverview(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPlatformsOverview(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getPlatformsOverview', error);
    }
}


/**
 * 搜索第三方平台
 * @params keyword {string} 关键词 
 * @params platformIds {array} 第三方平台ID列表,同时支持resourceId查询 
 * @params prefixAreaCode {string} 行政区域码前缀查询，使用英文","隔开，传入完整的行政区域码也会分割处理为区域码前缀 
 * @params networkID {string} 所属网络ID 
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPlatforms(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPlatforms(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getPlatforms', error);
    }
}


/**
 * 增加平台
 * @params name {string} 名称 （必填）
 * @params description {string} 描述 
 * @params ipAddress {string} 接入IP 
 * @params managerAddress {string} 平台管理地址 （必填）
 * @params account {string} 账号 
 * @params password {string} 密码 
 * @params areaCode {string} 行政区域码 
 * @params department {string} 所属部门 
 * @params extension {undefined} 拓展 
 * @params contact {object} 联系人 
 * @params accessMethod {string} 接入方式 
 * @params networkID {string} 所属网络ID 
 * @params resourceId {string} 资源ID 
 * @params location {object} 位置信息 
 * @params assetMetrics {array} 指标 
 * @params maintenance {object} 检测信息 
 * @returns
 *    @id {string} Id
 *    @ipAddress {string} 接入IP
 *    @managerAddress {string} 平台管理地址
 *    @name {string} 名称
 *    @description {string} 描述
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @account {string} 账号
 *    @password {string} 密码
 *    @areaCode {string} 行政区域码
 *    @department {string} 所属部门
 *    @extension {undefined} 拓展
 *    @contact {object} 联系人
 *    @accessMethod {string} 接入方式
 *    @resourceId {string} 资源ID
 *    @createTime {string} 添加时间
 *    @network {object} 网络基础信息
 *    @location {object} 位置信息
 *    @assetMetrics {array} 指标
 *    @maintenance {object} 检修信息
*/
async addPlatform({ name, managerAddress  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addPlatform({name, managerAddress,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ addPlatform', error);
    }
}


/**
 * POST查询平台集合
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params platformId {string} 分级平台ID 
 * @params platformIds {array} 第三方平台ID列表,同时支持资源ID(resourceId)查询 
 * @params keyword {string} 关键词 
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @params networkId {string} 网络id 
 * @params status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线;  
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchPlatformsById(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchPlatformsById(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ searchPlatformsById', error);
    }
}


/**
 * 获取平台
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @returns
 *    @id {string} Id
 *    @ipAddress {string} 接入IP
 *    @managerAddress {string} 平台管理地址
 *    @name {string} 名称
 *    @description {string} 描述
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @account {string} 账号
 *    @password {string} 密码
 *    @areaCode {string} 行政区域码
 *    @department {string} 所属部门
 *    @extension {undefined} 拓展
 *    @contact {object} 联系人
 *    @accessMethod {string} 接入方式
 *    @resourceId {string} 资源ID
 *    @createTime {string} 添加时间
 *    @network {object} 网络基础信息
 *    @location {object} 位置信息
 *    @assetMetrics {array} 指标
 *    @maintenance {object} 检修信息
*/
async getPlatformById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPlatformById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getPlatformById', error);
    }
}


/**
 * 更新平台
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @params description {string} 描述 
 * @params ipAddress {string} 接入IP 
 * @params managerAddress {string} 平台管理地址 （必填）
 * @params account {string} 账号 
 * @params password {string} 密码 
 * @params areaCode {string} 行政区域码 
 * @params department {string} 所属部门 
 * @params extension {undefined} 拓展 
 * @params contact {object} 联系人 
 * @params accessMethod {string} 接入方式 
 * @params networkID {string} 所属网络ID 
 * @params resourceId {string} 资源ID 
 * @params location {object} 位置信息 
 * @params assetMetrics {array} 指标 
 * @params maintenance {object} 检测信息 
 * @returns
*/
async editPlatform({ id, name, managerAddress  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editPlatform({id, name, managerAddress,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ editPlatform', error);
    }
}


/**
 * 删除平台
 * @params id {string} id （必填）
 * @returns
*/
async deletePlatform(id, config = {}) {
    try {
        const { data } = await this.api.deletePlatform({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ deletePlatform', error);
    }
}


/**
 * 批量删除
 * @params ids {array} id （必填）
 * @returns
*/
async deletePlatforms(ids, config = {}) {
    try {
        const { data } = await this.api.deletePlatforms({ ids }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ deletePlatforms', error);
    }
}


/**
 * 第三方平台导入
 * @params importThirdPlatforms {array} 第三方平台 （必填）
 * @returns
*/
async importPlatforms({ importThirdPlatforms  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importPlatforms({importThirdPlatforms,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ importPlatforms', error);
    }
}


/**
 * 搜索定点装备
 * @params keyword {string} 关键词 
 * @params networkID {string} 所属网络ID 
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPositionEquipment(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPositionEquipment(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getPositionEquipment', error);
    }
}


/**
 * 增加定点装备
 * @params name {string} 装备名称 （必填）
 * @params contact {object} 联系人 
 * @params equipmentType {integer} 装备类型0:IndividualSoldier,单兵; 1:ControlTheBall,布控球; 2:UAV,无人机;  
 * @params collectionCycle {number} 采集周期 
 * @params description {string} 描述 
 * @params networkID {string} 所属网络ID 
 * @params areaCode {string} 行政区域码 
 * @params resourceId {string} 资源id 
 * @params location {object} 位置信息 
 * @params assetMetrics {array} 指标 
 * @params maintenance {object} 检测信息 
 * @returns
 *    @id {string} 装备标识
 *    @name {string} 装备名称
 *    @contact {object} 联系人
 *    @equipmentType {integer} 装备类型0:IndividualSoldier,单兵; 1:ControlTheBall,布控球; 2:UAV,无人机; 
 *    @collectionCycle {number} 采集周期
 *    @description {string} 描述
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @network {object} 网络基础信息
 *    @areaCode {string} 行政区域码
 *    @resourceId {string} 资源id
 *    @location {object} 位置信息
 *    @assetMetrics {array} 指标
 *    @maintenance {object} 检修信息
*/
async addPositionEquipment({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addPositionEquipment({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ addPositionEquipment', error);
    }
}


/**
 * 通过ID获取定点装备
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @returns
 *    @id {string} 装备标识
 *    @name {string} 装备名称
 *    @contact {object} 联系人
 *    @equipmentType {integer} 装备类型0:IndividualSoldier,单兵; 1:ControlTheBall,布控球; 2:UAV,无人机; 
 *    @collectionCycle {number} 采集周期
 *    @description {string} 描述
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @network {object} 网络基础信息
 *    @areaCode {string} 行政区域码
 *    @resourceId {string} 资源id
 *    @location {object} 位置信息
 *    @assetMetrics {array} 指标
 *    @maintenance {object} 检修信息
*/
async getPositionEquipmentById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPositionEquipmentById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getPositionEquipmentById', error);
    }
}


/**
 * 更新定点装备
 * @params id {string} id （必填）
 * @params name {string} 装备名称 （必填）
 * @params contact {object} 联系人 
 * @params equipmentType {integer} 装备类型0:IndividualSoldier,单兵; 1:ControlTheBall,布控球; 2:UAV,无人机;  
 * @params collectionCycle {number} 采集周期 
 * @params description {string} 描述 
 * @params networkID {string} 所属网络ID 
 * @params areaCode {string} 行政区域码 
 * @params resourceId {string} 资源id 
 * @params location {object} 位置信息 
 * @params assetMetrics {array} 指标 
 * @params maintenance {object} 检测信息 
 * @returns
*/
async editPositionEquipment({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editPositionEquipment({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ editPositionEquipment', error);
    }
}


/**
 * 删除定点装备
 * @params id {string} id （必填）
 * @returns
*/
async deletePositionEquipment(id, config = {}) {
    try {
        const { data } = await this.api.deletePositionEquipment({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ deletePositionEquipment', error);
    }
}


/**
 * 定位装备导入
 * @params importPositionEquipments {array} 定位装备 （必填）
 * @returns
*/
async importPositionEquipment({ importPositionEquipments  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importPositionEquipment({importPositionEquipments,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ importPositionEquipment', error);
    }
}


/**
 * 总览
 * @params ignoreOtherPlatform {string} 告警：忽略其他平台 
 * @params platformId {string} 分级平台ID 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getStatisticsOverview(params = {}, config = {}) {
    try {
        const { data } = await this.api.getStatisticsOverview(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getStatisticsOverview', error);
    }
}


/**
 * 支持行政区域前缀获取总览
 * @params platformId {string} 分级平台ID 
 * @params ignoreOtherPlatform {string} 告警：忽略其他平台 
 * @params prefixAreaCodes {array} 行政区域码前缀 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async overviewByPrefixAreaCodes(params = {}, config = {}) {
    try {
        const { data } = await this.api.overviewByPrefixAreaCodes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ overviewByPrefixAreaCodes', error);
    }
}


/**
 * 客户端总览
 * @params platformId {string} 分级平台ID 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getStatisticsClientOverview(params = {}, config = {}) {
    try {
        const { data } = await this.api.getStatisticsClientOverview(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getStatisticsClientOverview', error);
    }
}


/**
 * 支持行政区域前缀获取客户端总览
 * @params platformId {string} 分级id 
 * @params prefixAreaCodes {array} 行政区域码前缀 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async clientOverviewByPrefixAreaCodes(params = {}, config = {}) {
    try {
        const { data } = await this.api.clientOverviewByPrefixAreaCodes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ clientOverviewByPrefixAreaCodes', error);
    }
}


/**
 * 终端总览
 * @params platformId {string} 分级平台ID 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getStatisticsTerminalOverview(params = {}, config = {}) {
    try {
        const { data } = await this.api.getStatisticsTerminalOverview(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getStatisticsTerminalOverview', error);
    }
}


/**
 * 支持行政区域前缀获取终端总览
 * @params platformId {string} 分级id 
 * @params prefixAreaCodes {array} 行政区域码前缀 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async terminalOverviewByPrefixAreaCodes(params = {}, config = {}) {
    try {
        const { data } = await this.api.terminalOverviewByPrefixAreaCodes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ terminalOverviewByPrefixAreaCodes', error);
    }
}


/**
 * 按行政区域统计终端
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @params terminalType {integer} 终端类型0:LawEnforcementInstrument,执法记录仪; 1:ControlTheBall4G,4G布控球; 2:VideoConferenceTerminal,视频会议终端; 3:MobileClusterVehicleStation,移动集群车载台; 4:Other,其他终端; 5:MonitorDevice,监测设备终端; 6:Uav,无人机; 7:IntercomTerminal,对讲终端;  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTerminalByArea(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTerminalByArea(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getTerminalByArea', error);
    }
}


/**
 * 按行政区域统计第三方平台
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPlatformByArea(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPlatformByArea(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getPlatformByArea', error);
    }
}


/**
 * 获取监测设备终端分类统计
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMonitorDeviceStatistics(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMonitorDeviceStatistics(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getMonitorDeviceStatistics', error);
    }
}


/**
 * 获取终端总览
 * @params platformId {string} platformId 
 * @returns
 *    @name {string} 资产名称
 *    @description {string} 资源描述
 *    @totalCount {integer} 总数
 *    @onlineCount {number} 在线资产数量
 *    @isHaveOnlineState {boolean} 是否存在在线状态
 *    @onlinePercent {number} 在线率
 *    @group {array} 子分类
 *    @managerAddress {string} 资产管理地址
*/
async getTerminals(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTerminals(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getTerminals', error);
    }
}


/**
 * 终端搜索
 * @params keyword {string} 关键词 
 * @params terminalIds {array} 终端ID列表,同时支持resourceId查询 
 * @params terminalType {undefined} 终端类型 
 * @params prefixAreaCode {string} 行政区域码前缀查询，使用英文","隔开，传入完整的行政区域码也会分割处理为区域码前缀 
 * @params status {undefined} 状态 1已连接，2未连接 
 * @params networkID {string} 所属网络ID 
 * @params RelateTypeId {string} 关联类型ID 
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchTerminals(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchTerminals(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ searchTerminals', error);
    }
}


/**
 * 新增终端
 * @params name {string} 名称 （必填）
 * @params ip {string} ip 
 * @params port {string} 端口 
 * @params number {string} 号码 
 * @params description {string} 描述信息 
 * @params account {string} 账号 
 * @params password {string} 密码 
 * @params terminalType {integer} 终端类型0:LawEnforcementInstrument,执法记录仪; 1:ControlTheBall4G,4G布控球; 2:VideoConferenceTerminal,视频会议终端; 3:MobileClusterVehicleStation,移动集群车载台; 4:Other,其他终端; 5:MonitorDevice,监测设备终端; 6:Uav,无人机; 7:IntercomTerminal,对讲终端;  
 * @params areaCode {string} 行政区域码 
 * @params protocolType {string} 协议类型:H323,SFB,SIP,RTSP,RTMP 
 * @params relatePlatformId {string} 关联平台ID 
 * @params extension {undefined} 拓展 
 * @params contact {object} 联系人 
 * @params groupId {string} 终端组id 
 * @params networkID {string} 所属网络ID 
 * @params resourceId {string} 资源ID 
 * @params relateTypeId {string} 关联类型ID 
 * @params terminalLocation {object} 位置信息 
 * @params assetMetrics {array} 指标 
 * @params sourceId {string} 来源ID 
 * @params maintenance {object} 检测信息 
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @ip {string} ip
 *    @port {string} 端口
 *    @number {string} 号码
 *    @description {string} 描述信息
 *    @account {string} 账号
 *    @password {string} 密码
 *    @resourceId {string} 资源ID
 *    @createTime {string} 添加时间
 *    @terminalType {integer} 终端类型0:LawEnforcementInstrument,执法记录仪; 1:ControlTheBall4G,4G布控球; 2:VideoConferenceTerminal,视频会议终端; 3:MobileClusterVehicleStation,移动集群车载台; 4:Other,其他终端; 5:MonitorDevice,监测设备终端; 6:Uav,无人机; 7:IntercomTerminal,对讲终端; 
 *    @areaCode {string} 行政区域码
 *    @protocolType {string} 协议
 *    @relatePlatform {object} 关联平台基础输出
 *    @extension {undefined} 拓展
 *    @contact {object} 联系人
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @relateType {undefined} 
 *    @terminalGroup {object} 终端组
 *    @network {object} 网络基础信息
 *    @terminalLocation {object} 位置信息
 *    @assetMetrics {array} 指标
 *    @source {undefined} 
 *    @maintenance {object} 检修信息
*/
async addTerminals({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addTerminals({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ addTerminals', error);
    }
}


/**
 * POST查询终端集合
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params platformId {string} 分级平台ID 
 * @params terminalIds {array} 终端ID列表,同时支持资源ID(resourceId)查询 
 * @params keyword {string} 关键词 
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @params terminalType {integer} 终端类型0:LawEnforcementInstrument,执法记录仪; 1:ControlTheBall4G,4G布控球; 2:VideoConferenceTerminal,视频会议终端; 3:MobileClusterVehicleStation,移动集群车载台; 4:Other,其他终端; 5:MonitorDevice,监测设备终端; 6:Uav,无人机; 7:IntercomTerminal,对讲终端;  
 * @params status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线;  
 * @params networkID {string} 所属网络 
 * @params relateTypeId {string} 关联类型ID 
 * @params sourceId {string} 来源ID 
 * @params groupId {string} 组ID 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchTerminalsById(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchTerminalsById(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ searchTerminalsById', error);
    }
}


/**
 * 获取终端
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @ip {string} ip
 *    @port {string} 端口
 *    @number {string} 号码
 *    @description {string} 描述信息
 *    @account {string} 账号
 *    @password {string} 密码
 *    @resourceId {string} 资源ID
 *    @createTime {string} 添加时间
 *    @terminalType {integer} 终端类型0:LawEnforcementInstrument,执法记录仪; 1:ControlTheBall4G,4G布控球; 2:VideoConferenceTerminal,视频会议终端; 3:MobileClusterVehicleStation,移动集群车载台; 4:Other,其他终端; 5:MonitorDevice,监测设备终端; 6:Uav,无人机; 7:IntercomTerminal,对讲终端; 
 *    @areaCode {string} 行政区域码
 *    @protocolType {string} 协议
 *    @relatePlatform {object} 关联平台基础输出
 *    @extension {undefined} 拓展
 *    @contact {object} 联系人
 *    @status {integer} 连接状态 1已连接，2未连接1:Online,在线; 2:UnOnline,不在线; 
 *    @relateType {undefined} 
 *    @terminalGroup {object} 终端组
 *    @network {object} 网络基础信息
 *    @terminalLocation {object} 位置信息
 *    @assetMetrics {array} 指标
 *    @source {undefined} 
 *    @maintenance {object} 检修信息
*/
async getTerminalById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTerminalById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getTerminalById', error);
    }
}


/**
 * 更新终端
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @params ip {string} ip 
 * @params port {string} 端口 
 * @params number {string} 号码 
 * @params description {string} 描述信息 
 * @params account {string} 账号 
 * @params password {string} 密码 
 * @params terminalType {integer} 终端类型0:LawEnforcementInstrument,执法记录仪; 1:ControlTheBall4G,4G布控球; 2:VideoConferenceTerminal,视频会议终端; 3:MobileClusterVehicleStation,移动集群车载台; 4:Other,其他终端; 5:MonitorDevice,监测设备终端; 6:Uav,无人机; 7:IntercomTerminal,对讲终端;  
 * @params areaCode {string} 行政区域码 
 * @params protocolType {string} 协议类型:H323,SFB,SIP,RTSP,RTMP 
 * @params relatePlatformId {string} 关联平台ID 
 * @params extension {undefined} 拓展 
 * @params contact {object} 联系人 
 * @params groupId {string} 终端组id 
 * @params networkID {string} 所属网络ID 
 * @params resourceId {string} 资源ID 
 * @params relateTypeId {string} 关联类型ID 
 * @params terminalLocation {object} 位置信息 
 * @params assetMetrics {array} 指标 
 * @params sourceId {string} 来源ID 
 * @params maintenance {object} 检测信息 
 * @returns
*/
async editTerminal({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editTerminal({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ editTerminal', error);
    }
}


/**
 * 删除终端
 * @params id {string} id （必填）
 * @returns
*/
async deleteTerminal(id, config = {}) {
    try {
        const { data } = await this.api.deleteTerminal({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ deleteTerminal', error);
    }
}


/**
 * 批量删除
 * @params ids {array} id （必填）
 * @returns
*/
async deleteTerminals(ids, config = {}) {
    try {
        const { data } = await this.api.deleteTerminals({ ids }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ deleteTerminals', error);
    }
}


/**
 * 同步VCS视频会议终端
 * @returns
*/
async syncVcsTerminal(params = {}, config = {}) {
    try {
        const { data } = await this.api.syncVcsTerminal(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ syncVcsTerminal', error);
    }
}


/**
 * 导入终端（创建视频会议终端不支持指定resourceId）
 * @params importTerminals {array} 终端 （必填）
 * @returns
*/
async importTerminals({ importTerminals  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importTerminals({importTerminals,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ importTerminals', error);
    }
}


/**
 * 获取来源
 * @params TerminalType {undefined} 终端类型 （必填）
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTerminalSource({ TerminalType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTerminalSource({TerminalType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getTerminalSource', error);
    }
}


/**
 * 通过终端号码获取该终端来源
 * @params TerminalType {undefined} 终端类型 
 * @params Number {string} 号码 
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTerminalSourceByNumber(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTerminalSourceByNumber(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getTerminalSourceByNumber', error);
    }
}


/**
 * 更新资产拓扑
 * @params id {string} id （必填）
 * @params height {integer} 高 
 * @params width {integer} 宽 
 * @params topologyNodes {array} 拓扑节点 
 * @params topologyRelationships {array} 节点关系 
 * @returns
*/
async editTopology({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editTopology({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ editTopology', error);
    }
}


/**
 * 获取资产拓扑
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTopology(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTopology(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getTopology', error);
    }
}


/**
 * 获取类型配置
 * @params id {string} id （必填）
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @resourceId {string} 资源id
 *    @type {integer} 配置类型0:MonitorDevice,监测设备终端; 1:IntercomTerminal,对讲终端; 
*/
async getTypeConfig(id, config = {}) {
    try {
        const { data } = await this.api.getTypeConfig({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getTypeConfig', error);
    }
}


/**
 * 更新类型配置
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @params resourceId {string} 资源id 
 * @params type {integer} 配置类型0:MonitorDevice,监测设备终端; 1:IntercomTerminal,对讲终端;  （必填）
 * @returns
*/
async editTypeConfig({ id, name, type  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editTypeConfig({id, name, type,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ editTypeConfig', error);
    }
}


/**
 * 删除类型配置
 * @params id {string} id （必填）
 * @returns
*/
async deleteTypeConfig(id, config = {}) {
    try {
        const { data } = await this.api.deleteTypeConfig({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ deleteTypeConfig', error);
    }
}


/**
 * 搜索类型配置
 * @params keyword {string} 关键词 
 * @params Type {undefined} 配置类型 
 * @params platformId {string} 分级平台ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTypeConfigs(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTypeConfigs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ getTypeConfigs', error);
    }
}


/**
 * 新增类型配置
 * @params name {string} 名称 （必填）
 * @params resourceId {string} 资源id 
 * @params type {integer} 配置类型0:MonitorDevice,监测设备终端; 1:IntercomTerminal,对讲终端;  （必填）
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @resourceId {string} 资源id
 *    @type {integer} 配置类型0:MonitorDevice,监测设备终端; 1:IntercomTerminal,对讲终端; 
*/
async addTypeConfig({ name, type  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addTypeConfig({name, type,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ addTypeConfig', error);
    }
}


/**
 * 导入类型配置
 * @params importTypeConfigs {array} 类型配置 
 * @returns
*/
async importTypeConfigs(params = {}, config = {}) {
    try {
        const { data } = await this.api.importTypeConfigs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('assetBiz ~ importTypeConfigs', error);
    }
}

```

 