var mysql = require('mysql');
var myconf = require('../conf');

function Login(req,res){
	console.log(req.body);
	var tables = 1;
	var sql= "select * from users where u_id = ?";
	var connection = mysql.createConnection(myconf.mysqlconf);
	connection.connect();
	connection.query(sql,[tables],function(err,row,fields){
		if(err){
			throw err;
		}
		var data = row;
		console.log(data);
		res.send(data);
	});
}

module.exports = Login;