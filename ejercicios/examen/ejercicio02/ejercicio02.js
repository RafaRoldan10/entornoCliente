var matriz = [[],[],[],[],[],[],[],[],[],[]];
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        matriz[i][j] = (Math.floor(Math.random()*71)) + 10;
    }
}

document.write("<h2>Normal</h2>");
document.write("<table border='1' width='60%' height='70%'>");
  for (let i = 0; i < 10; i++) {
    document.write("<tr>");
    for (let j = 0; j < 10; j++) {
      document.write(`<td>${matriz[i][j]}</td>`)
    }
    document.write("</tr>");
  }
  document.write("</table><br><br>");

  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j = j + 2){
        aux1 = matriz[i][j];
        aux2 = matriz[i][j+1];
        matriz[i][j] = aux2;
        matriz[i][j+1] = aux1;
    }
  }

  document.write("<h2>Invertida</h2>");
  document.write("<table border='1' width='60%' height='70%'>");
  for (let i = 0; i < 10; i++) {
    document.write("<tr>");
    for (let j = 0; j < 10; j++) {
      document.write(`<td>${matriz[i][j]}</td>`)
    }
    document.write("</tr>");
  }
  document.write("</table><br><br>");