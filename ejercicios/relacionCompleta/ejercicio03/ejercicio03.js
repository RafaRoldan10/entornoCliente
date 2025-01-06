var d = document;
d.addEventListener("DOMContentLoaded", inicializar);

function inicializar() {
  d.addEventListener("click", (e) => {
    if (e.target.matches("#boton")) {
      var edad = d.getElementById("edad").value;
      var salario = d.getElementById("salario").value;
      var salarioVerdadero;
      if (salario >= 2000) {
        salarioVerdadero = salario;
      }
      if (salario >= 1000 && salario < 2000) {
        if (edad > 50) {
          salarioVerdadero = (salario * 1.1);
        } else {
          salarioVerdadero = (salario * 1.05);
        }
      }
      if (salario < 1000) {
        if (edad >= 50 && edad <= 60) {
          salarioVerdadero = (salario * 1.15);
        }
        if (edad < 50) {
          salarioVerdadero = (salario * 1.075);
        }
        if (edad > 60) {
          salarioVerdadero = (salario * 1.2);
        }
      }
      d.querySelector("textarea").innerHTML = salarioVerdadero }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
