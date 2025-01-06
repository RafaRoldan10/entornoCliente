var d= document;

d.addEventListener("DOMContentLoaded" ,() =>{
    $body = d.querySelector("body");
    var rojo = Math.floor(Math.random()*256);
    var verde = Math.floor(Math.random()*256);
    var azul = Math.floor(Math.random()*256);
    $body.style.backgroundColor= `rgb(${rojo},${verde},${azul})`;
    var numero = prompt("Escribe un numero");
    if(isNaN(numero)){
        alert("No es un numero");
    }
    else{
        alert("Si es un numero");
    }
    
})