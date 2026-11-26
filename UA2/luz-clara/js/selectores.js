// selectores.js - Seis formas de buscar nodos (final de index.html)
//
const cabecera = document.getElementById("cabecera"); //getElementById: Un nod por su id (Sin #). <header id="cabecera">
console.log(`Por id "cabecera": <${cabecera.tagName}>`);

const tarjetas = document.getElementsByClassName("tarjeta"); //getElementsByClassName Todos los que tienen esta clase Un nodo por su clase(Sin.)
console.log(`Por clase "tarjeta": ${tarjetas.length} tarjetas`);

const secciones = document.getElementsByTagName("section"); //getElementsByTagName: todas las etiquetas <section>
console.log(`Por etiqueta <section>: ${secciones.length} secciones`);

const titulo = document.querySelector(".tarjeta-titulo"); //querySelector: El primer nodo que cumple el selector CSS (. con punto)
console.log(`El primer .tarjeta-titulo dice: ${titulo.textContent}`);

const todos = document.querySelectorAll(".tarjeta-titulo"); //querySelectorAll: TODOS los que cumplen
todos.forEach((t) => console.log(`Título de tarjeta: ${t.textContent}`));

const h1 = document.querySelector("#portada h1"); //querySelector("#portada h1"): Selector css compuesto accede al <h1> de #portada
console.log(`El <h1> de la portada dice: ${h1.textContent}`);
