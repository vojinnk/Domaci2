
var userEntry="";
while(userEntry==="" || userEntry===null){
    var userEntry=prompt("Enter number of boxes","10");
    if(isNaN(userEntry) || userEntry==="" || userEntry===null){
        alert("You need to input a number!");
        userEntry=null;
    }
     
    
}
//console.log(userEntry)
var container = document.querySelector(".container");


for(let i=0;i<eval(userEntry);i++){
    addBox();
}
function addBox(){
    var newBox = document.createElement("div");
    newBox.classList.add("box");
    var container = document.querySelector(".container");
    container.appendChild(newBox);
    boxes = document.querySelectorAll(".box");
    boxFunctionality();
    
}

function boxFunctionality(){
    boxes.forEach(elem=>{
        elem.addEventListener("click",clicked);
    })
}


document.addEventListener("click", function(e){
    //console.log(e.target);
    var active=document.querySelectorAll(".active");
    if(active.length!==0){
        active[0].classList.remove("active");
    }
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