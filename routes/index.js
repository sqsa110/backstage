var express = require('express');
var router = express.Router();
var logger = require('../public/bin/log').logger('index');
var getConf = require('./getconf');
var postConf = require('./postconf'); 
var authen = require('./lib/authen');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.cookies);
	console.log(req.signedCookies);
	
	var session = req.session;
	if(session && session.signning){

		session.signning = true;
		session.uId = session.uId;
		session.uMail = session.uMail;
		console.log('1 + 1');

	} else if(req.cookies && req.cookies.name && req.cookies.pass){
		console.log(authen);
		authen(req);
		console.log('1 + 2');
	} else {
		console.log('1 + 3');
	}
//	console.log(session);
	res.render('index', { title: 'Express' });
	logger.info("lll");
//	next();
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
