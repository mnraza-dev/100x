function addTodo() {
    const el = document.getElementById('todosInput');
    const todo = el.value;

    const todoDiv = document.createElement('div');
    const todoSpan = document.createElement('span');
    todoSpan.innerHTML = todo;
    todoDiv.setAttribute('class', 'todoItem');
    todoDiv.appendChild(todoSpan);

    const delButton = document.createElement('button');
    delButton.innerHTML = 'Delete Todo';
    delButton.addEventListener("click", function () {
        this.parentElement.remove();
    });
    todoDiv.appendChild(delButton);
    document.getElementById('todos').appendChild(todoDiv);

}
