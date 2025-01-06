class Fraccion{
    constructor(num,den){
        this.num = num;
        this.den = den;
    }

    getNumerador(){
        return this.num;
    }

    getDenominador(){
        return this.den;
    }

    setNumerador(num){
        this.num = num;
    }

    setDenominador(den){
        this.den = den;
    }

    imprimirFraccion(){
        console.log(`${this.num}/${this.den}`);
    }

    simplificar(){
        return new Fraccion(this.num/this.maximoComunDivisor(this.num,this.den),this.den/this.maximoComunDivisor(this.num,this.den));
    }

    multiplicar(f){
        return new Fraccion(this.num*f.num,this.den*f.den);
    }

    dividir(f){
        return new Fraccion(this.num * f.den, this.den * f.num);
    }

    
    maximoComunDivisor(a,b){
        if(a % b == 0){
            return b
        }
        else{
            return this.maximoComunDivisor(b, a%b);
        }
    }
    
}

var f = new Fraccion(4,3);
f.setNumerador(6);
f.setDenominador(4);
f.imprimirFraccion();
simplificada = f.simplificar();
simplificada.imprimirFraccion();
multiplicada = f.multiplicar(simplificada);
multiplicada.imprimirFraccion();
dividida = f.dividir(simplificada);
dividida.imprimirFraccion();