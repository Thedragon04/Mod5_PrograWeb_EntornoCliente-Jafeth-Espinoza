//controlodor.js - Controlodaor: recibe la accion y coordina
class ControlodorReservas {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }
  reservar(cliente, servicio, precio) {
    const nueva = new Reserva(cliente, servicio, precio);
    if (!this.modelo.agregar(nueva)) {
      this.vista.console.error(`Precio invalido para ${cliente}`);
    }
  }
  actualizar() {
    this.vista.mostrar(this.modelo.lista);
    this.vista.mostarIngresos(this.modelo.ingresos());
  }
}
