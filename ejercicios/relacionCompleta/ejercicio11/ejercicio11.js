document.addEventListener("DOMContentLoaded",()=>{
    document.addEventListener("mouseover",(e)=>{
        if(e.target.matches("p")){
            $hijo = e.target.children[0];
            $hijo.style.display = "block";
        }
    })
})