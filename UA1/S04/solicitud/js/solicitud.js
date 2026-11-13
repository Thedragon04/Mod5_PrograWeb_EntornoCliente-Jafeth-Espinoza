//solicitud.js - Pedir datos con prompt
const nombre = prompt("¿Cual es su nombre?"); // devolver texto
const fotos = prompt("¿Cuantas fotos impresas?"); // devolver texto
console.log("Hola, " + nombre + "."); //utilizamos + une cadenas
(console, log("Fotos + 1:", fotos + 1)); //une pero no suma
console.log("Fotos + 1:", Number(fotos) + 1); //number: suma
console.log("¿Pidio fotos?", Number(fotos) > 0); //comparar
