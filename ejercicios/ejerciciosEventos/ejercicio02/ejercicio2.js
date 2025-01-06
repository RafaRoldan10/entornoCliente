function aumentar(id){
    $parrafo = document.getElementById(`parrafo${id}`);
    tamano = parseFloat($parrafo.style.fontSize);
    console.log(tamano);
    $parrafo.style.fontSize = `${tamano + 1}em`;
}

function disminuir(id){
    $parrafo = document.getElementById(`parrafo${id}`);
    tamano = parseFloat($parrafo.style.fontSize);
    console.log(tamano);
    if(tamano > 1){
        $parrafo.style.fontSize = `${tamano - 1}em`;
    }
}

function defecto(id){
    $parrafo = document.getElementById(`parrafo${id}`);
    $parrafo.style.fontSize = `1em`;   
}

function muestraOculta(id){
    $parrafo = document.getElementById(`parrafo${id}`);
    $enlace = document.getElementById(`enlace${id}`)
    if($parrafo.style.display == "none"){
        $parrafo.style.display = "block";
        $enlace.innerHTML = "Ocultta el contenido";
    }
    else{
        $parrafo.style.display = "none";
        $enlace.innerHTML = "Muestra el contenido";
    }
}
