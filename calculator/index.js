// function appendValue(value) {
//     document.getElementById('display').value += value;
//   }
  
//   function clearDisplay() {
//     document.getElementById('display').value = '';
//   }
  
//   function calculate() {
//     try {
//       document.getElementById('display').value = eval(document.getElementById('display').value);
//     } catch {
//       document.getElementById('display').value = 'Error';
//     }
//   }
  
//create a string usinh append function , then use eval fucntion to evaluate the sttring 


function appendValue(value){
  let screen = document.querySelector('.screen');
  screen.innerHTML += value;
  console.log(value);
}

function calculate(){
  let screen = document.querySelector('.screen');
  screen.textContent = eval(screen.textContent);
}

function clr(){
  let screen = document.querySelector('.screen');
  screen.innerHTML = null
}