// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');

// CHALLENGE 1
function createFunction() {
  	
  function challone(){
    console.log("hello");
  }
return challone;

}

// /*** Uncomment these to check your work! ***/
//const function1 = createFunction();
//	function1(); /// => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
 function challtwo(){
   console.log(input);
 }
return challtwo;
}	

// /*** Uncomment these to check your work! ***/
//const printSample = createFunctionPrinter('sample');
//printSample(); // => should console.log('sample');
//const printHello = createFunctionPrinter('hello');
/// printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
let counter = 0; // this variable is outside incrementCounter's scope
function incrementCounter () {
  counter ++;
  console.log('counter', counter);
}
return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


function addByX(x) {
function challthree(input){
  return x+input;
}
return challthree;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// console.log(addByTwo(1)); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

//const addByThree = addByX(3);
// addByThree(1); // => should return 4
// console.log(addByThree(2)); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
var counter =1;
var firstRes;
function once(input){
  if(counter===1){
    counter++;
    firstRes = func(input);
    //console.log(firstRes);
  }/*else{
    return firstRes;
    counter++;
  }  */
  return firstRes;
}
return once;
}

// /*** Uncomment these to check your work! ***/
//const onceFunc = once(addByTwo);
//console.log(onceFunc(4));  // => should log 6
//console.log(onceFunc(10));  // => should log 6
//console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
var c=0;
function chalfive(){
  c++;
  if(c>=3){
    func();
  }
  
}
return chalfive;
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
//afterCalled(); // => nothing is printed
//afterCalled(); // => nothing is printed
//afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
setTimeout(()=>func(),wait);
}


// CHALLENGE 7
function rollCall(names) {
var c=0;
function all(){
  if(c<names.length){
      console.log(names[c]);
      c++;
  }else console.log("Everyone accounted for")
}
return all;
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
  var all=[];
  function cheight(input){
    if(input===magicWord){
      return all;
    }else{
      var obj={};
      obj[input]=func(input);
      all.push(obj);
      return func(input);
    }
  }
return cheight;

}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
//console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
  var c=0;
  function it(){
      if(c<array.length){
        var p=c;
        c++;
        return array[p];
      }else{
        c=0;
        return array[c];
      }
  }
return it;
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
//not sure that i done what is asked for!!! mozda ...args umjesto input tj ...input???
function defineFirstArg(func, arg) {
function df(input){
  return func(arg,input);
}
return df;
}

// /*** Uncomment these to check your work! ***/
//const subtract = function(big, small) { return big - small; };
//const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
var date = Date(Date.now());
function chalel(...arg){
  var output = func(...arg);
  return {
    date:date.toString(),
    output:output
  }
}
return chalel
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
var all=[];
function chas(first,second){
  //console.log(arguments.length);
  if(arguments.length>1){
    var obj={
      first:first,
      second:second
    }
    all.push(obj);
  }else{
    console.log(first);
    var news=first;
    for(let i=0;i<all.length;i++){
      news=news.replaceAll(all[i].first,all[i].second);
    }
    return news;
  }
}
return chas;

}

// /*** Uncomment these to check your work! ***/
//const changeScene = censor();
//changeScene('dogs', 'cats');
//changeScene('quick', 'slow');
//console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
var s=secret;
return {
  setSecret:function(arg){s=arg;},
  getSecret:function(){return s}
}
}

// /*** Uncomment these to check your work! ***/
// var obj = createSecretHolder(5)
//console.log(obj.getSecret()) // => returns 5
//obj.setSecret(2)
//console.log(obj.getSecret()) // => returns 2


// CHALLENGE 14
function callTimes() {
var c=0;
function called(){
  c++;
  return c; 
}
return called
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function russianRoulette(num) {
var c=1;
function play(){
  if(c<num){
    c++;
    return "click";
  }else if(c===num){
    c++;
    return "bang";
  }else return "reload to play again";
}
return play;
}

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'


// CHALLENGE 16
function average() {
var avg=0;
var all=[];
function average(input){
  if(arguments.length===0){
    return avg;
  }else{
    all.push(input);
    var sum=0;
    all.forEach(elem=>{
      sum+=elem;
    });
    avg=sum/all.length;
    return avg;
  }
}
return average;
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
//console.log(avgSoFar()); // => should log 6
//console.log(avgSoFar(12)); // => should log 8
//console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {

function test(cb){
  var isTrue=true;
  arrOfTests.forEach(elem=>{
    
    //console.log(elem[0]);
    //console.log(elem[1]);
   // console.log(cb(elem[0])!==elem[1]);
    if(cb(elem[0])!==elem[1]){
     // console.log("enter");
      isTrue=false;
    }        
    
  })
  return isTrue;
}
return test;
}

// /*** Uncomment these to check your work! ***/
/* const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
*/

// CHALLENGE 18
function makeHistory(limit) {
var history=[];
function work(str){
  if(str==="undo"){
    if(history.length>0){
      var p = history.pop();
      return p + " undone"
    }else return "nothing to undo"
  }else{
    if(history.length>=limit){
      history.shift();
      history.push(str);
      return str + " done";
    }else{
      history.push(str);
      return str + " done"
    }
  }
}
return work;
}

// /*** Uncomment these to check your work! ***/
/* const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'

*/
// CHALLENGE 19
function blackjack(array) {
var c=0;
function dealer(num1,num2){
 if(c>=array.length) c=0;
  var pl=true;
  var bust=false;
  var sum=0
  function player(){
   if(!bust){
       if(pl){
         pl=false;
         sum=num1+num2;
       return num1+num2;
     }else{
       sum+=array[c]
       c++;
       if(sum<=21){
         return sum;
       }else{
         bust=true;
         return "bust";
       }
     }
   }else{
     return "you are done"
   }
 }
  return player;
}
return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

/*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

/*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
