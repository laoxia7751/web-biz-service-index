// api 
``` js
// 获取Buildings数据
getBuildings: (params, config) => this._getConfig(`/api/Buildings`, "get", params, config), 
// 获取地理编码数据
getGeocoding: (params, config) => this._getConfig(`/api/Geocoder/geocoding`, "get", params, config), 
// 获取逆地理编码数据
getGeocodingReverse: (params, config) => this._getConfig(`/api/Geocoder/reverse_geocoding`, "get", params, config), 
// 驾车路线规划
getDrivingNavigation: (params, config) => this._getConfig(`/api/Navigation/driving`, "get", params, config), 
// 步行路线规划
getWalkingNavigation: (params, config) => this._getConfig(`/api/Navigation/walking`, "get", params, config), 
// 骑行路径规划
getRidingNavigation: (params, config) => this._getConfig(`/api/Navigation/riding`, "get", params, config), 
// 获取Poi数据(经纬度范围默认全国)
getPoi: (params, config) => this._getConfig(`/api/Poi`, "get", params, config), 
// 获取地理输入建议
getPlaceSuggestion: (params, config) => this._getConfig(`/api/Poi/place_suggestion`, "get", params, config), 
// 获取Traffic数据
getTraffic: (params, config) => this._getConfig(`/api/Traffic`, "get", params, config), 
```

 // biz 
``` js
/**
 * 获取Buildings数据
 * @params Longitude {number} 经度 （必填）
 * @params Latitude {number} 纬度 （必填）
 * @params CityCode {string} 城市代号 默认：518000 （必填）
 * @params MaxDistance {integer} 最大距离(米) 默认：50 （必填）
 * @returns
 *    @id {string} Id
 *    @type {string} 类型
 *    @properties {object} 建筑属性
 *    @geometry {object} 建筑面数据
 *    @center {array} 中心点
 *    @maxRadius {number} 最大半径
*/
async getBuildings({ Longitude, Latitude, CityCode, MaxDistance  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getBuildings({Longitude, Latitude, CityCode, MaxDistance,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoAnalysisBiz ~ getBuildings', error);
    }
}


/**
 * 获取地理编码数据
 * @params Address {string} 待解析的地址 最多支持84个字节。可以输入两种样式的值，分别是：  1、标准的结构化地址信息，如北京市海淀区上地十街十号 【推荐，地址结构越完整，解析精度越高】2、支持“*路与*路交叉口”描述方式，如北一环路和阜阳路的交叉路口 第二种方式并不总是有返回结果，只有当地址库中存在该地址描述时才有返回。 （必填）
 * @params City {string} 地址所在的城市名 用于指定上述地址所在的城市，当多个城市都有上述地址时，该参数起到过滤作用，但不限制坐标召回城市。 
 * @returns
 *    @location {object} 坐标点
 *    @precise {integer} 位置的附加信息，是否精确查找。1为精确查找，即准确打点；0为不精确，即模糊打点。
 *    @confidence {integer} 描述打点绝对精度（即坐标点的误差范围）
 *    @level {string} 能精确理解的地址类型 包含：UNKNOWN、国家、省、城市、区县、乡镇、村庄、道路、地产小区、商务大厦、   政府机构、交叉路口、商圈、生活服务、休闲娱乐、餐饮、宾馆、购物、金融、教育、   医疗 、工业园区 、旅游景点 、汽车服务、火车站、长途汽车站、桥 、停车场/停车区、港口/码头、收费区/收费站、飞机场 、机场 、收费处/收费站 、加油站、绿地、门址 
*/
async getGeocoding({ Address  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGeocoding({Address,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoAnalysisBiz ~ getGeocoding', error);
    }
}


/**
 * 获取逆地理编码数据
 * @params Location.Longitude {number} 经度 
 * @params Location.Latitude {number} 纬度 
 * @params ExtensionsPoi {string} 底层调用poi开关 extensions_poi=0，不召回pois数据。 extensions_poi=1，返回pois数据，默认显示周边1000米内的poi。  
 * @params ExtensionsRoad {string} 取值为true时召回坐标周围最近3条道路数据 
 * @params ExtensionTown {string} 当取值为true时，行政区划返回乡镇级数据（仅国内召回乡镇数据）。默认不访问。 
 * @params PoiTypes {string} 可以选择poi类型召回不同类型的poi，例如poi_types=酒店，如想召回多个POI类型数据，可以‘|’分割 
 * @params Radius {string} poi召回半径poi召回半径，允许设置区间为0-1000米 
 * @returns
 *    @location {object} 坐标点
 *    @formattedAddress {string} 结构化地址信息 如：北京市海淀区中关村大街27号1101-08室
 *    @business {string} 坐标所在商圈信息 如 "人民大学,中关村,苏州街"。最多返回3个。
 *    @cityCode {string} 城市id
 *    @addressComponent {object} 地址
 *    @pois {array} 周边poi
 *    @poiRegions {array} Poi 区域信息
 *    @roads {array} 周边道路
 *    @sematicDescription {string} 当前位置结合POI的语义化结果描述。如：中关村大厦内,中国建设银行(中关村支行)附近31米
*/
async getGeocodingReverse(params = {}, config = {}) {
    try {
        const { data } = await this.api.getGeocodingReverse(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoAnalysisBiz ~ getGeocodingReverse', error);
    }
}


/**
 * 驾车路线规划
 * @params WayPoints {string} 途径点. 支持5个以内的有序途径点（纬度,经度）。多个途径点坐标按顺序以英文竖线符号分隔。如：40.465,116.314|40.232,116.352|40.121,116.453 
 * @params Tactics {integer} 导航策略 0：常规路线，即多数用户常走的一条经验路线，满足大多数场景需求，是较推荐的一个策略 1：不走高速 2：躲避拥堵 3：距离较短  
 * @params GpsDirection {integer} 起点的定位方向 【EGIS无效】车头方向为与正北方向顺时针夹角，取值范围[0,359]。该参数用于辅助判断起点所在正逆向车道，提高算路准确率。当speed>1.5米/秒且gps_direction存在时，采用该方向。gps_direction并不代表需填写从gps获取的方向，可以填入校正后的方向。请填写尽量准确的方向，其准确性很大程度决定了计算的精度。 
 * @params Radius {integer} 起点的定位精度 【EGIS无效】配合gps_direction字段使用，取值范围[0,2000] 
 * @params Speed {integer} 起点车辆的行驶速度 【EGIS无效】配合gps_direction字段使用，单位：米/秒 当speed>1.5米/秒且gps_direction存在时，采用gps_direction的方向 
 * @params OriginLocation.Longitude {number} 经度 
 * @params OriginLocation.Latitude {number} 纬度 
 * @params DestinationLocation.Longitude {number} 经度 
 * @params DestinationLocation.Latitude {number} 纬度 
 * @returns
 *    @origin {object} 坐标点
 *    @destination {object} 坐标点
 *    @routes {array} 路径
*/
async getDrivingNavigation(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDrivingNavigation(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoAnalysisBiz ~ getDrivingNavigation', error);
    }
}


/**
 * 步行路线规划
 * @params OriginLocation.Longitude {number} 经度 
 * @params OriginLocation.Latitude {number} 纬度 
 * @params DestinationLocation.Longitude {number} 经度 
 * @params DestinationLocation.Latitude {number} 纬度 
 * @returns
 *    @origin {object} 坐标点
 *    @destination {object} 坐标点
 *    @routes {array} 路径
*/
async getWalkingNavigation(params = {}, config = {}) {
    try {
        const { data } = await this.api.getWalkingNavigation(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoAnalysisBiz ~ getWalkingNavigation', error);
    }
}


/**
 * 骑行路径规划
 * @params RidingType {integer} 骑行类型0：普通自行车，默认为普通自行车1：电动自行车 
 * @params OriginLocation.Longitude {number} 经度 
 * @params OriginLocation.Latitude {number} 纬度 
 * @params DestinationLocation.Longitude {number} 经度 
 * @params DestinationLocation.Latitude {number} 纬度 
 * @returns
 *    @origin {object} 坐标点
 *    @destination {object} 坐标点
 *    @routes {array} 路径
*/
async getRidingNavigation(params = {}, config = {}) {
    try {
        const { data } = await this.api.getRidingNavigation(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoAnalysisBiz ~ getRidingNavigation', error);
    }
}


/**
 * 获取Poi数据(经纬度范围默认全国)
 * @params LeftBottomLocation.Longitude {number} 经度 
 * @params LeftBottomLocation.Latitude {number} 纬度 
 * @params RightTopLocation.Longitude {number} 经度 
 * @params RightTopLocation.Latitude {number} 纬度 
 * @params Query {string} 检索关键字，多个分类以","分隔。 如：天安门,美食 （必填）
 * @params Tag {string} 标签项，多个分类以","分隔。如：美食,酒店【EGIS无效】 
 * @params Scope {integer} 检索结果详细程度，取值为1，则返回基本信息；取值为2，返回检索POI详细信息 默认：1 （必填）
 * @params Filter {string} 检索过滤条件取值为1 或空，则返回基本信息；取值为2，返回检索POI详细信息【EGIS无效】 
 * @params page {integer} 页码, 从1开始。多关键字检索时，返回的记录数为关键字个数*page_size。 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPoi({ Query, Scope  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPoi({Query, Scope,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoAnalysisBiz ~ getPoi', error);
    }
}


/**
 * 获取地理输入建议
 * @params Query {string} 检索关键字 如：上地、天安、中关、shanghai （必填）
 * @params Region {string} 全国、省、城市及对应百度编码  如：全国、北京市、131、江苏省等  （必填）
 * @params CityLimit {string} 是否只对 region 中的城市进行检索取值为"true"，仅返回region中指定城市检索结果；取值为"false"或为空时，返回region中指定城市及其外检索结果 
 * @params Location.Longitude {number} 经度 
 * @params Location.Latitude {number} 纬度 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPlaceSuggestion({ Query, Region  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPlaceSuggestion({Query, Region,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('geoAnalysisBiz ~ getPlaceSuggestion', error);
    }
}


/**
 * 获取Traffic数据
 * @returns
*/
async getTraffic(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTraffic(params,config);
        return data;
    } catch (error) {
        return utils.formatError('geoAnalysisBiz ~ getTraffic', error);
    }
}

```

 