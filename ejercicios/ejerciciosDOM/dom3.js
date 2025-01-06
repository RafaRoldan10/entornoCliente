function anadirElemento(){
    var lista = document.getElementById("diariosdeportivos");  
    
    
    
    var elementoNuevo = document.createElement("li");
    var texto = document.createTextNode(prompt("Introduzca texto de la lista: "));
    elementoNuevo.appendChild(texto);
    
    //añadir el elemento
    lista.appendChild(elementoNuevo);

    //segunda forma
    //elementoNuevo = document.createElement("li");
    //var texto = document.createTextNode(prompt("Introduzca texto de la lista: "));
    elementoNuevo = "<li>Elemento añadido correctamente</li>";

    //añadir directamente al contenido InnerHTML
    lista.innerHTML += elementoNuevo;
}