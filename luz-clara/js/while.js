// while.js - Repetir mientras la condición sea true
let fotos = 3; // fotos por entregar
while (fotos > 0) {
  // ¿quedan fotos?
  console.log(`Entregando la foto ${fotos}`);
  fotos--; // resta 1: fotos = fotos - 1
}
console.log("Todas entregadas");
