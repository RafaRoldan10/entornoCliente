document.addEventListener("DOMContentLoaded",inicializar);

function inicializar(){
    document.addEventListener("click",(e)=>{
        if(e.target.matches("#agregar")){
            if(document.querySelector("input").value != ""){
                elemento = document.createElement("li");
                elemento.textContent = document.querySelector("input").value;
                document.querySelector("ul").appendChild(elemento);
            }
        }

        if(e.target.matches("#eliminar")){
            lista = document.querySelectorAll("li");
            lista[0].parentNode.removeChild(lista[0]);

        }

        if(e.target.matches("#vaciar")){
            lista = document.querySelectorAll("li");
            lista.forEach(elemento=>{
                elemento.parentNode.removeChild(elemento);
            })
        }
    })
}