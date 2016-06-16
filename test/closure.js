function Person(name){
	this.getName=function(){
		return name;
	};
	this.setName=function(value){
		name=value
	};
}

var person =  Person("lala");
console.log(person.getName());