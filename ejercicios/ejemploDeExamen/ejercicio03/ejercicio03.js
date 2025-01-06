dobles = prompt("Numero de dobles");

var matriz = [[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
for(let i = 0; i < 14; i ++){
    for(let j = 0; j < 3; j++){
        matriz[i][j] = 0;
    }
}

filas = new Set();
while(filas.size < dobles){
    var numero = Math.floor(Math.random()*14);
    filas.add(numero);
}
columnas = new Set();
for(let i = 0; i < 14; i++){
    if(filas.has(i)){
        while(columnas.size < 2){
            var numeroRandom = Math.floor(Math.random()*3);
            columnas.add(numeroRandom);
        }

        columnas.forEach(element => {
            if(element == 0) matriz[i][0] = 1;
            if(element == 1) matriz[i][1] = "x";
            if(element == 2) matriz[i][2] = 2;
        });
        columnas.clear();
    }
    else{
        random = Math.floor(Math.random()*3);
        if(random == 0) matriz[i][0] = 1;
        if(random == 1)matriz[i][1] = "x";
        if(random == 2) matriz[i][2] = 2; 
    }
}

document.write("<table border='1' width='60%' height='70%'>");
  for (let i = 0; i < 14; i++) {
    document.write("<tr>");
    document.write("<td>Partido " + (i + 1)+ "</td>");
    for (let j = 0; j < 3; j++) {
      if(matriz[i][j] == 0) document.write("<td></td>");
      else document.write("<td>" + matriz[i][j] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
