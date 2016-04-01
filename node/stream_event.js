var fs = require('fs')
var readStream = fs.createReadStream('events.js')
var n=0
readStream
.on('data',function(chunk){
	n++
	console.log('data emits')
	console.log(Buffer.isBuffer(chunk))
	/*console.log(chunk.toString('utf8'))*/
	readStream.pause()
	console.log('data pause')
	setTimeout(function(){
		console.log('data pause end')
		readStream.resume()//重新启动
	},3000)
})
.on('readable',function(){
	console.log('data readable')
})
.on('end',function(){
	console.log('data end')
	console.log(n)
})
.on('close',function(){
	console.log('data close')
})
.on('error',function(){
	console.log('data read error'+e)
})

