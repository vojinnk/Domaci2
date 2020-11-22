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
var plusBox = document.querySelector("#newBox");
//console.log(plusBox);
plusBox.addEventListener("click",function(){
    addBox();
});


for(let i=0;i<eval(userEntry);i++){
    addBox();
}
function addBox(){
    var newBox = document.createElement("div");
    newBox.classList.add("box");
    var container = document.querySelector(".container");
    newBox.innerHTML="<span></span>\n<i class=\"material-icons close\" >close</i>";
    newBox.addEventListener("click",clicked,{capture: false});
    //console.log(newBox.lastElementChild);
    newBox.lastElementChild.addEventListener("click",removeBox);
    container.appendChild(newBox);
  
    
}


function removeBox(e){
    e.stopPropagation();
    //console.log(e.target);
    var x = e.target.parentElement;
    x.parentElement.removeChild(x);
    palindrome();
}


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
   if(e.target.classList.contains("material-icons") ) return;
    //console.log(e.eventPhase);
    
    var active=document.querySelectorAll(".active");
    if(active.length!==0){
        active[0].classList.remove("active");
    }
    
    //console.log(e.target.nodeName);
    if(e.target.nodeName==="DIV") e.target.classList.add("active");
    else e.target.parentElement.classList.add("active");
    var par=e;
    
    document.addEventListener("keyup",inputF);
}
function inputF(e){
    //console.log(e);
    var active = document.querySelector(".active");
    if((e.keyCode >= 65 && e.keyCode < 91) || e.keyCode===32){
        
        //console.log(active);
        active.firstChild.innerText=e.key;
        palindrome();
        //active.innerHTML= "<span>"+e.key+"</span>";
       // active.innerHTML+="<i class=\"material-icons close\" >close</i>";
        
       // console.log(active);
        
    }else if(e.keyCode===8){
        active.firstChild.innerText="";
        palindrome();
    }
    else{
        alert("Wrong input");
        return;
    }
    active.classList.remove("active");
    document.removeEventListener("keyup",inputF);
}
//provjerava samo za unijete elemente
function palindrome(){
    var all = Array.from(document.querySelectorAll("span"));
    var allS =[];
    all.forEach(elem=>{
        if(elem.textContent!==""){
            allS.push(elem.textContent);
        }
    })
    //console.log(checkPalindrome(allS));
    var infoPalindrome =document.querySelector("#infoPalindrome");
    if(checkPalindrome(allS)){
        console.log("palindrome");
        infoPalindrome.innerText="This text is palindrome";
    }else{
        infoPalindrome.innerText="This text is not palindrome";
    
    } 
    
}
function checkPalindrome(inputString){
    
    var charrArr=[];
    inputString.forEach(elem=>{
        if(elem!==" "){
            charrArr.push(elem.toLowerCase());
        }
    })
    console.log(charrArr);
   
    for(let i=0;i<(charrArr.length/2);i++){
        if(charrArr[i]!==charrArr[charrArr.length-i-1]){
            //console.log(charrArr[i]);
            //console.log(charrArr[charrArr.length-(i+1)]);
            return false
        }
    }
    return true
}
