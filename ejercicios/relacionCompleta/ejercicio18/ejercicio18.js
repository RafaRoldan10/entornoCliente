var d = document;
d.addEventListener("DOMContentLoaded", inicializar);

function inicializar() {
  const $formulario = document.getElementById("formularioSuperior");
  const $formularioMedio =  document.getElementById("formularioMedio");
  const $inputsRequeridos = document.querySelectorAll(".formularioMatricula");
  $inputsRequeridos.forEach((input) => {
    const $span = document.createElement("span");
    //a cada span le asignamos como id el atributo name de cada input.
    $span.id = input.name;
    // el contenido del span va a ser lo que venga en el title de cada input
    $span.textContent = input.title;
    // Le asignamos la clase formulario-mensaje-error y la clase no visible para ocultarlo
    $span.classList.add("error", "novisible");
    //insertar el elemento justo al lado de su input como hermano posterior (afterend)
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".formularioMatricula")) {
      const $input = e.target;
      const patron = $input.pattern || $input.dataset.pattern;
      if (patron && $input.value !== "") {
        //variable para guardar la expresión regular en la que se le pasa el patrón que quiero evaluar como parámetro
        const regEx = new RegExp(patron);
        console.log("el input tiene patrón", $input.value);
        //comprobar si el patrón cumple o no con la expresión regular
        if (!regEx.test($input.value)) {
          /*capturamos el id del span que creamos dinámicamente y le añadirmos la clase is-active en caso de 
          no cumplirse la expresión regular, mientras que si la cumple, se la retiramos, para que se ejecute 
          el css correspondiente (formulario-contacto-error.is-active)*/
          d.getElementById($input.name).classList.add("visible");
        } else {
          d.getElementById($input.name).classList.remove("visible");
        }
      }
    }
  });

  d.addEventListener("change", (e) => {
    
    if (e.target.matches("#selectMedio")) {
      if (e.target.value === "1") {
        var asignaturas = [
          "Aplicaciones Ofimaticas",
          "Redes Locales",
          "Sistemas Operativos Monopuesto",
          "Montaje y Mantenimiento de Equipos",
          "FOL",
        ];

        for (let i = 0; i < $formularioMedio.elements.length; i++) {
          var elemento = $formularioMedio.elements[i];
          if (elemento.type == "checkbox") {
            if (!asignaturas.includes(elemento.value)) {
              elemento.disabled = true;
            } else {
              elemento.disabled = false;
            }
          }
        }
      }

      if (e.target.value === "2") {
        var asignaturas = ["Aplicaciones WEB","Seguridad Informatica","Servicios en Red","Sistemas Operativos en Red","Empresas",];
        for (let i = 0; i < $formularioMedio.elements.length; i++) {
          var elemento = $formularioMedio.elements[i];
          if (elemento.type == "checkbox") {
            if (!asignaturas.includes(elemento.value)) {
              elemento.disabled = true;
            } else {
              elemento.disabled = false;
            }
          }
        }
      }
    }

    if (e.target.matches("#selectSuperior")) {
      if (e.target.value === "1") {
        var asignaturas = ["Programacion","Bases de Datos","Entornos de Desarrollo","Sistemas Informaticos","Lenguajes de Marcas","FOL",];
        for (let i = 0; i < $formulario.elements.length; i++) {
          var elemento = $formulario.elements[i];
          if (elemento.type == "checkbox") {
            if (!asignaturas.includes(elemento.value)) {
              elemento.disabled = true;
            } else {
              elemento.disabled = false;
            }
          }
        }
      }

      if (e.target.value === "2") {
        var asignaturas = ["DWEC","DWES", "HLC","Despliegue","Empresas","Diseño",];
        for (let i = 0; i < $formulario.elements.length; i++) {
          var elemento = $formulario.elements[i];
          if (elemento.type == "checkbox") {
            if (!asignaturas.includes(elemento.value)) {
              elemento.disabled = true;
            } else {
              elemento.disabled = false;
            }
          }
        }
      }
    }
  });

  d.addEventListener("click", (e) => {
    const fieldsetIzquierda = d.querySelector("#formularioSuperior fieldset");
    const fieldsetDerecha = d.querySelector("#formularioMedio fieldset");

    if (e.target.closest("#formularioSuperior")) {
        fieldsetDerecha.disabled = true;
        fieldsetIzquierda.disabled = false;
    } 
    if (e.target.closest("#formularioMedio")) {
        fieldsetIzquierda.disabled = true;
        fieldsetDerecha.disabled = false;
    }
    if (e.target.matches("#botonEnviarSuperior")) {
      var nombre,apellidos,calle,edad,genero,curso,materia = false;
      if (!d.getElementById("nomSuperior").classList.contains("visible")) {
        nombre = true;
      }
      if (!d.getElementById("apelSuperior").classList.contains("visible")) {
        apellidos = true;
      }
      if (!d.getElementById("calSuperior").classList.contains("visible")) {
        calle = true;
      }

      if (!isNaN(d.getElementById("edad").value)) {
        edad = true;
      }

      if (
        d.getElementById("selectSuperior").value === "1" ||
        d.getElementById("selectSuperior").value === "2"
      ) {
        curso = true;
      }
      var stringGenero;
      for (let i = 0; i < $formulario.elements.length; i++) {
        var elemento = $formulario.elements[i];
        if (elemento.type == "radio") {
          if (elemento.checked) {
            stringGenero = ""+elemento.value;
            genero = true;
          }
        }
      }

      var materias = [];
      for (let i = 0; i < $formulario.elements.length; i++) {
        var elemento = $formulario.elements[i];
        if (elemento.type == "checkbox") {
          if (elemento.checked) {
            materias.push(elemento.value);
            materia = true;
          }
        }
      }

      if (nombre && apellidos && calle && edad && curso && genero && materia) {
        // Ocultar el formulario
        

        // Crear un contenedor para mostrar los datos
        const nombreValor = d.getElementById("nombreSuperior").value;
        const apellidosValor = d.getElementById("apellidosSuperior").value;
        const calleValor = d.getElementById("calleSuperior").value;
        const edadValor = d.getElementById("edad").value;
        const cursoValor = d.getElementById("selectSuperior").value === "1" ? "Primero" : "Segundo";
        const generoValor = stringGenero; // Esto ya lo obtienes correctamente en el loop de radio buttons
        const materiasSeleccionadas = materias.join(", ");
        const observaciones = d.getElementById("tSuperior").value;
        datosContainer = document.createElement("div");
        datosContainer.innerHTML = `
    <h2>Datos Ingresados:</h2>
    <p>Nombre: ${nombreValor}</p>
    <p>Apellidos:${apellidosValor}</p>
    <p>Calle: ${calleValor}</p>
    <p>Edad: ${edadValor}</p>
    <p>Género: ${generoValor}</p>
    <p>Curso: ${cursoValor}</p>
    <p>Materias: ${materiasSeleccionadas}</p>
    <p>Observaciones: ${observaciones}</p>
  `;

        // Añadir el contenedor al DOM
        d.body.appendChild(datosContainer);
        d.querySelector(".contenedor").style.display = "none";
      }
      if (!genero) {
        alert("Escoge un genero");
      }
      if (!curso) {
        alert("Elige un curso");
      }
      if (!materia) {
        alert("Escoge alguna materia");
      }
    }

    if (e.target.matches("#botonEnviarMedio")) {
      var nombre,apellidos,calle,edad,genero,curso,materia = false;
      if (!d.getElementById("nomMedio").classList.contains("visible")) {
        nombre = true;
      }
      if (!d.getElementById("apelMedio").classList.contains("visible")) {
        apellidos = true;
      }
      if (!d.getElementById("calMedio").classList.contains("visible")) {
        calle = true;
      }

      if (!isNaN(d.getElementById("edadMedio").value)) {
        edad = true;
      }

      if (
        d.getElementById("selectMedio").value === "1" ||
        d.getElementById("selectMedio").value === "2"
      ) {
        curso = true;
      }
      var stringGenero;
      for (let i = 0; i < $formularioMedio.elements.length; i++) {
        var elemento = $formularioMedio.elements[i];
        if (elemento.type == "radio") {
          if (elemento.checked) {
            stringGenero = ""+elemento.value;
            genero = true;
          }
        }
      }

      var materias = [];
      for (let i = 0; i < $formularioMedio.elements.length; i++) {
        var elemento = $formularioMedio.elements[i];
        if (elemento.type == "checkbox") {
          if (elemento.checked) {
            materias.push(elemento.value);
            materia = true;
          }
        }
      }

      if (nombre && apellidos && calle && edad && curso && genero && materia) {
        // Ocultar el formulario
        

        // Crear un contenedor para mostrar los datos
        const nombreValor = d.getElementById("nombreMedio").value;
        const apellidosValor = d.getElementById("apellidosMedio").value;
        const calleValor = d.getElementById("calleMedio").value;
        const edadValor = d.getElementById("edadMedio").value;
        const cursoValor = d.getElementById("selectMedio").value === "1" ? "Primero" : "Segundo";
        const generoValor = stringGenero; // Esto ya lo obtienes correctamente en el loop de radio buttons
        const materiasSeleccionadas = materias.join(", ");
        const observaciones = d.getElementById("tMedio").value;
        datosContainer = document.createElement("div");
        datosContainer.innerHTML = `
    <h2>Datos Ingresados:</h2>
    <p>Nombre: ${nombreValor}</p>
    <p>Apellidos:${apellidosValor}</p>
    <p>Calle: ${calleValor}</p>
    <p>Edad: ${edadValor}</p>
    <p>Género: ${generoValor}</p>
    <p>Curso: ${cursoValor}</p>
    <p>Materias: ${materiasSeleccionadas}</p>
    <p>Observaciones:${observaciones}</p>
  `;

        // Añadir el contenedor al DOM
        d.body.appendChild(datosContainer);
        d.querySelector(".contenedor").style.display = "none";
      }
      if (!genero) {
        alert("Escoge un genero");
      }
      if (!curso) {
        alert("Elige un curso");
      }
      if (!materia) {
        alert("Escoge alguna materia");
      }
    }

    if(e.target.matches("#botonReestablecerSuperior")){
      $formulario.reset() 
    }

    if(e.target.matches("#botonReestablecerMedio")){
      $formularioMedio.reset() 
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
