// api 
``` js
// 搜索事项时段配置
getMatterTimeConfigs: (params, config) => this._getConfig(`/api/MatterTimeConfigs`, "get", params, config), 
// 新增事项时段配置
addMatterTimeConfigs: (params, config) => this._getConfig(`/api/MatterTimeConfigs`, "post", params, config), 
// 获取事项时段配置
getMatterTimeConfigsById: (params, config) => this._getConfig(`/api/MatterTimeConfigs/${params.id}`, "get", params, config), 
// 更新事项时段配置
updateMatterTimeConfigs: (params, config) => this._getConfig(`/api/MatterTimeConfigs/${params.id}`, "put", params, config), 
// 删除事项时段配置
deleteMatterTimeConfigs: (params, config) => this._getConfig(`/api/MatterTimeConfigs/${params.id}`, "delete", params, config), 
// 添加日程事项
addScheduleMatters: (params, config) => this._getConfig(`/api/ScheduleMatters`, "post", params, config), 
// 搜索日程事项
getScheduleMatters: (params, config) => this._getConfig(`/api/ScheduleMatters`, "get", params, config), 
// 获取日程事项
getScheduleMattersById: (params, config) => this._getConfig(`/api/ScheduleMatters/${params.id}`, "get", params, config), 
// 更新日程事项
updateScheduleMatters: (params, config) => this._getConfig(`/api/ScheduleMatters/${params.id}`, "put", params, config), 
// 取消日程事项
deleteScheduleMatter: (params, config) => this._getConfig(`/api/ScheduleMatters/${params.id}`, "delete", params, config), 
// 搜索日程协作人
searchScheduleMember: (params, config) => this._getConfig(`/api/ScheduleMatters/member`, "get", params, config), 
// 搜索Qts预约事项
getQts: (params, config) => this._getConfig(`/api/ScheduleMatters/other`, "get", params, config), 
// 修改周期性日程事项的某一日程事项
updateSingleScheduleMatter: (params, config) => this._getConfig(`/api/ScheduleMatters/${params.id}/single`, "put", params, config), 
```

 // biz 
``` js
/**
 * 搜索事项时段配置
 * @params keyword {string} 关键词 
 * @params Type {integer} 日程事项类型 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMatterTimeConfigs(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMatterTimeConfigs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ getMatterTimeConfigs', error);
    }
}


/**
 * 新增事项时段配置
 * @params name {string} 名称 （必填）
 * @params startHour {integer} 开始小时 （必填）
 * @params startMinute {integer} 开始分钟 （必填）
 * @params endHour {integer} 结束小时 （必填）
 * @params endMinute {integer} 结束分钟 （必填）
 * @params type {integer} 日程事项类型1:Normal,个人事项; 2:Shift,排班; 4:VideoConference,视频会议预约; 8:VoiceConference,语音会议预约; 16:VoiceNotification,语音通知预约;  （必填）
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @startHour {integer} 开始小时
 *    @startMinute {integer} 开始分钟
 *    @endHour {integer} 结束小时
 *    @endMinute {integer} 结束分钟
 *    @type {integer} 日程事项类型1:Normal,个人事项; 2:Shift,排班; 4:VideoConference,视频会议预约; 8:VoiceConference,语音会议预约; 16:VoiceNotification,语音通知预约; 
*/
async addMatterTimeConfigs({ name, startHour, startMinute, endHour, endMinute, type  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addMatterTimeConfigs({name, startHour, startMinute, endHour, endMinute, type,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ addMatterTimeConfigs', error);
    }
}


/**
 * 获取事项时段配置
 * @params id {string} id （必填）
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @startHour {integer} 开始小时
 *    @startMinute {integer} 开始分钟
 *    @endHour {integer} 结束小时
 *    @endMinute {integer} 结束分钟
 *    @type {integer} 日程事项类型1:Normal,个人事项; 2:Shift,排班; 4:VideoConference,视频会议预约; 8:VoiceConference,语音会议预约; 16:VoiceNotification,语音通知预约; 
*/
async getMatterTimeConfigsById(id, config = {}) {
    try {
        const { data } = await this.api.getMatterTimeConfigsById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ getMatterTimeConfigsById', error);
    }
}


/**
 * 更新事项时段配置
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @params startHour {integer} 开始小时 （必填）
 * @params startMinute {integer} 开始分钟 （必填）
 * @params endHour {integer} 结束小时 （必填）
 * @params endMinute {integer} 结束分钟 （必填）
 * @params type {integer} 日程事项类型1:Normal,个人事项; 2:Shift,排班; 4:VideoConference,视频会议预约; 8:VoiceConference,语音会议预约; 16:VoiceNotification,语音通知预约;  （必填）
 * @returns
*/
async updateMatterTimeConfigs({ id, name, startHour, startMinute, endHour, endMinute, type  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateMatterTimeConfigs({id, name, startHour, startMinute, endHour, endMinute, type,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ updateMatterTimeConfigs', error);
    }
}


/**
 * 删除事项时段配置
 * @params id {string} id （必填）
 * @returns
*/
async deleteMatterTimeConfigs(id, config = {}) {
    try {
        const { data } = await this.api.deleteMatterTimeConfigs({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ deleteMatterTimeConfigs', error);
    }
}


/**
 * 添加日程事项
 * @params name {string} 名称 （必填）
 * @params type {integer} 日程事项类型1:Normal,个人事项; 2:Shift,排班; 4:VideoConference,视频会议预约; 8:VoiceConference,语音会议预约; 16:VoiceNotification,语音通知预约;  （必填）
 * @params description {string} 描述 
 * @params startTime {string} 日程开始时间 （必填）
 * @params endTime {string} 日程结束时间 （必填）
 * @params repeatType {integer} 重复类型0:None,不重复; 1:WorkingDay,工作日; 2:Daily,每日; 3:Weekly,每周; 4:PerMonth,每月;  
 * @params repeatOverTime {string} 截至时间 
 * @params assistMembers {array} 事项协作人 
 * @params isRemind {boolean} 是否提醒 
 * @params remindType {integer} 提醒类型1:Sms,短信提醒; 2:Voice,电话提醒; 4:ZheZhengDingWorkMsg,浙政钉通知; 8:YunZhiJiaMsg,云之家通知; 16:Email,邮件通知;  
 * @params remindAdvanceMinutes {integer} 提前提醒分钟数 
 * @returns
 *    @id {string} 日程事项id
 *    @name {string} 名称
 *    @type {integer} 日程事项类型1:Normal,个人事项; 2:Shift,排班; 4:VideoConference,视频会议预约; 8:VoiceConference,语音会议预约; 16:VoiceNotification,语音通知预约; 
 *    @description {string} 描述
 *    @startTime {string} 日程开始时间
 *    @endTime {string} 日程结束时间
 *    @repeatType {integer} 重复类型0:None,不重复; 1:WorkingDay,工作日; 2:Daily,每日; 3:Weekly,每周; 4:PerMonth,每月; 
 *    @repeatOverTime {string} 截至时间
 *    @assistMembers {array} 事项协作人
 *    @isRemind {boolean} 是否提醒
 *    @remindType {integer} 提醒类型1:Sms,短信提醒; 2:Voice,电话提醒; 4:ZheZhengDingWorkMsg,浙政钉通知; 8:YunZhiJiaMsg,云之家通知; 16:Email,邮件通知; 
 *    @remindAdvanceMinutes {integer} 提前提醒分钟数
 *    @actualSchedules {array} 实际日程
 *    @ownerId {string} 日程事项拥有者
 *    @subScheduleMatters {array} 子日程
*/
async addScheduleMatters({ name, type, startTime, endTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addScheduleMatters({name, type, startTime, endTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ addScheduleMatters', error);
    }
}


/**
 * 搜索日程事项
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params departmentId {string} 部门ID 
 * @params keyword {string} 关键词 
 * @params scheduleType {integer} 预约类型:个人事项1，排班2，视频会议4，语音会议8，二进制按位与提交，例如：个人事项+排班=3 
 * @params permissionType {undefined} 权限类型 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getScheduleMatters(params = {}, config = {}) {
    try {
        const { data } = await this.api.getScheduleMatters(params,config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ getScheduleMatters', error);
    }
}


/**
 * 获取日程事项
 * @params id {string} id （必填）
 * @returns
 *    @id {string} 日程事项id
 *    @name {string} 名称
 *    @type {integer} 日程事项类型1:Normal,个人事项; 2:Shift,排班; 4:VideoConference,视频会议预约; 8:VoiceConference,语音会议预约; 16:VoiceNotification,语音通知预约; 
 *    @description {string} 描述
 *    @startTime {string} 日程开始时间
 *    @endTime {string} 日程结束时间
 *    @repeatType {integer} 重复类型0:None,不重复; 1:WorkingDay,工作日; 2:Daily,每日; 3:Weekly,每周; 4:PerMonth,每月; 
 *    @repeatOverTime {string} 截至时间
 *    @assistMembers {array} 事项协作人
 *    @isRemind {boolean} 是否提醒
 *    @remindType {integer} 提醒类型1:Sms,短信提醒; 2:Voice,电话提醒; 4:ZheZhengDingWorkMsg,浙政钉通知; 8:YunZhiJiaMsg,云之家通知; 16:Email,邮件通知; 
 *    @remindAdvanceMinutes {integer} 提前提醒分钟数
 *    @actualSchedules {array} 实际日程
 *    @ownerId {string} 日程事项拥有者
 *    @subScheduleMatters {array} 子日程
*/
async getScheduleMattersById(id, config = {}) {
    try {
        const { data } = await this.api.getScheduleMattersById({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ getScheduleMattersById', error);
    }
}


/**
 * 更新日程事项
 * @params id {string} id （必填）
 * @params name {string} 名称 （必填）
 * @params type {integer} 日程事项类型1:Normal,个人事项; 2:Shift,排班; 4:VideoConference,视频会议预约; 8:VoiceConference,语音会议预约; 16:VoiceNotification,语音通知预约;  （必填）
 * @params description {string} 描述 
 * @params startTime {string} 日程开始时间 （必填）
 * @params endTime {string} 日程结束时间 （必填）
 * @params repeatType {integer} 重复类型0:None,不重复; 1:WorkingDay,工作日; 2:Daily,每日; 3:Weekly,每周; 4:PerMonth,每月;  
 * @params repeatOverTime {string} 截至时间 
 * @params assistMembers {array} 事项协作人 
 * @params isRemind {boolean} 是否提醒 
 * @params remindType {integer} 提醒类型1:Sms,短信提醒; 2:Voice,电话提醒; 4:ZheZhengDingWorkMsg,浙政钉通知; 8:YunZhiJiaMsg,云之家通知; 16:Email,邮件通知;  
 * @params remindAdvanceMinutes {integer} 提前提醒分钟数 
 * @returns
*/
async updateScheduleMatters({ id, name, type, startTime, endTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateScheduleMatters({id, name, type, startTime, endTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ updateScheduleMatters', error);
    }
}


/**
 * 取消日程事项
 * @params id {string} id （必填）
 * @returns
*/
async deleteScheduleMatter(id, config = {}) {
    try {
        const { data } = await this.api.deleteScheduleMatter({ id }, config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ deleteScheduleMatter', error);
    }
}


/**
 * 搜索日程协作人
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params departmentId {string} 部门ID 
 * @params keyword {string} 关键词 
 * @params scheduleType {integer} 预约类型:个人事项1，排班2，视频会议4，语音会议8，二进制按位与提交，例如：个人事项+排班=3 
 * @params permissionType {undefined} 权限类型 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchScheduleMember(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchScheduleMember(params,config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ searchScheduleMember', error);
    }
}


/**
 * 搜索Qts预约事项
 * @params startTime {string} 开始时间 
 * @params endTime {string} 结束时间 
 * @params departmentId {string} 部门ID 
 * @params keyword {string} 关键词 
 * @params scheduleType {integer} 预约类型:个人事项1，排班2，视频会议4，语音会议8，二进制按位与提交，例如：个人事项+排班=3 
 * @params permissionType {undefined} 权限类型 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量, [1, 128] 默认：100 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getQts(params = {}, config = {}) {
    try {
        const { data } = await this.api.getQts(params,config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ getQts', error);
    }
}


/**
 * 修改周期性日程事项的某一日程事项
 * @params id {string} id （必填）
 * @params subId {string} 子日程Id 
 * @params startTime {string} 开始时间 （必填）
 * @params endTime {string} 结束时间 （必填）
 * @returns
*/
async updateSingleScheduleMatter({ id, startTime, endTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateSingleScheduleMatter({id, startTime, endTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('scheduleBiz ~ updateSingleScheduleMatter', error);
    }
}

```

 