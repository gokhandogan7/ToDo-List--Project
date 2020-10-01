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

function displayTodos(){

    todoList.forEach((item) => {
       const todoElement = document.createElement("li");
        
       todoElement.innerText = item.todoText;
       todoElement.setAttribute("data-id", item.id)
       if (item.isDone){
           listElement.classList.add("checked")
       } 

       listElement.addEventListener("click", function(e){
            const selectedId = e.target.getattribute("data-id");
            doneTodo(selectedId);
       })
       
       todoListElement.appendChild(listElement);
    });
}
