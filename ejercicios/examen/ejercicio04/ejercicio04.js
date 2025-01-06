class Planta{
    constructor(nombre,tipo,riego){
        this.nombre = nombre;
        this.tipo = tipo;
        this.riego = riego;
    }

    informacion(){
        return "Tu planta se llama: " + this.nombre  + " de tipo " + this.tipo + " con riego " + this.riego;
    }
}

class Arbusto extends Planta{
    constructor(nombre,tipo,riego,altura){
        super(nombre,tipo,riego);
        this.altura = altura;
    }

    informacion(){
        return super.informacion() + " con altura " + this.altura;
    }
}

class Arbol extends Planta{
    constructor(nombre,tipo,riego,edad){
        super(nombre,tipo,riego);
        this.edad = edad;
    }

    informacion(){
        return super.informacion() + " con edad " + this.edad;
    }
}

var p = new Planta("plantita","tipo1","agua");
var arbol = new Arbol("arbolito","tipo arbol","riego2",30);
var arbusto = new Arbusto("arbustin","tipo arbusto","riego3",120);

console.log(p.informacion());
console.log(arbol.informacion());
console.log(arbusto.informacion());