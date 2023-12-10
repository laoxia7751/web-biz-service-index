// api 
``` js
// 文字转语音
textToSpeech: (params, config) => this._getConfig(`/api/UniformSpeech`, "post", params, config), 
// 通过语音名称列表
getVoiceNames: (params, config) => this._getConfig(`/api/UniformSpeech/voicenames`, "get", params, config), 
// 通过语音信息列表
getVoiceInfos: (params, config) => this._getConfig(`/api/UniformSpeech/voiceinfos`, "get", params, config), 
```

 // biz 
``` js
/**
 * 文字转语音
 * @params text {string} 需要转换的文字 （必填）
 * @params volume {integer} 音量 
 * @params speed {integer} 速度 
 * @params voiceName {string} 语音名称 
 * @params rate {integer} 采样率 
 * @params lang {string} 语言 
 * @returns
 *    @id {string} 转换Id
 *    @filePath {string} 转换后的语音文件相对路径
 *    @text {string} 转语音的文字
*/
async textToSpeech({ text  , ...params}, config = {}) {
    try {
        const { data } = await this.api.textToSpeech({text,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('cgsBiz ~ textToSpeech', error);
    }
}


/**
 * 通过语音名称列表
 * @returns
*/
async getVoiceNames(params = {}, config = {}) {
    try {
        const { data } = await this.api.getVoiceNames(params,config);
        return data;
    } catch (error) {
        return utils.formatError('cgsBiz ~ getVoiceNames', error);
    }
}


/**
 * 通过语音信息列表
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @voiceAge {integer} 
 *    @voiceGender {integer} 
 *    @culture {string} 
 *    @description {string} 
*/
async getVoiceInfos(params = {}, config = {}) {
    try {
        const { data } = await this.api.getVoiceInfos(params,config);
        return data;
    } catch (error) {
        return utils.formatError('cgsBiz ~ getVoiceInfos', error);
    }
}

```

 