// api 
``` js
// 获取组件
getComponentByName: (params, config) => this._getConfig(`/api/Components/${params.name}`, "get", params, config), 
// 修改组件
updateComponent: (params, config) => this._getConfig(`/api/Components/${params.name}`, "put", params, config), 
// 删除组件
deleteComponent: (params, config) => this._getConfig(`/api/Components/${params.name}`, "delete", params, config), 
// 搜索组件
searchComponents: (params, config) => this._getConfig(`/api/Components`, "get", params, config), 
// 新增组件
createComponent: (params, config) => this._getConfig(`/api/Components`, "post", params, config), 
// 搜索组件缩略图
getComponentsPoster: (params, config) => this._getConfig(`/api/Components/search/thumbnail`, "post", params, config), 
// 更新组件缩略图
updateComponentsPoster: (params, config) => this._getConfig(`/api/Components/${params.name}/thumbnail`, "put", params, config), 
// 组件选择标签
editComponentLabel: (params, config) => this._getConfig(`/api/Components/${params.name}/label`, "put", params, config), 
// 导出（分页字段无效）
exportComponents: (params, config) => this._getConfig(`/api/Components/export`, "get", params, config), 
// 导入
importComponents: (params, config) => this._getConfig(`/api/Components/import`, "post", params, config), 
// 获取标签
getLabelById: (params, config) => this._getConfig(`/api/Labels/${params.id}`, "get", params, config), 
// 修改标签
editLabel: (params, config) => this._getConfig(`/api/Labels/${params.id}`, "put", params, config), 
// 删除标签
deleteLabel: (params, config) => this._getConfig(`/api/Labels/${params.id}`, "delete", params, config), 
// 搜索标签
getLabels: (params, config) => this._getConfig(`/api/Labels`, "get", params, config), 
// 新增标签
addLabels: (params, config) => this._getConfig(`/api/Labels`, "post", params, config), 
// 导出
exportLabels: (params, config) => this._getConfig(`/api/Labels/export`, "get", params, config), 
// 导入
importLabels: (params, config) => this._getConfig(`/api/Labels/import`, "post", params, config), 
// 获取项目 (isPreview:true =>未发布，isPreview:false =>已发布)
getProjectById: (params, config) => this._getConfig(`/api/Projects/${params.id}`, "get", params, config), 
// 修改项目
editProject: (params, config) => this._getConfig(`/api/Projects/${params.id}`, "put", params, config), 
// 删除项目
deleteProject: (params, config) => this._getConfig(`/api/Projects/${params.id}`, "delete", params, config), 
// 分页获取项目列表
getProjects: (params, config) => this._getConfig(`/api/Projects`, "get", params, config), 
// 新增项目
addProject: (params, config) => this._getConfig(`/api/Projects`, "post", params, config), 
// 导出
exportProject: (params, config) => this._getConfig(`/api/Projects/${params.id}/export`, "get", params, config), 
// 导入
importProject: (params, config) => this._getConfig(`/api/Projects/import`, "post", params, config), 
// 获取专题
getTheme: (params, config) => this._getConfig(`/api/Themes/${params.id}`, "get", params, config), 
// 修改专题
updateTheme: (params, config) => this._getConfig(`/api/Themes/${params.id}`, "put", params, config), 
// 删除专题
deleteTheme: (params, config) => this._getConfig(`/api/Themes/${params.id}`, "delete", params, config), 
// 搜索专题
searchThemes: (params, config) => this._getConfig(`/api/Themes`, "get", params, config), 
// 新增专题
createTheme: (params, config) => this._getConfig(`/api/Themes`, "post", params, config), 
// 隐藏专题
hiddenTheme: (params, config) => this._getConfig(`/api/Themes/${params.id}/hide`, "put", params, config), 
// 发布专题
publishThemes: (params, config) => this._getConfig(`/api/Themes/${params.id}/publish`, "put", params, config), 
// 保存专题布局配置
saveThemeLayoutConfig: (params, config) => this._getConfig(`/api/Themes/${params.id}/config/${params.layoutType}`, "post", params, config), 
// 删除专题布局配置
deleteThemeLayoutConfig: (params, config) => this._getConfig(`/api/Themes/${params.id}/config/${params.layoutType}`, "delete", params, config), 
// 获取专题布局配置
getThemeLayoutConfig: (params, config) => this._getConfig(`/api/Themes/${params.id}/config/${params.layoutType}`, "get", params, config), 
// 导出
exportThemes: (params, config) => this._getConfig(`/api/Themes/export`, "get", params, config), 
// 导入
importThemes: (params, config) => this._getConfig(`/api/Themes/import`, "post", params, config), 
// 移动位置
moveTheme: (params, config) => this._getConfig(`/api/Themes/${params.id}/move`, "put", params, config), 
// 专题发布历史列表
getHistoryRecords: (params, config) => this._getConfig(`/api/Themes/${params.id}/history/${params.layoutType}`, "get", params, config), 
// 获取历史专题配置
getHistoryTheme: (params, config) => this._getConfig(`/api/Themes/history/${params.historyId}`, "get", params, config), 
// 恢复历史版本
resumeHistoryTheme: (params, config) => this._getConfig(`/api/Themes/history/${params.historyId}/resume`, "put", params, config), 
```

 // biz 
``` js
/**
 * 获取组件
 * @params name {string}  （必填）
 * @params isIncludeThumbnail {boolean}  
 * @returns
 *    @name {string} 组件名称
 *    @type {integer} 组件类型0:Header,头部组件; 1:Side,侧边组件; 2:Central,中部组件; 3:Other,其他组件; 
 *    @labels {array} 标签
 *    @supportPlatform {integer} 适配平台（1PC，2iPad，4手机端）（多选，位运算）
 *    @supportSize {array} 适配尺寸
 *    @configData {undefined} 组件配置内容
 *    @createTime {string} 创建时间
 *    @thumbnail {string} 缩略图 (base64)
*/
async getComponentByName({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getComponentByName({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ getComponentByName', error);
    }
}


/**
 * 修改组件
 * @params name {string}  （必填）
 * @params type {integer} 组件类型0:Header,头部组件; 1:Side,侧边组件; 2:Central,中部组件; 3:Other,其他组件;  
 * @params labelIds {array} 标签ID集合 
 * @params supportPlatform {integer} 适配平台（1PC，2iPad，4手机端）（多选，位运算） （必填）
 * @params supportSize {array} 适配尺寸 （必填）
 * @params thumbnail {string} 缩略图 (base64) 
 * @params configData {undefined} 组件配置内容 （必填）
 * @returns
*/
async updateComponent({ name, supportPlatform, supportSize, configData  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateComponent({name, supportPlatform, supportSize, configData,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ updateComponent', error);
    }
}


/**
 * 删除组件
 * @params name {string}  （必填）
 * @returns
*/
async deleteComponent(name, config = {}) {
    try {
        const { data } = await this.api.deleteComponent({ name }, config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ deleteComponent', error);
    }
}


/**
 * 搜索组件
 * @params keyword {string} 关键词 
 * @params type {undefined} 类型 
 * @params supportPlatform {integer} 适配平台（1PC，2iPad，4手机端） 
 * @params labels {array} 标签，举例：[{"type":2,"text":["折线图","列表"]},{"type":0,"text":["交通运输"]}] 
 * @params supportRow {integer} 支持行 
 * @params supportColumn {integer} 支持列 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchComponents(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchComponents(params,config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ searchComponents', error);
    }
}


/**
 * 新增组件
 * @params type {integer} 组件类型0:Header,头部组件; 1:Side,侧边组件; 2:Central,中部组件; 3:Other,其他组件;  
 * @params labelIds {array} 标签ID集合 
 * @params supportPlatform {integer} 适配平台（1PC，2iPad，4手机端）（多选，位运算） （必填）
 * @params supportSize {array} 适配尺寸 （必填）
 * @params thumbnail {string} 缩略图 (base64) 
 * @params configData {undefined} 组件配置内容 （必填）
 * @params name {string} 组件名称 （必填）
 * @returns
 *    @name {string} 组件名称
 *    @type {integer} 组件类型0:Header,头部组件; 1:Side,侧边组件; 2:Central,中部组件; 3:Other,其他组件; 
 *    @labels {array} 标签
 *    @supportPlatform {integer} 适配平台（1PC，2iPad，4手机端）（多选，位运算）
 *    @supportSize {array} 适配尺寸
 *    @configData {undefined} 组件配置内容
 *    @createTime {string} 创建时间
 *    @thumbnail {string} 缩略图 (base64)
*/
async createComponent({ supportPlatform, supportSize, configData, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.createComponent({supportPlatform, supportSize, configData, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ createComponent', error);
    }
}


/**
 * 搜索组件缩略图
 * @params componentNames {array} 组件名称集合 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getComponentsPoster(params = {}, config = {}) {
    try {
        const { data } = await this.api.getComponentsPoster(params,config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ getComponentsPoster', error);
    }
}


/**
 * 更新组件缩略图
 * @params name {string}  （必填）
 * @params thumbnail {string} 缩略图 (base64) 
 * @returns
*/
async updateComponentsPoster({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateComponentsPoster({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ updateComponentsPoster', error);
    }
}


/**
 * 组件选择标签
 * @params name {string}  （必填）
 * @params labelId {string} 标签Id 
 * @params isSelected {boolean} 是否选中 
 * @returns
*/
async editComponentLabel({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editComponentLabel({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ editComponentLabel', error);
    }
}


/**
 * 导出（分页字段无效）
 * @params keyword {string} 关键词 
 * @params type {undefined} 类型 
 * @params supportPlatform {integer} 适配平台（1PC，2iPad，4手机端） 
 * @params labels {array} 标签，举例：[{"type":2,"text":["折线图","列表"]},{"type":0,"text":["交通运输"]}] 
 * @params supportRow {integer} 支持行 
 * @params supportColumn {integer} 支持列 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
*/
async exportComponents(params = {}, config = {}) {
    try {
        const { data } = await this.api.exportComponents(params,config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ exportComponents', error);
    }
}


/**
 * 导入
 * @returns
*/
async importComponents(params = {}, config = {}) {
    try {
        const { data } = await this.api.importComponents(params,config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ importComponents', error);
    }
}


/**
 * 获取标签
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 标签ID
 *    @type {integer} 标签类型0:Domain,领域标签; 1:Project,项目标签; 2:Business,业务标签; 
 *    @text {string} 标签内容
 *    @relateProjectId {string} 关联项目ID
 *    @createTime {string} 创建时间
*/
async getLabelById(id, config = {}) {
    try {
        const { data } = await this.api.getLabelById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ getLabelById', error);
    }
}


/**
 * 修改标签
 * @params id {string} id （必填）
 * @params type {integer} 标签类型0:Domain,领域标签; 1:Project,项目标签; 2:Business,业务标签;  
 * @params text {string} 标签内容 （必填）
 * @returns
*/
async editLabel({ id, text  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editLabel({id, text,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ editLabel', error);
    }
}


/**
 * 删除标签
 * @params id {string} id （必填）
 * @returns
*/
async deleteLabel(id, config = {}) {
    try {
        const { data } = await this.api.deleteLabel({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ deleteLabel', error);
    }
}


/**
 * 搜索标签
 * @params keyword {string} 关键词 
 * @params type {undefined} 类型 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getLabels(params = {}, config = {}) {
    try {
        const { data } = await this.api.getLabels(params,config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ getLabels', error);
    }
}


/**
 * 新增标签
 * @params type {integer} 标签类型0:Domain,领域标签; 1:Project,项目标签; 2:Business,业务标签;  
 * @params text {string} 标签内容 （必填）
 * @returns
 *    @id {string} 标签ID
 *    @type {integer} 标签类型0:Domain,领域标签; 1:Project,项目标签; 2:Business,业务标签; 
 *    @text {string} 标签内容
 *    @relateProjectId {string} 关联项目ID
 *    @createTime {string} 创建时间
*/
async addLabels({ text  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addLabels({text,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ addLabels', error);
    }
}


/**
 * 导出
 * @returns
*/
async exportLabels(params = {}, config = {}) {
    try {
        const { data } = await this.api.exportLabels(params,config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ exportLabels', error);
    }
}


/**
 * 导入
 * @returns
*/
async importLabels(params = {}, config = {}) {
    try {
        const { data } = await this.api.importLabels(params,config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ importLabels', error);
    }
}


/**
 * 获取项目 (isPreview:true =>未发布，isPreview:false =>已发布)
 * @params id {string} id （必填）
 * @params isPreview {boolean}  （必填）
 * @returns
 *    @id {string} 项目名称
 *    @name {string} 项目名称
 *    @title {string} 项目标题
 *    @productId {string} 产品ID
 *    @uiStyle {integer} 界面风格：0政务蓝，1企业蓝，2能源绿0:PoliticsBlue,政务蓝; 1:EnterpriseBlue,企业蓝; 2:EnergyGreen,能源绿; 
 *    @mapType {integer} 地图类型：0平铺，1窗口，2无地图0:Tiled,平铺; 1:Windowed,窗口; 2:None,无地图; 
 *    @layoutType {integer} 布局类型：0自适应布局，1固定布局0:Adaptive,自适应布局; 1:Fixed,固定布局; 
 *    @screenWidth {integer} 屏幕宽度
 *    @columnWidth {integer} 单列宽度
 *    @leftColumnCount {integer} 左侧面板列数
 *    @leftRowCount {integer} 左侧面板行数
 *    @rightColumnCount {integer} 右侧面板列数
 *    @rightRowCount {integer} 右侧面板行数
 *    @isPanelCollapsible {boolean} 是否支持面板收起
 *    @isPanelPaginated {boolean} 是否支持面板翻页
 *    @isMobileLayoutSupported {boolean} 是否支持移动端布局
 *    @mobileLayoutRowCount {integer} 移动端布局行数
 *    @extension {undefined} 扩展字段
 *    @themes {array} 专题集合
*/
async getProjectById({ id, isPreview  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getProjectById({id, isPreview,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ getProjectById', error);
    }
}


/**
 * 修改项目
 * @params id {string} id （必填）
 * @params name {string} 项目名称 （必填）
 * @params title {string} 项目标题 （必填）
 * @params uiStyle {integer} 界面风格：0政务蓝，1企业蓝，2能源绿0:PoliticsBlue,政务蓝; 1:EnterpriseBlue,企业蓝; 2:EnergyGreen,能源绿;  
 * @params mapType {integer} 地图类型：0平铺，1窗口，2无地图0:Tiled,平铺; 1:Windowed,窗口; 2:None,无地图;  
 * @params layoutType {integer} 布局类型：0自适应布局，1固定布局0:Adaptive,自适应布局; 1:Fixed,固定布局;  
 * @params screenWidth {integer} 屏幕宽度 
 * @params columnWidth {integer} 单列宽度 
 * @params leftColumnCount {integer} 左侧面板列数 
 * @params leftRowCount {integer} 左侧面板行数 
 * @params rightColumnCount {integer} 右侧面板列数 
 * @params rightRowCount {integer} 右侧面板行数 
 * @params isPanelCollapsible {boolean} 是否支持面板收起，默认不支持 
 * @params isPanelPaginated {boolean} 是否支持面板翻页，默认不支持 
 * @params isMobileLayoutSupported {boolean} 是否支持移动端布局，默认不支持 
 * @params mobileLayoutRowCount {integer} 移动端布局行数 
 * @params extension {undefined} 扩展字段 
 * @returns
*/
async editProject({ id, name, title  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editProject({id, name, title,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ editProject', error);
    }
}


/**
 * 删除项目
 * @params id {string} id （必填）
 * @returns
*/
async deleteProject(id, config = {}) {
    try {
        const { data } = await this.api.deleteProject({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ deleteProject', error);
    }
}


/**
 * 分页获取项目列表
 * @params keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getProjects(params = {}, config = {}) {
    try {
        const { data } = await this.api.getProjects(params,config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ getProjects', error);
    }
}


/**
 * 新增项目
 * @params name {string} 项目名称 （必填）
 * @params title {string} 项目标题 （必填）
 * @params uiStyle {integer} 界面风格：0政务蓝，1企业蓝，2能源绿0:PoliticsBlue,政务蓝; 1:EnterpriseBlue,企业蓝; 2:EnergyGreen,能源绿;  
 * @params mapType {integer} 地图类型：0平铺，1窗口，2无地图0:Tiled,平铺; 1:Windowed,窗口; 2:None,无地图;  
 * @params layoutType {integer} 布局类型：0自适应布局，1固定布局0:Adaptive,自适应布局; 1:Fixed,固定布局;  
 * @params screenWidth {integer} 屏幕宽度 
 * @params columnWidth {integer} 单列宽度 
 * @params leftColumnCount {integer} 左侧面板列数 
 * @params leftRowCount {integer} 左侧面板行数 
 * @params rightColumnCount {integer} 右侧面板列数 
 * @params rightRowCount {integer} 右侧面板行数 
 * @params isPanelCollapsible {boolean} 是否支持面板收起，默认不支持 
 * @params isPanelPaginated {boolean} 是否支持面板翻页，默认不支持 
 * @params isMobileLayoutSupported {boolean} 是否支持移动端布局，默认不支持 
 * @params mobileLayoutRowCount {integer} 移动端布局行数 
 * @params extension {undefined} 扩展字段 
 * @params productId {string} 产品ID （必填）
 * @returns
 *    @id {string} 项目名称
 *    @name {string} 项目名称
 *    @title {string} 项目标题
 *    @productId {string} 产品ID
 *    @uiStyle {integer} 界面风格：0政务蓝，1企业蓝，2能源绿0:PoliticsBlue,政务蓝; 1:EnterpriseBlue,企业蓝; 2:EnergyGreen,能源绿; 
 *    @mapType {integer} 地图类型：0平铺，1窗口，2无地图0:Tiled,平铺; 1:Windowed,窗口; 2:None,无地图; 
 *    @layoutType {integer} 布局类型：0自适应布局，1固定布局0:Adaptive,自适应布局; 1:Fixed,固定布局; 
 *    @screenWidth {integer} 屏幕宽度
 *    @columnWidth {integer} 单列宽度
 *    @leftColumnCount {integer} 左侧面板列数
 *    @leftRowCount {integer} 左侧面板行数
 *    @rightColumnCount {integer} 右侧面板列数
 *    @rightRowCount {integer} 右侧面板行数
 *    @isPanelCollapsible {boolean} 是否支持面板收起
 *    @isPanelPaginated {boolean} 是否支持面板翻页
 *    @isMobileLayoutSupported {boolean} 是否支持移动端布局
 *    @mobileLayoutRowCount {integer} 移动端布局行数
 *    @extension {undefined} 扩展字段
 *    @themes {array} 专题集合
*/
async addProject({ name, title, productId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addProject({name, title, productId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ addProject', error);
    }
}


/**
 * 导出
 * @params id {string} id （必填）
 * @returns
*/
async exportProject(id, config = {}) {
    try {
        const { data } = await this.api.exportProject({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ exportProject', error);
    }
}


/**
 * 导入
 * @returns
 *    @id {string} id
 *    @name {string} 项目名称
 *    @title {string} 项目标题
 *    @productId {string} 产品ID
 *    @uiStyle {undefined} 
 *    @mapType {undefined} 
 *    @layoutType {undefined} 
 *    @screenWidth {integer} 屏幕宽度
 *    @columnWidth {integer} 单列宽度
 *    @leftColumnCount {integer} 左侧面板列数
 *    @leftRowCount {integer} 左侧面板行数
 *    @rightColumnCount {integer} 右侧面板列数
 *    @rightRowCount {integer} 右侧面板行数
 *    @isPanelCollapsible {boolean} 是否支持面板收起
 *    @isPanelPaginated {boolean} 是否支持面板翻页
 *    @isMobileLayoutSupported {boolean} 是否支持移动端布局
 *    @mobileLayoutRowCount {integer} 移动端布局行数
 *    @extension {string} 扩展字段
 *    @createTime {string} 创建时间
*/
async importProject(params = {}, config = {}) {
    try {
        const { data } = await this.api.importProject(params,config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ importProject', error);
    }
}


/**
 * 获取专题
 * @params id {string} id （必填）
 * @returns
 *    @themeId {string} 专题ID
 *    @name {string} 专题名称
 *    @projectId {string} 项目Id
 *    @relateThemeId {string} 关联DCS专题ID
 *    @label {array} 标签
 *    @themeConfigOuts {array} 专题
*/
async getTheme(id, config = {}) {
    try {
        const { data } = await this.api.getTheme({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ getTheme', error);
    }
}


/**
 * 修改专题
 * @params id {string} id （必填）
 * @params name {string} 专题名称 （必填）
 * @params label {array} 标签 
 * @returns
*/
async updateTheme({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateTheme({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ updateTheme', error);
    }
}


/**
 * 删除专题
 * @params id {string} id （必填）
 * @returns
*/
async deleteTheme(id, config = {}) {
    try {
        const { data } = await this.api.deleteTheme({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ deleteTheme', error);
    }
}


/**
 * 搜索专题
 * @params keyword {string} 关键词 
 * @params label {string} 标签 
 * @params isPreview {boolean} 只对configData生效 默认：true 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchThemes(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchThemes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ searchThemes', error);
    }
}


/**
 * 新增专题
 * @params name {string} 专题名称 （必填）
 * @params label {array} 标签 
 * @params relateThemeId {string} 关联DCS专题ID （必填）
 * @params themeConfigs {array} 可选，同时支持设置布局 
 * @params projectId {string} 项目Id （必填）
 * @returns
 *    @themeId {string} 专题ID
 *    @name {string} 专题名称
 *    @projectId {string} 项目Id
 *    @relateThemeId {string} 关联DCS专题ID
 *    @label {array} 标签
 *    @themeConfigOuts {array} 专题
*/
async createTheme({ name, relateThemeId, projectId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.createTheme({name, relateThemeId, projectId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ createTheme', error);
    }
}


/**
 * 隐藏专题
 * @params id {string} id （必填）
 * @params layoutType {integer} 默认隐藏专题不全布局 
 * @params isHidden {boolean} 是否隐藏 
 * @returns
*/
async hiddenTheme({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.hiddenTheme({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ hiddenTheme', error);
    }
}


/**
 * 发布专题
 * @params id {string} id （必填）
 * @params layoutType {integer}  （必填）
 * @returns
*/
async publishThemes({ id, layoutType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.publishThemes({id,...params},{params:{id, layoutType,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ publishThemes', error);
    }
}


/**
 * 保存专题布局配置
 * @params id {string} id （必填）
 * @params layoutType {integer}  （必填）
 * @params configData {undefined} 组件配置内容 （必填）
 * @returns
 *    @themeId {string} 专题ID
 *    @name {string} 专题名称
 *    @projectId {string} 项目Id
 *    @relateThemeId {string} 关联DCS专题ID
 *    @label {array} 标签
 *    @themeConfigOuts {array} 专题
*/
async saveThemeLayoutConfig({ id, layoutType, configData  , ...params}, config = {}) {
    try {
        const { data } = await this.api.saveThemeLayoutConfig({id, layoutType, configData,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ saveThemeLayoutConfig', error);
    }
}


/**
 * 删除专题布局配置
 * @params id {string} id （必填）
 * @params layoutType {integer}  （必填）
 * @returns
*/
async deleteThemeLayoutConfig({ id, layoutType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteThemeLayoutConfig({id, layoutType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ deleteThemeLayoutConfig', error);
    }
}


/**
 * 获取专题布局配置
 * @params id {string} id （必填）
 * @params layoutType {integer}  （必填）
 * @params isPreview {boolean}  （必填）
 * @returns
 *    @isPublish {boolean} 是否发布
 *    @isHidden {boolean} 是否隐藏
 *    @layoutType {integer} 布局类型
 *    @configData {undefined} 组件配置内容
 *    @themeId {string} 专题ID
 *    @name {string} 专题名称
*/
async getThemeLayoutConfig({ id, layoutType, isPreview  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getThemeLayoutConfig({id, layoutType, isPreview,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ getThemeLayoutConfig', error);
    }
}


/**
 * 导出
 * @params keyword {string} 关键词 
 * @params label {string} 标签 
 * @params isPreview {boolean} 只对configData生效 默认：true 
 * @returns
*/
async exportThemes(params = {}, config = {}) {
    try {
        const { data } = await this.api.exportThemes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ exportThemes', error);
    }
}


/**
 * 导入
 * @returns
*/
async importThemes(params = {}, config = {}) {
    try {
        const { data } = await this.api.importThemes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ importThemes', error);
    }
}


/**
 * 移动位置
 * @params id {string} id （必填）
 * @params beforeThemeId {string} 移入位置前面的专题id 
 * @params afterThemeId {string} 移入位置后面的专题id 
 * @returns
*/
async moveTheme({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.moveTheme({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ moveTheme', error);
    }
}


/**
 * 专题发布历史列表
 * @params id {string} id （必填）
 * @params layoutType {integer}  （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getHistoryRecords({ id, layoutType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getHistoryRecords({id, layoutType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ getHistoryRecords', error);
    }
}


/**
 * 获取历史专题配置
 * @params historyId {string} historyId （必填）
 * @returns
 *    @isPublish {boolean} 是否发布
 *    @isHidden {boolean} 是否隐藏
 *    @layoutType {integer} 布局类型
 *    @configData {undefined} 组件配置内容
 *    @themeId {string} 专题ID
 *    @name {string} 专题名称
*/
async getHistoryTheme(historyId, config = {}) {
    try {
        const { data } = await this.api.getHistoryTheme({ historyId }, config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ getHistoryTheme', error);
    }
}


/**
 * 恢复历史版本
 * @params historyId {string} historyId （必填）
 * @returns
*/
async resumeHistoryTheme({ historyId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.resumeHistoryTheme({historyId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('viscsBiz ~ resumeHistoryTheme', error);
    }
}

```

 