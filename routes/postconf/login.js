var mysql = require('mysql');
var bodyParser = require('body-parser');
var myconf = require('../conf');

function Login(req,res){
	console.log(req.body);
	var sql= "select * from users";
	var connection = mysql.createConnection(myconf.mysqlconf);
	connection.connect();
	connection.query(sql,function(err,row,fields){
		if(err){
			throw err;
		}
		var data = row;
		console.log(data);
		res.send(data);
	});
}

module.exports = Login;