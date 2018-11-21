
var carro = {
	color: "Rojo",
	marca: "Ferrari",
	imprimir: function(){
		var salida = this.marca + " - " + this.color;
		return salida;
	}
}

var carro2 = {
	color: "Verde",
	marca: "Jaguar"
}

console.log(carro.imprimir());

var logCarro = function(arg1, arg2){
	console.log("Carro: ", this.imprimir());
	console.log("Argumentos: ", arg1, arg2);
	console.log("========================");
}

var logModeloCarro = logCarro.bind( carro );

logModeloCarro("abc","zyx");
//(objeto que apunte el this, argu...)
logModeloCarro.call( carro, "123", "345");
//(objeto que apunte el this, recibe un argumento pero en un array)
logModeloCarro.apply( carro, ["asd", "qwe"]);

//Funciones prestadas
console.log(carro.imprimir.call( carro2 ));