### 原理：

- 遍历所有swagger的json文件，生成一个新的对象，以模块名称为键名，{ api，biz, params } 为键值，再写一个node脚本读取对象生成md或html
- 写一个html模板，添加交互，支持忽略/设置方法名称/copy模板代码/生成md表格

**进度**

- [x] schemaData处理生成json对象
- [x] 函数json生成
- [x] api模块模板生成
- [x] biz模块模板生成
- [x] plugins模板生成
- [x] html展示模板生成
- [x] 展示模板工具方法开发
- [ ] 文档编写

#### 1. schemaData格式化

1. 遍历schemas，键名为schema name，然后判断键值的type,如果是object，那么取type/properties/description/required字段（基本上都是object，还有一些元组），如果是其他类型，取其他所有属性；
2. 取到字段后，判断required是否是数组类型，是的话，记录下来，然后遍历properties属性，如果属性的key在required数组中的话，给这个属性添加一个required为true,需要从properties取的属性有type/description，其中description需要走正则去除特殊符号；

生成数据格式

```js
const schemaData = {
  ClientOut: {
    type: 'object',
    description: '指定用户有权访问的应用实体',
    properties: [
      {
        key: 'id',
        type: "string",
        description: "应用Id",
        required: true
      }
    ]
  },
  DataType: {
    enum: [0,1,2,3,4],
    type: "integer",
    format: "int32",
    description: ''
  }
}

```

#### 2. 请求体格式化

1. 判断请求方法类型，如果是get或delete请求，获取`parameters`对象数组即可，如果是post或put请求，获取`parameters`+`requestBody`;
2. `parameters`遍历，取`name`/`description`/`required`字段，如果`description`为空，直接用name作为`description`内容；
3. `requestBody`中取`description.content['application/json'].schema.$ref`字段,获取`schema`名称，在schemaData中匹配拿到对应参数集合；
<!-- 4. 将`parameters`和`requestBody`进行合并成1个对象 -->
  
生成数据格式

```
[
  {
    key: 'id',
    type: "string",
    description: "应用Id",
    required: true,
    default: 200,(默认参数)
  }
]
```

#### 3. 函数集合json生成

