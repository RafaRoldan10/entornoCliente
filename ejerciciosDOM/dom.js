var d = document;
var enlaces = d.querySelectorAll("a");
console.log("Enlaces: ",enlaces.length)
//Conseguir el penultimo enlace
console.log(enlaces[enlaces.length-2].href);
console.log(enlaces[enlaces.length-2].getAttribute("href"));
//Cuantos van a marca
var contadorMarca = 0;
for(let i = 0; i < enlaces.length; i++){
    if(enlaces[i].href == "http://www.marca.es/"){
        contadorMarca++;
    }
}
console.log("Enlaces al marca: ",contadorMarca);

//Acceder al tercer párrafo
var parrafos = d.querySelectorAll("p");
var tercerParrafo = parrafos[2];
var numEnlacesTercero = tercerParrafo.querySelectorAll("a").length;

//En una linea
console.log(d.querySelectorAll("p")[2].querySelectorAll("a").length)
