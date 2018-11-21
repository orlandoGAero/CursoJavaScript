
var nota = 50;

if( nota >= 90){
	console.log("Nota: A");
} else if(nota >= 80){
	console.log("Nota: B");
} else if(nota >= 70){
	console.log("Nota: C");
} else if(nota >= 60){
	console.log("Nota: D");
} else{

	if( nota > 50){
		console.log("Nota: +F");
	} else{
		console.log("Nota: -F");
	}
	console.log("Algo mas");
}

console.log("Termino el código");

var a = 60;
var b= 20;

var c = ( a > b )? function(){
	console.log("A es mayor que B");
	return a;
}() : function(){
	console.log("B es mayor que A");
	return b;
}();

console.log(c);

var d = 10;
var e = undefined;

var c = d || e;

console.log(c);

function getNombre(nombre){
	var nomb = nombre || "<sin nombre>" || undefined;

	console.log(nomb);
}

getNombre();

