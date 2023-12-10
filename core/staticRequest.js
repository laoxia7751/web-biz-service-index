/*
 * @Author: xiajitao xiajitao@genew.com
 * @Date: 2022-08-29 09:38:31
 * @LastEditors: xiajitao xiajitao@genew.com
 * @LastEditTime: 2022-08-29 10:57:25
 * @Description: 旧的biz请求和静态资源服务接口
 */
module.exports = {
  facilityBiz: [
    {
      url: '/api/Facilities/layers',
      tag: 'Facilities',
      subBiz: null,
      methods: 'get',
      summary: '获取设施图层',
      version: 'v1',
      methodName: 'getAllFacilityType',
      parameters: null,
      responses: [
        {
          key: 'totalCount',
          type: 'integer',
          description: '总数',
          required: false,
        },
        {
          key: 'records',
          type: 'array',
          description: '记录',
          required: false,
        },
      ],
      requestBody: null,
    },
    {
      url: '/api/Facilities/area_query',
      tag: 'Facilities',
      subBiz: null,
      methods: 'post',
      summary: '区域查询资源',
      version: 'v1',
      methodName: 'getFacilitiesByArea',
      parameters: null,
      responses: [
        {
          key: 'totalCount',
          type: 'integer',
          description: '总数',
          required: false,
        },
        {
          key: 'records',
          type: 'array',
          description: '记录',
          required: false,
        },
      ],
      requestBody: [
        {
          key: 'upLeft',
          type: 'object',
          description: '坐标点',
          required: true,
          details: [
            {
              key: '0',
            },
            {
              key: '1',
            },
          ],
        },
        {
          key: 'bottomRight',
          type: 'object',
          description: '坐标点',
          required: true,
          details: [
            {
              key: '0',
            },
            {
              key: '1',
            },
          ],
        },
        {
          key: 'layerIds',
          type: 'array',
          description: '图层Id列表',
          required: true,
        },
        {
          key: 'points',
          type: 'array',
          description: '多边形经纬度',
          required: false,
        },
        {
          key: 'setFilterType',
          type: 'integer',
          description: '过滤类型',
          required: false,
          details: null,
        },
        {
          key: 'pageIndex',
          type: 'integer',
          description: '页码, 从1开始',
          required: false,
        },
        {
          key: 'pageSize',
          type: 'integer',
          description: '页容量, [1, 128]',
          required: false,
        },
      ],
    },
    {
      url: '/api/Facilities/{id}/goods',
      tag: 'Facilities',
      subBiz: null,
      methods: 'get',
      summary: '获取设施关联的物资信息(一般为仓库)',
      version: 'v1',
      methodName: 'getGoods',
      parameters: [
        {
          key: 'id',
          type: 'string',
          description: 'id',
          required: true,
          default: null,
        },
        {
          key: 'Keyword',
          type: 'string',
          description: '关键字',
          default: null,
        },
        {
          key: 'page',
          type: 'integer',
          description: '页码, 从1开始',
          default: 1,
        },
        {
          key: 'per_page',
          type: 'integer',
          description: '页容量, [1, 128]',
          default: 100,
        },
      ],
      responses: [
        {
          key: 'totalCount',
          type: 'integer',
          description: '总数',
          required: false,
        },
        {
          key: 'records',
          type: 'array',
          description: '记录',
          required: false,
        },
      ],
      requestBody: null,
    },
    {
      url: '/api/Facilities/{id}',
      tag: 'Facilities',
      subBiz: null,
      methods: 'get',
      summary: '获取详情',
      version: 'v1',
      methodName: 'getFacilitiesById',
      parameters: [
        {
          key: 'id',
          type: 'string',
          description: 'id',
          required: true,
          default: null,
        },
      ],
      responses: [
        {
          key: 'medias',
          type: 'array',
          description: '媒体信息(关联的多媒体信息,如视频、图片等)',
          required: false,
        },
        {
          key: 'goodMainTypes',
          type: 'array',
          description: '物资主类型',
          required: false,
        },
        {
          key: 'resourceId',
          type: 'string',
          description: '资源Id',
          required: false,
        },
        {
          key: 'layerId',
          type: 'string',
          description: '图层Id',
          required: false,
        },
        {
          key: 'layerDetail',
          type: 'object',
          description: '图层实体',
          required: false,
          details: [
            {
              key: '0',
            },
            {
              key: '1',
            },
            {
              key: '2',
            },
            {
              key: '3',
            },
            {
              key: '4',
            },
            {
              key: '5',
            },
            {
              key: '6',
            },
          ],
        },
        {
          key: 'description',
          type: 'string',
          description: '详情',
          required: false,
        },
        {
          key: 'owner',
          type: 'string',
          description: '设施负责人',
          required: false,
        },
        {
          key: 'number',
          type: 'string',
          description: '联系电话',
          required: false,
        },
        {
          key: 'geoFilePath',
          type: 'string',
          description: '重点区域的资源文件路径',
          required: false,
        },
        {
          key: 'address',
          type: 'string',
          description: '设施地址',
          required: false,
        },
        {
          key: 'extension',
          type: 'object',
          description: '扩展项',
          required: false,
        },
        {
          key: 'areaCode',
          type: 'string',
          description: '行政区域代码',
          required: false,
        },
        {
          key: 'platformId',
          type: 'string',
          description: '资源所属平台Id',
          required: false,
        },
        {
          key: 'longitude',
          type: 'number',
          description: '经度',
          required: false,
        },
        {
          key: 'latitude',
          type: 'number',
          description: '纬度',
          required: false,
        },
        {
          key: 'id',
          type: 'string',
          description: 'ID',
          required: false,
        },
        {
          key: 'name',
          type: 'string',
          description: '名称',
          required: false,
        },
      ],
      requestBody: null,
    },
    {
      url: '/api/Facilities/condition_query',
      tag: 'Facilities',
      subBiz: null,
      methods: 'post',
      summary: '多条件查询设施信息',
      version: 'v1',
      methodName: 'getFacilitiesByCondition',
      parameters: null,
      responses: [
        {
          key: 'totalCount',
          type: 'integer',
          description: '总数',
          required: false,
        },
        {
          key: 'records',
          type: 'array',
          description: '记录',
          required: false,
        },
      ],
      requestBody: [
        {
          key: 'keyWord',
          type: 'string',
          description: '关键字',
          required: false,
        },
        {
          key: 'layerIds',
          type: 'array',
          description: '图层Id',
          required: false,
        },
        {
          key: 'layerName',
          type: 'string',
          description: '图层名,可模糊匹配',
          required: false,
        },
        {
          key: 'areaCodes',
          type: 'array',
          description: '行政区域代码',
          required: false,
        },
        {
          key: 'prefixAreaCodes',
          type: 'array',
          description: '行政区域前缀代码',
          required: false,
        },
        {
          key: 'querySubordinateFacility',
          type: 'boolean',
          description: '是否查询下级行政区域设施',
          required: true,
        },
        {
          key: 'pageIndex',
          type: 'integer',
          description: '页码, 从1开始',
          required: false,
        },
        {
          key: 'pageSize',
          type: 'integer',
          description: '页容量, [1, 128]',
          required: false,
        },
      ],
    },
  ],
  resourceBiz: [
    {
      url: '',
      tag: null,
      subBiz: null,
      methods: 'get',
      summary: '通过url获取json数据，不限于/resource/api/',
      version: 'v1',
      methodName: 'getJsonDataByUrl',
      parameters: [
        {
          key: 'url',
          type: 'string',
          description: 'json数据url',
          required: true,
          default: null,
        },
      ],
      responses: null,
      requestBody: null,
    },
    {
      url: '/resource/api/{url}',
      tag: null,
      subBiz: null,
      methods: 'get',
      summary: '获取/resource/api/的json数据',
      version: 'v1',
      methodName: 'getResourceData',
      parameters: [
        {
          key: 'url',
          type: 'string',
          description: '/resource/api/后面的url',
          required: true,
          default: null,
        },
      ],
      responses: null,
      requestBody: null,
    },
    {
      url: '/resource/api/citydata/{url}',
      tag: null,
      subBiz: null,
      methods: 'get',
      summary: '获取/resource/api/citydata/的json数据',
      version: 'v1',
      methodName: 'getCityData',
      parameters: [
        {
          key: 'url',
          type: 'string',
          description: '/resource/api/citydata/后面的url',
          required: true,
          default: null,
        },
      ],
      responses: null,
      requestBody: null,
    },
    {
      url: '/resource/api/commondata/{url}',
      tag: null,
      subBiz: null,
      methods: 'get',
      summary: '获取/resource/api/commondata/的json数据',
      version: 'v1',
      methodName: 'getCommonData',
      parameters: [
        {
          key: 'url',
          type: 'string',
          description: '/resource/api/commondata/后面的url',
          required: true,
          default: null,
        },
      ],
      responses: null,
      requestBody: null,
    },
    {
      url: '/resource/api/projectdata/{url}',
      tag: null,
      subBiz: null,
      methods: 'get',
      summary: '获取/resource/api/projectdata/的json数据',
      version: 'v1',
      methodName: 'getCommonData',
      parameters: [
        {
          key: 'url',
          type: 'string',
          description: '/resource/api/projectdata/后面的url',
          required: true,
          default: null,
        },
      ],
      responses: null,
      requestBody: null,
    },
  ],
};
