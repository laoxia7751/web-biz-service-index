// api 
``` js
// 通过url获取json数据，不限于/resource/api/
getJsonDataByUrl: (params, config) => this._getConfig(``, "get", params, config), 
// 获取/resource/api/的json数据
getResourceData: (params, config) => this._getConfig(`/resource/api/${params.url}`, "get", params, config), 
// 获取/resource/api/citydata/的json数据
getCityData: (params, config) => this._getConfig(`/resource/api/citydata/${params.url}`, "get", params, config), 
// 获取/resource/api/commondata/的json数据
getCommonData: (params, config) => this._getConfig(`/resource/api/commondata/${params.url}`, "get", params, config), 
// 获取/resource/api/projectdata/的json数据
getCommonData: (params, config) => this._getConfig(`/resource/api/projectdata/${params.url}`, "get", params, config), 
```

 // biz 
``` js
/**
 * 通过url获取json数据，不限于/resource/api/
 * @params url {string} json数据url （必填）
 * @returns
*/
async getJsonDataByUrl(params = {}, config = {}) {
    try {
        const { data } = await this.api.getJsonDataByUrl({ url }, config);
        return data;
    } catch (error) {
        return utils.formatError('resourceBiz ~ getJsonDataByUrl', error);
    }
}


/**
 * 获取/resource/api/的json数据
 * @params url {string} /resource/api/后面的url （必填）
 * @returns
*/
async getResourceData(params = {}, config = {}) {
    try {
        const { data } = await this.api.getResourceData({ url }, config);
        return data;
    } catch (error) {
        return utils.formatError('resourceBiz ~ getResourceData', error);
    }
}


/**
 * 获取/resource/api/citydata/的json数据
 * @params url {string} /resource/api/citydata/后面的url （必填）
 * @returns
*/
async getCityData(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCityData({ url }, config);
        return data;
    } catch (error) {
        return utils.formatError('resourceBiz ~ getCityData', error);
    }
}


/**
 * 获取/resource/api/commondata/的json数据
 * @params url {string} /resource/api/commondata/后面的url （必填）
 * @returns
*/
async getCommonData(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCommonData({ url }, config);
        return data;
    } catch (error) {
        return utils.formatError('resourceBiz ~ getCommonData', error);
    }
}


/**
 * 获取/resource/api/projectdata/的json数据
 * @params url {string} /resource/api/projectdata/后面的url （必填）
 * @returns
*/
async getCommonData(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCommonData({ url }, config);
        return data;
    } catch (error) {
        return utils.formatError('resourceBiz ~ getCommonData', error);
    }
}

```

 