var mysql = require('mysql');
var myconf = require('../conf');
var encode = require('./encode');

function Authen(){
	
}

Authen.prototype.init = function(req){
	this.login(req);
}

Authen.prototype.login = function(req){
	var name = encode(req.cookies.name,true);
	var pass = encode(req.cookies.pass,true);
	var session = req.session;
	this.selectSql(session,name,pass);
}

Authen.prototype.selectSql = function(session,name,pass){
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
		}
	});
}

Authen.prototype.setSession = function(session,row){
	for(var i in row){
		session[i] = row[i];
	}
}

function authen(req){
	var tion = new Authen();
	tion.init(req);
}

module.exports = authen;
