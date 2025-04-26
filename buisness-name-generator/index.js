// first lets store the names of buisness names in a array , then generate a random number and change the innerhtml to arr[random numner].
const indianStartupNames = [
    "Blinksy",
    "Grovia",
    "Zentro",
    "Quicksy",
    "Vyoma",
    "Nexora",
    "Pixlbyte",
    "Cloudeck",
    "Grabzi",
    "Tazzy"
  ];
  
  console.log(indianStartupNames);
  


console.log(randomBetween0And100);

function generate(){
    var randomBetween0And100 = Math.floor(Math.random() * 11);
    let display = document.getElementsByClassName('container')[0];
    display.textContent =  indianStartupNames[randomBetween0And100];
    
}
function clr(){
    var randomBetween0And100 = Math.floor(Math.random() * 11);
    let display = document.getElementsByClassName('container')[0];
    display.textContent =  null;
}

