function extend(target,options){
	for(name in options){
		target[name] = options[name];
	}
	return target;
}


module.exports = extend;
