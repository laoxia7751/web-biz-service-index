// api 
``` js
// 添加边界
addBoundaries: (params, config) => this._getConfig(`/api/Boundaries`, "post", params, config), 
// 修改边界
updateBoundaries: (params, config) => this._getConfig(`/api/Boundaries/${params.id}`, "put", params, config), 
// 删除边界
deleteBoundaries: (params, config) => this._getConfig(`/api/Boundaries/${params.id}`, "delete", params, config), 
// 根据id查询边界数据
getBoundariesById: (params, config) => this._getConfig(`/api/Boundaries/${params.id}`, "get", params, config), 
// 多条件查询边界数据
searchBoundaries: (params, config) => this._getConfig(`/api/Boundaries/condition_query`, "post", params, config), 
// 获取指定人的有权限行政区域
getDistricts: (params, config) => this._getConfig(`/api/Districts`, "get", params, config), 
// 创建行政区域
addDistricts: (params, config) => this._getConfig(`/api/Districts`, "post", params, config), 
// 根据 Id 获取行政区域
getDistrictsById: (params, config) => this._getConfig(`/api/Districts/${params.id}`, "get", params, config), 
// 修改行政区域信息
updateDistricts: (params, config) => this._getConfig(`/api/Districts/${params.id}`, "put", params, config), 
// 删除行政区域
deleteDistricts: (params, config) => this._getConfig(`/api/Districts/${params.id}`, "delete", params, config), 
// 根据Id集合或者行政区域码集合获取行政区域列表
getDistrictsByIds: (params, config) => this._getConfig(`/api/Districts/ids`, "post", params, config), 
// 导入行政区域数据接口
importDistricts: (params, config) => this._getConfig(`/api/Districts/import`, "post", params, config), 
// 根据父级行政区域 Id 获取子行政区域
getSubDistricts: (params, config) => this._getConfig(`/api/Districts/${params.parentId}/children`, "get", params, config), 
// 创建子行政区域
addSubDistricts: (params, config) => this._getConfig(`/api/Districts/${params.parentId}/children`, "post", params, config), 
// 根据行政区域 Id 获取所有父级区域
getParentDistrictsById: (params, config) => this._getConfig(`/api/Districts/${params.id}/parents`, "get", params, config), 
// 获取指定行政区域树
getDistrictTreeById: (params, config) => this._getConfig(`/api/Districts/${params.id}/tree`, "get", params, config), 
// 根据名字集合获取行政区域列表
getDistrictsByNames: (params, config) => this._getConfig(`/api/Districts/names`, "post", params, config), 
// 聚合子行政区域为父级行政区域
mergeDistricts: (params, config) => this._getConfig(`/api/Districts/children/mergence`, "post", params, config), 
// 查询子行政区域(父级id不传默认查询自身权限下根节点)
getChildDistricts: (params, config) => this._getConfig(`/api/Districts/children`, "post", params, config), 
// 批量查询行政区域下级接口（包含子孙级行政区域）
searchSubDistricts: (params, config) => this._getConfig(`/api/Districts/subordinates`, "post", params, config), 
// 获取设施图层
getFacilityLayers: (params, config) => this._getConfig(`/api/Facilities/layers`, "get", params, config), 
// 导入设施图层
importFacilityLayers: (params, config) => this._getConfig(`/api/Facilities/layers/import`, "post", params, config), 
// 导入设施
importFacilities: (params, config) => this._getConfig(`/api/Facilities/import`, "post", params, config), 
// 导入物资
importFacilityGoods: (params, config) => this._getConfig(`/api/Facilities/goods/import`, "post", params, config), 
// 获取详情
getFacilitiesById: (params, config) => this._getConfig(`/api/Facilities/${params.id}`, "get", params, config), 
// 获取设施关联的物资信息(一般为仓库)
getFacilityGoods: (params, config) => this._getConfig(`/api/Facilities/${params.id}/goods`, "get", params, config), 
// 区域查询资源
getFacilityAreaQuery: (params, config) => this._getConfig(`/api/Facilities/area_query`, "post", params, config), 
// 圆形区域设施查询
queryFacilitiesByCircleArea: (params, config) => this._getConfig(`/api/Facilities/circle_area`, "post", params, config), 
// 搜索资源
searchFacilities: (params, config) => this._getConfig(`/api/Facilities/search`, "post", params, config), 
// 生成静态资源
generateFacilities: (params, config) => this._getConfig(`/api/Facilities/statics/generate`, "post", params, config), 
// 获取静态资源文件名
getGenerateFilesName: (params, config) => this._getConfig(`/api/Facilities/statics/files`, "post", params, config), 
// 导入设施监控组
importFacilityCameraGroups: (params, config) => this._getConfig(`/api/Facilities/camera_groups/import`, "post", params, config), 
// 获取设施监控组
getFacilityCameraGroups: (params, config) => this._getConfig(`/api/Facilities/${params.id}/camera_groups`, "get", params, config), 
// 物资搜索（用于前端模糊搜索）
searchFacilityGoods: (params, config) => this._getConfig(`/api/Facilities/goods/search`, "post", params, config), 
// 多条件查询设施信息
queryFacilities: (params, config) => this._getConfig(`/api/Facilities/condition_query`, "post", params, config), 
// 更改设施标签
editFacilityLabels: (params, config) => this._getConfig(`/api/Facilities/${params.id}/labels`, "put", params, config), 
// 更新设施状态(能源设备状态)
updateFacilityStatus: (params, config) => this._getConfig(`/api/Facilities/${params.id}/state`, "put", params, config), 
// 根据Id或resourceId批量删除设施
multDeleteFacilities: (params, config) => this._getConfig(`/api/Facilities`, "delete", params, config), 
// 根据设施id或resourceId获取设施模型场景
getScenes: (params, config) => this._getConfig(`/api/Facilities/${params.id}/scenes`, "get", params, config), 
// 根据设施id集合批量获取设施信息
getFacilitiesByIds: (params, config) => this._getConfig(`/api/Facilities/batch`, "post", params, config), 
// 根据 productId 查询设施集合
getFacilitiesByProductId: (params, config) => this._getConfig(`/api/Facilities/${params.productId}/query`, "get", params, config), 
// 根据id查询地图配置
getGeoConfigById: (params, config) => this._getConfig(`/api/GeoConfigs/${params.id}`, "get", params, config), 
// 修改地图配置
updateGeoConfigById: (params, config) => this._getConfig(`/api/GeoConfigs/${params.id}`, "put", params, config), 
// 条件查询地图配置
getGeoConfigs: (params, config) => this._getConfig(`/api/GeoConfigs`, "get", params, config), 
// 添加地图配置
addGeoConfigs: (params, config) => this._getConfig(`/api/GeoConfigs`, "post", params, config), 
// 根据产品Id获取地图默认配置（基础配置、图层配置、效果配置）
getMapConfigByProductId: (params, config) => this._getConfig(`/api/GeoConfigs/${params.productId}/mapConfig`, "get", params, config), 
// 根据条件获取地图效果配置列表
getGeoEffectConfigs: (params, config) => this._getConfig(`/api/GeoConfigs/effect`, "get", params, config), 
// 创建地图效果配置
addGeoEffectConfigs: (params, config) => this._getConfig(`/api/GeoConfigs/effect`, "post", params, config), 
// 修改地图效果配置
editGeoEffectConfigs: (params, config) => this._getConfig(`/api/GeoConfigs/effect`, "put", params, config), 
// 添加地图图层配置
addGeoLayerConfigs: (params, config) => this._getConfig(`/api/GeoConfigs/layer`, "post", params, config), 
// 根据路径查询地图图层配置
getGeoLayerConfigs: (params, config) => this._getConfig(`/api/GeoConfigs/layer`, "get", params, config), 
// 更新地图图层配置
updateGeoLayerConfigs: (params, config) => this._getConfig(`/api/GeoConfigs/layers/${params.id}`, "put", params, config), 
// 分页查询地图图层子节点配置
getGeoLayerChildrenConfigs: (params, config) => this._getConfig(`/api/GeoConfigs/layers/children`, "get", params, config), 
// 分页查询地图图层底层节点配置
getGeoLayerFloorsConfigs: (params, config) => this._getConfig(`/api/GeoConfigs/layers/floors`, "get", params, config), 
// 导入地图图层配置
importLayerConfig: (params, config) => this._getConfig(`/api/GeoConfigs/layers/import`, "post", params, config), 
// 根据 Id 获取物资
getGoodsById: (params, config) => this._getConfig(`/api/Goods/${params.id}`, "get", params, config), 
// 模糊查找设施物资
searchGoods: (params, config) => this._getConfig(`/api/Goods/search`, "post", params, config), 
// 根据Id或resourceId批量删除物资
multDeleteGoods: (params, config) => this._getConfig(`/api/Goods`, "delete", params, config), 
// 根据Id查找标签
getLabelsById: (params, config) => this._getConfig(`/api/Labels/${params.id}`, "get", params, config), 
// 根据Id删除标签
deleteLabels: (params, config) => this._getConfig(`/api/Labels/${params.id}`, "delete", params, config), 
// 根据Id更新标签
editLabels: (params, config) => this._getConfig(`/api/Labels/${params.id}`, "put", params, config), 
// 多条件查询标签
searchLabels: (params, config) => this._getConfig(`/api/Labels/search`, "get", params, config), 
// 添加新标签
addLabels: (params, config) => this._getConfig(`/api/Labels`, "post", params, config), 
// 导入标签
importLabels: (params, config) => this._getConfig(`/api/Labels/import`, "post", params, config), 
// 获取设施图层根节点
getRootLayers: (params, config) => this._getConfig(`/api/Layers/root`, "get", params, config), 
// 获取设施图层子节点
getChildrenLayers: (params, config) => this._getConfig(`/api/Layers/children`, "get", params, config), 
// 模糊查询图层
getLayers: (params, config) => this._getConfig(`/api/Layers/layers`, "get", params, config), 
// 查询全部图层类型（GroupKey）
getGroupKeys: (params, config) => this._getConfig(`/api/Layers/group_keys`, "get", params, config), 
// 根据图层id集合批量获取图层信息
getLayerInfoByIds: (params, config) => this._getConfig(`/api/Layers/batch`, "post", params, config), 
// 根据Id集合或number集合批量删除图层
deleteLayersByIds: (params, config) => this._getConfig(`/api/Layers/batch`, "delete", params, config), 
// 条件查询图层（不分层，仅用于IES导出）
getBaseLayers: (params, config) => this._getConfig(`/api/Layers/search`, "get", params, config), 
// 查询地图服务类型
getMapServerType: (params, config) => this._getConfig(`/api/MapServerTypes/${params.id}`, "get", params, config), 
// 修改地图服务类型
editMapServerType: (params, config) => this._getConfig(`/api/MapServerTypes/${params.id}`, "put", params, config), 
// 删除地图服务类型
deleteMapServerType: (params, config) => this._getConfig(`/api/MapServerTypes/${params.id}`, "delete", params, config), 
// 添加地图服务类型
addMapServerType: (params, config) => this._getConfig(`/api/MapServerTypes`, "post", params, config), 
// 分页查询地图服务类型集合
getMapServerTypes: (params, config) => this._getConfig(`/api/MapServerTypes`, "get", params, config), 
// 根据id分页查询地图服务底图图层集合
getMapTypeOverlays: (params, config) => this._getConfig(`/api/MapServerTypes/${params.id}/overlays`, "get", params, config), 
// 查询地图服务底图图层
getMapTypeOverlayById: (params, config) => this._getConfig(`/api/MapTypeOverlays/${params.id}`, "get", params, config), 
// 修改地图服务底图图层
editMapTypeOverlay: (params, config) => this._getConfig(`/api/MapTypeOverlays/${params.id}`, "put", params, config), 
// 添加地图服务底图图层
addMapTypeOverlay: (params, config) => this._getConfig(`/api/MapTypeOverlays`, "post", params, config), 
// 批量删除地图服务底图图层
deleteMapTypeOverlays: (params, config) => this._getConfig(`/api/MapTypeOverlays`, "delete", params, config), 
// 根据标绘id查找标绘
getPlotsById: (params, config) => this._getConfig(`/api/Plots/${params.id}`, "get", params, config), 
// 根据标绘id修改标绘
modifyPlotsById: (params, config) => this._getConfig(`/api/Plots/${params.id}`, "put", params, config), 
// 根据标绘id删除标绘
deletePlotsById: (params, config) => this._getConfig(`/api/Plots/${params.id}`, "delete", params, config), 
// 查找事件标绘
getEventPlots: (params, config) => this._getConfig(`/api/Plots/event`, "get", params, config), 
// 添加事件标绘
addEventPlots: (params, config) => this._getConfig(`/api/Plots/event`, "post", params, config), 
// 查找用户标绘
getUserPlots: (params, config) => this._getConfig(`/api/Plots/user`, "get", params, config), 
// 添加用户标绘
addUserPlots: (params, config) => this._getConfig(`/api/Plots/user`, "post", params, config), 
// 查找标绘
getPlots: (params, config) => this._getConfig(`/api/Plots`, "get", params, config), 
// 添加标绘
addPlots: (params, config) => this._getConfig(`/api/Plots`, "post", params, config), 
// 根据id查找用户常用标绘类型
getUserPlotTypesById: (params, config) => this._getConfig(`/api/PlotTypes/${params.id}`, "get", params, config), 
// 根据id删除标绘类型
deletePlotTypesById: (params, config) => this._getConfig(`/api/PlotTypes/${params.id}`, "delete", params, config), 
// 查找用户常用标绘类型
getUserPlotTypes: (params, config) => this._getConfig(`/api/PlotTypes/user`, "get", params, config), 
// 添加用户常用标绘类型
addUserPlotTypes: (params, config) => this._getConfig(`/api/PlotTypes/user`, "post", params, config), 
// 添加模型场景
addScenes: (params, config) => this._getConfig(`/api/Scenes`, "post", params, config), 
// 修改模型场景
editScene: (params, config) => this._getConfig(`/api/Scenes/${params.id}`, "put", params, config), 
// 删除模型场景
deleteScene: (params, config) => this._getConfig(`/api/Scenes/${params.id}`, "delete", params, config), 
// 根据id查询模型场景
getSceneById: (params, config) => this._getConfig(`/api/Scenes/${params.id}`, "get", params, config), 
// 通过区域码获取模型场景
getSceneByAreaCode: (params, config) => this._getConfig(`/api/Scenes/areaCode`, "get", params, config), 
// 多条件查询模型场景
searchScenes: (params, config) => this._getConfig(`/api/Scenes/search`, "get", params, config), 
// 获取图层的统计数据
getLayersStatistical: (params, config) => this._getConfig(`/api/Statistical/layers`, "get", params, config), 
// 根据根图层查询下级图层及设施统计
searchLayersTree: (params, config) => this._getConfig(`/api/Statistical/layers/tree`, "post", params, config), 
// 根据区域和图层查询设施统计
queryFacilityByAreaLayer: (params, config) => this._getConfig(`/api/Statistical/area_query`, "post", params, config), 
// 根据圆形区域图层统计设施
getFacilitiesCountByCircleArea: (params, config) => this._getConfig(`/api/Statistical/circle_area`, "post", params, config), 
```

 // biz 
``` js
/**
 * 添加边界
 * @params resourceId {string} 资源Id 
 * @params name {string} 边界名称 
 * @params layerId {string} 图层Id 
 * @params data {object} 边界数据 
 * @returns
 *    @id {string} 图层Id
 *    @productId {string} 产品类型
 *    @mapType {integer} 地图类型 0-电子 1-卫星 2-科幻
 *    @mapSourceType {string} 地图类型
 *    @clusterStyle {string} 聚合样式
 *    @minPitch {number} 最小仰俯角
 *    @maxPitch {number} 最大仰俯角
 *    @center {object} 地址坐标
 *    @useFakeMapSdk {boolean} 是否使用SDK
 *    @lowViewPoint {object} 近、中、远景实体
 *    @middleViewPoint {object} 近、中、远景实体
 *    @highViewPoint {object} 近、中、远景实体
 *    @maxiMinZoom {object} 图层大小
*/
async addBoundaries(params = {}, config = {}) {
    try {
        const { data } = await this.api.addBoundaries(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addBoundaries', error);
    }
}


/**
 * 修改边界
 * @params id {string} id （必填）
 * @params resourceId {string} 资源Id 
 * @params name {string} 边界名称 
 * @params layerId {string} 图层Id 
 * @params data {object} 边界数据 
 * @returns
*/
async updateBoundaries({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateBoundaries({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ updateBoundaries', error);
    }
}


/**
 * 删除边界
 * @params id {string} id （必填）
 * @returns
*/
async deleteBoundaries(id, config = {}) {
    try {
        const { data } = await this.api.deleteBoundaries({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ deleteBoundaries', error);
    }
}


/**
 * 根据id查询边界数据
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 边界Id
 *    @resourceId {string} 资源Id
 *    @name {string} 边界名称
 *    @layerId {string} 图层Id
 *    @data {string} 边界数据
*/
async getBoundariesById(id, config = {}) {
    try {
        const { data } = await this.api.getBoundariesById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getBoundariesById', error);
    }
}


/**
 * 多条件查询边界数据
 * @params keyWord {string} 关键字 
 * @params layerIds {array} 图层Id 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, int.MaxValue] 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchBoundaries(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchBoundaries(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ searchBoundaries', error);
    }
}


/**
 * 获取指定人的有权限行政区域
 * @params userId {string} 指定人Id，空为本用户 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDistricts(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDistricts(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getDistricts', error);
    }
}


/**
 * 创建行政区域
 * @params name {string} 区域名 
 * @params englishName {string} 英文名 
 * @params coordinate {object} 坐标点 （必填）
 * @params areaCode {string} 邮编 
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径 
 * @returns
 *    @resourceId {string} 资源Id
 *    @englishName {string} 英文名
 *    @coordinate {object} 坐标点
 *    @areaCode {string} 邮编
 *    @parentId {string} 父级行政区域 Id
 *    @parentPath {string} 树结构父Id路径（不包含自身）
 *    @parentIdPath {string} 树结构父Id路径（包含自身）
 *    @parentNamePath {string} 树结构父名称路径（包含自身）
 *    @geoFilePath {string} 对应 Geo 相关配置文件路径
 *    @platformId {string} 资源所属平台Id
 *    @order {integer} 排序
 *    @idPath {string} Id 路径
 *    @namePath {string} 名字路径
 *    @isLeaf {boolean} 是否为叶子节点
 *    @id {string} ID
 *    @name {string} 名称
*/
async addDistricts({ coordinate  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addDistricts({coordinate,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addDistricts', error);
    }
}


/**
 * 根据 Id 获取行政区域
 * @params id {string} id （必填）
 * @returns
 *    @resourceId {string} 资源Id
 *    @englishName {string} 英文名
 *    @coordinate {object} 坐标点
 *    @areaCode {string} 邮编
 *    @parentId {string} 父级行政区域 Id
 *    @parentPath {string} 树结构父Id路径（不包含自身）
 *    @parentIdPath {string} 树结构父Id路径（包含自身）
 *    @parentNamePath {string} 树结构父名称路径（包含自身）
 *    @geoFilePath {string} 对应 Geo 相关配置文件路径
 *    @platformId {string} 资源所属平台Id
 *    @order {integer} 排序
 *    @idPath {string} Id 路径
 *    @namePath {string} 名字路径
 *    @isLeaf {boolean} 是否为叶子节点
 *    @id {string} ID
 *    @name {string} 名称
*/
async getDistrictsById(id, config = {}) {
    try {
        const { data } = await this.api.getDistrictsById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getDistrictsById', error);
    }
}


/**
 * 修改行政区域信息
 * @params id {string} id （必填）
 * @params name {string} 区域名 
 * @params englishName {string} 英文名 
 * @params coordinate {object} 坐标点 （必填）
 * @params areaCode {string} 邮编 
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径 
 * @returns
*/
async updateDistricts({ id, coordinate  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateDistricts({id, coordinate,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ updateDistricts', error);
    }
}


/**
 * 删除行政区域
 * @params id {string} id （必填）
 * @returns
*/
async deleteDistricts(id, config = {}) {
    try {
        const { data } = await this.api.deleteDistricts({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ deleteDistricts', error);
    }
}


/**
 * 根据Id集合或者行政区域码集合获取行政区域列表
 * @params ids {array} id/areaCode 集合 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDistrictsByIds(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDistrictsByIds(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getDistrictsByIds', error);
    }
}


/**
 * 导入行政区域数据接口
 * @params isReload {boolean} 是否导入后重新加载缓存，默认加载 
 * @params districtItems {array} 导入行政区域数据 
 * @returns
*/
async importDistricts(params = {}, config = {}) {
    try {
        const { data } = await this.api.importDistricts(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ importDistricts', error);
    }
}


/**
 * 根据父级行政区域 Id 获取子行政区域
 * @params parentId {string} 父级行政区域 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getSubDistricts(parentId, config = {}) {
    try {
        const { data } = await this.api.getSubDistricts({ parentId }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getSubDistricts', error);
    }
}


/**
 * 创建子行政区域
 * @params parentId {string} parentId （必填）
 * @params name {string} 区域名 
 * @params englishName {string} 英文名 
 * @params coordinate {object} 坐标点 （必填）
 * @params areaCode {string} 邮编 
 * @params geoFilePath {string} 对应 Geo 相关配置文件路径 
 * @returns
 *    @resourceId {string} 资源Id
 *    @englishName {string} 英文名
 *    @coordinate {object} 坐标点
 *    @areaCode {string} 邮编
 *    @parentId {string} 父级行政区域 Id
 *    @parentPath {string} 树结构父Id路径（不包含自身）
 *    @parentIdPath {string} 树结构父Id路径（包含自身）
 *    @parentNamePath {string} 树结构父名称路径（包含自身）
 *    @geoFilePath {string} 对应 Geo 相关配置文件路径
 *    @platformId {string} 资源所属平台Id
 *    @order {integer} 排序
 *    @idPath {string} Id 路径
 *    @namePath {string} 名字路径
 *    @isLeaf {boolean} 是否为叶子节点
 *    @id {string} ID
 *    @name {string} 名称
*/
async addSubDistricts({ parentId, coordinate  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addSubDistricts({parentId, coordinate,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addSubDistricts', error);
    }
}


/**
 * 根据行政区域 Id 获取所有父级区域
 * @params id {string} id （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getParentDistrictsById(id, config = {}) {
    try {
        const { data } = await this.api.getParentDistrictsById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getParentDistrictsById', error);
    }
}


/**
 * 获取指定行政区域树
 * @params id {string} id （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDistrictTreeById(id, config = {}) {
    try {
        const { data } = await this.api.getDistrictTreeById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getDistrictTreeById', error);
    }
}


/**
 * 根据名字集合获取行政区域列表
 * @params Names {array} 行政区域名集合 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDistrictsByNames(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDistrictsByNames(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getDistrictsByNames', error);
    }
}


/**
 * 聚合子行政区域为父级行政区域
 * @params ids {array} id/areaCode 集合 （必填）
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, int.MaxValue] 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async mergeDistricts({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.mergeDistricts({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ mergeDistricts', error);
    }
}


/**
 * 查询子行政区域(父级id不传默认查询自身权限下根节点)
 * @params parentId {string} 父级ID 
 * @params selectedIds {array} 选择的行政区划id 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, int.MaxValue] 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getChildDistricts(params = {}, config = {}) {
    try {
        const { data } = await this.api.getChildDistricts(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getChildDistricts', error);
    }
}


/**
 * 批量查询行政区域下级接口（包含子孙级行政区域）
 * @params ids {array} id/areaCode 集合 （必填）
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, int.MaxValue] 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchSubDistricts({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchSubDistricts({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ searchSubDistricts', error);
    }
}


/**
 * 获取设施图层
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFacilityLayers(params = {}, config = {}) {
    try {
        const { data } = await this.api.getFacilityLayers(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getFacilityLayers', error);
    }
}


/**
 * 导入设施图层
 * @params isReload {boolean} 是否导入后重新加载缓存，默认加载 
 * @params groupItems {array} 图层组 
 * @returns
*/
async importFacilityLayers(params = {}, config = {}) {
    try {
        const { data } = await this.api.importFacilityLayers(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ importFacilityLayers', error);
    }
}


/**
 * 导入设施
 * @params isReload {boolean} 是否导入后重新加载缓存，默认加载 
 * @params facilityItems {array}  
 * @returns
*/
async importFacilities(params = {}, config = {}) {
    try {
        const { data } = await this.api.importFacilities(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ importFacilities', error);
    }
}


/**
 * 导入物资
 * @params goodItems {array}  
 * @returns
*/
async importFacilityGoods(params = {}, config = {}) {
    try {
        const { data } = await this.api.importFacilityGoods(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ importFacilityGoods', error);
    }
}


/**
 * 获取详情
 * @params id {string} id （必填）
 * @returns
 *    @medias {array} 媒体信息(关联的多媒体信息,如视频、图片等)
 *    @goodMainTypes {array} 物资主类型
 *    @labelDetail {array} 标签详情
 *    @layerDetail {object} 图层实体
 *    @resourceId {string} 资源Id
 *    @layerId {string} 图层Id
 *    @description {string} 详情
 *    @owner {string} 设施负责人
 *    @number {string} 联系电话
 *    @geoFilePath {string} 重点区域的资源文件路径
 *    @address {string} 设施地址
 *    @extension {object} 扩展项
 *    @areaCode {string} 行政区域代码
 *    @platformId {string} 资源所属平台Id
 *    @createTime {string} 创建时间
 *    @order {integer} 排序号
 *    @state {integer} 状态
 *    @height {number} 设施高度
 *    @geometryData {object} 面、线数据输出
 *    @facilityState {string} 设施状态
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @id {string} ID
 *    @name {string} 名称
*/
async getFacilitiesById(id, config = {}) {
    try {
        const { data } = await this.api.getFacilitiesById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getFacilitiesById', error);
    }
}


/**
 * 获取设施关联的物资信息(一般为仓库)
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFacilityGoods({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFacilityGoods({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getFacilityGoods', error);
    }
}


/**
 * 区域查询资源
 * @params upLeft {object} 坐标点 （必填）
 * @params bottomRight {object} 坐标点 （必填）
 * @params layerIds {array} 图层Id列表 （必填）
 * @params points {array} 多边形经纬度 
 * @params setFilterType {integer} 过滤类型 
 * @params keyword {string} 关键字 
 * @params isDesc {boolean} 是否排序，默认为true-降序 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, int.MaxValue] 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFacilityAreaQuery({ upLeft, bottomRight, layerIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFacilityAreaQuery({upLeft, bottomRight, layerIds,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getFacilityAreaQuery', error);
    }
}


/**
 * 圆形区域设施查询
 * @params upLeft {object} 坐标点 （必填）
 * @params bottomRight {object} 坐标点 （必填）
 * @params layerIds {array} 图层Id列表 （必填）
 * @params keyword {string} 关键字 
 * @params center {object} 坐标点 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params sortRule {integer} 排序规则 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, int.MaxValue] 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async queryFacilitiesByCircleArea({ upLeft, bottomRight, layerIds, center, radius  , ...params}, config = {}) {
    try {
        const { data } = await this.api.queryFacilitiesByCircleArea({upLeft, bottomRight, layerIds, center, radius,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ queryFacilitiesByCircleArea', error);
    }
}


/**
 * 搜索资源
 * @params keyword {string} 关键字 （必填）
 * @params maxCount {integer} 最大返回数据的数量 
 * @params layerIds {array} 图层Id列表 （必填）
 * @params isDesc {boolean} 是否排序，默认为true-降序 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, int.MaxValue] 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchFacilities({ keyword, layerIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchFacilities({keyword, layerIds,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ searchFacilities', error);
    }
}


/**
 * 生成静态资源
 * @returns
*/
async generateFacilities(params = {}, config = {}) {
    try {
        const { data } = await this.api.generateFacilities(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ generateFacilities', error);
    }
}


/**
 * 获取静态资源文件名
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getGenerateFilesName(params = {}, config = {}) {
    try {
        const { data } = await this.api.getGenerateFilesName(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getGenerateFilesName', error);
    }
}


/**
 * 导入设施监控组
 * @params facilityCameraGroupItems {array} 设施关联监控组 
 * @returns
*/
async importFacilityCameraGroups(params = {}, config = {}) {
    try {
        const { data } = await this.api.importFacilityCameraGroups(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ importFacilityCameraGroups', error);
    }
}


/**
 * 获取设施监控组
 * @params id {string} 设施 Id （必填）
 * @returns
 *    @facilityId {string} 设施 Id
 *    @cameraGroupIds {array} 监控组 Id
 *    @platformId {string} 资源所属平台Id
 *    @resourceId {string} 标识该资源为非本平台资源
*/
async getFacilityCameraGroups(id, config = {}) {
    try {
        const { data } = await this.api.getFacilityCameraGroups({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getFacilityCameraGroups', error);
    }
}


/**
 * 物资搜索（用于前端模糊搜索）
 * @params upLeft {object} 坐标点 （必填）
 * @params bottomRight {object} 坐标点 （必填）
 * @params keyword {string} 模糊查询关键字(搜索物资名称) 
 * @params maxCount {integer} 最大返回值GoodsDataSearchLocations 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchFacilityGoods({ upLeft, bottomRight  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchFacilityGoods({upLeft, bottomRight,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ searchFacilityGoods', error);
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
 * @params resourceIds {array} 标签Id 
 * @params isDesc {boolean} 是否排序，默认为true-降序 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, int.MaxValue] 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async queryFacilities({ querySubordinateFacility  , ...params}, config = {}) {
    try {
        const { data } = await this.api.queryFacilities({querySubordinateFacility,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ queryFacilities', error);
    }
}


/**
 * 更改设施标签
 * @params id {string} id （必填）
 * @params resourceIds {array} 标签ResourceId 
 * @returns
*/
async editFacilityLabels({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editFacilityLabels({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ editFacilityLabels', error);
    }
}


/**
 * 更新设施状态(能源设备状态)
 * @params id {string} id （必填）
 * @params state {integer} 设施状态 （必填）
 * @returns
*/
async updateFacilityStatus({ id, state  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateFacilityStatus({id, state,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ updateFacilityStatus', error);
    }
}


/**
 * 根据Id或resourceId批量删除设施
 * @params ids {array} Id 集合 （必填）
 * @returns
*/
async multDeleteFacilities(ids, config = {}) {
    try {
        const { data } = await this.api.multDeleteFacilities({ ids }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ multDeleteFacilities', error);
    }
}


/**
 * 根据设施id或resourceId获取设施模型场景
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getScenes({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getScenes({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getScenes', error);
    }
}


/**
 * 根据设施id集合批量获取设施信息
 * @params ids {array} 图层Id集合 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFacilitiesByIds({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFacilitiesByIds({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getFacilitiesByIds', error);
    }
}


/**
 * 根据 productId 查询设施集合
 * @params productId {string} productId （必填）
 * @params IsDesc {boolean} 是否按创建时间降序（默认不传不排序） 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFacilitiesByProductId({ productId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFacilitiesByProductId({productId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getFacilitiesByProductId', error);
    }
}


/**
 * 根据id查询地图配置
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 图层Id
 *    @productId {string} 产品类型
 *    @mapType {integer} 地图类型 0-电子 1-卫星 2-科幻
 *    @mapSourceType {string} 地图类型
 *    @clusterStyle {string} 聚合样式
 *    @minPitch {number} 最小仰俯角
 *    @maxPitch {number} 最大仰俯角
 *    @center {object} 地址坐标
 *    @useFakeMapSdk {boolean} 是否使用SDK
 *    @lowViewPoint {object} 近、中、远景实体
 *    @middleViewPoint {object} 近、中、远景实体
 *    @highViewPoint {object} 近、中、远景实体
 *    @maxiMinZoom {object} 图层大小
*/
async getGeoConfigById(id, config = {}) {
    try {
        const { data } = await this.api.getGeoConfigById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getGeoConfigById', error);
    }
}


/**
 * 修改地图配置
 * @params id {string} id （必填）
 * @params productId {string} 产品Id 
 * @params mapType {integer} 地图类型 0-电子 1-卫星 2-科幻 
 * @params mapSourceType {string} 地图类型 
 * @params clusterStyle {string} 聚合样式 
 * @params minPitch {number} 最小仰俯角 
 * @params maxPitch {number} 最大仰俯角 
 * @params center {object} 地址坐标 
 * @params useFakeMapSdk {boolean} 是否使用SDK 
 * @returns
*/
async updateGeoConfigById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateGeoConfigById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ updateGeoConfigById', error);
    }
}


/**
 * 条件查询地图配置
 * @params productId {string} productId （必填）
 * @returns
 *    @id {string} 图层Id
 *    @productId {string} 产品类型
 *    @mapType {integer} 地图类型 0-电子 1-卫星 2-科幻
 *    @mapSourceType {string} 地图类型
 *    @clusterStyle {string} 聚合样式
 *    @minPitch {number} 最小仰俯角
 *    @maxPitch {number} 最大仰俯角
 *    @center {object} 地址坐标
 *    @useFakeMapSdk {boolean} 是否使用SDK
 *    @lowViewPoint {object} 近、中、远景实体
 *    @middleViewPoint {object} 近、中、远景实体
 *    @highViewPoint {object} 近、中、远景实体
 *    @maxiMinZoom {object} 图层大小
*/
async getGeoConfigs(productId, config = {}) {
    try {
        const { data } = await this.api.getGeoConfigs({ productId }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getGeoConfigs', error);
    }
}


/**
 * 添加地图配置
 * @params productId {string} 产品Id 
 * @params mapType {integer} 地图类型 0-电子 1-卫星 2-科幻 
 * @params mapSourceType {string} 地图类型 
 * @params clusterStyle {string} 聚合样式 
 * @params minPitch {number} 最小仰俯角 
 * @params maxPitch {number} 最大仰俯角 
 * @params center {object} 地址坐标 
 * @params useFakeMapSdk {boolean} 是否使用SDK 
 * @returns
 *    @id {string} 图层Id
 *    @productId {string} 产品类型
 *    @mapType {integer} 地图类型 0-电子 1-卫星 2-科幻
 *    @mapSourceType {string} 地图类型
 *    @clusterStyle {string} 聚合样式
 *    @minPitch {number} 最小仰俯角
 *    @maxPitch {number} 最大仰俯角
 *    @center {object} 地址坐标
 *    @useFakeMapSdk {boolean} 是否使用SDK
 *    @lowViewPoint {object} 近、中、远景实体
 *    @middleViewPoint {object} 近、中、远景实体
 *    @highViewPoint {object} 近、中、远景实体
 *    @maxiMinZoom {object} 图层大小
*/
async addGeoConfigs(params = {}, config = {}) {
    try {
        const { data } = await this.api.addGeoConfigs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addGeoConfigs', error);
    }
}


/**
 * 根据产品Id获取地图默认配置（基础配置、图层配置、效果配置）
 * @params productId {string} productId （必填）
 * @returns
 *    @geoConfig {object} 图层配置实体
 *    @geoEffectConfigs {array} 地图效果配置
 *    @layerConfigs {array} 地图图层配置
*/
async getMapConfigByProductId(productId, config = {}) {
    try {
        const { data } = await this.api.getMapConfigByProductId({ productId }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getMapConfigByProductId', error);
    }
}


/**
 * 根据条件获取地图效果配置列表
 * @params productId {string} 产品ID 
 * @params mapType {undefined} 地图配置,可选;0-电子、1-卫星、2-科幻 
 * @returns
*/
async getGeoEffectConfigs(params = {}, config = {}) {
    try {
        const { data } = await this.api.getGeoEffectConfigs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getGeoEffectConfigs', error);
    }
}


/**
 * 创建地图效果配置
 * @params productId {string} 产品Id （必填）
 * @params mapType {integer} 地图类型 0-电子 1-卫星 2-科幻 （必填）
 * @params isShowEffect {boolean} 是否展示效果 
 * @params antiAlias {boolean} 抗锯齿 
 * @params needBloom {boolean} 自发光 
 * @params lowViewPoint {object} 近、中、远景实体 
 * @params middleViewPoint {object} 近、中、远景实体 
 * @params highViewPoint {object} 近、中、远景实体 
 * @params lowViewPointEffect {object} 地图效果实体 
 * @params middleViewPointEffect {object} 地图效果实体 
 * @params highViewPointEffect {object} 地图效果实体 
 * @returns
*/
async addGeoEffectConfigs({ productId, mapType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addGeoEffectConfigs({productId, mapType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addGeoEffectConfigs', error);
    }
}


/**
 * 修改地图效果配置
 * @params productId {string} 产品Id （必填）
 * @params mapType {integer} 地图类型 0-电子 1-卫星 2-科幻 （必填）
 * @params isShowEffect {boolean} 是否展示效果 
 * @params antiAlias {boolean} 抗锯齿 
 * @params needBloom {boolean} 自发光 
 * @params lowViewPoint {object} 近、中、远景实体 
 * @params middleViewPoint {object} 近、中、远景实体 
 * @params highViewPoint {object} 近、中、远景实体 
 * @params lowViewPointEffect {object} 地图效果实体 
 * @params middleViewPointEffect {object} 地图效果实体 
 * @params highViewPointEffect {object} 地图效果实体 
 * @returns
*/
async editGeoEffectConfigs({ productId, mapType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editGeoEffectConfigs({productId, mapType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ editGeoEffectConfigs', error);
    }
}


/**
 * 添加地图图层配置
 * @params productId {string} 产品Id 
 * @params mapType {integer} 地图类型 0-电子 1-卫星 2-科幻 
 * @params name {string} 图层名称 
 * @params path {string} 图层路径 
 * @params layerIcon {object} 图层图标 
 * @params pointIcon {object} 图层图标 
 * @params clusterIcon {object} 图层图标 
 * @params isShow {boolean} 是否显示图层 
 * @params zoom {object} 图层Zoom 
 * @params lowViewPointCluster {object} 点位聚合规则 
 * @params middleViewPointCluster {object} 点位聚合规则 
 * @params highViewPointCluster {object} 点位聚合规则 
 * @params customViewPointCluster {object} 点位聚合规则 
 * @params lineConfig {object} 线配置 
 * @params polygonConfig {object} 面配置 
 * @returns
 *    @id {string} 配置Id
 *    @productId {string} 产品Id
 *    @name {string} 图层名称
 *    @path {string} 图层路径
 *    @layerIcon {object} 图层图标
 *    @pointIcon {object} 图层图标
 *    @clusterIcon {object} 图层图标
 *    @isShow {boolean} 是否显示图层
 *    @zoom {object} 图层Zoom输出
 *    @lowViewPointCluster {object} 点位聚合规则
 *    @middleViewPointCluster {object} 点位聚合规则
 *    @highViewPointCluster {object} 点位聚合规则
 *    @customViewPointCluster {object} 点位聚合规则
 *    @lineConfig {object} 线配置
 *    @polygonConfig {object} 面配置
*/
async addGeoLayerConfigs(params = {}, config = {}) {
    try {
        const { data } = await this.api.addGeoLayerConfigs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addGeoLayerConfigs', error);
    }
}


/**
 * 根据路径查询地图图层配置
 * @params Path {string} 图层路径 （必填）
 * @params ProductId {string} 产品Id （必填）
 * @params MapType {undefined} 地图类型 0-电子，1-卫星，2-科幻 （必填）
 * @returns
*/
async getGeoLayerConfigs({ Path, ProductId, MapType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGeoLayerConfigs({Path, ProductId, MapType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getGeoLayerConfigs', error);
    }
}


/**
 * 更新地图图层配置
 * @params id {string} id （必填）
 * @params productId {string} 产品Id 
 * @params mapType {integer} 地图类型 0-电子 1-卫星 2-科幻 
 * @params name {string} 图层名称 
 * @params path {string} 图层路径 
 * @params layerIcon {object} 图层图标 
 * @params pointIcon {object} 图层图标 
 * @params clusterIcon {object} 图层图标 
 * @params isShow {boolean} 是否显示图层 
 * @params zoom {object} 图层Zoom 
 * @params lowViewPointCluster {object} 点位聚合规则 
 * @params middleViewPointCluster {object} 点位聚合规则 
 * @params highViewPointCluster {object} 点位聚合规则 
 * @params customViewPointCluster {object} 点位聚合规则 
 * @params lineConfig {object} 线配置 
 * @params polygonConfig {object} 面配置 
 * @returns
*/
async updateGeoLayerConfigs({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateGeoLayerConfigs({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ updateGeoLayerConfigs', error);
    }
}


/**
 * 分页查询地图图层子节点配置
 * @params Path {string} 图层路径 （必填）
 * @params ProductId {string} 产品Id （必填）
 * @params MapType {undefined} 地图类型 0-电子，1-卫星，2-科幻 （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getGeoLayerChildrenConfigs({ Path, ProductId, MapType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGeoLayerChildrenConfigs({Path, ProductId, MapType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getGeoLayerChildrenConfigs', error);
    }
}


/**
 * 分页查询地图图层底层节点配置
 * @params Path {string} 图层路径 （必填）
 * @params ProductId {string} 产品Id （必填）
 * @params MapType {undefined} 地图类型 0-电子，1-卫星，2-科幻 （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @params areaCodes {string} 行政区域码 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getGeoLayerFloorsConfigs({ Path, ProductId, MapType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGeoLayerFloorsConfigs({Path, ProductId, MapType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getGeoLayerFloorsConfigs', error);
    }
}


/**
 * 导入地图图层配置
 * @params layerConfigItems {array} 图层配置集合 
 * @returns
 *    @hasError {boolean} 是否有错误
 *    @errorMessage {string} 错误信息
*/
async importLayerConfig(params = {}, config = {}) {
    try {
        const { data } = await this.api.importLayerConfig(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ importLayerConfig', error);
    }
}


/**
 * 根据 Id 获取物资
 * @params id {string} id （必填）
 * @returns
 *    @facility {object} 设施基本信息
 *    @resourceId {string} 资源Id
 *    @description {string} 详情
 *    @organization {string} 权属单位
 *    @owner {string} 负责人
 *    @number {string} 联系电话
 *    @amount {number} 数量
 *    @unit {string} 单位
 *    @subType {string} 子类型
 *    @mainType {string} 主类型
 *    @entryTime {string} 入库时间
 *    @platformId {string} 资源所属平台Id
 *    @areaCode {string} 区域码代码
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @id {string} ID
 *    @name {string} 名称
*/
async getGoodsById(id, config = {}) {
    try {
        const { data } = await this.api.getGoodsById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getGoodsById', error);
    }
}


/**
 * 模糊查找设施物资
 * @params locations {array} 点位集合 
 * @params areaCodes {array} 行政区域代码 
 * @params prefixAreaCodes {array} 行政区域前缀代码 
 * @params keyword {string} 模糊查询关键字(搜索物资名称) 
 * @params maxCount {integer} 最大返回值GoodsDataSearchLocations 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchGoods(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchGoods(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ searchGoods', error);
    }
}


/**
 * 根据Id或resourceId批量删除物资
 * @params ids {array} Id 集合 （必填）
 * @returns
*/
async multDeleteGoods(ids, config = {}) {
    try {
        const { data } = await this.api.multDeleteGoods({ ids }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ multDeleteGoods', error);
    }
}


/**
 * 根据Id查找标签
 * @params id {string} id （必填）
 * @returns
 *    @id {string} Id
 *    @title {string} 标题
 *    @color {string} 颜色
 *    @createdTime {string} 创建时间
 *    @modifyTime {string} 修改时间
 *    @resourceId {string} 资源ID
 *    @description {string} 描述
*/
async getLabelsById(id, config = {}) {
    try {
        const { data } = await this.api.getLabelsById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getLabelsById', error);
    }
}


/**
 * 根据Id删除标签
 * @params id {string} id （必填）
 * @returns
*/
async deleteLabels(id, config = {}) {
    try {
        const { data } = await this.api.deleteLabels({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ deleteLabels', error);
    }
}


/**
 * 根据Id更新标签
 * @params id {string} id （必填）
 * @params title {string} 标题 
 * @params color {string} 颜色 
 * @params description {string} 描述 
 * @returns
*/
async editLabels({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editLabels({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ editLabels', error);
    }
}


/**
 * 多条件查询标签
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchLabels(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchLabels(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ searchLabels', error);
    }
}


/**
 * 添加新标签
 * @params title {string} 标题 
 * @params color {string} 颜色 
 * @params description {string} 描述 
 * @returns
*/
async addLabels(params = {}, config = {}) {
    try {
        const { data } = await this.api.addLabels(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addLabels', error);
    }
}


/**
 * 导入标签
 * @params addLabelRequests {array} 标签请求 
 * @returns
*/
async importLabels(params = {}, config = {}) {
    try {
        const { data } = await this.api.importLabels(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ importLabels', error);
    }
}


/**
 * 获取设施图层根节点
 * @params productId {string} 产品Id 
 * @params mapType {undefined} 地图类型 
 * @params areaCode {string} 区域 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getRootLayers(params = {}, config = {}) {
    try {
        const { data } = await this.api.getRootLayers(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getRootLayers', error);
    }
}


/**
 * 获取设施图层子节点
 * @params Path {string} 节点路径 （必填）
 * @params ProductId {string} 产品Id 
 * @params MapType {undefined} Map类型 0-电子，1-卫星，2-科幻 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @params areaCode {string} 区域 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getChildrenLayers({ Path  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getChildrenLayers({Path,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getChildrenLayers', error);
    }
}


/**
 * 模糊查询图层
 * @params ProductId {string} 产品Id 
 * @params keyword {string} 模糊匹配关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getLayers(params = {}, config = {}) {
    try {
        const { data } = await this.api.getLayers(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getLayers', error);
    }
}


/**
 * 查询全部图层类型（GroupKey）
 * @params ProductId {string} 产品Id 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getGroupKeys(params = {}, config = {}) {
    try {
        const { data } = await this.api.getGroupKeys(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getGroupKeys', error);
    }
}


/**
 * 根据图层id集合批量获取图层信息
 * @params ids {array} 图层Id集合 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getLayerInfoByIds({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getLayerInfoByIds({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getLayerInfoByIds', error);
    }
}


/**
 * 根据Id集合或number集合批量删除图层
 * @params ids {array} Id 集合 （必填）
 * @returns
*/
async deleteLayersByIds(ids, config = {}) {
    try {
        const { data } = await this.api.deleteLayersByIds({ ids }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ deleteLayersByIds', error);
    }
}


/**
 * 条件查询图层（不分层，仅用于IES导出）
 * @params ProductId {string} 产品Id 
 * @params keyword {string} 模糊匹配关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getBaseLayers(params = {}, config = {}) {
    try {
        const { data } = await this.api.getBaseLayers(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getBaseLayers', error);
    }
}


/**
 * 查询地图服务类型
 * @params id {string} id （必填）
 * @returns
 *    @id {string} mongoId
 *    @resourceId {string} 自定义Id
 *    @name {string} 类型名称
 *    @epsg {string} 坐标系
 *    @thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
*/
async getMapServerType(id, config = {}) {
    try {
        const { data } = await this.api.getMapServerType({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getMapServerType', error);
    }
}


/**
 * 修改地图服务类型
 * @params id {string} id （必填）
 * @params resourceId {string} 自定义Id 
 * @params name {string} 类型名称 
 * @params epsg {string} 坐标系 
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS 
 * @returns
*/
async editMapServerType({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editMapServerType({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ editMapServerType', error);
    }
}


/**
 * 删除地图服务类型
 * @params id {string} id （必填）
 * @returns
*/
async deleteMapServerType(id, config = {}) {
    try {
        const { data } = await this.api.deleteMapServerType({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ deleteMapServerType', error);
    }
}


/**
 * 添加地图服务类型
 * @params resourceId {string} 自定义Id 
 * @params name {string} 类型名称 
 * @params epsg {string} 坐标系 
 * @params thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS 
 * @returns
 *    @id {string} mongoId
 *    @resourceId {string} 自定义Id
 *    @name {string} 类型名称
 *    @epsg {string} 坐标系
 *    @thumbnail {string} 地图缩略图base64，前端截取地图后压缩保存至GDS
*/
async addMapServerType(params = {}, config = {}) {
    try {
        const { data } = await this.api.addMapServerType(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addMapServerType', error);
    }
}


/**
 * 分页查询地图服务类型集合
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMapServerTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMapServerTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getMapServerTypes', error);
    }
}


/**
 * 根据id分页查询地图服务底图图层集合
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMapTypeOverlays({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMapTypeOverlays({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getMapTypeOverlays', error);
    }
}


/**
 * 查询地图服务底图图层
 * @params id {string} id （必填）
 * @returns
 *    @id {string} mongoId
 *    @name {string} 图层名称
 *    @typeId {string} MapServerTypes表Id
 *    @resourceId {string} 自定义id
 *    @serviceType {string} 服务类型
 *    @url {string} 地址
 *    @isStandard {boolean} 是否标准服务
 *    @needProxy {boolean} 是否需要网络代理
 *    @proxyNetworkId {string} 代理网络id
 *    @proxyIp {string} 代理ip
 *    @proxyPort {integer} 代理端口
 *    @order {integer} 排序字段
 *    @loadOptions {object} 图层配置参数，json字符串，每个不同的服务类型不同参数
*/
async getMapTypeOverlayById(id, config = {}) {
    try {
        const { data } = await this.api.getMapTypeOverlayById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getMapTypeOverlayById', error);
    }
}


/**
 * 修改地图服务底图图层
 * @params id {string} id （必填）
 * @params name {string} 图层名称 
 * @params typeId {string} MapServerTypes表Id 
 * @params resourceId {string} 自定义id 
 * @params serviceType {string} 服务类型 
 * @params url {string} 地址 
 * @params isStandard {boolean} 是否标准服务 
 * @params needProxy {boolean} 是否需要网络代理 
 * @params proxyNetworkId {string} 代理网络id 
 * @params proxyIp {string} 代理ip 
 * @params proxyPort {integer} 代理端口 
 * @params order {integer} 排序字段 
 * @params loadOptions {object} 图层配置参数，json字符串，每个不同的服务类型不同参数 
 * @returns
*/
async editMapTypeOverlay({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editMapTypeOverlay({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ editMapTypeOverlay', error);
    }
}


/**
 * 添加地图服务底图图层
 * @params name {string} 图层名称 
 * @params typeId {string} MapServerTypes表Id 
 * @params resourceId {string} 自定义id 
 * @params serviceType {string} 服务类型 
 * @params url {string} 地址 
 * @params isStandard {boolean} 是否标准服务 
 * @params needProxy {boolean} 是否需要网络代理 
 * @params proxyNetworkId {string} 代理网络id 
 * @params proxyIp {string} 代理ip 
 * @params proxyPort {integer} 代理端口 
 * @params order {integer} 排序字段 
 * @params loadOptions {object} 图层配置参数，json字符串，每个不同的服务类型不同参数 
 * @returns
 *    @id {string} mongoId
 *    @name {string} 图层名称
 *    @typeId {string} MapServerTypes表Id
 *    @resourceId {string} 自定义id
 *    @serviceType {string} 服务类型
 *    @url {string} 地址
 *    @isStandard {boolean} 是否标准服务
 *    @needProxy {boolean} 是否需要网络代理
 *    @proxyNetworkId {string} 代理网络id
 *    @proxyIp {string} 代理ip
 *    @proxyPort {integer} 代理端口
 *    @order {integer} 排序字段
 *    @loadOptions {object} 图层配置参数，json字符串，每个不同的服务类型不同参数
*/
async addMapTypeOverlay(params = {}, config = {}) {
    try {
        const { data } = await this.api.addMapTypeOverlay(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addMapTypeOverlay', error);
    }
}


/**
 * 批量删除地图服务底图图层
 * @params ids {array} Id 集合 （必填）
 * @returns
*/
async deleteMapTypeOverlays(ids, config = {}) {
    try {
        const { data } = await this.api.deleteMapTypeOverlays({ ids }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ deleteMapTypeOverlays', error);
    }
}


/**
 * 根据标绘id查找标绘
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 标绘Id
 *    @associatedId {string} 标绘关联Id，如事件Id、用户Id
 *    @plotAssociatedType {integer} 标绘关联类型 0-用户标绘 1-事件标绘2-专题标绘
 *    @type {string} 标绘数据
 *    @properties {string} 标绘属性
 *    @geometry {string} 几何信息
*/
async getPlotsById(id, config = {}) {
    try {
        const { data } = await this.api.getPlotsById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getPlotsById', error);
    }
}


/**
 * 根据标绘id修改标绘
 * @params id {string} id （必填）
 * @params type {string} 标绘数据 
 * @params properties {object} 标绘属性 
 * @params geometry {object} 几何信息 
 * @returns
*/
async modifyPlotsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.modifyPlotsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ modifyPlotsById', error);
    }
}


/**
 * 根据标绘id删除标绘
 * @params id {string} id （必填）
 * @returns
*/
async deletePlotsById(id, config = {}) {
    try {
        const { data } = await this.api.deletePlotsById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ deletePlotsById', error);
    }
}


/**
 * 查找事件标绘
 * @params EventId {string} 事件Id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getEventPlots({ EventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getEventPlots({EventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getEventPlots', error);
    }
}


/**
 * 添加事件标绘
 * @params eventId {string} 事件Id （必填）
 * @params id {string} 标绘Id 
 * @params type {string} 标绘数据 
 * @params properties {object} 标绘属性 
 * @params geometry {object} 几何信息 
 * @returns
 *    @id {string} 标绘Id
 *    @associatedId {string} 标绘关联Id，如事件Id、用户Id
 *    @plotAssociatedType {integer} 标绘关联类型 0-用户标绘 1-事件标绘2-专题标绘
 *    @type {string} 标绘数据
 *    @properties {string} 标绘属性
 *    @geometry {string} 几何信息
*/
async addEventPlots({ eventId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addEventPlots({eventId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addEventPlots', error);
    }
}


/**
 * 查找用户标绘
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getUserPlots(params = {}, config = {}) {
    try {
        const { data } = await this.api.getUserPlots(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getUserPlots', error);
    }
}


/**
 * 添加用户标绘
 * @params id {string} 标绘Id 
 * @params type {string} 标绘数据 
 * @params properties {object} 标绘属性 
 * @params geometry {object} 几何信息 
 * @returns
 *    @id {string} 标绘Id
 *    @associatedId {string} 标绘关联Id，如事件Id、用户Id
 *    @plotAssociatedType {integer} 标绘关联类型 0-用户标绘 1-事件标绘2-专题标绘
 *    @type {string} 标绘数据
 *    @properties {string} 标绘属性
 *    @geometry {string} 几何信息
*/
async addUserPlots(params = {}, config = {}) {
    try {
        const { data } = await this.api.addUserPlots(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addUserPlots', error);
    }
}


/**
 * 查找标绘
 * @params AssociatedId {string} 关联Id （必填）
 * @params PlotAssociatedType {undefined} 关联类型，0-用户，1-事件，2-专题 （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPlots({ AssociatedId, PlotAssociatedType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPlots({AssociatedId, PlotAssociatedType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getPlots', error);
    }
}


/**
 * 添加标绘
 * @params associatedId {string} 关联Id （必填）
 * @params plotAssociatedType {integer} 标绘关联类型 0-用户标绘 1-事件标绘2-专题标绘 
 * @params id {string} 标绘Id 
 * @params type {string} 标绘数据 
 * @params properties {object} 标绘属性 
 * @params geometry {object} 几何信息 
 * @returns
 *    @id {string} 标绘Id
 *    @associatedId {string} 标绘关联Id，如事件Id、用户Id
 *    @plotAssociatedType {integer} 标绘关联类型 0-用户标绘 1-事件标绘2-专题标绘
 *    @type {string} 标绘数据
 *    @properties {string} 标绘属性
 *    @geometry {string} 几何信息
*/
async addPlots({ associatedId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addPlots({associatedId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addPlots', error);
    }
}


/**
 * 根据id查找用户常用标绘类型
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 标绘类型Id
 *    @type {string} 标绘类型
 *    @name {string} 标绘类型名称
 *    @dirName {string} 目录名称
 *    @fileName {string} 文件名称
 *    @editType {string} 编辑类型
 *    @userId {string} 用户Id
*/
async getUserPlotTypesById(id, config = {}) {
    try {
        const { data } = await this.api.getUserPlotTypesById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getUserPlotTypesById', error);
    }
}


/**
 * 根据id删除标绘类型
 * @params id {string} id （必填）
 * @returns
*/
async deletePlotTypesById(id, config = {}) {
    try {
        const { data } = await this.api.deletePlotTypesById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ deletePlotTypesById', error);
    }
}


/**
 * 查找用户常用标绘类型
 * @returns
 *    @totalCount {integer} 总数
 *    @userId {string} 用户Id
 *    @plotTypes {array} 标绘类型集合
*/
async getUserPlotTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.getUserPlotTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getUserPlotTypes', error);
    }
}


/**
 * 添加用户常用标绘类型
 * @params id {string} 地图标绘类型Id 
 * @params type {string} 标绘类型 
 * @params name {string} 标绘类型名称 
 * @params dirName {string} 目录名称 
 * @params fileName {string} 文件名称 
 * @params editType {string} 编辑类型 
 * @returns
 *    @id {string} 标绘Id
 *    @associatedId {string} 标绘关联Id，如事件Id、用户Id
 *    @plotAssociatedType {integer} 标绘关联类型 0-用户标绘 1-事件标绘2-专题标绘
 *    @type {string} 标绘数据
 *    @properties {string} 标绘属性
 *    @geometry {string} 几何信息
*/
async addUserPlotTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.addUserPlotTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addUserPlotTypes', error);
    }
}


/**
 * 添加模型场景
 * @params resourceId {string} 资源Id 
 * @params facilityId {string} 设施Id 
 * @params areaCode {string} 区域码 
 * @params name {string} 场景名称 
 * @params sceneName {string} 场景对应的英文名 
 * @params isIndoorScene {boolean} 是否室内场景 
 * @params showModelList {array} 场景模型列表 
 * @params cameraOption {object} 三维信息数据（视点数据） 
 * @returns
 *    @id {string} Id
 *    @resourceId {string} 资源Id
 *    @facilityId {string} 设施Id
 *    @areaCode {string} 区域码
 *    @name {string} 场景名称
 *    @sceneName {string} 场景对应的英文名
 *    @isIndoorScene {boolean} 是否室内场景
 *    @showModelList {array} 场景模型列表
 *    @cameraOption {object} 三维信息数据（视点数据）
*/
async addScenes(params = {}, config = {}) {
    try {
        const { data } = await this.api.addScenes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ addScenes', error);
    }
}


/**
 * 修改模型场景
 * @params id {string} id （必填）
 * @params resourceId {string} 资源Id 
 * @params facilityId {string} 设施Id 
 * @params areaCode {string} 区域码 
 * @params name {string} 场景名称 
 * @params sceneName {string} 场景对应的英文名 
 * @params isIndoorScene {boolean} 是否室内场景 
 * @params showModelList {array} 场景模型列表 
 * @params cameraOption {object} 三维信息数据（视点数据） 
 * @returns
*/
async editScene({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editScene({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ editScene', error);
    }
}


/**
 * 删除模型场景
 * @params id {string} id （必填）
 * @returns
*/
async deleteScene(id, config = {}) {
    try {
        const { data } = await this.api.deleteScene({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ deleteScene', error);
    }
}


/**
 * 根据id查询模型场景
 * @params id {string} id （必填）
 * @returns
 *    @id {string} Id
 *    @resourceId {string} 资源Id
 *    @facilityId {string} 设施Id
 *    @areaCode {string} 区域码
 *    @name {string} 场景名称
 *    @sceneName {string} 场景对应的英文名
 *    @isIndoorScene {boolean} 是否室内场景
 *    @showModelList {array} 场景模型列表
 *    @cameraOption {object} 三维信息数据（视点数据）
*/
async getSceneById(id, config = {}) {
    try {
        const { data } = await this.api.getSceneById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getSceneById', error);
    }
}


/**
 * 通过区域码获取模型场景
 * @params areaCode {string}  （必填）
 * @returns
 *    @id {string} Id
 *    @resourceId {string} 资源Id
 *    @facilityId {string} 设施Id
 *    @areaCode {string} 区域码
 *    @name {string} 场景名称
 *    @sceneName {string} 场景对应的英文名
 *    @isIndoorScene {boolean} 是否室内场景
 *    @showModelList {array} 场景模型列表
 *    @cameraOption {object} 三维信息数据（视点数据）
*/
async getSceneByAreaCode(areaCode, config = {}) {
    try {
        const { data } = await this.api.getSceneByAreaCode({ areaCode }, config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getSceneByAreaCode', error);
    }
}


/**
 * 多条件查询模型场景
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, int.MaxValue] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchScenes(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchScenes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ searchScenes', error);
    }
}


/**
 * 获取图层的统计数据
 * @params LayerName {string} 图层名 （必填）
 * @params AreaCode {string} 行政区域码，指查指定区域的统计（不包含下级），如AreaCode只查深圳的统计（不包含下级南山统计） 
 * @params ProductId {string} 产品Id 
 * @params PrefixAreaCodes {array} 行政区域码，查询包括下级的统计，AreaCode，PrefixAreaCodes都传以AreaCode为准 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getLayersStatistical({ LayerName  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getLayersStatistical({LayerName,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getLayersStatistical', error);
    }
}


/**
 * 根据根图层查询下级图层及设施统计
 * @params rootLayerName {string} 根图层名 （必填）
 * @params keyword {string} 关键词 
 * @params productId {string} 产品Id 
 * @params prefixAreaCodes {array} 行政区域码，查询包括下级的统计，AreaCode，PrefixAreaCodes都传以AreaCode为准 
 * @returns
 *    @layerId {string} 图层id
 *    @layerName {string} 图层名称
 *    @subordinateLayersTotal {integer} 图层总数
 *    @facilitiesTotal {integer} 设施总数
 *    @subordinateLayers {array} 下级图层资源
*/
async searchLayersTree({ rootLayerName  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchLayersTree({rootLayerName,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ searchLayersTree', error);
    }
}


/**
 * 根据区域和图层查询设施统计
 * @params layerIds {array} 需统计的图层ID （必填）
 * @params upLeft {object} 坐标点 （必填）
 * @params bottomRight {object} 坐标点 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async queryFacilityByAreaLayer({ layerIds, upLeft, bottomRight  , ...params}, config = {}) {
    try {
        const { data } = await this.api.queryFacilityByAreaLayer({layerIds, upLeft, bottomRight,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ queryFacilityByAreaLayer', error);
    }
}


/**
 * 根据圆形区域图层统计设施
 * @params center {object} 坐标点 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params layerIds {array} 需统计的图层ID （必填）
 * @params upLeft {object} 坐标点 （必填）
 * @params bottomRight {object} 坐标点 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFacilitiesCountByCircleArea({ center, radius, layerIds, upLeft, bottomRight  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFacilitiesCountByCircleArea({center, radius, layerIds, upLeft, bottomRight,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoDataBiz ~ getFacilitiesCountByCircleArea', error);
    }
}

```

 