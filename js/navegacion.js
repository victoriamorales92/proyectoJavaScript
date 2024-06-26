// Declaración de variables
const cuerpo = document.body;
const cabecera = document.getElementById('header');
const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ["Inicio", "Planes", "Consultas"];
const liImagen = document.createElement('li');
const img = document.createElement('img');
const ORIGEN = document.createElement('a');
const footer = document.getElementsByTagName('footer');
const parrafoFooter = document.createElement('p');
const TIME = new Date().getFullYear(); // 2024


cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

ORIGEN.href = '/';
ORIGEN.appendChild(img);
img.src = img.src = 'assets/logo.png';
img.alt = 'RiseCapital';

liImagen.appendChild(ORIGEN);
ul.appendChild(liImagen);



for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`
    ul.appendChild(li);
}
cabecera.style.backgroundColor = '#15644C';
// Agregar sombra a la barra de navegación
navegacion.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = 'RiseCapital - ' + TIME + ' | San Juan-Argentina';

