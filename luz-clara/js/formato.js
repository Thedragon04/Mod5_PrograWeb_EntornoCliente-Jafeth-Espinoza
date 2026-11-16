// formato.js - Números con formato de Costa Rica (Intl)
const precio_ = 45000;
console.log(precio_.toLocaleString("es-CR"));
// número
// separa miles
const opciones = { style: "currency", currency: "CRC" }; // colones
const colones = new Intl.NumberFormat("es-CR", opciones); // Se crea una vez, se usa muchas
console.log(colones.format(precio_)); // ₡ y decimales
console.log(colones.format(75000 * 1.13)); // redondea solo
