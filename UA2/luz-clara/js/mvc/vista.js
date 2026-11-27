//vista.js - Vista: Muestra los datos(por ahora en consola)
class VisitaReservas {
  //recibe la lista de reservas del modelo y la escribe em el <ol>
  mostrar(lista) {
    //el <ol> id="lista-reservas"
    const ol = document.getElementById("lista-reservas");
    //vaciar el ol para no repetir reservas
    ol.innerHTML = "";
    //r: cada reserva (objeto Reserva del modelo)
    lista.forEach((r) => {
      const li = document.createElement("li");
      //el texto: cliente y servicio de la reserva
      li.textContent = `${r.cliente} . ${r.servicio}`;
      //lo agrega al final de <ol>
      ol.append(li);
    });
  }
  //Recibe el total de ingresos y los va escribir es <p id="ingresos"
  mostrarIngresos(monto) {
    const p = document.getElementById("ingresos");
    const m = monto.toLocaleString("es-CR");
    //innerHTML porque lleva la etiqueta <strong>
    p.innerHTML = `Ingresos: <strong>¢${m}<strong>`;
  }
  error(texto) {
    const aviso = document.getElementById("aviso-reservas");
    aviso.textContent = texto;
    console.error(texto);
  }
}
