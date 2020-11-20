


var pomodoro=document.querySelector("#pomodoro");
var short =document.querySelector("#short");
var long =document.querySelector("#long");
var active=document.querySelector(".active");
var title = document.title;
var audioFile = new Audio('./alarm-frenzy-493.mp3');
//had problems with calling timer function multiple times!!!
var activated = false;

//console.log(title);

pomodoro.addEventListener("click",changeF);
short.addEventListener("click",changeF);
long.addEventListener("click",changeF);

var min = document.querySelector("#minutes");
var sec = document.querySelector("#seconds");

var start = document.getElementById("start");
var reset = document.getElementById("reset");
var stoped = document.getElementById("stop");
start.addEventListener("click",startTime);
stoped.addEventListener("click",function(e){
    e.stopPropagation();
    stopTime();
});
reset.addEventListener("click",resetTime);


    
var timeLeft = 25*60;


function setTime(active){
    //console.log("test");
    
    if(active===pomodoro){
        timeLeft=5;
         displayTime(timeLeft);

    }else if(active===short){
        timeLeft=12;
        displayTime(timeLeft);

    }else if(active===long){
     timeLeft=7;
     displayTime(timeLeft);

    }
}

function titleTime(){
    document.title="(" + min.innerText + ":" + sec.innerText + ") " + title;
}

setTime(active);

function displayTime(seconds){
    var m = Math.floor(seconds/60);
    var s = seconds%60;
    
    if(m < 10) min.innerText="0" + m;
    else min.innerText=""+m;
    if(s<10) sec.innerText="0"+s;
    else sec.innerText=s;
    

}

function changeF(e){
    e.stopPropagation();
    
    active.classList.remove("active");
    e.target.classList.add("active");
    active=e.target;
    resetTime(e);
}

let countdown;
function timer(seconds){
    var ms = seconds*1000;
    var now = Date.now();
    var end = Date.now()+ms;

    countdown = setInterval(()=>{
        timeLeft = Math.round((end-Date.now())/1000);
        displayTime(timeLeft);
        titleTime();
        
        //console.log(countdown);
        if(timeLeft<=0){
            //console.log("Succes")
            console.log(timeLeft);
            clearInterval(countdown);
            audioFile.play();
            
            return;
        }
    },1000);
    

}
//problem was here,with multiple click on start when timer already active!
function startTime(e){
    e.stopPropagation();

    if(activated===false){
        if(timeLeft===0){
            setTime(active);
        }
        activated=true;
        console.log(activated);
        timer(timeLeft);
    }
    else return;
}

function resetTime(e){
    
    //this feature is added so we can stop alert sound before it ends by clicking this button or stop button
    audioFile.pause();
    audioFile.currentTime = 0;

    e.stopPropagation();
    stopTime();
    setTime(document.querySelector(".active"));
    document.title=title;

}

function stopTime(){
    //this feature is added so we can stop alert sound before it ends
    audioFile.pause();
    audioFile.currentTime = 0;
    
    activated=false;
    clearInterval(countdown);
    displayTime(timeLeft);

}