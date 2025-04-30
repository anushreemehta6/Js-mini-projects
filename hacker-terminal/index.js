parent = document.getElementsByClassName('parent');
// setInterval(myTimer, 1000);

 const arr= [
    "Initializing Hacking...",
    "Reading your Files...",
    "Password file detected",
    "sending all files and passwords to server",
    "cleaning up",
    "Initializing Hacking...",
    "Reading your Files...",
    "Password file detected...",
    "sending all files and passwords to server",
    "cleaning up"
 ]

 

 function generator(){
    var number = Math.floor(Math.random()*11);
    parent = document.getElementsByClassName('parent')[0];
    if(parent){
        parent.textContent = arr[number];
    }
    
 }


 setInterval(generator, 1000);

