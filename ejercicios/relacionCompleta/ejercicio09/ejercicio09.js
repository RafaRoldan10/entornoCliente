document.addEventListener("DOMContentLoaded",inicializar);

function inicializar(){
    document.addEventListener("click",(e)=>{
        if(e.target.matches("#kms")){
            document.getElementById("metros").value = "";
        }

        if(e.target.matches("#kgs")){
            document.getElementById("gramos").value = "";
        }
        if(e.target.matches("#metros")){
            document.getElementById("kms").value = "";
        }

        if(e.target.matches("#gramos")){
            document.getElementById("kgs").value = "";
        }
        if(e.target.matches("#distancia")){
            if(document.getElementById("metros").value === ""){
                document.getElementById("metros").value = document.getElementById("kms").value * 1000;
           }
           else{
            document.getElementById("kms").value = document.getElementById("metros").value / 1000;
           }
        }

        if(e.target.matches("#peso")){
           if(document.getElementById("gramos").value === ""){
                document.getElementById("gramos").value = document.getElementById("kgs").value * 1000;
           }
           else{
            document.getElementById("kgs").value = document.getElementById("gramos").value / 1000;
           }
        }


    })
}