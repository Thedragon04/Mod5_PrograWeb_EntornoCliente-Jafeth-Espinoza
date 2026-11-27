//reservas.js - ARRANQUE: une el modelo la vista y el controlador
const modelo = new Reservas(); //instancia del modelo. Por eso los parentesis estan vacios porque constructor no recibe datos
const vista = new VisitaReservas();
const reservas = new ControladorReservas(modelo, vista); //instancia del conrtrolador. Recibe los dos objetos ya creados

reservas.reservar("Ana Rodriguez", "Familiar", 75000); //metodo de controlador. es la accion del usuario
reservas.reservar("Luis Mora", "Perfil profesional", 38000);
reservas.reservar("Prueba", "Individual", 0);
reservas.actualizar();
