var limit = 10;
var skip = 0;
function addListenerForStatusChange() {
  var todo_status = document.querySelectorAll(".todo-status");
  for (const status of todo_status) {
    status.addEventListener("change", (event) => {
      var todoId = event.target.parentElement.id;
      var status = event.target.checked;
      updateTodoStatus(todoId, status);
    });
  }
}
async function handleDisplay(skip, limit) {
  var data = await getTodos(skip, limit);
  var list_items = generateListItems(data.todos);

  insertListItems(list_items);
  addListenerForStatusChange();
  listenForScroll();
}

async function getTodos(skip, limit) {
  var response = await fetch(
    `https://dummyjson.com/todos?skip=${skip}&limit=${limit}`
  );
  return await response.json();
}

function generateListItems(todos) {
  var list_items = "";
  for (const todo of todos) {
    list_items += `<li class="todo-item" id="${todo.id}">${
      todo.todo
    } <input type="checkbox" class="todo-status" ${
      getTodoStatus(todo) ? "checked" : ""
    }></li>`;
  }
  return list_items;
}

function getTodoStatus(todo) {
  var todos = JSON.parse(sessionStorage.getItem("todos")) ?? [];
  for (var storageTodo of todos) {
    if (storageTodo.id == todo.id) {
      return storageTodo.completed;
    }
  }
  return todo.completed;
}
function insertListItems(list_items) {
  document.querySelector(".list-items").innerHTML = list_items;
}

async function updateTodoStatus(todoId, status) {
  var response = await fetch(`https://dummyjson.com/todos/${todoId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: status,
    }),
  });
  var data = await response.json();
  saveTodoChangeIntoStorage(data);
}

document.querySelector("button").addEventListener("click", () => {
  var l = document.querySelector("#limit").value;
  limit = +l;
  handleDisplay(skip, limit);
});

function saveTodoChangeIntoStorage(todo) {
  var todos = JSON.parse(sessionStorage.getItem("todos")) ?? [];
  var isExist = false;
  for (var storageTodo of todos) {
    if (storageTodo.id === todo.id) {
      storageTodo.completed = todo.completed;
      isExist = true;
      break;
    }
  }
  if (!isExist) {
    todos.push(todo);
  }
  sessionStorage.setItem("todos", JSON.stringify(todos));
}

function listenForScroll() {
  var observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      observer.unobserve(entries[0].target);
      (async () => {
        var data = await getTodos(entries[0].target.id, limit);
        var list_items = generateListItems(data.todos);
        document.querySelector(".list-items").innerHTML += list_items;
        observer.observe(document.querySelector(".todo-item:last-child"));
      })();
    }
  });
  observer.observe(document.querySelector(".todo-item:last-child"));
}
