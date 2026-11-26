// dom.js - Recorre el árbol de nodos de index.html (al final del body)
console.log(`Título de la página: ${document.title}`); //Texto que esta dentro de la etiqueta title

// Es el nodo <html>: la raíz de todos los elementos
const raiz = document.documentElement;
console.log(`Raíz: ${raiz.tagName} · hijos: ${raiz.children.length}`);

//Accede al nodo <body>
const cuerpo = document.body;
//Recorre los hijos directos de body o saltando los nodos script
for (const hijo of cuerpo.children) {
  if (hijo.tagName !== "SCRIPT") {
    //muestra la etiqueta del hijo y su id (ejemplo: MAIN . id contenido)
    console.log(`Hijo de <body>: ${hijo.tagName} · id ${hijo.id}`);
  }
}

//children[1] = segundo hijo de <body> (posicion 1: <main>)
const principal = cuerpo.children[1];
//parentElement SUBE un nivel: el padre de <main> es <body>
console.log(`Padre de <main>: ${principal.parentElement.tagName}`);
// firstElementChild.id BAJA un nivel: al primer hijo de <main> es "portada"
console.log(`Primer hijo de <main>: ${principal.firstElementChild.id}`);
// children.length: cuantas secciones hay dentro de <main>
console.log(`Secciones dentro de <main>: ${principal.children.length}`);
