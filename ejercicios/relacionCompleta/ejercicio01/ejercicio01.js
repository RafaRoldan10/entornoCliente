var d = document;
d.addEventListener("DOMContentLoaded" , inicializar);

function inicializar(){
    d.addEventListener("click",(e)=>{
        if(e.target.matches("#boton")){
            if(d.getElementById("user").value == "admin" && d.getElementById("pass").value == "1234"){
                d.querySelector("p").innerHTML = "Bienvenidos al sistema"
            }
            else{
                d.querySelector("p").innerHTML = "Credenciales incorrectas"
            }

        }
        if(e.target.matches("#limpiar")){
            d.getElementById("user").value = "" ; 
            d.getElementById("pass").value = ""
        }
    })

    d.addEventListener("submit" , (e)=>{
        e.preventDefault();
    })
}