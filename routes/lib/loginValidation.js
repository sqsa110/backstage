var authen = require('./authen');

function loginValidation(req,succFn,errorFn){
	var session = req.session;
	if(session && session.signning){
		session.signning = true;
		session.uId = session.uId;
		session.uMail = session.uMail;
		console.log('1 + 1');
		succFn && succFn();
	} else if(req.cookies && req.cookies.name && req.cookies.pass){
		authen(req,function(){
			succFn && succFn();
		},function(){
			errorFn && errorFn();
		});
		console.log('1 + 2');
	} else {
		errorFn && errorFn();
		console.log('1 + 3');
	}
}

module.exports = loginValidation;
