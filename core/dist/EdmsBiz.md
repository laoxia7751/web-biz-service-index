// api 
``` js
// 预约会议
addAppointmentsConference: (params, config) => this._getConfig(`/api/Appointments/conference`, "post", params, config), 
// 获取预约列表
getAppointmentsConference: (params, config) => this._getConfig(`/api/Appointments/conference`, "get", params, config), 
// 获取预约
getAppointmentsConferenceById: (params, config) => this._getConfig(`/api/Appointments/conference/${params.id}`, "get", params, config), 
// 更新预约
editAppointmentsConference: (params, config) => this._getConfig(`/api/Appointments/conference/${params.id}`, "put", params, config), 
// 取消预约
deleteAppointmentsConference: (params, config) => this._getConfig(`/api/Appointments/conference/${params.id}`, "delete", params, config), 
// 预约语音通知
addAppointmentsVoiceNotify: (params, config) => this._getConfig(`/api/Appointments/voice_notify`, "post", params, config), 
// 获取预约通知
getAppointmentsVoiceNotify: (params, config) => this._getConfig(`/api/Appointments/voice_notify`, "get", params, config), 
// 获取语音通知
getAppointmentsVoiceNotifyById: (params, config) => this._getConfig(`/api/Appointments/voice_notify/${params.id}`, "get", params, config), 
// 更新预约通知
editSingleAppointmentsVoiceNotify: (params, config) => this._getConfig(`/api/Appointments/voice_notify/${params.id}`, "put", params, config), 
// 取消预约通知
deleteAppointmentsVoiceNotify: (params, config) => this._getConfig(`/api/Appointments/voice_notify/${params.id}`, "delete", params, config), 
// 修改单次通知
editAppointmentsVoiceNotifySingle: (params, config) => this._getConfig(`/api/Appointments/voice_notify/${params.id}/single`, "put", params, config), 
// 获取语音广播
getBroadcastById: (params, config) => this._getConfig(`/api/Broadcasts/${params.id}`, "get", params, config), 
// 结束指定的广播组
closeBroadcastGroup: (params, config) => this._getConfig(`/api/Broadcasts/${params.id}`, "delete", params, config), 
// 创建语音广播
addBroadcast: (params, config) => this._getConfig(`/api/Broadcasts`, "post", params, config), 
// 获取广播组
getBroadcastGroup: (params, config) => this._getConfig(`/api/Broadcasts`, "get", params, config), 
// 获取广播组成员
getBroadcastGroupMembers: (params, config) => this._getConfig(`/api/Broadcasts/${params.id}/members`, "get", params, config), 
// 呼叫
callBiz: (params, config) => this._getConfig(`/api/CallBiz/call_out`, "put", params, config), 
// 强挂指定号码
forcedNumber: (params, config) => this._getConfig(`/api/CallBiz/forced_hook`, "put", params, config), 
// 接听排队呼叫
answerQueueCall: (params, config) => this._getConfig(`/api/CallBiz/answer`, "put", params, config), 
// 获取所有的上下文信息
getClientContext: (params, config) => this._getConfig(`/api/ClientContext`, "get", params, config), 
// 踢出当前登录的用户
kickOutUser: (params, config) => this._getConfig(`/api/ClientContext/kick_out/${params.type}`, "put", params, config), 
// 获取语音会议
getConferenceById: (params, config) => this._getConfig(`/api/Conferences/${params.id}`, "get", params, config), 
// 结束指定会议
closeConference: (params, config) => this._getConfig(`/api/Conferences/${params.id}`, "delete", params, config), 
// 创建会议室
addConference: (params, config) => this._getConfig(`/api/Conferences`, "post", params, config), 
// 获取全部会议信息
getConference: (params, config) => this._getConfig(`/api/Conferences`, "get", params, config), 
// 切换会议模式
changeConferenceMode: (params, config) => this._getConfig(`/api/Conferences/${params.id}/mode`, "put", params, config), 
// 获取会议内的成员信息
getConferenceMember: (params, config) => this._getConfig(`/api/Conferences/${params.id}/members`, "get", params, config), 
// 获取所有的线路信息
getPhoneLines: (params, config) => this._getConfig(`/api/DataRequestBiz/phonelines`, "get", params, config), 
// 按条件查询会议记录
getConferenceRecord: (params, config) => this._getConfig(`/api/DataRequestBiz/conference_record`, "get", params, config), 
// 通过会议ID获取对应的会议记录
getConferenceRecordById: (params, config) => this._getConfig(`/api/DataRequestBiz/conference_record/${params.id}`, "get", params, config), 
// 按条件查询通话记录
getCallRecord: (params, config) => this._getConfig(`/api/DataRequestBiz/call_record`, "get", params, config), 
// 给通话记录添加录制视频id
addVideoIdForCallRecord: (params, config) => this._getConfig(`/api/DataRequestBiz/call_record/call_video_id`, "put", params, config), 
// 通过会议ID获取其对应的通话记录
getCallRecordByConferenceId: (params, config) => this._getConfig(`/api/DataRequestBiz/call_record/conference`, "get", params, config), 
// 分页获取通话信息
getCalling: (params, config) => this._getConfig(`/api/DataRequestBiz/calling`, "get", params, config), 
// 分页获取队列
getQueue: (params, config) => this._getConfig(`/api/DataRequestBiz/queue`, "get", params, config), 
// 分页查询电话
getPhones: (params, config) => this._getConfig(`/api/DataRequestBiz/phones`, "get", params, config), 
// 分页查询外线电话
getThunkPhones: (params, config) => this._getConfig(`/api/DataRequestBiz/thunk_phones`, "get", params, config), 
// 更新电话位置
updatePhoneLocation: (params, config) => this._getConfig(`/api/DataRequestBiz/phones/${params.phoneNumber}/location`, "put", params, config), 
// 按条件查询操作日志
getOperationLog: (params, config) => this._getConfig(`/api/DataRequestBiz/operation_log`, "get", params, config), 
// 根据条件查询传真
getFaxList: (params, config) => this._getConfig(`/api/Faxes`, "get", params, config), 
// 发送传真
sendFax: (params, config) => this._getConfig(`/api/Faxes`, "post", params, config), 
// 获取指定传真
getFaxInfoById: (params, config) => this._getConfig(`/api/Faxes/${params.id}`, "get", params, config), 
// 将传真重新发送
resendFax: (params, config) => this._getConfig(`/api/Faxes/${params.id}/resend`, "put", params, config), 
// 分页获取传真草稿
getDraftFaxList: (params, config) => this._getConfig(`/api/Faxes/draft`, "get", params, config), 
// 将传真保存至草稿箱
saveFaxToDraft: (params, config) => this._getConfig(`/api/Faxes/draft`, "post", params, config), 
// 获取指定的传真草稿
getDraftFaxInfoById: (params, config) => this._getConfig(`/api/Faxes/draft/${params.id}`, "get", params, config), 
// 更新草稿箱内的传真
updateDraftFax: (params, config) => this._getConfig(`/api/Faxes/draft/${params.id}`, "put", params, config), 
// 删除指定的传真草稿
deleteDraftFax: (params, config) => this._getConfig(`/api/Faxes/draft/${params.id}`, "delete", params, config), 
// 将传真草稿进行发送
sendDraftFax: (params, config) => this._getConfig(`/api/Faxes/draft/${params.id}/send`, "put", params, config), 
// 将传真移至回收站
moveFaxToRecycleBin: (params, config) => this._getConfig(`/api/Faxes/${params.id}/abandon`, "put", params, config), 
// 将传真从回收站删除
deleteRecycleBinFax: (params, config) => this._getConfig(`/api/Faxes/${params.id}/forever`, "delete", params, config), 
// 将传真从回收站恢复
recoverRecycleBinFax: (params, config) => this._getConfig(`/api/Faxes/${params.id}/recover`, "put", params, config), 
// 将传真设置为已读
readFax: (params, config) => this._getConfig(`/api/Faxes/${params.id}/read`, "put", params, config), 
// 更新黑名单
updateBlackList: (params, config) => this._getConfig(`/api/Faxes/blacklist`, "put", params, config), 
// 分页获取黑名单
getBlackList: (params, config) => this._getConfig(`/api/Faxes/blacklist`, "get", params, config), 
// 更新白名单
updateWhitelist: (params, config) => this._getConfig(`/api/Faxes/whitelist`, "put", params, config), 
// 分页获取白名单
getWhitelist: (params, config) => this._getConfig(`/api/Faxes/whitelist`, "get", params, config), 
// 查询号码对应的短信会话
getMessages: (params, config) => this._getConfig(`/api/Messages`, "get", params, config), 
// 发送短信
postMessages: (params, config) => this._getConfig(`/api/Messages`, "post", params, config), 
// 查询短信记录
getMessageRecords: (params, config) => this._getConfig(`/api/Messages/records`, "get", params, config), 
// 通过ID获取短信会话
getMessagesById: (params, config) => this._getConfig(`/api/Messages/${params.id}`, "get", params, config), 
// 群发短信
postMessageGroup: (params, config) => this._getConfig(`/api/Messages/group`, "post", params, config), 
// 按条件查询短信模板
getMessageTemplates: (params, config) => this._getConfig(`/api/Messages/templates`, "get", params, config), 
// 新建短信模板
addMessageTemplate: (params, config) => this._getConfig(`/api/Messages/templates`, "post", params, config), 
// 通过ID获取短信模板
getMessageTemplateById: (params, config) => this._getConfig(`/api/Messages/templates/${params.id}`, "get", params, config), 
// 修改短信模板
editMessageTemplate: (params, config) => this._getConfig(`/api/Messages/templates/${params.id}`, "put", params, config), 
// 删除短信模板
deleteMessageTemplate: (params, config) => this._getConfig(`/api/Messages/templates/${params.id}`, "delete", params, config), 
// 修改短信会话名称
editMessageSessionName: (params, config) => this._getConfig(`/api/Messages/conversations/${params.id}`, "put", params, config), 
// 开启电话值守夜服服务
phoneDuty: (params, config) => this._getConfig(`/api/NightServices/duty`, "put", params, config), 
// 开启自动语音夜服服务
autoVoice: (params, config) => this._getConfig(`/api/NightServices/auto`, "put", params, config), 
// 关闭夜服服务
closeNightServices: (params, config) => this._getConfig(`/api/NightServices/close`, "put", params, config), 
// 获取当前用户的夜服状态
getUserNightServicesState: (params, config) => this._getConfig(`/api/NightServices/user`, "get", params, config), 
// 分页获取线路组夜服状态
getNightServicesStatus: (params, config) => this._getConfig(`/api/NightServices`, "get", params, config), 
// 通过ID获取Pet
getPetById: (params, config) => this._getConfig(`/api/Petstore/${params.id}`, "get", params, config), 
// 获取录音通知
getRecordNotifiesById: (params, config) => this._getConfig(`/api/RecordNotifies/${params.id}`, "get", params, config), 
// 结束录音通知
closeRecordNotifies: (params, config) => this._getConfig(`/api/RecordNotifies/${params.id}`, "delete", params, config), 
// 创建录音通知
addRecordNotifies: (params, config) => this._getConfig(`/api/RecordNotifies`, "post", params, config), 
// 获取全部录音通知
getRecordNotifies: (params, config) => this._getConfig(`/api/RecordNotifies`, "get", params, config), 
// 邀请录音通知成员
inviteRecordNotifiesUser: (params, config) => this._getConfig(`/api/RecordNotifies/${params.id}/invite`, "put", params, config), 
// 移除录音通知成员
removeRecordNotifiesUser: (params, config) => this._getConfig(`/api/RecordNotifies/${params.id}/remove`, "put", params, config), 
// 获取指定录音通知的通知统计数据
getRecordNotifiesTotal: (params, config) => this._getConfig(`/api/RecordNotifies/${params.id}/statistic`, "get", params, config), 
// 获取录音通知成员
getRecordNotifiesMembers: (params, config) => this._getConfig(`/api/RecordNotifies/${params.id}/members`, "get", params, config), 
// 获取符合查询条件的语音会议服务器
getConferenceServers: (params, config) => this._getConfig(`/api/Servers/conference`, "get", params, config), 
// 创建语音会议服务器
addConferenceServers: (params, config) => this._getConfig(`/api/Servers/conference`, "post", params, config), 
// 获取对应语音会议服务器
getConferenceServersById: (params, config) => this._getConfig(`/api/Servers/conference/${params.id}`, "get", params, config), 
// 更新语音会议服务器
editConferenceServers: (params, config) => this._getConfig(`/api/Servers/conference/${params.id}`, "put", params, config), 
// 删除指定语音会议服务器
deleteConferenceServers: (params, config) => this._getConfig(`/api/Servers/conference/${params.id}`, "delete", params, config), 
// 按条件查询文本模板
getTextTemplates: (params, config) => this._getConfig(`/api/TextTemplates`, "get", params, config), 
// 新建文本模板
addTextTemplates: (params, config) => this._getConfig(`/api/TextTemplates`, "post", params, config), 
// 通过ID获取文本模板
getTextTemplateById: (params, config) => this._getConfig(`/api/TextTemplates/${params.id}`, "get", params, config), 
// 修改文本模板
editTextTemplates: (params, config) => this._getConfig(`/api/TextTemplates/${params.id}`, "put", params, config), 
// 删除文本模板
deleteTextTemplates: (params, config) => this._getConfig(`/api/TextTemplates/${params.id}`, "delete", params, config), 
// 获取符合查询条件的VNC设备
getVirtualNCDevices: (params, config) => this._getConfig(`/api/VirtualNCDevices`, "get", params, config), 
// 创建VNC设备
addVirtualNCDevices: (params, config) => this._getConfig(`/api/VirtualNCDevices`, "post", params, config), 
// 获取对应VNC设备
getVirtualNCDevicesById: (params, config) => this._getConfig(`/api/VirtualNCDevices/${params.id}`, "get", params, config), 
// 更新VNC设备
editVirtualNCDevices: (params, config) => this._getConfig(`/api/VirtualNCDevices/${params.id}`, "put", params, config), 
// 删除指定VNC设备
deleteVirtualNCDevices: (params, config) => this._getConfig(`/api/VirtualNCDevices/${params.id}`, "delete", params, config), 
// 获取对应VNC设备的中继群配置
getVncTrunkGroupConfigs: (params, config) => this._getConfig(`/api/VirtualNCDevices/${params.id}/trunk_group_configs`, "get", params, config), 
// 修改中继群配置
editVncTrunkGroupConfigs: (params, config) => this._getConfig(`/api/VirtualNCDevices/${params.id}/trunk_group_configs`, "put", params, config), 
// 批量修改中继群配置
batchEditNcTrunkGroupConfigs: (params, config) => this._getConfig(`/api/VirtualNCDevices/${params.id}/trunk_group_configs/batch`, "post", params, config), 
// 刷新VNC中继群配置
refreshVncTrunkGroupConfigs: (params, config) => this._getConfig(`/api/VirtualNCDevices/${params.id}/trunk_group_configs/refresh`, "put", params, config), 
// 刷新VNC号码
refreshVncPhones: (params, config) => this._getConfig(`/api/VirtualNCDevices/${params.id}/phones/refresh`, "put", params, config), 
// 获取指定VNC下的号码列表
getVncPhones: (params, config) => this._getConfig(`/api/VirtualNCDevices/${params.id}/phones`, "get", params, config), 
```

 // biz 
``` js
/**
 * 预约会议
 * @params name {string}  （必填）
 * @params startTime {string}  （必填）
 * @params remains {array}  
 * @params remindContent {string}  
 * @params conferenceMembers {array}  
 * @params priorityInviteType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话;  
 * @returns
 *    @name {string} 
 *    @startTime {string} 
 *    @remindContent {string} 
 *    @conferenceMembers {array} 
 *    @jobId {string} 
 *    @remains {array} 
*/
async addAppointmentsConference({ name, startTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addAppointmentsConference({name, startTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ addAppointmentsConference', error);
    }
}


/**
 * 获取预约列表
 * @params Keyword {string} 关键词 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAppointmentsConference(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAppointmentsConference(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getAppointmentsConference', error);
    }
}


/**
 * 获取预约
 * @params id {string} id （必填）
 * @returns
 *    @name {string} 
 *    @startTime {string} 
 *    @remindContent {string} 
 *    @conferenceMembers {array} 
 *    @jobId {string} 
 *    @remains {array} 
*/
async getAppointmentsConferenceById(id, config = {}) {
    try {
        const { data } = await this.api.getAppointmentsConferenceById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getAppointmentsConferenceById', error);
    }
}


/**
 * 更新预约
 * @params id {string} id （必填）
 * @params name {string}  （必填）
 * @params startTime {string}  （必填）
 * @params remains {array}  
 * @params remindContent {string}  
 * @params conferenceMembers {array}  
 * @params priorityInviteType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话;  
 * @returns
*/
async editAppointmentsConference({ id, name, startTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editAppointmentsConference({id, name, startTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ editAppointmentsConference', error);
    }
}


/**
 * 取消预约
 * @params id {string} id （必填）
 * @returns
*/
async deleteAppointmentsConference(id, config = {}) {
    try {
        const { data } = await this.api.deleteAppointmentsConference({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ deleteAppointmentsConference', error);
    }
}


/**
 * 预约语音通知
 * @params name {string}  
 * @params notifyContent {string}  
 * @params playTimes {integer}  
 * @params startTime {string}  
 * @params overTime {string}  
 * @params notifyRepeatType {integer}  
 * @params priorityNotifyType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话;  
 * @params notifiedMembers {array}  
 * @returns
 *    @jobId {string} 
 *    @name {string} 
 *    @notifyContent {string} 
 *    @playTimes {integer} 
 *    @startTime {string} 
 *    @overTime {string} 
 *    @notifyRepeatType {integer} 
 *    @priorityNotifyType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话; 
 *    @notifiedMembers {array} 
 *    @executeSchedules {array} 
*/
async addAppointmentsVoiceNotify(params = {}, config = {}) {
    try {
        const { data } = await this.api.addAppointmentsVoiceNotify(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ addAppointmentsVoiceNotify', error);
    }
}


/**
 * 获取预约通知
 * @params Keyword {string} 关键词 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAppointmentsVoiceNotify(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAppointmentsVoiceNotify(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getAppointmentsVoiceNotify', error);
    }
}


/**
 * 获取语音通知
 * @params id {string} id （必填）
 * @returns
 *    @jobId {string} 
 *    @name {string} 
 *    @notifyContent {string} 
 *    @playTimes {integer} 
 *    @startTime {string} 
 *    @overTime {string} 
 *    @notifyRepeatType {integer} 
 *    @priorityNotifyType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话; 
 *    @notifiedMembers {array} 
 *    @executeSchedules {array} 
*/
async getAppointmentsVoiceNotifyById(id, config = {}) {
    try {
        const { data } = await this.api.getAppointmentsVoiceNotifyById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getAppointmentsVoiceNotifyById', error);
    }
}


/**
 * 更新预约通知
 * @params id {string} id （必填）
 * @params name {string}  
 * @params notifyContent {string}  
 * @params playTimes {integer}  
 * @params startTime {string}  
 * @params overTime {string}  
 * @params notifyRepeatType {integer}  
 * @params priorityNotifyType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话;  
 * @params notifiedMembers {array}  
 * @returns
*/
async editSingleAppointmentsVoiceNotify({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editSingleAppointmentsVoiceNotify({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ editSingleAppointmentsVoiceNotify', error);
    }
}


/**
 * 取消预约通知
 * @params id {string} id （必填）
 * @returns
*/
async deleteAppointmentsVoiceNotify(id, config = {}) {
    try {
        const { data } = await this.api.deleteAppointmentsVoiceNotify({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ deleteAppointmentsVoiceNotify', error);
    }
}


/**
 * 修改单次通知
 * @params id {string} id （必填）
 * @params jobId {string}  
 * @params name {string}  
 * @params notifyContent {string}  
 * @params playTimes {integer}  
 * @params startTime {string}  
 * @params priorityNotifyType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话;  
 * @params notifiedMembers {array}  
 * @params parentJobId {string}  
 * @returns
*/
async editAppointmentsVoiceNotifySingle({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editAppointmentsVoiceNotifySingle({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ editAppointmentsVoiceNotifySingle', error);
    }
}


/**
 * 获取语音广播
 * @params id {string} id （必填）
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @description {string} 描述
 *    @startTime {string} 开启时间
 *    @ownerID {string} 发起语音广播对应的用户ID
 *    @ownerName {string} 发起语音广播对应的用户名称
 *    @status {integer} 广播状态
 *    @number {string} 广播组号
 *    @groupID {string} 广播关联组ID
 *    @password {string} 语音广播密码
*/
async getBroadcastById(id, config = {}) {
    try {
        const { data } = await this.api.getBroadcastById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getBroadcastById', error);
    }
}


/**
 * 结束指定的广播组
 * @params id {string} id （必填）
 * @returns
*/
async closeBroadcastGroup(id, config = {}) {
    try {
        const { data } = await this.api.closeBroadcastGroup({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ closeBroadcastGroup', error);
    }
}


/**
 * 创建语音广播
 * @params name {string} 名称 
 * @params description {string} 描述 
 * @params priorityInviteType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话;  
 * @params recallStrategy {object} 重呼策略 
 * @params groupID {string} 关联组ID 
 * @params isUseConfig {boolean} 是否采用配置 
 * @params isBroadcasterQuitEnd {boolean} 广播员退出后是否结束广播 
 * @params isAllowJoin {boolean} 是否允许用户拨号加入 
 * @params password {string} 拨号加入密码 
 * @params number {string} 主叫号码 
 * @params broadcastMembers {array} 待通知成员 
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @description {string} 描述
 *    @startTime {string} 开启时间
 *    @ownerID {string} 发起语音广播对应的用户ID
 *    @ownerName {string} 发起语音广播对应的用户名称
 *    @status {integer} 广播状态
 *    @number {string} 广播组号
 *    @groupID {string} 广播关联组ID
 *    @password {string} 语音广播密码
*/
async addBroadcast(params = {}, config = {}) {
    try {
        const { data } = await this.api.addBroadcast(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ addBroadcast', error);
    }
}


/**
 * 获取广播组
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getBroadcastGroup(params = {}, config = {}) {
    try {
        const { data } = await this.api.getBroadcastGroup(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getBroadcastGroup', error);
    }
}


/**
 * 获取广播组成员
 * @params id {string} id （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getBroadcastGroupMembers(id, config = {}) {
    try {
        const { data } = await this.api.getBroadcastGroupMembers({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getBroadcastGroupMembers', error);
    }
}


/**
 * 呼叫
 * @params caller {string} 主叫 （必填）
 * @params called {string} 被叫 （必填）
 * @returns
*/
async callBiz({ caller, called  , ...params}, config = {}) {
    try {
        const { data } = await this.api.callBiz({caller, called,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ callBiz', error);
    }
}


/**
 * 强挂指定号码
 * @params phone {string} 指定号码 （必填）
 * @returns
*/
async forcedNumber({ phone  , ...params}, config = {}) {
    try {
        const { data } = await this.api.forcedNumber({phone,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ forcedNumber', error);
    }
}


/**
 * 接听排队呼叫
 * @params line {string} 用于接听的线路号码 （必填）
 * @params callInPhone {string} 呼入的号码 （必填）
 * @returns
*/
async answerQueueCall({ line, callInPhone  , ...params}, config = {}) {
    try {
        const { data } = await this.api.answerQueueCall({line, callInPhone,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ answerQueueCall', error);
    }
}


/**
 * 获取所有的上下文信息
 * @params Type {undefined} 客户端类型,0表示SignalR,1表示TCP 
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getClientContext(params = {}, config = {}) {
    try {
        const { data } = await this.api.getClientContext(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getClientContext', error);
    }
}


/**
 * 踢出当前登录的用户
 * @params type {undefined}  （必填）
 * @returns
*/
async kickOutUser({ type  , ...params}, config = {}) {
    try {
        const { data } = await this.api.kickOutUser({type,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ kickOutUser', error);
    }
}


/**
 * 获取语音会议
 * @params id {string} id （必填）
 * @returns
 *    @lessMinuteNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @masterChangeNotify {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @leaveMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @enterMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @masterEnter {string} 
 *    @memberEnter {string} 
 *    @exitMeeting {string} 
 *    @masterChange {string} 
 *    @lessOneMinute {string} 
 *    @inNotifyVoice {string} 
 *    @reportNumberBits {integer} 
 *    @masterExit {integer} 退出方式0:Continue; 1:Exit; 
 *    @reportLang {integer} 区域语言48:Chinese; 64:English; 
 *    @meetingTime {integer} 
 *    @meetingPhone {string} 
 *    @needRecord {boolean} 
 *    @displayNumber {string} 
 *    @appointedConferenceID {integer} 
 *    @isMuteJoinConference {boolean} 
 *    @id {string} ID
 *    @name {string} 名称
 *    @description {string} 描述
 *    @conferenceId {integer} 会议ID
 *    @conferenceServerId {string} 当前所在的会议服务器
 *    @conferenceCapacity {integer} 会议室容量
 *    @conferenceTime {integer} 会议室时长
 *    @state {object} 
 *    @recallStrategy {object} 重呼策略
 *    @priorityInviteType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话; 
 *    @groupID {string} 会议关联组ID
 *    @isStartByGroup {boolean} 是否采用组开启
 *    @numberList {string} 号码列表
 *    @recallConfig {string} 重呼配置
 *    @isEmergency {boolean} 是否紧急会议
 *    @isInfiniteRecall {boolean} 是否开启无限重呼
 *    @startTime {string} 会议开启时间
 *    @mode {integer} 语音会议模式 0:自由模式；1：对讲模式0:Default,自由模式; 1:Talkback,对讲模式; 
*/
async getConferenceById(id, config = {}) {
    try {
        const { data } = await this.api.getConferenceById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getConferenceById', error);
    }
}


/**
 * 结束指定会议
 * @params id {string} id （必填）
 * @returns
*/
async closeConference(id, config = {}) {
    try {
        const { data } = await this.api.closeConference({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ closeConference', error);
    }
}


/**
 * 创建会议室
 * @params lessMinuteNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书;  
 * @params masterChangeNotify {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书;  
 * @params leaveMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书;  
 * @params enterMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书;  
 * @params masterEnter {string}  
 * @params memberEnter {string}  
 * @params exitMeeting {string}  
 * @params masterChange {string}  
 * @params lessOneMinute {string}  
 * @params inNotifyVoice {string}  
 * @params reportNumberBits {integer}  
 * @params masterExit {integer} 退出方式0:Continue; 1:Exit;  
 * @params reportLang {integer} 区域语言48:Chinese; 64:English;  
 * @params meetingTime {integer}  
 * @params meetingPhone {string}  
 * @params needRecord {boolean}  
 * @params displayNumber {string}  
 * @params appointedConferenceID {integer}  
 * @params isMuteJoinConference {boolean}  
 * @params name {string}  
 * @params description {string}  
 * @params conferenceServerId {string}  
 * @params conferenceMembers {array}  
 * @params recallStrategy {object} 重呼策略 
 * @params priorityInviteType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话;  
 * @params groupID {string}  
 * @params conferenceCapacity {integer}  
 * @params isEmergency {boolean}  
 * @params mode {integer} 语音会议模式 0:自由模式；1：对讲模式0:Default,自由模式; 1:Talkback,对讲模式;  
 * @returns
 *    @lessMinuteNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @masterChangeNotify {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @leaveMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @enterMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @masterEnter {string} 
 *    @memberEnter {string} 
 *    @exitMeeting {string} 
 *    @masterChange {string} 
 *    @lessOneMinute {string} 
 *    @inNotifyVoice {string} 
 *    @reportNumberBits {integer} 
 *    @masterExit {integer} 退出方式0:Continue; 1:Exit; 
 *    @reportLang {integer} 区域语言48:Chinese; 64:English; 
 *    @meetingTime {integer} 
 *    @meetingPhone {string} 
 *    @needRecord {boolean} 
 *    @displayNumber {string} 
 *    @appointedConferenceID {integer} 
 *    @isMuteJoinConference {boolean} 
 *    @id {string} ID
 *    @name {string} 名称
 *    @description {string} 描述
 *    @conferenceId {integer} 会议ID
 *    @conferenceServerId {string} 当前所在的会议服务器
 *    @conferenceCapacity {integer} 会议室容量
 *    @conferenceTime {integer} 会议室时长
 *    @state {object} 
 *    @recallStrategy {object} 重呼策略
 *    @priorityInviteType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话; 
 *    @groupID {string} 会议关联组ID
 *    @isStartByGroup {boolean} 是否采用组开启
 *    @numberList {string} 号码列表
 *    @recallConfig {string} 重呼配置
 *    @isEmergency {boolean} 是否紧急会议
 *    @isInfiniteRecall {boolean} 是否开启无限重呼
 *    @startTime {string} 会议开启时间
 *    @mode {integer} 语音会议模式 0:自由模式；1：对讲模式0:Default,自由模式; 1:Talkback,对讲模式; 
*/
async addConference(params = {}, config = {}) {
    try {
        const { data } = await this.api.addConference(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ addConference', error);
    }
}


/**
 * 获取全部会议信息
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getConference(params = {}, config = {}) {
    try {
        const { data } = await this.api.getConference(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getConference', error);
    }
}


/**
 * 切换会议模式
 * @params id {string} id （必填）
 * @params mode {integer} 0:自由模式；1：对讲模式 （必填）
 * @returns
*/
async changeConferenceMode({ id, mode  , ...params}, config = {}) {
    try {
        const { data } = await this.api.changeConferenceMode({id, mode,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ changeConferenceMode', error);
    }
}


/**
 * 获取会议内的成员信息
 * @params id {string} id （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getConferenceMember(id, config = {}) {
    try {
        const { data } = await this.api.getConferenceMember({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getConferenceMember', error);
    }
}


/**
 * 获取所有的线路信息
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPhoneLines(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPhoneLines(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getPhoneLines', error);
    }
}


/**
 * 按条件查询会议记录
 * @params Type {integer} 记录类型 
 * @params KeyWord {string} 关键字 
 * @params BeginTime {string} 起始时间 
 * @params EndTime {string} 截止时间 
 * @params PlatformId {string} 分级平台Id 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getConferenceRecord(params = {}, config = {}) {
    try {
        const { data } = await this.api.getConferenceRecord(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getConferenceRecord', error);
    }
}


/**
 * 通过会议ID获取对应的会议记录
 * @params id {string} id （必填）
 * @params platformId {string} platformId 
 * @returns
 *    @id {string} 会议ID
 *    @ownerID {string} 会议发起人ID
 *    @ownerName {string} 会议发起人名称
 *    @ownerTitle {string} 会议发起人职务
 *    @name {string} 会议名称
 *    @number {string} 会议号码
 *    @startTime {string} 开始时间
 *    @endTime {string} 结束时间
 *    @type {integer} 会议记录类型1:VoiceConference; 2:VideoConference; 4:Broadcast; 8:RecordNotify; 
 *    @description {string} 描述
 *    @groupID {string} 所属组ID
 *    @password {string} 会议密码
 *    @extension {undefined} 记录拓展信息
 *    @participants {array} 参会成员
*/
async getConferenceRecordById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getConferenceRecordById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getConferenceRecordById', error);
    }
}


/**
 * 按条件查询通话记录
 * @params KeyWord {string} 关键字 
 * @params CallerNumber {string} 主叫号码 
 * @params CalledNumber {string} 被叫号码 
 * @params CallerName {string} 主叫名称 
 * @params CalledName {string} 被叫名称 
 * @params UserID {string} 联系人ID 
 * @params IsTwoWay {boolean} 是否双向查询, 
 * @params BeginTime {string} 起始时间 
 * @params EndTime {string} 截止时间 
 * @params Type {integer} 记录类型 
 * @params ConferenceID {string} 会议ID 
 * @params PlatformId {string} 分级平台id 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCallRecord(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCallRecord(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getCallRecord', error);
    }
}


/**
 * 给通话记录添加录制视频id
 * @params callerNumber {string} 主叫号码 （必填）
 * @params calledNumber {string} 被叫号码 （必填）
 * @params beginTime {string} 起始时间 （必填）
 * @params endTime {string} 截止时间 （必填）
 * @params callVideoId {string} 录制视频组id （必填）
 * @returns
*/
async addVideoIdForCallRecord({ callerNumber, calledNumber, beginTime, endTime, callVideoId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addVideoIdForCallRecord({callerNumber, calledNumber, beginTime, endTime, callVideoId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ addVideoIdForCallRecord', error);
    }
}


/**
 * 通过会议ID获取其对应的通话记录
 * @params ConferenceID {string} 会议记录ID 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCallRecordByConferenceId(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCallRecordByConferenceId(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getCallRecordByConferenceId', error);
    }
}


/**
 * 分页获取通话信息
 * @params Type {undefined} 通话信息类型 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCalling(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCalling(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getCalling', error);
    }
}


/**
 * 分页获取队列
 * @params AccessNumber {string} 接入码 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getQueue(params = {}, config = {}) {
    try {
        const { data } = await this.api.getQueue(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getQueue', error);
    }
}


/**
 * 分页查询电话
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPhones(params = {}, config = {}) {
    try {
        const { data } = await this.api.getPhones(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getPhones', error);
    }
}


/**
 * 分页查询外线电话
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getThunkPhones(params = {}, config = {}) {
    try {
        const { data } = await this.api.getThunkPhones(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getThunkPhones', error);
    }
}


/**
 * 更新电话位置
 * @params phoneNumber {string}  （必填）
 * @params longitude {number} 经度 
 * @params latitude {number} 维度 
 * @returns
*/
async updatePhoneLocation({ phoneNumber  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updatePhoneLocation({phoneNumber,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ updatePhoneLocation', error);
    }
}


/**
 * 按条件查询操作日志
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params Type {integer} 日志类型 
 * @params GroupID {string} 日志分组ID 
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getOperationLog(params = {}, config = {}) {
    try {
        const { data } = await this.api.getOperationLog(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getOperationLog', error);
    }
}


/**
 * 根据条件查询传真
 * @params BeginTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params Type {undefined} 传真记录类型 
 * @params KeyWord {string} 关键字 
 * @params IsRead {boolean} 是否已读 
 * @params Status {undefined} 传真状态 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFaxList(params = {}, config = {}) {
    try {
        const { data } = await this.api.getFaxList(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getFaxList', error);
    }
}


/**
 * 发送传真
 * @params Title {string} 主题 （必填）
 * @params InternationalCode {string} 国际区号 默认：86 （必填）
 * @params PrioritySendType {undefined} 优先选择发送的电话类型 
 * @params LongDistanceCode {string} 长途区号 默认：755 （必填）
 * @params Memo {string} 备注 
 * @params Receivers {string}  收件人集合Json字符串 [{ "ID": "213334449028", "Name": "张三", "Title": "游民", "Phones": [{ "Number": "XXX", "Type": 0 }] }, { "ID": "213334449028", "Name": "张三", "Title": "游民", "Phones": [{ "Number": "XXX", "Type": 0 }] }]  （必填）
 * @params SendFirst {boolean} 是否优先发送 
 * @returns
 *    @id {string} ID
 *    @title {string} 主题
 *    @faxNumber {string} 传真号码
 *    @internationalCode {string} 国际区号
 *    @isRead {boolean} true 已读 / false 未读
 *    @isSend {boolean} 发件/收件 标识true 表示是发件
 *    @longDistanceCode {string} 长途区号
 *    @memo {string} 备注
 *    @receiveCompany {string} 收件人公司
 *    @receiver {string} 收件人
 *    @receiverID {string} 收件人ID
 *    @receiverTitle {string} 收件人职位
 *    @sendCompany {string} 发件人公司
 *    @sender {string} 发件人
 *    @senderID {string} 发件人ID
 *    @senderTitle {string} 发件人职位
 *    @sendFirst {boolean} 是否优先发送
 *    @sendTime {string} 发送时间
 *    @status {integer} 传真状态枚举0:Prepare; 1:Sending; 2:SendFail; 3:SendSuccess; 4:ReceiveSuccess; 5:Delete; 6:Cancel; 7:FileNotFound; 8:ConnectError; 
 *    @files {array} 传真的文件列表
 *    @extension {string} 拓展字段
*/
async sendFax({ Title, InternationalCode, LongDistanceCode, Receivers  , ...params}, config = {}) {
    try {
        const { data } = await this.api.sendFax(params,{params:{Title, InternationalCode, LongDistanceCode, Receivers,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ sendFax', error);
    }
}


/**
 * 获取指定传真
 * @params id {string} id （必填）
 * @returns
 *    @id {string} ID
 *    @title {string} 主题
 *    @faxNumber {string} 传真号码
 *    @internationalCode {string} 国际区号
 *    @isRead {boolean} true 已读 / false 未读
 *    @isSend {boolean} 发件/收件 标识true 表示是发件
 *    @longDistanceCode {string} 长途区号
 *    @memo {string} 备注
 *    @receiveCompany {string} 收件人公司
 *    @receiver {string} 收件人
 *    @receiverID {string} 收件人ID
 *    @receiverTitle {string} 收件人职位
 *    @sendCompany {string} 发件人公司
 *    @sender {string} 发件人
 *    @senderID {string} 发件人ID
 *    @senderTitle {string} 发件人职位
 *    @sendFirst {boolean} 是否优先发送
 *    @sendTime {string} 发送时间
 *    @status {integer} 传真状态枚举0:Prepare; 1:Sending; 2:SendFail; 3:SendSuccess; 4:ReceiveSuccess; 5:Delete; 6:Cancel; 7:FileNotFound; 8:ConnectError; 
 *    @files {array} 传真的文件列表
 *    @extension {string} 拓展字段
*/
async getFaxInfoById(id, config = {}) {
    try {
        const { data } = await this.api.getFaxInfoById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getFaxInfoById', error);
    }
}


/**
 * 将传真重新发送
 * @params id {string} id （必填）
 * @returns
*/
async resendFax({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.resendFax({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ resendFax', error);
    }
}


/**
 * 分页获取传真草稿
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDraftFaxList(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDraftFaxList(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getDraftFaxList', error);
    }
}


/**
 * 将传真保存至草稿箱
 * @params Title {string} 主题 （必填）
 * @params InternationalCode {string} 国际区号 默认：86 （必填）
 * @params PrioritySendType {undefined} 优先选择发送的电话类型 
 * @params LongDistanceCode {string} 长途区号 默认：755 （必填）
 * @params Memo {string} 备注 
 * @params Receivers {string}  收件人集合Json字符串 [{ "ID": "213334449028", "Name": "张三", "Title": "游民", "Phones": [{ "Number": "XXX", "Type": 0 }] }, { "ID": "213334449028", "Name": "张三", "Title": "游民", "Phones": [{ "Number": "XXX", "Type": 0 }] }]  （必填）
 * @params SendFirst {boolean} 是否优先发送 
 * @returns
 *    @id {integer} 记录ID
 *    @title {string} 主题
 *    @internationalCode {string} 国际区号
 *    @prioritySendType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话; 
 *    @longDistanceCode {string} 长途区号
 *    @memo {string} 备注
 *    @senderID {string} 发送人ID
 *    @receivers {array} 收件人集合
 *    @sendFirst {boolean} 是否优先发送
 *    @saveTime {string} 保存时间
 *    @files {array} 传真附件集合
 *    @extension {string} 拓展字段
*/
async saveFaxToDraft({ Title, InternationalCode, LongDistanceCode, Receivers  , ...params}, config = {}) {
    try {
        const { data } = await this.api.saveFaxToDraft(params,{params:{Title, InternationalCode, LongDistanceCode, Receivers,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ saveFaxToDraft', error);
    }
}


/**
 * 获取指定的传真草稿
 * @params id {integer} id （必填）
 * @returns
 *    @id {integer} 记录ID
 *    @title {string} 主题
 *    @internationalCode {string} 国际区号
 *    @prioritySendType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话; 
 *    @longDistanceCode {string} 长途区号
 *    @memo {string} 备注
 *    @senderID {string} 发送人ID
 *    @receivers {array} 收件人集合
 *    @sendFirst {boolean} 是否优先发送
 *    @saveTime {string} 保存时间
 *    @files {array} 传真附件集合
 *    @extension {string} 拓展字段
*/
async getDraftFaxInfoById(id, config = {}) {
    try {
        const { data } = await this.api.getDraftFaxInfoById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getDraftFaxInfoById', error);
    }
}


/**
 * 更新草稿箱内的传真
 * @params id {integer} id （必填）
 * @params Title {string} 主题 （必填）
 * @params InternationalCode {string} 国际区号 默认：86 （必填）
 * @params PrioritySendType {undefined} 优先选择发送的电话类型 
 * @params LongDistanceCode {string} 长途区号 默认：755 （必填）
 * @params Memo {string} 备注 
 * @params Receivers {string}  收件人集合Json字符串 [{ "ID": "213334449028", "Name": "张三", "Title": "游民",  "Phones": [{ "Number": "XXX", "Type": 0 }] }, { "ID": "213334449028", "Name": "张三", "Title": "游民",  "Phones": [{ "Number": "XXX", "Type": 0 }] }]  （必填）
 * @params FilesJson {string}  传真附件集合Json字符串 [{ "ID": "asd1236762173617", "Name": "xxxx.pdf", "Length": 10000,"FullPath":"fssfiles/1c04c9a1eb4d4a838759d4c2a0c7b042" }, { "ID": "asd1236762173618", "Name": "xxxx.doc", "Length": 10000,"FullPath":"fssfiles/1c04c9a1eb4d4a838759d4c2a0c7b043" }]  
 * @params SendFirst {boolean} 是否优先发送 
 * @params Extension {string} 拓展字段 
 * @returns
*/
async updateDraftFax({ id, Title, InternationalCode, LongDistanceCode, Receivers  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateDraftFax({id,...params},{params:{id, Title, InternationalCode, LongDistanceCode, Receivers,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ updateDraftFax', error);
    }
}


/**
 * 删除指定的传真草稿
 * @params id {integer} id （必填）
 * @returns
 *    @id {integer} 记录ID
 *    @title {string} 主题
 *    @internationalCode {string} 国际区号
 *    @prioritySendType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话; 
 *    @longDistanceCode {string} 长途区号
 *    @memo {string} 备注
 *    @senderID {string} 发送人ID
 *    @receivers {array} 收件人集合
 *    @sendFirst {boolean} 是否优先发送
 *    @saveTime {string} 保存时间
 *    @files {array} 传真附件集合
 *    @extension {string} 拓展字段
*/
async deleteDraftFax(id, config = {}) {
    try {
        const { data } = await this.api.deleteDraftFax({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ deleteDraftFax', error);
    }
}


/**
 * 将传真草稿进行发送
 * @params id {integer} id （必填）
 * @returns
*/
async sendDraftFax({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.sendDraftFax({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ sendDraftFax', error);
    }
}


/**
 * 将传真移至回收站
 * @params id {string} id （必填）
 * @returns
*/
async moveFaxToRecycleBin({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.moveFaxToRecycleBin({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ moveFaxToRecycleBin', error);
    }
}


/**
 * 将传真从回收站删除
 * @params id {string} id （必填）
 * @returns
*/
async deleteRecycleBinFax(id, config = {}) {
    try {
        const { data } = await this.api.deleteRecycleBinFax({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ deleteRecycleBinFax', error);
    }
}


/**
 * 将传真从回收站恢复
 * @params id {string} id （必填）
 * @returns
*/
async recoverRecycleBinFax({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.recoverRecycleBinFax({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ recoverRecycleBinFax', error);
    }
}


/**
 * 将传真设置为已读
 * @params id {string} id （必填）
 * @returns
*/
async readFax({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.readFax({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ readFax', error);
    }
}


/**
 * 更新黑名单
 * @params isDelete {boolean} 是否删除黑名单 
 * @params number {string} 号码 （必填）
 * @returns
*/
async updateBlackList({ number  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateBlackList({number,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ updateBlackList', error);
    }
}


/**
 * 分页获取黑名单
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getBlackList(params = {}, config = {}) {
    try {
        const { data } = await this.api.getBlackList(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getBlackList', error);
    }
}


/**
 * 更新白名单
 * @params isDelete {boolean} 是否删除白名单 
 * @params number {string} 号码 （必填）
 * @returns
*/
async updateWhitelist({ number  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateWhitelist({number,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ updateWhitelist', error);
    }
}


/**
 * 分页获取白名单
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getWhitelist(params = {}, config = {}) {
    try {
        const { data } = await this.api.getWhitelist(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getWhitelist', error);
    }
}


/**
 * 查询号码对应的短信会话
 * @params phoneNum {string}  （必填）
 * @returns
 *    @id {string} 会话Id
 *    @isGroupSending {boolean} 标识此会话是否为群发
 *    @config {object} 短信配置
 *    @ownSidePhone {string} 己方号码
 *    @oppositePhones {array} 对端号码
 *    @messages {array} 短信列表
*/
async getMessages(phoneNum, config = {}) {
    try {
        const { data } = await this.api.getMessages({ phoneNum }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getMessages', error);
    }
}


/**
 * 发送短信
 * @params sender {string} 短信发送者 
 * @params receiver {string} 短信接收者 
 * @params content {string} 短信内容 
 * @returns
*/
async postMessages(params = {}, config = {}) {
    try {
        const { data } = await this.api.postMessages(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ postMessages', error);
    }
}


/**
 * 查询短信记录
 * @params StartTime {string} 开始时间 （必填）
 * @params EndTime {string} 结束时间 （必填）
 * @params Keyword {string} 关键字搜索（搜索短信内容） 
 * @params PlatformId {string} 分级平台Id 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMessageRecords({ StartTime, EndTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMessageRecords({StartTime, EndTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getMessageRecords', error);
    }
}


/**
 * 通过ID获取短信会话
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 组消息ID
*/
async getMessagesById(id, config = {}) {
    try {
        const { data } = await this.api.getMessagesById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getMessagesById', error);
    }
}


/**
 * 群发短信
 * @params senderNumber {string} 短信发送者的号码 
 * @params receiverNumbers {array} 短信接收者 （必填）
 * @params content {string} 短信内容 
 * @returns
 *    @id {string} 组消息ID
*/
async postMessageGroup({ receiverNumbers  , ...params}, config = {}) {
    try {
        const { data } = await this.api.postMessageGroup({receiverNumbers,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ postMessageGroup', error);
    }
}


/**
 * 按条件查询短信模板
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMessageTemplates(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMessageTemplates(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getMessageTemplates', error);
    }
}


/**
 * 新建短信模板
 * @params name {string} 模板内容 
 * @params content {string} 配置信息 
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @stationId {string} 节点ID
 *    @content {string} 模板内容
*/
async addMessageTemplate(params = {}, config = {}) {
    try {
        const { data } = await this.api.addMessageTemplate(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ addMessageTemplate', error);
    }
}


/**
 * 通过ID获取短信模板
 * @params id {string} id （必填）
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @stationId {string} 节点ID
 *    @content {string} 模板内容
*/
async getMessageTemplateById(id, config = {}) {
    try {
        const { data } = await this.api.getMessageTemplateById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getMessageTemplateById', error);
    }
}


/**
 * 修改短信模板
 * @params id {string} id （必填）
 * @params name {string} 模板内容 
 * @params content {string} 配置信息 
 * @returns
*/
async editMessageTemplate({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editMessageTemplate({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ editMessageTemplate', error);
    }
}


/**
 * 删除短信模板
 * @params id {string} id （必填）
 * @returns
*/
async deleteMessageTemplate(id, config = {}) {
    try {
        const { data } = await this.api.deleteMessageTemplate({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ deleteMessageTemplate', error);
    }
}


/**
 * 修改短信会话名称
 * @params id {string} id （必填）
 * @params name {string} 短信会话名称 （必填）
 * @returns
*/
async editMessageSessionName({ id, name  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editMessageSessionName({id, name,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ editMessageSessionName', error);
    }
}


/**
 * 开启电话值守夜服服务
 * @params phoneNumber {string} 用于夜服值守的号码 （必填）
 * @returns
*/
async phoneDuty({ phoneNumber  , ...params}, config = {}) {
    try {
        const { data } = await this.api.phoneDuty({phoneNumber,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ phoneDuty', error);
    }
}


/**
 * 开启自动语音夜服服务
 * @params audioID {integer} 夜服提示语音ID（默认值0x30044031) 
 * @returns
*/
async autoVoice(params = {}, config = {}) {
    try {
        const { data } = await this.api.autoVoice(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ autoVoice', error);
    }
}


/**
 * 关闭夜服服务
 * @returns
*/
async closeNightServices(params = {}, config = {}) {
    try {
        const { data } = await this.api.closeNightServices(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ closeNightServices', error);
    }
}


/**
 * 获取当前用户的夜服状态
 * @returns
 *    @isOpenNightService {boolean} 是否开启夜服
 *    @accessNumber {string} 开启夜服的线路组接入码
*/
async getUserNightServicesState(params = {}, config = {}) {
    try {
        const { data } = await this.api.getUserNightServicesState(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getUserNightServicesState', error);
    }
}


/**
 * 分页获取线路组夜服状态
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getNightServicesStatus(params = {}, config = {}) {
    try {
        const { data } = await this.api.getNightServicesStatus(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getNightServicesStatus', error);
    }
}


/**
 * 通过ID获取Pet
 * @params id {integer} id （必填）
 * @returns
 *    @id {integer} 
 *    @name {string} 
 *    @category {object} 
 *    @photoUrls {array} 
 *    @tags {array} 
 *    @status {integer} 
 *    @additionalProperties {object} 
*/
async getPetById(id, config = {}) {
    try {
        const { data } = await this.api.getPetById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getPetById', error);
    }
}


/**
 * 获取录音通知
 * @params id {string} id （必填）
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @description {string} 描述
 *    @startTime {string} 开启时间
 *    @number {integer} 录音通知号(默认为0)
 *    @fileGroupID {string} 录音文件所在文件目录ID
 *    @notifyContent {string} 待通知的文本信息
 *    @ownerID {string} 发起录音通知组对应的用户ID
 *    @ownerName {string} 录音通知组对应的用户名称
 *    @notifyGroupType {integer} 录音通知组类型（通过临时组发起的业务，结束后会自动清除NC录音文件）（通过长期通知组发起的业务，结束后不会清除NC录音文件）0:Temporary,应急通知组; 1:Permanent,长期通知组; 
 *    @playType {integer} 录音播放模式0:Single,每个用户单独播放（用于播放通知）; 1:United,所有用户一致播放（用于播放背景音乐）; 
 *    @playTimes {integer} 播放次数(为0则循环播放)
 *    @isAllowUserJoin {boolean} 是否允许用户主动加入
 *    @password {string} 加入密码, 为空则不指定密码
 *    @status {integer} 录音通知状态0:Preparing,准备中; 1:LackOfFile,缺少音频文件; 2:UploadingFile,音频文件上传到服务器中; 3:UploadedFile,音频文件上传完毕; 4:UploadFileFailed,音频文件上传失败; 5:Starting,开启录音通知中; 6:StartFailed,开启录音通知失败; 7:Playing,循环播放中; 8:PlayEnd,播放完成; 9:NoPermission,无License许可; 
 *    @groupID {string} 关联组ID
*/
async getRecordNotifiesById(id, config = {}) {
    try {
        const { data } = await this.api.getRecordNotifiesById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getRecordNotifiesById', error);
    }
}


/**
 * 结束录音通知
 * @params id {string} id （必填）
 * @returns
*/
async closeRecordNotifies(id, config = {}) {
    try {
        const { data } = await this.api.closeRecordNotifies({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ closeRecordNotifies', error);
    }
}


/**
 * 创建录音通知
 * @params name {string} 名称 
 * @params description {string} 描述 
 * @params priorityInviteType {integer} 号码类型0:IPPhone,工作电话; 1:Mobile,手机; 2:HomePhone,家庭电话; 3:FacsimileTelephoneNumber,传真号码; 4:TelephoneNumber,其他电话;  
 * @params recallStrategy {object} 重呼策略 
 * @params number {integer} 录音通知号(默认为0) 
 * @params fileGroupID {string} 录音文件所在目录ID 
 * @params notifyContent {string} 待通知的文本信息 
 * @params type {integer} 录音通知组类型（通过临时组发起的业务，结束后会自动清除NC录音文件）（通过长期通知组发起的业务，结束后不会清除NC录音文件）0:Temporary,应急通知组; 1:Permanent,长期通知组;  
 * @params playType {integer} 录音播放模式0:Single,每个用户单独播放（用于播放通知）; 1:United,所有用户一致播放（用于播放背景音乐）;  
 * @params maxConcurrency {integer} 录音通知并发数量，防止信道占用过多导致瘫痪 
 * @params playTimes {integer} 播放次数(为0则循环播放) 
 * @params isAllowUserJoin {boolean} 是否允许用户主动加入 
 * @params password {string} 加入密码, 为空则不指定密码 
 * @params groupID {string} 关联组ID 
 * @params eventID {string} 关联的事件ID 
 * @params notifiedMembers {array} 待通知成员 
 * @returns
 *    @id {string} ID
 *    @name {string} 名称
 *    @description {string} 描述
 *    @startTime {string} 开启时间
 *    @number {integer} 录音通知号(默认为0)
 *    @fileGroupID {string} 录音文件所在文件目录ID
 *    @notifyContent {string} 待通知的文本信息
 *    @ownerID {string} 发起录音通知组对应的用户ID
 *    @ownerName {string} 录音通知组对应的用户名称
 *    @notifyGroupType {integer} 录音通知组类型（通过临时组发起的业务，结束后会自动清除NC录音文件）（通过长期通知组发起的业务，结束后不会清除NC录音文件）0:Temporary,应急通知组; 1:Permanent,长期通知组; 
 *    @playType {integer} 录音播放模式0:Single,每个用户单独播放（用于播放通知）; 1:United,所有用户一致播放（用于播放背景音乐）; 
 *    @playTimes {integer} 播放次数(为0则循环播放)
 *    @isAllowUserJoin {boolean} 是否允许用户主动加入
 *    @password {string} 加入密码, 为空则不指定密码
 *    @status {integer} 录音通知状态0:Preparing,准备中; 1:LackOfFile,缺少音频文件; 2:UploadingFile,音频文件上传到服务器中; 3:UploadedFile,音频文件上传完毕; 4:UploadFileFailed,音频文件上传失败; 5:Starting,开启录音通知中; 6:StartFailed,开启录音通知失败; 7:Playing,循环播放中; 8:PlayEnd,播放完成; 9:NoPermission,无License许可; 
 *    @groupID {string} 关联组ID
*/
async addRecordNotifies(params = {}, config = {}) {
    try {
        const { data } = await this.api.addRecordNotifies(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ addRecordNotifies', error);
    }
}


/**
 * 获取全部录音通知
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getRecordNotifies(params = {}, config = {}) {
    try {
        const { data } = await this.api.getRecordNotifies(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getRecordNotifies', error);
    }
}


/**
 * 邀请录音通知成员
 * @params id {string} id （必填）
 * @returns
*/
async inviteRecordNotifiesUser({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.inviteRecordNotifiesUser({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ inviteRecordNotifiesUser', error);
    }
}


/**
 * 移除录音通知成员
 * @params id {string} id （必填）
 * @params id {string}  
 * @params name {string}  
 * @params title {string}  
 * @params phones {array}  
 * @returns
*/
async removeRecordNotifiesUser({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.removeRecordNotifiesUser({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ removeRecordNotifiesUser', error);
    }
}


/**
 * 获取指定录音通知的通知统计数据
 * @params id {string} id （必填）
 * @returns
 *    @totalCount {integer} 通知总数
 *    @beNotifiedCount {integer} 待通知数量
 *    @unconfirmedCount {integer} 未确认数量
 *    @listeningCount {integer} 接听中数量
 *    @confirmedCount {integer} 已确认数量
*/
async getRecordNotifiesTotal(id, config = {}) {
    try {
        const { data } = await this.api.getRecordNotifiesTotal({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getRecordNotifiesTotal', error);
    }
}


/**
 * 获取录音通知成员
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getRecordNotifiesMembers({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getRecordNotifiesMembers({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getRecordNotifiesMembers', error);
    }
}


/**
 * 获取符合查询条件的语音会议服务器
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getConferenceServers(params = {}, config = {}) {
    try {
        const { data } = await this.api.getConferenceServers(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getConferenceServers', error);
    }
}


/**
 * 创建语音会议服务器
 * @params lessMinuteNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书;  
 * @params masterChangeNotify {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书;  
 * @params leaveMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书;  
 * @params enterMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书;  
 * @params masterEnter {string}  
 * @params memberEnter {string}  
 * @params exitMeeting {string}  
 * @params masterChange {string}  
 * @params lessOneMinute {string}  
 * @params inNotifyVoice {string}  
 * @params reportNumberBits {integer}  
 * @params masterExit {integer} 退出方式0:Continue; 1:Exit;  
 * @params reportLang {integer} 区域语言48:Chinese; 64:English;  
 * @params meetingTime {integer}  
 * @params meetingPhone {string}  
 * @params needRecord {boolean}  
 * @params displayNumber {string}  
 * @params appointedConferenceID {integer}  
 * @params isMuteJoinConference {boolean}  
 * @params name {string} 名称 （必填）
 * @params description {string} 描述 
 * @params ip {string} 服务器地址 （必填）
 * @params port {integer} 服务器端口 （必填）
 * @params password {string} 服务器密码 
 * @params masterIP {string} NC主机地址 
 * @params masterPort {integer} NC主机端口 
 * @params slaveIP {string} NC备机地址 
 * @params slavePort {integer} NC备机端口 
 * @params longitude {number} 经度 
 * @params latitude {number} 纬度 
 * @returns
 *    @lessMinuteNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @masterChangeNotify {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @leaveMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @enterMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @masterEnter {string} 
 *    @memberEnter {string} 
 *    @exitMeeting {string} 
 *    @masterChange {string} 
 *    @lessOneMinute {string} 
 *    @inNotifyVoice {string} 
 *    @reportNumberBits {integer} 
 *    @masterExit {integer} 退出方式0:Continue; 1:Exit; 
 *    @reportLang {integer} 区域语言48:Chinese; 64:English; 
 *    @meetingTime {integer} 
 *    @meetingPhone {string} 
 *    @needRecord {boolean} 
 *    @displayNumber {string} 
 *    @appointedConferenceID {integer} 
 *    @isMuteJoinConference {boolean} 
 *    @id {string} 名称
 *    @name {string} 名称
 *    @description {string} 描述
 *    @ip {string} 服务器地址
 *    @port {integer} 服务器端口
 *    @password {string} 服务器密码
 *    @state {integer} 连接状态0:Unknow; 1:Connected; 2:DisConnected; 
 *    @masterIP {string} NC主机地址
 *    @masterPort {integer} NC主机端口
 *    @slaveIP {string} NC备机地址
 *    @slavePort {integer} NC备机端口
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
*/
async addConferenceServers({ name, ip, port  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addConferenceServers({name, ip, port,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ addConferenceServers', error);
    }
}


/**
 * 获取对应语音会议服务器
 * @params id {string} id （必填）
 * @returns
 *    @lessMinuteNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @masterChangeNotify {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @leaveMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @enterMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书; 
 *    @masterEnter {string} 
 *    @memberEnter {string} 
 *    @exitMeeting {string} 
 *    @masterChange {string} 
 *    @lessOneMinute {string} 
 *    @inNotifyVoice {string} 
 *    @reportNumberBits {integer} 
 *    @masterExit {integer} 退出方式0:Continue; 1:Exit; 
 *    @reportLang {integer} 区域语言48:Chinese; 64:English; 
 *    @meetingTime {integer} 
 *    @meetingPhone {string} 
 *    @needRecord {boolean} 
 *    @displayNumber {string} 
 *    @appointedConferenceID {integer} 
 *    @isMuteJoinConference {boolean} 
 *    @id {string} 名称
 *    @name {string} 名称
 *    @description {string} 描述
 *    @ip {string} 服务器地址
 *    @port {integer} 服务器端口
 *    @password {string} 服务器密码
 *    @state {integer} 连接状态0:Unknow; 1:Connected; 2:DisConnected; 
 *    @masterIP {string} NC主机地址
 *    @masterPort {integer} NC主机端口
 *    @slaveIP {string} NC备机地址
 *    @slavePort {integer} NC备机端口
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
*/
async getConferenceServersById(id, config = {}) {
    try {
        const { data } = await this.api.getConferenceServersById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getConferenceServersById', error);
    }
}


/**
 * 更新语音会议服务器
 * @params id {string} id （必填）
 * @params lessMinuteNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书;  
 * @params masterChangeNotify {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书;  
 * @params leaveMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书;  
 * @params enterMeetingNotifyObject {integer} 通知对象0:All,通知所有人; 1:Master,通知主持人; 2:Secretary,通知会议秘书;  
 * @params masterEnter {string}  
 * @params memberEnter {string}  
 * @params exitMeeting {string}  
 * @params masterChange {string}  
 * @params lessOneMinute {string}  
 * @params inNotifyVoice {string}  
 * @params reportNumberBits {integer}  
 * @params masterExit {integer} 退出方式0:Continue; 1:Exit;  
 * @params reportLang {integer} 区域语言48:Chinese; 64:English;  
 * @params meetingTime {integer}  
 * @params meetingPhone {string}  
 * @params needRecord {boolean}  
 * @params displayNumber {string}  
 * @params appointedConferenceID {integer}  
 * @params isMuteJoinConference {boolean}  
 * @params name {string} 名称 （必填）
 * @params description {string} 描述 
 * @params ip {string} 服务器地址 （必填）
 * @params port {integer} 服务器端口 （必填）
 * @params password {string} 服务器密码 
 * @params masterIP {string} NC主机地址 
 * @params masterPort {integer} NC主机端口 
 * @params slaveIP {string} NC备机地址 
 * @params slavePort {integer} NC备机端口 
 * @params longitude {number} 经度 
 * @params latitude {number} 纬度 
 * @returns
*/
async editConferenceServers({ id, name, ip, port  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editConferenceServers({id, name, ip, port,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ editConferenceServers', error);
    }
}


/**
 * 删除指定语音会议服务器
 * @params id {string} id （必填）
 * @returns
*/
async deleteConferenceServers(id, config = {}) {
    try {
        const { data } = await this.api.deleteConferenceServers({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ deleteConferenceServers', error);
    }
}


/**
 * 按条件查询文本模板
 * @params KeyWord {string} 关键字 
 * @params Type {undefined} 查找的模板类型 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getTextTemplates(params = {}, config = {}) {
    try {
        const { data } = await this.api.getTextTemplates(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getTextTemplates', error);
    }
}


/**
 * 新建文本模板
 * @params name {string} 模板名称 （必填）
 * @params textTemplateType {integer} 模板类型，0：语音通知，1：短信通知，2：即时消息通知0:RecordNotify,语音通知; 1:ShortMessage,短信息; 2:InstantMessaging,即时消息; -1:All,全部;  
 * @params content {string} 文本内容 （必填）
 * @returns
 *    @id {string} 主键id
 *    @name {string} 模板名称
 *    @textTemplateType {integer} 模板类型，0：语音通知，1：短信通知，2：即时消息通知0:RecordNotify,语音通知; 1:ShortMessage,短信息; 2:InstantMessaging,即时消息; -1:All,全部; 
 *    @content {string} 文本内容
*/
async addTextTemplates({ name, content  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addTextTemplates({name, content,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ addTextTemplates', error);
    }
}


/**
 * 通过ID获取文本模板
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 主键id
 *    @name {string} 模板名称
 *    @textTemplateType {integer} 模板类型，0：语音通知，1：短信通知，2：即时消息通知0:RecordNotify,语音通知; 1:ShortMessage,短信息; 2:InstantMessaging,即时消息; -1:All,全部; 
 *    @content {string} 文本内容
*/
async getTextTemplateById(id, config = {}) {
    try {
        const { data } = await this.api.getTextTemplateById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getTextTemplateById', error);
    }
}


/**
 * 修改文本模板
 * @params id {string} id （必填）
 * @params name {string} 模板名称 （必填）
 * @params textTemplateType {integer} 模板类型，0：语音通知，1：短信通知，2：即时消息通知0:RecordNotify,语音通知; 1:ShortMessage,短信息; 2:InstantMessaging,即时消息; -1:All,全部;  
 * @params content {string} 文本内容 （必填）
 * @returns
*/
async editTextTemplates({ id, name, content  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editTextTemplates({id, name, content,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ editTextTemplates', error);
    }
}


/**
 * 删除文本模板
 * @params id {string} id （必填）
 * @returns
*/
async deleteTextTemplates(id, config = {}) {
    try {
        const { data } = await this.api.deleteTextTemplates({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ deleteTextTemplates', error);
    }
}


/**
 * 获取符合查询条件的VNC设备
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getVirtualNCDevices(params = {}, config = {}) {
    try {
        const { data } = await this.api.getVirtualNCDevices(params,config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getVirtualNCDevices', error);
    }
}


/**
 * 创建VNC设备
 * @params name {string}  （必填）
 * @params description {string}  
 * @params prefix {string}  
 * @params isKeepAlive {boolean}  
 * @params timeInterval {integer}  
 * @params masterNCDevice {object}  （必填）
 * @params slaveNCDevice {object}  
 * @params longitude {number}  
 * @params latitude {number}  
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @connectionState {integer} 连接状态0:Unknow; 1:Connected; 2:DisConnected; 
 *    @description {string} 
 *    @prefix {string} 
 *    @isKeepAlive {boolean} 
 *    @timeInterval {integer} 
 *    @masterNCDevice {object} 
 *    @slaveNCDevice {object} 
 *    @longitude {number} 
 *    @latitude {number} 
*/
async addVirtualNCDevices({ name, masterNCDevice  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addVirtualNCDevices({name, masterNCDevice,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ addVirtualNCDevices', error);
    }
}


/**
 * 获取对应VNC设备
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 
 *    @name {string} 
 *    @connectionState {integer} 连接状态0:Unknow; 1:Connected; 2:DisConnected; 
 *    @description {string} 
 *    @prefix {string} 
 *    @isKeepAlive {boolean} 
 *    @timeInterval {integer} 
 *    @masterNCDevice {object} 
 *    @slaveNCDevice {object} 
 *    @longitude {number} 
 *    @latitude {number} 
*/
async getVirtualNCDevicesById(id, config = {}) {
    try {
        const { data } = await this.api.getVirtualNCDevicesById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getVirtualNCDevicesById', error);
    }
}


/**
 * 更新VNC设备
 * @params id {string} id （必填）
 * @params name {string}  （必填）
 * @params description {string}  
 * @params masterNCDevice {object}  （必填）
 * @params slaveNCDevice {object}  
 * @returns
*/
async editVirtualNCDevices({ id, name, masterNCDevice  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editVirtualNCDevices({id, name, masterNCDevice,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ editVirtualNCDevices', error);
    }
}


/**
 * 删除指定VNC设备
 * @params id {string} id （必填）
 * @returns
*/
async deleteVirtualNCDevices(id, config = {}) {
    try {
        const { data } = await this.api.deleteVirtualNCDevices({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ deleteVirtualNCDevices', error);
    }
}


/**
 * 获取对应VNC设备的中继群配置
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getVncTrunkGroupConfigs({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getVncTrunkGroupConfigs({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getVncTrunkGroupConfigs', error);
    }
}


/**
 * 修改中继群配置
 * @params id {string} id （必填）
 * @params isEnable {boolean}  
 * @params trunkGroupNumber {integer}  （必填）
 * @params dualSystemAttribute {boolean}  
 * @returns
*/
async editVncTrunkGroupConfigs({ id, trunkGroupNumber  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editVncTrunkGroupConfigs({id, trunkGroupNumber,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ editVncTrunkGroupConfigs', error);
    }
}


/**
 * 批量修改中继群配置
 * @params id {string} id （必填）
 * @returns
*/
async batchEditNcTrunkGroupConfigs({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchEditNcTrunkGroupConfigs({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ batchEditNcTrunkGroupConfigs', error);
    }
}


/**
 * 刷新VNC中继群配置
 * @params id {string} id （必填）
 * @returns
*/
async refreshVncTrunkGroupConfigs({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.refreshVncTrunkGroupConfigs({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ refreshVncTrunkGroupConfigs', error);
    }
}


/**
 * 刷新VNC号码
 * @params id {string} id （必填）
 * @params filter {integer} 0:Phone; 1:PhoneLine; 2:Both;  
 * @returns
*/
async refreshVncPhones({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.refreshVncPhones({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ refreshVncPhones', error);
    }
}


/**
 * 获取指定VNC下的号码列表
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字查询 
 * @params IsPhoneLine {boolean} 是否电话线路 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getVncPhones({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getVncPhones({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('edmsBiz ~ getVncPhones', error);
    }
}

```

 