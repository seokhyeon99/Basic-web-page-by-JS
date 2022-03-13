const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

//const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    //console.log(event);
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typedUserName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typedUserName);
    paintGreetings(typedUserName);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);

//console.log(savedUserName);

if(savedUserName === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(savedUserName);
}