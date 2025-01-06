function mostrarTabla(numero){
    if(numero >= 2 && numero <=9){
        for(let i= 0; i<11; i++){
            document.write(i + " * " + numero + "=" + i * numero + "<br>")
        }
    }
    else{
        alert('El número tiene que estar entre 2 y 9')
    }
    
}