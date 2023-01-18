const correo = document.getElementById('correo');
const nombre = document.getElementById('nombre');
const foto = document.getElementById('foto');
const telefono = document.getElementById('telefono');

let paginaActual = 1;

const generarUsuario = async () => {
    const url = `https://randomuser.me/api/?page=${paginaActual}&results=10&seed=abc`;

    const response = await fetch(url)
    const { results } = await response.json()
    const datos = results[0];

    document.getElementById('foto').src = datos.picture.medium
    document.getElementById('nombre').innerHTML = datos.name.title + " " + datos.name.first + " " + datos.name.last
    document.getElementById('telefono').innerHTML = datos.phone
    document.getElementById('correo').innerHTML = datos.email
}
document.addEventListener('DOMContentLoaded', generarUsuario);

//Funcionalidad de botones
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