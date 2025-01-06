document.addEventListener("DOMContentLoaded",()=>{
    var velocidad = 0;
    document.addEventListener("keydown",(e)=>{
        if(e.key === "ArrowUp" && velocidad < 100){
            velocidad++;
        }
        if(e.key === "ArrowDown" && velocidad > 0){
            velocidad--;
        }
        document.querySelector("p").innerHTML = "Velocidad: " + velocidad;
    })
})