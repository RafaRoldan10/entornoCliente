class Punto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    cambiarCoordenadas(a,b){
        this.x = a;
        this.y = b;
    }

    iguales(p){
        if(p.x == this.x && p.y == this.y){
            console.log("Son iguales");
        }
    }

    sumar(p){
        return new Punto(this.x + p.x, this.y + p.y);
    }

    distancia(p){
        return Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y-p.y,2));
    }
}

var p = new Punto(0,0);
p.cambiarCoordenadas(1,1);
console.log(p.x + " " + p.y);
var p2 = new Punto(1,1);
p.iguales(p2);
p3 = p.sumar(p2);
console.log(p.distancia(p3));