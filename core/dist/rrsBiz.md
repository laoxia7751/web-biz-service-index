// api 
``` js
// 按条件查询主资源
getMainResources: (params, config) => this._getConfig(`/api/MainResources`, "get", params, config), 
// 创建主资源
addMainResources: (params, config) => this._getConfig(`/api/MainResources`, "post", params, config), 
// 通过主资源ID获取主资源
getMainResourcesById: (params, config) => this._getConfig(`/api/MainResources/${params.id}`, "get", params, config), 
// 更新主资源
updateMainResources: (params, config) => this._getConfig(`/api/MainResources/${params.id}`, "put", params, config), 
// 删除主资源
deleteMainResources: (params, config) => this._getConfig(`/api/MainResources/${params.id}`, "delete", params, config), 
// 获取主体下所有资源
getAllResource: (params, config) => this._getConfig(`/api/ResourceRelationships/resource`, "post", params, config), 
// 更新主体下资源关系
updateMainLinkResource: (params, config) => this._getConfig(`/api/ResourceRelationships/resource`, "put", params, config), 
// 资源查询
getResource: (params, config) => this._getConfig(`/api/ResourceRelationships/resource/single`, "post", params, config), 
// 批量获取资源详情（带关联主体）
getResourceDetails: (params, config) => this._getConfig(`/api/ResourceRelationships/resource/details`, "post", params, config), 
// 批量获取主体资源详情（带关联下资源）
batchGetMainDetails: (params, config) => this._getConfig(`/api/ResourceRelationships/main/details`, "post", params, config), 
// 绑定资源关系
editResourceRelationships: (params, config) => this._getConfig(`/api/ResourceRelationships`, "put", params, config), 
// 解绑资源关系
deleteResourceRelationships: (params, config) => this._getConfig(`/api/ResourceRelationships`, "post", params, config), 
// 按条件查询资源
getResources: (params, config) => this._getConfig(`/api/Resources`, "get", params, config), 
// 创建资源
addResources: (params, config) => this._getConfig(`/api/Resources`, "post", params, config), 
// 通过资源ID获取资源
getResourcesById: (params, config) => this._getConfig(`/api/Resources/${params.id}`, "get", params, config), 
// 更新资源
editResources: (params, config) => this._getConfig(`/api/Resources/${params.id}`, "put", params, config), 
// 删除资源
deleteResources: (params, config) => this._getConfig(`/api/Resources/${params.id}`, "delete", params, config), 
// 按条件查询资源类型
getResourceTypes: (params, config) => this._getConfig(`/api/ResourceTypes`, "get", params, config), 
// 创建资源类型
addResourceType: (params, config) => this._getConfig(`/api/ResourceTypes`, "post", params, config), 
// 通过资源类型ID获取资源类型
getResourceTypeById: (params, config) => this._getConfig(`/api/ResourceTypes/${params.id}`, "get", params, config), 
```

 // biz 
``` js
/**
 * 按条件查询主资源
 * @params type {string} 资源类型 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMainResources(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMainResources(params,config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ getMainResources', error);
    }
}


/**
 * 创建主资源
 * @params type {string} 资源类型 （必填）
 * @params resourceId {string} 资源ID （必填）
 * @returns
 *    @id {string} ID
 *    @type {string} 资源类型
 *    @resourceId {string} 资源ID
*/
async addMainResources({ type, resourceId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addMainResources({type, resourceId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ addMainResources', error);
    }
}


/**
 * 通过主资源ID获取主资源
 * @params id {string} id （必填）
 * @returns
 *    @id {string} ID
 *    @type {string} 资源类型
 *    @resourceId {string} 资源ID
*/
async getMainResourcesById(id, config = {}) {
    try {
        const { data } = await this.api.getMainResourcesById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ getMainResourcesById', error);
    }
}


/**
 * 更新主资源
 * @params id {string} id （必填）
 * @params type {string} 资源类型 （必填）
 * @params resourceId {string} 资源ID （必填）
 * @returns
*/
async updateMainResources({ id, type, resourceId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateMainResources({id, type, resourceId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ updateMainResources', error);
    }
}


/**
 * 删除主资源
 * @params id {string} id （必填）
 * @returns
*/
async deleteMainResources(id, config = {}) {
    try {
        const { data } = await this.api.deleteMainResources({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ deleteMainResources', error);
    }
}


/**
 * 获取主体下所有资源
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params mainResource {undefined}  （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAllResource({ mainResource  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAllResource({mainResource,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ getAllResource', error);
    }
}


/**
 * 更新主体下资源关系
 * @params resources {array} 资源【不存在资源会自动创建】 （必填）
 * @params mainResource {object} 主资源 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async updateMainLinkResource({ resources, mainResource  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateMainLinkResource({resources, mainResource,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ updateMainLinkResource', error);
    }
}


/**
 * 资源查询
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量, [1, 128] 
 * @params mainResources {array} 主体资源集合 （必填）
 * @params type {string} 资源类型 （必填）
 * @params dataHandleType {integer} 数据类型 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getResource({ mainResources, type  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getResource({mainResources, type,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ getResource', error);
    }
}


/**
 * 批量获取资源详情（带关联主体）
 * @params resources {array} 资源ID （必填）
 * @params type {string} 目标资源类型【不传默认查全部主体资源】 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getResourceDetails({ resources  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getResourceDetails({resources,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ getResourceDetails', error);
    }
}


/**
 * 批量获取主体资源详情（带关联下资源）
 * @params mainResources {array} 批量主体 
 * @params type {string} 目标资源类型【不传默认查全部挂载资源】 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async batchGetMainDetails(params = {}, config = {}) {
    try {
        const { data } = await this.api.batchGetMainDetails(params,config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ batchGetMainDetails', error);
    }
}


/**
 * 绑定资源关系
 * @params resources {array} 资源【不存在资源会自动创建】 （必填）
 * @params mainResource {object} 主资源 （必填）
 * @returns
*/
async editResourceRelationships({ resources, mainResource  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editResourceRelationships({resources, mainResource,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ editResourceRelationships', error);
    }
}


/**
 * 解绑资源关系
 * @params resources {array} 资源【不存在资源会自动创建】 （必填）
 * @params mainResource {object} 主资源 （必填）
 * @returns
*/
async deleteResourceRelationships({ resources, mainResource  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteResourceRelationships({resources, mainResource,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ deleteResourceRelationships', error);
    }
}


/**
 * 按条件查询资源
 * @params type {string} 资源类型 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getResources(params = {}, config = {}) {
    try {
        const { data } = await this.api.getResources(params,config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ getResources', error);
    }
}


/**
 * 创建资源
 * @params type {string} 资源类型【不存在类型会自动创建】 （必填）
 * @params resourceId {string} 资源ID （必填）
 * @returns
 *    @id {string} ID
 *    @resourceId {string} 资源ID
 *    @type {string} 资源类型ID
*/
async addResources({ type, resourceId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addResources({type, resourceId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ addResources', error);
    }
}


/**
 * 通过资源ID获取资源
 * @params id {string} id （必填）
 * @returns
 *    @id {string} ID
 *    @resourceId {string} 资源ID
 *    @type {string} 资源类型ID
*/
async getResourcesById(id, config = {}) {
    try {
        const { data } = await this.api.getResourcesById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ getResourcesById', error);
    }
}


/**
 * 更新资源
 * @params id {string} id （必填）
 * @params type {string} 资源类型【不存在类型会自动创建】 （必填）
 * @params resourceId {string} 资源ID （必填）
 * @returns
*/
async editResources({ id, type, resourceId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editResources({id, type, resourceId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ editResources', error);
    }
}


/**
 * 删除资源
 * @params id {string} id （必填）
 * @returns
*/
async deleteResources(id, config = {}) {
    try {
        const { data } = await this.api.deleteResources({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ deleteResources', error);
    }
}


/**
 * 按条件查询资源类型
 * @params keyword {string} 模糊匹配关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getResourceTypes(params = {}, config = {}) {
    try {
        const { data } = await this.api.getResourceTypes(params,config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ getResourceTypes', error);
    }
}


/**
 * 创建资源类型
 * @params type {string} Type （必填）
 * @params source {integer} 支持资源【1支持主体资源，2支持资源，3主体+资源】 （必填）
 * @returns
 *    @id {string} 资源类型ID
 *    @type {string} 资源类型
 *    @source {integer} 支持资源【1支持主体资源，2支持资源，3主体+资源】
*/
async addResourceType({ type, source  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addResourceType({type, source,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ addResourceType', error);
    }
}


/**
 * 通过资源类型ID获取资源类型
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 资源类型ID
 *    @type {string} 资源类型
 *    @source {integer} 支持资源【1支持主体资源，2支持资源，3主体+资源】
*/
async getResourceTypeById(id, config = {}) {
    try {
        const { data } = await this.api.getResourceTypeById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('rrsBiz ~ getResourceTypeById', error);
    }
}

```

 