//document.addEventListener('DOMContentLoaded', domReady);
//const meter = document.querySelector(".meter span");
const seconds = 5;

document.querySelector('.background-mobile video').addEventListener('ended',redirect,false);
document.querySelector('.background-desktop video').addEventListener('ended',redirect,false);


var count = 1;
function domReady(){
    console.log("dom ready")
    setTimeout(oneSecond, 1000);
}

function oneSecond(){
    if (count <= seconds){
        //meter.style="width:"+count*seconds+"%";
        count++;
        setTimeout(oneSecond, 1000);
    } else {
        redirect();
    }
}

function myHandler(e) {
    // What you want to do after the event
}

function redirect(){
    console.log("redirecting");
    window.location.href="https://www.northernquest.com?HB";
}