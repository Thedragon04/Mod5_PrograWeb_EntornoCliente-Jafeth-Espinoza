let cuotas = 0;
const nombre = "  panadería: masa madre ";
const quitar = nombre.trim();
const total = 105000;
const opciones = { style: "currency", currency: "CRC" };
const colones = new Intl.NumberFormat("es-CR", opciones);
console.log(`Taller: ${quitar.toUpperCase()}`);
const fechaIni = new Date(2026, 10, 21);
console.log(`Inicio: ${fechaIni.toLocaleDateString("es-CR", { dateStyle: "full" })}`);
console.log(`Total: ${colones.format(total)}`)