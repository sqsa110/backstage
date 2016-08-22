var mysql = require('mysql');
var myconf = require('../conf');
function Aaa (req,res){
	var connection = mysql.createConnection(myconf.mysqlconf);
	connection.connect();
	connection.query('select * from django_admin_log',function(err,row,fields){
		if(err){
			throw err;
		}
		var data = row;
		console.log(data)
		res.send(data);
	});
	connection.end();
}

module.exports = Aaa;