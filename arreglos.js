
var arr = [5,4,3,2,1];

console.log(arr);
console.log(arr[0], arr[4], arr[5]);

arr.reverse();

console.log(arr);

arr = arr.map( function(elem){
	elem *= elem;
	return elem;
});

console.log(arr);

arr = arr.map( Math.sqrt );
console.log(arr);

arr = arr.join("|");
console.log(arr);

arr = arr.split("|");
console.log(arr);

arr.push("6","7","8","9");
console.log(arr);

arr.unshift("0");
console.log(arr);

arr.shift();
console.log(arr)

console.log( arr.toString() );

var elimine = arr.pop();
console.log(arr, elimine);

arr.splice(1, 0, "10", "20", "30", "40");
console.log(arr);

arr = arr.slice(0,5);
console.log(arr);

arr = arr.length;
console.log(arr);

//segunda parte

var arr = [

	true,
	{
		nombre: "Orlando",
		apellido: "Reyes"
	},
	function () {
		console.log("vivo en un arreglo");
	},[
		"Flash",
		"Arrow",
		"Supergirl",
		[
			"Iron Man",
			"Capitan America",
			"Spiderman",
			function(){
				console.log(this);
			}
		]
	],
	function( persona ){
		console.log( persona.nombre + " " + persona.apellido);
	}


];

console.log( arr );
console.log( arr[1].nombre + " " + arr[1].apellido);
arr[2]();
arr[4](arr[1]);
console.log(arr[3][3]);
console.log(arr[3][3][2]);

var arreglo2 = arr[3][3];
arreglo2[1] = "Agent Carter";
console.log(arreglo2);
console.log( arr );
arreglo2[3]();

arreglo3 = arr[3][0][0];
arreglo3 = "f";
console.log(arr[3][0]);
console.log( arr );
