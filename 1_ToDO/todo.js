var searchBox = document.querySelector("#filter");
var insertBox = document.querySelector("#addForm");
document.addEventListener("keyup",keyAction);
window.addEventListener("load", function(){
    if(localStorage.getItem("items")!=null){
       // console.log("locallll!!")
        document.querySelector("#items").innerHTML=localStorage.getItem("items");
        updateItemEvents();
    }
    else{
      //  console.log("no local")
        return;
    }
})

//console.log(searchBox);
searchBox.addEventListener("keyup",function(){
    search();
});
addForm.addEventListener("submit",insertItem);

function search(){
    var items = Array.from(document.querySelectorAll("li"));
    //console.log(items);
   var input = searchBox.value.toLowerCase();
   
  // console.log(input)
    items.forEach(elem=>{
        //console.log(elem.firstChild);
        if(elem.firstChild.textContent.toLowerCase().includes(input)){
            elem.style.display="block";
        }else{
            elem.style.display="none";

    }
    
    })
}
function insertItem(e){
    e.preventDefault();
    
    var name = document.querySelector("#item").value;
    var li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText=name;
    var del = document.createElement("button");
    //classlist.add dodaje samo po jednu!
    del.className="btn btn-danger btn-sm float-right delete";
    del.innerText="X";
    li.appendChild(del);
    document.querySelector("#items").appendChild(li);
    updateItemEvents();
    localStorage.clear("items");
    localStorage.setItem("items",document.querySelector("#items").innerHTML)

}
function updateItemEvents(){
    var items = Array.from(document.querySelectorAll("li"));
    items.forEach(elem=>{
        elem.addEventListener("click",action);
        elem.tabIndex=1;
    })
}
updateItemEvents();
function displayOnly(el){
    var items = Array.from(document.querySelectorAll("li"));
    searchBox.value = el.firstChild.textContent;
    items.forEach(elem=>{
        if(elem===el){
            elem.style.display="block";
            
            
        }else{
            elem.style.display="none";
        }
        searchBox.focus();
    })

}
function action(e){
    //console.log(e.target.nodeName);
   // console.log(e.target.constructor.name);
   //console.log(items);
    if(e.target.nodeName === "LI"){
       //console.log(e.target.firstChild.textContent);
       //searchBox.value=e.target.firstChild.textContent;
       //search();
       displayOnly(e.target);
    }else if(e.target.nodeName==="BUTTON"){

       // console.log(e.target)
       //console.log(e.target.parentElement)
        var li = e.target.parentElement;
        li.parentElement.removeChild(li);
        
        localStorage.clear("items");
        localStorage.setItem("items",document.querySelector("#items").innerHTML)
    
    }
}

function keyAction (e){
    var curr = document.activeElement;
    var items = document.querySelectorAll("li");
    if(e.keyCode===13){
        if(curr.nodeName!=="LI"){
            //console.log(curr)
            return;
        }
        else{
            //console.log("succes")
            searchBox.value=curr.firstChild.textContent;
            search();
            searchBox.focus();
        }
    }

   if(e.keyCode===38 || e.keyCode===40){
       if(curr.nodeName !=="LI"){
           items[0].focus();
       }else{
           if(curr===items[0] && e.keyCode===38){
               items[items.length-1].focus();
                
           }else if(curr===items[items.length-1] && e.keyCode===40){
                items[0].focus();
           }else{
               if(e.keyCode===38){
                  curr.previousElementSibling.focus();
               }else if(e.keyCode===40){
                    curr.nextElementSibling.focus();
               }
           }
       }
   }
}