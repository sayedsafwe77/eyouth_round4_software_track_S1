// es6  let const
// var fname = "ahmed";

// {
//   let x = 5;
//   console.log(x);
// }
// console.log(x);

// let y = 6;
// let z = 7;
// function getName() {
//   var fname = "sayed";
// }
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }
// const greeting = function () {
//   console.log("welcome user");
// };
// greeting();
// const arr = [1, 2, 3, 4];
// for (const element of arr) {
//   console.log(element);
//   element = "bassant";
//   console.log(element);
// }
// const ob = {
//   id: "1",
//   name: "ahmed",
//   gender: "male",
//   salary: 5000,
// };
// async function getTodo() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   printTodoTitle(data);
// }
// getTodo();

// function printTodoTitle({ todo_title: title }) {
//   console.log(title);
// }
// const id = ob.id;
// const name = ob.name;
// const gender = ob.gender;
// const salary = ob.gender;
// const { id, name, gender: user_gender, salary } = ob;
// console.log(id, user_gender);
// const arr = [1, 2, 3, 4];
// const [x, , y] = arr;

// console.log(x, y);
// function getUserInfo() {
//   return [1, "name", 5000];
// }
// const [id, , salary] = getUserInfo();
// console.log(id, salary);
// const arr = [1, 2, 3, 4];
// const arr2 = [...arr];
// arr[0] = "sayed";
// console.log(arr2);

// const ob = {
//   id: "1",
//   name: "ahmed",
//   gender: "male",
//   salary: 5000,
// };
// const ob2 = { ...ob };
// ob.name = "sayed";
// console.log(ob2);
// function addKey({ ...x }) {
//   x.new_key = 100;
// }
// const ob = {
//   id: 1,
//   name: "ahmed",
//   gender: "male",
//   salary: 5000,
// };
// addKey(ob);
// console.log(ob);
// function summation(...x) {
//   return x.reduce((a, b) => a + b);
// }

// Math.max(1,2,3,4,5,6,7,8,9)
// console.log(summation(1, 2, 4, 5, 6, 7, 8, 9));
// const arr = ["ahmed", "mohamed", "sayed", "abdelrahman"];
// for (const [index, element] of arr.entries()) {
//   console.log(element);
// }
// var x = 10;
// var y = 20;
// var z = 30;

// for (const element of Array.of(x, y, z)) {
//   console.log(element);
// }
// const btns = document.getElementsByTagName("button");
// const btn2 = document.querySelectorAll("button");
// btn2.map((btn) =>
//   btn.addEventListener("click", () => console.log(btn.textContent))
// );

// Array.from(btns).forEach((btn) =>
//   btn.addEventListener("click", () => console.log(btn.textContent))
// );
const ob = {
  id: 1,
  name: "ahmed",
  gender: "male",
  salary: 5000,
};
// const ob2 = { ...ob, ...{ name: "sayed", age: 30 } };
// Object.assign(ob, { name: "sayed", age: 30 });
// console.log(ob2);
// console.log(isNaN(x));
// map examples
// 1-map dom element to object
// 2-api caching
// 3-memoization
// proxy examples
// 1- reactive state
// 2- form validation
// Default Values for Missing Properties
// Automatic Object Property Creation
// Array Negative Index Support

// const userOb = {
//   name: "omar",
//   age: 20,
//   id: 1,
//   gender: "male",
// };
// if ("salary" in userOb) {
//   console.log("welcome");
// }

// const user = new Map([
//   ["name", "ahmed"],
//   ["age", 30],
//   ["gender", "male"],
// ]);
// ["name", "ahmed"]
// ["age", 30]
// ["gender", "male"],
// console.log(user.get("id"));
// user.get("id");
// user.has("id");
// user.set("salary", 5000);
// user.delete("salary");
// console.log([...user]);

// 1ms -> time complexity  0(1) 0(n) 0(nlogn) 0(n^2)
// 1-map dom element to object
// const todoMap = new Map();
// async function fetchTodos() {
//   const response = await fetch("https://dummyjson.com/todos?limit=5");
//   const data = await response.json();
//   renderTodos(data.todos);
// }

// function renderTodos(todos) {
//   document.querySelector(".todos").innerHTML = todos
//     .map(
//       (todo) =>
//         `
//     <li class="todo-item">${todo.todo}<input type="checkbox" ${
//           todo.completed ? "checked" : ""
//         }></li>
//     `
//     )
//     .join("");

//   const todoElements = document.querySelectorAll(".todo-item");
//   for (const [index, todo] of todos.entries()) {
//     todoMap.set(todoElements[index], todo);
//   }
//   todoElements.forEach((todoElement) => {
//     todoElement.addEventListener("click", (event) => readTodo(event.target));
//   });
// }

// function readTodo(el) {
//   console.log(todoMap.get(el));
// }
// fetchTodos();

// 2-api caching
// const todoCache = new Map();
// async function getTodo(id) {
//   const url = `https://dummyjson.com/todos/${id}`;
//   if (todoCache.has(url)) {
//     console.log("fetching from cache");
//     return todoCache.get(url);
//   }
//   console.log("fetching from backend");
//   const response = await fetch(url);
//   const data = await response.json();
//   todoCache.set(url, data);
//   return data;
// }
// document.querySelector("button").addEventListener("click", async () => {
//   const data = await getTodo(document.querySelector("#todo-id").value);
//   console.log(data);
// });

// const arr = ["ahmed", "mohamed", "mohamed", "ammar", "sayed", "safwet"];
// const uniqueValue = arr.reduce((acc, el) => {
//   if (!acc.includes(el)) {
//     acc.push(el);
//   }
//   return acc;
// }, []);
// console.log(uniqueValue);
// const uniqueValue = new Set(arr);
// console.log(uniqueValue.size);

// for (const [index, element] of uniqueValue.entries()) {
//   console.log(index, element);
// }

// const user = {
//   info: {
//     id: 1,
//     name: "ahmed",
//     firstName: "ahmed",
//     lastName: "omar",
//     gender: "male",
//     salary: 5000,
//   },
// };

// const userProxy = new Proxy(user, {
//   get(target, key) {
//     return target.info[key];
//   },
//   set(target, key, value) {
//     target[key] = value.trim();
//   },
//   deleteProperty(target, key) {
//     console.log("deleted");
//     delete target[key];
//   },
//   has(target, key) {
//     return key in target.info;
//   },
// });

// console.log(userProxy.id);
// console.log("eid" in userProxy);

// document.querySelectorAll(".text").forEach((el) =>
//   el.addEventListener("input", (e) => {
//     textInputProxy.name = e.target.value;
//   })
// );

// const textInputProxy = new Proxy(
//   {},
//   (() => {
//     let timeoutId = null;
//     return {
//       set(target, key, value) {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//           document.querySelector("#text-input").textContent += value;
//           console.log(`DOM updated with final value: ${value}`);
//         }, 500);
//         target[key] = value;
//         return true;
//       },
//     };
//   })()
// );
const user = {
  id: 1,
  name: "ahmed",
  firstName: "ahmed",
  lastName: "omar",
  gender: "male",
  salary: 5000,
};

// function greet(message1, message2) {
//   return message1 + ", " + message2 + ", " + this.name;
// }

// const person = { name: "Jan" };
// let msg1 = greet.apply(person, ["hello", "world"]);
// console.log(msg1);

// let msg = Reflect.apply(greet, person, ["hello", "world"]);
// console.log(msg);

// let arr = [1, 2, 3, 4, 5];
// let arr2 = new Array("ahmed", "mohamed", "sayed");
// const arr3 = Reflect.construct(Array, ["nada", "menna", "esraa"]);
// console.log(arr, arr2, arr3);
// Reflect.get(user,'name')
