class Empresa{
    constructor(nombre,direccion,telefono,nif){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }

    muestraEmpresa(){
        document.write("Empresa: " + this.nombre + " en  " + this.direccion + " con telefono " + this.telefono + " y NIF: " + this.nif + "<br>");
    }
}

class Cliente{
    constructor(n_cliente,dni,nombre,domicilio,cp,ciudad,provincia){
        this.n_cliente = n_cliente;
        this.dni = dni;
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.cp = cp;
        this.ciudad = ciudad;
        this.provincia = provincia;
    }

    imprimeCliente(){
        document.write("Cliente: " + this.nombre + " con DNI " + this.dni + " con domicilio en: " + this.domicilio + " de  " + this.ciudad + " , " + this.provincia + "<br>");
    }
}

class Producto{
    constructor(descripcion,precio,cantidad){
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    
}

class DatosFactura{
    constructor(empresa,cliente,productos){
        this.empresa= empresa;
        this.cliente = cliente;
        this.productos = productos;
    }

    muestraProductos(){
        for(let i= 0; i < this.productos.length; i++){
            document.write(this.productos[i].descripcion + " cantidad: " + this.productos[i].cantidad + " precioUnidad " + this.productos[i].precio+ "<br>");
            }
    }
}

class Factura extends DatosFactura{
    constructor(empresa,cliente,productos,formaPago,importeTotal){
        super(empresa,cliente,productos);
        this.formaPago = formaPago;
        this.importeTotal = importeTotal;
    }

    calculaImporteTotal(){
        
        for(let i = 0; i <this.productos.length; i++){
            this.importeTotal = this.importeTotal + this.productos[i].precio * this.productos[i].cantidad;
        }
        document.write("Total: " + this.importeTotal + "€<br>");
    }

    muestraFactura(){
        this.cliente.imprimeCliente();
        this.empresa.muestraEmpresa();
        this.muestraProductos();
        this.calculaImporteTotal();
        document.write("pago con: ",this.formaPago);
    }
}


const cliente = new Cliente(1,"52564321G","Leo","C/ Rey",12442,"Lucena","Cordoba");
const empresa = new Empresa("Azul","C/Juan",932575329,"6465675G");
const productos = [new Producto("Pelota",2,3),new Producto("libro",2,3)];
const fact = new Factura(empresa,cliente,productos,"tarjeta",0);
fact.muestraFactura();
