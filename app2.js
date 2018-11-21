var nombre = "Irv";

var persona = {

	nombre: "Orlando",
	apellido: "Reyes",
	imprimirNombre: function() {
		return `${this.nombre} ${this.apellido}` ;
	},
	direccion: {
		pais: "Mexico",

		obtenerPais: function() {

			var self = this;
			var nuevaDireccion = function() {
				console.log( self );
				console.log( `el pais es: ${self.pais} y vive: ${persona.imprimirNombre()}` );
			}

			nuevaDireccion();

		}		
	},
	profesion: {
		nombre: "Programador",
		obtenerProfesion: function() {
			console.log( this.nombre );
		}
	} 
}


persona.imprimirNombre();

persona.direccion.obtenerPais();

persona.profesion.obtenerProfesion();


