document.addEventListener("DOMContentLoaded",()=>{
    document.addEventListener("keydown",(e)=>{
        if(e.altKey && e.key === "F12"){
            document.querySelector("body").style.backgroundImage = "url('img/descarga.jpeg')";
        }
    })

    document.addEventListener("click",(e) =>{
        if(e.target.matches("h1")){
            document.querySelector("body").style.backgroundImage = "url('img/descarga.jpeg')";
        }
    })
})