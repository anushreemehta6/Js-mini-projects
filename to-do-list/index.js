let data = document.querySelector(".date-today");

data.textContent = new Date().toLocaleDateString();

let usertodo = document.querySelector(".todos"); 
let todo = document.querySelector(".todo");
let button = document.querySelector(".btn");
button.addEventListener("click", function (event){
    event.preventDefault();
    const todos = todo.value.trim();
     let li = document.createElement("li");
     li.textContent= todos;
    usertodo.append(li);
      todo.value = "";
})

