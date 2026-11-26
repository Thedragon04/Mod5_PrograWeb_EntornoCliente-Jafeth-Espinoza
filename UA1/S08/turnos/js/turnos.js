"use strict";
function crearTurnos(taller) {
  let numero = 0;
  return () => {
    numero++;
    return `${taller} · turno ${numero}`;
  };
}

const turnoPan = crearTurnos("Panaderia");
const turnoTarta = crearTurnos("Tarta");

console.log(turnoPan());
console.log(turnoPan());
console.log(turnoTarta());
console.log(turnoPan());
