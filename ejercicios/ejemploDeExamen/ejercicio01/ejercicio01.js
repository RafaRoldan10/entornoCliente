document.addEventListener("DOMContentLoaded",inicializar);

function inicializar(){
    document.addEventListener("click",(e)=>{
        if(e.target.matches("#Enviar1")){
            formulario = document.querySelector("form");
            var correctoAveria = false;
            var correctoRep = false;
            for (let i = 0; i < formulario.elements.length; i++) {
                var elemento = formulario.elements[i];
                if (elemento.type == "checkbox") {
                  if (elemento.checked) {
                    console.log(elemento.value);
                    correctoAveria = true;
                  }
                }
              }
              for (let i = 0; i < formulario.elements.length; i++) {
                var elemento = formulario.elements[i];
                if (elemento.type == "radio") {
                  if (elemento.checked) {
                    console.log(elemento.value);
                    correctoRep = true;
                  }
                }
              }
            if(document.querySelector("#nombre1").value === ""){
                alert("El nombre no puede estar vacio");
            }
            if(document.querySelector("#apellido1").value === ""){
                alert("El apellido no puede estar vacio");
            }
            if(document.querySelector("#telefono").value === ""){
                alert("El telefono no puede estar vacio");
            }
            if(document.querySelector("#numserie").value === ""){
                alert("El numero de serie no puede estar vacio");
            }
            if(!correctoAveria){
                alert("Escoge una averia");
            }
            if(!correctoRep){
                alert("Escoge un tipo de reparacion");
            }

            if(!(/^[_][0-9]{3}[A-Z]{1}[a-z]{1}[_]$/.test(document.getElementById("password").value))){
                alert("Ejemplo de contraseña: _000Aa_" );
            }
        
        }

        if(e.target.matches("textarea")){
            e.target.style.backgroundColor = "black";
            e.target.style.color = "white";
        }

        if(e.target.matches("#portatil")){
            marca = document.createElement("input");
            marca.type = "text";
            marca.placeholder = "Marca...";
            modelo = document.createElement("input");
            modelo.type = "text";
            modelo.placeholder = "Modelo...";
            document.querySelector("#clave").insertAdjacentElement("beforebegin",marca);
            document.querySelector("#clave").insertAdjacentElement("beforebegin",modelo);
        }
    })

    document.addEventListener("submit",(e)=>{
        e.preventDefault();
    })
}
