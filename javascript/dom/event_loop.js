// console.log("before timeout");

// setTimeout((event) => {
//   console.log("Timer is done");
// }, 0);

// console.log("after timeout");
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
    list_items += `<li id="${todo.id}">${
      todo.todo
    } <input type="checkbox" class="todo-status" ${
      todo.completed ? "checked" : ""
    }></li>`;
  }
  return list_items;
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
  console.log(data);
}

document.querySelector("button").addEventListener("click", () => {
  var skip = document.querySelector("#skip").value;
  var limit = document.querySelector("#limit").value;
  handleDisplay(skip, limit);
});
// function getTodos() {
//   return new Promise((fulfilled) => {
//     var todos = [];
//     setTimeout(() => {
//       todos = [
//         {
//           userId: 1,
//           id: 1,
//           title: "delectus aut autem",
//           completed: false,
//         },
//         {
//           userId: 1,
//           id: 2,
//           title: "quis ut nam facilis et officia qui",
//           completed: false,
//         },
//         {
//           userId: 1,
//           id: 3,
//           title: "fugiat veniam minus",
//           completed: false,
//         },
//       ];
//       fulfilled(todos);
//     }, 100);
//   });
// }

// fetch("").then((data) => console.log(data));
