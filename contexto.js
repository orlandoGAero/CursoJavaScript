
function crearFunciones(){

	var arr = [];

	for(var numero = 1; numero <= 5; numero++){

		arr.push( 

			function(num){
				
				return function(){
					console.log(num);
				}

			}(numero)

		)
	}


	return arr;
}

var funciones = crearFunciones();


for(var i = 0; i < funciones.length; i++){

	funciones[i]();
}


