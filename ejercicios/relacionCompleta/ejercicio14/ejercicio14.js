var d = document;
d.addEventListener("DOMContentLoaded",()=>{
    d.addEventListener("click",(e)=>{
        if(e.target.matches("button")){
            var array = d.querySelector("textarea").value.split(" ");
            var ventana = window.open();
            ventana.document.write("Numero de palabras: " + array.length + "<br>");
            ventana.document.write("Primera palabra: " + array[0] + "<br>");
            ventana.document.write("Ultima palabra: " + array[array.length - 1]+ "<br>");
            ventana.document.write("Al revés: ");
            for (let i = array.length - 1; i >= 0; i--) {
                ventana.document.write(array[i] + " ");
            }
            array.sort();
            ventana.document.write("<br>Ordenado de la a a la z: ");
            for (let i = 0; i < array.length; i++) {
                ventana.document.write(array[i] + " ");
            }

            
            ventana.document.write("<br>Ordenadas de la z a la a: ");
            for (let i = array.length-1; i > -1; i--) {
                ventana.document.write(array[i] + " ");
            }
        }
    })
})