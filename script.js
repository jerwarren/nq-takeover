document.addEventListener('DOMContentLoaded', domReady);
const meter = document.querySelector(".meter span");
const seconds = 10;

var count = 1;
function domReady(){
    console.log("dom ready")
    setTimeout(oneSecond, 1000);
}

function oneSecond(){
    console.log(count);

    meter.style="width:"+count*seconds+"%";
    
    if (count >= seconds){
        redirect();
    } else {
        count++;
    setTimeout(oneSecond, 1000);
    }
    
    
}

function redirect(){
console.log("redirecting");
window.location.href="https://www.northernquest.com";
}