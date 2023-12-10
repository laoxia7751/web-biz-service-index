// api 
``` js
// 执行查询
executeJobMeta: (params, config) => this._getConfig(`/api/JobMeta/ExecuteJobMeta`, "post", params, config), 
// 通过Id获取JobMetaModel
getJobMetaModelById: (params, config) => this._getConfig(`/api/JobMetaManage/GetJobMetaModelById`, "get", params, config), 
// 获取所有的JobMetaModel
getAllSimpleJobMetaModel: (params, config) => this._getConfig(`/api/JobMetaManage/GetAllSimpleJobMetaModel`, "get", params, config), 
// 返回所有的标签
getAllLabel: (params, config) => this._getConfig(`/api/JobMetaManage/GetAllLabel`, "get", params, config), 
```

 // biz 
``` js
/**
 * 执行查询
 * @params name {string} 元数据名称 
 * @returns
*/
async executeJobMeta(params = {}, config = {}) {
    try {
        const { data } = await this.api.executeJobMeta(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dasBiz ~ executeJobMeta', error);
    }
}


/**
 * 通过Id获取JobMetaModel
 * @params id {integer} id 
 * @headers Account {string}  
 * @headers Password {string}  
 * @returns
*/
async getJobMetaModelById(params = {}, config = {}) {
    try {
        const { data } = await this.api.getJobMetaModelById(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dasBiz ~ getJobMetaModelById', error);
    }
}


/**
 * 获取所有的JobMetaModel
 * @headers Account {string}  
 * @headers Password {string}  
 * @returns
 *    @id {string} Id
 *    @name {string} 名称
 *    @description {string} 描述
 *    @isUseSampleData {boolean} 是否使用样例数据
 *    @isDev {boolean} 是否开发
 *    @cronExpression {string} Cro表达式
 *    @parameterCount {integer} 参数个数
 *    @dataType {integer} 数据类型
 *    @labelIds {array} 关联的标签列表
*/
async getAllSimpleJobMetaModel(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAllSimpleJobMetaModel(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dasBiz ~ getAllSimpleJobMetaModel', error);
    }
}


/**
 * 返回所有的标签
 * @headers Account {string}  
 * @headers Password {string}  
 * @returns
*/
async getAllLabel(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAllLabel(params,config);
        return data;
    } catch (error) {
        return utils.formatError('dasBiz ~ getAllLabel', error);
    }
}

```

 // plugin
 ``` js
    {
        label: 'executeJobMeta',
        kind: vscode.CompletionItemKind.Method,
params})"),
        documentation: new vscode.MarkdownString().appendMarkdown(`#### 执行查询`).appendCodeblock(`
@URL /api/JobMeta/ExecuteJobMeta
Exp: executeJobMeta(params)
@params name {string} 元数据名称 
    },
    {
        label: 'getJobMetaModelById',
        kind: vscode.CompletionItemKind.Method,
params})"),
        documentation: new vscode.MarkdownString().appendMarkdown(`#### 通过Id获取JobMetaModel`).appendCodeblock(`
@URL /api/JobMetaManage/GetJobMetaModelById
Exp: getJobMetaModelById(params)
@params id {integer} id 
@headers Account {string}  
@headers Password {string}  
    },
    {
        label: 'getAllSimpleJobMetaModel',
        kind: vscode.CompletionItemKind.Method,
params})"),
        documentation: new vscode.MarkdownString().appendMarkdown(`#### 获取所有的JobMetaModel`).appendCodeblock(`
@URL /api/JobMetaManage/GetAllSimpleJobMetaModel
Exp: getAllSimpleJobMetaModel(params)
@headers Account {string}  
@headers Password {string}  
@returns
    @id {string} Id
    @name {string} 名称
    @description {string} 描述
    @isUseSampleData {boolean} 是否使用样例数据
    @isDev {boolean} 是否开发
    @cronExpression {string} Cro表达式
    @parameterCount {integer} 参数个数
    @dataType {integer} 数据类型
    @labelIds {array} 关联的标签列表
    },
    {
        label: 'getAllLabel',
        kind: vscode.CompletionItemKind.Method,
params})"),
        documentation: new vscode.MarkdownString().appendMarkdown(`#### 返回所有的标签`).appendCodeblock(`
@URL /api/JobMetaManage/GetAllLabel
Exp: getAllLabel(params)
@headers Account {string}  
@headers Password {string}  
    },
```