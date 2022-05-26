const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 실수를 방지하기 위해서 string타입을 변수에 저장해놓는다. 대문자로 표시
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // localStorage는 작은 DB에 데이터를 추가
    localStorage.setItem("USERNAME_KEY", username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`; 위와 같은 형식을 보여준다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
    }

// localStorage는 작은 DB에서 데이터를 가져와 변수에 넣어준다.
const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}