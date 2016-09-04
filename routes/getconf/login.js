var mysql = require('mysql');
var myconf = require('../conf');

function Login(req,res){
	console.log(req.body);
	var tables = 'users';
	var sql= "select * from ? ";
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