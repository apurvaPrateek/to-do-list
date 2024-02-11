var searchBar = document.querySelector(".search-bar input");
var addBtn = document.querySelector(".search-bar button");
var ul = document.querySelector("ul");
var cross = document.querySelectorAll("li i");

document.addEventListener("keydown", (event) => {
    
  if (event.key == "Enter") {
    addTask(searchBar.value);
  }
});

addBtn.addEventListener("click", () => {
    
  addTask(searchBar.value);
  
});

function addTask(data) {
  if (data == "") {
    alert("Enter something...");
    return;
  }
  console.log(searchBar.value);
  var li = document.createElement("li");
  
  li.innerHTML = ` <div>
    <input type="checkbox" name="checkItem" class="checkItem">
    <p>${data}</p></div>
    <i class="fa-sharp fa-solid fa-xmark"></i>`;

    ul.appendChild(li);

    lineThrough(li);
    crossed(li);


    searchBar.value ="";

    saveData();


}

function crossed(li){

    li.lastChild.addEventListener("click", ()=>{
        console.log("dd");
        li.parentNode.removeChild(li);
        saveData();
    });
}

function lineThrough(li){
    li.querySelector(".checkItem").addEventListener("change",()=>{
        li.querySelector("p").classList.toggle("line-through");
        saveData();
    });
}

function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}

function showData(){
    ul.innerHTML = localStorage.getItem("data");
    var arr=document.querySelectorAll("li");
    for( var i=0;i<arr.length;i++){
        lineThrough(arr[i]);
        crossed(arr[i]);
    }
    
}

showData();


