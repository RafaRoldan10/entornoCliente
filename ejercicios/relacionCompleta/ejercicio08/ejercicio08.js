document.addEventListener("DOMContentLoaded",inicializar);

function inicializar(){
    var $divs = document.querySelectorAll("div");
    $divs.forEach(element => {
        element.addEventListener("mouseenter",()=>{
            document.body.style.backgroundColor = element.style.backgroundColor;
        })

        element.addEventListener("mouseleave",()=>{
            document.body.style.backgroundColor = "white";
        })
    });

    
}