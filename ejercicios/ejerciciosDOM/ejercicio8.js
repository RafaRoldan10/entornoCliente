function cambia(){
    var enlace = document.querySelector("a");
    console.log(enlace.href);
    if (enlace.href === "https://www.marca.com/") {
        enlace.innerText = "as";
        enlace.href = "https://www.as.com/";
    } else if (enlace.href === "https://www.as.com/") { // Comilla adicional corregida aquí
        enlace.innerText = "marca";
        enlace.href = "https://www.marca.com/";
    }
}
