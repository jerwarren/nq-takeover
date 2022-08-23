document.addEventListener('DOMContentLoaded', domReady);
const meter = document.querySelector(".meter span");
const seconds = 11;

var count = 1;
function domReady(){
    console.log("dom ready")
    setTimeout(oneSecond, 1000);
}

function oneSecond(){
    meter.style="width:"+count*seconds+"%";
    
    if (count < seconds){
        count++;
        setTimeout(oneSecond, 1000);
    } else {
        redirect();
    }
}

function redirect(){
    console.log("redirecting");
    window.location.href="https://www.northernquest.com";
}