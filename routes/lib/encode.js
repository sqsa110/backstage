var extend = require('./entend');
function StrEncode(conf){

  //初始化配置项
  
  conf = extend({
    num : [0,9],          //定义数字随机范围[0-9]
    capital : [97,122],   //定义小写字母ascii随机范围[a-z]
    lowercase : [65,90],  //定义大写字母ascii随机范围[A-Z]
    custom : [0,0],       //自定义ascii码随机范围
    encode:[3,3],         //插入随机码位置
    key : 75,             //验证key
    multiplication : 3    //验证码
  },conf);

  this.randomArr = [];
  for(var i in conf){
    this[i] = conf[i];
  }
  this.randomArrFn();

}

//入口方法
StrEncode.prototype.init = function(str,off){
  if(off){
    return this.decodeFn(str);
  } else {
    return this.encodeFn(str);
  }
}

//加密符号生成
StrEncode.prototype.randomArrFn = function(){
  for(var i=this.num[0];i<=this.num[1];i++){
    this.randomArr.push(i);
  }
  for(var i=this.capital[0];i<=this.capital[1];i++){
    this.randomArr.push(i);
  }
  for(var i=this.lowercase[0];i<=this.lowercase[1];i++){
    this.randomArr.push(i);
  }
  for(var i=this.custom[0];i<=this.custom[1];i++){
    this.randomArr.push(i);
  }
  return this;
}

//生成随机数
StrEncode.prototype.randomFn = function(){
  var randomNum = Math.floor(Math.random() * this.randomArr.length);
  return randomNum;      
}

//加密函数
StrEncode.prototype.encodeFn = function(str){
  var newStr = '';
  str = str.toString();
  for(var i=0,maxi=str.length;i<maxi;i++){
    if(i == this.encode[0] || i == maxi - this.encode[1]){
      for(var j=0;j<3;j++){
        newStr +=  this.randomArr[this.randomFn()] + '|';
      }
    }
    newStr += str.charCodeAt(i) * this.multiplication + this.key + '|';
  }
  return newStr;
}

//解密函数
StrEncode.prototype.decodeFn = function(str){
  var newStr = '';
  var arr = str.split('|');
  for(var i=0,maxi=arr.length - 1;i<maxi;i++){
    if(i == this.encode[0] || i == maxi - this.encode[1] - 3){
      i += 3
    }
    newStr += String.fromCharCode((arr[i] - this.key) / this.multiplication);
  }
  return newStr;
}


function strEncode(str,sec,three){

  //初始化配置文件
  var off = false;
  var conf =  {}
  if(Object.prototype.toString.call(sec) == '[object Object]'){
    conf = sec;
  } else if(sec == true || three == true){
    off = true;
  }

  //执行
  var strEncode = new StrEncode(conf);
  return strEncode.init(str,off);
}

module.exports = strEncode;
