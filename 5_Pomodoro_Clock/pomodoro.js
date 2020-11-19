


var pomodoro=document.querySelector("#pomodoro");
var short =document.querySelector("#short");
var long =document.querySelector("#long");
var active=document.querySelector(".active");
var title = document.title;
var audioFile = new Audio('./alarm-frenzy-493.mp3');

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

var countdown;
function timer(seconds){
    var ms = seconds*1000;
    var now = Date.now();
    var end = Date.now()+ms;

    countdown = setInterval(()=>{
        timeLeft = Math.round((end-Date.now())/1000);
        displayTime(timeLeft);
        titleTime();
        
        //console.log(timeLeft);
        if(timeLeft<=0){
            //console.log("Succes")
           // console.log(timeLeft);
           audioFile.play();
            clearInterval(countdown);
            return;
        }
    },1000);
    

}

function startTime(e){
    e.stopPropagation();
    if(timeLeft===0){
        setTime(active);
    }
    timer(timeLeft);
}

function resetTime(e){
    stopTime();
    setTime(document.querySelector(".active"));
    document.title=title;

}

function stopTime(){
    
    clearInterval(countdown);
    displayTime(timeLeft);

}