const factura = {
    empresa : {
        nombre : "Rojo S.A",
        direccion: "Casita",
        telefono: 943894343,
        NIF: "542535223L",
    },

    cliente: {
        numero: 1,
        dni :"23256345D",
        nombre: "Pepe",
        domicilio : "Calle Juan Carlos",
        cp: 14960,
        ciudad: "Rute",
        provincia: "Cordoba",
    },

    listaPrductos: [{descripcion:"pelota",cantidad:3,precio:1},{descripcion:"cuaderno",cantidad:3,precio:3}],
    pago:{
        importeTotal: 0,
        formaPago: "credito",
    },

    
}

factura.calcularImporte = function(){
    for(let i = 0; i < this.listaPrductos.length ; i++){
        this.pago.importeTotal = this.pago.importeTotal + this.listaPrductos[i].precio * this.listaPrductos[i].cantidad
    }
    document.write(this.pago.importeTotal + "€")
};

factura.imprimeEmpresa = function(){
    document.write("Empresa: " + this.empresa.nombre + " en  " + this.empresa.direccion + " con telefono " + this.empresa.telefono + " y NIF: " + this.empresa.NIF + "<br>"); 
};

factura.imprimeCliente= function(){
    document.write("Cliente: " + this.cliente.nombre + " con DNI " + this.cliente.dni + " con domicilio en: " + this.cliente.domicilio + " de  " + this.cliente.ciudad + " , " + this.cliente.provincia + "<br>");
};

factura.imprimefactura = function(){
    this.imprimeEmpresa();
    this.imprimeCliente();
    for(let i= 0; i < this.listaPrductos.length; i++){
        document.write(this.listaPrductos[i].descripcion + " cantidad: " + this.listaPrductos[i].cantidad + " precioUnidad " + this.listaPrductos[i].precio+ "<br>");
    }
    document.write("Importe total:")
    this.calcularImporte();
};

factura.imprimefactura();