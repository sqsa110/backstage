function asciiToString(str,num){
	var strArr = str.split('|');
	var newstr = '';
	for(var i=0,maxi=strArr.length-1;i<maxi;i++){
		newstr += String.fromCharCode(strArr[i] - num);
	}
	return newstr;
}

module.exports = asciiToString;