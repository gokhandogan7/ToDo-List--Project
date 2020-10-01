// TO-DO
const todoListElement = document.querySelector("#myUL");

document.querySelector("#todo_button").addEventListener("click", addTodo);
function addTodo() {
  const todoText = document.querySelector("#myInput").value;

  const todoObject = {
    id: todoListElement.length,
    todoText: todoText,
    isDone: false,
  };
  todoList.push(todoObject);
}

function doneTodo(todoId) {
  const selectedTodoId = todoList.findIndex((myTodo) => myTodo.id == todoId);
  todoList[selectedTodoIndex].isDone = true;

  displayTodos();
}
