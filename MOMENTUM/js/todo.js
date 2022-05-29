const toDoForm = document.querySelector("#todo-form");
const toDoinput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    // JSON.stringify는 jason객체를 string객체로 바꿔준다.
    // JSON.parse는 string객체를 json객체로 바꿔준다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo() {
    // event.target.parentElement를 사용해 어떤 버튼을 클릭했는지 알 수 있다.
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id
    const span = document.createElement("span");
    span.innerHTML = newTodo.text;
    const button = document.createElement("button");
    button.innerHTML = "x";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function toDosubmit() {
    event.preventDefault();
    const newTodo = toDoinput.value;
    toDoinput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", toDosubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }
// 화살표 함수쓰는 법(위와 같다)
// parsedToDos.forEach((item) => console.log("this is the turn of", item));

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // forEach()는 array의 item들에 대해 한 개의 function을 실행할 수 있게 해준다.
    parsedToDos.forEach(paintToDo);
}