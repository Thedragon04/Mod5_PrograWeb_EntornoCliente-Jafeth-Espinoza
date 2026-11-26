// Con callbacks
let i = 0;
cursos.forEach((p) => console.log(`${i + 1}. ${p.nombre}`));
const matricula = cursos.map((p) => p.precio + 10000);
console.log(`Con matricula: ${matricula.join(", ")}`);
const niveles = cursos.filter((p) => p.nivel === "Inicial");
const Iniciales2 = niveles.map((p) => p.nombre).join(", ");
console.log(`Iniciales: ${Iniciales2}`);
