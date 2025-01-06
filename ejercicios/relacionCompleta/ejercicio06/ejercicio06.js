document.addEventListener("DOMContentLoaded", () => {
  var matriz = [[], [], [], [], [], [], []];
  var contador = 1;
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      matriz[i][j] = contador;
      contador++;
    }
  }

  var set = new Set();
  while (set.size < 6) {
    var aleatorio = Math.floor(Math.random() * 49) + 1;
    set.add(aleatorio);
  }

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if (set.has(matriz[i][j])) {
        matriz[i][j] = "x";
      }
    }
  }

  document.write("<table border='1' width='60%' height='70%'>");
  for (let i = 0; i < 7; i++) {
    document.write("<tr>");
    for (let j = 0; j < 7; j++) {
      if(matriz[i][j] === "x") document.write("<td style='background-color: red'>" + matriz[i][j] + "</td>");
      else document.write("<td>" + matriz[i][j] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
});
