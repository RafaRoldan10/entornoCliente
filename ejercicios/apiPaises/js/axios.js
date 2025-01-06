const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

    const getAll = async () => {
        try {
            let respuesta = await axios.get("http://localhost:5555/paises"),
                json = await respuesta.data;
    
            console.log(json);
    
            json.forEach((el) => {
                $template.querySelector(".nombre").textContent = el.nombre;
                $template.querySelector(".capital").textContent = el.capital;
                $template.querySelector(".edit").dataset.id = el.id;
                $template.querySelector(".edit").dataset.nombre = el.nombre;
                $template.querySelector(".edit").dataset.capital = el.capital;
                $template.querySelector(".delete").dataset.id = el.id;
    
                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            });
    
            $table.querySelector("tbody").appendChild($fragment);
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            $table.insertAdjacentHTML(
                "afterend",
                `<p><b>Error ${err.status}: ${message}</b></p>`
            );
        }
    };
    
    d.addEventListener("DOMContentLoaded", getAll);
    
    d.addEventListener("submit", async (e) => {
        if (e.target === $form) {
            e.preventDefault();
    
            if (!e.target.id.value) {
                //Create - POST
                try {
                    let options = {
                            method: "POST",
                            headers: {"Content-type": "application/json; charset=utf-8"},
                            data: JSON.stringify({
                                nombre: e.target.nombre.value,
                                capital: e.target.capital.value,
                                })
                            };
                    let respuesta = await axios("http://localhost:5555/paises", options);
                    let json = await respuesta.data;
    
                    location.reload();
                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    $form.insertAdjacentHTML(
                        "afterend",
                        `<p><b>Error ${err.status}: ${message}</b></p>`
                    );
                }
            } else {
                //Update - PUT
                try {
                    let options = {
                            method: "PUT",
                            headers: {"Content-type": "application/json; charset=utf-8"},
                            data: JSON.stringify({
                                nombre: e.target.nombre.value,
                                capital: e.target.capital.value,
                                }),
                            };
                        let respuesta = await axios(`http://localhost:5555/paises/${e.target.id.value}`,options );
                        let json = await respuesta.data;
    
                    location.reload();
                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    $form.insertAdjacentHTML(
                        "afterend",
                        `<p><b>Error ${err.status}: ${message}</b></p>`
                    );
                }
            }
             //resetear los campos del formulario una vez editado un registro
             $form.modulo.value=null;
             $form.profesor.value=null;
             $form.id.value=null;
        }
    });
    
    d.addEventListener("click", async (e) => {
        if (e.target.matches(".edit")) {
            $titulo.textContent = "Editar pais";
            $form.nombre.value = e.target.dataset.nombre;
            $form.capital.value = e.target.dataset.capital;
            $form.id.value = e.target.dataset.id;
        }
    
        if (e.target.matches(".delete")) {
            let isDelete = confirm(
                `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
            );
    
            if (isDelete) {
                //Delete - DELETE
                try {
                    let options = {
                            method: "DELETE",
                            headers: {"Content-type": "application/json; charset=utf-8"},
                            };
                        let respuesta = await axios(`http://localhost:5555/paises/${e.target.dataset.id}`,options);
                        let json = await respuesta.data;
    
                    location.reload();
                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    alert(`Error ${err.status}: ${message}`);
                }
            }
        }
    });