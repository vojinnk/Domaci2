/*var container = document.querySelector(".container");
container.addEventListener("click",clicked);
var equal = document.getElementById("equal");
equal.addEventListener("click",calculate)
*/
//console.log(entry);
var buttons = document.querySelectorAll(".button");
buttons.forEach(elem=>{
    elem.addEventListener("click",clicked);
})
var entry = document.getElementById("entry");
var calculated=true;
var dot = false;
function calculator(input){
    
}

function clicked(e){
    e.stopPropagation();
    //if you want to reset to new calculation every time uncoment this below;
    /*if(calculated===true){
        entry.innerText="";
        calculated=false;
    }*/
   
    //console.log(e.target.id!=="equal" && e.target.id!=="c");
    if(e.target.id!=="equal" && e.target.id!=="c"){
        if(entry.innerText.length>=96){
            alert("too many characters");
            return; 
        }
        if(e.target.id!=="plus" && e.target.id!=="minus" && e.target.id!=="mul" && e.target.id!=="divide"){
            //console.log(e.target);
            
        if(calculated===true){
            calculated=false;
            entry.innerText= e.target.innerText;
        }
        else{
            entry.innerText+= e.target.innerText;
        }
            
        }else {
            if(calculated===true) calculated=false;
            //cant put operand at position 0
            if(entry.innerText.length===0){
                return;
            }
           // console.log(entry.innerText[entry.innerText.length-1]);
            if(entry.innerText[entry.innerText.length-1]==="+" || entry.innerText[entry.innerText.length-1]==="-" || 
            entry.innerText[entry.innerText.length-1]==="*" || entry.innerText[entry.innerText.length-1]==="/" ){
                var newRes= entry.innerText.slice(0,entry.innerText.length-1);
                entry.innerText=newRes + e.target.innerText;
            }else{
                entry.innerText+=e.target.innerText;
            }
        }
    }else {
        if(e.target.id==="c"){
            //if we want clear then use this
            if(calculated===true){
                entry.innerText="";
                calculated=false;
            }//if you want to do back use tthis
            else{
                entry.innerText=entry.innerText.slice(0,length-1);
            }
        }
        if(e.target.id==="equal"){
            //if last entry is operand, we make alert
            if(entry.innerText[entry.innerText.length-1]==="+" || entry.innerText[entry.innerText.length-1]==="-" || 
            entry.innerText[entry.innerText.length-1]==="*" || entry.innerText[entry.innerText.length-1]==="/" ){
                alert("Your input is not finished, remove operand or add number after it!!")
            }else if(entry.innerText.length===0){
                return;
            }

            else{
                
                var res = eval(entry.innerText);
                entry.innerText=res;
                calculated=true;
            }
        }
    }
}


