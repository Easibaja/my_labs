let isColoured = false;

function agregar() {
    const lista = document.getElementById("lista");
    const cantidadElementos = lista.getElementsByTagName("li").length;
    const nuevoElemento = document.createElement("li");

    nuevoElemento.textContent = "Elemento" + (cantidadElementos + 1);
    
    lista.appendChild(nuevoElemento);
}

function cambiarFondo() {
  const body = document.body;
  
  if (isColoured) {
      body.style.backgroundColor = "white";
      body.style.color = "black";
  } else {
      body.style.backgroundColor = "red";
      body.style.color = "white";
  }

  isColoured = !isColoured;
}

function borrar() {
    const lista = document.getElementById("lista");
    const elementos = lista.getElementsByTagName("li");

    if (elementos.length > 0) {
        lista.removeChild(elementos[elementos.length - 1]);
    }
}