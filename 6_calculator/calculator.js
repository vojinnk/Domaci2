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

document.addEventListener("keyup",keyPressed);

var entry = document.getElementById("entry");
var calculated=true;
var dot = false;

function calculator(key,value){
    if(key!=="equal" && key!=="c"){
        if(entry.innerText.length>=80){
            alert("too many characters");
            return; 
        }
        if(key!=="plus" && key!=="minus" && key!=="mul" && key!=="divide"){
            //console.log(e.target);
            
        if(calculated===true){
            calculated=false;
            entry.innerText= value;
        }
        else{
            entry.innerText+= value;
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
                entry.innerText=newRes + value;
            }else{
                entry.innerText+=value;
            }
        }
    }else {
        if(key==="c"){
            //if we want clear then use this
            if(calculated===true){
                entry.innerText="";
                calculated=false;
            }//if you want to do back use tthis
            else{
                entry.innerText=entry.innerText.slice(0,length-1);
            }
        }
        if(key==="equal"){
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
function clicked(e){
    e.stopPropagation();
    //if you want to reset to new calculation every time uncoment this below;
    /*if(calculated===true){
        entry.innerText="";
        calculated=false;
    }*/
   
    //console.log(key!=="equal" && key!=="c");
    calculator(e.target.id,e.target.innerText);
    
}

function keyPressed(e){
   // console.log(e.key)
    switch (e.key){
        case "0":
            calculator("zero",e.key);
            break;
        case "1":
            calculator("one",e.key);
            break;

        case "2":
            calculator("two",e.key);
            break;
        case "3":
            calculator("three",e.key);
            break;
        case "4":
            calculator("four",e.key);
            break;
        case "5":
            calculator("5",e.key);
            break;
        
        case "6":
            calculator("six",e.key);
            break;
        case "7":
            calculator("seven",e.key);
            break;

        case "8":
            calculator("eight",e.key);
            break;
        case "9":
            calculator("nine",e.key);
            break;          
        case ".":
            calculator("dot",e.key);
            break;
        case "+":
            calculator("plus",e.key);
            break;
        case "-":
            calculator("minus",e.key);
            break;
        case "*":
            calculator("mul",e.key);
            break;
            
        case "/":
            calculator("divide",e.key);
            break;
        case "=":
        case "Enter":
            calculator("equal","=");
            break;
        case "C":
        case "c":
        case "Delete":
        case "Backspace":    
            calculator("c","c");
            break;
        default: 
            console.log(e.key)
    }
}

