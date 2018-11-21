

// setTimeout(function(){
// 	console.log("paso un segundo");
// }, 1000);

// var segundo = 0;

// var intervalo = setInterval(function(){
	
// 	segundo++;
// 	console.log("seg: ", segundo);
// 	if(segundo === 5){
// 		clearInterval( intervalo);
// 	}
// }, 1000);

var orl = {
	nombre: "Orlando",
	edad: 25,
	imprimir: function(){

		// var self = this;

		// setTimeout(function(){
		// 	console.log(this);
		// 	console.log(this.nombre, this.edad);
		// }, 1000);

		setTimeout(()=> {
			console.log(this);
			console.log(this.nombre, this.edad);
		}, 1000)
	}
}

orl.imprimir();

