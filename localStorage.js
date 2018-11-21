// guardarLocalStorage();
get_localStorage();

function get_localStorage() {

    if (localStorage.getItem('nombre')) {

        let nombre = localStorage.getItem('nombre');
        console.log('Nombre :', nombre);

    } else {
        console.log("No existe nombre en el Local Storage");

    }
    
    if (localStorage.getItem('persona')) {

        let persona1 = localStorage.getItem('persona');
        let persona = JSON.parse(localStorage.getItem('persona'));
        console.log(persona1);
        console.log(persona);
        console.log(persona.nombre);
    } else {
        console.log("No existe persona en el Local Storage");
    }
}

function guardarLocalStorage() {

    let persona = {
        nombre: "Steve",
        edad: 38,
        correo: "email@email.com",
        coords: {
            lat: 100,
            lng: -193
        }
    }

    let nom = "Jesus";

    localStorage.setItem('nombre', nom);
    localStorage.setItem('persona', JSON.stringify(persona));
}