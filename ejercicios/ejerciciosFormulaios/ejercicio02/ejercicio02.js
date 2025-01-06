var d = document;

d.addEventListener("DOMContentLoaded", () => {
    var $area = d.querySelector("textarea");
    $area.addEventListener("keydown", (e) => {
        var longitud = $area.value.length;
        console.log(longitud);
        if(e.key == "ArrowLeft" || e.key =="ArrowRight"){
            return;
        }
        if(e.key == "Delete" || e.key == "Backspace" ){
            if(longitud > 0){
                longitud--;
            }
        }
        else{
            if(longitud > 100){
                alert("Ya has escrito mas de 100");
                e.preventDefault();
            }else{
                longitud++;
            }
        }
    });
});

