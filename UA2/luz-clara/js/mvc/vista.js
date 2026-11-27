//vista.js - Vista: Muestra los datos(por ahora en consola)
class VisitaReservas {
  //recibe la lista de reservas del modelo y la escribe em el <ol>
  mostrar(lista) {
    //el <ol> id="lista-reservas"
    const ol = document.getElementById("lista-reservas");
    //vaciar el ol para no repetir reservas
    ol.innerHTML = "";
    lista.array.forEach((r) => {
      const li = document.createElement("li");
    });
  }
}
