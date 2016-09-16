var express = require('express');
var router = express.Router();
var logger = require('../public/bin/log').logger('index');
var getConf = require('./getconf');
var postConf = require('./postconf'); 
var loginValidation = require('./lib/loginValidation');

/* GET home page. */
router.get('/', function(req, res, next) {

	console.log(req.cookies);
	var loginning = loginValidation(req,function(){
		console.log('已经登录');
		loginCallBack();
	},function(){
		console.log('未登录');
		loginCallBack();
	});

	function loginCallBack(){
		res.render('index', { title: 'Express' });
		logger.info("lll");
	}
	
//	next();
});

router.get('/session',function(req,res){
	var session = req.session;
	session.count = session.count || 0;
	var n = session.count++;
	res.send(session.id + ',n:' +n);
	req.session.save();
});

router.get('/backstaged', function(req, res, next) {
	res.render('backstaged/index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	var session = req.session;
	if(session.signning){
		session.signning = true;
		session.uId = session.uId;
		session.uMail = session.uMail;
	}
	console.log(session);
	res.send({'aaa':'bbb'});
//	res.render('index', { title: 'Express' });
	logger.info("lll");
});


router.post('/api/comments',function(req,res){
	var data = [
	    {author: "Pete Hunt", text: "This is one comment"},
	    {author: "Jordan Walke", text: "This is *another* comment"}
	];

	res.send(data);
});

/* POST */
router.post('/datas',function(req,res){
	console.log(req.body);
	var datas = [
	{"author": "Pete Hunt", text: "This is one comment"},
	{"author": "Jordan Walke", text: "This is *another* comment"}
	];
	res.send(datas);
});

router.post('/data',function(req,res){

	res.send('data');
});

//get
for(var i=0,imax=getConf.length;i<imax;i++){
	
	router.get('/'+getConf[i],require('./getconf/'+getConf[i]));
}

//post
for(var i=0,imax=postConf.length;i<imax;i++){
	router.post('/'+postConf[i],require('./postconf/'+postConf[i]));
}

module.exports = router;
