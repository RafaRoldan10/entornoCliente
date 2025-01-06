//Consigo la fecha actual
var fecha = new Date();

//Consigo el dia
dia = fecha.getDate();
console.log(dia);
const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

//Consigo el mes
var mes = meses[fecha.getMonth()];

//Consigo el año
var anio = fecha.getFullYear();
const cuatrimestres = ["primer","segundo","tercer"];
document.write("Estamos en el día " + dia + " de " + mes + " del " + cuatrimestres[(Math.trunc(fecha.getMonth()/4))] + " cuatrimestre del año " + anio);