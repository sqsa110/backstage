var mysql = require('mysql');
var myconf = require('../conf');

function Login(req,res){
	console.log(req.body);
	var mailArr = req.body.name.split('|');
	var passArr = req.body.pass.split('|');
	var mail = '';
	var pass = '';
	for(var i=0,maxi=mailArr.length;i<maxi;i++){
		mail += String.fromCharCode(mailArr[i] - 5210);
		console.log(mail);
	}
	for(var i=0,maxi=passArr.length;i<maxi;i++){
		pass += String.fromCharCode(passArr[i] - 5220);
		console.log(pass);
	}
	console.log(mail.length);
	console.log(pass.length);

	var sql= "select u_mail,u_pw from users where u_mail = ? and u_pw = md5(?)";
	var connection = mysql.createConnection(myconf.mysqlconf);
	connection.connect();
	connection.query(sql,[mail,pass],function(err,row,fields){
		if(err){
			throw err;
		}
		var data = row;
		console.log(data);
		res.send(data);
	});
}

module.exports = Login;
