const nombre = "Panaderia: masa madre";
const precio = 95000;
const matricula = 10000;
const personasInscribir = 2;
let cupos = 8;
let total = (precio + matricula) * 2;
console.log("Taller" + nombre); //union de cadenas
console.log("Precio por persona:", precio + matricula); //Suma para saber el precio por persona
console.log("Total para 2 personas:", total); //llamo a total
console.log("Cupos libres:", (cupos -= personasInscribir)); //resto las personas inscritas a los cupos
console.log("¿Hay cupos?", cupos >= 0); // pregunto si los cupos no son 0
console.log("¿Menos de ₡250 000 y con cupos?", total < 250000 && cupos > 0); //pregunto si el total no sobre pasa 250000 y que los cupos no sea 0
