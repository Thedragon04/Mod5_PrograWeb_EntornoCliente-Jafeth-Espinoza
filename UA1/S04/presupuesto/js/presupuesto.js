const nombre = prompt("Ponga su nombre aqui");
const personas = prompt("¿Cuantas personas son?");
const precio = 105000;
console.log("Hola, " + nombre + ".");
console.log("Personas:", personas);
console.log("Total:", Number(personas) * precio);
console.log("¿Es grupo (3 o más)?", Number(personas) >= 3);
