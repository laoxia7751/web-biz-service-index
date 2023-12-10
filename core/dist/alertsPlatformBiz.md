// api 
``` js
// 查询告警
getAlertRecords: (params, config) => this._getConfig(`/api/AlertRecords`, "get", params, config), 
// 创建告警记录
addAlertRecord: (params, config) => this._getConfig(`/api/AlertRecords`, "post", params, config), 
// 高级搜索接口
searchAlertRecords: (params, config) => this._getConfig(`/api/AlertRecords/search`, "post", params, config), 
// 根据 id 获取告警详情
getAlertRecordById: (params, config) => this._getConfig(`/api/AlertRecords/${params.id}`, "get", params, config), 
// 告警消除
cancelAlertRecord: (params, config) => this._getConfig(`/api/AlertRecords/${params.id}/resolve`, "put", params, config), 
// 查询告警源类型
getAlertSourceTypes: (params, config) => this._getConfig(`/api/AlertSourceTypes`, "get", params, config), 
// 通过 id 获取告警源类型
getAlertSourceTypeById: (params, config) => this._getConfig(`/api/AlertSourceTypes/${params.id}`, "get", params, config), 
// 更新告警源类型
updateAlertSourceType: (params, config) => this._getConfig(`/api/AlertSourceTypes/${params.id}`, "put", params, config), 
// 查询告警类型
getAlertTypes: (params, config) => this._getConfig(`/api/AlertTypes`, "get", params, config), 
// 创建告警类型
addAlertType: (params, config) => this._getConfig(`/api/AlertTypes`, "post", params, config), 
// 获取根告警类型
getRootAlertTypes: (params, config) => this._getConfig(`/api/AlertTypes/root`, "get", params, config), 
// 获取子告警类型
getChildAlertTypes: (params, config) => this._getConfig(`/api/AlertTypes/${params.id}/children`, "get", params, config), 
// 通过 ID 集合批量获取告警类型
getAlertTypeInfoByIds: (params, config) => this._getConfig(`/api/AlertTypes/batch`, "post", params, config), 
// 根据类型 Id 获取告警类型
getAlertTypeById: (params, config) => this._getConfig(`/api/AlertTypes/${params.id}`, "get", params, config), 
// 聚合告警类型为父级类型
mergeChildAlertType: (params, config) => this._getConfig(`/api/AlertTypes/children/mergence`, "post", params, config), 
// 批量获取所有子告警类型接口（包含子孙级告警类型）
getSubordinateAlertTypes: (params, config) => this._getConfig(`/api/AlertTypes/subordinates`, "post", params, config), 
// 查询子告警类型（父级Id不传默认查父级）
searchSubAlertTypes: (params, config) => this._getConfig(`/api/AlertTypes/children`, "post", params, config), 
// 导入接口(导入后会重新刷新缓存)
importAlertTypes: (params, config) => this._getConfig(`/api/AlertTypes/import`, "post", params, config), 
// 重新加载类型树缓存
reloadAlertTypes: (params, config) => this._getConfig(`/api/AlertTypes/reload`, "post", params, config), 
```

 // biz 
``` js
/**
 * 查询告警
 * @params TypeId {string} 告警类型 Id 
 * @params SourceTypeId {string} 告警源类型 Id 
 * @params StartTime {string} 开始时间（基于告警产生时间查询） （必填）
 * @params EndTime {string} 结束时间（基于告警产生时间查询） （必填）
 * @params Keyword {string} 关键字 
 * @params Level {integer} 告警等级，1-一般 | 2-较大 | 4-重大 | 8-特大 
 * @params Status {array} 告警状态，0-告警中|1-已解决|2-手动解决 
 * @params PlatformId {string} 平台 Id 
 * @params IgnoreOtherPlatform {boolean} 查询结果是否忽略其他平台数据。 
 * @params AreaCode {string} 行政区域码 
 * @params IncludeSubTypes {boolean} 是否包含子类型记录。true 时包含子告警类型记录，否则只查当前告警类型记录 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAlertRecords({ StartTime, EndTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAlertRecords({StartTime, EndTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ getAlertRecords', error);
    }
}


/**
 * 创建告警记录
 * @params name {string} 告警名称 
 * @params description {string} 告警描述 
 * @params typeId {string} 告警类型 Id 
 * @params typeName {string} 告警类型名称 
 * @params level {integer} 告警级别 
 * @params levelName {string} 告警级别名称 
 * @params status {integer} 告警状态 
 * @params sourceTypeId {string} 告警源类型 Id 
 * @params sourceTypeName {string} 告警源类型名称 
 * @params source {object} 告警源 
 * @params assetId {string} 资产 Id 
 * @params assetName {string} 资产名 
 * @params startTime {string} 告警产生时间 
 * @params endTime {string} 告警消除时间 
 * @params longitude {number} 经度 
 * @params latitude {number} 纬度 
 * @params areaCode {string} 行政区域码 
 * @params extension {undefined} 扩展字段(Json 字符串) 
 * @params resourceId {string} 资源 Id 
 * @returns
 *    @id {integer} Id
 *    @name {string} 告警名称
 *    @description {string} 告警描述
 *    @typeId {string} 告警类型 Id
 *    @typeName {string} 告警类型名称
 *    @level {integer} 告警级别
 *    @status {integer} 告警状态
 *    @resolverId {string} 告警消除人 Id
 *    @resolverName {string} 告警消除人名称
 *    @resolveMessage {string} 处置信息
 *    @sourceTypeId {string} 告警源类型 Id
 *    @sourceTypeName {string} 告警源类型名称
 *    @source {object} 告警源
 *    @assetId {string} 资产 Id
 *    @assetName {string} 资产名
 *    @createTime {string} 服务创建记录时间
 *    @updateTime {string} 服务更新记录时间
 *    @startTime {string} 告警源的产生时间
 *    @endTime {string} 告警消除时间
 *    @resourceId {string} 资源 Id
 *    @platformId {string} 平台 Id
 *    @platformName {string} 平台名称
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @areaCode {string} 行政区域码
 *    @extension {undefined} 扩展信息
*/
async addAlertRecord(params = {}, config = {}) {
    try {
        const { data } = await this.api.addAlertRecord(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ addAlertRecord', error);
    }
}


/**
 * 高级搜索接口
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
 * @params upLeft {object} 坐标点 
 * @params bottomRight {object} 坐标点 
 * @params prefixAreaCodes {array} 行政区域前缀 
 * @params isMatchNullAreaCode {boolean} 是否匹配空行政区域码 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchAlertRecords(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchAlertRecords(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ searchAlertRecords', error);
    }
}


/**
 * 根据 id 获取告警详情
 * @params id {integer} id （必填）
 * @returns
 *    @id {integer} Id
 *    @name {string} 告警名称
 *    @description {string} 告警描述
 *    @typeId {string} 告警类型 Id
 *    @typeName {string} 告警类型名称
 *    @level {integer} 告警级别
 *    @status {integer} 告警状态
 *    @resolverId {string} 告警消除人 Id
 *    @resolverName {string} 告警消除人名称
 *    @resolveMessage {string} 处置信息
 *    @sourceTypeId {string} 告警源类型 Id
 *    @sourceTypeName {string} 告警源类型名称
 *    @source {object} 告警源
 *    @assetId {string} 资产 Id
 *    @assetName {string} 资产名
 *    @createTime {string} 服务创建记录时间
 *    @updateTime {string} 服务更新记录时间
 *    @startTime {string} 告警源的产生时间
 *    @endTime {string} 告警消除时间
 *    @resourceId {string} 资源 Id
 *    @platformId {string} 平台 Id
 *    @platformName {string} 平台名称
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @areaCode {string} 行政区域码
 *    @extension {undefined} 扩展信息
*/
async getAlertRecordById(id, config = {}) {
    try {
        const { data } = await this.api.getAlertRecordById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ getAlertRecordById', error);
    }
}


/**
 * 告警消除
 * @params id {integer} id （必填）
 * @params resolverName {string} 消除告警人名称 
 * @params resolveMessage {string} 消除告警信息 
 * @returns
*/
async cancelAlertRecord({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cancelAlertRecord({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ cancelAlertRecord', error);
    }
}


/**
 * 查询告警源类型
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAlertSourceTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlertSourceTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ getAlertSourceTypes', error);
    }
}


/**
 * 通过 id 获取告警源类型
 * @params id {string} id （必填）
 * @returns
 *    @id {string} Id
 *    @name {string} 名称
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
*/
async getAlertSourceTypeById(id, config = {}) {
    try {
        const { data } = await this.api.getAlertSourceTypeById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ getAlertSourceTypeById', error);
    }
}


/**
 * 更新告警源类型
 * @params id {string} id （必填）
 * @params name {string} 名字 
 * @returns
*/
async updateAlertSourceType({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateAlertSourceType({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ updateAlertSourceType', error);
    }
}


/**
 * 查询告警类型
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAlertTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAlertTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ getAlertTypes', error);
    }
}


/**
 * 创建告警类型
 * @params name {string} 类型名称 
 * @params description {string} 描述 
 * @params parentId {string} 父类型 Id 
 * @returns
 *    @id {string} 唯一标识符
 *    @name {string} 类型名称
 *    @description {string} 描述
 *    @parentId {string} 父类型 Id
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @resourceId {string} 资源 Id
 *    @platformId {string} 平台 Id
 *    @idPath {string} Id 路径
 *    @namePath {string} 名字路径
 *    @isLeaf {boolean} 是否为叶子节点
*/
async addAlertType(params = {}, config = {}) {
    try {
        const { data } = await this.api.addAlertType(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ addAlertType', error);
    }
}


/**
 * 获取根告警类型
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getRootAlertTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.getRootAlertTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ getRootAlertTypes', error);
    }
}


/**
 * 获取子告警类型
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getChildAlertTypes({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getChildAlertTypes({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ getChildAlertTypes', error);
    }
}


/**
 * 通过 ID 集合批量获取告警类型
 * @params ids {array} ID 集合 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAlertTypeInfoByIds({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAlertTypeInfoByIds({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ getAlertTypeInfoByIds', error);
    }
}


/**
 * 根据类型 Id 获取告警类型
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 唯一标识符
 *    @name {string} 类型名称
 *    @description {string} 描述
 *    @parentId {string} 父类型 Id
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @resourceId {string} 资源 Id
 *    @platformId {string} 平台 Id
 *    @idPath {string} Id 路径
 *    @namePath {string} 名字路径
 *    @isLeaf {boolean} 是否为叶子节点
*/
async getAlertTypeById(id, config = {}) {
    try {
        const { data } = await this.api.getAlertTypeById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ getAlertTypeById', error);
    }
}


/**
 * 聚合告警类型为父级类型
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params ids {array} 告警类型ID 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async mergeChildAlertType(params = {}, config = {}) {
    try {
        const { data } = await this.api.mergeChildAlertType(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ mergeChildAlertType', error);
    }
}


/**
 * 批量获取所有子告警类型接口（包含子孙级告警类型）
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params ids {array} 告警类型 Id 列表 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getSubordinateAlertTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.getSubordinateAlertTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ getSubordinateAlertTypes', error);
    }
}


/**
 * 查询子告警类型（父级Id不传默认查父级）
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params parentId {string} 父级ID 
 * @params selectedIds {array} 选择告警类型ID 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchSubAlertTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchSubAlertTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ searchSubAlertTypes', error);
    }
}


/**
 * 导入接口(导入后会重新刷新缓存)
 * @params alertTypes {array} 告警类型 
 * @returns
*/
async importAlertTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.importAlertTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ importAlertTypes', error);
    }
}


/**
 * 重新加载类型树缓存
 * @returns
*/
async reloadAlertTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.reloadAlertTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('alertsPlatformBiz ~ reloadAlertTypes', error);
    }
}

```

 