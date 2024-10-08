var fecha = new Date();
dia = fecha.getDate();
console.log(dia);
const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
var mes = meses[fecha.getMonth()];
var anio = fecha.getFullYear();
const cuatrimestres = ["primer","segundo","tercer"];
document.write("Estamos en el día " + dia + " de " + mes + " del " + cuatrimestres[(Math.trunc(fecha.getMonth()/4))] + " cuatrimestre del año " + anio);