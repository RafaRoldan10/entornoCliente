let random = Math.floor(Math.random() * 100);

console.log(random);
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelector("button").addEventListener("click",()=>{
    var frase = document.querySelector("input").value;
    var fraseMinusculas = frase.toLowerCase();
    var fraseDevolver = "";
    for (let i = 0; i < frase.length; i++) {
      if(random == 25){
        fraseDevolver += frase[i];
      }
  
      if(random > 25){
        let resto = random%25;
        if(fraseMinusculas.charCodeAt(i) + resto > 122){
          if(frase[i] === frase[i].toUpperCase()){
            fraseDevolver += (String.fromCharCode(97+(fraseMinusculas.charCodeAt(i))+ resto - 122)).toUpperCase();
          }
          else{
            fraseDevolver += (String.fromCharCode(97+(fraseMinusculas.charCodeAt(i))+ resto -122));
          }
        }
        else{
          if(frase[i] === frase[i].toUpperCase()){
            fraseDevolver += (String.fromCharCode(fraseMinusculas.charCodeAt(i)+ resto)).toUpperCase();
          }
          else{
            fraseDevolver += (String.fromCharCode(fraseMinusculas.charCodeAt(i)+ resto));
          }
        }
  
      }
  
      if(random < 25){
        if(fraseMinusculas.charCodeAt(i) + random > 122){
          if(frase[i] === frase[i].toUpperCase()){
            fraseDevolver += (String.fromCharCode(97+(fraseMinusculas.charCodeAt(i))+ random - 122)).toUpperCase();
          }
          else{
            fraseDevolver += (String.fromCharCode(97+(fraseMinusculas.charCodeAt(i))+ random - 122));
          }
        }
        else{
          if(frase[i] === frase[i].toUpperCase()){
            fraseDevolver += (String.fromCharCode(fraseMinusculas.charCodeAt(i)+ random)).toUpperCase();
          }
          else{
            fraseDevolver += (String.fromCharCode(fraseMinusculas.charCodeAt(i)+ random));
          }
        }
      }
    }
    alert(fraseDevolver);
  })
  
})
