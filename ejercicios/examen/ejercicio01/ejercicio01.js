document.addEventListener("DOMContentLoaded",inicializar);

function inicializar(){
    document.addEventListener("click",(e)=>{
        if(e.target.matches("#enviar")){
            var nombreCorrecto, identificadorCorrecto, especieCorrecto, tipoCorrecto, cuidadoCorrecto = false;
            if(!(/^[0-5]{2}[A-Z]{3}[_-]{1}[a-z]{2}$/.test(document.getElementById("idPlanta").value))){
                alert("El identificador no es correcto");
            }
            else{
                identificadorCorrecto = true;
            }

            if(document.getElementById("nombrePlanta").value === ""){
                alert("El nombre no puede estar vacío");
            }
            else{
                nombreCorrecto = true;
            }

            if(document.getElementById("especiePlanta").value === ""){
                alert("La especie no puede estar vacío");
            }
            else{
                especieCorrecto = true;
            }

            if(document.getElementById("arbol").checked || document.getElementById("flor").checked || document.getElementById("arbusto").checked){
                tipoCorrecto = true;
            }
            else{
                alert("Seleciona un tipo");
            }

            if(document.getElementById("riegoRegular").checked || document.getElementById("sombra").checked || document.getElementById("fertilizacion").checked){
                cuidadoCorrecto = true;
            }
            else{
                alert("Seleciona un cuidado");
            }

            if(nombreCorrecto && identificadorCorrecto && especieCorrecto && tipoCorrecto && cuidadoCorrecto){
                console.log("Nombre: " + document.getElementById("nombrePlanta").value);
                console.log("Identificador: " + document.getElementById("idPlanta").value);
                console.log("Especie: " + document.getElementById("especiePlanta").value);
                console.log("Observaciones: " + document.querySelector("textarea").value);
                $form = document.querySelector("form");
                var stringTipo="";
                for (let i = 0; i < $form.elements.length; i++) {
                    var elemento = $form.elements[i];
                    if (elemento.type == "radio") {
                        if (elemento.checked) {
                            stringTipo +=  elemento.value + " ";
                            
                        }
                    }
                }
                console.log("Tipo: " + stringTipo);
                var stringCuidado="";
                for (let i = 0; i < $form.elements.length; i++) {
                    var elemento = $form.elements[i];
                    if (elemento.type == "checkbox") {
                        if (elemento.checked) {
                            stringCuidado +=  elemento.value + " ";
                            
                        }
                    }
                }
                console.log("Cuidados: " + stringCuidado);
                console.log("Nivel de luz: " + document.querySelector("select").value);

            }

        }

        if(e.target.matches("#limpiar")){
            document.querySelector("form").reset(); 
            document.querySelector("#media").selected = true;
        }

        if(e.target.matches("#flor") ||e.target.matches("#arbol") || e.target.matches("#riegoRegular") || e.target.matches("#arbusto") || e.target.matches("#sombra") || e.target.matches("#fertilizacion") || e.target.matches("#nivelLuz")){
            if(document.querySelector("textarea").value === ""){
                document.querySelector("span").style.display = "block";
            }
        }
    })



    document.addEventListener("submit",(e)=>{
        e.preventDefault();
    })

    document.addEventListener("keyup",(e)=>{
        frase = document.querySelector("textarea").value;
        if(!(/^[0-9a-zA-Z\s]*$/.test(document.querySelector("textarea").value))){
            fraseRetornar = "";
            for(let i = 0; i < frase.length -1; i++){
                fraseRetornar += frase[i];
            }
            document.querySelector("textarea").value = fraseRetornar;
            alert("Has escrito un caracter no valido en el textarea");

            
        }
    })
}