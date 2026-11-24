const semana = [
  ["Martes", "Cocina inicial", "Tartas"],
  ["Miercoles", "Masa madre"],
  ["Jueves", "Cocina intermedia"],
  ["Viernes", "Pan de campo"],
  ["Sabado", "Bolleria", "Decoracion"],
];

for (const dia of semana) {
  let largo = dia.length;
  let cantidad = largo - 1;

  console.log(`${dia[0]} (${cantidad}): ${dia.slice(1).join(", ")}`);
}
