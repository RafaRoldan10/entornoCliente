document.addEventListener("DOMContentLoaded",inicializar);

function inicializar(){
    document.addEventListener("click",(e)=>{
        if(e.target.matches("#invertir")){
            array = document.querySelector("p").innerHTML.split(" ");
            fraseRetornar = "";
            for(let i = array.length - 1; i >= 0; i--){
                fraseRetornar += array[i];
                fraseRetornar += " ";
            }
            document.querySelector("p").innerHTML = fraseRetornar;
        }

        if(e.target.matches("#crear")){
            if(document.getElementById("ocultar") == null){
                var boton= document.createElement("button");
                boton.id = "ocultar";
                boton.innerHTML = "Ocultar boton";
                e.target.insertAdjacentElement("afterend",boton);
            }
            
        }

        if(e.target.matches("#ocultar")){
            e.target.parentNode.removeChild(e.target);
        }

        if(e.target.matches("#convertir")){
            document.querySelector("select").style.display = "block";
        }
    })

    document.addEventListener("change",(e)=>{
        if(e.target.matches("select")){
            if(e.target.value === "Minusculas"){
                frase = document.querySelector("p").innerHTML;
                document.querySelector("p").innerHTML = frase.toLowerCase();
            }

            if(e.target.value === "Mayusculas"){
                frase = document.querySelector("p").innerHTML;
                document.querySelector("p").innerHTML = frase.toUpperCase();
            }
        }
    })

    document.addEventListener("keydown",(e)=>{
        if(e.key === "F12"){
            document.querySelector("p").style.color = "blue";
            document.querySelector("p").style.backgroundColor = "yellow";
        }
    })

    
}