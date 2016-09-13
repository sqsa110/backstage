function loginSqlFn(mail,pass,succFn,errFn){
	var sql= "select * from users where u_mail = ? and u_pw = md5(?)";
	var connection = mysql.createConnection(myconf.mysqlconf);
	connection.connect();
	connection.query(sql,[mail,pass],function(err,row,fields){
		if(err){
			throw err;
		}
		if(row.length == 1){
			setSession(session,row[0]);
			succFn && succFn();
		} else {
			errFn && errFn();
		}
	});
}

function setSession(session,row){
	for(var i in row){
		session[i] = row[i];
	}
}

module.exports = loginSqlFn;
