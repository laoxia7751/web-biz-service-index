// api 
``` js
// 获取所有业务客户端配置信息
getClients: (params, config) => this._getConfig(`/api/clients`, "get", params, config), 
// 获取指定的客户端信息
getClientInfo: (params, config) => this._getConfig(`/api/clients/${params.client}`, "get", params, config), 
// 新增客户端
addClient: (params, config) => this._getConfig(`/api/clients/config`, "post", params, config), 
// 获取客户端详情列表
getClientConfig: (params, config) => this._getConfig(`/api/clients/config`, "get", params, config), 
// 更新客户端详情
editClientConfig: (params, config) => this._getConfig(`/api/clients/config/${params.clientId}`, "put", params, config), 
// 删除客户端
deleteClientConfig: (params, config) => this._getConfig(`/api/clients/config/${params.clientId}`, "delete", params, config), 
// 获取指定客户端的详情
getClientConfigById: (params, config) => this._getConfig(`/api/clients/config/${params.clientId}`, "get", params, config), 
// 获取指定权限数据的角色列表
getRolesByPermission: (params, config) => this._getConfig(`/api/permissionDatas/${params.data}/roles`, "get", params, config), 
// 获取指定路径的数据权限
getPermissionDataByPath: (params, config) => this._getConfig(`/api/permissionDatas`, "get", params, config), 
// 获取当前用户绑定角色下的数据权限
getPermissionData: (params, config) => this._getConfig(`/api/roles/permissionDatas`, "get", params, config), 
// 获取指定角色Id权限数据列表
getPermissionDataByRole: (params, config) => this._getConfig(`/api/roles/${params.role}/permissionDatas`, "get", params, config), 
// 绑定数据到指定角色
addPermissionDataToRole: (params, config) => this._getConfig(`/api/roles/${params.role}/permissionDatas`, "post", params, config), 
// 移除指定数据权限关系
deletePermissionDataRole: (params, config) => this._getConfig(`/api/roles/${params.role}/permissionDatas`, "delete", params, config), 
// 移除全数据权限关系
deleteAllPermissionData: (params, config) => this._getConfig(`/api/roles/${params.role}/allPermissionDatas`, "delete", params, config), 
// 批量绑定数据到指定角色
batchAddPermissionDataToRole: (params, config) => this._getConfig(`/api/roles/${params.role}/batchPermissionDatas`, "post", params, config), 
// 批量变更绑定数据到指定角色
batchUpdatePermissionDataToRole: (params, config) => this._getConfig(`/api/roles/${params.role}/batchPermissionDatas`, "put", params, config), 
// 批量移除绑定数据到指定角色
deletePermissionDatas: (params, config) => this._getConfig(`/api/roles/${params.role}/batchPermissionDatas`, "delete", params, config), 
// 获取指定用户绑定角色下的数据权限
getPermissionDataByUser: (params, config) => this._getConfig(`/api/users/${params.user}/permissionDatas`, "get", params, config), 
// 移除指定功能权限类型的数据权限关系
unbindPermissionData: (params, config) => this._getConfig(`/api/roles/${params.role}/permissionDatas/functionModule`, "delete", params, config), 
// 绑定指定功能权限类型的数据权限关系
bindPermissionData: (params, config) => this._getConfig(`/api/roles/${params.role}/permissionDatas/functionModule`, "post", params, config), 
// 新增移除全部功能权限类型的数据权限关系
unbindAllPermissionData: (params, config) => this._getConfig(`/api/roles/${params.role}/permissionDatas/functionModule/all`, "delete", params, config), 
// 查询根功能模块
getRootFunctions: (params, config) => this._getConfig(`/api/functions/root`, "get", params, config), 
// 获取功能模块详情列表
getFunctions: (params, config) => this._getConfig(`/api/functions`, "get", params, config), 
// 新增一个功能项
addFunctions: (params, config) => this._getConfig(`/api/functions`, "post", params, config), 
// 分页获取功能模块详情列表
getFunctionsByPid: (params, config) => this._getConfig(`/api/functions/${params.pid}/paging`, "get", params, config), 
// 获取指定功能项的详情
getFunctionsById: (params, config) => this._getConfig(`/api/functions/${params.id}`, "get", params, config), 
// 更新功能项详情
updateFunctions: (params, config) => this._getConfig(`/api/functions/${params.id}`, "put", params, config), 
// 删除一个功能模块
deleteFunctions: (params, config) => this._getConfig(`/api/functions/${params.id}`, "delete", params, config), 
// 绑定用户到指定角色
addUserToRole: (params, config) => this._getConfig(`/api/roles/${params.role}/participators`, "post", params, config), 
// 获取指定角色的用户列表
getRoleUsers: (params, config) => this._getConfig(`/api/roles/${params.role}/participators`, "get", params, config), 
// 绑定批量用户到指定角色
addUsersToRole: (params, config) => this._getConfig(`/api/roles/${params.role}/batchParticipators`, "post", params, config), 
// 变更角色绑定的用户，角色用户绑定以当前带过来的用户集合为主
changeRoleUsers: (params, config) => this._getConfig(`/api/roles/${params.role}/batchParticipators`, "put", params, config), 
// 批量删除指定角色的用户绑定关系
deleteRoleUsers: (params, config) => this._getConfig(`/api/roles/${params.role}/batchParticipators`, "delete", params, config), 
// 删除指定的绑定关系
deleteRoleUser: (params, config) => this._getConfig(`/api/roles/${params.role}/participators/${params.user}`, "delete", params, config), 
// 获取指定用户的角色列表
getRolesByUser: (params, config) => this._getConfig(`/api/users/${params.user}/participating`, "get", params, config), 
// 获取当前用户的角色列表
getUserRoles: (params, config) => this._getConfig(`/api/user/participating`, "get", params, config), 
// 用户批量变更绑定的角色
batchChangeRoleUsers: (params, config) => this._getConfig(`/api/users/${params.user}/batchParticipators`, "put", params, config), 
// 获取指定角色的所有应用授权
getPermissionByRole: (params, config) => this._getConfig(`/api/roles/${params.role}/visiting`, "get", params, config), 
// 为指定角色添加应用授权
addPermissionToRole: (params, config) => this._getConfig(`/api/roles/${params.role}/visiting`, "post", params, config), 
// 为指定角色批量添加应用授权
addPermissionToRoles: (params, config) => this._getConfig(`/api/roles/${params.role}/BatchVisiting`, "post", params, config), 
// 变更角色绑定应用权限，角色应用权限绑定以当前带过来的应用集合为主
updateRolePermissions: (params, config) => this._getConfig(`/api/roles/${params.role}/BatchVisiting`, "put", params, config), 
// 删除指定角色的某个应用授权
deleteRolePermission: (params, config) => this._getConfig(`/api/roles/${params.role}/visiting/${params.client}`, "delete", params, config), 
// 获取指定用户的可访问应用列表
getUserPermissions: (params, config) => this._getConfig(`/api/users/${params.user}/visiting`, "get", params, config), 
// 获取当前用户的可访问应用列表
getPermissions: (params, config) => this._getConfig(`/api/user/visiting`, "get", params, config), 
// 获取系统中定义的角色详情列表
getRoles: (params, config) => this._getConfig(`/api/roles`, "get", params, config), 
// 新增一个角色项
addRoles: (params, config) => this._getConfig(`/api/roles`, "post", params, config), 
// 获取指定角色的详情
addRolesById: (params, config) => this._getConfig(`/api/roles/${params.id}`, "get", params, config), 
// 更新角色详情
updateRoles: (params, config) => this._getConfig(`/api/roles/${params.id}`, "put", params, config), 
// 删除系统中一个角色
deleteRoles: (params, config) => this._getConfig(`/api/roles/${params.id}`, "delete", params, config), 
```

 // biz 
``` js
/**
 * 获取所有业务客户端配置信息
 * @returns
 *    @id {string} 应用Id
 *    @name {string} 应用名称
 *    @description {string} 应用描述
 *    @uri {string} 访问地址
 *    @logoUri {string} 图像地址
 *    @downloadLink {string} 下载地址
 *    @allowedScopes {array} Scopes
 *    @allowedGrantTypes {array} 支持的授权类型
 *    @accessTokenLifetimeHours {integer} AccessToken 有效时长
 *    @clientType {integer} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 *    @clientIndex {integer} 客户端索引(65535：无效值)
 *    @showConsent {boolean} 同意展示（前端使用）
 *    @port {integer} 端口
*/
async getClients(params = {}, config = {}) {
    try {
        const { data } = await this.api.getClients(params,config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getClients', error);
    }
}


/**
 * 获取指定的客户端信息
 * @params client {string}  （必填）
 * @returns
 *    @id {string} 应用Id
 *    @name {string} 应用名称
 *    @description {string} 应用描述
 *    @uri {string} 访问地址
 *    @logoUri {string} 图像地址
 *    @downloadLink {string} 下载地址
 *    @allowedScopes {array} Scopes
 *    @allowedGrantTypes {array} 支持的授权类型
 *    @accessTokenLifetimeHours {integer} AccessToken 有效时长
 *    @clientType {integer} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 *    @clientIndex {integer} 客户端索引(65535：无效值)
 *    @showConsent {boolean} 同意展示（前端使用）
 *    @port {integer} 端口
*/
async getClientInfo(client, config = {}) {
    try {
        const { data } = await this.api.getClientInfo({ client }, config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getClientInfo', error);
    }
}


/**
 * 新增客户端
 * @params id {string} 客户端Key 
 * @params clientName {string} 客户端名称 （必填）
 * @params description {string} 描述 
 * @params port {integer} 客户端端口 
 * @params logoUri {string} LogUri例子："/images/erds.png" 
 * @params downloadLink {string} 下载链接地址 
 * @params host {string} 主机名 
 * @params schema {string} 客户端协议头有特殊要求则指定，否则输入空，则以 GlobalConfig.UseHttps ? "https" : "http"; 
 * @params requireConsent {boolean} 允许同意返回当前客户端(权限判断)默认是 true，false(不做权限判断) 
 * @params clientSecrets {array} 客户端密钥 
 * @params path {string} 客户端Uri路径 
 * @params allowedGrantTypes {array} 允许的授权类型 
 * @params accessTokenLifetimeHours {integer} access token存活时间0表示2分钟，其他则为小时 
 * @params redirectUris {array} 重定向URI以‘;’进行分隔存储 
 * @params postLogoutRedirectUris {array} 登出后跳转的路径时以‘;’进行分隔存储，若无指定使用默认的 
 * @params clientType {integer} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台 
 * @params index {integer} 应用索引（前端使用） 
 * @params showConsent {boolean} 同意展示（前端使用） 
 * @params isUseGatewayAddress {boolean} 是否使用网关地址 
 * @params allowOfflineAccess {boolean} 默认允许静默刷新token 
 * @returns
 *    @id {string} 客户端Key
 *    @clientName {string} 客户端名称
 *    @description {string} 描述
 *    @port {integer} 客户端端口若为0，则表示未指定
 *    @logoUri {string} LogUri例子："/images/erds.png"
 *    @downloadLink {string} 下载链接地址
 *    @host {string} 主机名
 *    @schema {string} 客户端协议头若为空，则以 GlobalConfig.UseHttps ? "https" : "http";
 *    @requireConsent {boolean} 允许同意返回当前客户端(权限判断)默认是 true，false(不做权限判断)
 *    @clientSecrets {array} 客户端密钥
 *    @path {string} 客户端Uri路径
 *    @allowedGrantTypes {array} 允许的授权类型
 *    @accessTokenLifetimeHours {integer} access token存活时间0表示2分钟，其他则为小时
 *    @redirectUris {array} 重定向URI以‘;’进行分隔存储
 *    @postLogoutRedirectUris {array} 登出后跳转的路径时以‘;’进行分隔存储，若无指定使用默认的
 *    @clientType {integer} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 *    @index {integer} 应用索引（前端使用）
 *    @showConsent {boolean} 同意展示（前端使用）
 *    @isUseGatewayAddress {boolean} 是否使用网关地址
 *    @allowOfflineAccess {boolean} 默认允许静默刷新token
*/
async addClient({ clientName  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addClient({clientName,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ addClient', error);
    }
}


/**
 * 获取客户端详情列表
 * @params pageSize {integer} 页大小, 默认：200 
 * @params pageIndex {integer} 页下标 默认：1 
 * @returns
 *    @totalCount {integer} 符合条件的总记录数
 *    @items {array} 数据项
*/
async getClientConfig(params = {}, config = {}) {
    try {
        const { data } = await this.api.getClientConfig(params,config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getClientConfig', error);
    }
}


/**
 * 更新客户端详情
 * @params clientId {string} clientId （必填）
 * @params clientName {string} 客户端名称 （必填）
 * @params description {string} 描述 
 * @params port {integer} 客户端端口 
 * @params logoUri {string} LogUri例子："/images/erds.png" 
 * @params downloadLink {string} 下载链接地址 
 * @params host {string} 主机名 
 * @params schema {string} 客户端协议头有特殊要求则指定，否则输入空，则以 GlobalConfig.UseHttps ? "https" : "http"; 
 * @params requireConsent {boolean} 允许同意返回当前客户端(权限判断)默认是 true，false(不做权限判断) 
 * @params clientSecrets {array} 客户端密钥 
 * @params path {string} 客户端Uri路径 
 * @params allowedGrantTypes {array} 允许的授权类型 
 * @params accessTokenLifetimeHours {integer} access token存活时间0表示2分钟，其他则为小时 
 * @params redirectUris {array} 重定向URI以‘;’进行分隔存储 
 * @params postLogoutRedirectUris {array} 登出后跳转的路径时以‘;’进行分隔存储，若无指定使用默认的 
 * @params clientType {integer} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台 
 * @params index {integer} 应用索引（前端使用） 
 * @params showConsent {boolean} 同意展示（前端使用） 
 * @params isUseGatewayAddress {boolean} 是否使用网关地址 
 * @params allowOfflineAccess {boolean} 默认允许静默刷新token 
 * @returns
*/
async editClientConfig({ clientId, clientName  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editClientConfig({clientId, clientName,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ editClientConfig', error);
    }
}


/**
 * 删除客户端
 * @params clientId {string} clientId （必填）
 * @returns
*/
async deleteClientConfig(clientId, config = {}) {
    try {
        const { data } = await this.api.deleteClientConfig({ clientId }, config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ deleteClientConfig', error);
    }
}


/**
 * 获取指定客户端的详情
 * @params clientId {string} clientId （必填）
 * @returns
 *    @id {string} 客户端Key
 *    @clientName {string} 客户端名称
 *    @description {string} 描述
 *    @port {integer} 客户端端口若为0，则表示未指定
 *    @logoUri {string} LogUri例子："/images/erds.png"
 *    @downloadLink {string} 下载链接地址
 *    @host {string} 主机名
 *    @schema {string} 客户端协议头若为空，则以 GlobalConfig.UseHttps ? "https" : "http";
 *    @requireConsent {boolean} 允许同意返回当前客户端(权限判断)默认是 true，false(不做权限判断)
 *    @clientSecrets {array} 客户端密钥
 *    @path {string} 客户端Uri路径
 *    @allowedGrantTypes {array} 允许的授权类型
 *    @accessTokenLifetimeHours {integer} access token存活时间0表示2分钟，其他则为小时
 *    @redirectUris {array} 重定向URI以‘;’进行分隔存储
 *    @postLogoutRedirectUris {array} 登出后跳转的路径时以‘;’进行分隔存储，若无指定使用默认的
 *    @clientType {integer} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 *    @index {integer} 应用索引（前端使用）
 *    @showConsent {boolean} 同意展示（前端使用）
 *    @isUseGatewayAddress {boolean} 是否使用网关地址
 *    @allowOfflineAccess {boolean} 默认允许静默刷新token
*/
async getClientConfigById(clientId, config = {}) {
    try {
        const { data } = await this.api.getClientConfigById({ clientId }, config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getClientConfigById', error);
    }
}


/**
 * 获取指定权限数据的角色列表
 * @params data {string} 权限数据 （必填）
 * @params type {undefined} 数据类型 0：组织架构数据，1：预案组数据，2:视频监控数据，3：行政区域数据，4：功能模块 
 * @params pageSize {integer} 页大小, 默认：200 
 * @params pageIndex {integer} 页下标 默认：1 
 * @returns
 *    @totalCount {integer} 符合条件的总记录数
 *    @items {array} 数据项
*/
async getRolesByPermission({ data  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getRolesByPermission({data,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getRolesByPermission', error);
    }
}


/**
 * 获取指定路径的数据权限
 * @params type {undefined} 数据类型 0：组织架构数据，1：预案组数据，2:视频监控数据，3：行政区域数据，4：功能模块 
 * @params dataPath {string} 数据树路径，格式：一级节点ID,二级节点ID 
 * @returns
 *    @hasAllDataPermission {boolean} 是否有数据全权限
 *    @dataPermissionsOut {array} 数据权限集合输出
*/
async getPermissionDataByPath(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPermissionDataByPath(params,config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getPermissionDataByPath', error);
    }
}


/**
 * 获取当前用户绑定角色下的数据权限
 * @params type {undefined}  
 * @params pageSize {integer} 页大小, 默认：200 
 * @params pageIndex {integer} 页下标 默认：1 
 * @returns
 *    @hasAllDataPermission {boolean} 是否有数据全权限
 *    @totalCount {integer} 符合条件的总记录数
 *    @items {array} 数据项
*/
async getPermissionData(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPermissionData(params,config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getPermissionData', error);
    }
}


/**
 * 获取指定角色Id权限数据列表
 * @params role {string} 角色Id （必填）
 * @params type {undefined} 数据类型 0：组织架构数据，1：预案组数据，2:视频监控数据，3：行政区域数据，4：功能模块 
 * @params pageSize {integer} 页大小, 默认：200 
 * @params pageIndex {integer} 页下标 默认：1 
 * @returns
 *    @hasAllDataPermission {boolean} 是否有数据全权限
 *    @totalCount {integer} 符合条件的总记录数
 *    @items {array} 数据项
*/
async getPermissionDataByRole({ role  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPermissionDataByRole({role,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getPermissionDataByRole', error);
    }
}


/**
 * 绑定数据到指定角色
 * @params role {string} 角色Id （必填）
 * @params data {string} 权限数据 （必填）
 * @params type {integer} 数据类型0：组织架构数据，1：预置组数据，2:视频监控数据，3：行政区域数据,4：数据权限 
 * @returns
*/
async addPermissionDataToRole({ role, data  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addPermissionDataToRole({role, data,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ addPermissionDataToRole', error);
    }
}


/**
 * 移除指定数据权限关系
 * @params role {string} 角色Id （必填）
 * @params type {undefined} 数据类型 
 * @params data {string} 权限数据 （必填）
 * @returns
*/
async deletePermissionDataRole({ role, data  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deletePermissionDataRole({role,...params},{params:{role, data,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ deletePermissionDataRole', error);
    }
}


/**
 * 移除全数据权限关系
 * @params role {string} 角色Id （必填）
 * @params type {undefined} 数据类型 （必填）
 * @returns
*/
async deleteAllPermissionData({ role, type  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteAllPermissionData({role,...params},{params:{role, type,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ deleteAllPermissionData', error);
    }
}


/**
 * 批量绑定数据到指定角色
 * @params role {string} 角色Id （必填）
 * @params type {integer} 数据类型0：组织架构数据，1：预置组数据，2:视频监控数据，3：行政区域数据,4:功能模块数据 
 * @params hasAllDataPermission {boolean} 是否有数据全权限 （必填）
 * @params dataPermissionIns {array} 数据权限集合 （必填）
 * @returns
 *    @hasAllPermission {boolean} 是否拥有所有权限
 *    @normalResults {array} 批量正常结果
 *    @failureResult {object} 批量失败结果
*/
async batchAddPermissionDataToRole({ role, hasAllDataPermission, dataPermissionIns  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchAddPermissionDataToRole({role, hasAllDataPermission, dataPermissionIns,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ batchAddPermissionDataToRole', error);
    }
}


/**
 * 批量变更绑定数据到指定角色
 * @params role {string} 角色Id （必填）
 * @params type {integer} 数据类型0：组织架构数据，1：预置组数据，2:视频监控数据，3：行政区域数据,4:功能模块数据 
 * @params hasAllDataPermission {boolean} 是否有数据全权限 （必填）
 * @params dataPermissionIns {array} 数据权限集合 （必填）
 * @returns
*/
async batchUpdatePermissionDataToRole({ role, hasAllDataPermission, dataPermissionIns  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchUpdatePermissionDataToRole({role, hasAllDataPermission, dataPermissionIns,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ batchUpdatePermissionDataToRole', error);
    }
}


/**
 * 批量移除绑定数据到指定角色
 * @params role {string}  （必填）
 * @params type {integer} 数据类型0：组织架构数据，2:视频监控数据，3：行政区域数据 
 * @params dataIds {array} 数据权限集合 （必填）
 * @returns
*/
async deletePermissionDatas({ role, dataIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deletePermissionDatas({role, dataIds,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ deletePermissionDatas', error);
    }
}


/**
 * 获取指定用户绑定角色下的数据权限
 * @params user {string} 用户Id （必填）
 * @params type {undefined} 数据类型 0：组织架构数据，1：预案组数据，2:视频监控数据，3：行政区域数据，4：功能模块 
 * @params pageSize {integer} 页大小, 默认：200 
 * @params pageIndex {integer} 页下标 默认：1 
 * @returns
 *    @hasAllDataPermission {boolean} 是否有数据全权限
 *    @totalCount {integer} 符合条件的总记录数
 *    @items {array} 数据项
*/
async getPermissionDataByUser({ user  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPermissionDataByUser({user,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getPermissionDataByUser', error);
    }
}


/**
 * 移除指定功能权限类型的数据权限关系
 * @params role {string} 角色Id （必填）
 * @params data {string} 权限数据 （必填）
 * @returns
*/
async unbindPermissionData({ role, data  , ...params}, config = {}) {
    try {
        const { data } = await this.api.unbindPermissionData({role,...params},{params:{role, data,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ unbindPermissionData', error);
    }
}


/**
 * 绑定指定功能权限类型的数据权限关系
 * @params role {string} 角色Id （必填）
 * @returns
*/
async bindPermissionData({ role  , ...params}, config = {}) {
    try {
        const { data } = await this.api.bindPermissionData({role,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ bindPermissionData', error);
    }
}


/**
 * 新增移除全部功能权限类型的数据权限关系
 * @params role {string} 角色Id （必填）
 * @returns
*/
async unbindAllPermissionData(role, config = {}) {
    try {
        const { data } = await this.api.unbindAllPermissionData({ role }, config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ unbindAllPermissionData', error);
    }
}


/**
 * 查询根功能模块
 * @params pageSize {integer} 页大小, 默认：200 
 * @params pageIndex {integer} 页下标 默认：1 
 * @returns
 *    @totalCount {integer} 符合条件的总记录数
 *    @items {array} 数据项
*/
async getRootFunctions(params = {}, config = {}) {
    try {
        const { data } = await this.api.getRootFunctions(params,config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getRootFunctions', error);
    }
}


/**
 * 获取功能模块详情列表
 * @params pageSize {integer} 页大小, 默认：200 
 * @params pageIndex {integer} 页下标 默认：1 
 * @returns
 *    @totalCount {integer} 符合条件的总记录数
 *    @items {array} 数据项
*/
async getFunctions(params = {}, config = {}) {
    try {
        const { data } = await this.api.getFunctions(params,config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getFunctions', error);
    }
}


/**
 * 新增一个功能项
 * @params pid {string} pid 
 * @params name {string} 名称 （必填）
 * @returns
 *    @id {string} 标识
 *    @parentId {string} 父节点标识
 *    @name {string} 名称
 *    @isRelationLicense {boolean} 是否关联授权License
*/
async addFunctions({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addFunctions({name,...params},{params:{name,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ addFunctions', error);
    }
}


/**
 * 分页获取功能模块详情列表
 * @params pid {string} pid （必填）
 * @params pageSize {integer} 页大小, 默认：200 
 * @params pageIndex {integer} 页下标 默认：1 
 * @returns
 *    @totalCount {integer} 符合条件的总记录数
 *    @items {array} 数据项
*/
async getFunctionsByPid({ pid  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFunctionsByPid({pid,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getFunctionsByPid', error);
    }
}


/**
 * 获取指定功能项的详情
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 标识
 *    @parentId {string} 父节点标识
 *    @name {string} 名称
 *    @isRelationLicense {boolean} 是否关联授权License
*/
async getFunctionsById(id, config = {}) {
    try {
        const { data } = await this.api.getFunctionsById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getFunctionsById', error);
    }
}


/**
 * 更新功能项详情
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @returns
 *    @id {string} 标识
 *    @parentId {string} 父节点标识
 *    @name {string} 名称
 *    @isRelationLicense {boolean} 是否关联授权License
*/
async updateFunctions({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateFunctions({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ updateFunctions', error);
    }
}


/**
 * 删除一个功能模块
 * @params id {string} 模块Id （必填）
 * @returns
*/
async deleteFunctions(id, config = {}) {
    try {
        const { data } = await this.api.deleteFunctions({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ deleteFunctions', error);
    }
}


/**
 * 绑定用户到指定角色
 * @params role {string}  （必填）
 * @params userId {string} The ldap id of user 
 * @returns
 *    @id {string} Participation Id
 *    @user {string} The Name of Role
*/
async addUserToRole({ role  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addUserToRole({role,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ addUserToRole', error);
    }
}


/**
 * 获取指定角色的用户列表
 * @params role {string}  （必填）
 * @params pageSize {integer} 页大小, 默认：200 
 * @params pageIndex {integer} 页下标 默认：1 
 * @returns
 *    @totalCount {integer} 符合条件的总记录数
 *    @items {array} 数据项
*/
async getRoleUsers({ role  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getRoleUsers({role,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getRoleUsers', error);
    }
}


/**
 * 绑定批量用户到指定角色
 * @params role {string}  （必填）
 * @returns
*/
async addUsersToRole({ role  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addUsersToRole({role,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ addUsersToRole', error);
    }
}


/**
 * 变更角色绑定的用户，角色用户绑定以当前带过来的用户集合为主
 * @params role {string}  （必填）
 * @returns
*/
async changeRoleUsers({ role  , ...params}, config = {}) {
    try {
        const { data } = await this.api.changeRoleUsers({role,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ changeRoleUsers', error);
    }
}


/**
 * 批量删除指定角色的用户绑定关系
 * @params role {string}  （必填）
 * @returns
*/
async deleteRoleUsers(role, config = {}) {
    try {
        const { data } = await this.api.deleteRoleUsers({ role }, config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ deleteRoleUsers', error);
    }
}


/**
 * 删除指定的绑定关系
 * @params role {string} 角色Id （必填）
 * @params user {string} 用户Id （必填）
 * @returns
*/
async deleteRoleUser({ role, user  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteRoleUser({role, user,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ deleteRoleUser', error);
    }
}


/**
 * 获取指定用户的角色列表
 * @params user {string}  （必填）
 * @params pageSize {integer} 页大小, 默认：200 
 * @params pageIndex {integer} 页下标 默认：1 
 * @params user {string}  （必填）
 * @returns
 *    @totalCount {integer} 符合条件的总记录数
 *    @items {array} 数据项
*/
async getRolesByUser({ user  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getRolesByUser({user, user,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getRolesByUser', error);
    }
}


/**
 * 获取当前用户的角色列表
 * @params pageSize {integer} 页大小, 默认：200 
 * @params pageIndex {integer} 页下标 默认：1 
 * @returns
 *    @totalCount {integer} 符合条件的总记录数
 *    @items {array} 数据项
*/
async getUserRoles(params = {}, config = {}) {
    try {
        const { data } = await this.api.getUserRoles(params,config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getUserRoles', error);
    }
}


/**
 * 用户批量变更绑定的角色
 * @params user {string}  （必填）
 * @returns
*/
async batchChangeRoleUsers({ user  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchChangeRoleUsers({user,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ batchChangeRoleUsers', error);
    }
}


/**
 * 获取指定角色的所有应用授权
 * @params role {string} 角色Id （必填）
 * @returns
 *    @permissionId {string} 授权Id
 *    @clientId {string} 客户端Id
*/
async getPermissionByRole(role, config = {}) {
    try {
        const { data } = await this.api.getPermissionByRole({ role }, config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getPermissionByRole', error);
    }
}


/**
 * 为指定角色添加应用授权
 * @params role {string} 角色Id （必填）
 * @params clientId {string} 客户端Id （必填）
 * @returns
 *    @permissionId {string} 授权Id
 *    @clientId {string} 客户端Id
*/
async addPermissionToRole({ role, clientId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addPermissionToRole({role, clientId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ addPermissionToRole', error);
    }
}


/**
 * 为指定角色批量添加应用授权
 * @params role {string}  （必填）
 * @returns
*/
async addPermissionToRoles({ role  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addPermissionToRoles({role,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ addPermissionToRoles', error);
    }
}


/**
 * 变更角色绑定应用权限，角色应用权限绑定以当前带过来的应用集合为主
 * @params role {string}  （必填）
 * @returns
*/
async updateRolePermissions({ role  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateRolePermissions({role,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ updateRolePermissions', error);
    }
}


/**
 * 删除指定角色的某个应用授权
 * @params role {string} 角色Id （必填）
 * @params client {string} 客户端Id （必填）
 * @returns
*/
async deleteRolePermission({ role, client  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteRolePermission({role, client,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ deleteRolePermission', error);
    }
}


/**
 * 获取指定用户的可访问应用列表
 * @params user {string}  （必填）
 * @returns
*/
async getUserPermissions(user, config = {}) {
    try {
        const { data } = await this.api.getUserPermissions({ user }, config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getUserPermissions', error);
    }
}


/**
 * 获取当前用户的可访问应用列表
 * @params availableOnly {boolean} 是否仅获取被允许访问的应用列表 默认：true 
 * @returns
 *    @id {string} 应用Id
 *    @name {string} 应用名称
 *    @description {string} 应用描述
 *    @uri {string} 访问地址
 *    @logoUri {string} 图像地址
 *    @downloadLink {string} 下载地址
 *    @canAccess {boolean} 是否有权访问此应用
 *    @type {integer} 客户端类型"0,  pc端业务，需要验证是否安装客户端，并提供DownloadLink下载安装包链接"1,  后台管理业务，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"2,  产品应用，后续sso-web展示需要根据type进行区分展示后台管理和产品应用"3,  需要带上token的应用平台
 *    @index {integer} 客户端索引(65535：无效值)
 *    @showConsent {boolean} 同意展示（前端使用）
*/
async getPermissions(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPermissions(params,config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getPermissions', error);
    }
}


/**
 * 获取系统中定义的角色详情列表
 * @params pageSize {integer} 页大小, 默认：200 
 * @params pageIndex {integer} 页下标 默认：1 
 * @returns
 *    @totalCount {integer} 符合条件的总记录数
 *    @items {array} 数据项
*/
async getRoles(params = {}, config = {}) {
    try {
        const { data } = await this.api.getRoles(params,config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ getRoles', error);
    }
}


/**
 * 新增一个角色项
 * @params name {string} 名称 （必填）
 * @params description {string} 描述 
 * @returns
 *    @id {string} Id
 *    @name {string} 名称
 *    @description {string} 描述
*/
async addRoles({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addRoles({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ addRoles', error);
    }
}


/**
 * 获取指定角色的详情
 * @params id {string} id （必填）
 * @returns
 *    @id {string} Id
 *    @name {string} 名称
 *    @description {string} 描述
*/
async addRolesById(id, config = {}) {
    try {
        const { data } = await this.api.addRolesById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ addRolesById', error);
    }
}


/**
 * 更新角色详情
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @params description {string} 描述 
 * @returns
 *    @id {string} Id
 *    @name {string} 名称
 *    @description {string} 描述
*/
async updateRoles({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateRoles({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ updateRoles', error);
    }
}


/**
 * 删除系统中一个角色
 * @params id {string} 角色Id （必填）
 * @returns
*/
async deleteRoles(id, config = {}) {
    try {
        const { data } = await this.api.deleteRoles({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('authBiz ~ deleteRoles', error);
    }
}

```

 