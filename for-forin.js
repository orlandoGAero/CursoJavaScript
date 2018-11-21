var Persona = function(){
	this.nombre = "Orlando",
	this.apellido = "Reyes",
	this.edad = 25
}

var orl = new Persona();

Persona.prototype.direccion = "Lerma";

for(prop in orl){

	if (!orl.hasOwnProperty( prop ))
		continue;
	console.log(prop, ": ", orl[prop]);
}

console.log("===================");

var arrNum = [1,2,3,true,5,6,"orla",8,9,10];
for (num in arrNum){
	console.log(num);
}

arrNum.forEach(function(val){
	console.log(val);
})