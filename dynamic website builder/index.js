function createcard(title, cname, views, monthold, thumbnail){
    // finish this funciton;
    let viewstr;
    if(views < 1000000){
       viewstr = views/1000 +"K";
    }
    else if(views >1000000){
        viewstr = views/100000 +"M";
    }
    else{
        viewstr = views;
    }
    let html = `<div class="card">
            <div class="imag">
                <img src="${thumbnail}">
            </div>
            
            <div class="text">
                <h1>${title}</h1>
                <p> ${cname}. ${viewstr} views . ${monthold} months ago</p>
            </div>

            
        </div>`


        document.querySelector(".container").innerHTML =  document.querySelector(".container").innerHTML+html;
}

createcard("hello anushree" , "Anushree" , 7250000, 12, 'dynamic website builder\apna coding.png')