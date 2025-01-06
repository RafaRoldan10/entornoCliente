var matrizNueva = [[], [], [], [], [], [], [], [], [], []];
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    matrizNueva[i][j] = 0;
  }
}

function portaviones() {
  var correcto = false;
  while (!correcto) {
    fila = Math.floor(Math.random() * 10);
    columna = Math.floor(Math.random() * 10);
    largo = 4;
    orientacion = Math.random();
    if(estaLibre(fila,columna,largo,orientacion)){
      correcto = true;
    }
  }
  colocaBarco(fila, columna, largo, orientacion);
}

function acorazados() {
  for (let i = 0; i < 2; i++) {
    var correcto = false;
    while (!correcto) {
      fila = Math.floor(Math.random() * 10);
      columna = Math.floor(Math.random() * 10);
      largo = 3;
      orientacion = Math.random();
      if(estaLibre(fila,columna,largo,orientacion)){
        correcto = true;
      }
    }
    colocaBarco(fila, columna, largo, orientacion);
  }
}

function destructores() {
  for (let i = 0; i < 3; i++) {
    var correcto = false;
    while (!correcto) {
      fila = Math.floor(Math.random() * 10);
      columna = Math.floor(Math.random() * 10);
      largo = 2;
      orientacion = Math.random();
      if(estaLibre(fila,columna,largo,orientacion)){
        correcto = true;
      }
    }
    colocaBarco(fila, columna, largo, orientacion);
  }
}

function fragata(){
  for (let i = 0; i < 4; i++) {
    var correcto = false;
    while (!correcto) {
      fila = Math.floor(Math.random() * 10);
      columna = Math.floor(Math.random() * 10);
      largo = 1;
      orientacion = Math.random();
      if(estaLibre(fila,columna,largo,orientacion)){
        correcto = true;
      }
    }
    colocaBarco(fila, columna, largo, orientacion);
  }
}

function colocaBarco(fila, columna, largo, orientacion) {
  if (orientacion > 0.5) {
    for (let i = columna; i < columna + largo; i++) {
      matrizNueva[fila][i] = largo;
    }
  } else {
    for (let i = fila; i < fila + largo; i++) {
      matrizNueva[i][columna] = largo;
    }
  }
}

function estaLibre(fila, columna, largo, orientacion) {

  var inicioFila, finFila, inicioColumna, finColumna;
  if(fila == 0) inicioFila = 0;
  else inicioFila = fila -1;
  if(columna == 0) inicioColumna = 0;
  else inicioColumna = columna -1;
  if (orientacion > 0.5) {
    finFila = Math.min(9, fila + 1);
    finColumna = Math.min(9, columna + largo);
  } else {
    finFila = Math.min(9, fila + largo);
    finColumna = Math.min(9, columna + 1);
  }
  
  for (let i = inicioFila; i <= finFila; i++) {
    for (let j = inicioColumna; j <= finColumna; j++) {
      if (matrizNueva[i][j] != 0) return false;
    }
  }

  if (orientacion > 0.5) {
    if (columna + largo > 9) return false;
    for (let i = columna; i < columna + largo; i++) {
      if (matrizNueva[fila][i] != 0) return false;
    }
  } else {
    if (fila + largo > 9) return false;
    for (let i = fila; i < fila + largo; i++) {
      if (matrizNueva[i][columna] != 0) return false;
    }
  }
  return true;
}


function mostrarTablero() {
  document.write("<table border='1' width='60%' height='60%'>");
  for (let i = 0; i < matrizNueva.length; i++) {
    document.write('<tr>');
    for (let j = 0; j < matrizNueva[i].length; j++) {
      let color = '';
      if (matrizNueva[i][j] == 0) color = 'white';
      if (matrizNueva[i][j] == 1) color = 'red';
      if (matrizNueva[i][j] == 2) color = 'blue';
      if (matrizNueva[i][j] == 3) color = 'green';
      if (matrizNueva[i][j] == 4) color = 'yellow';
      document.write(`<td style="background-color: ${color};">${matrizNueva[i][j]}</td>`);
    }
    document.write('</tr>');
  }
  document.write('</table>');
}


function inicializarTablero() {
  portaviones(); 
  acorazados();  
  destructores(); 
  fragata();     
  mostrarTablero();
}


inicializarTablero();

