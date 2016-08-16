var log4js = require("log4js");
log4js.configure({
	appenders : [
		{ type:'console'},
		{
			type : 'file',
			filename : 'logs/access.log',
			pattern : "-yyyy-MM-dd",
			maxLogSize : 1000000,
			backups : 4,
			alwaysIncludePattern : true,
			category : 'normal'
		}
	],
	replaceConsole : true
});

exports.logger=function(name){
	var logger = log4js.getLogger(name);
	logger.setLevel('INFO');
	return logger;
}