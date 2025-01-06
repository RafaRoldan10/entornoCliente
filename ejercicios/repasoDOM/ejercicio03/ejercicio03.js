class Producto{
    constructor(nombre,precio,categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    descuento(porcentaje){
        this.precio = this.precio * ((100 - porcentaje) / 100);
    }

    frase(){
        console.log("Nombre: " + this.nombre + " precio: " + this.precio  + " categoria: " + this.categoria);
    }
}

var p = new Producto("manzana", 1.5 ,"f");
p.descuento(20);
p.frase();