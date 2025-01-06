var d = document;

d.addEventListener("DOMContentLoaded", inicializar);


function inicializar() {
  $parrafos = d.querySelectorAll("p");
  d.addEventListener("click", (e) => {
    
    console.log(e.target);
    if (e.target === ($parrafos[0])) {
      $parrafos[0].style.color = "red"
      $parrafos[1].style.color = "black";
      $parrafos[2].style.color = "black";
    }
    if (e.target === ($parrafos[1])) {
    
      $parrafos[0].style.color = "black";
      $parrafos[1].style.color = "blue";
      $parrafos[2].style.color = "black";
    }
    if (e.target === ($parrafos[2])) {
      
      $parrafos[0].style.color = "black";
      $parrafos[1].style.color = "black";
      $parrafos[2].style.color = "green";
    }
  })
}
