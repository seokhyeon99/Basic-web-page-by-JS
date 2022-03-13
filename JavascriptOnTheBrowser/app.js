//const title = document.querySelector(".hello h1");//querySelector only bring the first one
const h1 = document.querySelector(".hello:first-child h1");
//id - #~~, class - .~~~

//hellos.innerText = "Got you!";

let a = 0;
function handleTitleclick(){
    //console.log("title was clicked!");
    a += 1;
    
    if(a%3 == 1){
        h1.style.color = 'blue';
    }
    else if (a%3 == 2){
        h1.style.color = 'red';
    }
    else{
        h1.style.color = 'black';
    }
}
function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("ALL GOOD!");
}

h1.addEventListener("click", handleTitleclick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
console.log(h1);
console.dir(h1);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);