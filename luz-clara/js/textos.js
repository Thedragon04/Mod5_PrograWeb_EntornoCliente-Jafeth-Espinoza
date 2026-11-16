//
const escrito = "  retrato familiar  ";
const servicio = escrito.trim();
console.log(escrito.length);
console.log(servicio.toLocaleUpperCase());
console.log(servicio.includes("familiar")); //¿Contiene? = true
console.log(servicio.slice(0, 7)); // De la letra 0 a la 6
console.log(`Servicio: ${servicio}`); //plantilla con ${ }
