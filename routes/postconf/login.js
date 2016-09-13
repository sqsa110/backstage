var mysql = require('mysql');
var myconf = require('../conf');
var encode = require('../lib/encode');
var loginsql = require('../lib/loginsql');
var asciiToString = require('../lib/asciiToString');

function Login(req,res){

	console.log(req.body);
	var session = req.session;
	var mail = asciiToString(req.body.name,5210);
	var pass = asciiToString(req.body.pass,5220);
	var data = {};
	selectSqlFn(mail,pass,function(){
		data.code = 1000;
		data.info = "登录成功!";
		res.cookie('name',encode(mail));
		res.cookie('pass',encode(pass));
		res.send(data);
	},function(){
		data.code = 1001;
		data.info = "用户名或密码不正确!"
		res.send(data);
	});

}

module.exports = Login;
