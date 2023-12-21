const express = require("express");
const path = require("path");
const { readFileSync } = require("fs-extra")
const childProcess = require('child_process');
const bodyParser = require('body-parser')
const { ignorePaths}  = require("../config.js")
const app = express();

const router = express.Router();

router.use(express.static(path.join(__dirname, "../dist/")));

router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../dist/index.html"));
});
router.get("/admin", (req, res) => {
	res.sendFile(path.join(__dirname, "../dist/admin.html"));
});
app.use(router);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/** 获取新接口 */
app.get('/api/newApi',async (req,res) => {
	// 爬取旧接口
	// await childProcess.execSync('pnpm run buildNew', { cwd: path.join(__dirname, "../"), encoding: 'utf8' });
	// 将../dist/biz.json内容以json格式返回出去
	const data = await readFileSync(path.join(__dirname, "../dist/biz.json"), "utf8");
	res.send({
		status:200,
		msg:'success',
		data: JSON.parse(data)
	})
})

/** 编辑新接口 */
app.post('/api/newApi',(req,res) => {
	
})

/** 将接口添加到忽略 */
app.post('/api/ignore',(req,res) => {
	const { bizName, url } = req.body
	console.log(req);
	// 判断ignorePaths中是否存在bizName，不存在添加，存在则判断url是否存在，不存在则添加,已经存在则忽略
	if(Reflect.has(ignorePaths, bizName)){

	} else {
		
	}
	res.send({
		status: 200,
		msg:'success'
	})
})

/** 生成文档 */
app.post('/api/doc',(req,res) => {

})

/** 获取旧接口 */
app.get('/api/oldApi',(req,res) => {

})




app.listen(3001, () => {
	console.log("server is running on port 3001");
});
