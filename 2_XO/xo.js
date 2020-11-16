
var boxes = document.querySelectorAll("td");

boxes.forEach(elem =>{
    elem.addEventListener("click",clicked);
})

function clicked(e){
    console.log(e.target);
    switch(e.target.id){
        case "one":
            game(1,e.target);
            break;
        case "two":
            game(2,e.target);
            break;
        case "three":
            game(3,e.target);
            break;
        case "four":
            game(4,e.target);
            break;
        case "five":
            game(5,e.target);
            break;
        case "six":
            game(6,e.target);
            break;
        case "seven":
            game(7,e.target);
            break;
        case "eight":
            game(8,e.target);
            break;
        case "nine":
            game(9,e.target);
            break;
        default: 
            break;
    }
}

var player=1;
//const table=[[0,0,0],[0,0,0],[0,0,0]];
var table=[0,0,0,0,0,0,0,0,0,0];
function initialize(){
    table=[0,0,0,0,0,0,0,0,0,0];
    player=1;
}

function game(position,box){
    //console.log(position + " " +box.id);
    //box.innerText = position;
    if(table[position]===0){
        table[position]=player;
        box.innerText = player;
        if(checkWin(player)){
            setTimeout(alert(player + "wins!!!"),0)
            initialize();
        }else{
            if(player===1) player =2;
            else player=1;
        }
    }else{
        return;
    }
}

function checkWin(player){
    if((table[1]===player && table[2]===player && table[3]===player) ||
       (table[4]===player && table[5]===player && table[6]===player) ||
       (table[7]===player && table[8]===player && table[9]===player) ||
       (table[1]===player && table[4]===player && table[7]===player) ||
       (table[2]===player && table[5]===player && table[8]===player) ||
       (table[3]===player && table[6]===player && table[9]===player) ||
       (table[1]===player && table[5]===player && table[9]===player) ||
       (table[3]===player && table[5]===player && table[7]===player)){
        return true;
    }
    else return false;
}