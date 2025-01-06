function invierte(){
    d = document;
    var parrafos = d.querySelectorAll("p");
    
    parrafos.forEach(element => {
        element.parentElement.removeChild(element);
    });
    
    var boton = d.querySelector("input");
    for(let i = parrafos.length - 1 ; i >= 0; i--){
        boton.insertAdjacentElement("beforebegin",parrafos[i]);
    }
}