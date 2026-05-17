let data = document.querySelector(".date-today");

data.textContent = new Date().toLocaleDateString();

let usertodo = document.querySelector(".todos");
let todo = document.querySelector(".todo");
let button = document.querySelector(".btn");
let mode = 'light';
let modeBtn = document.querySelector(".mode");
let body = document.querySelector("body");
button.addEventListener("click", function (event) {
  event.preventDefault();
  const todos = todo.value.trim();
  let li = document.createElement("li");
  li.textContent = todos;
  usertodo.append(li);
  todo.value = "";
});

modeBtn.addEventListener("click",()=>{
  if(mode === 'light'){
   mode ='dark';
   body.classList.add('dark')
   body.classList.remove('light')
  }
  else{
   mode = 'light';
    body.classList.add('light')
    body.classList.remove('dark')
  }
})