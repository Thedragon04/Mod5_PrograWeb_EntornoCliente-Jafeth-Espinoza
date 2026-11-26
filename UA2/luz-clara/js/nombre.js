// nombre.js - Controles con el mismo name (final de contacto.html)

const lugares = document.getElementsByName("lugar"); //getElementsByName Trae los botones de opcion con name="Lugar"
console.log(`Opciones de "lugar": ${lugares.length}`);
lugares.forEach((r) => console.log(`value de una opción: ${r.value}`)); //value: es lo que el formulario envia por cada opcion

const etiquetas = document.querySelectorAll(".opcion-etiqueta"); //Muestra el tecto que contiene esta clase de CSS
console.log(`Texto de la 1.ª opción: ${etiquetas[0].textContent}`);
