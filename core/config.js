const mmtBiz = ['/api/GradingDispatch'];

const cgsBiz = ['/api/UniformSpeech/RecordNotify'];

const authBiz = [
  '/api/authentications/exchangetoken',
  '/api/roles/{role}/permissionDatas/{data}',
  '/api/licenses/{bizControlKey}/string',
  '/api/licenses/{bizControlKey}/bool',
  '/api/licenses/{bizControlKey}/int',
  '/api/licenses/bizControlInfo/all',
  '/api/licenses/authorization/functions',
  '/api/ExceptionDemo/{resourceId}',
  '/api/clients/data/sync',
  '/api/clients/data/sync/{sessionId}/progress',
];

const orgsBiz = ['/api/datasync', '/progress', '/progress/{sessionId}', '/report', '/report/{rid}'];

const auditBiz = ['/api/Analysis/Instruction'];

const vcsBiz = ['/api/TencentConference', '/api/TencentConference', '/api/YealinkConference/{domain}', '/api/YealinkConference'];

const videoFusionServiceBiz = [
  '/api/VideoConferences',
  '/api/GradingDispatch',
  '/api/Cameras/statics/genarate',
  '/api/Tests/camera/{id}',
  '/api/Tests/StreamKeepAliveJobs/{jobId}',
  '/api/GbConfigs/sync',
  '/api/GbConfigs/domains/{id}/ResolveConflict',
  '/api/UpperDomains/{id}/synchronization',
];

const geoDataBiz = ['/api/Goods/sync', '/api/Layers/reload'];

const edmsBiz = ['/Commands', '/api/ExceptionDemo', '/api/ExceptionDemo/{resourceId}', '/api/GradingDispatch', '/api/CallBiz/NumberConfig', '/api/CallBiz/NumberTransform'];

const alertsPlatformBiz = ['/api/WebHooks', '/api/WebHooks/alertManage'];

const rrsBiz = ['/api/ResourceRelationships/Cache'];

const dcsBiz = ['/api/ResourceDb/children/mergence','/api/ResourceDb/reload'];

// 忽略url地址
const ignorePaths = {
  common: ['/api/BusinessMetrics', '/BusinessMetrics', '/api/node'],
  dcsBiz,
  cgsBiz,
  mmtBiz,
  authBiz,
  orgsBiz,
  auditBiz,
  vcsBiz,
  videoFusionServiceBiz,
  geoDataBiz,
  edmsBiz,
  alertsPlatformBiz,
  rrsBiz,
};

const swaggerJSON = require('./swaggerMap');
const warehouseMethods = require('./warehouseMethods');
const staticRequest = require('./staticRequest');
module.exports = {
  ignorePaths,
  swaggerJSON,
  warehouseMethods,
  staticRequest,
};
