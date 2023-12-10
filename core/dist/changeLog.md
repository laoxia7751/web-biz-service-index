
## 新增方法集合

### mmtBiz
'post&/api/MultimediaTransfers/search':'searchMultimediaTransfers',

### aggsBiz
'get&/api/MultimediaTransfers/{id}':'getMultimediaTransferDetails',
'post&/api/MultimediaTransfers':'searchMultimediaTransfers',


## 改动记录
### mmtBiz
|methodsName|url|methodType|describe|version|
|--|--|--|--|--|
|`searchMultimediaTransfers`|`/api/MultimediaTransfers/search`|post|查询拍传|v1|

### aggsBiz
|methodsName|url|methodType|describe|version|
|--|--|--|--|--|
|`getMultimediaTransferDetails`|`/api/MultimediaTransfers/{id}`|get|查询拍传详情|v1|
|`searchMultimediaTransfers`|`/api/MultimediaTransfers`|post|查询拍传|v1|
