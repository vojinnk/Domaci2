var searchBox = document.querySelector("#filter");
var insertBox = document.querySelector("#addForm");

//console.log(searchBox);
searchBox.addEventListener("keyup",search);

function search(e){
    var items = Array.from(document.querySelectorAll("li"));
    //console.log(items);
   var input = searchBox.value.toLowerCase();
   
   //console.log(input)
    items.forEach(elem=>{
        //console.log(elem.firstChild);
        if(elem.firstChild.includes(input)){
            
            elem.style.display=block;
        }else{
            elem.style.display=none;

    })
    
}
