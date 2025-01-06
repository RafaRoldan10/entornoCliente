function ordena() {
  var parrafos = document.querySelectorAll("p");
  var nuevosParrafos = [...parrafos];
  var body = document.querySelector("body");
  
  for(let i = 0; i < nuevosParrafos.length ; i++){
    for(let j = 0; j < nuevosParrafos.length ; j++){
        if(nuevosParrafos[i].innerText > nuevosParrafos[j].innerText){
            aux = nuevosParrafos[i];
            nuevosParrafos[i] = nuevosParrafos[j];
            nuevosParrafos[j] = aux;
        }
    }
  }

  parrafos.forEach(element => {
    element.parentElement.removeChild(element);
  });

  nuevosParrafos.forEach(element =>{
    body.insertAdjacentElement("afterbegin",element);
  });
}
