var boxes = document.querySelectorAll(".box");
document.addEventListener("click", function(e){
    console.log(e.target);
    
    var active=document.querySelectorAll(".active");
    if(active.length!==0){
        active[0].classList.remove("active");
    }
})

boxes.forEach(elem=>{
    elem.addEventListener("click",clicked);
})


function clicked(e){
    var active=document.querySelectorAll(".active");
    if(active.length!==0){
        active[0].classList.remove("active");
    }
    e.stopPropagation();
    //console.log(e.target);
    e.target.classList.add("active");
    var par=e;
    document.addEventListener("keyup",inputF);
}
function inputF(e){
    console.log(e);
    var active = document.querySelector(".active");
    if((e.keyCode >= 65 && e.keyCode < 91) || e.keyCode===32){
        active.innerText=e.key;
        
    }else{
        alert("Wrong input");
        return;
    }
    active.classList.remove("active");
    document.removeEventListener("keyup",inputF);
}