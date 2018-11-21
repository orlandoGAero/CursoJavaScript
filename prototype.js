
function Persona(){
	this.nombre = "Orlando";
	this.apellido = "Reyes";
	this.edad = 24;

}

Persona.prototype.imprimirInfo = function(){
	console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")"); 
}

var orl = new Persona();

Number.prototype.esPositivo = function() {

	if(this >= 0){
		return true;
	} else {
		return false;
	}
}