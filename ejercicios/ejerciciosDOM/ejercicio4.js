function mostrar(){
    var $nodoParrafo = document.createElement("p");
    $nodoParrafo.setAttribute("id","parrafo");
    $nodoParrafo.innerHTML = document.getElementById("nombre").value + " " + document.getElementById("apell").value;
    document.getElementById("nombre").parentElement.appendChild($nodoParrafo);
}

function limpiar(){
    var $parrafo = document.getElementById("parrafo");
    $parrafo.parentElement.removeChild($parrafo);
    document.getElementById("nombre").value="";
    document.getElementById("apell").value="";
}