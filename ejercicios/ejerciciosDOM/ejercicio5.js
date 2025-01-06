function cambiarTodos(){
    var parrafos = document.querySelectorAll("p");
    parrafos.forEach(element => {
        element.style.color="red";
    });
}

function cambiarPrimero(){
    var parrafos = document.querySelectorAll("p");
    parrafos[0].style.color = "red";
    for(let i = 1; i < parrafos.length; i++){
        parrafos[i].style.color = "black";
    }
}

function cambiarPares(){
    var parrafos = document.querySelectorAll("p");
    for(let i= 0; i < parrafos.length ; i++){
        if(i % 2 == 1){
            parrafos[i].style.color = "red";
        }
        else{
            parrafos[i].style.color = "black";
        }
    }
}

function cambiarImpares(){
    var parrafos = document.querySelectorAll("p");
    for(let i= 0; i < parrafos.length ; i++){
        if(i % 2 == 0){
            parrafos[i].style.color = "red";
        }
        else{
            parrafos[i].style.color = "black";
        }
    }
}

function anadir(){
    var $parrafo2= document.querySelectorAll("p")[1];
    $parrafo2.insertAdjacentHTML("afterend","<p class='black'>Añadido nuevo parrafo</p>")
}

function original(){
    var parrafos = document.querySelectorAll("p");
    parrafos.forEach(element => {
        element.parentNode.removeChild(element);
    });

    var $cuerpo = document.querySelector("body");
    for(let i = 0; i < 5 ; i++){
        $cuerpo.insertAdjacentHTML("afterbegin","<p class='black'>Texto de ejemplo</p>")
    }
    
}