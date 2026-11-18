const nivel = "Inicial",
  cupos = 6;
if (cupos === 0) {
  console.error("Taller lleno");
  console.log(`Quedan ${cupos} cupos`);
} else if (cupos > 0 && cupos <= 2) {
  console.warn("¡Últimos cupos!");
  console.log(`Quedan ${cupos} cupos`);
} else {
  console.log("Hay cupos disponibles");
  console.log(`Quedan ${cupos} cupos`);
}
