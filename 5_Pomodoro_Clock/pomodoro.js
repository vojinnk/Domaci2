


var pomodoro=document.querySelector("#pomodoro");
var short =document.querySelector("#short");
var long =document.querySelector("#long");
var active=document.querySelector(".active");
pomodoro.addEventListener("click",changeF);
short.addEventListener("click",changeF);
long.addEventListener("click",changeF);

function setTime(active){
    //console.log("test");
    var min = document.querySelector("#minutes");
    var sec = document.querySelector("#seconds");
    
    if(active===pomodoro){
        min.innerText="25";
        sec.innerText="00";
        
    }else if(active===short){
        min.innerText="05";
        sec.innerText="00";
    
    }else if(active===long){
        min.innerText="10";
        sec.innerText="00";

    }
}
setTime(active);
function changeF(e){
    e.stopPropagation();
    setTime(e.target);
    active.classList.remove("active");
    e.target.classList.add("active");
    active=e.target;
}