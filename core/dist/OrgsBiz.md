// api 
``` js
// 新建联系人
addContactUser: (params, config) => this._getConfig(`/api/contacts/${params.pid}`, "post", params, config), 
// 查询联系人详情
getUserInfo: (params, config) => this._getConfig(`/api/contacts/${params.id}`, "get", params, config), 
// 编辑联系人
updateContactUser: (params, config) => this._getConfig(`/api/contacts/${params.id}`, "put", params, config), 
// 删除联系人
deleteContactUser: (params, config) => this._getConfig(`/api/contacts/${params.id}`, "delete", params, config), 
// 变更密码
updateContactUserPassword: (params, config) => this._getConfig(`/api/contacts/${params.id}/password`, "put", params, config), 
// 密码重置
resetPassword: (params, config) => this._getConfig(`/api/contacts/${params.id}/password/reset`, "put", params, config), 
// Xls组织架构文件导入
importOrganizationXls: (params, config) => this._getConfig(`/api/Import/ImportXlsOrganization`, "post", params, config), 
// 导出组织架构
exportOrganization: (params, config) => this._getConfig(`/api/Export/Organization/${params.pid}`, "post", params, config), 
// 导出预案组
exportPlanGroup: (params, config) => this._getConfig(`/api/Export/PlanGroup`, "post", params, config), 
// 获取导出任务
getExportTask: (params, config) => this._getConfig(`/api/Export/Task/${params.taskId}`, "get", params, config), 
// 获取导出文件
getExportFileInfo: (params, config) => this._getConfig(`/api/Export/Download/${params.taskId}`, "get", params, config), 
// 预案组文件导入
importPlanGroup: (params, config) => this._getConfig(`/api/Import/ImportPlanGroup/${params.pid}`, "post", params, config), 
// 添加收藏夹
addUserFavorites: (params, config) => this._getConfig(`/api/favorites`, "post", params, config), 
// 获取当前用户收藏夹
getCurrentUserFavorites: (params, config) => this._getConfig(`/api/favorites`, "get", params, config), 
// 删除收藏夹
deleteUserFavorites: (params, config) => this._getConfig(`/api/favorites/${params.favoriteId}`, "delete", params, config), 
// 更新收藏夹(收藏夹联系人以此次更新为主,不带成员不变更)
updateUserFavorites: (params, config) => this._getConfig(`/api/favorites/${params.favoriteId}`, "put", params, config), 
// 查询收藏夹详情
getCurrentUserFavoritesInfo: (params, config) => this._getConfig(`/api/favorites/${params.favoriteId}`, "get", params, config), 
// 添加收藏夹联系人
addUserFavoritesContact: (params, config) => this._getConfig(`/api/favorites/${params.favoriteId}/contacts`, "post", params, config), 
// 更新收藏夹联系人(收藏夹联系人以此次更新为主)
updateUserFavoritesContact: (params, config) => this._getConfig(`/api/favorites/${params.favoriteId}/contacts`, "put", params, config), 
// 查询收藏夹联系人
getUserFavoritesContact: (params, config) => this._getConfig(`/api/favorites/${params.favoriteId}/contacts`, "get", params, config), 
// 新建组
createGroup: (params, config) => this._getConfig(`/api/groups/${params.pid}`, "post", params, config), 
// 删除组
deleteGroup: (params, config) => this._getConfig(`/api/groups/${params.id}`, "delete", params, config), 
// 更新组
updateGroup: (params, config) => this._getConfig(`/api/groups/${params.id}`, "put", params, config), 
// 查询组详情
getGroupInfo: (params, config) => this._getConfig(`/api/groups/${params.id}`, "get", params, config), 
// 查询所有组
getAllGroups: (params, config) => this._getConfig(`/api/groups`, "get", params, config), 
// 查询组详情
getGroupDetails: (params, config) => this._getConfig(`/api/groups/NoContactDetail/${params.id}`, "get", params, config), 
// 添加组成员
addGroupMembers: (params, config) => this._getConfig(`/api/groups/${params.groupId}/members`, "post", params, config), 
// 更新组成员
updateGroupMembers: (params, config) => this._getConfig(`/api/groups/${params.groupId}/members`, "put", params, config), 
// 查询组成员
getGroupMembers: (params, config) => this._getConfig(`/api/groups/${params.groupId}/members`, "get", params, config), 
// 新建部门
addOrganizations: (params, config) => this._getConfig(`/api/organizations/${params.pid}`, "post", params, config), 
// 删除部门
deleteOrganizations: (params, config) => this._getConfig(`/api/organizations/${params.id}`, "delete", params, config), 
// 更新部门
updateOrganizations: (params, config) => this._getConfig(`/api/organizations/${params.id}`, "put", params, config), 
// 查询部门详情
getOrganizationsById: (params, config) => this._getConfig(`/api/organizations/${params.id}`, "get", params, config), 
// 删除部门下所以节点
deleteAllOrganizations: (params, config) => this._getConfig(`/api/organizations/${params.id}/All`, "delete", params, config), 
// 查询Root部门
getAllRootList: (params, config) => this._getConfig(`/api/organizations`, "get", params, config), 
// 分页查询部门及成员
getAllDepartmentsMembers: (params, config) => this._getConfig(`/api/organizations/${params.pid}/members`, "get", params, config), 
// 分页查询部门
getOrganizationsDepartments: (params, config) => this._getConfig(`/api/organizations/departments`, "get", params, config), 
// 分页查询联系人
getFrequentContacts: (params, config) => this._getConfig(`/api/organizations/contacts`, "get", params, config), 
// 搜索
searchKeyWordOrPid: (params, config) => this._getConfig(`/api/search`, "get", params, config), 
// 同级移动联系人
moveContacts: (params, config) => this._getConfig(`/api/contacts/${params.id}/move`, "put", params, config), 
// 置顶联系人
topContacts: (params, config) => this._getConfig(`/api/contacts/${params.id}/top`, "put", params, config), 
// 查询指定联系人所属部门的路径（当前用户）
getContactDepartmentPath: (params, config) => this._getConfig(`/api/contacts/${params.id}/departmentPaths`, "get", params, config), 
// 查询指定联系人所属部门的路径（指定调用者）
getDepartmentPathsForSpecifyCaller: (params, config) => this._getConfig(`/api/contacts/${params.id}/${params.callerUserId}/departmentPaths`, "get", params, config), 
// 更新联系人所属部门
changeDepartment: (params, config) => this._getConfig(`/api/contacts/${params.id}/department/change`, "put", params, config), 
// 查询当前用户指定部门下有权限的部门列表，不传表示查询全部有权限的部门列表
getUserDepartments: (params, config) => this._getConfig(`/api/contacts/permission/departments`, "get", params, config), 
// 联系人账号状态变更
changeContactState: (params, config) => this._getConfig(`/api/contacts/${params.id}/state`, "put", params, config), 
// 更新所有联系人拼音和缩写信息（联系人历史数据补全）
updateContactsPinyinAndInitials: (params, config) => this._getConfig(`/api/contacts/pinyinAndInitials`, "put", params, config), 
// 上传当前联系人头像
uploadUserAvatar: (params, config) => this._getConfig(`/api/upload/photo`, "post", params, config), 
// 更新所有联系人头像信息（联系人历史数据补全）
updateUserAvatar: (params, config) => this._getConfig(`/api/contacts/photos`, "put", params, config), 
// 导入组织架构
importOrganization: (params, config) => this._getConfig(`/api/import/data/organization`, "post", params, config), 
// 执行数据校验任务
checkData: (params, config) => this._getConfig(`/api/import/data/validation`, "put", params, config), 
// 取消执行数据校验任务
cancelCheckData: (params, config) => this._getConfig(`/api/import/data/validation`, "delete", params, config), 
// 执行数据导入任务
importTask: (params, config) => this._getConfig(`/api/import/data`, "put", params, config), 
// 取消执行数据导入任务
cancelImportTask: (params, config) => this._getConfig(`/api/import/data`, "delete", params, config), 
// 分页查询校验数据
getCheckData: (params, config) => this._getConfig(`/api/import/organization/validation`, "get", params, config), 
// 查询任务进度
getTaskProgress: (params, config) => this._getConfig(`/api/import/task/progress`, "get", params, config), 
// 下载导入组织架构模板文件
downloadFiles: (params, config) => this._getConfig(`/api/templateFiles/organization`, "get", params, config), 
// 查询正在执行的导入任务
importRunningTask: (params, config) => this._getConfig(`/api/import/task/running`, "get", params, config), 
// 移除收藏夹成员
removeFavoriteMembers: (params, config) => this._getConfig(`/api/favorites/${params.favoriteId}/members`, "put", params, config), 
// 移除组成员
removeGroupMembers: (params, config) => this._getConfig(`/api/groups/${params.id}/members`, "put", params, config), 
// 移除组成员(包含设备)
deleteGroupMemberV2: (params, config) => this._getConfig(`/api/groups/${params.id}/members`, "delete", params, config), 
// 分页查询组成员
getGroupMembersV2: (params, config) => this._getConfig(`/api/groups/${params.id}/members`, "get", params, config), 
// 添加组成员
addGroupMembersV2: (params, config) => this._getConfig(`/api/groups/${params.id}/members`, "post", params, config), 
// 查询所有包含当前用户的组列表（不包含组成员信息）
getSelfGroups: (params, config) => this._getConfig(`/api/groups/self/groups`, "get", params, config), 
// 组内移动成员
moveGroupMember: (params, config) => this._getConfig(`/api/groups/${params.id}/move`, "put", params, config), 
// 组内置顶成员
topGroupMember: (params, config) => this._getConfig(`/api/groups/${params.id}/top`, "put", params, config), 
// 同级移动同类型的组
moveGroups: (params, config) => this._getConfig(`/api/groups/${params.id}/move/group`, "put", params, config), 
// 新建组
createGroupV2: (params, config) => this._getConfig(`/api/groups/${params.pid}`, "post", params, config), 
// 更新组
updateGroupV2: (params, config) => this._getConfig(`/api/groups/${params.id}`, "put", params, config), 
// 查询所有组
getAllGroupsV2: (params, config) => this._getConfig(`/api/groups`, "get", params, config), 
// 查询部门详情
getOrganizationsByIdV2: (params, config) => this._getConfig(`/api/organizations/${params.id}`, "get", params, config), 
// 分页查询部门及成员
getAllDepartmentsMembersV2: (params, config) => this._getConfig(`/api/organizations/${params.pid}/members`, "get", params, config), 
// 同级移动部门
moveNearDepartment: (params, config) => this._getConfig(`/api/organizations/${params.id}/move`, "put", params, config), 
// 查询指定部门所属的路径
getDepartmentPathById: (params, config) => this._getConfig(`/api/organizations/${params.id}/departmentPaths`, "get", params, config), 
// 分页查询部门下的成员列表（包含子孙成员）
getDescendantMembers: (params, config) => this._getConfig(`/api/organizations/${params.pid}/descendant/members`, "get", params, config), 
// 查询Root部门（带统计成员）
getRootOrganizations: (params, config) => this._getConfig(`/api/organizations`, "get", params, config), 
// 搜索
searchKeyWordOrPidV2: (params, config) => this._getConfig(`/api/search`, "get", params, config), 
// 按照电话集合查找联系人
searchContactByPhones: (params, config) => this._getConfig(`/api/search/ContactByPhones`, "post", params, config), 
// 根据部门集合批量查询部门信息
searchDepartments: (params, config) => this._getConfig(`/api/search/departments/batch`, "post", params, config), 
// 根据联系人集合批量查询联系人信息
searchContacts: (params, config) => this._getConfig(`/api/search/contacts/batch`, "post", params, config), 
// 搜索（带部门或组下成员的统计）
searchStatistics: (params, config) => this._getConfig(`/api/search/statistics`, "get", params, config), 
// 更新指定用户个人配置
updateUserConfigsById: (params, config) => this._getConfig(`/api/userconfigs/${params.userId}`, "put", params, config), 
// 更新当前用户个人配置
updateUserConfigs: (params, config) => this._getConfig(`/api/userconfigs`, "put", params, config), 
// 按条件查询用户配置列表
getUserConfigs: (params, config) => this._getConfig(`/api/userconfigs`, "get", params, config), 
```

 // biz 
``` js
/**
 * 新建联系人
 * @params pid {string} 父节点ID （必填）
 * @headers X-version {string}  
 * @params id {string} 联系人ID(可选) 
 * @params name {string} 名称（必填） （必填）
 * @params account {string} 账号（必填） （必填）
 * @params password {string} 密码（必填），密码长度8-30位大小写字母数字特殊符号 （必填）
 * @params description {string} 描述（可选） 
 * @params gender {integer} 性别 0:男,1:女（可选） 
 * @params birthday {string} 生日（可选） 
 * @params photo {string} 头像（可选） 
 * @params department {string} 部门（可选） 
 * @params title {string} 职位（可选） 
 * @params relatedId {string} 关联ID（可选） 
 * @params phones {array} 电话列表 
 * @params callInformation {object} 通讯数据 
 * @params departmentIds {array} 父节点Id集合（包含全部的） 
 * @returns
 *    @department {string} 部门
 *    @parentId {string} 所在部门ID
 *    @departmentIds {array} 父节点Id集合（包含全部的）
 *    @memberOf {array} 所属组
 *    @departmentPaths {array} 联系人部门路径
 *    @photo {string} 头像
 *    @id {string} 标识
 *    @name {string} 名称
 *    @account {string} 账号
 *    @description {string} 描述
 *    @gender {integer} 性别
 *    @birthday {string} 生日
 *    @title {string} 职位
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @phones {array} 电话列表
 *    @callInformation {object} 通讯数据
 *    @resourceId {string} 分级调度外部资源Id
 *    @platformId {string} 分级调度平台Id
 *    @platformName {string} 分级调度平台名称
 *    @relatedId {string} 关联ID（可选）
 *    @accountState {integer} 账号状态
 *    @photoPath {string} 头像路径
*/
async addContactUser({ pid, name, account, password  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addContactUser({pid, name, account, password,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ addContactUser', error);
    }
}


/**
 * 查询联系人详情
 * @params id {string} Id标识|账号|外部资源Id （必填）
 * @headers X-version {string}  
 * @returns
 *    @department {string} 部门
 *    @parentId {string} 所在部门ID
 *    @departmentIds {array} 父节点Id集合（包含全部的）
 *    @memberOf {array} 所属组
 *    @departmentPaths {array} 联系人部门路径
 *    @photo {string} 头像
 *    @id {string} 标识
 *    @name {string} 名称
 *    @account {string} 账号
 *    @description {string} 描述
 *    @gender {integer} 性别
 *    @birthday {string} 生日
 *    @title {string} 职位
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @phones {array} 电话列表
 *    @callInformation {object} 通讯数据
 *    @resourceId {string} 分级调度外部资源Id
 *    @platformId {string} 分级调度平台Id
 *    @platformName {string} 分级调度平台名称
 *    @relatedId {string} 关联ID（可选）
 *    @accountState {integer} 账号状态
 *    @photoPath {string} 头像路径
*/
async getUserInfo({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getUserInfo({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getUserInfo', error);
    }
}


/**
 * 编辑联系人
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 名称（可选） 
 * @params description {string} 描述（可选） 
 * @params gender {integer} 性别 0:男,1:女（可选） 
 * @params birthday {string} 生日（可选） 
 * @params photo {string} 头像（可选） 
 * @params department {string} 部门（可选） 
 * @params title {string} 职位（可选） 
 * @params phones {array} 电话列表 
 * @params callInformation {object} 通讯数据 
 * @params relatedId {string} 关联ID（可选） 
 * @returns
*/
async updateContactUser({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateContactUser({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ updateContactUser', error);
    }
}


/**
 * 删除联系人
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteContactUser({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteContactUser({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ deleteContactUser', error);
    }
}


/**
 * 变更密码
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params oldPassword {string} 旧密码（必填），密码长度8-30位大小写字母数字特殊符号 （必填）
 * @params newPassword {string} 新密码（必填），密码长度8-30位大小写字母数字特殊符号 （必填）
 * @returns
*/
async updateContactUserPassword({ id, oldPassword, newPassword  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateContactUserPassword({id, oldPassword, newPassword,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ updateContactUserPassword', error);
    }
}


/**
 * 密码重置
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async resetPassword({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.resetPassword({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ resetPassword', error);
    }
}


/**
 * Xls组织架构文件导入
 * @params pid {string} pid 
 * @params workSheet {string}  
 * @params syncResourceChanged {boolean}  
 * @headers X-version {string}  
 * @returns
*/
async importOrganizationXls(params = {}, config = {}) {
    try {
        const { data } = await this.api.importOrganizationXls(params,config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ importOrganizationXls', error);
    }
}


/**
 * 导出组织架构
 * @params pid {string} 导出组织架构父ID （必填）
 * @params exportFileType {integer} 导出文件类型 0:Excel 1:Json 
 * @headers X-version {string}  
 * @returns
 *    @id {string} 任务Id
 *    @status {undefined} 
 *    @type {undefined} 
 *    @descriptor {undefined} 
 *    @createTimestamp {integer} 任务的创建时间
 *    @exportFileSuffix {string} 文件后缀
 *    @exportFilePath {string} 导入文件路径
 *    @errorMessage {string} 错误信息
*/
async exportOrganization({ pid  , ...params}, config = {}) {
    try {
        const { data } = await this.api.exportOrganization({pid,...params},{params:{pid,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ exportOrganization', error);
    }
}


/**
 * 导出预案组
 * @params exportFileType {integer} 导出文件类型 0:Excel 1:Json 
 * @headers X-version {string}  
 * @returns
 *    @id {string} 任务Id
 *    @status {undefined} 
 *    @type {undefined} 
 *    @descriptor {undefined} 
 *    @createTimestamp {integer} 任务的创建时间
 *    @exportFileSuffix {string} 文件后缀
 *    @exportFilePath {string} 导入文件路径
 *    @errorMessage {string} 错误信息
*/
async exportPlanGroup(params = {}, config = {}) {
    try {
        const { data } = await this.api.exportPlanGroup(params,config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ exportPlanGroup', error);
    }
}


/**
 * 获取导出任务
 * @params taskId {string} taskId （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 任务Id
 *    @status {undefined} 
 *    @type {undefined} 
 *    @descriptor {undefined} 
 *    @createTimestamp {integer} 任务的创建时间
 *    @exportFileSuffix {string} 文件后缀
 *    @exportFilePath {string} 导入文件路径
 *    @errorMessage {string} 错误信息
*/
async getExportTask({ taskId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getExportTask({taskId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getExportTask', error);
    }
}


/**
 * 获取导出文件
 * @params taskId {string} taskId （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 任务Id
 *    @status {undefined} 
 *    @type {undefined} 
 *    @descriptor {undefined} 
 *    @createTimestamp {integer} 任务的创建时间
 *    @exportFileSuffix {string} 文件后缀
 *    @exportFilePath {string} 导入文件路径
 *    @errorMessage {string} 错误信息
*/
async getExportFileInfo({ taskId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getExportFileInfo({taskId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getExportFileInfo', error);
    }
}


/**
 * 预案组文件导入
 * @params pid {string} 父节点ID,带2可挂载跟节点 默认：2 （必填）
 * @params importFileType {integer} 导入文件类型 0:Excel 1:Json 
 * @params workSheet {string} Excel的Sheet页名称 
 * @headers X-version {string}  
 * @returns
*/
async importPlanGroup({ pid  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importPlanGroup({pid,...params},{params:{pid,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ importPlanGroup', error);
    }
}


/**
 * 添加收藏夹
 * @headers X-version {string}  
 * @params id {string} 收藏夹ID 
 * @params name {string} 名称（必填） （必填）
 * @params description {string} 描述（可选） 
 * @params members {array} 组成员Id集合（可选） 
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @description {string} 描述
 *    @parentId {string} 父节点Id
 *    @members {array} 组成员Id集合
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @owner {string} 拥有者
 *    @type {integer} 组类型
*/
async addUserFavorites({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addUserFavorites({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ addUserFavorites', error);
    }
}


/**
 * 获取当前用户收藏夹
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCurrentUserFavorites(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCurrentUserFavorites(params,config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getCurrentUserFavorites', error);
    }
}


/**
 * 删除收藏夹
 * @params favoriteId {string} 收藏夹ID （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteUserFavorites({ favoriteId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteUserFavorites({favoriteId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ deleteUserFavorites', error);
    }
}


/**
 * 更新收藏夹(收藏夹联系人以此次更新为主,不带成员不变更)
 * @params favoriteId {string} 收藏夹ID （必填）
 * @headers X-version {string}  
 * @params name {string} 名称（可选） 
 * @params description {string} 描述（可选） 
 * @params members {array} 组成员Id集合（可选） 
 * @returns
*/
async updateUserFavorites({ favoriteId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateUserFavorites({favoriteId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ updateUserFavorites', error);
    }
}


/**
 * 查询收藏夹详情
 * @params favoriteId {string} 收藏夹ID （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @description {string} 描述
 *    @parentId {string} 父节点Id
 *    @members {array} 组成员Id集合
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @owner {string} 拥有者
 *    @type {integer} 组类型
*/
async getCurrentUserFavoritesInfo({ favoriteId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCurrentUserFavoritesInfo({favoriteId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getCurrentUserFavoritesInfo', error);
    }
}


/**
 * 添加收藏夹联系人
 * @params favoriteId {string} favoriteId （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @description {string} 描述
 *    @parentId {string} 父节点Id
 *    @members {array} 组成员Id集合
 *    @type {integer} 组类型(个人组：2，预案组类型：3，临时组：4)
 *    @owner {string} 负责人
*/
async addUserFavoritesContact({ favoriteId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addUserFavoritesContact({favoriteId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ addUserFavoritesContact', error);
    }
}


/**
 * 更新收藏夹联系人(收藏夹联系人以此次更新为主)
 * @params favoriteId {string} 收藏夹ID （必填）
 * @headers X-version {string}  
 * @returns
*/
async updateUserFavoritesContact({ favoriteId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateUserFavoritesContact({favoriteId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ updateUserFavoritesContact', error);
    }
}


/**
 * 查询收藏夹联系人
 * @params favoriteId {string} 收藏夹ID （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getUserFavoritesContact({ favoriteId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getUserFavoritesContact({favoriteId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getUserFavoritesContact', error);
    }
}


/**
 * 新建组
 * @params pid {string} pid 默认：2 （必填）
 * @headers X-version {string}  
 * @params id {string} 用户组ID 
 * @params name {string} 名称（必填） （必填）
 * @params description {string} 描述（可选） 
 * @params members {array} 组成员Id集合（可选） 
 * @params type {integer} 组类型(个人组：2，预案组类型：3，临时组：4) 
 * @params owner {string} 拥有者（可选） 
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @description {string} 描述
 *    @parentId {string} 父节点Id
 *    @members {array} 组成员Id集合
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @owner {string} 拥有者
 *    @type {integer} 组类型
*/
async createGroup({ pid, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.createGroup({pid, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ createGroup', error);
    }
}


/**
 * 删除组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteGroup({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteGroup({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ deleteGroup', error);
    }
}


/**
 * 更新组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 名称（可选） 
 * @params description {string} 描述（可选） 
 * @params members {array} 组成员Id集合（可选） 
 * @params owner {string} 拥有者（可选） 
 * @returns
*/
async updateGroup({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateGroup({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ updateGroup', error);
    }
}


/**
 * 查询组详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @description {string} 描述
 *    @parentId {string} 父节点Id
 *    @members {array} 组成员Id集合
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @owner {string} 拥有者
 *    @type {integer} 组类型
*/
async getGroupInfo({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGroupInfo({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getGroupInfo', error);
    }
}


/**
 * 查询所有组
 * @params Type {integer} 组类型(所有类型组：0（预案组和个人组），个人组：2，预案组类型：3，临时组：4) 默认：3 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAllGroups(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAllGroups(params,config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getAllGroups', error);
    }
}


/**
 * 查询组详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @description {string} 描述
 *    @parentId {string} 父节点Id
 *    @members {array} 组成员Id集合
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @owner {string} 拥有者
 *    @type {integer} 组类型
*/
async getGroupDetails({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGroupDetails({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getGroupDetails', error);
    }
}


/**
 * 添加组成员
 * @params groupId {string} 组ID （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @description {string} 描述
 *    @parentId {string} 父节点Id
 *    @members {array} 组成员Id集合
 *    @type {integer} 组类型(个人组：2，预案组类型：3，临时组：4)
 *    @owner {string} 负责人
*/
async addGroupMembers({ groupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addGroupMembers({groupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ addGroupMembers', error);
    }
}


/**
 * 更新组成员
 * @params groupId {string} 组ID （必填）
 * @headers X-version {string}  
 * @returns
*/
async updateGroupMembers({ groupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateGroupMembers({groupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ updateGroupMembers', error);
    }
}


/**
 * 查询组成员
 * @params groupId {string} 组ID （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getGroupMembers({ groupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGroupMembers({groupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getGroupMembers', error);
    }
}


/**
 * 新建部门
 * @params pid {string} pid 默认：1 （必填）
 * @headers X-version {string}  
 * @params id {string} 部门ID(可选) 
 * @params name {string} 名称(必填) （必填）
 * @params description {string} 描述(可选) 
 * @params owner {string} 拥有者(可选) 
 * @params typologyNodeId {string} 拓扑节点Id，如果不为空那么该节点为虚根 
 * @params typologyNodeExtra {object} 拓扑附加信息,json格式 
 * @returns
 *    @synchronizeableRequired {boolean}  是否需要同步
 *    @sourceType {integer} 组织架构来源
 *    @typologyNodeId {string} 拓扑Id
 *    @isTyplogyNode {boolean} 是否是一个拓扑节点
 *    @fromPlatformId {string} 同步来源
 *    @level {integer} 节点当前层级
 *    @typologyNodeExtra {object} 拓扑的一些附加信息键值对形式,返回给前端
 *    @id {string} 标识
 *    @name {string} 名称
 *    @description {string} 描述
 *    @parentId {string} 父节点Id
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @owner {string} 拥有者
 *    @platformId {string} 平台Id
 *    @resourceId {string} 资源Id
*/
async addOrganizations({ pid, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addOrganizations({pid, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ addOrganizations', error);
    }
}


/**
 * 删除部门
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteOrganizations({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteOrganizations({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ deleteOrganizations', error);
    }
}


/**
 * 更新部门
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 名称（可选） （必填）
 * @params description {string} 描述(可选) 
 * @params owner {string} 拥有者(可选) 
 * @returns
*/
async updateOrganizations({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateOrganizations({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ updateOrganizations', error);
    }
}


/**
 * 查询部门详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @description {string} 描述
 *    @parentId {string} 父节点Id
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @owner {string} 拥有者
 *    @platformId {string} 平台Id
 *    @resourceId {string} 资源Id
*/
async getOrganizationsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getOrganizationsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getOrganizationsById', error);
    }
}


/**
 * 删除部门下所以节点
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteAllOrganizations({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteAllOrganizations({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ deleteAllOrganizations', error);
    }
}


/**
 * 查询Root部门
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAllRootList(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAllRootList(params,config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getAllRootList', error);
    }
}


/**
 * 分页查询部门及成员
 * @params pid {string} pid （必填）
 * @params Type {undefined} 默认为0查所有,1为查部门，2为查联系人 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {object} 组织架构成员输出实体
*/
async getAllDepartmentsMembers({ pid  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAllDepartmentsMembers({pid,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getAllDepartmentsMembers', error);
    }
}


/**
 * 分页查询部门
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getOrganizationsDepartments(params = {}, config = {}) {
    try {
        const { data } = await this.api.getOrganizationsDepartments(params,config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getOrganizationsDepartments', error);
    }
}


/**
 * 分页查询联系人
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFrequentContacts(params = {}, config = {}) {
    try {
        const { data } = await this.api.getFrequentContacts(params,config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getFrequentContacts', error);
    }
}


/**
 * 搜索
 * @params ParentId {string} 基于哪个节点进行搜索,空则从最跟处开始检索 
 * @params KeyWord {string} 关键字 
 * @params Type {undefined} 默认为0查所有,1为查部门，2为查联系人 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {object} 下级组织架构数据
*/
async searchKeyWordOrPid(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchKeyWordOrPid(params,config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ searchKeyWordOrPid', error);
    }
}


/**
 * 同级移动联系人
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params beforeContactId {string} 移入位置前面的ContactId 
 * @params afterContactId {string} 移入位置后面的ContactId 
 * @params departmentId {string} 移动所在层级的DepartmentId 
 * @returns
*/
async moveContacts({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.moveContacts({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ moveContacts', error);
    }
}


/**
 * 置顶联系人
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params departmentId {string} 部门Id 
 * @returns
*/
async topContacts({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.topContacts({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ topContacts', error);
    }
}


/**
 * 查询指定联系人所属部门的路径（当前用户）
 * @params id {string} Id标识/账号 （必填）
 * @headers X-version {string}  
 * @returns
 *    @pathInfoItems {array} 路径集合
*/
async getContactDepartmentPath({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getContactDepartmentPath({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getContactDepartmentPath', error);
    }
}


/**
 * 查询指定联系人所属部门的路径（指定调用者）
 * @params id {string} Id标识/账号 （必填）
 * @params callerUserId {string} 调用者Id标识 （必填）
 * @headers X-version {string}  
 * @returns
 *    @pathInfoItems {array} 路径集合
*/
async getDepartmentPathsForSpecifyCaller({ id, callerUserId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDepartmentPathsForSpecifyCaller({id, callerUserId,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getDepartmentPathsForSpecifyCaller', error);
    }
}


/**
 * 更新联系人所属部门
 * @params id {string} 联系人id （必填）
 * @headers X-version {string}  
 * @params departmentIds {array} 人员所属的部门Id集合 （必填）
 * @returns
*/
async changeDepartment({ id, departmentIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.changeDepartment({id, departmentIds,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ changeDepartment', error);
    }
}


/**
 * 查询当前用户指定部门下有权限的部门列表，不传表示查询全部有权限的部门列表
 * @params id {string} 部门标识Id 
 * @headers X-version {string}  
 * @returns
 *    @hasAllPermission {boolean} 是否拥有所有部门权限当查询的departmentId为空时，有效
 *    @items {array} 返回部门集合
*/
async getUserDepartments(params = {}, config = {}) {
    try {
        const { data } = await this.api.getUserDepartments(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getUserDepartments', error);
    }
}


/**
 * 联系人账号状态变更
 * @params id {string} 联系人id （必填）
 * @params accountState {integer} 账号状态 0:启用，1:禁用 （必填）
 * @headers X-version {string}  
 * @returns
*/
async changeContactState({ id, accountState  , ...params}, config = {}) {
    try {
        const { data } = await this.api.changeContactState({id,...params},{params:{id, accountState,...params}, headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ changeContactState', error);
    }
}


/**
 * 更新所有联系人拼音和缩写信息（联系人历史数据补全）
 * @headers X-version {string}  
 * @returns
*/
async updateContactsPinyinAndInitials(params = {}, config = {}) {
    try {
        const { data } = await this.api.updateContactsPinyinAndInitials(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ updateContactsPinyinAndInitials', error);
    }
}


/**
 * 上传当前联系人头像
 * @headers X-version {string}  
 * @returns
 *    @id {string} 联系人Id
 *    @photoPath {string} 联系人路径
*/
async uploadUserAvatar(params = {}, config = {}) {
    try {
        const { data } = await this.api.uploadUserAvatar(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ uploadUserAvatar', error);
    }
}


/**
 * 更新所有联系人头像信息（联系人历史数据补全）
 * @headers X-version {string}  
 * @returns
*/
async updateUserAvatar(params = {}, config = {}) {
    try {
        const { data } = await this.api.updateUserAvatar(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ updateUserAvatar', error);
    }
}


/**
 * 导入组织架构
 * @params ImportDataMode {undefined} 导入类型 0:增量导入， 1:全量覆盖导入 （必填）
 * @params ImportNodeType {undefined} 部门类型 0:根部门， 1:子部门 , 2:当前部门 （必填）
 * @params ParentId {string} 部门Id（为1，则是根部门） （必填）
 * @params WorkSheet {string} Excel的sheet名称 
 * @headers X-version {string}  
 * @returns
 *    @id {string} 任务Id
 *    @importTaskStatus {undefined} 
 *    @importTaskType {undefined} 
 *    @descriptor {undefined} 
 *    @createTaskTime {string} 任务的创建时间
 *    @endTaskTime {string} 任务的结束时间
 *    @dataProgress {number} 数据进度
 *    @importDataSummary {object} 导入数据统计
*/
async importOrganization({ ImportDataMode, ImportNodeType, ParentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importOrganization(params,{params:{ImportDataMode, ImportNodeType, ParentId,...params}, headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ importOrganization', error);
    }
}


/**
 * 执行数据校验任务
 * @params importTaskId {string} importTaskId （必填）
 * @headers X-version {string}  
 * @returns
*/
async checkData({ importTaskId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.checkData(params,{params:{importTaskId,...params}, headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ checkData', error);
    }
}


/**
 * 取消执行数据校验任务
 * @params importTaskId {string} importTaskId （必填）
 * @headers X-version {string}  
 * @returns
*/
async cancelCheckData({ importTaskId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cancelCheckData(params,{params:{importTaskId,...params}, headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ cancelCheckData', error);
    }
}


/**
 * 执行数据导入任务
 * @params importTaskId {string} importTaskId （必填）
 * @headers X-version {string}  
 * @returns
*/
async importTask({ importTaskId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importTask(params,{params:{importTaskId,...params}, headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ importTask', error);
    }
}


/**
 * 取消执行数据导入任务
 * @params importTaskId {string} importTaskId （必填）
 * @headers X-version {string}  
 * @returns
*/
async cancelImportTask({ importTaskId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cancelImportTask(params,{params:{importTaskId,...params}, headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ cancelImportTask', error);
    }
}


/**
 * 分页查询校验数据
 * @params importTaskId {string} importTaskId （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @addTotalCount {integer} Add总数
 *    @updateTotalCount {integer} Update总数
 *    @deleteTotalCount {integer} Delete总数
 *    @records {array} 记录
*/
async getCheckData({ importTaskId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCheckData({importTaskId,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getCheckData', error);
    }
}


/**
 * 查询任务进度
 * @params importTaskId {string} importTaskId （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 任务Id
 *    @importTaskStatus {integer} 导入任务状态
 *    @createTaskTime {string} 任务的创建时间
 *    @endTaskTime {string} 任务的结束时间
 *    @fileName {string} 文件名称
 *    @fileSize {integer} 文件大小
 *    @importDataMode {integer} 导入数据方式
 *    @dataProgress {integer} 数据进度（数据校验或数据导入的进度）
 *    @importDataSummary {object} 导入数据统计
*/
async getTaskProgress({ importTaskId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTaskProgress({importTaskId,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getTaskProgress', error);
    }
}


/**
 * 下载导入组织架构模板文件
 * @headers X-version {string}  
 * @returns
*/
async downloadFiles(params = {}, config = {}) {
    try {
        const { data } = await this.api.downloadFiles(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ downloadFiles', error);
    }
}


/**
 * 查询正在执行的导入任务
 * @headers X-version {string}  
 * @returns
 *    @id {string} 任务Id
 *    @importTaskStatus {undefined} 
 *    @importTaskType {undefined} 
 *    @descriptor {undefined} 
 *    @createTaskTime {string} 任务的创建时间
 *    @endTaskTime {string} 任务的结束时间
 *    @dataProgress {number} 数据进度
 *    @importDataSummary {object} 导入数据统计
*/
async importRunningTask(params = {}, config = {}) {
    try {
        const { data } = await this.api.importRunningTask(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ importRunningTask', error);
    }
}


/**
 * 移除收藏夹成员
 * @params favoriteId {string} favoriteId （必填）
 * @headers X-version {string}  
 * @returns
*/
async removeFavoriteMembers({ favoriteId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.removeFavoriteMembers({favoriteId,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ removeFavoriteMembers', error);
    }
}


/**
 * 移除组成员
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async removeGroupMembers({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.removeGroupMembers({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ removeGroupMembers', error);
    }
}


/**
 * 移除组成员(包含设备)
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteGroupMemberV2({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteGroupMemberV2({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ deleteGroupMemberV2', error);
    }
}


/**
 * 分页查询组成员
 * @params id {string} 组ID （必填）
 * @params Type {integer} 默认为0:所有,1:联系人,2:监控,4:会议终端 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getGroupMembersV2({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGroupMembersV2({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getGroupMembersV2', error);
    }
}


/**
 * 添加组成员
 * @params id {string} 组ID （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @description {string} 描述
 *    @parentId {string} 父节点Id
 *    @members {array} 组成员Id集合
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @owner {string} 拥有者
 *    @type {integer} 组类型
*/
async addGroupMembersV2({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addGroupMembersV2({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ addGroupMembersV2', error);
    }
}


/**
 * 查询所有包含当前用户的组列表（不包含组成员信息）
 * @params Type {integer} 组类型(所有类型组：0（预案组和个人组），个人组：2，预案组类型：3，临时组：4) 默认：3 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getSelfGroups(params = {}, config = {}) {
    try {
        const { data } = await this.api.getSelfGroups(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getSelfGroups', error);
    }
}


/**
 * 组内移动成员
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params beforeMemberId {string} 移入位置前面的成员Id 
 * @params afterMemberId {string} 移入位置后面的成员Id 
 * @params groupId {string} 移动所在的组GroupId 
 * @returns
*/
async moveGroupMember({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.moveGroupMember({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ moveGroupMember', error);
    }
}


/**
 * 组内置顶成员
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params groupId {string} 移动所在的组GroupId 
 * @returns
*/
async topGroupMember({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.topGroupMember({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ topGroupMember', error);
    }
}


/**
 * 同级移动同类型的组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params beforeGroupId {string} 移入位置前面的GroupId 
 * @params afterGroupId {string} 移入位置后面的GroupId 
 * @returns
*/
async moveGroups({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.moveGroups({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ moveGroups', error);
    }
}


/**
 * 新建组
 * @params pid {string} pid 默认：2 （必填）
 * @headers X-version {string}  
 * @params id {string} 用户组ID 
 * @params name {string} 名称（必填） （必填）
 * @params description {string} 描述（可选） 
 * @params members {array} 组成员Id集合（可选） 
 * @params type {integer} 组类型(个人组：2，预案组类型：3，临时组：4) 
 * @params owner {string} 拥有者（可选） 
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @description {string} 描述
 *    @parentId {string} 父节点Id
 *    @members {array} 组成员Id集合
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @owner {string} 拥有者
 *    @type {integer} 组类型
*/
async createGroupV2({ pid, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.createGroupV2({pid, name,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ createGroupV2', error);
    }
}


/**
 * 更新组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 名称（可选） 
 * @params description {string} 描述（可选） 
 * @params members {array} 组成员集合（可选） 
 * @params owner {string} 拥有者（可选） 
 * @returns
*/
async updateGroupV2({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateGroupV2({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ updateGroupV2', error);
    }
}


/**
 * 查询所有组
 * @params Type {integer} 组类型(所有类型组：0（预案组和个人组），个人组：2，预案组类型：3，临时组：4) 默认：3 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAllGroupsV2(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAllGroupsV2(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getAllGroupsV2', error);
    }
}


/**
 * 查询部门详情
 * @params id {string} 部门ID （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 标识
 *    @name {string} 名称
 *    @description {string} 描述
 *    @parentId {string} 父节点Id
 *    @createTime {string} 创建时间
 *    @updateTime {string} 更新时间
 *    @owner {object} contactOut
 *    @summary {undefined} 
 *    @departmentPath {undefined} 
 *    @level {integer} 节点当前层级
 *    @isLeaf {boolean} 是否叶子节点
 *    @isLeafGroup {boolean} 是否叶子组节点
 *    @platformId {string} 平台Id，为空说明是本级资源
 *    @fromPlatformId {string} 数据来源，为空说明是自建数据
 *    @resourceId {string} 资源Id
 *    @typologyNodeId {string} 虚跟Id，不为空说明这个部门是虚跟
 *    @isTyplogyNode {boolean} 是否是虚根
 *    @typologyNodeExtra {object} 
*/
async getOrganizationsByIdV2({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getOrganizationsByIdV2({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getOrganizationsByIdV2', error);
    }
}


/**
 * 分页查询部门及成员
 * @params pid {string} pid （必填）
 * @params Type {undefined} 查询所有：0（默认），查询部门：1，查询联系人：2 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {object} 
*/
async getAllDepartmentsMembersV2({ pid  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAllDepartmentsMembersV2({pid,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getAllDepartmentsMembersV2', error);
    }
}


/**
 * 同级移动部门
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params beforeDepartmentId {string} 移入位置前面的DepartmentId 
 * @params afterDepartmentId {string} 移入位置后面的DepartmentId 
 * @returns
*/
async moveNearDepartment({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.moveNearDepartment({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ moveNearDepartment', error);
    }
}


/**
 * 查询指定部门所属的路径
 * @params id {string} Id部门标识 （必填）
 * @headers X-version {string}  
 * @returns
 *    @pathInfoItems {array} 路径集合
*/
async getDepartmentPathById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDepartmentPathById({id,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getDepartmentPathById', error);
    }
}


/**
 * 分页查询部门下的成员列表（包含子孙成员）
 * @params pid {string} pid （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDescendantMembers({ pid  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDescendantMembers({pid,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getDescendantMembers', error);
    }
}


/**
 * 查询Root部门（带统计成员）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getRootOrganizations(params = {}, config = {}) {
    try {
        const { data } = await this.api.getRootOrganizations(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getRootOrganizations', error);
    }
}


/**
 * 搜索
 * @params keyword {string} 关键字 （必填）
 * @params type {integer} 查询类型，1：联系人，2：部门，4：预案组，8：个人组，16：收藏夹 
 * @params limit {integer} 搜索数量范围 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {object} search out dto
*/
async searchKeyWordOrPidV2({ keyword  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchKeyWordOrPidV2({keyword,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ searchKeyWordOrPidV2', error);
    }
}


/**
 * 按照电话集合查找联系人
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @params phones {array} 查询参数（电话集合） 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchContactByPhones(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchContactByPhones(params,config);
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ searchContactByPhones', error);
    }
}


/**
 * 根据部门集合批量查询部门信息
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchDepartments(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchDepartments(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ searchDepartments', error);
    }
}


/**
 * 根据联系人集合批量查询联系人信息
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchContacts(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchContacts(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ searchContacts', error);
    }
}


/**
 * 搜索（带部门或组下成员的统计）
 * @params keyword {string} 关键字 （必填）
 * @params type {integer} 查询类型，1：联系人，2：部门，4：预案组，8：个人组，16：收藏夹 
 * @params limit {integer} 搜索数量范围 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {object} 搜索带统计结果
*/
async searchStatistics({ keyword  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchStatistics({keyword,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ searchStatistics', error);
    }
}


/**
 * 更新指定用户个人配置
 * @params userId {string} 用户id （必填）
 * @headers X-version {string}  
 * @params configType {integer} 配置类型(夜服配置：1，语言配置：2，皮肤配置：4，点对点视频通话：8，视频会议：16，语音会议：32，语音通知：64，语音广播：128) （必填）
 * @params configInfo {undefined} 配置信息 （必填）
 * @returns
*/
async updateUserConfigsById({ userId, configType, configInfo  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateUserConfigsById({userId, configType, configInfo,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ updateUserConfigsById', error);
    }
}


/**
 * 更新当前用户个人配置
 * @headers X-version {string}  
 * @params configType {integer} 配置类型(夜服配置：1，语言配置：2，皮肤配置：4，点对点视频通话：8，视频会议：16，语音会议：32，语音通知：64，语音广播：128) （必填）
 * @params configInfo {undefined} 配置信息 （必填）
 * @returns
*/
async updateUserConfigs({ configType, configInfo  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateUserConfigs({configType, configInfo,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ updateUserConfigs', error);
    }
}


/**
 * 按条件查询用户配置列表
 * @params UserID {string} 指定的用户ID （必填）
 * @params Type {integer} 用户配置类型 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, MaxValue] 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getUserConfigs({ UserID  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getUserConfigs({UserID,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('orgsBiz ~ getUserConfigs', error);
    }
}

```

 