
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
