var http=require('http')
var fs=require('fs')

http
	.createServer(function(req,res){
		/*fs.readFile('z.jpg',function(err,data){
			if(err){
				res.end('file not exist!')
			}
			else{
				console.log('start')
				res.writeHeader(200,{'Context-Type':'text/html'})
				res.end(data)
			}
		})*/
		fs.createReadStream('z.jpg').pipe(res) /*管道*/
	})
	.listen(8090)