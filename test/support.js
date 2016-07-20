/*检测一个元素的属性*/
var root=document.documentElement;
if('textShaow' in root.style){
	root.classList.add('textshadow');
}
else{
	root.classList.add('no-textshadow');
}

/*如果我们需要检测多个属性，也可以很容易地把上述代码改造成一个函数：*/
function testProperty(property){
	var root = document.documentElement;
	if(property in root.style){
		root.classlist.add(property.toLowerCase());
		return true;
	}
	root.claddlist.add('no-'property.toLowerCase());
	return false;
}

/*如果我们想要检测某个具体的属性值是否支持，那就需要把他赋给对应的属性，
然后再检查浏览器是不是还保存着这个值。很显然，这个过程会改变元素的样式，因此我们需要一个隐藏元素：*/
var dummy = document.createElement('p');
dummy.style,backgroundImage = 'linear-gradient(red,tan)';
if(dummy.style.backgroundImage){
	root.classList.add('lineargradients');
}else{
	root.classList.add('no-lineargradients');
}

/*
这段代码同样也可以被很容易地改造成一个函数：*/
function testValue(id,value,property){
	var dummy = document.createElement('p');
	dummy.style[property]=value;
	if(dummy.style[property]){
		root.classList.add(id);
		return true;
	}
	root.classList.add('no-'+id);
	return false;
}