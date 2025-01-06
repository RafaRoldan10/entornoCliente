document.addEventListener("DOMContentLoaded",() =>{
    var numero = prompt("Dime un numero");
    if(numero < 0){
        alert("El factorial de un número negativo no existe");
    }

    if(numero == 0){
        alert("El factoial de 0 es 1");
    }
    if(numero > 0){
        var factorial = 1;
        var contador = 1;
        while(contador <= numero){
            factorial = factorial * contador;
            contador++;
        }
        alert("El factorial es: "  +factorial);
    }
    
})