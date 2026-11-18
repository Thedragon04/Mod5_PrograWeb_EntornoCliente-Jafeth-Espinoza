try {
  const nombre = prompt("Cual dia quiere ver si abrimos?");
  const limpiar = nombre.trim().toLocaleLowerCase();
  switch (limpiar) {
    case "domingo":
    case "lunes":
      console.log(`El ${limpiar} esta cerrado`);
      break;
    default:
      console.log(`El ${limpiar} abre de 10:00 a. m. a 7:00 p. m.`);
      break;
  }
} catch (error) {
  console.warn("No se indico un dia.");
} finally {
  console.log("Casa Tomillo \u00B7 Barrio Amon");
}
