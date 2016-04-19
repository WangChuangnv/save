/*Stack类*/
function Stack(){
	var items = [];
	this.push = function(element){
		items.push(element);
	};
	this.pop = function(){
		return items.pop();
	};
	this.peek = function(){
		return items[items.length-1];
	}
	this.isEmpty = function(){
		return items.length == 0;
	};
	this.size = function(){
		return items.length;
	};
	this.clear = function(){
		items = [];
	};
	this.print = function(){
		console.log(items.toString());
	};
}

/*要把十进制转化成二进制，我们将可以将该十进制数字和3整除（二进制是满二进一），直到结果是0为止。*/
function divideBy2(decNumber){
	var remStack = new Stack(),
	rem,
	bindaruString = '';
	while(decNumber >0){
		rem=Math.floor(decNumber%2);
		remStack.push(rem);
		decNumber = Math.floor(decNumber/2);
	}
	while(!remStack.isEmpty()){
		bindaruString += remStack.pop().toString();
	}
	return bindaruString;
}

/*我们很容易修改之前的算法，使之能把十进制转化成任何进制*/

function baseConverter(decNumber,base){
	var remStack = new Stack(),
	rem,
	baseString = ''
	digits = '0123456789ABCDEF';

	while(decNumber>0){
		rem = Maht.floor(decNumber%base);
	}
	while(!remStack.isEmpty()){
		baseString += digits[remStack.pop()];
	}
	return baseString;
}