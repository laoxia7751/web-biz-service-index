// api 
``` js
// 获取分组列表
getCameraGroups: (params, config) => this._getConfig(`/api/CameraGroups`, "get", params, config), 
// 批量查询监控组信息接口
searchCameraGroups: (params, config) => this._getConfig(`/api/CameraGroups/batch`, "post", params, config), 
// 同级监控组移动
moveCameraGroup: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/move`, "put", params, config), 
// 根据父Id获取监控组
getChildrenCameraGroupsById: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/children`, "get", params, config), 
// 批量添加监控组/监控到下级资源组/预案组/自定义组
batchAddCameraGroup: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/children`, "put", params, config), 
// 批量添加监控到预案组或自定义组
batchAddCameraToGroup: (params, config) => this._getConfig(`/api/CameraGroups/camera/batch`, "put", params, config), 
// 修改组信息，监控组不能修改名称和描述，预案组和自定义组都能修改
editCameraGroups: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}`, "put", params, config), 
// 监控组搜索
queryCameraGroups: (params, config) => this._getConfig(`/api/CameraGroups/Search`, "get", params, config), 
// 监控组和监控搜索
searchGroupAndCamera: (params, config) => this._getConfig(`/api/CameraGroups/advance_search`, "get", params, config), 
// 组内移动监控
moveCamera: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/camera/move`, "put", params, config), 
// 组内监控置顶
moveCameraTop: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/camera/top`, "put", params, config), 
// 移除预案组下得下级资源组/预案组/自定义组
deleteSubGroup: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/children/${params.subGroupId}`, "delete", params, config), 
// 下级资源添加组并挂载未分配目录资源
addSubGroup: (params, config) => this._getConfig(`/api/CameraGroups/group`, "post", params, config), 
// 获取监控组下监控（包含子组监控）
getCameraGroupSubordinates: (params, config) => this._getConfig(`/api/CameraGroups/subordinates`, "post", params, config), 
// 批量添加监控到预案组中（我的资源）
batchAddCamerasToGroup: (params, config) => this._getConfig(`/api/CameraGroups/${params.id}/cameras/batch`, "post", params, config), 
// 获取全部的分组列表。
getCameraByGroup: (params, config) => this._getConfig(`/api/Cameras/groups`, "get", params, config), 
// 创建组(预案组/自定义组)
createMonitoringPlanGroup: (params, config) => this._getConfig(`/api/Cameras/groups`, "post", params, config), 
// 分页获取分组下的监控列表
getCameraListById: (params, config) => this._getConfig(`/api/Cameras/groups/${params.groupId}`, "get", params, config), 
// 获取监控flv/rtsp播放地址
getCameraPlayUrlsById: (params, config) => this._getConfig(`/api/Cameras/${params.id}/playUrls`, "get", params, config), 
// 周边监控查询
searchCircleAreaCamera: (params, config) => this._getConfig(`/api/Cameras/circle_area`, "post", params, config), 
// 获取监控详情
getCameraById: (params, config) => this._getConfig(`/api/Cameras/${params.id}`, "get", params, config), 
// 修改监控
editCamera: (params, config) => this._getConfig(`/api/Cameras/${params.id}`, "put", params, config), 
// 监控搜索（区域搜索）
getCamerasByArea: (params, config) => this._getConfig(`/api/Cameras/area_query`, "get", params, config), 
// 监控搜索（关键字搜索）
cameraSearchByKey: (params, config) => this._getConfig(`/api/Cameras/search`, "get", params, config), 
// 监控巡检数据搜索
searchDetectionData: (params, config) => this._getConfig(`/api/Cameras/detection/search`, "get", params, config), 
// 监控巡检数据下载
downloadDetectionData: (params, config) => this._getConfig(`/api/Cameras/detection/download`, "get", params, config), 
// 修改组,监控组支持修改联系人不支持修改名称和描述，预案组和自定义组支持修改名称和描述不支持修改联系人
editMonitoringPlanGroup: (params, config) => this._getConfig(`/api/Cameras/groups/${params.id}`, "put", params, config), 
// 删除组(预案组/自定义组)
deleteCameraGroup: (params, config) => this._getConfig(`/api/Cameras/groups/${params.id}`, "delete", params, config), 
// 移动监控项(监控或预案组)到指定预案组
removeCamera: (params, config) => this._getConfig(`/api/Cameras/groups/${params.id}/children`, "put", params, config), 
// 预案分组排序接口
sortPlansGroup: (params, config) => this._getConfig(`/api/Cameras/groups/${params.id}/order`, "put", params, config), 
// 提供能够通过监控组直接将组下监控放到预案组中
collectionMonitoringToPlanGroup: (params, config) => this._getConfig(`/api/Cameras/groups/children`, "post", params, config), 
// 删除预案组/自定义组下的某个监控
deletePlanGroupMonitoring: (params, config) => this._getConfig(`/api/Cameras/groups/${params.groupId}/children/${params.cameraId}`, "delete", params, config), 
// 获取预案组下被收藏的监控
getPreplanCameras: (params, config) => this._getConfig(`/api/Cameras/groups/${params.id}/preplan_cameras`, "get", params, config), 
// 获取监控所在的预案组
getPreplanGroupsByCameraId: (params, config) => this._getConfig(`/api/Cameras/${params.id}/preplan_groups`, "get", params, config), 
// 监控详情-获取监控历史巡检记录
getCameraDetectionRecords: (params, config) => this._getConfig(`/api/Cameras/${params.id}/detection_records`, "get", params, config), 
// 监控资源-高级搜索
searchCameras: (params, config) => this._getConfig(`/api/Cameras/advance_search`, "get", params, config), 
// 控制云台
controlCameras: (params, config) => this._getConfig(`/api/Cameras/${params.id}/control`, "put", params, config), 
// 下级录像回放控制
setCameraPlayback: (params, config) => this._getConfig(`/api/Cameras/${params.id}/playback_control`, "put", params, config), 
// 监控录像开始
startVideoRecording: (params, config) => this._getConfig(`/api/Cameras/${params.id}/videos/start`, "put", params, config), 
// 监控录像结束
stopVideoRecording: (params, config) => this._getConfig(`/api/Cameras/${params.id}/videos/stop`, "put", params, config), 
// 监控截图
cameraScreenshot: (params, config) => this._getConfig(`/api/Cameras/${params.id}/pictures`, "put", params, config), 
// 条件查询监控录像列表
getMediaRecords: (params, config) => this._getConfig(`/api/Cameras/mediarecords`, "get", params, config), 
// 当前用户是否对监控录像中
getUserInVideoById: (params, config) => this._getConfig(`/api/Cameras/${params.id}/isvideoing`, "get", params, config), 
// 当前用户监控录像信息
<remarks>如果用户对监控没有在录像中，则返回404，否则返回具体的录像信息</remarks>
getCameraRecordingInfo: (params, config) => this._getConfig(`/api/Cameras/${params.id}/recordingInfo`, "get", params, config), 
// 获取监控所在的所有收藏组
getFavoriteGroupsById: (params, config) => this._getConfig(`/api/Cameras/${params.id}/favorite_groups`, "get", params, config), 
// 添加监控设备
addCameras: (params, config) => this._getConfig(`/api/Cameras`, "post", params, config), 
// 搜索onVif设备
searchOnVif: (params, config) => this._getConfig(`/api/Cameras/onVif_cameras/discovery`, "put", params, config), 
// 监控位置变更
editCameraLocation: (params, config) => this._getConfig(`/api/Cameras/${params.id}/location`, "put", params, config), 
// 根据标签Id查找监控
searchCamerasByLabel: (params, config) => this._getConfig(`/api/Cameras/search/label`, "post", params, config), 
// 导入监控（仅支持对经纬度的修改,导入后重新加载静态文件）
importCameras: (params, config) => this._getConfig(`/api/Cameras/import`, "post", params, config), 
// 根据监控Id集合获取监控信息
getCameraInfoByIds: (params, config) => this._getConfig(`/api/Cameras/batch`, "post", params, config), 
// 批量获取监控截图文件信息接口
queryMonitorScreenshot: (params, config) => this._getConfig(`/api/Cameras/images/batch`, "post", params, config), 
// 批量设置监控行政区域码
editCamerasAreaCode: (params, config) => this._getConfig(`/api/Cameras/areaCode/batch`, "put", params, config), 
// 获取行政区域下面的监控
getCamerasByAreaCode: (params, config) => this._getConfig(`/api/Cameras/areaCode/${params.areaCode}`, "get", params, config), 
// 搜索行政区域下的监控
searchCamerasByAreaCode: (params, config) => this._getConfig(`/api/Cameras/areaCode/search`, "post", params, config), 
// 获取下级监控录像
getVideosById: (params, config) => this._getConfig(`/api/Cameras/${params.id}/videos`, "get", params, config), 
// 条件查询监控状态变更记录
getCameraState: (params, config) => this._getConfig(`/api/Cameras/state/records`, "get", params, config), 
// 监控录像开始
startCameraVideo: (params, config) => this._getConfig(`/api/CameraVideos`, "post", params, config), 
// 监控录像结束
stopCameraVideo: (params, config) => this._getConfig(`/api/CameraVideos/${params.id}/stop`, "put", params, config), 
// 获取国标本级域信息
getCurrentDomains: (params, config) => this._getConfig(`/api/CurrentDomains`, "get", params, config), 
// 暂停巡检
pauseDetectionTasks: (params, config) => this._getConfig(`/api/DetectionTasks/${params.id}/pause`, "put", params, config), 
// 恢复巡检
resumeDetectionTasks: (params, config) => this._getConfig(`/api/DetectionTasks/${params.id}/resume`, "put", params, config), 
// 取消巡检
stopDetectionTasks: (params, config) => this._getConfig(`/api/DetectionTasks/${params.id}/stop`, "put", params, config), 
// 获取指定巡检任务的所有记录
getDetectionTaskRecords: (params, config) => this._getConfig(`/api/DetectionTasks/${params.id}/records`, "get", params, config), 
// 获取巡检任务详情
getDetectionDetails: (params, config) => this._getConfig(`/api/DetectionTasks/${params.id}`, "get", params, config), 
// 获取所有巡检任务执行情况，可通过 JobId 过滤
getDetectionTasks: (params, config) => this._getConfig(`/api/DetectionTasks`, "get", params, config), 
// 获取最新有效的巡检任务（不是重复执行的任务）
getLatestEffective: (params, config) => this._getConfig(`/api/DetectionTasks/newest_effective`, "get", params, config), 
// 获取最新有效的巡检任务（不是重复执行的任务）
getLatestDetectionTasks: (params, config) => this._getConfig(`/api/DetectionTasks/newest_effectives`, "post", params, config), 
// 导入收藏监控，一般用于设施收藏监控
importFavoriteCameraItems: (params, config) => this._getConfig(`/api/FavoriteCameraItems/import`, "post", params, config), 
// 创建收藏项，包括收藏组和收藏监控. 收藏类型：1-收藏组 2-收藏监控
createFavoriteCameraItem: (params, config) => this._getConfig(`/api/FavoriteCameraItems`, "post", params, config), 
// 条件查询收藏项
getFavoriteCameraItems: (params, config) => this._getConfig(`/api/FavoriteCameraItems`, "get", params, config), 
// 为设施、专题等非人创建收藏监控
saveFavoriteCameraItems: (params, config) => this._getConfig(`/api/FavoriteCameraItems/sub`, "post", params, config), 
// 获取根收藏项
getRootFavoriteCameraItems: (params, config) => this._getConfig(`/api/FavoriteCameraItems/root`, "get", params, config), 
// 获取子收藏项
getChildrenFavoriteCameraItems: (params, config) => this._getConfig(`/api/FavoriteCameraItems/${params.parentId}/children`, "get", params, config), 
// 修改收藏项（监控不能修改名称）
editFavoriteCameraItem: (params, config) => this._getConfig(`/api/FavoriteCameraItems/${params.id}`, "put", params, config), 
// 删除收藏组或收藏监控
deleteFavoriteCameraItem: (params, config) => this._getConfig(`/api/FavoriteCameraItemTypes/${params.type}/FavoriteCameraItems/${params.id}`, "delete", params, config), 
// 批量绑定收藏监控，subId为绑定 Id，subType为收藏主体类型，如收藏主体类型为电话填写phone，则subId为电话号码
batchEditFavoriteCameraItems: (params, config) => this._getConfig(`/api/FavoriteCameraItems/${params.subType}/${params.subId}/batch`, "put", params, config), 
// 同步国标下级域
syncGbConfigDomain: (params, config) => this._getConfig(`/api/GbConfigs/sync_domain`, "post", params, config), 
// 修改国标下级域
editGbConfigDomain: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}`, "put", params, config), 
// 查询国标下级域详情
getGbConfigDomainById: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}`, "get", params, config), 
// 分页查询下级域（同步的详细信息）
getGbConfigDomains: (params, config) => this._getConfig(`/api/GbConfigs/domains`, "get", params, config), 
// 添加下级域接口
addGbConfigDomains: (params, config) => this._getConfig(`/api/GbConfigs/domains`, "post", params, config), 
// 获取未管理的下级域
getUnusedDomains: (params, config) => this._getConfig(`/api/GbConfigs/unused_domains`, "get", params, config), 
// 批量删除国标下级域
deleteDomains: (params, config) => this._getConfig(`/api/GbConfigs/domains/batch`, "post", params, config), 
// 清空下级域所有数据
clearDomains: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}/data`, "delete", params, config), 
// 同步历史记录分页查询
getSyncTaskHistories: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}/syncTaskHistories`, "get", params, config), 
// 同步记录数据多条件查询,传入id为同步任务的id
getSyncTaskHistoriesById: (params, config) => this._getConfig(`/api/GbConfigs/domains/syncTaskHistories/${params.id}/records`, "get", params, config), 
// 查询过期监控与监控组
getExpiredDomains: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}/expired`, "get", params, config), 
// 删除过期监控与监控组
deleteExpiredDomains: (params, config) => this._getConfig(`/api/GbConfigs/domains/${params.id}/expired/batch`, "post", params, config), 
// 条件查询视频历史拉流数据
getHistoryCameraPulls: (params, config) => this._getConfig(`/api/HistoryCameraPulls/search`, "get", params, config), 
// 获取指定历史拉流记录的详细信息
getHistoryCameraPullsById: (params, config) => this._getConfig(`/api/HistoryCameraPulls/${params.id}`, "get", params, config), 
// 条件查询视频历史拉流数据
searchHistoryCameraPulls: (params, config) => this._getConfig(`/api/HistoryCameraPulls`, "get", params, config), 
// 获取所有的标签
getAllLabels: (params, config) => this._getConfig(`/api/Label`, "get", params, config), 
// 创建新标签
createLabel: (params, config) => this._getConfig(`/api/Label`, "post", params, config), 
// 修改指定标签
editLabel: (params, config) => this._getConfig(`/api/Label/${params.id}`, "put", params, config), 
// 删除指定标签
deleteLabel: (params, config) => this._getConfig(`/api/Label/${params.id}`, "delete", params, config), 
// 批量删除标签
batchDeleteLabel: (params, config) => this._getConfig(`/api/Label/batch`, "delete", params, config), 
// 批量设置监控或监控组下监控的标签
batchEditCameraLabel: (params, config) => this._getConfig(`/api/Label/camera/batch`, "post", params, config), 
// 批量删除监控或监控组下监控的标签
batchDeleteCameraLabel: (params, config) => this._getConfig(`/api/Label/camera/batch`, "delete", params, config), 
// 分页查询直播列表
obtainLive: (params, config) => this._getConfig(`/api/Lives`, "get", params, config), 
// 主动打开联系人直播
openLives: (params, config) => this._getConfig(`/api/Lives`, "put", params, config), 
// 创建直播
createLives: (params, config) => this._getConfig(`/api/Lives`, "post", params, config), 
// 主动打开联系人直播，可传入直播标题和描述等信息
openLiveWithInfo: (params, config) => this._getConfig(`/api/Lives/open`, "put", params, config), 
// 向指定的直播用户发送互动语音
sendAudio: (params, config) => this._getConfig(`/api/Lives/${params.stream}`, "post", params, config), 
// 获取指定的直播信息
getLiveInfo: (params, config) => this._getConfig(`/api/Lives/${params.stream}`, "get", params, config), 
// 关闭指定流 Id 的直播
closeLive: (params, config) => this._getConfig(`/api/Lives/${params.stream}`, "delete", params, config), 
// 获取历史直播的录屏信息
getVideoRecords: (params, config) => this._getConfig(`/api/Lives/${params.stream}/video_records`, "get", params, config), 
// 同步国标下级域
syncLowerDomains: (params, config) => this._getConfig(`/api/LowerDomains/sync`, "post", params, config), 
// 修改国标下级域
editLowerDomains: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}`, "put", params, config), 
// 查询国标下级域详情
getLowerDomainById: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}`, "get", params, config), 
// 分页查询下级域（同步的详细信息）
getLowerDomains: (params, config) => this._getConfig(`/api/LowerDomains`, "get", params, config), 
// 添加下级域接口
addLowerDomain: (params, config) => this._getConfig(`/api/LowerDomains`, "post", params, config), 
// 获取未管理的下级域
getUnusedLowerDomains: (params, config) => this._getConfig(`/api/LowerDomains/unused_domains`, "get", params, config), 
// 同步历史记录分页查询
getLowerDomainsSyncHistories: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/syncTaskHistories`, "get", params, config), 
// 批量删除国标下级域
batchDeleteLowerDomains: (params, config) => this._getConfig(`/api/LowerDomains/batch`, "post", params, config), 
// 清空下级域所有数据
clearLowerDomains: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/data`, "delete", params, config), 
// 查询指定同步历史记录
getSyncTaskHistoryById: (params, config) => this._getConfig(`/api/LowerDomains/syncTaskHistories/${params.id}`, "get", params, config), 
// 同步记录数据多条件查询,传入id为同步任务的id
searchSyncTaskHistory: (params, config) => this._getConfig(`/api/LowerDomains/syncTaskHistories/${params.id}/records`, "get", params, config), 
// 查询过期监控与监控组
getExpiredLowerDomains: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/expired`, "get", params, config), 
// 重新计算过期数据
updateExpiredLowerDomains: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/expired`, "put", params, config), 
// 删除过期监控与监控组
batchDeleteExpiredLowerDomains: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/expired/batch`, "post", params, config), 
// 解决同步冲突
resolveLowerDomainsConflict: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/Conflict`, "put", params, config), 
// 分页获取下级域状态变更记录
getLowerDomainStateRecords: (params, config) => this._getConfig(`/api/LowerDomains/${params.id}/state/records`, "get", params, config), 
// 获取全部媒体服务
getAllMediaServers: (params, config) => this._getConfig(`/api/MediaServers`, "get", params, config), 
// 添加媒体服务
addMediaServers: (params, config) => this._getConfig(`/api/MediaServers`, "post", params, config), 
// 删除媒体服务
deleteMediaServers: (params, config) => this._getConfig(`/api/MediaServers/${params.id}`, "delete", params, config), 
// 查询某个流媒体实时拉流记录
getMediaSessions: (params, config) => this._getConfig(`/api/MediaSessions`, "get", params, config), 
// 查询具体流id的实时拉流详情信息
getMediaSessionsById: (params, config) => this._getConfig(`/api/MediaSessions/${params.id}`, "get", params, config), 
// 实时拉流记录统计
getMediaSessionStatistics: (params, config) => this._getConfig(`/api/MediaSessions/statistics`, "get", params, config), 
// 流录制接口
startSteamRecording: (params, config) => this._getConfig(`/api/Recording`, "post", params, config), 
// 获取当前的流的录制信息状态
getSteamRecordingInfo: (params, config) => this._getConfig(`/api/Recording`, "get", params, config), 
// 录制状态修改
editSteamRecordingStatus: (params, config) => this._getConfig(`/api/Recording/${params.streamId}/status`, "put", params, config), 
// 删除指定id的记录
deleteRecording: (params, config) => this._getConfig(`/api/Recording/${params.id}`, "delete", params, config), 
// 批量删除
batchDeleteRecording: (params, config) => this._getConfig(`/api/Recording/batch/delete`, "post", params, config), 
// 搜索录像截图操作记录以及文件信息
searchRecording: (params, config) => this._getConfig(`/api/Recording/search`, "get", params, config), 
// 获取信令
getSignals: (params, config) => this._getConfig(`/api/Signals`, "get", params, config), 
// 修改信令
editSignals: (params, config) => this._getConfig(`/api/Signals`, "put", params, config), 
// 统计监控总数（包括所有监控总数、质量优、良、差、故障的总数）
getCameras: (params, config) => this._getConfig(`/api/Statistics/cameras`, "get", params, config), 
// 统计故障监控的总数（包括故障类型统计）
getFaultCameras: (params, config) => this._getConfig(`/api/Statistics/cameras/fault`, "get", params, config), 
// 统计质量差的监控总数（包括质量差类型统计）
getBadCameras: (params, config) => this._getConfig(`/api/Statistics/cameras/bad`, "get", params, config), 
// 统计不同分辨率的监控总数
getCamerasResolution: (params, config) => this._getConfig(`/api/Statistics/cameras/resolution`, "get", params, config), 
// 统计巡检历史走势
getDetectionTasksHistory: (params, config) => this._getConfig(`/api/Statistics/detectionTasks/history`, "get", params, config), 
// 统计质量差的监控总数（包括质量差类型统计）
getCamerasByJobId: (params, config) => this._getConfig(`/api/Statistics/detectionTasks/${params.jobId}/quality`, "get", params, config), 
// 统计质量差的监控总数（包括质量差类型统计）
getBadCamerasByJobId: (params, config) => this._getConfig(`/api/Statistics/detectionTasks/${params.jobId}/bad`, "get", params, config), 
// 统计巡检详情不同故障类型监控数量
getFaultCamerasByJobId: (params, config) => this._getConfig(`/api/Statistics/detectionTasks/${params.jobId}/fault`, "get", params, config), 
// 该接口提供收藏夹总数(包括子收藏夹)
getFavoriteCameraGroupTotal: (params, config) => this._getConfig(`/api/Statistics/favoriteCameraGroup`, "get", params, config), 
// 查询指定job的巡检走势记录
getDetectionHistoryByJobId: (params, config) => this._getConfig(`/api/Statistics/detectionTasks/${params.jobId}/history`, "get", params, config), 
// 创建监控保活作业
addStreamKeepAliveJob: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs`, "post", params, config), 
// 按条件查询保活作业列表
getStreamKeepAliveJobs: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs`, "get", params, config), 
// 获取指定保活作业
getStreamKeepAliveJobById: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}`, "get", params, config), 
// 删除保活作业
deleteStreamKeepAliveJob: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}`, "delete", params, config), 
// 修改保活作业
editStreamKeepAliveJob: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}`, "put", params, config), 
// 修改保活作业的状态
editStreamKeepAliveJobStatus: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}/status`, "put", params, config), 
// 获取保活作业的执行任务
getStreamKeepAliveTasks: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}/task`, "get", params, config), 
// 获取保活作业指定任务的保活记录
getStreamKeepAliveRecords: (params, config) => this._getConfig(`/api/StreamKeepAliveJobs/${params.id}/record`, "get", params, config), 
// 添加上级域接口
addUpperDomain: (params, config) => this._getConfig(`/api/UpperDomains`, "post", params, config), 
// 分页查询上级域
getUpperDomains: (params, config) => this._getConfig(`/api/UpperDomains`, "get", params, config), 
// 修改国标上级域
editUpperDomain: (params, config) => this._getConfig(`/api/UpperDomains/${params.id}`, "put", params, config), 
// 删除上级域
deleteUpperDomain: (params, config) => this._getConfig(`/api/UpperDomains/${params.id}`, "delete", params, config), 
// 查询上级域详情
getUpperDomainById: (params, config) => this._getConfig(`/api/UpperDomains/${params.id}`, "get", params, config), 
// 根据同步记录id查询上级域历史同步记录
getUpperSyncTaskHistoryById: (params, config) => this._getConfig(`/api/UpperDomains/syncTaskHistories/${params.id}`, "get", params, config), 
// 上级域同步历史记录分页查询
getUpperDomainSyncHistory: (params, config) => this._getConfig(`/api/UpperDomains/${params.id}/syncTaskHistories`, "get", params, config), 
// 上级域同步记录数据多条件查询,传入id为同步任务的id
getUpperDomainSyncRecords: (params, config) => this._getConfig(`/api/UpperDomains/syncTaskHistories/${params.id}/records`, "get", params, config), 
// 分页获取上级域状态变更记录
getUpperDomainStateRecords: (params, config) => this._getConfig(`/api/UpperDomains/${params.id}/state/records`, "get", params, config), 
// 条件查询监控状态变更上报记录
getCamerasStateHistory: (params, config) => this._getConfig(`/api/UpperDomains/cameras/state/records`, "get", params, config), 
// 邀请/取消 摄像头 摄像头ID+会议室号
editInviteCamera: (params, config) => this._getConfig(`/api/VideoConferences/${params.conferenceNumber}/invite_camera`, "put", params, config), 
// 邀请/取消 直播 联系人ID+会议室号
editInviteLive: (params, config) => this._getConfig(`/api/VideoConferences/${params.conferenceNumber}/invite_live`, "put", params, config), 
// 会议直播 推流/取消 会议室号
videoConferenceToLive: (params, config) => this._getConfig(`/api/VideoConferences/${params.conferenceNumber}/to_live`, "put", params, config), 
// 获取会议直播直播
obtainConferenceLive: (params, config) => this._getConfig(`/api/VideoConferences/live/${params.conferenceNumber}`, "get", params, config), 
// 监控搜索
searchCamerasV2: (params, config) => this._getConfig(`/api/Cameras/Search`, "get", params, config), 
// 监控高级搜索
advanceSearchCameras: (params, config) => this._getConfig(`/api/Cameras/advance_search`, "post", params, config), 
// 添加国标监控终端
addGbCamera: (params, config) => this._getConfig(`/api/Cameras`, "post", params, config), 
// 更新国标监控终端
updateGbCamera: (params, config) => this._getConfig(`/api/Cameras/${params.id}`, "put", params, config), 
// 添加非标终端(包括视频推/拉流两种类型)
addNonStandardCamera: (params, config) => this._getConfig(`/api/Cameras/nonstandard`, "post", params, config), 
// 更新非标监控终端
updateNonStandardCamera: (params, config) => this._getConfig(`/api/Cameras/nonstandard/${params.id}`, "put", params, config), 
// 添加视频文件虚拟终端
addVirtualFile: (params, config) => this._getConfig(`/api/Cameras/virtual`, "post", params, config), 
// 更新虚拟终端
updateVirtualFileCamera: (params, config) => this._getConfig(`/api/Cameras/virtual/${params.id}`, "put", params, config), 
// 生成国标 Id
generateGbId: (params, config) => this._getConfig(`/api/Cameras/id`, "post", params, config), 
// 分页查询标签列表
getAllLabelsV2: (params, config) => this._getConfig(`/api/Label`, "get", params, config), 
// 查询实时拉流记录
getMediaSessionsV2: (params, config) => this._getConfig(`/api/MediaSessions`, "get", params, config), 
```

 // biz 
``` js
/**
 * 获取分组列表
 * @params GroupType {undefined} -1：全部(默认)；0：监控组 1：预案组 2：自定义组 
 * @params ParentId {string} 父节点id，不填时查询根节点 
 * @params SelectedIds {array} 被选中的节点，用于计算其父节点是否是全选,半选和未选中 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @sipServiceId {string} 国标下级Id
 *    @syncStatus {integer} 同步状态
 *    @sipServerStatus {integer} 上/下级域状态
 *    @useStatus {integer} 节点选中状态
 *    @isLeafGroup {boolean} 是否为叶子节点组。true 表示叶子节点，不会有子节点
 *    @isLeaf {boolean} 是否为叶子节点。true 表示叶子节点，不会有子节点
 *    @id {string} 分组Id
 *    @name {string} 分组名
 *    @description {string} 组信息描述
 *    @parentId {string} 父级Id
 *    @groupType {integer} 分组类型
 *    @cameraCount {integer} 摄像头总数包含下级分组的摄像头数量
 *    @cameraOnlineCount {integer} 在线摄像头总数包含下级分组的摄像头数量
 *    @selfCameraCount {integer} 自身组的摄像头总数
 *    @selfCameraOnlineCount {integer} 自身在线摄像头总数
 *    @order {integer} 排序字段
 *    @relatedParentId {string} 预案组/自定义组下级的关联父Id
 *    @principalOut {array} 监控负责人信息
 *    @owners {array} 负责人信息
 *    @idPath {string} Id路径
 *    @namePath {string} Name路径
 *    @isUserDefined {integer} 是否人为调整：0-未调整，1-已调整
 *    @cameraQualityStatistics {object} 质量统计
 *    @selfCameraQualityStatistics {object} 质量统计
 *    @cameraResolutionStatistics {object} 分辨率统计
 *    @selfCameraResolutionStatistics {object} 分辨率统计
*/
async getCameraGroups(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCameraGroups(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCameraGroups', error);
    }
}


/**
 * 批量查询监控组信息接口
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchCameraGroups(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchCameraGroups(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ searchCameraGroups', error);
    }
}


/**
 * 同级监控组移动
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params groupId {string} 需要移动的组 （必填）
 * @params afterGroupId {string} 后一个，没有表示移动到后一个 
 * @params beforeGroupId {string} 前一个，没有表示移动到第一个 
 * @returns
*/
async moveCameraGroup({ id, groupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.moveCameraGroup({id, groupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ moveCameraGroup', error);
    }
}


/**
 * 根据父Id获取监控组
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @sipServiceId {string} 国标下级Id
 *    @syncStatus {integer} 同步状态
 *    @sipServerStatus {integer} 上/下级域状态
 *    @useStatus {integer} 节点选中状态
 *    @isLeafGroup {boolean} 是否为叶子节点组。true 表示叶子节点，不会有子节点
 *    @isLeaf {boolean} 是否为叶子节点。true 表示叶子节点，不会有子节点
 *    @id {string} 分组Id
 *    @name {string} 分组名
 *    @description {string} 组信息描述
 *    @parentId {string} 父级Id
 *    @groupType {integer} 分组类型
 *    @cameraCount {integer} 摄像头总数包含下级分组的摄像头数量
 *    @cameraOnlineCount {integer} 在线摄像头总数包含下级分组的摄像头数量
 *    @selfCameraCount {integer} 自身组的摄像头总数
 *    @selfCameraOnlineCount {integer} 自身在线摄像头总数
 *    @order {integer} 排序字段
 *    @relatedParentId {string} 预案组/自定义组下级的关联父Id
 *    @principalOut {array} 监控负责人信息
 *    @owners {array} 负责人信息
 *    @idPath {string} Id路径
 *    @namePath {string} Name路径
 *    @isUserDefined {integer} 是否人为调整：0-未调整，1-已调整
 *    @cameraQualityStatistics {object} 质量统计
 *    @selfCameraQualityStatistics {object} 质量统计
 *    @cameraResolutionStatistics {object} 分辨率统计
 *    @selfCameraResolutionStatistics {object} 分辨率统计
*/
async getChildrenCameraGroupsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getChildrenCameraGroupsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getChildrenCameraGroupsById', error);
    }
}


/**
 * 批量添加监控组/监控到下级资源组/预案组/自定义组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params groupIds {array} 监控组id列表 
 * @params cameraIds {array} 监控id列表 
 * @returns
*/
async batchAddCameraGroup({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchAddCameraGroup({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ batchAddCameraGroup', error);
    }
}


/**
 * 批量添加监控到预案组或自定义组
 * @headers X-version {string}  
 * @params cameraIds {array} 监控id列表 （必填）
 * @params groupId {string} 组id （必填）
 * @params groupType {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @returns
*/
async batchAddCameraToGroup({ cameraIds, groupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchAddCameraToGroup({cameraIds, groupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ batchAddCameraToGroup', error);
    }
}


/**
 * 修改组信息，监控组不能修改名称和描述，预案组和自定义组都能修改
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 修改后的监控名 
 * @params description {string} 修改后的监控描述 
 * @params owners {array} 责任人 
 * @returns
*/
async editCameraGroups({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editCameraGroups({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editCameraGroups', error);
    }
}


/**
 * 监控组搜索
 * @params Keyword {string} 关键字 （必填）
 * @params GroupType {integer} 资源所属监控组类型,0表示搜索全部，1是国标资源，2是预案资源，4是本地资源，支持多种资源搜索，比如输入5，5=1+4，搜索国标资源和本地资源 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async queryCameraGroups({ Keyword  , ...params}, config = {}) {
    try {
        const { data } = await this.api.queryCameraGroups({Keyword,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ queryCameraGroups', error);
    }
}


/**
 * 监控组和监控搜索
 * @params Keyword {string} 关键字 
 * @params GroupType {integer} 资源所属监控组类型,0表示搜索全部，1是国标资源，2是预案资源，4是本地资源，支持多种资源搜索，比如输入5，5=1+4，搜索国标资源和本地资源 
 * @params Status {integer} 监控状态，0表示搜索全部；1是离线；2是在线；4是下级域离线后设备离线；8是设备在录像，设备一般为 IPC；支持多种资源搜索，比如输入5，5=1+4，搜索离线和下级域离线后设备离线，该参数限制0-15 
 * @params Quality {array} 质量 
 * @params Resolution {array} 分辨率 
 * @params Encode {array} 压缩格式 
 * @params Audio {boolean} 是否有音频 
 * @params LabelIds {array} 标签 
 * @params IsSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-全部 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @searchGroupOut {object} 分页查询结果
 *    @searchCameraOut {object} 分页查询结果
*/
async searchGroupAndCamera(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchGroupAndCamera(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ searchGroupAndCamera', error);
    }
}


/**
 * 组内移动监控
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params cameraId {string} 需要移动的监控 （必填）
 * @params afterCameraId {string} 后一个，没有表示移动到后一个 
 * @params beforeCameraId {string} 前一个，没有表示移动到第一个 
 * @returns
*/
async moveCamera({ id, cameraId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.moveCamera({id, cameraId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ moveCamera', error);
    }
}


/**
 * 组内监控置顶
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params cameraId {string} 监控id （必填）
 * @returns
*/
async moveCameraTop({ id, cameraId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.moveCameraTop({id, cameraId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ moveCameraTop', error);
    }
}


/**
 * 移除预案组下得下级资源组/预案组/自定义组
 * @params id {string} id （必填）
 * @params subGroupId {string} subGroupId （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteSubGroup({ id, subGroupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteSubGroup({id, subGroupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ deleteSubGroup', error);
    }
}


/**
 * 下级资源添加组并挂载未分配目录资源
 * @headers X-version {string}  
 * @params groupIds {array} 未分配目录中的组id集合 
 * @params cameraIds {array} 未分配目录中的监控id集合 
 * @params name {string} 组名称 （必填）
 * @params parentId {string} 上级组Id （必填）
 * @params description {string} 描述 
 * @params type {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @params owners {array} 责任人 
 * @returns
 *    @sipServiceId {string} 国标下级Id
 *    @syncStatus {integer} 同步状态
 *    @sipServerStatus {integer} 上/下级域状态
 *    @useStatus {integer} 节点选中状态
 *    @isLeafGroup {boolean} 是否为叶子节点组。true 表示叶子节点，不会有子节点
 *    @isLeaf {boolean} 是否为叶子节点。true 表示叶子节点，不会有子节点
 *    @id {string} 分组Id
 *    @name {string} 分组名
 *    @description {string} 组信息描述
 *    @parentId {string} 父级Id
 *    @groupType {integer} 分组类型
 *    @cameraCount {integer} 摄像头总数包含下级分组的摄像头数量
 *    @cameraOnlineCount {integer} 在线摄像头总数包含下级分组的摄像头数量
 *    @selfCameraCount {integer} 自身组的摄像头总数
 *    @selfCameraOnlineCount {integer} 自身在线摄像头总数
 *    @order {integer} 排序字段
 *    @relatedParentId {string} 预案组/自定义组下级的关联父Id
 *    @principalOut {array} 监控负责人信息
 *    @owners {array} 负责人信息
 *    @idPath {string} Id路径
 *    @namePath {string} Name路径
 *    @isUserDefined {integer} 是否人为调整：0-未调整，1-已调整
 *    @cameraQualityStatistics {object} 质量统计
 *    @selfCameraQualityStatistics {object} 质量统计
 *    @cameraResolutionStatistics {object} 分辨率统计
 *    @selfCameraResolutionStatistics {object} 分辨率统计
*/
async addSubGroup({ name, parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addSubGroup({name, parentId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ addSubGroup', error);
    }
}


/**
 * 获取监控组下监控（包含子组监控）
 * @headers X-version {string}  
 * @params ids {array} 组Id集合 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCameraGroupSubordinates({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCameraGroupSubordinates({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCameraGroupSubordinates', error);
    }
}


/**
 * 批量添加监控到预案组中（我的资源）
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params groupIds {array} 监控组id列表 （必填）
 * @params cameraIds {array} 监控id列表 （必填）
 * @returns
*/
async batchAddCamerasToGroup({ id, groupIds, cameraIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchAddCamerasToGroup({id, groupIds, cameraIds,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ batchAddCamerasToGroup', error);
    }
}


/**
 * 获取全部的分组列表。
 * @params GroupType {undefined} -1：全部(默认)；0：监控组 1：预案组 2：自定义组 
 * @params ParentId {string} 父节点id，不填时查询根节点 
 * @params SelectedIds {array} 被选中的节点，用于计算其父节点是否是全选,半选和未选中 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCameraByGroup(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCameraByGroup(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCameraByGroup', error);
    }
}


/**
 * 创建组(预案组/自定义组)
 * @headers X-version {string}  
 * @params name {string} 组名称 （必填）
 * @params parentId {string} 上级组Id （必填）
 * @params description {string} 描述 
 * @params type {integer} 监控组类型枚举(可以人为创建的组类型) 
 * @params owners {array} 责任人 
 * @returns
 *    @sipServiceId {string} 国标下级Id
 *    @syncStatus {integer} 同步状态
 *    @sipServerStatus {integer} 上/下级域状态
 *    @useStatus {integer} 节点选中状态
 *    @isLeafGroup {boolean} 是否为叶子节点组。true 表示叶子节点，不会有子节点
 *    @isLeaf {boolean} 是否为叶子节点。true 表示叶子节点，不会有子节点
 *    @id {string} 分组Id
 *    @name {string} 分组名
 *    @description {string} 组信息描述
 *    @parentId {string} 父级Id
 *    @groupType {integer} 分组类型
 *    @cameraCount {integer} 摄像头总数包含下级分组的摄像头数量
 *    @cameraOnlineCount {integer} 在线摄像头总数包含下级分组的摄像头数量
 *    @selfCameraCount {integer} 自身组的摄像头总数
 *    @selfCameraOnlineCount {integer} 自身在线摄像头总数
 *    @order {integer} 排序字段
 *    @relatedParentId {string} 预案组/自定义组下级的关联父Id
 *    @principalOut {array} 监控负责人信息
 *    @owners {array} 负责人信息
 *    @idPath {string} Id路径
 *    @namePath {string} Name路径
 *    @isUserDefined {integer} 是否人为调整：0-未调整，1-已调整
 *    @cameraQualityStatistics {object} 质量统计
 *    @selfCameraQualityStatistics {object} 质量统计
 *    @cameraResolutionStatistics {object} 分辨率统计
 *    @selfCameraResolutionStatistics {object} 分辨率统计
*/
async createMonitoringPlanGroup({ name, parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.createMonitoringPlanGroup({name, parentId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ createMonitoringPlanGroup', error);
    }
}


/**
 * 分页获取分组下的监控列表
 * @params groupId {string} groupId （必填）
 * @params KeyWord {string} 关键字 
 * @params Online {boolean} 是否在线 
 * @params Quality {array} 质量 
 * @params Resolution {array} 分辨率 
 * @params VideoEncoder {array} 压缩格式 
 * @params Audio {boolean} 是否有音频 
 * @params LabelIds {array} 标签 
 * @params IsSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-全部 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCameraListById({ groupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCameraListById({groupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCameraListById', error);
    }
}


/**
 * 获取监控flv/rtsp播放地址
 * @params id {string} id （必填）
 * @params PlayUrlShowType {undefined} 播放地址返回类型。0-完整url | 1-只有路径和参数 
 * @headers X-version {string}  
 * @returns
 *    @playUrlType {integer} Url对应的实体类型
 *    @rtspUrl {string} rtsp播放地址
 *    @flvUrl {string} flv播放地址
 *    @wsUrl {string} Ws 协议播放地址
 *    @rtmpUrl {string} rtmp 的协议播放地址
 *    @webRtc {string} wbertc播放地址
*/
async getCameraPlayUrlsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCameraPlayUrlsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCameraPlayUrlsById', error);
    }
}


/**
 * 周边监控查询
 * @headers X-version {string}  
 * @params center {object} 坐标点 （必填）
 * @params radius {number} 半径（单位米） （必填）
 * @params labelIds {array} 监控标签集合 
 * @params sortRule {integer} 排序规则 
 * @params upLeft {object} 坐标点 （必填）
 * @params bottomRight {object} 坐标点 （必填）
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchCircleAreaCamera({ center, radius, upLeft, bottomRight  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchCircleAreaCamera({center, radius, upLeft, bottomRight,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ searchCircleAreaCamera', error);
    }
}


/**
 * 获取监控详情
 * @params id {string} id （必填）
 * @params PlayUrlShowType {undefined} 播放地址返回类型。0-完整url | 1-只有路径和参数 
 * @headers X-version {string}  
 * @returns
 *    @playUrl {object} 返回监控播放Url实体
 *    @extension {object} 扩展信息
 *    @type {integer} 终端类型.  0:国标 1:视频拉流终端 2:视频推流终端 3:视频文件终端
 *    @groupType {integer} 类型组：0-监控组，1-预案组 2-自定义组
 *    @videoEncoder {integer} 视频编码类型
 *    @resolution {integer} 分辨率
 *    @audio {boolean} 是否有音频
 *    @result {integer} 图片质量类型
 *    @resultDetail {object} 图片质量
 *    @namePath {string} 监控名字路径
 *    @idPath {string} 监控ID路径
 *    @order {integer} 排序字段
 *    @detectionCount {integer} 巡检的次数
 *    @faultDetail {integer} 质量故障的错误码：http://git.rdapp.com/product/knowledge-planet/issues/818
 *    @isManual {boolean} 是否是手动设置
 *    @labels {array} 标签
 *    @audioEncodingFormat {string} 音频编码属性
 *    @isSupportPTZ {boolean} 是否可以进行云台控制
 *    @aliasName {string} 监控别名
 *    @originalName {string} 原始名称
 *    @status {integer} 监控状态
 *    @quality {integer} 图片质量类型
 *    @areaCode {string} 行政区域码
 *    @thumbnailID {string} 图片id
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @id {string} ID
 *    @name {string} 名称
*/
async getCameraById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCameraById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCameraById', error);
    }
}


/**
 * 修改监控
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params aliasName {string} 监控别名 
 * @params quality {integer} 图片质量类型 
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改 
 * @params labelIds {array} 监控标签id （必填）
 * @params isSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-不修改 
 * @params longitude {number} 经度 （必填）
 * @params latitude {number} 纬度 （必填）
 * @params areaCode {string} 行政区域码 
 * @returns
*/
async editCamera({ id, labelIds, longitude, latitude  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editCamera({id, labelIds, longitude, latitude,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editCamera', error);
    }
}


/**
 * 监控搜索（区域搜索）
 * @params UpLeft.Longitude {number} 经度 （必填）
 * @params UpLeft.Latitude {number} 纬度 （必填）
 * @params BottomRight.Longitude {number} 经度 （必填）
 * @params BottomRight.Latitude {number} 纬度 （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCamerasByArea({ UpLeft.Longitude, UpLeft.Latitude, BottomRight.Longitude, BottomRight.Latitude  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCamerasByArea({UpLeft.Longitude, UpLeft.Latitude, BottomRight.Longitude, BottomRight.Latitude,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCamerasByArea', error);
    }
}


/**
 * 监控搜索（关键字搜索）
 * @params Keyword {string} 关键字 （必填）
 * @params GroupType {undefined} 组类型(类型组：0-监控组，1-自定义组) 
 * @params MaxCount {integer} 最大返回数据的数量 （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async cameraSearchByKey({ Keyword, MaxCount  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cameraSearchByKey({Keyword, MaxCount,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ cameraSearchByKey', error);
    }
}


/**
 * 监控巡检数据搜索
 * @params StartTime {string} 查询开始时间 （必填）
 * @params EndTime {string} 查询结束时间 （必填）
 * @params Keyword {string} 关键字 
 * @params Result {integer} 请求状态 
 * @params StreamId {string} 流 Id 
 * @params DeviceId {string} 终端 Id 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchDetectionData({ StartTime, EndTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchDetectionData({StartTime, EndTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ searchDetectionData', error);
    }
}


/**
 * 监控巡检数据下载
 * @params StartTime {string} 查询开始时间 （必填）
 * @params EndTime {string} 查询结束时间 （必填）
 * @params Keyword {string} 关键字 
 * @params Result {integer} 请求状态 
 * @headers X-version {string}  
 * @returns
*/
async downloadDetectionData({ StartTime, EndTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.downloadDetectionData({StartTime, EndTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ downloadDetectionData', error);
    }
}


/**
 * 修改组,监控组支持修改联系人不支持修改名称和描述，预案组和自定义组支持修改名称和描述不支持修改联系人
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 修改后的监控名 
 * @params description {string} 修改后的监控描述 
 * @params principalId {array} 联系人Id 
 * @returns
*/
async editMonitoringPlanGroup({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editMonitoringPlanGroup({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editMonitoringPlanGroup', error);
    }
}


/**
 * 删除组(预案组/自定义组)
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteCameraGroup({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteCameraGroup({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ deleteCameraGroup', error);
    }
}


/**
 * 移动监控项(监控或预案组)到指定预案组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params type {integer} 数据类型 （必填）
 * @params sourceItemId {string} 要移动的监控或预案组 Id （必填）
 * @params targetGroupId {string} 目标预案组 Id （必填）
 * @returns
*/
async removeCamera({ id, type, sourceItemId, targetGroupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.removeCamera({id, type, sourceItemId, targetGroupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ removeCamera', error);
    }
}


/**
 * 预案分组排序接口
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params orderBy {array} 排序结果 （必填）
 * @returns
*/
async sortPlansGroup({ id, orderBy  , ...params}, config = {}) {
    try {
        const { data } = await this.api.sortPlansGroup({id, orderBy,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ sortPlansGroup', error);
    }
}


/**
 * 提供能够通过监控组直接将组下监控放到预案组中
 * @headers X-version {string}  
 * @params type {integer} 数据类型 
 * @params id {string} 数据id 摄像头id或监控组id （必填）
 * @params groupId {string} 预案组id （必填）
 * @returns
*/
async collectionMonitoringToPlanGroup({ id, groupId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.collectionMonitoringToPlanGroup({id, groupId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ collectionMonitoringToPlanGroup', error);
    }
}


/**
 * 删除预案组/自定义组下的某个监控
 * @params groupId {string} groupId （必填）
 * @params cameraId {string} cameraId （必填）
 * @headers X-version {string}  
 * @returns
*/
async deletePlanGroupMonitoring({ groupId, cameraId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deletePlanGroupMonitoring({groupId, cameraId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ deletePlanGroupMonitoring', error);
    }
}


/**
 * 获取预案组下被收藏的监控
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPreplanCameras({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPreplanCameras({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getPreplanCameras', error);
    }
}


/**
 * 获取监控所在的预案组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getPreplanGroupsByCameraId({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getPreplanGroupsByCameraId({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getPreplanGroupsByCameraId', error);
    }
}


/**
 * 监控详情-获取监控历史巡检记录
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCameraDetectionRecords({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCameraDetectionRecords({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCameraDetectionRecords', error);
    }
}


/**
 * 监控资源-高级搜索
 * @params MaxCountCameraGroup {integer} 监控组最大返回条数 默认：20 
 * @params MaxCountCamera {integer} 监控最大返回条数 默认：50 
 * @params KeyWord {string} 关键字 
 * @params Online {boolean} 是否在线 
 * @params Quality {array} 质量0-UnDetected1-Bad2-Excellent3-Good4-Fault 
 * @params Resolution {array} 分辨率 HD-高清 SD-标清 FullHd-全高清 UHD-超高清 
 * @params Encode {array} 压缩格式0-H2641-H265 
 * @params Audio {boolean} 是否有音频 
 * @params LabelIds {array} 标签 
 * @params IsSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-全部 
 * @headers X-version {string}  
 * @returns
 *    @cameraGroupSearchOuts {array} 监控组
 *    @cameraSearchOuts {array} 监控
*/
async searchCameras(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchCameras(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ searchCameras', error);
    }
}


/**
 * 控制云台
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params cmdType {integer} 云台控制命令 
 * @params speed {integer} 云台移动速度 
 * @params stop {boolean} stop:true; not stop:false 
 * @returns
*/
async controlCameras({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.controlCameras({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ controlCameras', error);
    }
}


/**
 * 下级录像回放控制
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params cmdType {integer} 录像回放命令 
 * @params multiple {number} 回放控制倍数：0.25，0.5，1，2，4 
 * @params seekTime {integer} 拖动时间：播放录像起点的相对值，取值范围从0到播放录像的终点时间，单位秒，非负值0 从起点播放；100 从录像起点后的100秒处播放； now 从当前位置开始播放 
 * @params streamSessionId {integer} 回放会话ID 
 * @returns
*/
async setCameraPlayback({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.setCameraPlayback({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ setCameraPlayback', error);
    }
}


/**
 * 监控录像开始
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async startVideoRecording({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.startVideoRecording({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ startVideoRecording', error);
    }
}


/**
 * 监控录像结束
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async stopVideoRecording({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.stopVideoRecording({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ stopVideoRecording', error);
    }
}


/**
 * 监控截图
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params picturesTotal {integer} 截图数量最少1张最大10张 
 * @params interval {integer} 每次截图之间的间隔最少1秒最大10秒 
 * @returns
*/
async cameraScreenshot({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.cameraScreenshot({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ cameraScreenshot', error);
    }
}


/**
 * 条件查询监控录像列表
 * @params KeyWord {string} 关键字搜索 
 * @params CameraId {string} 监控id当业务类型时lowerrtp时此属性是必填的，不然无法查询到对应设备的录像记录 
 * @params FileEntityType {undefined} 文件类型2-Video1-Picture为null时查全部类型 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params UserId {string} 用户 
 * @params IsUnderway {boolean} 监控录制或截图正在进行中的 
 * @params FileRecordIds {array} 文件记录id 
 * @params PlatformId {string} 平台 ID 
 * @params AppName {string} 业务类型rtp-监控meetlive-视频会议subordinatertp-下级监控 
 * @params AssociationId {string} 关联id 
 * @params VideoPictureResult {undefined} 是否失败0:返回全部1:返回成功的数据2:返回失败的数据默认为1 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMediaRecords(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMediaRecords(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getMediaRecords', error);
    }
}


/**
 * 当前用户是否对监控录像中
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async getUserInVideoById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getUserInVideoById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getUserInVideoById', error);
    }
}


/**
 * 当前用户监控录像信息
<remarks>如果用户对监控没有在录像中，则返回404，否则返回具体的录像信息</remarks>
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {integer} 唯一标识
 *    @streamId {string} 流id
 *    @associationId {string} 会议号
 *    @createTime {string} 录制开始时间
 *    @status {integer} 视频录制截图操作状态
 *    @createTimeOffset {number} 录制相对时间(单位秒)
*/
async getCameraRecordingInfo({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCameraRecordingInfo({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCameraRecordingInfo', error);
    }
}


/**
 * 获取监控所在的所有收藏组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFavoriteGroupsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFavoriteGroupsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getFavoriteGroupsById', error);
    }
}


/**
 * 添加监控设备
 * @headers X-version {string}  
 * @params accessType {integer} 相机接入协议类型（0：国标协议，1：onvif协议，2：DVR协议，3：RTSP协议） 
 * @params address {string} 安装地址 
 * @params block {string} 警区（可选） 
 * @params businessgroupid {string} 虚拟组织所属的业务分组ID 
 * @params certifiable {integer} 证书有效标识（有证书的设备必选）缺省为0， 0 无效， 1 有效 
 * @params certnum {string} 证书序列ar号（有证书的设备必选） 
 * @params channelId {integer} 通道号 
 * @params civilcode {string} 行政区域 
 * @params comefrom {string} 相机来自哪里 
 * @params connectType {integer} 直连方式：1 视频直连相机； 0 视频经流媒体连接 
 * @params directiontype {integer} 摄像机监视方位属性 
 * @params downloadspeed {string} 下载倍速范围 
 * @params endtime {string} 证书终止有效期（有证书的设备必选） 
 * @params errcode {integer} 无效原因（有证书且证书无效的设备必选） 
 * @params highDefinition {integer} 是否高清相机 1 高清相机；0 非高清相机 
 * @params ipaddress {string} IP地址 
 * @params isCollection {integer} 是否收藏 值是0和1。0代表未收藏；1代表已收藏，默认是0 
 * @params isPublicnNetwork {integer} 是否公网 
 * @params latitude {number} 纬度 
 * @params longitude {number} 经度 
 * @params mainSubStream {string} 主子流设置 
 * @params manufacture {string} 设备厂商 
 * @params model {string} 设备型号 
 * @params name {string} 名称 （必填）
 * @params onvifAddress {string} onvif 服务地址 （必填）
 * @params orderby {string} 排序依据 
 * @params owner {string} 设备归属 
 * @params parental {integer} 是否有子设备  0没有 1 有 （必填）
 * @params parentid {string} 父节点ID 
 * @params password {string} 密码 
 * @params port {string} 端口 
 * @params positiontype {integer} 摄像机位置类型 
 * @params ptztype {integer} 摄像机类型 1 球机， 2 半球， 3 固定枪机， 4 遥控枪机 
 * @params regionId {string} 对于直接接入本级域的相机，该字段填写本级gcserver的id；如果是下级平台接入的相机，该字段为空值 
 * @params registerway {integer} 注册方式，缺省为1；1 符合sip3261标准的认证注册模式； 2 基于口令的双向认证注册方式； 3 基于数字证书的双向认证注册方式 
 * @params resolution {string} 摄像机支持的分辨率 
 * @params rights {integer} 相机权限 
 * @params roomtype {integer} 摄像机安装位置室外，室内属性 
 * @params safetyway {integer} 信令安全模式（可选）。缺省为0； 0 不采用； 2 S/MIME签名方式； 3 S/MIME加密签名同时采用方式； 4 数字摘要方式 
 * @params secrecy {integer} 保密属性  0不涉密  1涉密 
 * @params status {integer} 1：离线，2：在线 
 * @params streamId {integer} 码流id 
 * @params streamPacketType {integer} 媒体流打包格式 
 * @params supplylighttype {integer} 摄像机补光属性 
 * @params svcspacesupportmode {integer} 空域编码能力 
 * @params userName {string} 用户名 
 * @params usetype {integer} 摄像机用途属性 
 * @params idType {integer} 需要申请id类型 （必填）
 * @params isSupportPTZ {boolean} 是否可以云台控制true-可以false-不可以 
 * @returns
 *    @cameraId {string} 设备Id
 *    @accessType {integer} 相机接入协议类型（0：国标协议，1：onvif协议，2：DVR协议，3：RTSP协议）
 *    @address {string} 安装地址
 *    @block {string} 警区（可选）
 *    @businessgroupid {string} 虚拟组织所属的业务分组ID
 *    @certifiable {integer} 证书有效标识（有证书的设备必选）缺省为0， 0 无效， 1 有效
 *    @certnum {string} 证书序列ar号（有证书的设备必选）
 *    @channelId {integer} 通道号
 *    @civilcode {string} 行政区域
 *    @comefrom {string} 相机来自哪里
 *    @connectType {integer} 直连方式：1 视频直连相机； 0 视频经流媒体连接
 *    @directiontype {integer} 摄像机监视方位属性
 *    @downloadspeed {string} 下载倍速范围
 *    @endtime {string} 证书终止有效期（有证书的设备必选）
 *    @errcode {integer} 无效原因（有证书且证书无效的设备必选）
 *    @highDefinition {integer} 是否高清相机 1 高清相机；0 非高清相机
 *    @ipaddress {string} IP地址
 *    @isCollection {integer} 是否收藏 值是0和1。0代表未收藏；1代表已收藏，默认是0
 *    @isPublicnNetwork {integer} 是否公网
 *    @latitude {number} 纬度
 *    @longitude {number} 经度
 *    @mainSubStream {string} 主子流设置
 *    @manufacture {string} 设备厂商
 *    @model {string} 设备型号
 *    @name {string} 名称
 *    @onvifAddress {string} onvif 服务地址
 *    @orderby {string} 排序依据
 *    @owner {string} 设备归属
 *    @parental {integer} 是否有子设备  0没有 1 有
 *    @parentid {string} 父节点ID
 *    @password {string} 密码
 *    @port {string} 端口
 *    @positiontype {integer} 摄像机位置类型
 *    @ptztype {integer} 摄像机类型 1 球机， 2 半球， 3 固定枪机， 4 遥控枪机
 *    @regionId {string} 对于直接接入本级域的相机，该字段填写本级gcserver的id；如果是下级平台接入的相机，该字段为空值
 *    @registerway {integer} 注册方式，缺省为1；1 符合sip3261标准的认证注册模式； 2 基于口令的双向认证注册方式； 3 基于数字证书的双向认证注册方式
 *    @resolution {string} 摄像机支持的分辨率
 *    @rights {integer} 相机权限
 *    @roomtype {integer} 摄像机安装位置室外，室内属性
 *    @safetyway {integer} 信令安全模式（可选）。缺省为0； 0 不采用； 2 S/MIME签名方式； 3 S/MIME加密签名同时采用方式； 4 数字摘要方式
 *    @secrecy {integer} 保密属性  0不涉密  1涉密
 *    @status {integer} 1：离线，2：在线
 *    @streamId {integer} 码流id
 *    @streamPacketType {integer} 媒体流打包格式
 *    @supplylighttype {integer} 摄像机补光属性
 *    @svcspacesupportmode {integer} 空域编码能力
 *    @userName {string} 用户名
 *    @usetype {integer} 摄像机用途属性
*/
async addCameras({ name, onvifAddress, parental, idType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addCameras({name, onvifAddress, parental, idType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ addCameras', error);
    }
}


/**
 * 搜索onVif设备
 * @params times {integer} 搜索次数 默认：6 
 * @params interval {integer} 搜索间隔 默认：5 
 * @headers X-version {string}  
 * @returns
*/
async searchOnVif(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchOnVif(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ searchOnVif', error);
    }
}


/**
 * 监控位置变更
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params longitude {number} 经度 
 * @params latitude {number} 纬度 
 * @returns
*/
async editCameraLocation({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editCameraLocation({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editCameraLocation', error);
    }
}


/**
 * 根据标签Id查找监控
 * @headers X-version {string}  
 * @params labelIds {array} 标签Id 
 * @params keyword {string} 关键字 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchCamerasByLabel(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchCamerasByLabel(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ searchCamerasByLabel', error);
    }
}


/**
 * 导入监控（仅支持对经纬度的修改,导入后重新加载静态文件）
 * @headers X-version {string}  
 * @params importCameraLocations {array} 监控 （必填）
 * @returns
*/
async importCameras({ importCameraLocations  , ...params}, config = {}) {
    try {
        const { data } = await this.api.importCameras({importCameraLocations,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ importCameras', error);
    }
}


/**
 * 根据监控Id集合获取监控信息
 * @headers X-version {string}  
 * @params ids {array} 监控Id集合 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCameraInfoByIds({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCameraInfoByIds({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCameraInfoByIds', error);
    }
}


/**
 * 批量获取监控截图文件信息接口
 * @headers X-version {string}  
 * @params ids {array} 监控Id集合 （必填）
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async queryMonitorScreenshot({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.queryMonitorScreenshot({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ queryMonitorScreenshot', error);
    }
}


/**
 * 批量设置监控行政区域码
 * @headers X-version {string}  
 * @params areaCode {string} 区域码 （必填）
 * @params cameraIds {array} 监控id列表 
 * @returns
*/
async editCamerasAreaCode({ areaCode  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editCamerasAreaCode({areaCode,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editCamerasAreaCode', error);
    }
}


/**
 * 获取行政区域下面的监控
 * @params areaCode {string}  （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCamerasByAreaCode({ areaCode  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCamerasByAreaCode({areaCode,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCamerasByAreaCode', error);
    }
}


/**
 * 搜索行政区域下的监控
 * @headers X-version {string}  
 * @params prefixAreaCodes {array} 行政区域码前缀集合 
 * @params labelIds {array} 标签id 
 * @params online {boolean} 在线状态 
 * @params keyword {string} 关键字-监控名称 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchCamerasByAreaCode(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchCamerasByAreaCode(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ searchCamerasByAreaCode', error);
    }
}


/**
 * 获取下级监控录像
 * @params id {string} id （必填）
 * @params StartTime {string} 录制的开始时间 
 * @params EndTime {string} 录制的结束时间 
 * @params Limit {integer} 最大返回数量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getVideosById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getVideosById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getVideosById', error);
    }
}


/**
 * 条件查询监控状态变更记录
 * @params LowerDomainId {string} 下级域Id 
 * @params Online {boolean} 监控在线状态,true-在线，false-离线 
 * @params StateSource {undefined} 状态变更来源：0-巡检，1-ZL拉流，2-下级上报 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCameraState(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCameraState(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCameraState', error);
    }
}


/**
 * 监控录像开始
 * @headers X-version {string}  
 * @params cameraId {string} 监控id （必填）
 * @params subId {string} 业务ID （必填）
 * @returns
 *    @cameraId {string} 监控Id
 *    @cameraName {string} 监控名称
 *    @messages {array} 录像或截图的失败码
 *    @isSucceed {boolean} 是否失败true成功false失败
 *    @appName {string} 业务类型rtp-监控meetlive-视频会议live-事件快报
 *    @fileSize {integer} 文件大小 单位/Byte
 *    @pullUrls {object} 流播放地址
 *    @downloadUrl {object} 下载地址
 *    @name {string} 录制记录的名称
 *    @recordId {integer} 记录id
 *    @createTime {string} 创建时间
 *    @fileId {array} 文件id
 *    @type {integer} 文件类型
 *    @endTime {string} 结束时间
*/
async startCameraVideo({ cameraId, subId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.startCameraVideo({cameraId, subId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ startCameraVideo', error);
    }
}


/**
 * 监控录像结束
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async stopCameraVideo({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.stopCameraVideo({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ stopCameraVideo', error);
    }
}


/**
 * 获取国标本级域信息
 * @headers X-version {string}  
 * @returns
 *    @gbId {string} GB ID
 *    @serverIp {string} 服务器 IP 地址
 *    @sipPort {integer} SIP 端口号
 *    @sipProtocolType {integer} SIP协议类型(0:UDP;1:TCP;2:UDP/TCP同时支持)
 *    @httpPort {integer} HTTP 端口号
 *    @publicNetworkIp {string} 公网 IP 地址
*/
async getCurrentDomains(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCurrentDomains(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCurrentDomains', error);
    }
}


/**
 * 暂停巡检
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async pauseDetectionTasks({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.pauseDetectionTasks({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ pauseDetectionTasks', error);
    }
}


/**
 * 恢复巡检
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async resumeDetectionTasks({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.resumeDetectionTasks({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ resumeDetectionTasks', error);
    }
}


/**
 * 取消巡检
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async stopDetectionTasks({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.stopDetectionTasks({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ stopDetectionTasks', error);
    }
}


/**
 * 获取指定巡检任务的所有记录
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字 
 * @params Quality {undefined} 巡检质量 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDetectionTaskRecords({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDetectionTaskRecords({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getDetectionTaskRecords', error);
    }
}


/**
 * 获取巡检任务详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 巡检任务Id
 *    @jobId {string} 触发该巡检任务的定时任务Id
 *    @beginTime {string} 开始时间
 *    @endTime {string} 结束时间
 *    @detectionCameraGroupId {string} 进行巡检的监控组
 *    @pullStreamDuration {integer} 拉流时长
 *    @duration {string} 耗时
 *    @remainingDuration {string} 预计剩余耗时
 *    @taskStatus {integer} 巡检任务的状态
 *    @taskExecutedCount {integer} 该定时任务已执行次数
 *    @cameraDetectedCount {integer} 巡检任务已巡检的监控
 *    @cameraAmount {integer} 该任务需巡检的监控总数
 *    @imageAmount {integer} 截图总数
 *    @excellentCameraAmount {integer} 质量优的监控总数
 *    @goodCameraAmount {integer} 质量良的监控总数
 *    @badCameraAmount {integer} 质量差的监控总数
 *    @faultCameraAmount {integer} 故障监控总数
 *    @unDetectionCameraAmount {integer} 未检测监控总数
 *    @progress {integer} 进度
*/
async getDetectionDetails({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDetectionDetails({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getDetectionDetails', error);
    }
}


/**
 * 获取所有巡检任务执行情况，可通过 JobId 过滤
 * @params JobId {string} 过滤指定 Job 下的巡检任务 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDetectionTasks(params = {}, config = {}) {
    try {
        const { data } = await this.api.getDetectionTasks(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getDetectionTasks', error);
    }
}


/**
 * 获取最新有效的巡检任务（不是重复执行的任务）
 * @params JobId {string} 过滤指定 Job 下的巡检任务 
 * @params CameraId {string} 巡检任务的监控组Id 
 * @params DetectionType {undefined} 巡检任务组类型0监控 1标签 
 * @headers X-version {string}  
 * @returns
 *    @cameraGroupOut {object} 监控组实体
 *    @detectionTaskOut {object} 巡检任务详情
*/
async getLatestEffective(params = {}, config = {}) {
    try {
        const { data } = await this.api.getLatestEffective(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getLatestEffective', error);
    }
}


/**
 * 获取最新有效的巡检任务（不是重复执行的任务）
 * @headers X-version {string}  
 * @returns
 *    @cameraGroupOut {object} 监控组实体
 *    @detectionTaskOut {object} 巡检任务详情
*/
async getLatestDetectionTasks(params = {}, config = {}) {
    try {
        const { data } = await this.api.getLatestDetectionTasks(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getLatestDetectionTasks', error);
    }
}


/**
 * 导入收藏监控，一般用于设施收藏监控
 * @headers X-version {string}  
 * @params favoriteCameraImportItems {array} 收藏监控导入数据 
 * @returns
*/
async importFavoriteCameraItems(params = {}, config = {}) {
    try {
        const { data } = await this.api.importFavoriteCameraItems(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ importFavoriteCameraItems', error);
    }
}


/**
 * 创建收藏项，包括收藏组和收藏监控. 收藏类型：1-收藏组 2-收藏监控
 * @headers X-version {string}  
 * @params nameOrId {string} 收藏项是组的时该属性为组名称，收藏项为监控时该属性为监控Id 
 * @params parentId {string} 收藏项父级(如果收藏项是父级，那么其父级则是收藏组) 
 * @params type {integer} 收藏类型 
 * @returns
 *    @id {string} 收藏项的 Id（收藏组 Id 或绑定监控关系的 Id）
 *    @cameraId {string} 收藏监控 Id
 *    @cameraStatus {integer} 监控状态
 *    @status {integer} 监控状态
 *    @name {string} 收藏项名称（只有收藏组有名称）
 *    @originalName {string} 原始名称
 *    @aliasName {string} 监控别名
 *    @parentId {string} 父Id
 *    @type {integer} 收藏类型
 *    @subType {string} 收藏主体类型创建者- creator设施- facility电话- phone路径- route行政区域- district专题- topic
 *    @labels {array} 监控标签
 *    @selfCameraCount {integer} 自身组下监控（不包括子组）
 *    @selfCameraOnlineCount {integer} 自身组下在线监控（不包括子组）
 *    @cameraCount {integer} 监控总数（包括子组）
 *    @cameraOnlineCount {integer} 在线监控总数（包括子组）
 *    @idPath {string} Id路径
 *    @namePath {string} 名字路径
 *    @parentName {string} 父级名称
 *    @result {integer} 图片质量类型
 *    @resolution {integer} 分辨率
 *    @audio {boolean} 是否有音频
 *    @audioEncodingFormat {string} 音频编码属性
 *    @videoEncoder {integer} 视频编码类型
*/
async createFavoriteCameraItem(params = {}, config = {}) {
    try {
        const { data } = await this.api.createFavoriteCameraItem(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ createFavoriteCameraItem', error);
    }
}


/**
 * 条件查询收藏项
 * @params Sub {string} 收藏主体的标识符（用户收藏为 userId | 设施收藏为设施 Id） 
 * @params Type {undefined} 收藏项类型(1-收藏监控组 | 2-收藏监控) 
 * @params SubType {string} 收藏主体类型（用户-creator | 设施-facility | 电话-phone | 路径-route | 行政区域-district | 专题-topic） 
 * @params Keyword {string} 关键字搜索 
 * @params LabelIds {array} 标签,只对监控有效，组是没有标签的 
 * @params PlatformId {string} 平台 Id 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getFavoriteCameraItems(params = {}, config = {}) {
    try {
        const { data } = await this.api.getFavoriteCameraItems(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getFavoriteCameraItems', error);
    }
}


/**
 * 为设施、专题等非人创建收藏监控
 * @headers X-version {string}  
 * @params cameraId {string} 摄像头 Id （必填）
 * @params subId {string} 设施、专题等收藏主体 （必填）
 * @params subType {string} 收藏主体类型 
 * @returns
 *    @id {string} 收藏项的 Id（收藏组 Id 或绑定监控关系的 Id）
 *    @cameraId {string} 收藏监控 Id
 *    @cameraStatus {integer} 监控状态
 *    @status {integer} 监控状态
 *    @name {string} 收藏项名称（只有收藏组有名称）
 *    @originalName {string} 原始名称
 *    @aliasName {string} 监控别名
 *    @parentId {string} 父Id
 *    @type {integer} 收藏类型
 *    @subType {string} 收藏主体类型创建者- creator设施- facility电话- phone路径- route行政区域- district专题- topic
 *    @labels {array} 监控标签
 *    @selfCameraCount {integer} 自身组下监控（不包括子组）
 *    @selfCameraOnlineCount {integer} 自身组下在线监控（不包括子组）
 *    @cameraCount {integer} 监控总数（包括子组）
 *    @cameraOnlineCount {integer} 在线监控总数（包括子组）
 *    @idPath {string} Id路径
 *    @namePath {string} 名字路径
 *    @parentName {string} 父级名称
 *    @result {integer} 图片质量类型
 *    @resolution {integer} 分辨率
 *    @audio {boolean} 是否有音频
 *    @audioEncodingFormat {string} 音频编码属性
 *    @videoEncoder {integer} 视频编码类型
*/
async saveFavoriteCameraItems({ cameraId, subId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.saveFavoriteCameraItems({cameraId, subId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ saveFavoriteCameraItems', error);
    }
}


/**
 * 获取根收藏项
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getRootFavoriteCameraItems(params = {}, config = {}) {
    try {
        const { data } = await this.api.getRootFavoriteCameraItems(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getRootFavoriteCameraItems', error);
    }
}


/**
 * 获取子收藏项
 * @params parentId {string} parentId （必填）
 * @params type {undefined}  
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getChildrenFavoriteCameraItems({ parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getChildrenFavoriteCameraItems({parentId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getChildrenFavoriteCameraItems', error);
    }
}


/**
 * 修改收藏项（监控不能修改名称）
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 仅限于收藏组修改 
 * @params parentId {string} 仅限于收藏监控 
 * @params cameraIds {array} 监控列表，更新收藏组下的监控当收藏类型为收藏组时，此字段有效 
 * @params type {integer} 收藏类型 
 * @returns
*/
async editFavoriteCameraItem({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editFavoriteCameraItem({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editFavoriteCameraItem', error);
    }
}


/**
 * 删除收藏组或收藏监控
 * @params type {undefined}  （必填）
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteFavoriteCameraItem({ type, id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteFavoriteCameraItem({type, id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ deleteFavoriteCameraItem', error);
    }
}


/**
 * 批量绑定收藏监控，subId为绑定 Id，subType为收藏主体类型，如收藏主体类型为电话填写phone，则subId为电话号码
 * @params subId {string} subId （必填）
 * @params subType {string}  （必填）
 * @headers X-version {string}  
 * @params cameraIds {array} 更新的监控 Id 
 * @returns
*/
async batchEditFavoriteCameraItems({ subId, subType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchEditFavoriteCameraItems({subId, subType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ batchEditFavoriteCameraItems', error);
    }
}


/**
 * 同步国标下级域
 * @headers X-version {string}  
 * @params regionId {string} 下级域的国标Id （必填）
 * @params groupId {string} 指定目录Id 
 * @returns
*/
async syncGbConfigDomain({ regionId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.syncGbConfigDomain({regionId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ syncGbConfigDomain', error);
    }
}


/**
 * 修改国标下级域
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params heartbeadCycle {integer} 心跳周期 
 * @params heartbeadTimeoutCount {integer} 心跳超时次数 
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {integer} 是否需要认证 
 * @params password {string} 认证密码 
 * @params networkType {integer} 上/下级域网络 
 * @params sipPort {integer} 下级域的SIP信令端口号 （必填）
 * @params userName {string} 用户名,建议同gbid 
 * @params rtpRecvType {integer} 国标流媒体收流协议 
 * @params rtpSendType {integer} 国标流媒体向下级发流协议 
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知,默认true 
 * @params extension {object} 扩展字段 
 * @returns
*/
async editGbConfigDomain({ id, ip, name, sipPort  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editGbConfigDomain({id, ip, name, sipPort,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editGbConfigDomain', error);
    }
}


/**
 * 查询国标下级域详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @activeRegister {boolean} 是否主动注册，对上级平台被动接受注册，填false；对下级平台，需主动向上级发起注册请求，填true
 *    @civilCode {string} 区域编码
 *    @gbId {string} 国标id
 *    @heartBeadCycle {integer} 心跳周期
 *    @heartBeadTimeoutCount {integer} 心跳超时次数
 *    @ip {string} 下级域ip地址
 *    @manufacturer {integer} 厂商类型
 *    @model {string} 型号，可为空
 *    @name {string} 下级域名称
 *    @needAuth {integer} 是否需要认证
 *    @networkType {integer} 网络类型（1：内网，2：公网）
 *    @password {string} 认证密码
 *    @sipPort {integer} 端口
 *    @status {integer} 下级域状态1：设备离线2：设备在线
 *    @type {integer} 用户代理类型，常见类型，IPC:131NVR:118Platform(国标平台):2Encoder:113Decoder:114
 *    @userName {string} 认证用户名
 *    @taskStatus {integer} 同步状态
 *    @timeRemaining {integer} 同步剩余时间，单位/秒
 *    @progress {integer} 同步进度，百分比
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @rtpRecvType {integer} 国标流媒体收流协议
 *    @rtpSendType {integer} 国标流媒体向下级发流协议
 *    @sipTransProtocol {integer} SIP传输协议类型
 *    @isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知
 *    @stateDuration {string} 在线/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
 *    @extension {object} 扩展字段
*/
async getGbConfigDomainById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getGbConfigDomainById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getGbConfigDomainById', error);
    }
}


/**
 * 分页查询下级域（同步的详细信息）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getGbConfigDomains(params = {}, config = {}) {
    try {
        const { data } = await this.api.getGbConfigDomains(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getGbConfigDomains', error);
    }
}


/**
 * 添加下级域接口
 * @headers X-version {string}  
 * @params activeRegister {boolean} 是否主动注册 
 * @params civilcode {string} 区域编码 
 * @params gbId {string} 下级域的国标id （必填）
 * @params heartbeadCycle {integer} 心跳周期 
 * @params heartbeadTimeoutCount {integer} 心跳超时次数 
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params manufacturer {integer} 厂商，可为空 
 * @params model {string} 型号，可为空 
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {integer} 是否需要认证 
 * @params password {string} 认证密码 
 * @params networkType {integer} 上/下级域网络 
 * @params sipPort {integer} 下级域的SIP信令端口号 （必填）
 * @params type {integer} 用户代理类型 
 * @params userName {string} 用户名,建议同gbid 
 * @params rtpRecvType {integer} 国标流媒体收流协议 
 * @params rtpSendType {integer} 国标流媒体向下级发流协议 
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知,默认true 
 * @params extension {object} 扩展字段 
 * @returns
 *    @activeRegister {boolean} 是否主动注册，对上级平台被动接受注册，填false；对下级平台，需主动向上级发起注册请求，填true
 *    @civilCode {string} 区域编码
 *    @gbId {string} 国标id
 *    @heartBeadCycle {integer} 心跳周期
 *    @heartBeadTimeoutCount {integer} 心跳超时次数
 *    @ip {string} 下级域ip地址
 *    @manufacturer {integer} 厂商类型
 *    @model {string} 型号，可为空
 *    @name {string} 下级域名称
 *    @needAuth {integer} 是否需要认证
 *    @networkType {integer} 网络类型（1：内网，2：公网）
 *    @password {string} 认证密码
 *    @sipPort {integer} 端口
 *    @status {integer} 下级域状态1：设备离线2：设备在线
 *    @type {integer} 用户代理类型，常见类型，IPC:131NVR:118Platform(国标平台):2Encoder:113Decoder:114
 *    @userName {string} 认证用户名
 *    @taskStatus {integer} 同步状态
 *    @timeRemaining {integer} 同步剩余时间，单位/秒
 *    @progress {integer} 同步进度，百分比
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @rtpRecvType {integer} 国标流媒体收流协议
 *    @rtpSendType {integer} 国标流媒体向下级发流协议
 *    @sipTransProtocol {integer} SIP传输协议类型
 *    @isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知
 *    @stateDuration {string} 在线/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
 *    @extension {object} 扩展字段
*/
async addGbConfigDomains({ gbId, ip, name, sipPort  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addGbConfigDomains({gbId, ip, name, sipPort,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ addGbConfigDomains', error);
    }
}


/**
 * 获取未管理的下级域
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getUnusedDomains(params = {}, config = {}) {
    try {
        const { data } = await this.api.getUnusedDomains(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getUnusedDomains', error);
    }
}


/**
 * 批量删除国标下级域
 * @headers X-version {string}  
 * @params gbIds {array} 下级域Id 
 * @returns
*/
async deleteDomains(params = {}, config = {}) {
    try {
        const { data } = await this.api.deleteDomains(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ deleteDomains', error);
    }
}


/**
 * 清空下级域所有数据
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async clearDomains({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.clearDomains({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ clearDomains', error);
    }
}


/**
 * 同步历史记录分页查询
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getSyncTaskHistories({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getSyncTaskHistories({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getSyncTaskHistories', error);
    }
}


/**
 * 同步记录数据多条件查询,传入id为同步任务的id
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字 
 * @params UpdateStatus {undefined} 变更状态 
 * @params Type {undefined} 数据类型1-监控2-目录null-全部 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getSyncTaskHistoriesById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getSyncTaskHistoriesById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getSyncTaskHistoriesById', error);
    }
}


/**
 * 查询过期监控与监控组
 * @params id {string} id （必填）
 * @params Type {undefined} 类型，摄像头 0 组 1 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getExpiredDomains({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getExpiredDomains({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getExpiredDomains', error);
    }
}


/**
 * 删除过期监控与监控组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params type {integer} 过期记录删除类型 
 * @params records {array} 批量删除数据记录列表 
 * @params timeRange {integer} 删除近几天记录 
 * @returns
*/
async deleteExpiredDomains({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteExpiredDomains({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ deleteExpiredDomains', error);
    }
}


/**
 * 条件查询视频历史拉流数据
 * @params Keyword {string} 关键字模糊查询（流媒体名称，终端设备名称或流id） 
 * @params BusinessName {string} 业务类型live-事件快报aslive-app人员直播meetlive-会议直播rtp-监控拉流null-默认全部 
 * @params IsSuccess {boolean} 拉流成功或失败true 成功false 失败null 全部 
 * @params StartTime {string} 拉流开始时间 
 * @params EndTime {string} 拉流结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getHistoryCameraPulls(params = {}, config = {}) {
    try {
        const { data } = await this.api.getHistoryCameraPulls(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getHistoryCameraPulls', error);
    }
}


/**
 * 获取指定历史拉流记录的详细信息
 * @params id {integer} id （必填）
 * @params Date {string} 指定时间，拉流开始时间， （必填）
 * @headers X-version {string}  
 * @returns
 *    @fps {integer} 视频的帧率， 例：0fps
 *    @resolution {integer} 分辨率
 *    @audioFormat {integer} 音频类型
 *    @client {string} 拉取视频流的客户端信息ip+port
 *    @localSdpInfo {string} 本地sdp消息
 *    @remoteSdpInfo {string} 对端sdp信息
 *    @sdpDescription {string} sdp信息描述
 *    @playUrl {object} 流播放地址
 *    @files {array} 录像记录
 *    @mediaReceiveIp {string} 流媒体接收IP
 *    @mediaReceivePort {integer} 流媒体接收端口
 *    @reStreamId {integer} 复用流Id
 *    @responseInviteTime {integer} 信令时延 单位/毫秒
 *    @terminalIp {string} 终端ip
 *    @terminalPort {integer} 终端端口
 *    @terminalType {integer} 终端协议-1-未知0-GB/T 281811-RTSP2-Onvif4-非标协议5-RTMP6-WebRTC99-其它
 *    @failStreamPath {integer} 流路径
 *    @id {integer} 标识id
 *    @businessName {string} 业务类型 live:事件快报，aslive：app人员直播，meetlive：会议直播
 *    @streamId {string} 流id
 *    @startTime {string} 拉流开始时间
 *    @endTime {string} 拉流结束时间
 *    @deviceId {string} 设备id
 *    @deviceName {string} 设备名称
 *    @mediaServerId {string} 流媒体Id
 *    @mediaServerName {string} 流媒体名称
 *    @firstPullTime {integer} 首次收流时长,响应延时 单位/毫秒
 *    @isSuccess {boolean} 拉流是否成功true 成功false 失败
 *    @failReason {integer} 失败信息
 *    @endReason {string} 结束原因
 *    @videoEncoder {integer} 视频编码类型
 *    @terminal {string} 终端信息ip+port
*/
async getHistoryCameraPullsById({ id, Date  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getHistoryCameraPullsById({id, Date,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getHistoryCameraPullsById', error);
    }
}


/**
 * 条件查询视频历史拉流数据
 * @params StartTime {string} 拉流开始时间 （必填）
 * @params StopTime {string} 拉流停止时间 （必填）
 * @params StreamId {integer} 流媒体 Id 
 * @params DeviceId {string} 终端 Id 
 * @params Keyword {string} 关键字（终端名称的模糊搜索） 
 * @params ClientAddress {string} 客户端请求地址（格式为 ip:port） 
 * @params ReceiveAddress {string} 接收端地址（格式为 ip:port） 
 * @params ForwardAddress {string} 转发地址（格式为 ip:port） 
 * @params Result {integer} 请求结果 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchHistoryCameraPulls({ StartTime, StopTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchHistoryCameraPulls({StartTime, StopTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ searchHistoryCameraPulls', error);
    }
}


/**
 * 获取所有的标签
 * @params keyWord {string}  
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAllLabels(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAllLabels(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getAllLabels', error);
    }
}


/**
 * 创建新标签
 * @headers X-version {string}  
 * @params title {string} 标签标题 （必填）
 * @params color {string} 标签颜色 （必填）
 * @params description {string} 标签说明 
 * @returns
 *    @id {integer} 主键
 *    @title {string} 标签标题
 *    @color {string} 标签颜色
 *    @description {string} 标签说明
*/
async createLabel({ title, color  , ...params}, config = {}) {
    try {
        const { data } = await this.api.createLabel({title, color,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ createLabel', error);
    }
}


/**
 * 修改指定标签
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @params title {string} 标签标题 
 * @params color {string} 标签颜色+ 
 * @params description {string} 描述 
 * @returns
*/
async editLabel({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editLabel({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editLabel', error);
    }
}


/**
 * 删除指定标签
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteLabel({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteLabel({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ deleteLabel', error);
    }
}


/**
 * 批量删除标签
 * @headers X-version {string}  
 * @params ids {array} 标签id列表,一次请求最多删除1000条，超过1000请分批请求 （必填）
 * @returns
*/
async batchDeleteLabel({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchDeleteLabel({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ batchDeleteLabel', error);
    }
}


/**
 * 批量设置监控或监控组下监控的标签
 * @headers X-version {string}  
 * @params labelIds {array} 标签id集合,需要添加的标签id集合 （必填）
 * @params groupIds {array} 监控组id集合,需要被添加监控标签的组，选择后，对应组下的监控会被打上标签 
 * @params cameraIds {array} 监控id集合，对应的监控会打上标签 
 * @returns
*/
async batchEditCameraLabel({ labelIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchEditCameraLabel({labelIds,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ batchEditCameraLabel', error);
    }
}


/**
 * 批量删除监控或监控组下监控的标签
 * @headers X-version {string}  
 * @params labelIds {array} 标签id集合,需要删除的标签id集合 （必填）
 * @params groupIds {array} 监控组id集合,需要被删除监控标签的组，选择后，对应组下的监控会删除对应的标签 
 * @params cameraIds {array} 监控id集合，对应的监控会删除标签 
 * @returns
*/
async batchDeleteCameraLabel({ labelIds  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchDeleteCameraLabel({labelIds,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ batchDeleteCameraLabel', error);
    }
}


/**
 * 分页查询直播列表
 * @params ContactId {string} 联系人 Id 
 * @params LiveStatus {undefined} 直播状态0-未开始1-直播中2-暂停3-停止（历史）null 查全部状态 
 * @params KeyWord {string} 关键字查询 
 * @params PlayUrlShowType {undefined} 播放地址返回类型。0-完整url | 1-只有路径和参数 
 * @params AppName {string} app类型 默认：live 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async obtainLive(params = {}, config = {}) {
    try {
        const { data } = await this.api.obtainLive(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ obtainLive', error);
    }
}


/**
 * 主动打开联系人直播
 * @params contactId {string} contactId （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 直播Id:578
 *    @stream {string} 直播stream
 *    @status {integer} 直播状态
 *    @liveType {integer} 直播类型
 *    @title {string} 直播标题
 *    @description {string} 直播描述
 *    @userId {string} 用户Id
 *    @userAccount {string} 用户账号
 *    @userName {string} 用户名称
 *    @createTime {string} 创建时间
 *    @rtmpUrl {string} RtmpUrl
 *    @flvUrl {string} 播放Url
 *    @rtspUrl {string} Rtsp 地址
 *    @wsUrl {string} Ws 地址
 *    @webRtcUrl {string} WebRtc 地址
 *    @relateWsUrl {string} Ws 相对地址
 *    @relateFlvUrl {string} Flv 相对地址
 *    @relateWebRtcUrl {string} WebRtc 相对地址
 *    @isGradingDispatch {boolean} 是否为分级调度的直播回调
 *    @appointment {string} 预约时间
*/
async openLives({ contactId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.openLives(params,{params:{contactId,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ openLives', error);
    }
}


/**
 * 创建直播
 * @headers X-version {string}  
 * @params groupId {string} 直播组 ID，用于指定直播权限，只能组内成员观看直播，默认 0 表示全权限 
 * @params appointment {string} 预约开播时间，默认为当前时间 
 * @params contactName {string} 主播名称 
 * @params contactId {string} 主播Id 
 * @params description {string} 描述 （必填）
 * @params title {string} 直播主题 （必填）
 * @params appName {string} 应用名称事件快报-live会议直播-MeetLive 
 * @returns
 *    @id {string} 直播Id:578
 *    @stream {string} 直播stream
 *    @status {integer} 直播状态
 *    @liveType {integer} 直播类型
 *    @title {string} 直播标题
 *    @description {string} 直播描述
 *    @userId {string} 用户Id
 *    @userAccount {string} 用户账号
 *    @userName {string} 用户名称
 *    @createTime {string} 创建时间
 *    @rtmpUrl {string} RtmpUrl
 *    @flvUrl {string} 播放Url
 *    @rtspUrl {string} Rtsp 地址
 *    @wsUrl {string} Ws 地址
 *    @webRtcUrl {string} WebRtc 地址
 *    @relateWsUrl {string} Ws 相对地址
 *    @relateFlvUrl {string} Flv 相对地址
 *    @relateWebRtcUrl {string} WebRtc 相对地址
 *    @isGradingDispatch {boolean} 是否为分级调度的直播回调
 *    @appointment {string} 预约时间
*/
async createLives({ description, title  , ...params}, config = {}) {
    try {
        const { data } = await this.api.createLives({description, title,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ createLives', error);
    }
}


/**
 * 主动打开联系人直播，可传入直播标题和描述等信息
 * @params contactId {string} contactId （必填）
 * @headers X-version {string}  
 * @params title {string} 直播标题 
 * @params description {string} 直播描述 
 * @returns
 *    @id {string} 直播Id:578
 *    @stream {string} 直播stream
 *    @status {integer} 直播状态
 *    @liveType {integer} 直播类型
 *    @title {string} 直播标题
 *    @description {string} 直播描述
 *    @userId {string} 用户Id
 *    @userAccount {string} 用户账号
 *    @userName {string} 用户名称
 *    @createTime {string} 创建时间
 *    @rtmpUrl {string} RtmpUrl
 *    @flvUrl {string} 播放Url
 *    @rtspUrl {string} Rtsp 地址
 *    @wsUrl {string} Ws 地址
 *    @webRtcUrl {string} WebRtc 地址
 *    @relateWsUrl {string} Ws 相对地址
 *    @relateFlvUrl {string} Flv 相对地址
 *    @relateWebRtcUrl {string} WebRtc 相对地址
 *    @isGradingDispatch {boolean} 是否为分级调度的直播回调
 *    @appointment {string} 预约时间
*/
async openLiveWithInfo({ contactId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.openLiveWithInfo(params,{params:{contactId,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ openLiveWithInfo', error);
    }
}


/**
 * 向指定的直播用户发送互动语音
 * @params stream {string} 直播地址的Stream （必填）
 * @headers X-version {string}  
 * @params base64StrAudio {string} 语音转成的base64字符 
 * @returns
*/
async sendAudio({ stream  , ...params}, config = {}) {
    try {
        const { data } = await this.api.sendAudio({stream,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ sendAudio', error);
    }
}


/**
 * 获取指定的直播信息
 * @params stream {string} 直播的Stream （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 直播Id:578
 *    @stream {string} 直播stream
 *    @status {integer} 直播状态
 *    @liveType {integer} 直播类型
 *    @title {string} 直播标题
 *    @description {string} 直播描述
 *    @userId {string} 用户Id
 *    @userAccount {string} 用户账号
 *    @userName {string} 用户名称
 *    @createTime {string} 创建时间
 *    @rtmpUrl {string} RtmpUrl
 *    @flvUrl {string} 播放Url
 *    @rtspUrl {string} Rtsp 地址
 *    @wsUrl {string} Ws 地址
 *    @webRtcUrl {string} WebRtc 地址
 *    @relateWsUrl {string} Ws 相对地址
 *    @relateFlvUrl {string} Flv 相对地址
 *    @relateWebRtcUrl {string} WebRtc 相对地址
 *    @isGradingDispatch {boolean} 是否为分级调度的直播回调
 *    @appointment {string} 预约时间
*/
async getLiveInfo({ stream  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getLiveInfo({stream,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getLiveInfo', error);
    }
}


/**
 * 关闭指定流 Id 的直播
 * @params stream {string} 流 Id （必填）
 * @headers X-version {string}  
 * @returns
*/
async closeLive({ stream  , ...params}, config = {}) {
    try {
        const { data } = await this.api.closeLive({stream,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ closeLive', error);
    }
}


/**
 * 获取历史直播的录屏信息
 * @params stream {string}  （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getVideoRecords({ stream  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getVideoRecords({stream,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getVideoRecords', error);
    }
}


/**
 * 同步国标下级域
 * @headers X-version {string}  
 * @params regionId {string} 下级域的国标Id （必填）
 * @params groupId {string} 指定目录Id 
 * @returns
*/
async syncLowerDomains({ regionId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.syncLowerDomains({regionId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ syncLowerDomains', error);
    }
}


/**
 * 修改国标下级域
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params heartbeadCycle {integer} 心跳周期 
 * @params heartbeadTimeoutCount {integer} 心跳超时次数 
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {integer} 是否需要认证 
 * @params password {string} 认证密码 
 * @params networkType {integer} 上/下级域网络 
 * @params sipPort {integer} 下级域的SIP信令端口号 （必填）
 * @params userName {string} 用户名,建议同gbid 
 * @params rtpRecvType {integer} 国标流媒体收流协议 
 * @params rtpSendType {integer} 国标流媒体向下级发流协议 
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知,默认true 
 * @params extension {object} 扩展字段 
 * @returns
*/
async editLowerDomains({ id, ip, name, sipPort  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editLowerDomains({id, ip, name, sipPort,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editLowerDomains', error);
    }
}


/**
 * 查询国标下级域详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @activeRegister {boolean} 是否主动注册，对上级平台被动接受注册，填false；对下级平台，需主动向上级发起注册请求，填true
 *    @civilCode {string} 区域编码
 *    @gbId {string} 国标id
 *    @heartBeadCycle {integer} 心跳周期
 *    @heartBeadTimeoutCount {integer} 心跳超时次数
 *    @ip {string} 下级域ip地址
 *    @manufacturer {integer} 厂商类型
 *    @model {string} 型号，可为空
 *    @name {string} 下级域名称
 *    @needAuth {integer} 是否需要认证
 *    @networkType {integer} 网络类型（1：内网，2：公网）
 *    @password {string} 认证密码
 *    @sipPort {integer} 端口
 *    @status {integer} 下级域状态1：设备离线2：设备在线
 *    @type {integer} 用户代理类型，常见类型，IPC:131NVR:118Platform(国标平台):2Encoder:113Decoder:114
 *    @userName {string} 认证用户名
 *    @taskStatus {integer} 同步状态
 *    @timeRemaining {integer} 同步剩余时间，单位/秒
 *    @progress {integer} 同步进度，百分比
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @rtpRecvType {integer} 国标流媒体收流协议
 *    @rtpSendType {integer} 国标流媒体向下级发流协议
 *    @sipTransProtocol {integer} SIP传输协议类型
 *    @isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知
 *    @stateDuration {string} 在线/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
 *    @extension {object} 扩展字段
*/
async getLowerDomainById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getLowerDomainById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getLowerDomainById', error);
    }
}


/**
 * 分页查询下级域（同步的详细信息）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getLowerDomains(params = {}, config = {}) {
    try {
        const { data } = await this.api.getLowerDomains(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getLowerDomains', error);
    }
}


/**
 * 添加下级域接口
 * @headers X-version {string}  
 * @params activeRegister {boolean} 是否主动注册 
 * @params civilcode {string} 区域编码 
 * @params gbId {string} 下级域的国标id （必填）
 * @params heartbeadCycle {integer} 心跳周期 
 * @params heartbeadTimeoutCount {integer} 心跳超时次数 
 * @params ip {string} 下级域的SIP信令IP地址 （必填）
 * @params manufacturer {integer} 厂商，可为空 
 * @params model {string} 型号，可为空 
 * @params name {string} 下级域的名称 （必填）
 * @params needAuth {integer} 是否需要认证 
 * @params password {string} 认证密码 
 * @params networkType {integer} 上/下级域网络 
 * @params sipPort {integer} 下级域的SIP信令端口号 （必填）
 * @params type {integer} 用户代理类型 
 * @params userName {string} 用户名,建议同gbid 
 * @params rtpRecvType {integer} 国标流媒体收流协议 
 * @params rtpSendType {integer} 国标流媒体向下级发流协议 
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知,默认true 
 * @params extension {object} 扩展字段 
 * @returns
 *    @activeRegister {boolean} 是否主动注册，对上级平台被动接受注册，填false；对下级平台，需主动向上级发起注册请求，填true
 *    @civilCode {string} 区域编码
 *    @gbId {string} 国标id
 *    @heartBeadCycle {integer} 心跳周期
 *    @heartBeadTimeoutCount {integer} 心跳超时次数
 *    @ip {string} 下级域ip地址
 *    @manufacturer {integer} 厂商类型
 *    @model {string} 型号，可为空
 *    @name {string} 下级域名称
 *    @needAuth {integer} 是否需要认证
 *    @networkType {integer} 网络类型（1：内网，2：公网）
 *    @password {string} 认证密码
 *    @sipPort {integer} 端口
 *    @status {integer} 下级域状态1：设备离线2：设备在线
 *    @type {integer} 用户代理类型，常见类型，IPC:131NVR:118Platform(国标平台):2Encoder:113Decoder:114
 *    @userName {string} 认证用户名
 *    @taskStatus {integer} 同步状态
 *    @timeRemaining {integer} 同步剩余时间，单位/秒
 *    @progress {integer} 同步进度，百分比
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @rtpRecvType {integer} 国标流媒体收流协议
 *    @rtpSendType {integer} 国标流媒体向下级发流协议
 *    @sipTransProtocol {integer} SIP传输协议类型
 *    @isStateNotifyFromDomain {boolean} 下级状态变更是否需要通知给上级,false:不通知;true:通知
 *    @stateDuration {string} 在线/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
 *    @extension {object} 扩展字段
*/
async addLowerDomain({ gbId, ip, name, sipPort  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addLowerDomain({gbId, ip, name, sipPort,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ addLowerDomain', error);
    }
}


/**
 * 获取未管理的下级域
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getUnusedLowerDomains(params = {}, config = {}) {
    try {
        const { data } = await this.api.getUnusedLowerDomains(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getUnusedLowerDomains', error);
    }
}


/**
 * 同步历史记录分页查询
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getLowerDomainsSyncHistories({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getLowerDomainsSyncHistories({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getLowerDomainsSyncHistories', error);
    }
}


/**
 * 批量删除国标下级域
 * @headers X-version {string}  
 * @params gbIds {array} 下级域Id 
 * @returns
*/
async batchDeleteLowerDomains(params = {}, config = {}) {
    try {
        const { data } = await this.api.batchDeleteLowerDomains(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ batchDeleteLowerDomains', error);
    }
}


/**
 * 清空下级域所有数据
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async clearLowerDomains({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.clearLowerDomains({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ clearLowerDomains', error);
    }
}


/**
 * 查询指定同步历史记录
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @addNum {integer} 添加数量
 *    @updateNum {integer} 修改数量
 *    @deleteNum {integer} 删除数量
 *    @conflictNum {integer} 冲突数量
 *    @time {string} 同步耗时
 *    @offlineNum {integer} 离线数量
 *    @onlineNum {integer} 在线数量
 *    @cameraTotal {integer} 监控总数
 *    @groupTotal {integer} 监控组总数
 *    @groupId {string} 指定的目录
 *    @groupName {string} 目录名称
 *    @cameraAddNum {integer} 监控添加总数
 *    @cameraUpdateNum {integer} 监控修改总数
 *    @cameraConflictNum {integer} 监控冲突总数
 *    @groupAddNum {integer} 目录添加总数
 *    @groupUpdateNum {integer} 目录修改总数
 *    @groupConflictNum {integer} 目录冲突总数
 *    @groupDeleteNum {integer} 目录未同步总数
 *    @cameraDeleteNum {integer} 监控未同步总数
 *    @taskId {string} 同步任务id
 *    @startTime {string} 同步任务开始时间
 *    @endTime {string} 同步任务结束时间
 *    @status {integer} 同步状态
 *    @result {integer} 同步结束，0为成功，其他为错误码
 *    @sipServerId {string} 同步上/下级Id
 *    @name {string} 名称
 *    @syncType {integer} 同步类型0-全量同步1-增量同步2-目录同步
 *    @hasConflictData {boolean} 是否有冲突数据
*/
async getSyncTaskHistoryById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getSyncTaskHistoryById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getSyncTaskHistoryById', error);
    }
}


/**
 * 同步记录数据多条件查询,传入id为同步任务的id
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字 
 * @params UpdateStatus {undefined} 变更状态 
 * @params Type {undefined} 数据类型1-监控2-目录null-全部 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchSyncTaskHistory({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchSyncTaskHistory({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ searchSyncTaskHistory', error);
    }
}


/**
 * 查询过期监控与监控组
 * @params id {string} id （必填）
 * @params Type {undefined} 类型，摄像头 0 组 1 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getExpiredLowerDomains({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getExpiredLowerDomains({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getExpiredLowerDomains', error);
    }
}


/**
 * 重新计算过期数据
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async updateExpiredLowerDomains({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateExpiredLowerDomains({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ updateExpiredLowerDomains', error);
    }
}


/**
 * 删除过期监控与监控组
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params type {integer} 过期记录删除类型 
 * @params records {array} 批量删除数据记录列表 
 * @params timeRange {integer} 删除近几天记录 
 * @returns
*/
async batchDeleteExpiredLowerDomains({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchDeleteExpiredLowerDomains({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ batchDeleteExpiredLowerDomains', error);
    }
}


/**
 * 解决同步冲突
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @params conflictType {integer} 冲突的类型0-没有冲突1-组冲突2-经纬度冲突3-全都有 
 * @returns
*/
async resolveLowerDomainsConflict({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.resolveLowerDomainsConflict({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ resolveLowerDomainsConflict', error);
    }
}


/**
 * 分页获取下级域状态变更记录
 * @params id {string} id （必填）
 * @params Online {boolean} 是否在线 true：在线，false：离线 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getLowerDomainStateRecords({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getLowerDomainStateRecords({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getLowerDomainStateRecords', error);
    }
}


/**
 * 获取全部媒体服务
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAllMediaServers(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAllMediaServers(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getAllMediaServers', error);
    }
}


/**
 * 添加媒体服务
 * @headers X-version {string}  
 * @params mediaId {string} 媒体服务id （必填）
 * @params name {string} 名称 （必填）
 * @params recvPortMax {integer} 媒体收流port范围最大值，需是偶数 （必填）
 * @params recvPortMin {integer} 媒体收流port范围最小值，需是偶数 （必填）
 * @params sendPortMin {integer} 媒体发流port范围最小值，需是偶数 （必填）
 * @params sendPortMax {integer} 媒体发流port范围最大值，需是偶数 （必填）
 * @params selfHttpIp {string} 自己的http-ip （必填）
 * @params selfHttpPort {string} 自身的httpport （必填）
 * @params isRecvPublicNetwork {integer} 是否公网接收流 （必填）
 * @params recvPublicNetworkIp {string} 接收流公网ip地址 
 * @params isSendPublicNetwork {integer} 是否公网转发流 （必填）
 * @params sendPublicNetworkIp {string} 转发流公网ip地 
 * @params status {integer} 状态，1：离线 2：在线 （必填）
 * @returns
 *    @id {string} id
 *    @name {string} 名称
 *    @status {integer} 状态，1：离线 2：在线
 *    @interactProtocol {integer} 信令服务与媒体服务的交互协议。当前只有一个值，表示http
 *    @selfHttpIp {string} 自己的http-ip
 *    @selfHttpPort {integer} 自己的http-port
 *    @sipServerHttpIp {string} 信令服务的http-ip
 *    @sipServerHttpPort {integer} 信令服务的http-port
 *    @keepAliveCycle {integer} 心跳连接周期
 *    @recvStreamIp {string} 接收流的地址，当单网卡时与发送地址值相同。
 *    @sendStreamIp {string} 发送流的地址，当单网卡时与接收地址值相同。
 *    @recvPortMin {integer} 媒体收流port范围最小值，需是偶数
 *    @recvPortMax {integer} 媒体收流port范围最大值，需是偶数
 *    @sendPortMin {integer} 媒体发流port范围最小值，需是偶数
 *    @sendPortMax {integer} 媒体发流port范围最大值，需是偶数
 *    @streamReuse {integer} 流复用。1启用，0不启用。
 *    @asRecverKeepaliveEnable {integer} 作为流接收方保活使能。。1启用，0不启用。
 *    @asRecverStreamTimeout {integer} 接收流超时时间。单位秒。
 *    @asRecverRtcpEnable {integer} 是否启用接收流rtcp检测。1启用，0不启用。
 *    @asRecverRtcpTimeout {integer} 最大超时时长
 *    @asRecverRtcpReportCycle {integer} 检测周期，单位秒
 *    @asRecverCheckTcpEnable {integer} 使用tcp接收流时，tcp断连作为保活检测方法。1启用，0不启用
 *    @asSenderKeepaliveEnable {integer} 作为流发送方保活使能
 *    @asSenderRtcpEnable {integer} 是否启用发送流rtcp检测
 *    @asSenderRtcpTimeout {integer} 最大超时时长
 *    @asSenderRtcpReportCycle {integer} 检测周期，单位秒
 *    @asSenderCheckTcpEnable {integer} 使用tcp发送流时，tcp断连作为保活检测方法
 *    @dbgDumpRecvedPsFile {integer} 
 *    @streamSessionNum {integer} 流会话数量，默认0
 *    @version {string} 版本号
 *    @isRecvPublicNetwork {integer} 是否公网转发流
 *    @recvPublicNetworkIp {string} 转发流公网id地址
*/
async addMediaServers({ mediaId, name, recvPortMax, recvPortMin, sendPortMin, sendPortMax, selfHttpIp, selfHttpPort, isRecvPublicNetwork, isSendPublicNetwork, status  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addMediaServers({mediaId, name, recvPortMax, recvPortMin, sendPortMin, sendPortMax, selfHttpIp, selfHttpPort, isRecvPublicNetwork, isSendPublicNetwork, status,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ addMediaServers', error);
    }
}


/**
 * 删除媒体服务
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteMediaServers({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteMediaServers({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ deleteMediaServers', error);
    }
}


/**
 * 查询某个流媒体实时拉流记录
 * @params MediaServerId {string} 流媒体服务ID 
 * @params Keyword {string} 终端名称，流媒体名称 
 * @params VideoEncoder {undefined} 视频编码0-h2641-h265默认null-全部 
 * @params Resolution {undefined} 分辨率0-高清1-标清2-全高清3-超高清默认null-全部 
 * @params BusinessName {string} 业务类型live:事件快报meetlive:会议直播rtp:监控默认null-全部 
 * @params AudioFormat {undefined} 音频格式0-无1-G711A2-G711U3-AAC4-OPUS5-未知（其它） 
 * @params Order {string} 排序字段，默认时间排序 默认：CreateTime 
 * @params Desc {boolean} 是否升序，默认false - 降序 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMediaSessions(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMediaSessions(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getMediaSessions', error);
    }
}


/**
 * 查询具体流id的实时拉流详情信息
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @description {string} 描述
 *    @terminalType {integer} 发送数据设备类型-1-未知0：国标类型1：RTSP视频源2：onvif4：vce非标服务视频4：RTMP视频源5：webrtc视频流）
 *    @terminalIp {string} 视频源ip
 *    @terminalPort {integer} 视频源端口
 *    @mediaReceiveIp {string} 流媒体接收IP
 *    @mediaReceivePort {integer} 流媒体接收端口
 *    @clients {array} 拉取视频流的客户端信息集合
 *    @receiveStreamType {integer} 流媒体接收码流类型
 *    @receiveTransType {integer} 流媒体接收协议类型（0：国标UDP，1：国标tcp-server，2：国标tcp主动）
 *    @sessionStatus {integer} 链路状态（0：开始，1：执行，2：结束）
 *    @localSdpInfo {string} 针对国标拉流本地sdp消息
 *    @remoteSdpInfo {string} 针对国标拉流远程sdp消息
 *    @sdpDescription {string} sdp信息描述
 *    @fps {integer} 视频的帧率
 *    @playUrl {object} 流播放地址
 *    @businessName {string} 业务类型 live:事件快报，aslive：app人员直播，meetlive：会议直播
 *    @bitRate {integer} 实时码率
 *    @startTime {string} 开始拉流时间
 *    @deviceName {string} 设备名
 *    @deviceId {string} 设备名
 *    @lossPackets {integer} 丢包数
 *    @receivedPackets {integer} 收包总数
 *    @cId {string} 链路ID
 *    @videoEncoder {integer} 视频编码类型
 *    @audioFormat {integer} 音频类型
 *    @totalReaderCount {integer} 观看本视频流的总人数
 *    @mediaServerId {string} 该视频流的媒体id
 *    @mediaServerName {string} 该视频流的媒体名称
 *    @resolution {integer} 分辨率
 *    @terminal {string} 终端
*/
async getMediaSessionsById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getMediaSessionsById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getMediaSessionsById', error);
    }
}


/**
 * 实时拉流记录统计
 * @headers X-version {string}  
 * @returns
 *    @appLiveCount {integer} 人员直播总数
 *    @cameraCount {integer} 监控总数
 *    @meetLiveCount {integer} 会议直播总数
 *    @onlinePeopleCount {integer} 在线人员总数
 *    @pullStreamCount {integer} 拉流总数
 *    @eventReportCount {integer} 事件快报总数
*/
async getMediaSessionStatistics(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMediaSessionStatistics(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getMediaSessionStatistics', error);
    }
}


/**
 * 流录制接口
 * @headers X-version {string}  
 * @params streamId {string} 会议流id （必填）
 * @params name {string} 名称 
 * @params associationId {string} 关联资源id 
 * @returns
 *    @id {string} 记录id
 *    @streamId {string} 流id
 *    @startTime {string} 开始时间
 *    @endTime {string} 开始时间
 *    @userId {string} 用户id
 *    @files {array} 文件id集合
*/
async startSteamRecording({ streamId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.startSteamRecording({streamId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ startSteamRecording', error);
    }
}


/**
 * 获取当前的流的录制信息状态
 * @params StreamId {string} 关联id （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {integer} 唯一标识
 *    @streamId {string} 流id
 *    @associationId {string} 会议号
 *    @createTime {string} 录制开始时间
 *    @status {integer} 视频录制截图操作状态
 *    @createTimeOffset {number} 录制相对时间(单位秒)
*/
async getSteamRecordingInfo({ StreamId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getSteamRecordingInfo({StreamId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getSteamRecordingInfo', error);
    }
}


/**
 * 录制状态修改
 * @params streamId {string} streamId （必填）
 * @headers X-version {string}  
 * @params status {integer} 视频录制截图操作状态 （必填）
 * @returns
*/
async editSteamRecordingStatus({ streamId, status  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editSteamRecordingStatus({streamId, status,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editSteamRecordingStatus', error);
    }
}


/**
 * 删除指定id的记录
 * @params id {integer} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteRecording({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteRecording({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ deleteRecording', error);
    }
}


/**
 * 批量删除
 * @headers X-version {string}  
 * @params deleteOperationType {integer} 资源删除操作类型 
 * @params ids {array} 需要删除的标识集合 （必填）
 * @params time {integer} 需要删除从当前时间开始前Time天的数据 
 * @returns
*/
async batchDeleteRecording({ ids  , ...params}, config = {}) {
    try {
        const { data } = await this.api.batchDeleteRecording({ids,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ batchDeleteRecording', error);
    }
}


/**
 * 搜索录像截图操作记录以及文件信息
 * @params KeyWord {string} 关键字搜索 
 * @params CameraId {string} 监控id当业务类型时lowerrtp时此属性是必填的，不然无法查询到对应设备的录像记录 
 * @params FileEntityType {undefined} 文件类型2-Video1-Picture为null时查全部类型 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params UserId {string} 用户 
 * @params IsUnderway {boolean} 监控录制或截图正在进行中的 
 * @params FileRecordIds {array} 文件记录id 
 * @params PlatformId {string} 平台 ID 
 * @params AppName {string} 业务类型rtp-监控meetlive-视频会议subordinatertp-下级监控 
 * @params AssociationId {string} 关联id 
 * @params VideoPictureResult {undefined} 是否失败0:返回全部1:返回成功的数据2:返回失败的数据默认为1 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchRecording(params = {}, config = {}) {
    try {
        const { data } = await this.api.searchRecording(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ searchRecording', error);
    }
}


/**
 * 获取信令
 * @headers X-version {string}  
 * @returns
 *    @isCivilCodeForParent {integer} 行政区划编码是否从父目录，0：使用parentId，1：使用civilcode
 *    @isServerIpFromConfigFile {integer} 本机服务ip是否从配置文件读取0:不从配置文件,1:从配置文件获取
 *    @dbHost {string} 数据库ip
 *    @dbPassword {string} 数据库密码
 *    @dbPort {integer} 数据库端口
 *    @dbSchema {string} 数据库名称
 *    @dbUserName {string} 数据库用户名
 *    @gbDeviceType {integer} 设备类型
 *    @gbHeartbeatInterval {integer} 心跳周期，单位秒
 *    @gbHeartbeatTimeoutTimes {integer} 最大心跳超时次数
 *    @gbPassword {string} 密码
 *    @gbServerId {string} 服务的设备ID，国标标识
 *    @gbServerIp {string} 服务地址
 *    @gbServerPort {integer} 服务端口
 *    @httpPort {integer} http协议端口
 *    @isAuth {integer} 是否需要认证
 *    @localCivilCode {string} 本地行政区划编码
 *    @sipProtocolTransportType {string} sip协议传输类型(udp或tcp，不区分大小写，默认udp)
 *    @threadPoolSize {integer} 线程池的数目，取值范围[16，100]
 *    @websocketPort {integer} websocket端口号
*/
async getSignals(params = {}, config = {}) {
    try {
        const { data } = await this.api.getSignals(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getSignals', error);
    }
}


/**
 * 修改信令
 * @headers X-version {string}  
 * @params gbServerId {string} 服务的设备ID，国标标识 
 * @params gbServerIp {string} 服务地址 
 * @params gbServerPort {integer} 服务端口 
 * @params sipProtocolTransportType {string} sip协议传输类型(udp或tcp，不区分大小写，默认udp) 
 * @returns
*/
async editSignals(params = {}, config = {}) {
    try {
        const { data } = await this.api.editSignals(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editSignals', error);
    }
}


/**
 * 统计监控总数（包括所有监控总数、质量优、良、差、故障的总数）
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 监控总数
 *    @excellent {integer} 质量优的监控总数
 *    @good {integer} 质量良的监控总数
 *    @bad {integer} 质量差的监控总数
 *    @fault {integer} 故障的监控总数
 *    @online {integer} 监控在线总数
*/
async getCameras(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCameras(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCameras', error);
    }
}


/**
 * 统计故障监控的总数（包括故障类型统计）
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 故障监控总数
 *    @noFlow {integer} 无码流故障监控总数
 *    @noResponse {integer} 下级域无响应故障监控总数
 *    @internalError {integer} 国标内部错误
*/
async getFaultCameras(params = {}, config = {}) {
    try {
        const { data } = await this.api.getFaultCameras(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getFaultCameras', error);
    }
}


/**
 * 统计质量差的监控总数（包括质量差类型统计）
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 质量差的监控总数
 *    @imageQuality {integer} 图像质量监控总数
 *    @brightness {integer} 亮度监控总数
 *    @color {integer} 颜色监控总数
 *    @contrast {integer} 对比度监控总数
 *    @blur {integer} 模糊
 *    @noiseInterference {integer} 噪声干扰
 *    @scrolling {integer} 滚屏
 *    @shade {integer} 遮挡
 *    @screenFreezing {integer} 画面冻结
 *    @snr {integer} 信噪比
 *    @psnr {integer} 峰值信噪比
 *    @imageDistortion {integer} 图像畸变
 *    @blackScreen {integer} 黑屏
 *    @specialFlowerScreen {integer} 特殊花屏
*/
async getBadCameras(params = {}, config = {}) {
    try {
        const { data } = await this.api.getBadCameras(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getBadCameras', error);
    }
}


/**
 * 统计不同分辨率的监控总数
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 监控总数
 *    @hd {integer} 高清
 *    @fullHd {integer} 全高清
 *    @sd {integer} 标清
 *    @uhd {integer} 超高清
*/
async getCamerasResolution(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCamerasResolution(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCamerasResolution', error);
    }
}


/**
 * 统计巡检历史走势
 * @params JobId {string} jobid 
 * @params BeginTime {string} 开始时间 （必填）
 * @params EndTime {string} 结束时间 （必填）
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDetectionTasksHistory({ BeginTime, EndTime  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDetectionTasksHistory({BeginTime, EndTime,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getDetectionTasksHistory', error);
    }
}


/**
 * 统计质量差的监控总数（包括质量差类型统计）
 * @params jobId {string} jobId （必填）
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 监控总数
 *    @excellent {integer} 质量优的监控总数
 *    @good {integer} 质量良的监控总数
 *    @bad {integer} 质量差的监控总数
 *    @fault {integer} 故障的监控总数
 *    @online {integer} 监控在线总数
*/
async getCamerasByJobId({ jobId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getCamerasByJobId({jobId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCamerasByJobId', error);
    }
}


/**
 * 统计质量差的监控总数（包括质量差类型统计）
 * @params jobId {string} jobId （必填）
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 质量差的监控总数
 *    @imageQuality {integer} 图像质量监控总数
 *    @brightness {integer} 亮度监控总数
 *    @color {integer} 颜色监控总数
 *    @contrast {integer} 对比度监控总数
 *    @blur {integer} 模糊
 *    @noiseInterference {integer} 噪声干扰
 *    @scrolling {integer} 滚屏
 *    @shade {integer} 遮挡
 *    @screenFreezing {integer} 画面冻结
 *    @snr {integer} 信噪比
 *    @psnr {integer} 峰值信噪比
 *    @imageDistortion {integer} 图像畸变
 *    @blackScreen {integer} 黑屏
 *    @specialFlowerScreen {integer} 特殊花屏
*/
async getBadCamerasByJobId({ jobId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getBadCamerasByJobId({jobId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getBadCamerasByJobId', error);
    }
}


/**
 * 统计巡检详情不同故障类型监控数量
 * @params jobId {string} jobId （必填）
 * @headers X-version {string}  
 * @returns
 *    @amount {integer} 故障监控总数
 *    @noFlow {integer} 无码流故障监控总数
 *    @noResponse {integer} 下级域无响应故障监控总数
 *    @internalError {integer} 国标内部错误
*/
async getFaultCamerasByJobId({ jobId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getFaultCamerasByJobId({jobId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getFaultCamerasByJobId', error);
    }
}


/**
 * 该接口提供收藏夹总数(包括子收藏夹)
 * @headers X-version {string}  
 * @returns
 *    @favoriteCameraGroupCount {integer} 收藏夹总数
*/
async getFavoriteCameraGroupTotal(params = {}, config = {}) {
    try {
        const { data } = await this.api.getFavoriteCameraGroupTotal(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getFavoriteCameraGroupTotal', error);
    }
}


/**
 * 查询指定job的巡检走势记录
 * @params jobId {string} jobId （必填）
 * @params Limit {integer} 查询返回的记录数量 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getDetectionHistoryByJobId({ jobId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getDetectionHistoryByJobId({jobId,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getDetectionHistoryByJobId', error);
    }
}


/**
 * 创建监控保活作业
 * @headers X-version {string}  
 * @params jobId {string} 定时任务id （必填）
 * @params type {integer} 巡检类型 0 - 监控组， 1 - 标签 
 * @params taskName {string} 任务名称 （必填）
 * @params businessId {string} 业务对象Id监控Id或标签Id （必填）
 * @params owners {array} 负责人 
 * @params notificationType {integer} 通知类型 （必填）
 * @returns
 *    @jobId {string} 定时任务Id
 *    @status {integer} 保活任务状态
 *    @businessName {string} 对象名称
 *    @businessId {string} 业务对象Id
 *    @cameraTotal {integer} 监控数量
 *    @type {integer} 巡检类型 0 - 监控组， 1 - 标签
 *    @createTime {string} 创建时间
 *    @modifyTime {string} 修改时间
 *    @owners {array} 负责人
 *    @notificationType {integer} 通知类型
 *    @retryTotal {integer} 重试总数
 *    @successesTotal {integer} 保活成功监控总数
 *    @failTotal {integer} 保活失败监控总数
 *    @executionsTotal {integer} 执行总数
 *    @taskName {string} 任务名称
*/
async addStreamKeepAliveJob({ jobId, taskName, businessId, notificationType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addStreamKeepAliveJob({jobId, taskName, businessId, notificationType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ addStreamKeepAliveJob', error);
    }
}


/**
 * 按条件查询保活作业列表
 * @params JobIds {array} 作业Id集合 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getStreamKeepAliveJobs(params = {}, config = {}) {
    try {
        const { data } = await this.api.getStreamKeepAliveJobs(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getStreamKeepAliveJobs', error);
    }
}


/**
 * 获取指定保活作业
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @jobId {string} 定时任务Id
 *    @status {integer} 保活任务状态
 *    @businessName {string} 对象名称
 *    @businessId {string} 业务对象Id
 *    @cameraTotal {integer} 监控数量
 *    @type {integer} 巡检类型 0 - 监控组， 1 - 标签
 *    @createTime {string} 创建时间
 *    @modifyTime {string} 修改时间
 *    @owners {array} 负责人
 *    @notificationType {integer} 通知类型
 *    @retryTotal {integer} 重试总数
 *    @successesTotal {integer} 保活成功监控总数
 *    @failTotal {integer} 保活失败监控总数
 *    @executionsTotal {integer} 执行总数
 *    @taskName {string} 任务名称
*/
async getStreamKeepAliveJobById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getStreamKeepAliveJobById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getStreamKeepAliveJobById', error);
    }
}


/**
 * 删除保活作业
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteStreamKeepAliveJob({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteStreamKeepAliveJob({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ deleteStreamKeepAliveJob', error);
    }
}


/**
 * 修改保活作业
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params businessId {string} 保活的业务对象Id监控组Id或标签Id （必填）
 * @params type {integer} 巡检类型 0 - 监控组， 1 - 标签 
 * @params taskName {string} 任务名称 （必填）
 * @params owners {array} 负责人 
 * @params notificationType {integer} 通知类型 （必填）
 * @returns
*/
async editStreamKeepAliveJob({ id, businessId, taskName, notificationType  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editStreamKeepAliveJob({id, businessId, taskName, notificationType,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editStreamKeepAliveJob', error);
    }
}


/**
 * 修改保活作业的状态
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params status {integer} 保活任务状态 
 * @returns
*/
async editStreamKeepAliveJobStatus({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editStreamKeepAliveJobStatus({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editStreamKeepAliveJobStatus', error);
    }
}


/**
 * 获取保活作业的执行任务
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getStreamKeepAliveTasks({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getStreamKeepAliveTasks({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getStreamKeepAliveTasks', error);
    }
}


/**
 * 获取保活作业指定任务的保活记录
 * @params id {string} id （必填）
 * @params TaskID {string} 保活作业下的任务ID （必填）
 * @params CameraName {string} 监控名称 
 * @params Result {boolean} 状态，0-保活失败1-保活成功 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getStreamKeepAliveRecords({ id, TaskID  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getStreamKeepAliveRecords({id, TaskID,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getStreamKeepAliveRecords', error);
    }
}


/**
 * 添加上级域接口
 * @headers X-version {string}  
 * @params upperId {string} 上级域标识 （必填）
 * @params name {string} 名称 （必填）
 * @params ip {string} Ip地址 （必填）
 * @params port {integer} 端口 （必填）
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params status {integer} 上/下级域状态 
 * @params isAuth {boolean} 是否注册认证,false:不认证;true:认证 
 * @params username {string} 注册认证账号 
 * @params password {string} 注册认证密码 
 * @params heartbeatCycle {integer} 心跳周期,单位:秒 
 * @params heartbeatTimeoutCount {integer} 心跳超时最大次数 
 * @params isPublicNetwork {integer} 上/下级域网络 
 * @params sendCatalogTransProtocol {integer} SIP传输协议类型 
 * @params sendCatalogOnceCount {integer} 一次发送目录条数,范围:1-50,仅sendCatalogTransProtocol为TCP时有效 
 * @params roleId {string} 服务的角色Id 
 * @params isRepeat {boolean} 是否支持重复数据上报,false不支持，true支持，默认不支持 
 * @params isExpired {boolean} 是否同步过期监控，false-否，true-是，默认否 
 * @params syncRecordSavedCount {integer} 保留同步记录次数，默认3次 
 * @returns
 *    @upperId {string} 上级域标识
 *    @name {string} 名称
 *    @ip {string} Ip地址
 *    @port {integer} 端口
 *    @sipTransProtocol {integer} SIP传输协议类型
 *    @status {integer} 上/下级域状态
 *    @isAuth {boolean} 是否注册认证,0:不认证;1:认证
 *    @username {string} 注册认证账号
 *    @password {string} 注册认证密码
 *    @heartbeatCycle {integer} 心跳周期,单位:秒
 *    @heartbeatTimeoutCount {integer} 心跳超时最大次数
 *    @isPublicNetwork {integer} 上/下级域网络
 *    @sendCatalogTransProtocol {integer} SIP传输协议类型
 *    @sendCatalogOnceCount {integer} 一次发送目录条数,范围:1-50,仅sendCatalogTransProtocol为TCP时有效
 *    @roleId {string} 服务的角色Id
 *    @roleName {string} 角色名称
 *    @taskStatus {integer} 同步状态
 *    @isRepeat {boolean} 是否支持重复数据上报,false不支持，true支持
 *    @isExpired {boolean} 是否同步过期监控，false-否，true-是，默认否
 *    @syncRecordSavedCount {integer} 保留同步记录次数
 *    @result {integer} 同步结果0 成功其他都是失败错误码
 *    @stateDuration {string} 状态在/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
*/
async addUpperDomain({ upperId, name, ip, port  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addUpperDomain({upperId, name, ip, port,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ addUpperDomain', error);
    }
}


/**
 * 分页查询上级域
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getUpperDomains(params = {}, config = {}) {
    try {
        const { data } = await this.api.getUpperDomains(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getUpperDomains', error);
    }
}


/**
 * 修改国标上级域
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params name {string} 名称 （必填）
 * @params ip {string} Ip地址 （必填）
 * @params port {integer} 端口 （必填）
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params status {integer} 上/下级域状态 
 * @params isAuth {boolean} 是否注册认证,false:不认证;true:认证 
 * @params username {string} 注册认证账号 
 * @params password {string} 注册认证密码 
 * @params heartbeatCycle {integer} 心跳周期,单位:秒 
 * @params heartbeatTimeoutCount {integer} 心跳超时最大次数 
 * @params isPublicNetwork {integer} 上/下级域网络 
 * @params sendCatalogTransProtocol {integer} SIP传输协议类型 
 * @params sendCatalogOnceCount {integer} 一次发送目录条数,范围:1-50,仅sendCatalogTransProtocol为TCP时有效 
 * @params roleId {string} 服务的角色Id 
 * @params isRepeat {boolean} 是否支持重复数据上报,false不支持，true支持，默认不支持 
 * @params isExpired {boolean} 是否同步过期监控，false-否，true-是，默认否 
 * @params syncRecordSavedCount {integer} 保留同步记录次数 
 * @returns
*/
async editUpperDomain({ id, name, ip, port  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editUpperDomain({id, name, ip, port,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editUpperDomain', error);
    }
}


/**
 * 删除上级域
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
*/
async deleteUpperDomain({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.deleteUpperDomain({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ deleteUpperDomain', error);
    }
}


/**
 * 查询上级域详情
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @lastReportTime {string} 最后一次上报完成时间
 *    @upperId {string} 上级域标识
 *    @name {string} 名称
 *    @ip {string} Ip地址
 *    @port {integer} 端口
 *    @sipTransProtocol {integer} SIP传输协议类型
 *    @status {integer} 上/下级域状态
 *    @isAuth {boolean} 是否注册认证,0:不认证;1:认证
 *    @username {string} 注册认证账号
 *    @password {string} 注册认证密码
 *    @heartbeatCycle {integer} 心跳周期,单位:秒
 *    @heartbeatTimeoutCount {integer} 心跳超时最大次数
 *    @isPublicNetwork {integer} 上/下级域网络
 *    @sendCatalogTransProtocol {integer} SIP传输协议类型
 *    @sendCatalogOnceCount {integer} 一次发送目录条数,范围:1-50,仅sendCatalogTransProtocol为TCP时有效
 *    @roleId {string} 服务的角色Id
 *    @roleName {string} 角色名称
 *    @taskStatus {integer} 同步状态
 *    @isRepeat {boolean} 是否支持重复数据上报,false不支持，true支持
 *    @isExpired {boolean} 是否同步过期监控，false-否，true-是，默认否
 *    @syncRecordSavedCount {integer} 保留同步记录次数
 *    @result {integer} 同步结果0 成功其他都是失败错误码
 *    @stateDuration {string} 状态在/离线时长
 *    @lastStateChangedTime {string} 最后一次状态变更时间
*/
async getUpperDomainById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getUpperDomainById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getUpperDomainById', error);
    }
}


/**
 * 根据同步记录id查询上级域历史同步记录
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @returns
 *    @catalogsNum {integer} 信令同步目录数量值
 *    @actualCatalogsNum {integer} 实际同步目录数量
 *    @addNum {integer} 添加数量
 *    @updateNum {integer} 修改数量
 *    @deleteNum {integer} 删除数量
 *    @conflictNum {integer} 冲突数量
 *    @time {string} 同步耗时
 *    @offlineNum {integer} 离线数量
 *    @onlineNum {integer} 在线数量
 *    @cameraTotal {integer} 监控总数
 *    @groupTotal {integer} 监控组总数
 *    @groupId {string} 指定的目录
 *    @groupName {string} 目录名称
 *    @cameraAddNum {integer} 监控添加总数
 *    @cameraUpdateNum {integer} 监控修改总数
 *    @cameraConflictNum {integer} 监控冲突总数
 *    @groupAddNum {integer} 目录添加总数
 *    @groupUpdateNum {integer} 目录修改总数
 *    @groupConflictNum {integer} 目录冲突总数
 *    @groupDeleteNum {integer} 目录未同步总数
 *    @cameraDeleteNum {integer} 监控未同步总数
 *    @taskId {string} 同步任务id
 *    @startTime {string} 同步任务开始时间
 *    @endTime {string} 同步任务结束时间
 *    @status {integer} 同步状态
 *    @result {integer} 同步结束，0为成功，其他为错误码
 *    @sipServerId {string} 同步上/下级Id
 *    @name {string} 名称
 *    @syncType {integer} 同步类型0-全量同步1-增量同步2-目录同步
 *    @hasConflictData {boolean} 是否有冲突数据
*/
async getUpperSyncTaskHistoryById({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getUpperSyncTaskHistoryById({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getUpperSyncTaskHistoryById', error);
    }
}


/**
 * 上级域同步历史记录分页查询
 * @params id {string} id （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getUpperDomainSyncHistory({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getUpperDomainSyncHistory({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getUpperDomainSyncHistory', error);
    }
}


/**
 * 上级域同步记录数据多条件查询,传入id为同步任务的id
 * @params id {string} id （必填）
 * @params Keyword {string} 关键字 
 * @params UpdateStatus {integer} 变更状态 
 * @params Type {undefined} 数据类型1-监控2-目录null-全部 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getUpperDomainSyncRecords({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getUpperDomainSyncRecords({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getUpperDomainSyncRecords', error);
    }
}


/**
 * 分页获取上级域状态变更记录
 * @params id {string} id （必填）
 * @params Online {boolean} 是否在线 true：在线，false：离线 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getUpperDomainStateRecords({ id  , ...params}, config = {}) {
    try {
        const { data } = await this.api.getUpperDomainStateRecords({id,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getUpperDomainStateRecords', error);
    }
}


/**
 * 条件查询监控状态变更上报记录
 * @params UpperId {string} 上级域Id 
 * @params Online {boolean} 监控在线状态,true-在线，false-离线 
 * @params ReportResult {boolean} 上报结果:true-上报成功，false-上报失败 
 * @params StartTime {string} 开始时间 
 * @params EndTime {string} 结束时间 
 * @params Keyword {string} 关键字 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getCamerasStateHistory(params = {}, config = {}) {
    try {
        const { data } = await this.api.getCamerasStateHistory(params,config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getCamerasStateHistory', error);
    }
}


/**
 * 邀请/取消 摄像头 摄像头ID+会议室号
 * @params conferenceNumber {string}  （必填）
 * @params cameraId {string} cameraId （必填）
 * @params isInvite {boolean}  默认：true （必填）
 * @headers X-version {string}  
 * @returns
*/
async editInviteCamera({ conferenceNumber, cameraId, isInvite  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editInviteCamera({conferenceNumber,...params},{params:{conferenceNumber, cameraId, isInvite,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editInviteCamera', error);
    }
}


/**
 * 邀请/取消 直播 联系人ID+会议室号
 * @params conferenceNumber {string}  （必填）
 * @params contactId {string} contactId （必填）
 * @params isInvite {boolean}  默认：true （必填）
 * @headers X-version {string}  
 * @returns
*/
async editInviteLive({ conferenceNumber, contactId, isInvite  , ...params}, config = {}) {
    try {
        const { data } = await this.api.editInviteLive({conferenceNumber,...params},{params:{conferenceNumber, contactId, isInvite,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ editInviteLive', error);
    }
}


/**
 * 会议直播 推流/取消 会议室号
 * @params conferenceNumber {string}  （必填）
 * @params isToLive {boolean}  默认：true （必填）
 * @headers X-version {string}  
 * @returns
*/
async videoConferenceToLive({ conferenceNumber, isToLive  , ...params}, config = {}) {
    try {
        const { data } = await this.api.videoConferenceToLive({conferenceNumber,...params},{params:{conferenceNumber, isToLive,...params}, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ videoConferenceToLive', error);
    }
}


/**
 * 获取会议直播直播
 * @params conferenceNumber {string}  （必填）
 * @headers X-version {string}  
 * @returns
 *    @id {string} 直播Id:578
 *    @stream {string} 直播stream
 *    @status {integer} 直播状态
 *    @liveType {integer} 直播类型
 *    @title {string} 直播标题
 *    @description {string} 直播描述
 *    @userId {string} 用户Id
 *    @userAccount {string} 用户账号
 *    @userName {string} 用户名称
 *    @createTime {string} 创建时间
 *    @rtmpUrl {string} RtmpUrl
 *    @flvUrl {string} 播放Url
 *    @rtspUrl {string} Rtsp 地址
 *    @wsUrl {string} Ws 地址
 *    @webRtcUrl {string} WebRtc 地址
 *    @relateWsUrl {string} Ws 相对地址
 *    @relateFlvUrl {string} Flv 相对地址
 *    @relateWebRtcUrl {string} WebRtc 相对地址
 *    @isGradingDispatch {boolean} 是否为分级调度的直播回调
 *    @appointment {string} 预约时间
*/
async obtainConferenceLive({ conferenceNumber  , ...params}, config = {}) {
    try {
        const { data } = await this.api.obtainConferenceLive({conferenceNumber,...params},config);
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ obtainConferenceLive', error);
    }
}


/**
 * 监控搜索
 * @params GroupType {integer} 资源所属监控组类型，0表示搜索全部,1是国标资源，2是预案资源，4是本地资源，支持多种资源搜索，比如输入5，5=1+4，搜索国标资源和本地资源 
 * @params Status {integer} 监控状态，0表示搜索全部；1是离线；2是在线；4是下级域离线后设备离线；8是设备在录像，设备一般为 IPC；支持多种资源搜索，比如输入5，5=1+4，搜索离线和下级域离线后设备离线，该参数限制0-15 
 * @params Keyword {string} 关键字 （必填）
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async searchCamerasV2({ Keyword  , ...params}, config = {}) {
    try {
        const { data } = await this.api.searchCamerasV2({Keyword,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ searchCamerasV2', error);
    }
}


/**
 * 监控高级搜索
 * @headers X-version {string}  
 * @params keyword {string} 关键字 
 * @params status {integer} 监控状态，0表示搜索全部；1是离线；2是在线；4是下级域离线后设备离线；8是设备在录像，设备一般为 IPC；支持多种资源搜索，比如输入5，5=1+4，搜索离线和下级域离线后设备离线，该参数限制0-15 
 * @params quality {array} 质量 
 * @params resolution {array} 分辨率 
 * @params encode {array} 压缩格式 
 * @params audio {boolean} 是否有音频 
 * @params labelIds {array} 标签 
 * @params isSupportPTZ {boolean} 是否可以进行云台控制true-可以false-不可以null-全部 
 * @params groupType {integer} 资源所属监控组类型，0表示搜索全部,1是国标资源，2是预案资源，4是本地资源，支持多种资源搜索，比如输入5，5=1+4，搜索国标资源和本地资源 
 * @params pageIndex {integer} 页码, 从1开始 
 * @params pageSize {integer} 页容量 
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async advanceSearchCameras(params = {}, config = {}) {
    try {
        const { data } = await this.api.advanceSearchCameras(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ advanceSearchCameras', error);
    }
}


/**
 * 添加国标监控终端
 * @headers X-version {string}  
 * @params lowerDomainId {string} 下级域Id （必填）
 * @params videoChannelId {string} 视频通道标识 （必填）
 * @params ipAddress {string} IP地址 （必填）
 * @params port {integer} 端口 （必填）
 * @params password {string} 密码 
 * @params heartbeatCycle {integer} 心跳周期 
 * @params maxHeartbeatTimeoutCount {integer} 最大心跳超时次数 
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params rtpSendType {integer} 国标流媒体向下级发流协议 
 * @params rtpRecvType {integer} 国标流媒体收流协议 
 * @params isPublicNetwork {boolean} 是否公网 
 * @params isAuth {boolean} 是否启用认证 
 * @params isSupportPTZ {boolean} 是否可以云台控制true-可以false-不可以 
 * @params name {string} 名称 （必填）
 * @params parentId {string} 组Id （必填）
 * @params latitude {number} 纬度 
 * @params longitude {number} 经度 
 * @returns
 *    @videoEncoder {integer} 视频编码类型
 *    @resolution {integer} 分辨率
 *    @audio {boolean} 是否有音频
 *    @result {integer} 图片质量类型
 *    @resultDetail {object} 图片质量
 *    @namePath {string} 监控名字路径
 *    @idPath {string} 监控ID路径
 *    @order {integer} 排序字段
 *    @detectionCount {integer} 巡检的次数
 *    @faultDetail {integer} 质量故障的错误码：http://git.rdapp.com/product/knowledge-planet/issues/818
 *    @isManual {boolean} 是否是手动设置
 *    @labels {array} 标签
 *    @audioEncodingFormat {string} 音频编码属性
 *    @isSupportPTZ {boolean} 是否可以进行云台控制
 *    @aliasName {string} 监控别名
 *    @originalName {string} 原始名称
 *    @status {integer} 监控状态
 *    @quality {integer} 图片质量类型
 *    @areaCode {string} 行政区域码
 *    @thumbnailID {string} 图片id
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @id {string} ID
 *    @name {string} 名称
*/
async addGbCamera({ lowerDomainId, videoChannelId, ipAddress, port, name, parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addGbCamera({lowerDomainId, videoChannelId, ipAddress, port, name, parentId,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ addGbCamera', error);
    }
}


/**
 * 更新国标监控终端
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params aliasName {string} 监控别名 
 * @params quality {integer} 图片质量类型 
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改 
 * @params labelIds {array} 监控标签id （必填）
 * @params ipAddress {string} IP地址 （必填）
 * @params port {integer} 端口 （必填）
 * @params password {string} 密码 
 * @params heartbeatCycle {integer} 心跳周期 
 * @params maxHeartbeatTimeoutCount {integer} 最大心跳超时次数 
 * @params sipTransProtocol {integer} SIP传输协议类型 
 * @params rtpSendType {integer} 国标流媒体向下级发流协议 
 * @params rtpRecvType {integer} 国标流媒体收流协议 
 * @params isPublicNetwork {boolean} 是否公网 
 * @params isAuth {boolean} 是否启用认证 
 * @params isSupportPTZ {boolean} 是否可以云台控制true-可以false-不可以 
 * @params name {string} 名称 （必填）
 * @params parentId {string} 组Id （必填）
 * @params latitude {number} 纬度 
 * @params longitude {number} 经度 
 * @returns
*/
async updateGbCamera({ id, labelIds, ipAddress, port, name, parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateGbCamera({id, labelIds, ipAddress, port, name, parentId,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ updateGbCamera', error);
    }
}


/**
 * 添加非标终端(包括视频推/拉流两种类型)
 * @headers X-version {string}  
 * @params pullAddress {string} 拉流地址 
 * @params isSupportPTZ {boolean} 是否可以云台控制true-可以false-不可以 
 * @params name {string} 名称 （必填）
 * @params parentId {string} 组Id （必填）
 * @params latitude {number} 纬度 
 * @params longitude {number} 经度 
 * @returns
 *    @videoEncoder {integer} 视频编码类型
 *    @resolution {integer} 分辨率
 *    @audio {boolean} 是否有音频
 *    @result {integer} 图片质量类型
 *    @resultDetail {object} 图片质量
 *    @namePath {string} 监控名字路径
 *    @idPath {string} 监控ID路径
 *    @order {integer} 排序字段
 *    @detectionCount {integer} 巡检的次数
 *    @faultDetail {integer} 质量故障的错误码：http://git.rdapp.com/product/knowledge-planet/issues/818
 *    @isManual {boolean} 是否是手动设置
 *    @labels {array} 标签
 *    @audioEncodingFormat {string} 音频编码属性
 *    @isSupportPTZ {boolean} 是否可以进行云台控制
 *    @aliasName {string} 监控别名
 *    @originalName {string} 原始名称
 *    @status {integer} 监控状态
 *    @quality {integer} 图片质量类型
 *    @areaCode {string} 行政区域码
 *    @thumbnailID {string} 图片id
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @id {string} ID
 *    @name {string} 名称
*/
async addNonStandardCamera({ name, parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addNonStandardCamera({name, parentId,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ addNonStandardCamera', error);
    }
}


/**
 * 更新非标监控终端
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params pullAddress {string} 拉流地址 
 * @params aliasName {string} 监控别名 
 * @params quality {integer} 图片质量类型 
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改 
 * @params labelIds {array} 监控标签id （必填）
 * @params isSupportPTZ {boolean} 是否可以云台控制true-可以false-不可以 
 * @params name {string} 名称 （必填）
 * @params parentId {string} 组Id （必填）
 * @params latitude {number} 纬度 
 * @params longitude {number} 经度 
 * @returns
*/
async updateNonStandardCamera({ id, labelIds, name, parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateNonStandardCamera({id, labelIds, name, parentId,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ updateNonStandardCamera', error);
    }
}


/**
 * 添加视频文件虚拟终端
 * @headers X-version {string}  
 * @params fileUrl {string} 视频文件地址 （必填）
 * @params isSupportPTZ {boolean} 是否可以云台控制true-可以false-不可以 
 * @params name {string} 名称 （必填）
 * @params parentId {string} 组Id （必填）
 * @params latitude {number} 纬度 
 * @params longitude {number} 经度 
 * @returns
 *    @videoEncoder {integer} 视频编码类型
 *    @resolution {integer} 分辨率
 *    @audio {boolean} 是否有音频
 *    @result {integer} 图片质量类型
 *    @resultDetail {object} 图片质量
 *    @namePath {string} 监控名字路径
 *    @idPath {string} 监控ID路径
 *    @order {integer} 排序字段
 *    @detectionCount {integer} 巡检的次数
 *    @faultDetail {integer} 质量故障的错误码：http://git.rdapp.com/product/knowledge-planet/issues/818
 *    @isManual {boolean} 是否是手动设置
 *    @labels {array} 标签
 *    @audioEncodingFormat {string} 音频编码属性
 *    @isSupportPTZ {boolean} 是否可以进行云台控制
 *    @aliasName {string} 监控别名
 *    @originalName {string} 原始名称
 *    @status {integer} 监控状态
 *    @quality {integer} 图片质量类型
 *    @areaCode {string} 行政区域码
 *    @thumbnailID {string} 图片id
 *    @longitude {number} 经度
 *    @latitude {number} 纬度
 *    @id {string} ID
 *    @name {string} 名称
*/
async addVirtualFile({ fileUrl, name, parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.addVirtualFile({fileUrl, name, parentId,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ addVirtualFile', error);
    }
}


/**
 * 更新虚拟终端
 * @params id {string} id （必填）
 * @headers X-version {string}  
 * @params fileUrl {string} 视频文件地址 （必填）
 * @params aliasName {string} 监控别名 
 * @params quality {integer} 图片质量类型 
 * @params isManual {boolean} True手动检测/ false智能检测，可为null，为null表示不修改 
 * @params labelIds {array} 监控标签id （必填）
 * @params isSupportPTZ {boolean} 是否可以云台控制true-可以false-不可以 
 * @params name {string} 名称 （必填）
 * @params parentId {string} 组Id （必填）
 * @params latitude {number} 纬度 
 * @params longitude {number} 经度 
 * @returns
*/
async updateVirtualFileCamera({ id, fileUrl, labelIds, name, parentId  , ...params}, config = {}) {
    try {
        const { data } = await this.api.updateVirtualFileCamera({id, fileUrl, labelIds, name, parentId,...params},{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ updateVirtualFileCamera', error);
    }
}


/**
 * 生成国标 Id
 * @headers X-version {string}  
 * @params type {integer} 国标Id类型 
 * @returns
 *    @gbId {string} 国标 Id
*/
async generateGbId(params = {}, config = {}) {
    try {
        const { data } = await this.api.generateGbId(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ generateGbId', error);
    }
}


/**
 * 分页查询标签列表
 * @params Keyword {string} 关键字查询，匹配标签名称 
 * @params Order {string} 排序字段，不填默认时间排序 默认：CreatedTime 
 * @params Desc {boolean} 是否升序，默认false - 降序 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getAllLabelsV2(params = {}, config = {}) {
    try {
        const { data } = await this.api.getAllLabelsV2(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getAllLabelsV2', error);
    }
}


/**
 * 查询实时拉流记录
 * @params MediaServerId {string} 流媒体服务ID 
 * @params Keyword {string} 终端名称，流媒体名称 
 * @params VideoEncoder {undefined} 视频编码0-h2641-h265默认null-全部 
 * @params Resolution {undefined} 分辨率0-高清1-标清2-全高清3-超高清默认null-全部 
 * @params BusinessName {string} 业务类型live:事件快报meetlive:会议直播rtp:监控默认null-全部 
 * @params AudioFormat {undefined} 音频格式0-无1-G711A2-G711U3-AAC4-OPUS5-未知（其它） 
 * @params Order {string} 排序字段，默认时间排序 默认：CreateTime 
 * @params Desc {boolean} 是否升序，默认false - 降序 
 * @params page {integer} 页码, 从1开始 默认：1 
 * @params per_page {integer} 页容量 默认：100 
 * @headers X-version {string}  
 * @returns
 *    @totalCount {integer} 总数
 *    @records {array} 记录
*/
async getMediaSessionsV2(params = {}, config = {}) {
    try {
        const { data } = await this.api.getMediaSessionsV2(params,{headers: { 'X-version': '2' }, ...config});
        return data;
    } catch (error) {
        return utils.formatError('videoFusionServiceBiz ~ getMediaSessionsV2', error);
    }
}

```

 