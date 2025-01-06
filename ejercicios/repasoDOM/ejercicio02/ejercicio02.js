document.addEventListener("DOMContentLoaded", inicializar);

function inicializar() {
  document.addEventListener("click", (e) => {
    if (e.target.matches("#tabla")) {
      var filas = Number(document.querySelector("#filas").value);
      var columnas = Number(document.querySelector("#columnas").value);
      tabla = document.createElement("table");
      tabla.border = "1";
      for (let i = 0; i < filas; i++) {
        tr = document.createElement("tr");
        tabla.appendChild(tr);
        for (let j = 0; j < columnas; j++) {
          td = document.createElement("td");
          td.innerHTML = `Fila: ${i+1} Columna:${j+1}`
          tr.appendChild(td);
        }
      }
      document.querySelector("body").appendChild(tabla);
    }
  });
}
