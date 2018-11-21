
/*var inicio = new Date();

for (var i = 0; i < 1500; i++) {
	console.log("algo....");
}
var fin = new Date();

var duracion = fin.getTime() - inicio.getTime();
console.log(duracion, "milisegundos");*/

var fecha = new Date();


Date.prototype.sumarDias = function( dias ){
	this.setDate( this.getDate() + dias);
	return this;
}

Date.prototype.sumarAnios =  function( anios ){
	this.setFullYear( this.getFullYear() + anios);
	return this;
}
console.log(fecha);
console.log(fecha.sumarDias(7));
console.log(fecha.sumarAnios(2000));