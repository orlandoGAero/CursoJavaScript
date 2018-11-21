// function evento(arg){
// 	console.log("Me dipare");
// 	console.log(arg.x, arg.y);
// }

// var objeto = document.getElementById("objDemo");

// console.log(objeto);

// objeto.addEventListener("click",evento);

// document.onmousedown = function(arg){
	
// 	if(arg.button === 2){

// 		alert("click bloqueado");
// 	}

// 	console.log("CLick permitido");

// }

// document.onmouseup = function(){

// 	var texto = window.getSelection().toString();
// 	console.log(texto);
// }

// function validar(){

// 	var nombre = document.getElementById("txtNombre").value;
// 	var apellido = document.getElementById("txtApellido").value;

// 	if (nombre.length < 1) {
// 		return false;
// 	}

// 	if(apellido.length < 1){
// 		return false;
// 	}

// 	return true;
// }

// function getParamURL(name) {
//   return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
// }

// console.log( window.location.search);
// console.log( window.location.search.split("&"));

// console.log( getParamURL("txtNombre"));

