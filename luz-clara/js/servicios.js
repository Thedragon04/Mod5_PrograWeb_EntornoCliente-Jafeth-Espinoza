//servicios.js - Las tarifas con callbacks
const tarifas = [
  { servicios: "Individuales", monto: 45000 },
  { servicios: "Familiar", monto: 75000 },
  { servicios: "Perfil profesional", monto: 38000 },
  { servicios: "Catalogo basico", monto: 30000 },
  { servicios: "Media jornada", monto: 120000 },
];
tarifas.forEach((t) => {
  console.log(`${t.servicios}: ${formatoColones(t.monto)}`);
});
const nombres = tarifas.map((t) => t.servicios);
console.log(`Servicios: ${nombres.join(", ")}`);

const economicos = tarifas.filter((t) => t.monto < 50000);
console.log(`Menos de ¢50 000: ${economicos.length}`);
