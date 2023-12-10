// api 
``` js
// 获取目录
getDirectories: (params, config) => this._getConfig(`/api/Directories`, "get", params, config), 
// 创建目录
addDirectories: (params, config) => this._getConfig(`/api/Directories`, "post", params, config), 
// 获取目录(根目录)
getDirectoriesRoot: (params, config) => this._getConfig(`/api/Directories/root`, "get", params, config), 
// 获取子目录
getDirectoriesChildren: (params, config) => this._getConfig(`/api/Directories/${params.parentId}/children`, "get", params, config), 
// 通过Id获取目录
getDirectoriesById: (params, config) => this._getConfig(`/api/Directories/${params.id}`, "get", params, config), 
// 更新目录
updateDirectories: (params, config) => this._getConfig(`/api/Directories/${params.id}`, "put", params, config), 
// 删除目录
deleteDirectories: (params, config) => this._getConfig(`/api/Directories/${params.id}`, "delete", params, config), 
// 获取目录下的文件
getFiles: (params, config) => this._getConfig(`/api/Files`, "get", params, config), 
// 搜索文件
searchFiles: (params, config) => this._getConfig(`/api/Files/search`, "get", params, config), 
// 获取文件
getFilesById: (params, config) => this._getConfig(`/api/Files/${params.fileId}`, "get", params, config), 
// 更新文件
updateFiles: (params, config) => this._getConfig(`/api/Files/${params.fileId}`, "put", params, config), 
// 删除文件
deleteFiles: (params, config) => this._getConfig(`/api/Files/${params.fileId}`, "delete", params, config), 
// ss文件创建接口
addSS: (params, config) => this._getConfig(`/api/Files/ss`, "post", params, config), 
// 更新录音通知文件
updateRecordFiles: (params, config) => this._getConfig(`/api/Files/recordnotify/${params.fileId}`, "put", params, config), 
// wts文件创建/获取接口
addWTS: (params, config) => this._getConfig(`/api/Files/wts`, "post", params, config), 
// 储存类型:StorageKind
getStorageKind: (params, config) => this._getConfig(`/api/ZEnums/StorageKind`, "get", params, config), 
```

 // biz 
``` js
/**
 * 获取目录
 * @params StorageKind {undefined} 目录类型0-公共1-私有2-组 （必填）
 * @params ParentId {string} 父id 
 * @params SelectedIds {array} 被选中的节点 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDirectories({ StorageKind  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDirectories({StorageKind,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ getDirectories', error);
    }
}


/**
 * 创建目录
 * @params storageKind {undefined}  
 * @params name {string} 目录名称 （必填）
 * @params parentId {string} 父目录Id 
 * @returns
 *    @id {string} 目录ID
 *    @name {string} 目录名称
 *    @parentId {string} 父目录Id
 *    @isPublic {boolean} 是否为公共目录
 *    @createTime {string} 
 *    @updateTime {string} 
 *    @useStatus {integer} 节点选中状态
 *    @isLeafGroup {boolean} 是否是叶子节点组true 表示叶子节点，不会有子节点
 *    @isLeaf {boolean} 是否为叶子节点true 表示叶子节点，不会有子节点
*/
async addDirectories({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addDirectories({name,...params},{params:{name,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ addDirectories', error);
    }
}


/**
 * 获取目录(根目录)
 * @params storageKind {undefined}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDirectoriesRoot(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDirectoriesRoot(params,config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ getDirectoriesRoot', error);
    }
}


/**
 * 获取子目录
 * @params parentId {string} parentId （必填）
 * @params storageKind {undefined}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDirectoriesChildren({ parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDirectoriesChildren({parentId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ getDirectoriesChildren', error);
    }
}


/**
 * 通过Id获取目录
 * @params id {string} id （必填）
 * @params storageKind {undefined}  
 * @returns
 *    @id {string} 目录ID
 *    @name {string} 目录名称
 *    @parentId {string} 父目录Id
 *    @isPublic {boolean} 是否为公共目录
 *    @createTime {string} 
 *    @updateTime {string} 
 *    @useStatus {integer} 节点选中状态
 *    @isLeafGroup {boolean} 是否是叶子节点组true 表示叶子节点，不会有子节点
 *    @isLeaf {boolean} 是否为叶子节点true 表示叶子节点，不会有子节点
*/
async getDirectoriesById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDirectoriesById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ getDirectoriesById', error);
    }
}


/**
 * 更新目录
 * @params id {string} id （必填）
 * @params storageKind {undefined}  
 * @params name {string} 目录名称 （必填）
 * @params parentId {string} 父目录Id 
 * @returns
*/
async updateDirectories({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateDirectories({id, name,...params},{params:{id, name,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ updateDirectories', error);
    }
}


/**
 * 删除目录
 * @params id {string} id （必填）
 * @params storageKind {undefined}  
 * @returns
*/
async deleteDirectories({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteDirectories({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ deleteDirectories', error);
    }
}


/**
 * 获取目录下的文件
 * @params directoryId {string} 目录id （必填）
 * @params storageKind {undefined} 储存类型 （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFiles({ directoryId, storageKind  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFiles({directoryId, storageKind,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ getFiles', error);
    }
}


/**
 * 搜索文件
 * @params Keyword {string} 关键字 （必填）
 * @params Limit {integer} 搜索返回的个人文件夹和公共文件夹文件数量默认各20条 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchFiles({ Keyword  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchFiles({Keyword,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ searchFiles', error);
    }
}


/**
 * 获取文件
 * @params fileId {string} fileId （必填）
 * @params platformId {string} platformId 
 * @returns
 *    @id {string} 文件ID
 *    @name {string} 文件名
 *    @fileId {string} 文件Id
 *    @path {string} 路径
 *    @fullPath {string} 访问全路径
 *    @thumbnailPath {string} 缩略图路径
 *    @convertedFiles {object} 文件路径字典
 *    @length {integer} 文件大小(单位bytes)
 *    @fileType {integer} 文件类型
 *    @contentType {string} 内容类型
 *    @directoryInfo {object} 目录实体
 *    @storageKind {integer} 储存类型
 *    @isOldSsFile {boolean} 是否为旧版ss文件
 *    @userId {string} 上传用户Id
 *    @userName {string} 上传用户名称
 *    @uploadTime {string} 上传时间
 *    @createTime {string} 
 *    @updateTime {string} 
 *    @expireTime {string} 超期时间
 *    @isExpired {boolean} 是否已过期
 *    @extension {undefined} 扩展字段
*/
async getFilesById({ fileId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFilesById({fileId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ getFilesById', error);
    }
}


/**
 * 更新文件
 * @params fileId {string} fileId （必填）
 * @params fileName {string} 文件名 
 * @params newDirectoryId {string} 新目录id 
 * @returns
*/
async updateFiles({ fileId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateFiles({fileId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ updateFiles', error);
    }
}


/**
 * 删除文件
 * @params fileId {string} fileId （必填）
 * @returns
*/
async deleteFiles(fileId, config = {}) {
    try {
        const { data } = await this.api.deleteFiles({ fileId }, config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ deleteFiles', error);
    }
}


/**
 * ss文件创建接口
 * @params id {string} 主键Id （必填）
 * @params fileGroupId {string} 文件组id 
 * @params userName {string} 用户名 
 * @params fileType {integer} 文件类型 
 * @params fileName {string} 文件名 （必填）
 * @params filePath {string} 文件路径 （必填）
 * @params fileSize {integer} 文件大小 （必填）
 * @params createTime {string} 生成时间 （必填）
 * @returns
 *    @id {string} 文件ID
 *    @name {string} 文件名
 *    @fileId {string} 文件Id
 *    @path {string} 路径
 *    @fullPath {string} 访问全路径
 *    @thumbnailPath {string} 缩略图路径
 *    @convertedFiles {object} 文件路径字典
 *    @length {integer} 文件大小(单位bytes)
 *    @fileType {integer} 文件类型
 *    @contentType {string} 内容类型
 *    @directoryInfo {object} 目录实体
 *    @storageKind {integer} 储存类型
 *    @isOldSsFile {boolean} 是否为旧版ss文件
 *    @userId {string} 上传用户Id
 *    @userName {string} 上传用户名称
 *    @uploadTime {string} 上传时间
 *    @createTime {string} 
 *    @updateTime {string} 
 *    @expireTime {string} 超期时间
 *    @isExpired {boolean} 是否已过期
 *    @extension {undefined} 扩展字段
*/
async addSS({ id, fileName, filePath, fileSize, createTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addSS({id, fileName, filePath, fileSize, createTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ addSS', error);
    }
}


/**
 * 更新录音通知文件
 * @params fileId {string} fileId （必填）
 * @params fileNameWithoutExtension {string} 文件名 （必填）
 * @returns
*/
async updateRecordFiles({ fileId, fileNameWithoutExtension  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateRecordFiles({fileId, fileNameWithoutExtension,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ updateRecordFiles', error);
    }
}


/**
 * wts文件创建/获取接口
 * @params fileName {string} 文件名 
 * @params isMultimediaTransfer {boolean} 是否为拍传文件 
 * @returns
 *    @id {string} 文件ID
 *    @name {string} 文件名
 *    @fileId {string} 文件Id
 *    @path {string} 路径
 *    @fullPath {string} 访问全路径
 *    @thumbnailPath {string} 缩略图路径
 *    @convertedFiles {object} 文件路径字典
 *    @length {integer} 文件大小(单位bytes)
 *    @fileType {integer} 文件类型
 *    @contentType {string} 内容类型
 *    @directoryInfo {object} 目录实体
 *    @storageKind {integer} 储存类型
 *    @isOldSsFile {boolean} 是否为旧版ss文件
 *    @userId {string} 上传用户Id
 *    @userName {string} 上传用户名称
 *    @uploadTime {string} 上传时间
 *    @createTime {string} 
 *    @updateTime {string} 
 *    @expireTime {string} 超期时间
 *    @isExpired {boolean} 是否已过期
 *    @extension {undefined} 扩展字段
*/
async addWTS(params = {}, config = {}) {
    try {
        const { data } = await this.api.addWTS(params,config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ addWTS', error);
    }
}


/**
 * 储存类型:StorageKind
 * @returns
*/
async getStorageKind(params = {}, config = {}) {
    try {
        const { data } = await this.api.getStorageKind(params,config);
        return data;
    } catch (error) {
        return utils.formatError('fileStorageBiz ~ getStorageKind', error);
    }
}

```

 