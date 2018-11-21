
var autos = {
	marca: "Chevrolet",
	precio: 60000,
	modelo: "Camaro",
	color: "Rojo",
	imprimir: function(){
		return this.marca;
	}
}

console.log("Objeto literal: ", autos);

//convertir a JSON
// JSON.stringify()
var toJson = JSON.stringify( autos );
console.log(toJson);
//convertir a Objeto
// JSON.parse();
var desdeJson = JSON.parse( toJson );
console.log( desdeJson );
console.log( desdeJson.marca );
console.log( desdeJson.modelo );