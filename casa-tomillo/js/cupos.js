const nivel = "Inicial",
  cupos = 1;
const estado = cupos === 1 ? "Queda 1 cupo" : `Quedan ${cupos} cupos`;
if (cupos === 0) {
  console.error("Taller lleno");
  console.log(estado);
} else if (cupos > 0 && cupos <= 2) {
  console.warn("¡Últimos cupos!");
  console.log(estado);
} else {
  console.log("Hay cupos disponibles");
  console.log(estado);
}

switch (nivel) {
  case "Inicial":
    console.log("No necesita experiencia");
    break;
  case "Intermedio":
    console.log("Requiere el nivel inicial");
    break;
  default:
    console.log("Consulte con la escuela");
    break;
}
