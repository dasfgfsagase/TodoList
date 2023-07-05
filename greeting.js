const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greet = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreet();
}

function paintGreet() {
    const username = localStorage.getItem(USERNAME_KEY);
    greet.innerHTML = `Hello ${username}`;
    greet.classList.remove(HIDDEN_CLASSNAME);
}

const savedName = localStorage.getItem(USERNAME_KEY);

if(savedName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onSubmit);
} else {
    paintGreet();
}