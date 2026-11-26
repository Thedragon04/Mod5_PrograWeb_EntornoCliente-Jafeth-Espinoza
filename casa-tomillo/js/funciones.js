function enColones(monto) {
  return `¢${monto.toLocaleString("es-CR")}`;
}

const conMaticula = (monto) => monto + 10000;

function costoGrupo(monto, cantidad) {
  if (isNaN(cantidad) || cantidad <= 1 || cantidad >= 8) {
    return console.log("Cantidad invalida");
  }
  let costo = conMaticula(monto) * cantidad;
  if (cantidad <= 3) {
    costo = costo * 0.9;
  }
  return console.log(`${enColones(costo)}`);
}

console.log(enColones(95000));
console.log(conMaticula(68000));
costoGrupo(68000, 2);
costoGrupo(95000, 3);
costoGrupo(95000, 9);
