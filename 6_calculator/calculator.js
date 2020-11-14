var container = document.querySelector(".container");
container.addEventListener("click",clicked);
var equal = document.getElementById("equal");
equal.addEventListener("click",calculate)

var entry = document.getElementById("entry").firstChild;
var showRes =document.getElementById("entry").lastChild;
//console.log(entry);

function clicked(e){
    
    
   // console.log(e.target.id);
   if(e.target.id==="equal")
   {   
        var result = eval(entry.innerText);
        //console.log(result);
        entry.innerText += "=" + result; 
    
   }
   else if(e.target.id === "c"){
    //console.log("probaaa");
    entry.innerText = "";
   }else {
       entry.innerText += e.target.innerText; 
   }

    
    
}
function calculate(e){
    e.stopPropagation();
     
    
}

