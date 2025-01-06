class Carta{
    constructor(palo,valor){
        this.palo = palo;
        this.valor = valor;
    }

    nombrePalo(){
        const arrayPalos = ["corazones","diamantes","picas","tréboles"];
        return arrayPalos;
    }

    valorCarta(){
        const valores = ["as",2,3,4,5,6,7,8,9,10,"J","Q","K"];
        return valores
    }

    nombreCarta(){
        console.log("Tu carta es: " + this.valorCarta()[this.valor - 1], " de " + this.nombrePalo()[this.palo - 1] )
    }
}


var c = new Carta(3,13);
c.nombreCarta();