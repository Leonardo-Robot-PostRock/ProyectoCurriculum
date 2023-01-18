/* Información inicial de CV */

const correo = document.getElementById('correo');
const nombre = document.getElementById('nombre');
const foto = document.getElementById('foto');
const telefono = document.getElementById('telefono');

let paginaActual = 1;

/** Petición a la API */

const generarUsuario = async () => {
    const url = `https://randomuser.me/api/?page=${paginaActual}&results=10&seed=abc`;

    const response = await fetch(url)
    const { results } = await response.json()
    const datos = results[0];

    console.log(datos);
    document.getElementById('foto').src = datos.picture.large;
    document.getElementById('nombre').innerHTML = datos.name.title + " " + datos.name.first + " " + datos.name.last;
    document.getElementById('telefono').innerHTML = datos.phone;
    document.getElementById('correo').innerHTML = datos.email;
    document.getElementById('age').innerHTML = datos.dob.age;
    document.getElementById('location-city').innerHTML = datos.location.city;
    document.getElementById('location-country').innerHTML = datos.location.country;
    document.getElementById('location-state').innerHTML = datos.location.state;
    document.getElementById('location-postcode').innerHTML = datos.location.postcode;
    document.getElementById('location-street-name').innerHTML = datos.location.street.name;
    document.getElementById('location-street-number').innerHTML = datos.location.street.number;
}

/* Dibujar en el dom */
document.addEventListener('DOMContentLoaded', generarUsuario());

/* Desplegar más información */

const botonDesplegar = document.getElementById('botonDesplegar');
const contenidoDesplegable = document.getElementById('contenidoDesplegable');

botonDesplegar.addEventListener('click', () => {
    if (contenidoDesplegable.style.display === 'none') {
        contenidoDesplegable.style.display = 'block';
        botonDesplegar.textContent = 'Ocultar información'
    } else {
        contenidoDesplegable.style.display = 'none';
        botonDesplegar.textContent = '...'
    }
})

/* Funcionalidad de botones */

document.getElementById('boton-siguiente').addEventListener('click', () => {
    paginaActual += 1;

    generarUsuario();
});
document.getElementById('boton-anterior').addEventListener('click', () => {
    if (paginaActual > 1) {
        paginaActual -= 1;
    }
    generarUsuario();
});

