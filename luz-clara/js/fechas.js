//fechas.js - fechas con Date
const hoy = new Date(); //Fecha y hora de ahora
console.log(hoy.getFullYear()); //año
console.log(hoy.getMonth() + 1);
console.log(hoy.getDate());
console.log(hoy.toLocaleDateString("es-CR"));
const sesion = new Date(2026, 11, 5);
console.log(sesion.toLocaleDateString("es-CR", { dateStyle: "full" }));
