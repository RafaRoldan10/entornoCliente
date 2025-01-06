var d = document;
d.addEventListener("DOMContentLoaded", inicializar);

function inicializar() {
    d.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.matches("#boton")) {
            const nombre = d.getElementById("nombre").value;
            const opcion = d.getElementById("opciones").value;

            if (nombre !== "" && (opcion === "Hombre" || opcion === "Mujer")) {
                d.querySelector("form").insertAdjacentHTML("afterend", "Formulario correcto");
            }
            else{
                alert("Escoja un género y no deje el nombre en blanco");
            }
        }
    });

    d.addEventListener("submit", (e) => {
        e.preventDefault();
    });
}
