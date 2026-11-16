// formato.js - Números con formato de Costa Rica (Intl)
const precio = 45000;
console.log(precio.toLocaleString("es-CR"));
// número
// separa miles
const opciones = { style: "currency", currency: "CRC" }; // colones
const colones = new Intl.NumberFormat("es-CR", opciones); // Se crea una vez, se usa muchas
console.log(colones.format(precio)); // ₡ y decimales
console.log(colones.format(75000 * 1.13)); // redondea solo
