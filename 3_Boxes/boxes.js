var boxes;
var x;
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
    newBox.innerHTML="<i class=\"material-icons close\" >close</i>";
    newBox.addEventListener("click",clicked,{capture: false});
    container.appendChild(newBox);
  
    
}

/*
function removeBox(e){
    
}
function boxFunctionality(){
    boxes = document.querySelectorAll(".box");
    x = document.querySelectorAll(".close");
    boxes.forEach(elem=>{
        elem.addEventListener("click",clicked);
    })
    
    x.forEach(elem => {
        elem.addEventListener("click",removeBox);
    })
    console.log(x);
}*/


document.addEventListener("click", function(e){
    //console.log(e.target);
    var active=document.querySelectorAll(".active");
    if(active.length!==0){
        active[0].classList.remove("active");
    }
})


function clicked(e){
    e.stopPropagation();
   //console.log(e.target.classList.contains("material-icons"));
   if(e.target.classList.contains("material-icons")) return;
    //console.log(e.eventPhase);
    

    var active=document.querySelectorAll(".active");
    if(active.length!==0){
        active[0].classList.remove("active");
    }
  
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
        active.innerHTML+="<i class=\"material-icons close\" >close</i>";
        
    }else{
        alert("Wrong input");
        return;
    }
    active.classList.remove("active");
    document.removeEventListener("keyup",inputF);
}