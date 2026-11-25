//vista.js - Vista: Muestra los datos(por ahora en consola)
class VisitaReservas {
  //la clase de la vista. No tiene constructor porque no necesita guardar datos propios. JS le pone uno vacio
  mostrar(lista) {
    lista.forEach((r, i) => {
      //i es la posicion (r, i) dos parametros callback
      //forEach entrega el elemento (r) y su posicion (i) que empieza en cero
      console.log(`${i + 1}. ${r.cliente}. ${r.servicio}`); //r.cliente - r.servicio son propiedades de cada reserva. la vista solo lee datos, no lo cambia.
    });
  }
  mostrarIngresos(monto) {
    console.log(`Ingresos: ¢${monto.toLocaleString("es-CR")}`);
  }

  error(texto) {
    console.error(texto); //
  }
}
