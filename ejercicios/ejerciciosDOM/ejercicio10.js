var d = document;

function anadir(){
    var posicion = d.querySelector("#posicion").value;
    var contenido = d.querySelector("#contenido").value;
    var lista = d.querySelectorAll("li");
    if(isNaN(posicion)) return;
    if(posicion > lista.length){
        var inserccion = d.createElement("li");
        inserccion.innerHTML = contenido;
        lista[lista.length - 1].insertAdjacentElement('afterEnd',inserccion);
    }
    for(let i = 0; i < lista.length; i++){
        if(i + 1 == posicion){
            var inserccion = d.createElement("li");
            inserccion.innerHTML = contenido;
            lista[i].insertAdjacentElement('beforeBegin',inserccion);
        }
    }
}