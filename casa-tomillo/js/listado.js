const baratos = talleres.filter((t) => t.precio < 75000);
let i = 0;
baratos.forEach((t) => {
  i++;
  console.log(`${t.nombre}: ${enColones(t.precio)}`);
});
console.log(`Economicos: ${i}`);
const todos = talleres.map((t) => conMaticula(t.precio));
console.log(`Con matriculas: ${todos.join(", ")}`);
