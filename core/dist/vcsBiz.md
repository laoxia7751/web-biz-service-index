// api 
``` js
// 获取符合查询条件的账号
getAccounts: (params, config) => this._getConfig(`/api/Accounts`, "get", params, config), 
// 创建账号
addAccounts: (params, config) => this._getConfig(`/api/Accounts`, "post", params, config), 
// 通过ID获取账号
getAccountsById: (params, config) => this._getConfig(`/api/Accounts/${params.id}`, "get", params, config), 
// 删除账号
deleteAccounts: (params, config) => this._getConfig(`/api/Accounts/${params.id}`, "delete", params, config), 
// 通过账号获取账号详情
getAccountsByName: (params, config) => this._getConfig(`/api/Accounts/name/${params.name}`, "get", params, config), 
// 获取指定id的会议
getConferencesById: (params, config) => this._getConfig(`/api/Conferences/${params.id}`, "get", params, config), 
// 结束会议
endConferences: (params, config) => this._getConfig(`/api/Conferences/${params.id}`, "delete", params, config), 
// 通过号码获取对应的会议
getConferencesLayoutById: (params, config) => this._getConfig(`/api/Conferences/number/${params.number}`, "get", params, config), 
// 通过会议号结束会议
endConferencesByNumber: (params, config) => this._getConfig(`/api/Conferences/number/${params.number}`, "delete", params, config), 
// 获取指定id的会议画面布局
getConferenceLayoutById: (params, config) => this._getConfig(`/api/Conferences/${params.id}/layout`, "get", params, config), 
// 设置会议画面布局
editConferenceLayout: (params, config) => this._getConfig(`/api/Conferences/${params.id}/layout`, "put", params, config), 
// 获取指定id的会议级联会议画面布局
getCascadeConferencesLayoutById: (params, config) => this._getConfig(`/api/Conferences/${params.id}/layout/cascade`, "get", params, config), 
// 设置会议级联画面布局
editCascadeConferencesLayout: (params, config) => this._getConfig(`/api/Conferences/${params.id}/layout/cascade`, "put", params, config), 
// 获取会议中的主持人列表
getConferencesPresenters: (params, config) => this._getConfig(`/api/Conferences/${params.id}/presenters`, "get", params, config), 
// 获取会议中的成员列表
getConferencesConventioneers: (params, config) => this._getConfig(`/api/Conferences/${params.id}/conventioneers`, "get", params, config), 
// 获取会议正在广播画面的成员
getConferencesBroadcaster: (params, config) => this._getConfig(`/api/Conferences/${params.id}/broadcaster`, "get", params, config), 
// 获取会议中隐藏画面的成员列表
getHideConventioneers: (params, config) => this._getConfig(`/api/Conferences/${params.id}/hide_conventioneers`, "get", params, config), 
// 获取会议的录制状态
getConferencesRecord: (params, config) => this._getConfig(`/api/Conferences/${params.id}/record`, "get", params, config), 
// 会议录制
recordConferences: (params, config) => this._getConfig(`/api/Conferences/${params.id}/record`, "put", params, config), 
// 获取会议的邀请信息
getConferencesInvitation: (params, config) => this._getConfig(`/api/Conferences/${params.id}/invitation`, "get", params, config), 
// 邀请电话入会
inviteMeetingByPhone: (params, config) => this._getConfig(`/api/Conferences/${params.id}/phone`, "put", params, config), 
// 邀请账号入会
inviteMeetingByAccount: (params, config) => this._getConfig(`/api/Conferences/${params.id}/account`, "put", params, config), 
// 邀请终端入会
inviteMeetingByTerminal: (params, config) => this._getConfig(`/api/Conferences/${params.id}/terminal`, "put", params, config), 
// 邀请Rtsp入会
inviteMeetingByRtsp: (params, config) => this._getConfig(`/api/Conferences/${params.id}/rtsp`, "put", params, config), 
// 邀请其他类型入会
inviteMeetingByOther: (params, config) => this._getConfig(`/api/Conferences/${params.id}/other`, "put", params, config), 
// 创建会议
addConferences: (params, config) => this._getConfig(`/api/Conferences`, "post", params, config), 
// 踢出指定成员
kickConventioneers: (params, config) => this._getConfig(`/api/Conferences/${params.id}/kick`, "put", params, config), 
// 对指定成员(取消)禁言
setConventioneersMute: (params, config) => this._getConfig(`/api/Conferences/${params.id}/mute`, "put", params, config), 
// 对指定成员(取消)静音
setConventioneersSilence: (params, config) => this._getConfig(`/api/Conferences/${params.id}/silence`, "put", params, config), 
// 对指定成员(取消)隔离
setConventioneersIsolate: (params, config) => this._getConfig(`/api/Conferences/${params.id}/isolate`, "put", params, config), 
// (取消)广播指定成员画面
setConventioneersBroadcast: (params, config) => this._getConfig(`/api/Conferences/${params.id}/broadcast`, "put", params, config), 
// (取消)隐藏指定成员画面
setConventioneersScreen: (params, config) => this._getConfig(`/api/Conferences/${params.id}/screen`, "put", params, config), 
// (取消)设置成员为级联会议室
editConferenceCascade: (params, config) => this._getConfig(`/api/Conferences/${params.id}/isCascade`, "put", params, config), 
// 设置会议画面默认布局
setConferencesDefaultLayout: (params, config) => this._getConfig(`/api/Conferences/${params.id}/layout/default`, "put", params, config), 
// (取消)设置会议字幕
setConferencesSubtitle: (params, config) => this._getConfig(`/api/Conferences/${params.id}/subtitle`, "put", params, config), 
// 设置会议主持人
openConferencesLive: (params, config) => this._getConfig(`/api/Conferences/${params.id}/presenter`, "put", params, config), 
// 开启会议直播
openConferenceLive: (params, config) => this._getConfig(`/api/Conferences/${params.id}/live`, "put", params, config), 
// 会议保活
keepaliveConferences: (params, config) => this._getConfig(`/api/Conferences/${params.id}/keepalive`, "put", params, config), 
// 会场改名
editConferenceName: (params, config) => this._getConfig(`/api/Conferences/${params.id}/reName`, "put", params, config), 
// 打开摄像头
openConferenceCamera: (params, config) => this._getConfig(`/api/Conferences/${params.id}/openCamera`, "put", params, config), 
// 关闭摄像头
closeConferenceCamera: (params, config) => this._getConfig(`/api/Conferences/${params.id}/closeCamera`, "put", params, config), 
// 设为焦点
setConferenceFocus: (params, config) => this._getConfig(`/api/Conferences/${params.id}/focus`, "put", params, config), 
// 获取MCU类型信息
getMcuType: (params, config) => this._getConfig(`/api/MCUData/type`, "get", params, config), 
// 获取符合查询条件的MCU
getMcuData: (params, config) => this._getConfig(`/api/MCUData`, "get", params, config), 
// 创建MCU
addMcuData: (params, config) => this._getConfig(`/api/MCUData`, "post", params, config), 
// 通过ID获取MCU
getMcuDataById: (params, config) => this._getConfig(`/api/MCUData/${params.id}`, "get", params, config), 
// 更新MCU
editMcuData: (params, config) => this._getConfig(`/api/MCUData/${params.id}`, "put", params, config), 
// 删除MCU
deleteMcuData: (params, config) => this._getConfig(`/api/MCUData/${params.id}`, "delete", params, config), 
// 获取默认的主平台
getDefaultPlatformData: (params, config) => this._getConfig(`/api/PlatformData/default`, "get", params, config), 
// 通过ID获取平台信息
getPlatformDataById: (params, config) => this._getConfig(`/api/PlatformData/type/${params.type}/${params.id}`, "get", params, config), 
// 通过IP获取平台信息
getPlatformDataByIp: (params, config) => this._getConfig(`/api/PlatformData/type/${params.type}/ip/${params.ip}`, "get", params, config), 
// 获取全部平台信息
getPlatformData: (params, config) => this._getConfig(`/api/PlatformData`, "get", params, config), 
// 获取全部邀请策略
getPlatformStrategy: (params, config) => this._getConfig(`/api/PlatformData/strategy`, "get", params, config), 
// 获取平台配置
getPlatformConfig: (params, config) => this._getConfig(`/api/PlatformData/config`, "get", params, config), 
// 通过条件查找录制文件
getRecordings: (params, config) => this._getConfig(`/api/Recordings`, "get", params, config), 
// 获取符合查询条件的终端和终端组
searchTerminalAndGroup: (params, config) => this._getConfig(`/api/Search`, "get", params, config), 
// 分页查询组织架构下的终端
getOrganizationTerminal: (params, config) => this._getConfig(`/api/TerminalOrganizations/${params.id}/terminals`, "get", params, config), 
// 批量查询组织架构下的终端
searchTerminalOrganizations: (params, config) => this._getConfig(`/api/TerminalOrganizations/terminals/batch`, "post", params, config), 
// 获取指定ID的组织架构
getOrganizationsById: (params, config) => this._getConfig(`/api/TerminalOrganizations/${params.id}`, "get", params, config), 
// 获取全部组织架构
getOrganizations: (params, config) => this._getConfig(`/api/TerminalOrganizations`, "get", params, config), 
// 获取根组织架构
getRootOrganizations: (params, config) => this._getConfig(`/api/TerminalOrganizations/root`, "get", params, config), 
// 获取组织架构下的子组织架构
getChildOrganizations: (params, config) => this._getConfig(`/api/TerminalOrganizations/${params.parentID}/children`, "get", params, config), 
// 获取符合查询条件的终端
getTerminals: (params, config) => this._getConfig(`/api/Terminals`, "get", params, config), 
// 创建终端
addTerminals: (params, config) => this._getConfig(`/api/Terminals`, "post", params, config), 
// 通过ID获取终端
getTerminalsById: (params, config) => this._getConfig(`/api/Terminals/${params.id}`, "get", params, config), 
// 更新终端
editTerminal: (params, config) => this._getConfig(`/api/Terminals/${params.id}`, "put", params, config), 
// 删除终端
deleteTerminals: (params, config) => this._getConfig(`/api/Terminals/${params.id}`, "delete", params, config), 
// 通过号码获取终端
getTerminalsByNumber: (params, config) => this._getConfig(`/api/Terminals/number/${params.number}`, "get", params, config), 
```

 // biz 
``` js
/**
 * 获取符合查询条件的账号
 * @params keyword {string} 模糊匹配关键字 
 * @params organization {string} 所属组织架构 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getAccounts(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAccounts(params,config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getAccounts', error);
    }
}


/**
 * 创建账号
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params name {string} 名称 
 * @params accountNum {string} 账号 
 * @params password {string} 密码，当密码为空时使用默认密码 
 * @params organizations {array} 账号所在的组织架构集合 
 * @params type {integer} 联系人类型0:H323,H323终端映射账号; 1:SIP,电话映射的账号; 2:User,联系人映射的账号; 3:RTSP,RTSP链接映射的账号;  
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @accountNum {string} 账号号码
 *    @organizations {array} 账号所在的组织架构集合
*/
async addAccounts(params = {}, config = {}) {
    try {
        const { data } = await this.api.addAccounts(params,config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ addAccounts', error);
    }
}


/**
 * 通过ID获取账号
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @accountNum {string} 账号号码
 *    @organizations {array} 账号所在的组织架构集合
*/
async getAccountsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAccountsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getAccountsById', error);
    }
}


/**
 * 删除账号
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
*/
async deleteAccounts({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteAccounts({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ deleteAccounts', error);
    }
}


/**
 * 通过账号获取账号详情
 * @params name {string}  （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @accountNum {string} 账号号码
 *    @organizations {array} 账号所在的组织架构集合
*/
async getAccountsByName({ name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getAccountsByName({name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getAccountsByName', error);
    }
}


/**
 * 获取指定id的会议
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} 会议ID
 *    @number {string} 会议室号
 *    @name {string} 会议名称
 *    @password {string} 会议密码
 *    @startTime {string} 会议开启时间
 *    @isEnableShared {boolean} 是否启用分享
 *    @sharedUrl {string} 分享观看的链接
 *    @isEnabledAutoRecording {boolean} 是否启用自动录制
*/
async getConferencesById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getConferencesById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getConferencesById', error);
    }
}


/**
 * 结束会议
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
*/
async endConferences({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.endConferences({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ endConferences', error);
    }
}


/**
 * 通过号码获取对应的会议
 * @params number {string}  （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} 会议ID
 *    @number {string} 会议室号
 *    @name {string} 会议名称
 *    @password {string} 会议密码
 *    @startTime {string} 会议开启时间
 *    @isEnableShared {boolean} 是否启用分享
 *    @sharedUrl {string} 分享观看的链接
 *    @isEnabledAutoRecording {boolean} 是否启用自动录制
*/
async getConferencesLayoutById({ number  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getConferencesLayoutById({number,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getConferencesLayoutById', error);
    }
}


/**
 * 通过会议号结束会议
 * @params number {string}  （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
*/
async endConferencesByNumber({ number  , ...params}, config = {}) {
    try {
        const { data } = await this.api.endConferencesByNumber({number,...params},{params:{number,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ endConferencesByNumber', error);
    }
}


/**
 * 获取指定id的会议画面布局
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} 布局ID
 *    @isEnable {boolean} 是否启用
 *    @mode {integer} 布局模式0:Equality,等分模式; 1:Presentation,主席模式; 2:SpeechExcitation,语音激励模式; 3:Exclusive,单方全屏; 
 *    @layoutType {integer} 画面布局类型1:One,单画面; 2:Two,两画面（等分）; 4:Four,四画面（等分）; 9:Nine,九画面（等分; 16:Sixteen,十六画面（等分）; 25:TwentyFive,二十五画面（等分）; 36:ThirtySix,三十六画面（等分）; 49:FortyNine,四十九画面（等分）; 50:OnePlusFour,五画面（1+4）; 80:OnePlusSeven,八画面（1+7）; 100:OnePlusNine,十画面（1+9）; 130:OnePlusThirteen,十三画面（1+12）; 170:OnePlusSixteen,十七画面（1+16）; 210:OnePlusTwenty,二十一画面（1+20）; 1000:TwoPlusEight,十画面（2+8）; 
 *    @videoRound {object} 视频轮询配置
 *    @isEnabledSelfView {boolean} 是否开启自视
 *    @isEnabledVoiceIncentive {boolean} 是否开启语音激励
 *    @applicationTargets {array} 布局应用对象
 *    @sourceMemberIDs {array} 在布局里显示画面的成员ID
 *    @appointScreens {array} 有固定布局的画面
*/
async getConferenceLayoutById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getConferenceLayoutById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getConferenceLayoutById', error);
    }
}


/**
 * 设置会议画面布局
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params layoutType {integer} 画面布局类型1:One,单画面; 2:Two,两画面（等分）; 4:Four,四画面（等分）; 9:Nine,九画面（等分; 16:Sixteen,十六画面（等分）; 25:TwentyFive,二十五画面（等分）; 36:ThirtySix,三十六画面（等分）; 49:FortyNine,四十九画面（等分）; 50:OnePlusFour,五画面（1+4）; 80:OnePlusSeven,八画面（1+7）; 100:OnePlusNine,十画面（1+9）; 130:OnePlusThirteen,十三画面（1+12）; 170:OnePlusSixteen,十七画面（1+16）; 210:OnePlusTwenty,二十一画面（1+20）; 1000:TwoPlusEight,十画面（2+8）;  
 * @params appointScreens {array} 有固定布局的画面 
 * @params layoutApplicationTargets {array} 布局应用对象 
 * @params sourceMemberIDs {array} 布局显示对象集合 
 * @params videoRound {undefined}  
 * @returns
*/
async editConferenceLayout({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editConferenceLayout({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ editConferenceLayout', error);
    }
}


/**
 * 获取指定id的会议级联会议画面布局
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} 布局ID
 *    @isEnable {boolean} 是否启用
 *    @mode {integer} 布局模式0:Equality,等分模式; 1:Presentation,主席模式; 2:SpeechExcitation,语音激励模式; 3:Exclusive,单方全屏; 
 *    @layoutType {integer} 画面布局类型1:One,单画面; 2:Two,两画面（等分）; 4:Four,四画面（等分）; 9:Nine,九画面（等分; 16:Sixteen,十六画面（等分）; 25:TwentyFive,二十五画面（等分）; 36:ThirtySix,三十六画面（等分）; 49:FortyNine,四十九画面（等分）; 50:OnePlusFour,五画面（1+4）; 80:OnePlusSeven,八画面（1+7）; 100:OnePlusNine,十画面（1+9）; 130:OnePlusThirteen,十三画面（1+12）; 170:OnePlusSixteen,十七画面（1+16）; 210:OnePlusTwenty,二十一画面（1+20）; 1000:TwoPlusEight,十画面（2+8）; 
 *    @videoRound {object} 视频轮询配置
 *    @isEnabledSelfView {boolean} 是否开启自视
 *    @isEnabledVoiceIncentive {boolean} 是否开启语音激励
 *    @applicationTargets {array} 布局应用对象
 *    @sourceMemberIDs {array} 在布局里显示画面的成员ID
 *    @appointScreens {array} 有固定布局的画面
*/
async getCascadeConferencesLayoutById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCascadeConferencesLayoutById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getCascadeConferencesLayoutById', error);
    }
}


/**
 * 设置会议级联画面布局
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params layoutType {integer} 画面布局类型1:One,单画面; 2:Two,两画面（等分）; 4:Four,四画面（等分）; 9:Nine,九画面（等分; 16:Sixteen,十六画面（等分）; 25:TwentyFive,二十五画面（等分）; 36:ThirtySix,三十六画面（等分）; 49:FortyNine,四十九画面（等分）; 50:OnePlusFour,五画面（1+4）; 80:OnePlusSeven,八画面（1+7）; 100:OnePlusNine,十画面（1+9）; 130:OnePlusThirteen,十三画面（1+12）; 170:OnePlusSixteen,十七画面（1+16）; 210:OnePlusTwenty,二十一画面（1+20）; 1000:TwoPlusEight,十画面（2+8）;  
 * @params appointScreens {array} 有固定布局的画面 
 * @params layoutApplicationTargets {array} 布局应用对象 
 * @params sourceMemberIDs {array} 布局显示对象集合 
 * @returns
*/
async editCascadeConferencesLayout({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editCascadeConferencesLayout({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ editCascadeConferencesLayout', error);
    }
}


/**
 * 获取会议中的主持人列表
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} 成员ID
 *    @name {string} 成员名称
 *    @type {integer} 参会成员类型0:Phone,电话; 1:Account,账号; 2:Terminal,H323终端; 3:Rtsp,Rtsp链接; 4:Other,其他设备; 
 *    @phone {string} 用户加入会议使用的号码
 *    @requestUri {string} 用户入会使用的Uri
 *    @conferenceID {string} 所在会议室
 *    @isPresenter {boolean} 是否为主持人
 *    @isMute {boolean} 是否被禁言
 *    @isSilence {boolean} 是否被静音
 *    @isBroadcast {boolean} 是否在广播中
 *    @isHideScreen {boolean} 是否画面被隐藏
*/
async getConferencesPresenters({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getConferencesPresenters({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getConferencesPresenters', error);
    }
}


/**
 * 获取会议中的成员列表
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} 成员ID
 *    @name {string} 成员名称
 *    @type {integer} 参会成员类型0:Phone,电话; 1:Account,账号; 2:Terminal,H323终端; 3:Rtsp,Rtsp链接; 4:Other,其他设备; 
 *    @phone {string} 用户加入会议使用的号码
 *    @requestUri {string} 用户入会使用的Uri
 *    @conferenceID {string} 所在会议室
 *    @isPresenter {boolean} 是否为主持人
 *    @isMute {boolean} 是否被禁言
 *    @isSilence {boolean} 是否被静音
 *    @isBroadcast {boolean} 是否在广播中
 *    @isHideScreen {boolean} 是否画面被隐藏
*/
async getConferencesConventioneers({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getConferencesConventioneers({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getConferencesConventioneers', error);
    }
}


/**
 * 获取会议正在广播画面的成员
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} 成员ID
 *    @name {string} 成员名称
 *    @type {integer} 参会成员类型0:Phone,电话; 1:Account,账号; 2:Terminal,H323终端; 3:Rtsp,Rtsp链接; 4:Other,其他设备; 
 *    @phone {string} 用户加入会议使用的号码
 *    @requestUri {string} 用户入会使用的Uri
 *    @conferenceID {string} 所在会议室
 *    @isPresenter {boolean} 是否为主持人
 *    @isMute {boolean} 是否被禁言
 *    @isSilence {boolean} 是否被静音
 *    @isBroadcast {boolean} 是否在广播中
 *    @isHideScreen {boolean} 是否画面被隐藏
*/
async getConferencesBroadcaster({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getConferencesBroadcaster({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getConferencesBroadcaster', error);
    }
}


/**
 * 获取会议中隐藏画面的成员列表
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @returns
 *    @id {string} 成员ID
 *    @name {string} 成员名称
 *    @type {integer} 参会成员类型0:Phone,电话; 1:Account,账号; 2:Terminal,H323终端; 3:Rtsp,Rtsp链接; 4:Other,其他设备; 
 *    @phone {string} 用户加入会议使用的号码
 *    @requestUri {string} 用户入会使用的Uri
 *    @conferenceID {string} 所在会议室
 *    @isPresenter {boolean} 是否为主持人
 *    @isMute {boolean} 是否被禁言
 *    @isSilence {boolean} 是否被静音
 *    @isBroadcast {boolean} 是否在广播中
 *    @isHideScreen {boolean} 是否画面被隐藏
*/
async getHideConventioneers({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getHideConventioneers({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getHideConventioneers', error);
    }
}


/**
 * 获取会议的录制状态
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @status {undefined} 
 *    @lastStopDuration {integer} 上一次暂停/停止时的录制时长，单位秒
 *    @lastStartTime {string} 上一次开始/继续录制的时间点(0时区)
*/
async getConferencesRecord({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getConferencesRecord({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getConferencesRecord', error);
    }
}


/**
 * 会议录制
 * @params id {string} id （必填）
 * @params OperationType {undefined} 录制操作 
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
*/
async recordConferences({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.recordConferences({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ recordConferences', error);
    }
}


/**
 * 获取会议的邀请信息
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @sfbJoinUrl {string} 匿名入会链接
 *    @h323JoinIntranetUrl {string} H323入会内网链接
 *    @h323JoinExternalUrl {string} H323入会外网链接
 *    @liveBroadcastJoinUrl {string} 直播入会链接
 *    @webRTCJoinIntranetUrl {string} webRTC入会内网链接
 *    @webRTCJoinExternaUrl {string} webRTC入会外网链接
 *    @sipJoinIntranetUrl {string} SIP入会内网链接
 *    @sipJoinExternaUrl {string} SIP入会外网链接
*/
async getConferencesInvitation({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getConferencesInvitation({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getConferencesInvitation', error);
    }
}


/**
 * 邀请电话入会
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params name {string} 电话号码 
 * @params number {string} 电话号码 
 * @returns
*/
async inviteMeetingByPhone({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.inviteMeetingByPhone({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ inviteMeetingByPhone', error);
    }
}


/**
 * 邀请账号入会
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} id 
 * @params name {string} 名称 
 * @returns
*/
async inviteMeetingByAccount({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.inviteMeetingByAccount({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ inviteMeetingByAccount', error);
    }
}


/**
 * 邀请终端入会
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params name {string} 终端名称 
 * @params number {string} 终端号码 
 * @params password {string} 终端密码 
 * @params ip {string} IP 
 * @params port {integer} 端口 
 * @returns
*/
async inviteMeetingByTerminal({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.inviteMeetingByTerminal({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ inviteMeetingByTerminal', error);
    }
}


/**
 * 邀请Rtsp入会
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params url {string} RTSP的Url 
 * @params id {string} id（可为空） 
 * @params name {string} 名称（可为空） 
 * @params rtspProtocolType {undefined}  
 * @returns
*/
async inviteMeetingByRtsp({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.inviteMeetingByRtsp({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ inviteMeetingByRtsp', error);
    }
}


/**
 * 邀请其他类型入会
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} id(设备的号码) 
 * @params name {string} 名称 
 * @params type {integer} 协议类型0:Sip; 1:H323; 2:RTSP; 3:RTMP;  
 * @returns
*/
async inviteMeetingByOther({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.inviteMeetingByOther({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ inviteMeetingByOther', error);
    }
}


/**
 * 创建会议
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params name {string} 会议名称 
 * @params password {string} 会议密码 
 * @params number {string} 自定义的会议室号码 
 * @params presenter {object} 账号 
 * @params jointPresenters {array} 联席主持人 
 * @params isEnabledSelfView {boolean} 是否显示本地画面 
 * @params isAutoRecording {boolean} 是否自动录制 
 * @params isEnabledMute {boolean} 是否入会自动禁言 
 * @params description {string} 描述 
 * @returns
 *    @id {string} 会议ID
 *    @number {string} 会议室号
 *    @name {string} 会议名称
 *    @password {string} 会议密码
 *    @startTime {string} 会议开启时间
 *    @isEnableShared {boolean} 是否启用分享
 *    @sharedUrl {string} 分享观看的链接
 *    @isEnabledAutoRecording {boolean} 是否启用自动录制
*/
async addConferences(params = {}, config = {}) {
    try {
        const { data } = await this.api.addConferences(params,config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ addConferences', error);
    }
}


/**
 * 踢出指定成员
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} 成员ID 
 * @returns
*/
async kickConventioneers({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.kickConventioneers({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ kickConventioneers', error);
    }
}


/**
 * 对指定成员(取消)禁言
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} 成员ID 
 * @params isMute {boolean} 是否禁言 
 * @returns
*/
async setConventioneersMute({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.setConventioneersMute({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ setConventioneersMute', error);
    }
}


/**
 * 对指定成员(取消)静音
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} 成员ID 
 * @params isSilence {boolean} 是否静音 
 * @returns
*/
async setConventioneersSilence({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.setConventioneersSilence({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ setConventioneersSilence', error);
    }
}


/**
 * 对指定成员(取消)隔离
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} 成员ID 
 * @params isIsolate {boolean} 是否静音 
 * @returns
*/
async setConventioneersIsolate({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.setConventioneersIsolate({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ setConventioneersIsolate', error);
    }
}


/**
 * (取消)广播指定成员画面
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} 成员ID 
 * @returns
*/
async setConventioneersBroadcast({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.setConventioneersBroadcast({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ setConventioneersBroadcast', error);
    }
}


/**
 * (取消)隐藏指定成员画面
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} 成员ID 
 * @params isHideScreen {boolean} 是否隐藏画面 
 * @returns
*/
async setConventioneersScreen({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.setConventioneersScreen({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ setConventioneersScreen', error);
    }
}


/**
 * (取消)设置成员为级联会议室
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} 成员ID 
 * @params isCascadeConference {boolean} 是否为级联的会议室 
 * @returns
*/
async editConferenceCascade({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editConferenceCascade({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ editConferenceCascade', error);
    }
}


/**
 * 设置会议画面默认布局
 * @params id {string} id （必填）
 * @returns
*/
async setConferencesDefaultLayout({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.setConferencesDefaultLayout({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ setConferencesDefaultLayout', error);
    }
}


/**
 * (取消)设置会议字幕
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params isEnable {boolean} 是否启用 
 * @params content {string} 字幕内容 
 * @params fontSize {undefined}  
 * @params position {integer} 字幕显示位置0:Centered; 1:UpperLeft; 2:UpperMiddle; 3:UpperRight; 4:BottomLeft; 5:BottomMiddle; 6:BottomRight;  
 * @params fontColor {integer} 字幕相关颜色0:Black,黑色; 1:Red,红色; 2:Green,绿色; 3:Yellow,黄色; 4:Blue,蓝色; 5:Magenta,品红; 6:BlueGreen,蓝绿; 7:White,白色; 8:Transparent,透明;  
 * @params backgroundColor {integer} 字幕相关颜色0:Black,黑色; 1:Red,红色; 2:Green,绿色; 3:Yellow,黄色; 4:Blue,蓝色; 5:Magenta,品红; 6:BlueGreen,蓝绿; 7:White,白色; 8:Transparent,透明;  
 * @params isScroll {boolean} 字幕是否滚动 
 * @returns
*/
async setConferencesSubtitle({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.setConferencesSubtitle({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ setConferencesSubtitle', error);
    }
}


/**
 * 设置会议主持人
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} 成员ID 
 * @params isSetPresenter {boolean} 是否设置为主持人 
 * @returns
*/
async openConferencesLive({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.openConferencesLive({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ openConferencesLive', error);
    }
}


/**
 * 开启会议直播
 * @params id {string} id （必填）
 * @params IsEnable {boolean} 是否开启会议直播 
 * @params Address {string} 直播地址 
 * @params Resolution {undefined} 直播分辨率 
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
*/
async openConferenceLive({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.openConferenceLive({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ openConferenceLive', error);
    }
}


/**
 * 会议保活
 * @params id {string} id （必填）
 * @params platformId {string} 平台Id 
 * @returns
*/
async keepaliveConferences({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.keepaliveConferences({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ keepaliveConferences', error);
    }
}


/**
 * 会场改名
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} 成员ID 
 * @params displayName {string} 会场名称 （必填）
 * @returns
*/
async editConferenceName({ id, displayName  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editConferenceName({id, displayName,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ editConferenceName', error);
    }
}


/**
 * 打开摄像头
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} 成员ID 
 * @returns
*/
async openConferenceCamera({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.openConferenceCamera({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ openConferenceCamera', error);
    }
}


/**
 * 关闭摄像头
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} 成员ID 
 * @returns
*/
async closeConferenceCamera({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.closeConferenceCamera({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ closeConferenceCamera', error);
    }
}


/**
 * 设为焦点
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params id {string} 成员ID 
 * @returns
*/
async setConferenceFocus({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.setConferenceFocus({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ setConferenceFocus', error);
    }
}


/**
 * 获取MCU类型信息
 * @returns
 *    @type {integer} 视频会议平台类型0:Yealink,亿联会议平台2.X; 1:Tencent,腾讯会议平台; 2:YealinkPlus,亿联会议平台4.X; 3:GMeet,GMeet会议平台; 
 *    @name {string} 平台类型名称
*/
async getMcuType(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMcuType(params,config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getMcuType', error);
    }
}


/**
 * 获取符合查询条件的MCU
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getMcuData(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMcuData(params,config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getMcuData', error);
    }
}


/**
 * 创建MCU
 * @params type {integer} 视频会议平台类型0:Yealink,亿联会议平台2.X; 1:Tencent,腾讯会议平台; 2:YealinkPlus,亿联会议平台4.X; 3:GMeet,GMeet会议平台;  
 * @params name {string} MCU名称 （必填）
 * @params accessKeyID {string} 授权码 （必填）
 * @params accessKeySecret {string} 秘钥 （必填）
 * @params domain {string} 拉流地址 （必填）
 * @params description {string} 描述 
 * @params extension {undefined} MCU拓展信息 
 * @returns
 *    @id {string} 标识
 *    @type {integer} 视频会议平台类型0:Yealink,亿联会议平台2.X; 1:Tencent,腾讯会议平台; 2:YealinkPlus,亿联会议平台4.X; 3:GMeet,GMeet会议平台; 
 *    @name {string} MCU名称
 *    @accessKeyID {string} 授权码
 *    @accessKeySecret {string} 秘钥
 *    @domain {string} IP地址
 *    @description {string} 描述
 *    @extension {undefined} 拓展信息
*/
async addMcuData({ name, accessKeyID, accessKeySecret, domain  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addMcuData({name, accessKeyID, accessKeySecret, domain,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ addMcuData', error);
    }
}


/**
 * 通过ID获取MCU
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 标识
 *    @type {integer} 视频会议平台类型0:Yealink,亿联会议平台2.X; 1:Tencent,腾讯会议平台; 2:YealinkPlus,亿联会议平台4.X; 3:GMeet,GMeet会议平台; 
 *    @name {string} MCU名称
 *    @accessKeyID {string} 授权码
 *    @accessKeySecret {string} 秘钥
 *    @domain {string} IP地址
 *    @description {string} 描述
 *    @extension {undefined} 拓展信息
*/
async getMcuDataById(id, config = {}) {
    try {
        const { data } = await this.api.getMcuDataById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getMcuDataById', error);
    }
}


/**
 * 更新MCU
 * @params id {string} id （必填）
 * @params type {integer} 视频会议平台类型0:Yealink,亿联会议平台2.X; 1:Tencent,腾讯会议平台; 2:YealinkPlus,亿联会议平台4.X; 3:GMeet,GMeet会议平台;  
 * @params name {string} MCU名称 （必填）
 * @params accessKeyID {string} 授权码 （必填）
 * @params accessKeySecret {string} 秘钥 （必填）
 * @params domain {string} 拉流地址 （必填）
 * @params description {string} 描述 
 * @params extension {undefined} MCU拓展信息 
 * @returns
*/
async editMcuData({ id, name, accessKeyID, accessKeySecret, domain  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editMcuData({id, name, accessKeyID, accessKeySecret, domain,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ editMcuData', error);
    }
}


/**
 * 删除MCU
 * @params id {string} id （必填）
 * @returns
*/
async deleteMcuData(id, config = {}) {
    try {
        const { data } = await this.api.deleteMcuData({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ deleteMcuData', error);
    }
}


/**
 * 获取默认的主平台
 * @returns
 *    @type {integer} 视频会议平台类型0:Yealink,亿联会议平台2.X; 1:Tencent,腾讯会议平台; 2:YealinkPlus,亿联会议平台4.X; 3:GMeet,GMeet会议平台; 
 *    @id {string} 平台ID
 *    @name {string} 平台名称
*/
async getDefaultPlatformData(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDefaultPlatformData(params,config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getDefaultPlatformData', error);
    }
}


/**
 * 通过ID获取平台信息
 * @params type {undefined}  （必填）
 * @params id {string} id （必填）
 * @returns
 *    @type {integer} 视频会议平台类型0:Yealink,亿联会议平台2.X; 1:Tencent,腾讯会议平台; 2:YealinkPlus,亿联会议平台4.X; 3:GMeet,GMeet会议平台; 
 *    @id {string} 平台ID
 *    @name {string} 平台名称
*/
async getPlatformDataById({ type, id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPlatformDataById({type, id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getPlatformDataById', error);
    }
}


/**
 * 通过IP获取平台信息
 * @params type {undefined}  （必填）
 * @params ip {string}  （必填）
 * @returns
 *    @type {integer} 视频会议平台类型0:Yealink,亿联会议平台2.X; 1:Tencent,腾讯会议平台; 2:YealinkPlus,亿联会议平台4.X; 3:GMeet,GMeet会议平台; 
 *    @id {string} 平台ID
 *    @name {string} 平台名称
*/
async getPlatformDataByIp({ type, ip  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPlatformDataByIp({type, ip,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getPlatformDataByIp', error);
    }
}


/**
 * 获取全部平台信息
 * @returns
 *    @type {integer} 视频会议平台类型0:Yealink,亿联会议平台2.X; 1:Tencent,腾讯会议平台; 2:YealinkPlus,亿联会议平台4.X; 3:GMeet,GMeet会议平台; 
 *    @id {string} 平台ID
 *    @name {string} 平台名称
*/
async getPlatformData(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPlatformData(params,config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getPlatformData', error);
    }
}


/**
 * 获取全部邀请策略
 * @returns
 *    @isEnable {boolean} 是否启用
 *    @judgmentRule {string} 策略的判断规则
 *    @strategyType {integer} 策略类型0:WeChat,微信邀请策略; 1:QQ,QQ邀请策略; 2:Phone,电话邀请策略; 3:ContactCustomFiled,自定义字段邀请策略; 
 *    @platform {object} 平台信息
*/
async getPlatformStrategy(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPlatformStrategy(params,config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getPlatformStrategy', error);
    }
}


/**
 * 获取平台配置
 * @returns
 *    @data {undefined} 配置对象-VideoConferenceServiceConfigs
*/
async getPlatformConfig(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPlatformConfig(params,config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getPlatformConfig', error);
    }
}


/**
 * 通过条件查找录制文件
 * @params keyword {string} 模糊匹配关键字 
 * @params StartTime {string} 开始时间 （必填）
 * @params EndTime {string} 结束时间 （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getRecordings({ StartTime, EndTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getRecordings({StartTime, EndTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getRecordings', error);
    }
}


/**
 * 获取符合查询条件的终端和终端组
 * @params keyword {string} 模糊匹配关键字 （必填）
 * @params MaxTotalCount {integer} 最多查询总数 默认：50 
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @terminals {object} 分页查询结果
 *    @groups {object} 分页查询结果
*/
async searchTerminalAndGroup({ keyword  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchTerminalAndGroup({keyword,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ searchTerminalAndGroup', error);
    }
}


/**
 * 分页查询组织架构下的终端
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getOrganizationTerminal({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getOrganizationTerminal({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getOrganizationTerminal', error);
    }
}


/**
 * 批量查询组织架构下的终端
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params organizationIds {array} 组id （必填）
 * @returns
 *    @id {string} 用户ID，即staffId
 *    @name {string} 名称
 *    @type {integer} 终端类型0:H323,H323终端; 1:SFB,SFB终端; 2:SIP,SIP终端; 3:RTSP,RTSP虚拟的终端; 4:RTMP,RTMP虚拟的终端; -1:All,全部类型; 
 *    @miniOrganization {object} 组织架构简略信息
 *    @number {string} 号码
 *    @isOnline {boolean} 是否在线
*/
async searchTerminalOrganizations({ organizationIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchTerminalOrganizations({organizationIds,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ searchTerminalOrganizations', error);
    }
}


/**
 * 获取指定ID的组织架构
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @parentID {string} 上级组织架构ID
 *    @index {integer} 序号
 *    @isLeaf {boolean} 是否叶子节点
 *    @totalCount {integer} 子终端数量（统计子子孙孙节点数量）
*/
async getOrganizationsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getOrganizationsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getOrganizationsById', error);
    }
}


/**
 * 获取全部组织架构
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @parentID {string} 上级组织架构ID
 *    @index {integer} 序号
 *    @isLeaf {boolean} 是否叶子节点
 *    @totalCount {integer} 子终端数量（统计子子孙孙节点数量）
*/
async getOrganizations(params = {}, config = {}) {
    try {
        const { data } = await this.api.getOrganizations(params,config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getOrganizations', error);
    }
}


/**
 * 获取根组织架构
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @parentID {string} 上级组织架构ID
 *    @index {integer} 序号
 *    @isLeaf {boolean} 是否叶子节点
 *    @totalCount {integer} 子终端数量（统计子子孙孙节点数量）
*/
async getRootOrganizations(params = {}, config = {}) {
    try {
        const { data } = await this.api.getRootOrganizations(params,config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getRootOrganizations', error);
    }
}


/**
 * 获取组织架构下的子组织架构
 * @params parentID {string} parentID （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @parentID {string} 上级组织架构ID
 *    @index {integer} 序号
 *    @isLeaf {boolean} 是否叶子节点
 *    @totalCount {integer} 子终端数量（统计子子孙孙节点数量）
*/
async getChildOrganizations({ parentID  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getChildOrganizations({parentID,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getChildOrganizations', error);
    }
}


/**
 * 获取符合查询条件的终端
 * @params keyword {string} 模糊匹配关键字 
 * @params type {undefined} 查找的终端类型 
 * @params organization {string} 所属组织架构 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @totalCount {integer} 数据总条数
 *    @records {array} 数据记录
*/
async getTerminals(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTerminals(params,config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getTerminals', error);
    }
}


/**
 * 创建终端
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params name {string} 名称 （必填）
 * @params type {integer} 终端类型0:H323,H323终端; 1:SFB,SFB终端; 2:SIP,SIP终端; 3:RTSP,RTSP虚拟的终端; 4:RTMP,RTMP虚拟的终端; -1:All,全部类型;  
 * @params organizationId {string} 所属分组 
 * @params number {string} 终端号码 （必填）
 * @returns
 *    @id {string} 用户ID，即staffId
 *    @name {string} 名称
 *    @type {integer} 终端类型0:H323,H323终端; 1:SFB,SFB终端; 2:SIP,SIP终端; 3:RTSP,RTSP虚拟的终端; 4:RTMP,RTMP虚拟的终端; -1:All,全部类型; 
 *    @miniOrganization {object} 组织架构简略信息
 *    @number {string} 号码
 *    @isOnline {boolean} 是否在线
*/
async addTerminals({ name, number  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addTerminals({name, number,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ addTerminals', error);
    }
}


/**
 * 通过ID获取终端
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} 用户ID，即staffId
 *    @name {string} 名称
 *    @type {integer} 终端类型0:H323,H323终端; 1:SFB,SFB终端; 2:SIP,SIP终端; 3:RTSP,RTSP虚拟的终端; 4:RTMP,RTMP虚拟的终端; -1:All,全部类型; 
 *    @miniOrganization {object} 组织架构简略信息
 *    @number {string} 号码
 *    @isOnline {boolean} 是否在线
*/
async getTerminalsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTerminalsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getTerminalsById', error);
    }
}


/**
 * 更新终端
 * @params id {string} id （必填）
 * @params platformID {string} 平台id（不填使用默认平台） 
 * @params name {string} 名称 （必填）
 * @params type {integer} 终端类型0:H323,H323终端; 1:SFB,SFB终端; 2:SIP,SIP终端; 3:RTSP,RTSP虚拟的终端; 4:RTMP,RTMP虚拟的终端; -1:All,全部类型;  
 * @params organizationId {string} 所属分组 
 * @params number {string} 终端号码 （必填）
 * @returns
*/
async editTerminal({ id, name, number  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editTerminal({id, name, number,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ editTerminal', error);
    }
}


/**
 * 删除终端
 * @params id {string} id （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
*/
async deleteTerminals({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteTerminals({id,...params},{params:{id,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ deleteTerminals', error);
    }
}


/**
 * 通过号码获取终端
 * @params number {string}  （必填）
 * @params platformId {string} 平台id（不填使用默认平台） 
 * @returns
 *    @id {string} 用户ID，即staffId
 *    @name {string} 名称
 *    @type {integer} 终端类型0:H323,H323终端; 1:SFB,SFB终端; 2:SIP,SIP终端; 3:RTSP,RTSP虚拟的终端; 4:RTMP,RTMP虚拟的终端; -1:All,全部类型; 
 *    @miniOrganization {object} 组织架构简略信息
 *    @number {string} 号码
 *    @isOnline {boolean} 是否在线
*/
async getTerminalsByNumber({ number  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getTerminalsByNumber({number,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('vcsBiz ~ getTerminalsByNumber', error);
    }
}

```

 