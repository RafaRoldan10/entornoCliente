(()=> {
    const  d= document,
           $xhr = d.getElementById("xhr"),
           $fragmento = d.createDocumentFragment();
//1er paso

    const xhr = new XMLHttpRequest();
    console.log(xhr);

//Segundo paso -- Crear Eventos
     
    xhr.addEventListener("readystatechange",(e) => {
        //console.log(xhr.readyState);

        if(xhr.readyState !== 4){
            return;
        }

        if(xhr.status >= 200 && xhr.status < 300){
            //$xhr.innerHTML= xhr.responseText;
            let json = JSON.parse(xhr.responseText);
            //console.log(json);

            json.forEach(element => {
                const $li = d.createElement("li");
                $li.innerHTML = "Barrio: " + element.barrio + " Calle: " + element.calle + " Telefono: " + element.telefono;
                $fragmento.appendChild($li);
            });

            $xhr.appendChild($fragmento);
        }
        else{
            let mensaje = xhr.statusText || "Ha ocurrido un error";
            $xhr.innerHTML =`Codigo: ${xhr.status} --Mensaje: ${mensaje}`;
        }

    })

//Tercer paso -- Abrir peticion
    xhr.open("GET",'https://datos.vigo.org/data/deportes/ins-complejos.json');

//Cuarto paso -- Enviar peticion
    xhr.send();
})();