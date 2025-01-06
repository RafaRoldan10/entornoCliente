const   d = document,
        $table = d.querySelector(".crud-table"),
        $form = d.querySelector(".crud-form"),
        $titulo = d.querySelector(".crud-titulo"),
        $template = d.getElementById("crud-template").content,
        $fragment = d.createDocumentFragment();

        const ajax = (options) => {
            /*destructuración del objeto donde cada variable almacenará los datos del objeto con el mismo nombre,
            teniendo en cuenta que success y error van a ser funciones que se ejecutarán en caso de éxito o error */
            let {url,method,success,error,data} = options;
            //instanciamos el objeto HttpRequest (recordar 1º paso)
            const xhr = new XMLHttpRequest();

            //configuramos el evento con el listener (2º paso)
            /*validamos que la respuesta a la petición haya terminado y que el estado de la
            respuesta a la petición sea válida, con lo cual cuando se produzca el evento,
            se ejecutará la arrow function asociada al evento*/
            xhr.addEventListener("readystatechange", e => {
                if (xhr.readyState !== 4) return;

                if (xhr.status >= 200 && xhr.status < 300) {
                    // convertimos a formato json la respuesta.
                    let json = JSON.parse(xhr.responseText);
                    //ejecutamos la funcion success con el parámetro de la respuesta convertida a json
                    success(json);
                } else {
                    // operador de tipo OR por por si la propiedad statusText viene vacía
                    let message = xhr.statusText || "Ocurrió un error";
                    // ejecutamos la función error para mostrar el error producido
                    error(`Error ${xhr.status}: ${message}`);
                }
            });

            /* abrir la peticion (3º paso), en este caso le estamos diciendo además, 
            con un operado de tipo or que si el usuario no especifica el 
            método apliquemos GET por defecto*/
            xhr.open(method || "GET", url);
            /* añadir cabecera a la petición, ya que toda petición tiene cuerpo y cabecera
                En la cabecera se indica el tipo de contenido, en este caso, espera un objeto
                json, por eso se usa application/json, con el formato (atributo,valor)
                Si no hubiera cabecera el json-server no funcionaría, porque esperaría
                texto plano y daría error porque json-server manda un json en formato utf-8
             */
            xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
            // enviar la respuesta (4º paso)
            /* en este caso, vamos a enviar la información como cadena de texto, 
            para lo que usamos el método stringigy, es decir, hace lo contrario que el
            método json, con lo cual el parámetro data ya será un objeto javascript en
            formato de texto. Enviamos los datos con el parámetro data
             */
            xhr.send(JSON.stringify(data));
        }

        const getAll = () => {
            /*ejecutar la función ajax que servirá para cualquier petición, con sus parámetros:
            un objeto que en nuestro caso se llamaba options con :
            - método de acceso ( que en nuestro caso omitiremos porque ya le habíamos
                                dicho en la apertura de la petición con xhr.open(method || "GET", url)
                                que si omitíamos el método usáramos el método GET)
            - url de los datos a consultar
            - lo que queremos hacer en caso de éxito (en nuestro caso llamamos a la función success)
            - lo que queremso hacer en caso de error (en cuentro caso llamamos a la función error)
            - Los datos  a consultar, si queremos todos lo datos, podemos poner NULL 
                o simplemente omitirlos como haremos nosotros
            En definitiva, en este caso vamos a mandar solo en la función ajax tres parámetros,
            omitiendo los que no nos hacen falta:
                - url de los datos a consultar
                - función para implementar en caso de éxito
                - función para implementar en caso de error
             */
            
            ajax({
                url: "http://localhost:5555/paises",
                //no es necesario el método, ya que por defecto coge GET
                //method:"GET",
                success: (respuesta) => {
                    //console.log(respuesta);
                    /*recorremos cada uno de los elementos que trae la respuesta y los
                    mostramos mediante el template de html*/
                    respuesta.forEach(el => {
                        //insertamos el contenido del template en los campos del template correspondientes
                        $template.querySelector(".nombre").textContent = el.nombre;
                        $template.querySelector(".capital").textContent = el.capital;
                        /* creamos un data-atribute (dataset) para asignarle los datos correspondientes del botón 
                        editar, el id, modulo y profesor, para así poder después saber el contenido de los registros 
                        a editar en el formulario */
                        $template.querySelector(".edit").dataset.id = el.id;
                        $template.querySelector(".edit").dataset.nombre = el.nombre;
                        $template.querySelector(".edit").dataset.capital= el.capital;
                        /* igualmente, crear data-atribute para el botón eliminar, para tener el id del elemento
                        a eliminar*/
                        $template.querySelector(".delete").dataset.id = el.id;
                        /*Como el template no se ve, clonamos el nodo del template para que se quede en memoria 
                        con su contenido incluido (por eso ponemos el parámetro a true,
                        porque false es para clonar solo la estructura, pero sin contenido)*/
                        let $clone = d.importNode($template, true);
                        //añadimos el hijo al fragmento para no estar haciendo inserciones continuas en el DOM
                        $fragment.appendChild($clone);
                    });
                    //agregamos el fragmento con todos los campos al body de la tabla
                    $table.querySelector("tbody").appendChild($fragment);
                },
                /* cuando se produzca un error, vamos a programar que aparezca un mensaje justo
                debajo de la tabla de los datos para lo que utilizaremos insertAdjacenHTML, y
                usamos afterend para que sea fuera de la tabla, es decir, una vez que termine 
                la tabla
                */
                error: (err) => {
                    //console.log(err);
                    // Insertamos el mensaje de error justo después de la tabla.
                    $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
                }//,
            /* como quiero todos los datos (registros), no tengo que especificar data, o bien, elegir null */
            //data:null
            })
        }

        d.addEventListener("DOMContentLoaded", getAll);
//evento pra detectar envío de los datos de formulario 
        d.addEventListener("submit", e => {
            //preguntamos si es el formulario quien origina el evento
            if (e.target === $form) {
                //detener la ejecución del botón, porque el procesamiento se hará por ajax
                e.preventDefault();
                /*si el value del elemento oculto del formulario es vacío ejecutaremos
                    la acción de crear, mientras que si trae un id haremos la función 
                    de editar con ese id 
                    */
                if (!e.target.id.value) {
                    //Creación de nuevo módulo con la función ajax  mediante el método POST
                    ajax({
                        //en este caso tanto method como data son obligatorios
                        url: "http://localhost:5555/paises",
                        method: "POST",
                        //cuando la petición sea exitosa, recargamos el navegador para mostrar el alta
                        success: (respuesta) => location.reload(),
                        // en caso de error insertamos el mensaje de error detrás de la tabla
                        error: (err) => {
                            $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`)  
                            }, 
                        /* datos del formulario enviados para el alta del módulo en la petición ajax.
                            Nota:  No tenemos que mandar ningun id porque json-server lo hace 
                            automáticamente como un autoincrementon*/
                        data: {
                            nombre: e.target.nombre.value,
                            capital: e.target.capital.value
                        }
                    });
                } else {
                    //Ejecución de la función ajax para actualizar con el método PUT
                    ajax({
                        
                        /*en la url le pasamos el id del campo oculto del formulario, 
                        en el que cargamos antes en el dataset el id a tratar. Igualmente,
                        tanto method como data son obligatorios */
                        url: `http://localhost:5555/paises/${e.target.id.value}`,
                        method: "PUT",
                        //recargamos después de la actualización
                        success: (respuesta) => {location.reload()},
                        error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
                        data: {
                            nombre: e.target.nombre.value,
                            capital: e.target.capital.value
                        }
                    });
                    
                }
            
           //resetear los campos del formulario una vez editado un registro
            $form.nombre.value=null;
            $form.capital.value=null;
            $form.id.value=null;
            }
        });

        /* evento click para cada uno de los botones de editar y eliminarm(delegación de eventos)*/
        d.addEventListener("click", e => {
            /*Si el origen del click es el botón editar, cargamos los datos 
            en el formulario, para ello preguntamos si el origen coincide con la clase .edit*/
            if (e.target.matches(".edit")) {
                $titulo.textContent = "Editar pais";
                $form.nombre.value = e.target.dataset.nombre;
                $form.capital.value = e.target.dataset.capital;
                $form.id.value = e.target.dataset.id;
            }
        /*Si el origen del click es el botón editar, cargamos los datos 
    en el formulario, para ello preguntamos si el origen coincide con la clase .delete*/
            if (e.target.matches(".delete")) {
                //preguntamos si realmene se desea eliminar el registro
                let isDelete = confirm(`¿Estás seguro de eliminar el ${e.target.dataset.id}?`);

                if (isDelete) {
                    //Delete - DELETE
                    ajax({
                        url: `http://localhost:5555/paises/${e.target.dataset.id}`,
                        method: "DELETE",
                        success: (respuesta) => location.reload(),
                        error: (err) => alert(err)
                    });
                }
            }
        })