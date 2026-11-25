// modelo.js - Modelo: los datos de las reservas y sus reglas
class Reserva {
  //clase con su nombre
  constructor(cliente, servicio, precio) {
    //constructor con sus metodos y parametros
    this.cliente = cliente; //this el objeto se esta creando. cliente Propiedad del objeto
    this.servicio = servicio; // = cliente el parametro
    this.precio = precio;
  }
}

class Reservas {
  // segunda clase del modelo. es el conjunto de todas las reservas en plural
  constructor() {
    this.lista = []; //todas las reservas. Propiedad vector empieza vacia y guarda objetos de Reserva
  }
  agregar(reserva) {
    //Metodo con parametro. En una clase, se escriben sin la palabra funtion
    if (reserva.precio <= 0) {
      //regla de negocio. reserva.precio es Propiedad de otro objeto. reversa es el objeto Reserva que llego como argumento
      return false; //no se guarda
    }
    this.lista.push(reserva); //push sobre la propiedad. guarda la reserva en la lista de este objeto
    return true;
  }
  ingresos() {
    let suma = 0;
    this.lista.forEac((r) => {
      //forEach con callback. r es cada reserva; se suma su precio
      suma += r.precio;
    });
    return suma;
  }
}
