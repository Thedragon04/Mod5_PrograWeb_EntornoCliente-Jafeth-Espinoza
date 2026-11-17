let vuelto = 0,
  aPagar = 0;
const total = 105000;
const personas = prompt("Personas a pagar");
const pago = prompt("Con cuanto va a pagar");
console.log(`Personas: ${parseInt(personas)}`);
aPagar = personas * total;
console.log(`A pagar: ${aPagar.toLocaleString("es-CR")}`);
console.log(`Pago: ${parseFloat(pago).toLocaleString("es-CR")}`);
vuelto = (pago - aPagar).toFixed(2);
console.log(`Vuelto: ${vuelto.toLocaleString("es-CR")}`);
