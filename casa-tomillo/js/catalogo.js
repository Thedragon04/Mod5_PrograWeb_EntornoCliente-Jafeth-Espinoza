const talleres = [
  { nombre: "Cocina de la casa · Inicial", precio: 68000 },
  { nombre: "Cocina de la casa · Intermedio", precio: 72000 },
  { nombre: "Panaderia · Masa madre", precio: 95000 },
  { nombre: "Panaderia · Pan de campo", precio: 70000 },
  { nombre: "Panaderia · Bolleria", precio: 88000 },
  { nombre: "Reposteria · Tartas", precio: 82000 },
  { nombre: "Reposteria · Decoracion", precio: 58000 },
];
let suma = 0,
  caros = 0,
  masCaro = talleres[0];

for (const t of talleres) {
  console.log(`${t.nombre}: ₡${t.precio.toLocaleString("es-CR")}`);
  suma += t.precio;

  if (t.precio > 80000) {
    caros++;
  }

  if (t.precio > masCaro.precio) {
    masCaro = t;
  }
}
console.log(`Talleres: ${talleres.length}`);
console.log(
  `Promedio: ₡${Math.ceil(suma / talleres.length).toLocaleString("es-CR")}`,
);
console.log(`Mas de ₡80 000: ${caros}`);
console.log(`El mas caro: ${masCaro.nombre}`);
