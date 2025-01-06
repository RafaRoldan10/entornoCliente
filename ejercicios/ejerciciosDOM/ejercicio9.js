var d = document;
$primerParrafo = d.getElementById("primerParrafo");

function anadir() {
$medio = d.getElementById("medio");
  if ($medio == null) {
    
    $nuevo = d.createElement("p");
    $nuevo.id = "medio";
    $nuevo.innerHTML = "Parrafo añadido";
    $primerParrafo.insertAdjacentElement("afterend", $nuevo);
  }
}

function eliminar() {
  parrafoEliminar = d.getElementById("medio");
  if (parrafoEliminar !== null) {
    parrafoEliminar.parentNode.removeChild(parrafoEliminar);
  }
}

function modificar(){
    parrafoModificar = d.getElementById("medio");
    if(parrafoModificar !== null){
        parrafoModificar.innerHTML = document.querySelector("input").value;
    }
}
