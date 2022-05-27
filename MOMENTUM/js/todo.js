const toDoForm = document.querySelector("#todo-form");
const toDoinput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo() {
    // event.target.parentElement를 사용해 어떤 버튼을 클릭했는지 알 수 있다.
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = newTodo;
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
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", toDosubmit);