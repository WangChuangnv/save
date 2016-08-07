/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入字符串： ', (word) => {
  	var array=word.split(" ")
	var sub=array[array.length-1]
	console.log(sub.length)

  rl.close();
});
*/

//---------------------------

/*var bb = 1;
function aa(bb) {
    bb = 2;
    console.log(bb);
};
aa(bb);
console.log(bb);*/

//---------------------------

/*var start='$1$3$5$7';
var temp=start.split("$");
var now=new Array();
for(var i=0;i<temp.length-1;i++){

 now[i]=parseInt(temp[i+1])+i+1;
}
now.push("")
console.log(now.join("_"))*/

//----------------------------
/*var n=1+"1"-1;
console.log(n);//10*/

//----------------------------
/*var arr=[1,2,3,4,5];
var l =arr.length
for(var i=1;i<l;i++){
	arr.push(arr[l-i-1])
}
console.log(arr)*/


/*var a= [1,4,7,2,15,3];
console.log(a.sort(function(a,b){
	 if(a>b){
	 	return 1;
	 }else{
	 	return -1;
	 }
}));*/


//----------------this
/*color='red';
var o={color:'blue'};
function sayColor(){
	console.log(this.color);
}

o.sayColor=sayColor;
o.sayColor();*/

var obj = {a : 1}; 
(function (obj) {  obj = {a : 2};
console.log(obj) //2  局部对象指向一个新对象
})(obj);
console.log(obj)//1