function Super(){
	this.superValue=true;
}
Super.prototype.getSuper=function(){
	return this.superValue;
};

function Sub(){
	this.subValue=false;
}
Sub.prototype=new Super();
// Sub.prototype=Super.prototype; 如此的话 没有通过new将构造器里的属性赋值instance.getSuper返回undefined g

Sub.prototype.getSub=function(){
	return this.subValue;
};

var instance = new Sub();
console.log(instance.getSuper());
console.log(instance.getSub());






