var mysql = require('mysql');
var myconf = require('../conf');
var encode = require('./encode');

function Authen(){
	
}

Authen.prototype.init = function(req,succFn,errorFn){
	this.login(req,succFn,errorFn);
}

Authen.prototype.login = function(req,succFn,errorFn){
	var name = encode(req.cookies.name,true);
	var pass = encode(req.cookies.pass,true);
	var session = req.session;
	this.selectSql(session,name,pass,succFn,errorFn);
}

Authen.prototype.selectSql = function(session,name,pass,succFn,errorFn){
	var This = this;
	var sql = "select * from users where u_mail = ? and u_pw = md5(?)";
	var connection = mysql.createConnection(myconf.mysqlconf);
	connection.connect();
	connection.query(sql,[name,pass],function(err,row){
		if(err){
			throw err;
		}
		if(row.length == 1){
			This.setSession(session,row[0]);
			succFn && succFn();
		} else {
			errorFn && errorFn();
		}
	});
}

Authen.prototype.setSession = function(session,row){
	for(var i in row){
		session[i] = row[i];
	}
}

function authen(req,succFn,errorFn){
	var tion = new Authen();
	tion.init(req,succFn,errorFn);
}

module.exports = authen;
