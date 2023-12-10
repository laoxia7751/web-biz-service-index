// api 
``` js
// 获取设施图层
getAllFacilityType: (params, config) => this._getConfig(`/api/Facilities/layers`, "get", params, config), 
// 区域查询资源
getFacilitiesByArea: (params, config) => this._getConfig(`/api/Facilities/area_query`, "post", params, config), 
// 获取设施关联的物资信息(一般为仓库)
getGoods: (params, config) => this._getConfig(`/api/Facilities/${params.id}/goods`, "get", params, config), 
// 获取详情
getFacilitiesById: (params, config) => this._getConfig(`/api/Facilities/${params.id}`, "get", params, config), 
// 多条件查询设施信息
getFacilitiesByCondition: (params, config) => this._getConfig(`/api/Facilities/condition_query`, "post", params, config), 
```

 // biz 
``` js
/**
 * 获取设施图层
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAllFacilityType(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAllFacilityType(params,config);
        return data;
    } catch (error) {
        return utils.formatError('facilityBiz ~ getAllFacilityType', error);
    }
}


/**
 * 区域查询资源
 * @params upLeft {object} 坐标点 （必填）
 * @params bottomRight {object} 坐标点 （必填）
 * @params layerIds {array} 图层Id列表 （必填）
 * @params points {array} 多边形经纬度 
 * @params setFilterType {integer} 过滤类型 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFacilitiesByArea({ upLeft, bottomRight, layerIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFacilitiesByArea(params,config);
        return data;
    } catch (error) {
        return utils.formatError('facilityBiz ~ getFacilitiesByArea', error);
    }
}


/**
 * 获取设施关联的物资信息(一般为仓库)
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getGoods(params = {}, config = {}) {
    try {
        const { data } = await this.api.getGoods(params,config);
        return data;
    } catch (error) {
        return utils.formatError('facilityBiz ~ getGoods', error);
    }
}


/**
 * 获取详情
 * @params id {string} id （必填）
 * @returns
 *    @medias {array} 媒体信息(关联的多媒体信息,如视频、图片等)
 *    @goodMainTypes {array} 物资主类型
 *    @resourceId {string} 资源Id
 *    @layerId {string} 图层Id
 *    @layerDetail {object} 图层实体
 *    @description {string} 详情
 *    @owner {string} 设施负责人
 *    @number {string} 联系电话
 *    @geoFilePath {string} 重点区域的资源文件路径
 *    @address {string} 设施地址
 *    @extension {object} 扩展项
 *    @areaCode {string} 行政区域代码
 *    @platformId {string} 资源所属平台Id
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @id {string} ID
 *    @name {string} 名称
*/
async getFacilitiesById(params = {}, config = {}) {
    try {
        const { data } = await this.api.getFacilitiesById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('facilityBiz ~ getFacilitiesById', error);
    }
}


/**
 * 多条件查询设施信息
 * @params keyWord {string} 关键字 
 * @params layerIds {array} 图层Id 
 * @params layerName {string} 图层名,可模糊匹配 
 * @params areaCodes {array} 行政区域代码 
 * @params prefixAreaCodes {array} 行政区域前缀代码 
 * @params querySubordinateFacility {boolean} 是否查询下级行政区域设施 （必填）
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFacilitiesByCondition({ querySubordinateFacility  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFacilitiesByCondition(params,config);
        return data;
    } catch (error) {
        return utils.formatError('facilityBiz ~ getFacilitiesByCondition', error);
    }
}

```

 // plugin
 ``` js
    {
        label: 'getAllFacilityType',
        kind: vscode.CompletionItemKind.Method,
params})"),
        documentation: new vscode.MarkdownString().appendMarkdown(`#### 获取设施图层`).appendCodeblock(`
@URL /api/Facilities/layers
Exp: getAllFacilityType(params)
@returns
    @totalCount {integer} 总数
    @records {array} 记录
    },
    {
        label: 'getFacilitiesByArea',
        kind: vscode.CompletionItemKind.Method,
params})"),
        documentation: new vscode.MarkdownString().appendMarkdown(`#### 区域查询资源`).appendCodeblock(`
@URL /api/Facilities/area_query
Exp: getFacilitiesByArea(params)
@params upLeft {object} 坐标点 （必填）
@params bottomRight {object} 坐标点 （必填）
@params layerIds {array} 图层Id列表 （必填）
@params points {array} 多边形经纬度 
@params setFilterType {integer} 过滤类型 
@params pageIndex {integer} 页码, 从1开始 
@params pageSize {integer} 页容量, [1, 128] 
@returns
    @totalCount {integer} 总数
    @records {array} 记录
    },
    {
        label: 'getGoods',
        kind: vscode.CompletionItemKind.Method,
params})"),
        documentation: new vscode.MarkdownString().appendMarkdown(`#### 获取设施关联的物资信息(一般为仓库)`).appendCodeblock(`
@URL /api/Facilities/{id}/goods
Exp: getGoods(id)
@params id {string} id （必填）
@params Keyword {string} 关键字 
@params page {integer} 页码, 从1开始 默认：1 
@params per_page {integer} 页容量, [1, 128] 默认：100 
@returns
    @totalCount {integer} 总数
    @records {array} 记录
    },
    {
        label: 'getFacilitiesById',
        kind: vscode.CompletionItemKind.Method,
params})"),
        documentation: new vscode.MarkdownString().appendMarkdown(`#### 获取详情`).appendCodeblock(`
@URL /api/Facilities/{id}
Exp: getFacilitiesById(id)
@params id {string} id （必填）
@returns
    @medias {array} 媒体信息(关联的多媒体信息,如视频、图片等)
    @goodMainTypes {array} 物资主类型
    @resourceId {string} 资源Id
    @layerId {string} 图层Id
    @layerDetail {object} 图层实体
    @description {string} 详情
    @owner {string} 设施负责人
    @number {string} 联系电话
    @geoFilePath {string} 重点区域的资源文件路径
    @address {string} 设施地址
    @extension {object} 扩展项
    @areaCode {string} 行政区域代码
    @platformId {string} 资源所属平台Id
    @longitude {number} 经度
    @latitude {number} 纬度
    @id {string} ID
    @name {string} 名称
    },
    {
        label: 'getFacilitiesByCondition',
        kind: vscode.CompletionItemKind.Method,
params})"),
        documentation: new vscode.MarkdownString().appendMarkdown(`#### 多条件查询设施信息`).appendCodeblock(`
@URL /api/Facilities/condition_query
Exp: getFacilitiesByCondition(querySubordinateFacility)
@params keyWord {string} 关键字 
@params layerIds {array} 图层Id 
@params layerName {string} 图层名,可模糊匹配 
@params areaCodes {array} 行政区域代码 
@params prefixAreaCodes {array} 行政区域前缀代码 
@params querySubordinateFacility {boolean} 是否查询下级行政区域设施 （必填）
@params pageIndex {integer} 页码, 从1开始 
@params pageSize {integer} 页容量, [1, 128] 
@returns
    @totalCount {integer} 总数
    @records {array} 记录
    },
```