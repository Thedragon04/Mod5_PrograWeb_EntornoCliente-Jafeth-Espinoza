let cupos = 8;
let i = 0;

while (cupos > 0) {
  i++;
  let personas = Math.min(3, cupos);
  cupos -= personas;
  console.log(`Ronda ${i}: ${personas} personas · quedan ${cupos}`);
}
