function Equipo( nombre ){
	this.nombre = nombre;

	return this.nombre;
}

function Partido(equipo1, equipo2){

	this.equipo1 = equipo1;
	this.equipo2 = equipo2;
	this.golE1 = 0;
	this.golE2 = 0;

	this.obtenerPartido = function (){
		return `Partido: ${equipo1.nombre} vs ${equipo2.nombre}`;
	}

	this.anotar = function(equipo){
		console.log(equipo.nombre);
		if(this.golE1 >= 0 && equipo.nombre === equipo1){
			console.log(" GOL!!! de " + equipo.nombre);
			gol = this.golE1 += 1;
			return gol && this.obtenerMarcador();
		}

		if(this.golE2 >= 0 && equipo.nombre === equipo2){
			console.log(" GOL!!! de " + equipo.nombre);
			gol = this.golE2 += 1;
			return gol && this.obtenerMarcador();
		}		
	}

	this.obtenerMarcador = function (){
		equipo1 = this.equipo1.nombre;
		equipo2 = this.equipo2.nombre;

		
		console.log( this);	
		return `Marcador: ${equipo1} ${this.golE1} - ${this.golE2} ${equipo2}`;
	}
}

var toluca = new Equipo("Toluca Fc");
var azul = new Equipo("Cruz Azul Fc");

//console.log( new Partido( toluca, azul ))
var partido1 = new Partido( toluca, azul );

console.log(partido1.obtenerPartido());
console.log(partido1.obtenerMarcador());

