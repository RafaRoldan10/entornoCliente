class Cuadrado{
    constructor(lado){
        this.lado = lado;
    }
    calculaPerimetro(){
        console.log("El perimetro del cuadrado es: "  + this.lado * 4);
    }
    calculaArea(){
        console.log("El area del cuadrado es "  + (this.lado * this.lado));
    }
}

class Cubo extends Cuadrado{
    constructor(lado){
        super(lado);
    }

    calculaPerimetro(){
        console.log("El perímetro del cubo es: "  + this.lado*24); 
    }

    calculaArea(){
        console.log("El área del cubo es " +  (this.lado*this.lado)*6);
    }

    calculaVolumen(){
       console.log("El volumen es " +  this.lado*this.lado*this.lado); 
    }
}

var cuadrado = new Cuadrado(2);
var cubo = new Cubo(2);
cuadrado.calculaArea();
cuadrado.calculaPerimetro();
cubo.calculaPerimetro();
cubo.calculaArea();
cubo.calculaVolumen();