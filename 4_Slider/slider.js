

var arrowLeft = document.querySelector(".left");
//console.log(arrowLeft);
var arrowRight = document.querySelector(".right");
//console.log(arrowRight);
arrowLeft.addEventListener("click",changeImage)
arrowRight.addEventListener("click",changeImage)

document.addEventListener("keyup",changeImage);
var hover = false;
var imgDiv = document.querySelector(".image-container");
console.log(imgDiv);
var isFull = false;

imgDiv.addEventListener("mouseenter",mouseIn);
imgDiv.addEventListener("mouseleave",mouseOut);
imgDiv.addEventListener("click",fullScreen);

function mouseIn(e) {
    hover=true;
}
function mouseOut(e){
    hover=false;
}

function changeImage(e){
    e.stopPropagation();
    //console.log(e);
    var direction;
    if(e.type==="click"){
        if(e.target.id === "l") direction=-1;
        else direction=1;
    }else if(e.type==="keyup"){
        if(hover){
            if(e.key==="ArrowRight"){
                direction===-1;
            }else if(e.key==="ArrowLeft"){
                direction===1;
            }
        }else if(isFull){
            if(e.key==="ArrowRight"){
                direction===-1;
            }else if(e.key==="ArrowLeft"){
                direction===1;
            }
        }
        else return;
    }

    
    
   var images = document.querySelectorAll("img");

    var current =getCurrent(images);
    if(direction===-1){
        if(current===0){
            var newC = images.length-1;
            images[current].classList.remove("active");
            images[newC].classList.add("active");
        }else{
            
            var newC = current-1;
            images[current].classList.remove("active");
            images[newC].classList.add("active");

        }
    }else{
        if(current===images.length-1){
            var newC = 0;
            images[current].classList.remove("active");
            images[newC].classList.add("active");
        }else{
            var newC = current +1;
            images[current].classList.remove("active");
            images[newC].classList.add("active");
        }
    }
    
    
}

function getCurrent(images){
   for(let i=0;i<images.length;i++){
       if(images[i].classList.contains("active")){
           return i;
       }
   }
}

function fullScreen(e){
    e.stopPropagation();
    isFull=true;
    var main = document.getElementById("main");
    main.classList.replace("container","fullScr");

}
var close = document.getElementById("close");
close.addEventListener("click",closeFS);
function closeFS(e){
    e.stopPropagation();
    isFull=false;
    var main = document.getElementById("main");
    main.classList.replace("fullScr","container")
}

