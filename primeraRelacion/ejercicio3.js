function mostrarTriangulo(lado1,lado2,lado3){
    if(lado1+lado2 < lado3){
        alert("no es un triángulo"); //Supononemos que es un triangulo si lado1 + lado2 > lado3
    }
    else{
        if(lado1 === lado2 && lado1 === lado3){
            alert("es equilatero")
        }
        else{
            if(lado1== lado2 || lado2 == lado3 || lado1 == lado3){
                alert("triangulo isosceles")
            }
            else{
                alert("triangulo escaleno")
            }
        }
    }

   // (lado1+lado2 > lado3) ? alert("Es triangulo") : alert("no es");
}