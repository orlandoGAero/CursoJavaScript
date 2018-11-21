
//EXpresiones regulares
//var reg1 = RegExp("a");
//var reg2 = /a/;
// i = insensible
// g = todas apariciones
// m = multilinea

texto = "EL Resultado de la suma es: 60 + 45 = 105";

//var arr = texto.match( /^H/ );
//var arr = texto.match( /[a-zA-Z]/ );
var arr = texto.match( /\d{1,}|resultado/ig );

console.log( texto );
console.log(arr);

