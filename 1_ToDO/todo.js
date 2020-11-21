var searchBox = document.querySelector("#filter");
var insertBox = document.querySelector("#addForm");

//console.log(searchBox);
searchBox.addEventListener("keyup",search);
addForm.addEventListener("submit",insertItem);

function search(e){
    var items = Array.from(document.querySelectorAll("li"));
    //console.log(items);
   var input = searchBox.value.toLowerCase();
   
   //console.log(input)
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

}
