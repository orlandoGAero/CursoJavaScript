
var a = new String("Orlando Ronaldo Ronaldinho Gonzalez Reyes");

console.log(a);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i = a.indexOf("Reyes");

console.log("La letra esta: ", i ); 

var i = a.lastIndexOf("o");
console.log("La letra esta: ", i ); 

var nombre = a.substr(0,a.indexOf(" "));
console.log(nombre);

var split = a.split(" ");
console.log(split);
console.log(split.length);

///

document.write( a.fontsize(23));