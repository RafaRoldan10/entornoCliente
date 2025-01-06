document.addEventListener("DOMContentLoaded", inicializar);

function inicializar(){
    document.addEventListener("mousemove",(e) => {
        let x = e.clientX;
        let y = e.clientY
        $div = document.querySelector(".contenedor");
        $div.style.backgroundColor = "blue";
        $div.innerText = "X: " + x + " Y: " + y;
    })

    document.addEventListener("keydown",(e) =>{
        $div = document.querySelector(".contenedor");
        $div.style.backgroundColor = "red";
        $div.innerText = "Tecla presionada: " + e.key + " ascii: " + e.key.charCodeAt(0);;
    })
}