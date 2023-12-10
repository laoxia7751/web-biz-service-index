// api 
``` js
// 查询拍传
getMultimediaTransfers: (params, config) => this._getConfig(`/api/MultimediaTransfers`, "get", params, config), 
// 创建拍传
addMultimediaTransfers: (params, config) => this._getConfig(`/api/MultimediaTransfers`, "post", params, config), 
// 查询拍传
searchMultimediaTransfers: (params, config) => this._getConfig(`/api/MultimediaTransfers/search`, "post", params, config), 
// 通过拍传ID获取拍传
getMultimediaTransfersById: (params, config) => this._getConfig(`/api/MultimediaTransfers/${params.id}`, "get", params, config), 
// 删除拍传
deleteMultimediaTransfers: (params, config) => this._getConfig(`/api/MultimediaTransfers/${params.id}`, "delete", params, config), 
// 按条件查询拍传模板
getTemplates: (params, config) => this._getConfig(`/api/Templates`, "get", params, config), 
// 创建拍传模板
addTemplates: (params, config) => this._getConfig(`/api/Templates`, "post", params, config), 
// 通过拍传模板ID获取拍传模板
getTemplatesById: (params, config) => this._getConfig(`/api/Templates/${params.id}`, "get", params, config), 
// 更新拍传模板
editTemplates: (params, config) => this._getConfig(`/api/Templates/${params.id}`, "put", params, config), 
// 删除拍传模板
deleteTemplates: (params, config) => this._getConfig(`/api/Templates/${params.id}`, "delete", params, config), 
```

 // biz 
``` js
/**
 * 查询拍传
 * @params BeginTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params TemplateId {string} 模板Id 
 * @params KeyWord {string} 关键字模糊查询 
 * @params OrganizationId {string} 组织机构Id 
 * @params UserId {string} 用户Id 
 * @params ResourceId {string} 资源ID 
 * @params PlatformId {string} 平台 ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量，最小为1 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMultimediaTransfers(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMultimediaTransfers(params,config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ getMultimediaTransfers', error);
    }
}


/**
 * 创建拍传
 * @headers X-version {string}  
 * @params name {string} 拍传名称 （必填）
 * @params templateId {string} 拍传模板Id （必填）
 * @params longitude {number} 经度 （必填）
 * @params latitude {number} 纬度 （必填）
 * @params address {string} 地址 
 * @params fileGroupId {string} 文件组Id （必填）
 * @params uploadTime {string} 文件上传时间 （必填）
 * @params fileCount {integer} 文件数量 （必填）
 * @params company {string} 单位名称 
 * @params companyAddress {string} 单位地址 
 * @returns
 *    @id {string} 拍传ID
 *    @name {string} 拍传名称
 *    @templateId {string} 拍传模板Id
 *    @templateName {string} 拍传模板名称
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @address {string} 地址
 *    @fileGroupId {string} 文件组Id
 *    @fileCount {integer} 文件数量
 *    @userId {string} 拍传用户id
 *    @userName {string} 用户名称
 *    @organizationId {string} 组织机构Id
 *    @organizationName {string} 组织机构名称
 *    @uploadTime {string} 上传时间
 *    @company {string} 单位名称
 *    @companyAddress {string} 单位地址
 *    @resourceId {string} 资源ID
 *    @platformId {string} 平台Id
 *    @areaCode {string} 行政区域码
*/
async addMultimediaTransfers({ name, templateId, longitude, latitude, fileGroupId, uploadTime, fileCount  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addMultimediaTransfers({name, templateId, longitude, latitude, fileGroupId, uploadTime, fileCount,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ addMultimediaTransfers', error);
    }
}


/**
 * 查询拍传
 * @headers X-version {string}  
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量，最小为1 
 * @params beginTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params templateId {string} 模板Id 
 * @params keyWord {string} 关键字模糊查询 
 * @params organizationId {string} 组织机构Id 
 * @params userId {string} 用户Id 
 * @params resourceId {string} 资源ID 
 * @params platformId {string} 平台 ID 
 * @params organizationIds {array} 组织机构Id集合 
 * @params prefixAreaCodes {array} 行政区域码前缀 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchMultimediaTransfers(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchMultimediaTransfers(params,config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ searchMultimediaTransfers', error);
    }
}


/**
 * 通过拍传ID获取拍传
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @headers X-version {string}  
 * @returns
 *    @id {string} 拍传ID
 *    @name {string} 拍传名称
 *    @templateId {string} 拍传模板Id
 *    @templateName {string} 拍传模板名称
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @address {string} 地址
 *    @fileGroupId {string} 文件组Id
 *    @fileCount {integer} 文件数量
 *    @userId {string} 拍传用户id
 *    @userName {string} 用户名称
 *    @organizationId {string} 组织机构Id
 *    @organizationName {string} 组织机构名称
 *    @uploadTime {string} 上传时间
 *    @company {string} 单位名称
 *    @companyAddress {string} 单位地址
 *    @resourceId {string} 资源ID
 *    @platformId {string} 平台Id
 *    @areaCode {string} 行政区域码
 *    @fileRecords {array} 文件记录
*/
async getMultimediaTransfersById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMultimediaTransfersById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ getMultimediaTransfersById', error);
    }
}


/**
 * 删除拍传
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteMultimediaTransfers({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteMultimediaTransfers({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ deleteMultimediaTransfers', error);
    }
}


/**
 * 按条件查询拍传模板
 * @params keyword {string} 模糊匹配关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量，最小为1 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTemplates(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTemplates(params,config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ getTemplates', error);
    }
}


/**
 * 创建拍传模板
 * @headers X-version {string}  
 * @params name {string} 拍传模板名称 （必填）
 * @params description {string} 描述 
 * @params title {string} 标题 （必填）
 * @params placeHolders {array} 模板占位符 
 * @returns
 *    @id {string} 拍传模板ID
 *    @name {string} 拍传模板名称
 *    @description {string} 描述
 *    @title {string} 标题
 *    @placeHolders {array} 模板占位符
 *    @resourceId {string} 资源ID
 *    @platformId {string} 平台Id
*/
async addTemplates({ name, title  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addTemplates({name, title,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ addTemplates', error);
    }
}


/**
 * 通过拍传模板ID获取拍传模板
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @headers X-version {string}  
 * @returns
 *    @id {string} 拍传模板ID
 *    @name {string} 拍传模板名称
 *    @description {string} 描述
 *    @title {string} 标题
 *    @placeHolders {array} 模板占位符
 *    @resourceId {string} 资源ID
 *    @platformId {string} 平台Id
*/
async getTemplatesById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTemplatesById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ getTemplatesById', error);
    }
}


/**
 * 更新拍传模板
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 拍传模板名称 （必填）
 * @params description {string} 描述 
 * @params title {string} 标题 （必填）
 * @params placeHolders {array} 模板占位符 
 * @returns
*/
async editTemplates({ id, name, title  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editTemplates({id, name, title,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ editTemplates', error);
    }
}


/**
 * 删除拍传模板
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteTemplates({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteTemplates({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('mmtBiz ~ deleteTemplates', error);
    }
}

```

 