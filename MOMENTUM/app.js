const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit() {
    const value = loginInput.value;
    console.log(value);
}

loginForm.addEventListener("submit", onLoginSubmit);