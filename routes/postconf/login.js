var mysql = require('mysql');
var myconf = require('../conf');

function Login(req,res){

	console.log(req.body);

	var session = req.session;
	var mail = asciiToString(req.body.name,5210);
	var pass = asciiToString(req.body.pass,5220);
	console.log(mail);
	console.log(pass);
	selectSqlFn(mail,pass);

	function selectSqlFn(mail,pass){
		var sql= "select * from users where u_mail = ? and u_pw = md5(?)";
		var connection = mysql.createConnection(myconf.mysqlconf);
		connection.connect();
		connection.query(sql,[mail,pass],function(err,row,fields){

			if(err){
				throw err;
			}
			var data = {};
			console.log(row);
			if(row.length == 1){
				data.code = 1000;
				data.info = "登录成功!";
				asciiToString(session,row[0]);
			} else {
				data.code = 1001;
				data.info = "用户名或密码不正确!"
			}

			res.send(data);

		});
	}

	function asciiToString(str,num){
		var strArr = str.split('|');
		var newstr = '';
		for(var i=0,maxi=strArr.length-2;i<maxi;i++){
			newstr += String.fromCharCode(strArr[i] - num);
		}
		console.log(maxi);
		return newstr;
	}

	function setSession(session,row){
		for(var i in row){
			session[i] = row[i];
		}
	}

}

module.exports = Login;
