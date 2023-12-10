// api 
``` js
// 计算高斯烟羽模型
getAnalysisGaussianPlumeData: (params, config) => this._getConfig(`/api/Analysis/GetAnalysisGaussianPlumeData`, "post", params, config), 
// 计算影响面积
getAnalysisDiffusionArea: (params, config) => this._getConfig(`/api/Analysis/GetAnalysisDiffusionArea`, "post", params, config), 
// 计算扩散趋势
getAnalysisDiffusionTrend: (params, config) => this._getConfig(`/api/Analysis/GetAnalysisDiffusionTrend`, "post", params, config), 
// 计算蒸汽云爆炸模型的爆炸范围
getAnalysisVaporCloudExplosion: (params, config) => this._getConfig(`/api/Analysis/AnalysisVaporCloudExplosion`, "post", params, config), 
// 演示CustomValidationException
showCustomValidationException: (params, config) => this._getConfig(`/api/ExceptionDemo/${params.resourceId}`, "get", params, config), 
// 演示UnHandleException
showUnHandleException: (params, config) => this._getConfig(`/api/ExceptionDemo/${params.resourceId}`, "delete", params, config), 
// 演示ForbiddenException
showForbiddenException: (params, config) => this._getConfig(`/api/ExceptionDemo`, "post", params, config), 
// 分页请求气体信息数据
getGas: (params, config) => this._getConfig(`/api/Gas`, "get", params, config), 
// 根据资源Id返回单个气体信息
getGasById: (params, config) => this._getConfig(`/api/Gas/${params.id}`, "get", params, config), 
// 根据气体名称返回单个气体信息
getGasByName: (params, config) => this._getConfig(`/api/Gas/Name/${params.name}`, "get", params, config), 
// 计算高斯烟羽模型
getAnalysisGaussianPlumeDataV2: (params, config) => this._getConfig(`/api/Analysis/gaussian_plume`, "post", params, config), 
// 计算影响面积
getAnalysisDiffusionAreaV2: (params, config) => this._getConfig(`/api/Analysis/gaussian_plume/area`, "post", params, config), 
// 计算扩散趋势
getAnalysisDiffusionTrendV2: (params, config) => this._getConfig(`/api/Analysis/gaussian_plume/trend`, "post", params, config), 
// 计算蒸汽云爆炸模型的爆炸范围
getAnalysisVaporCloudExplosionV2: (params, config) => this._getConfig(`/api/Analysis/vapor_cloud_explosion`, "post", params, config), 
// 分页请求气体信息数据
getGasV2: (params, config) => this._getConfig(`/api/Gas`, "get", params, config), 
// 根据资源Id返回单个气体信息
getGasByIdV2: (params, config) => this._getConfig(`/api/Gas/${params.id}`, "get", params, config), 
// 根据气体名称返回单个气体信息
getGasByNameV2: (params, config) => this._getConfig(`/api/Gas/name`, "get", params, config), 
```

 // biz 
``` js
/**
 * 计算高斯烟羽模型
 * @headers X-version {string}  
 * @params time {string} 时间点 
 * @params hour {integer} 时间范围 （必填）
 * @params gasResourceId {string} 气体ID 
 * @params leakageMethod {integer} 泄露方式 
 * @params leakPointType {integer} 泄露点方式 
 * @params containerPressure {number} 容器压力  KPA 
 * @params containerTemperature {number} 容器温度 °C 
 * @params containerLeakageDiameter {number} 泄漏点直径单位米 
 * @params radius {number} 计算半径单位：KM （必填）
 * @params resolution {integer} 分辨率大小 
 * @params view {integer} 基本描述：决定模型要计算的切面、是否要使用pyplot画简易结果图。默认值为NO_PLOT。PLAN_VIEW=1： 计算x-y面(横切面),并将每小时的输出画图,储存在output文件夹。HEIGHT_SLICE=2: 计算y-z面(纵切面)，并将每小时的输出画图,储存在output文件夹。SURFACE_TIME=3: 计算某个点(x, y)的时序数据。NO_PLOT=4: 计算x-y面(横切面),且不画图。 
 * @params windSource {integer} 何种方式获取风速数据CONSTANT_WIND=1FLUCTUATING_WIND=2PREVAILING_WIND=3REAL_WIND=4SHOW_WIND=5 
 * @params stabilitySource {integer} 何种方式获取大气稳定性CONSTANT_STABILITY = 1ANNUAL_CYCLE = 2REAL_STABILITY = 3 
 * @params verticalStability {integer} 大气稳定性的取值VERY_UNSTABLE = 1MODERATELY_UNSTABLE =2SLIGHTLY_UNSTABLE =3NEUTRAL= 4MODERATELY_STABLE = 5VERY_STABLE = 6REAL_VERTICAL_STABILITY = 7 
 * @params stackNumber {integer} 要计算的储罐数量,目前服务端写死为1 
 * @params stackX {array} 每个储罐的相对坐标x, 用list传入, 例如：[0.0,1000.0,-200.0],目前服务端写死 
 * @params stackY {array} 每个储罐的相对坐标x, 用list传入, 例如：[0., 250., -500.],目前服务端写死 
 * @params stackH {array} 储罐的高度,单位m,服务端暂时写死。后续要通过读取预案等方式获取数据 
 * @params humidify {integer} 湿度情况DRY_AEROSOL=1HUMIDIFY=2 
 * @params radiusZ {integer} 计算空间的z轴高度,Z轴坐标范围为0~radius_z 
 * @params xSlice {integer} 目前不支持通过矢状面计算! 目前服务端写死。使用矢状面模式(view=HEIGHT_SLICE)计算时，矢状面切入的x坐标。理论上，对x_slice = x[i]进行遍历计算，可得该时间点的三维浓度数据 
 * @params zSlice {integer} 输出面的高度。目前服务端写死等于储罐高度(stack_H)。使用横切面模式(view=PLAN_VIEW 或 NO_PLOT)时，决定输出横切面的z坐标。 
 * @params resolutionZ {integer} y-z空间的分辨率。决定y-z平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。目前没有使用此参数。 
 * @params resolutionXy {integer} x-y空间的分辨率。决定x-y平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。当前方案采用15000,由前端传参 
 * @params startIndex {integer} 开始索引 
 * @params endIndex {integer} 结束索引 
 * @params isClearZero {boolean} 是否清除value为0的值 
 * @returns
*/
async getAnalysisGaussianPlumeData({ hour, radius  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAnalysisGaussianPlumeData({hour, radius,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getAnalysisGaussianPlumeData', error);
    }
}


/**
 * 计算影响面积
 * @headers X-version {string}  
 * @params time {string} 时间点 
 * @params hour {integer} 时间范围 （必填）
 * @params gasResourceId {string} 气体ID 
 * @params leakageMethod {integer} 泄露方式 
 * @params leakPointType {integer} 泄露点方式 
 * @params containerPressure {number} 容器压力  KPA 
 * @params containerTemperature {number} 容器温度 °C 
 * @params containerLeakageDiameter {number} 泄漏点直径单位米 
 * @params radius {number} 计算半径单位：KM （必填）
 * @params resolution {integer} 分辨率大小 
 * @params view {integer} 基本描述：决定模型要计算的切面、是否要使用pyplot画简易结果图。默认值为NO_PLOT。PLAN_VIEW=1： 计算x-y面(横切面),并将每小时的输出画图,储存在output文件夹。HEIGHT_SLICE=2: 计算y-z面(纵切面)，并将每小时的输出画图,储存在output文件夹。SURFACE_TIME=3: 计算某个点(x, y)的时序数据。NO_PLOT=4: 计算x-y面(横切面),且不画图。 
 * @params windSource {integer} 何种方式获取风速数据CONSTANT_WIND=1FLUCTUATING_WIND=2PREVAILING_WIND=3REAL_WIND=4SHOW_WIND=5 
 * @params stabilitySource {integer} 何种方式获取大气稳定性CONSTANT_STABILITY = 1ANNUAL_CYCLE = 2REAL_STABILITY = 3 
 * @params verticalStability {integer} 大气稳定性的取值VERY_UNSTABLE = 1MODERATELY_UNSTABLE =2SLIGHTLY_UNSTABLE =3NEUTRAL= 4MODERATELY_STABLE = 5VERY_STABLE = 6REAL_VERTICAL_STABILITY = 7 
 * @params stackNumber {integer} 要计算的储罐数量,目前服务端写死为1 
 * @params stackX {array} 每个储罐的相对坐标x, 用list传入, 例如：[0.0,1000.0,-200.0],目前服务端写死 
 * @params stackY {array} 每个储罐的相对坐标x, 用list传入, 例如：[0., 250., -500.],目前服务端写死 
 * @params stackH {array} 储罐的高度,单位m,服务端暂时写死。后续要通过读取预案等方式获取数据 
 * @params humidify {integer} 湿度情况DRY_AEROSOL=1HUMIDIFY=2 
 * @params radiusZ {integer} 计算空间的z轴高度,Z轴坐标范围为0~radius_z 
 * @params xSlice {integer} 目前不支持通过矢状面计算! 目前服务端写死。使用矢状面模式(view=HEIGHT_SLICE)计算时，矢状面切入的x坐标。理论上，对x_slice = x[i]进行遍历计算，可得该时间点的三维浓度数据 
 * @params zSlice {integer} 输出面的高度。目前服务端写死等于储罐高度(stack_H)。使用横切面模式(view=PLAN_VIEW 或 NO_PLOT)时，决定输出横切面的z坐标。 
 * @params resolutionZ {integer} y-z空间的分辨率。决定y-z平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。目前没有使用此参数。 
 * @params resolutionXy {integer} x-y空间的分辨率。决定x-y平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。当前方案采用15000,由前端传参 
 * @params startIndex {integer} 开始索引 
 * @params endIndex {integer} 结束索引 
 * @params isClearZero {boolean} 是否清除value为0的值 
 * @params nowHour {integer} 当前小时 （必填）
 * @params lastHour {integer} 上次的小时 （必填）
 * @returns
 *    @lowerArea {array} 低影响面积
 *    @middleArea {array} 低影响面积
 *    @heightArea {array} 低影响面积
*/
async getAnalysisDiffusionArea({ hour, radius, nowHour, lastHour  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAnalysisDiffusionArea({hour, radius, nowHour, lastHour,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getAnalysisDiffusionArea', error);
    }
}


/**
 * 计算扩散趋势
 * @headers X-version {string}  
 * @params time {string} 时间点 
 * @params hour {integer} 时间范围 （必填）
 * @params gasResourceId {string} 气体ID 
 * @params leakageMethod {integer} 泄露方式 
 * @params leakPointType {integer} 泄露点方式 
 * @params containerPressure {number} 容器压力  KPA 
 * @params containerTemperature {number} 容器温度 °C 
 * @params containerLeakageDiameter {number} 泄漏点直径单位米 
 * @params radius {number} 计算半径单位：KM （必填）
 * @params resolution {integer} 分辨率大小 
 * @params view {integer} 基本描述：决定模型要计算的切面、是否要使用pyplot画简易结果图。默认值为NO_PLOT。PLAN_VIEW=1： 计算x-y面(横切面),并将每小时的输出画图,储存在output文件夹。HEIGHT_SLICE=2: 计算y-z面(纵切面)，并将每小时的输出画图,储存在output文件夹。SURFACE_TIME=3: 计算某个点(x, y)的时序数据。NO_PLOT=4: 计算x-y面(横切面),且不画图。 
 * @params windSource {integer} 何种方式获取风速数据CONSTANT_WIND=1FLUCTUATING_WIND=2PREVAILING_WIND=3REAL_WIND=4SHOW_WIND=5 
 * @params stabilitySource {integer} 何种方式获取大气稳定性CONSTANT_STABILITY = 1ANNUAL_CYCLE = 2REAL_STABILITY = 3 
 * @params verticalStability {integer} 大气稳定性的取值VERY_UNSTABLE = 1MODERATELY_UNSTABLE =2SLIGHTLY_UNSTABLE =3NEUTRAL= 4MODERATELY_STABLE = 5VERY_STABLE = 6REAL_VERTICAL_STABILITY = 7 
 * @params stackNumber {integer} 要计算的储罐数量,目前服务端写死为1 
 * @params stackX {array} 每个储罐的相对坐标x, 用list传入, 例如：[0.0,1000.0,-200.0],目前服务端写死 
 * @params stackY {array} 每个储罐的相对坐标x, 用list传入, 例如：[0., 250., -500.],目前服务端写死 
 * @params stackH {array} 储罐的高度,单位m,服务端暂时写死。后续要通过读取预案等方式获取数据 
 * @params humidify {integer} 湿度情况DRY_AEROSOL=1HUMIDIFY=2 
 * @params radiusZ {integer} 计算空间的z轴高度,Z轴坐标范围为0~radius_z 
 * @params xSlice {integer} 目前不支持通过矢状面计算! 目前服务端写死。使用矢状面模式(view=HEIGHT_SLICE)计算时，矢状面切入的x坐标。理论上，对x_slice = x[i]进行遍历计算，可得该时间点的三维浓度数据 
 * @params zSlice {integer} 输出面的高度。目前服务端写死等于储罐高度(stack_H)。使用横切面模式(view=PLAN_VIEW 或 NO_PLOT)时，决定输出横切面的z坐标。 
 * @params resolutionZ {integer} y-z空间的分辨率。决定y-z平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。目前没有使用此参数。 
 * @params resolutionXy {integer} x-y空间的分辨率。决定x-y平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。当前方案采用15000,由前端传参 
 * @params startIndex {integer} 开始索引 
 * @params endIndex {integer} 结束索引 
 * @params isClearZero {boolean} 是否清除value为0的值 
 * @returns
 *    @lowerArea {array} 低影响面积
 *    @middleArea {array} 低影响面积
 *    @heightArea {array} 低影响面积
*/
async getAnalysisDiffusionTrend({ hour, radius  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAnalysisDiffusionTrend({hour, radius,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getAnalysisDiffusionTrend', error);
    }
}


/**
 * 计算蒸汽云爆炸模型的爆炸范围
 * @headers X-version {string}  
 * @params totalFuelMass {number} 燃料总质量 
 * @params combustibleGasesCombustionHeat {number} 可燃气体燃烧热 
 * @params groundExplosionFactor {number} 地面爆炸系数 
 * @params tntEquivalentFactor {number} TNT当量系数 
 * @params tntExplosiveHeat {number} TNT爆热 
 * @params environmentalPressure {number} 环境压力 
 * @params degreeBuildingDamage {number} 建筑破坏程度 
 * @returns
 *    @deathRadius {number} 死亡区半径
 *    @severeWoundRadius {number} 重伤区半径
 *    @slightWoundRadius {number} 轻伤区半径
 *    @buildingDamageRadius {number} 建筑受损半径
*/
async getAnalysisVaporCloudExplosion(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAnalysisVaporCloudExplosion(params,config);
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getAnalysisVaporCloudExplosion', error);
    }
}


/**
 * 演示CustomValidationException
 * @params resourceId {string} resourceId （必填）
 * @headers X-version {string}  
 * @returns
*/
async showCustomValidationException({ resourceId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.showCustomValidationException({resourceId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ showCustomValidationException', error);
    }
}


/**
 * 演示UnHandleException
 * @params resourceId {string} resourceId （必填）
 * @headers X-version {string}  
 * @returns
*/
async showUnHandleException({ resourceId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.showUnHandleException({resourceId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ showUnHandleException', error);
    }
}


/**
 * 演示ForbiddenException
 * @params resourceId {string} resourceId （必填）
 * @headers X-version {string}  
 * @returns
*/
async showForbiddenException({ resourceId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.showForbiddenException(params,{params:{resourceId,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ showForbiddenException', error);
    }
}


/**
 * 分页请求气体信息数据
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @id {string} ID
 *    @resourceId {string} 资源ID
 *    @name {string} 名称
 *    @chemicalName {string} 化学名称
 *    @gasCharacteristic {array} 化学性质
 *    @concentrations {array} 浓度范围
*/
async getGas(params = {}, config = {}) {
    try {
        const { data } = await this.api.getGas(params,config);
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getGas', error);
    }
}


/**
 * 根据资源Id返回单个气体信息
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} ID
 *    @resourceId {string} 资源ID
 *    @name {string} 名称
 *    @chemicalName {string} 化学名称
 *    @gasCharacteristic {array} 化学性质
 *    @concentrations {array} 浓度范围
*/
async getGasById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGasById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getGasById', error);
    }
}


/**
 * 根据气体名称返回单个气体信息
 * @params name {string}  （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} ID
 *    @resourceId {string} 资源ID
 *    @name {string} 名称
 *    @chemicalName {string} 化学名称
 *    @gasCharacteristic {array} 化学性质
 *    @concentrations {array} 浓度范围
*/
async getGasByName({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGasByName({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getGasByName', error);
    }
}


/**
 * 计算高斯烟羽模型
 * @headers X-version {string}  
 * @params time {string} 时间点 
 * @params hour {integer} 时间范围 （必填）
 * @params gasResourceId {string} 气体ID 
 * @params leakageMethod {integer} 泄露方式 
 * @params leakPointType {integer} 泄露点方式 
 * @params containerPressure {number} 容器压力  KPA 
 * @params containerTemperature {number} 容器温度 °C 
 * @params containerLeakageDiameter {number} 泄漏点直径单位米 
 * @params radius {number} 计算半径单位：KM （必填）
 * @params resolution {integer} 分辨率大小 
 * @params view {integer} 基本描述：决定模型要计算的切面、是否要使用pyplot画简易结果图。默认值为NO_PLOT。PLAN_VIEW=1： 计算x-y面(横切面),并将每小时的输出画图,储存在output文件夹。HEIGHT_SLICE=2: 计算y-z面(纵切面)，并将每小时的输出画图,储存在output文件夹。SURFACE_TIME=3: 计算某个点(x, y)的时序数据。NO_PLOT=4: 计算x-y面(横切面),且不画图。 
 * @params windSource {integer} 何种方式获取风速数据CONSTANT_WIND=1FLUCTUATING_WIND=2PREVAILING_WIND=3REAL_WIND=4SHOW_WIND=5 
 * @params stabilitySource {integer} 何种方式获取大气稳定性CONSTANT_STABILITY = 1ANNUAL_CYCLE = 2REAL_STABILITY = 3 
 * @params verticalStability {integer} 大气稳定性的取值VERY_UNSTABLE = 1MODERATELY_UNSTABLE =2SLIGHTLY_UNSTABLE =3NEUTRAL= 4MODERATELY_STABLE = 5VERY_STABLE = 6REAL_VERTICAL_STABILITY = 7 
 * @params stackNumber {integer} 要计算的储罐数量,目前服务端写死为1 
 * @params stackX {array} 每个储罐的相对坐标x, 用list传入, 例如：[0.0,1000.0,-200.0],目前服务端写死 
 * @params stackY {array} 每个储罐的相对坐标x, 用list传入, 例如：[0., 250., -500.],目前服务端写死 
 * @params stackH {array} 储罐的高度,单位m,服务端暂时写死。后续要通过读取预案等方式获取数据 
 * @params humidify {integer} 湿度情况DRY_AEROSOL=1HUMIDIFY=2 
 * @params radiusZ {integer} 计算空间的z轴高度,Z轴坐标范围为0~radius_z 
 * @params xSlice {integer} 目前不支持通过矢状面计算! 目前服务端写死。使用矢状面模式(view=HEIGHT_SLICE)计算时，矢状面切入的x坐标。理论上，对x_slice = x[i]进行遍历计算，可得该时间点的三维浓度数据 
 * @params zSlice {integer} 输出面的高度。目前服务端写死等于储罐高度(stack_H)。使用横切面模式(view=PLAN_VIEW 或 NO_PLOT)时，决定输出横切面的z坐标。 
 * @params resolutionZ {integer} y-z空间的分辨率。决定y-z平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。目前没有使用此参数。 
 * @params resolutionXy {integer} x-y空间的分辨率。决定x-y平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。当前方案采用15000,由前端传参 
 * @params startIndex {integer} 开始索引 
 * @params endIndex {integer} 结束索引 
 * @params isClearZero {boolean} 是否清除value为0的值 
 * @returns
*/
async getAnalysisGaussianPlumeDataV2({ hour, radius  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAnalysisGaussianPlumeDataV2({hour, radius,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getAnalysisGaussianPlumeDataV2', error);
    }
}


/**
 * 计算影响面积
 * @headers X-version {string}  
 * @params time {string} 时间点 
 * @params hour {integer} 时间范围 （必填）
 * @params gasResourceId {string} 气体ID 
 * @params leakageMethod {integer} 泄露方式 
 * @params leakPointType {integer} 泄露点方式 
 * @params containerPressure {number} 容器压力  KPA 
 * @params containerTemperature {number} 容器温度 °C 
 * @params containerLeakageDiameter {number} 泄漏点直径单位米 
 * @params radius {number} 计算半径单位：KM （必填）
 * @params resolution {integer} 分辨率大小 
 * @params view {integer} 基本描述：决定模型要计算的切面、是否要使用pyplot画简易结果图。默认值为NO_PLOT。PLAN_VIEW=1： 计算x-y面(横切面),并将每小时的输出画图,储存在output文件夹。HEIGHT_SLICE=2: 计算y-z面(纵切面)，并将每小时的输出画图,储存在output文件夹。SURFACE_TIME=3: 计算某个点(x, y)的时序数据。NO_PLOT=4: 计算x-y面(横切面),且不画图。 
 * @params windSource {integer} 何种方式获取风速数据CONSTANT_WIND=1FLUCTUATING_WIND=2PREVAILING_WIND=3REAL_WIND=4SHOW_WIND=5 
 * @params stabilitySource {integer} 何种方式获取大气稳定性CONSTANT_STABILITY = 1ANNUAL_CYCLE = 2REAL_STABILITY = 3 
 * @params verticalStability {integer} 大气稳定性的取值VERY_UNSTABLE = 1MODERATELY_UNSTABLE =2SLIGHTLY_UNSTABLE =3NEUTRAL= 4MODERATELY_STABLE = 5VERY_STABLE = 6REAL_VERTICAL_STABILITY = 7 
 * @params stackNumber {integer} 要计算的储罐数量,目前服务端写死为1 
 * @params stackX {array} 每个储罐的相对坐标x, 用list传入, 例如：[0.0,1000.0,-200.0],目前服务端写死 
 * @params stackY {array} 每个储罐的相对坐标x, 用list传入, 例如：[0., 250., -500.],目前服务端写死 
 * @params stackH {array} 储罐的高度,单位m,服务端暂时写死。后续要通过读取预案等方式获取数据 
 * @params humidify {integer} 湿度情况DRY_AEROSOL=1HUMIDIFY=2 
 * @params radiusZ {integer} 计算空间的z轴高度,Z轴坐标范围为0~radius_z 
 * @params xSlice {integer} 目前不支持通过矢状面计算! 目前服务端写死。使用矢状面模式(view=HEIGHT_SLICE)计算时，矢状面切入的x坐标。理论上，对x_slice = x[i]进行遍历计算，可得该时间点的三维浓度数据 
 * @params zSlice {integer} 输出面的高度。目前服务端写死等于储罐高度(stack_H)。使用横切面模式(view=PLAN_VIEW 或 NO_PLOT)时，决定输出横切面的z坐标。 
 * @params resolutionZ {integer} y-z空间的分辨率。决定y-z平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。目前没有使用此参数。 
 * @params resolutionXy {integer} x-y空间的分辨率。决定x-y平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。当前方案采用15000,由前端传参 
 * @params startIndex {integer} 开始索引 
 * @params endIndex {integer} 结束索引 
 * @params isClearZero {boolean} 是否清除value为0的值 
 * @params nowHour {integer} 当前小时 （必填）
 * @params lastHour {integer} 上次的小时 （必填）
 * @returns
 *    @lowerArea {array} 低影响面积
 *    @middleArea {array} 低影响面积
 *    @heightArea {array} 低影响面积
*/
async getAnalysisDiffusionAreaV2({ hour, radius, nowHour, lastHour  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAnalysisDiffusionAreaV2({hour, radius, nowHour, lastHour,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getAnalysisDiffusionAreaV2', error);
    }
}


/**
 * 计算扩散趋势
 * @headers X-version {string}  
 * @params time {string} 时间点 
 * @params hour {integer} 时间范围 （必填）
 * @params gasResourceId {string} 气体ID 
 * @params leakageMethod {integer} 泄露方式 
 * @params leakPointType {integer} 泄露点方式 
 * @params containerPressure {number} 容器压力  KPA 
 * @params containerTemperature {number} 容器温度 °C 
 * @params containerLeakageDiameter {number} 泄漏点直径单位米 
 * @params radius {number} 计算半径单位：KM （必填）
 * @params resolution {integer} 分辨率大小 
 * @params view {integer} 基本描述：决定模型要计算的切面、是否要使用pyplot画简易结果图。默认值为NO_PLOT。PLAN_VIEW=1： 计算x-y面(横切面),并将每小时的输出画图,储存在output文件夹。HEIGHT_SLICE=2: 计算y-z面(纵切面)，并将每小时的输出画图,储存在output文件夹。SURFACE_TIME=3: 计算某个点(x, y)的时序数据。NO_PLOT=4: 计算x-y面(横切面),且不画图。 
 * @params windSource {integer} 何种方式获取风速数据CONSTANT_WIND=1FLUCTUATING_WIND=2PREVAILING_WIND=3REAL_WIND=4SHOW_WIND=5 
 * @params stabilitySource {integer} 何种方式获取大气稳定性CONSTANT_STABILITY = 1ANNUAL_CYCLE = 2REAL_STABILITY = 3 
 * @params verticalStability {integer} 大气稳定性的取值VERY_UNSTABLE = 1MODERATELY_UNSTABLE =2SLIGHTLY_UNSTABLE =3NEUTRAL= 4MODERATELY_STABLE = 5VERY_STABLE = 6REAL_VERTICAL_STABILITY = 7 
 * @params stackNumber {integer} 要计算的储罐数量,目前服务端写死为1 
 * @params stackX {array} 每个储罐的相对坐标x, 用list传入, 例如：[0.0,1000.0,-200.0],目前服务端写死 
 * @params stackY {array} 每个储罐的相对坐标x, 用list传入, 例如：[0., 250., -500.],目前服务端写死 
 * @params stackH {array} 储罐的高度,单位m,服务端暂时写死。后续要通过读取预案等方式获取数据 
 * @params humidify {integer} 湿度情况DRY_AEROSOL=1HUMIDIFY=2 
 * @params radiusZ {integer} 计算空间的z轴高度,Z轴坐标范围为0~radius_z 
 * @params xSlice {integer} 目前不支持通过矢状面计算! 目前服务端写死。使用矢状面模式(view=HEIGHT_SLICE)计算时，矢状面切入的x坐标。理论上，对x_slice = x[i]进行遍历计算，可得该时间点的三维浓度数据 
 * @params zSlice {integer} 输出面的高度。目前服务端写死等于储罐高度(stack_H)。使用横切面模式(view=PLAN_VIEW 或 NO_PLOT)时，决定输出横切面的z坐标。 
 * @params resolutionZ {integer} y-z空间的分辨率。决定y-z平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。目前没有使用此参数。 
 * @params resolutionXy {integer} x-y空间的分辨率。决定x-y平面上每个网格(像素)的边长。取值越小，模型分辨率越高，计算越久。当前方案采用15000,由前端传参 
 * @params startIndex {integer} 开始索引 
 * @params endIndex {integer} 结束索引 
 * @params isClearZero {boolean} 是否清除value为0的值 
 * @returns
 *    @lowerArea {array} 低影响面积
 *    @middleArea {array} 低影响面积
 *    @heightArea {array} 低影响面积
*/
async getAnalysisDiffusionTrendV2({ hour, radius  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAnalysisDiffusionTrendV2({hour, radius,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getAnalysisDiffusionTrendV2', error);
    }
}


/**
 * 计算蒸汽云爆炸模型的爆炸范围
 * @headers X-version {string}  
 * @params totalFuelMass {number} 燃料总质量 
 * @params combustibleGasesCombustionHeat {number} 可燃气体燃烧热 
 * @params groundExplosionFactor {number} 地面爆炸系数 
 * @params tntEquivalentFactor {number} TNT当量系数 
 * @params tntExplosiveHeat {number} TNT爆热 
 * @params environmentalPressure {number} 环境压力 
 * @params degreeBuildingDamage {number} 建筑破坏程度 
 * @returns
 *    @deathRadius {number} 死亡区半径
 *    @severeWoundRadius {number} 重伤区半径
 *    @slightWoundRadius {number} 轻伤区半径
 *    @buildingDamageRadius {number} 建筑受损半径
*/
async getAnalysisVaporCloudExplosionV2(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAnalysisVaporCloudExplosionV2(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getAnalysisVaporCloudExplosionV2', error);
    }
}


/**
 * 分页请求气体信息数据
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @id {string} ID
 *    @resourceId {string} 资源ID
 *    @name {string} 名称
 *    @chemicalName {string} 化学名称
 *    @gasCharacteristic {array} 化学性质
 *    @concentrations {array} 浓度范围
*/
async getGasV2(params = {}, config = {}) {
    try {
        const { data } = await this.api.getGasV2(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getGasV2', error);
    }
}


/**
 * 根据资源Id返回单个气体信息
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} ID
 *    @resourceId {string} 资源ID
 *    @name {string} 名称
 *    @chemicalName {string} 化学名称
 *    @gasCharacteristic {array} 化学性质
 *    @concentrations {array} 浓度范围
*/
async getGasByIdV2({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGasByIdV2({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getGasByIdV2', error);
    }
}


/**
 * 根据气体名称返回单个气体信息
 * @params name {string}  （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} ID
 *    @resourceId {string} 资源ID
 *    @name {string} 名称
 *    @chemicalName {string} 化学名称
 *    @gasCharacteristic {array} 化学性质
 *    @concentrations {array} 浓度范围
*/
async getGasByNameV2({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGasByNameV2({name,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('modelAnalysisBiz ~ getGasByNameV2', error);
    }
}

```

 