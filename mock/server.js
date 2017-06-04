//koa koa-body koa-router 是用来模拟数据的,接受数据
var app = require('koa')();
var router = require('koa-router')();
//var koaBody = require('koa-body')();

// router.get('',function *(next){
// 	this.body = 'hello koa';
// });

// router.get('./api',function *(next){
// 	this.body = 'test data';
// })

// router.get('./api/1',function *(next){
// 	this.body = 'test data 1';
// })
// router.post('./api/post',koaBody, function *(next){
// 	this.body = JSON.stringify(this.require.body);
// })

// app.use(router.routes())
//    .use(router.allowedMethods());
// // 默认是3000接口，要在config.js里面改
// app.listen(3000);


//首页 --广告
//把数据返回回去
var homeAdData = require('./home/ad.js');
router.get('/api/homead',function *(next){
	this.body = homeAdData;
});


//首页 -- 推线列表
var homeListData = require('./home/list.js');
router.get('/api/homelist/:city/:page',function *(next){
	const params = this.params;
	const paramsCity = params.city;
	const paramsPage = params.page;

	this.body = homeListData;
})

//搜索结果列表
var searchListDate = require('./search/list.js');
router.get('/api/search/:page/:city/:type/:keyword',function *(next){
	const params = this.params;
	const page = params.page;
	const cityName = params.city;
	const type = params.type;
	const keyword = params.keyword;
	console.log('当前页数：' + page)
	console.log('当前城市：' + cityName)
	console.log('当前类别：' + type)
	console.log('关键字：' + keyword)

	this.body = searchListDate;
})

router.get('/api/search/:page/:city/:type',function *(next){
	this.body = searchListDate;
});

//获取商户信息
var detailData = require('./detail/info.js');
router.get('/api/detail/info/:id',function *(next){
	var id = this.params.id ;
	console.log('商户id是' + id);
	this.body = detailData;
})

//获取商户评论
var detailCommentData = require('./detail/comment.js');
router.get('/api/detail/comment/:page/:id', function *(next){
	var params = this.params;
	var page = params.page;
	var id = params.id;
	console.log('id:' +id);
	console.log('page:' +page);
	this.body = detailCommentData;
})


//开启服务
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
