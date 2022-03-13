const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    //h1.className = "active";
    const clickedClass = 'clicked';
    h1.classList.toggle(clickedClass);

    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else{
    //     h1.classList.add(clickedClass);
    // }
    // console.log(h1.classList);
}


h1.addEventListener("click", handleTitleClick);