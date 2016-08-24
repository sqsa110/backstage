var express = require('express');
var router = express.Router();
var logger = require('../public/bin/log').logger('index');
var getConf = require('./getconf');
var postConf = require('./postconf');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	res.render('index', { title: 'Express' });
	logger.info("lll");
});


router.get('/backstaged', function(req, res, next) {
	res.render('backstage/index', { title: 'Express' });
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
