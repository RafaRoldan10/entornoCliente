document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("boton").addEventListener("click",()=>{
        $parrafos = document.querySelectorAll("p");
        $parrafos.forEach((parrafo,index) => {
            setTimeout(() => {
                parrafo.style.display ="block";
            }, index * 3000);
        })
    })
})

