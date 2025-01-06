document.addEventListener("DOMContentLoaded",inicializar);

function inicializar(){
    document.addEventListener("click",(e)=>{
        if(e.target.matches("#boton1")){
            document.body.style.backgroundColor = "red";
        }

        if(e.target.matches("#boton2")){
            $ta = document.querySelector("textarea");
            if($ta.classList.contains("visibleConColor")){
                $ta.classList.remove("visibleConColor");
            }
            $ta.classList.add("visible");
            $ta.value = "";
        }

        if(e.target.matches("#boton3")){
            $ta = document.querySelector("textarea");
            if($ta.classList.contains("visible")){
                $ta.classList.remove("visible");
            }
            $ta.classList.add("visibleConColor");
            $ta.value = "Estoy dentro del cuadro de texto";
        }

        if(e.target.matches("#boton4")){
            longitud = document.querySelector("textarea").value.length;
            frase = document.querySelector("textarea").value;
            fraseRetornar = "";
            for(let i =longitud - 1;  i >= 0; i--){
                fraseRetornar += frase[i];
            }
            document.querySelector("textarea").value = fraseRetornar;

        }

        if(e.target.matches("#boton5")){
            longitud = document.querySelector("textarea").value.length;
            parrafo = document.createElement("p");
            parrafo.innerHTML = "La longitud es " + longitud;
            document.querySelector("textarea").insertAdjacentElement("afterend",parrafo);
        }
    })
}