const todoList = [];

const todoListElement = document.querySelector("#myUL");

document.querySelector("#todo_button").addEventListener("click", addTodo);

function addTodo() {
  const todoText = document.querySelector("#myInput").value;

  const todoObject = {
    // id: todoList.length * 5,
    id: todoList.length * 5,
    todoText: todoText,
    isDone: false,
  };

  todoList.push(todoObject);
  displayTodos();
}

function doneTodo(todoId) {
  const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
  todoList[selectedTodoIndex].isDone = true;

  displayTodos();
}

function displayTodos() {
  todoListElement.innerHTML = "";
  document.querySelector("#myInput").value = "";

  todoList.forEach((item) => {
    const listElement = document.createElement("li");

    listElement.innerText = item.todoText;
    listElement.setAttribute("data-id", item.id);
    // listElement.dataset.id=item.id
    // if (item.isDone) {
    //   listElement.classList.add("checked");
    // }

    

    listElement.addEventListener("click", function (e) {
      const selectedId = e.target.getAttribute("data-id");
        // e.target.style.textDecoration = "line-through"
        // doneTodo(selectedId);
        
      if (e.target.style.textDecoration == "line-through") {
        e.target.style.textDecoration = "none";
      } else {
        e.target.style.textDecoration = "line-through";
      }
    });
    
      
    todoListElement.appendChild(listElement);
  });
}

// // TO-DO
// const todoListElement = document.querySelector("#myUL");

// document.querySelector("#todo_button").addEventListener("click", addTodo);
// function addTodo() {
//   const todoText = document.querySelector("#myInput").value;

//   const todoObject = {
//     id: todoListElement.length,
//     todoText: todoText,
//     isDone: false,
//   };
//   todoList.push(todoObject);
// }

// function doneTodo(todoId) {
//   const selectedTodoId = todoList.findIndex((myTodo) => myTodo.id == todoId);
//   todoList[selectedTodoIndex].isDone = true;

//   displayTodos();
// }

// function displayTodos() {
//     todoListElement.innerHTML = "";
//     document.querySelector("#myInput").value = "";

//     todoList.forEach((item) => {
//       const listElement = document.createElement("li");

//       listElement.innerText = item.todoText;
//       listElement.setAttribute("data-id", item.id);

//       // if (item.isDone) {
//       //   listElement.classList.add("checked");
//       // }

//       listElement.addEventListener("click", function (e) {
//         const selectedId = e.target.getAttribute("data-id");
//       //   e.target.style.textDecoration = "line-through"
//       //   console.log(e.target)
//       //   doneTodo(selectedId);
//           if (e.target.style.textDecoration == "line-through"){
//               e.target.style.textDecoration = "none"
//           } else{
//               e.target.style.textDecoration = "line-through"
//           }

//       });

//       todoListElement.appendChild(listElement);
//     });
//   }
