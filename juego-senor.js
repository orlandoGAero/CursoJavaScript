
function Equipo( nombre) {
	this.nombre = nombre;
}

function Personaje( nombre, equipo ){

	this.nombre = nombre;
	this.equipo = equipo;
	this.pv = 100;
	this.sp = 100;

	this.sanar = function( personajeObjetivo) {

		if( this.sp >= 20 ){
			this.sp -= 20; 
			personajeObjetivo.pv += 20;
		} else {
			console.info( `${this.nombre} no tiene SP` );
		}

		this.estado( personajeObjetivo );
	}

	this.golpear = function ( personajeObjetivo ){
		console.warn("obj: " + personajeObjetivo.pv )
		if( personajeObjetivo.pv > 20 ) {
			personajeObjetivo.pv -= 20;
			
		} else {
			personajeObjetivo.pv = 0;
			console.error( `Murio!!! ${personajeObjetivo.nombre}` );
		}

		this.estado( personajeObjetivo );

	}

	this.disparar = function( personajeObjetivo ) {

		if( personajeObjetivo.pv > 30){
			personajeObjetivo.pv -= 30;		
		} else {
			personajeObjetivo.pv = 0;
			console.error(`Murio!!! ${personajeObjetivo.nombre}`);
		}
		this.estado( personajeObjetivo );
	}

	this.estado = function( personajeObjetivo ){
		console.log( this);
		console.log( personajeObjetivo );
	}
}



var teamIronMan =  new Equipo( "teamIroman");
var teamCapitanAmerica =  new Equipo( "teamCapitanAmerica");

var viuda = new Personaje("Viuda Negra", teamIronMan["nombre"]);
var ironMan = new Personaje("Iron Man", this.teamIronMan["nombre"]);
var capitan = new Personaje("Capitan America", this.teamCapitanAmerica["nombre"]);
var bruja = new Personaje("Bruja Escarlata", this.teamCapitanAmerica["nombre"]);

console.log( viuda );
console.log( ironMan );
console.log( capitan );
console.log( bruja );
