const btn = document.querySelector("button");
btn.addEventListener("mousedown", showList);
btn.addEventListener("mouseup", hideList);
const link = document.querySelector(".google-link");
link.addEventListener("click", handleLinkEvent);
// mouse event click , dblclick,mouseenter,mouseleave
// keyboard event
// form event
// window event
function showList() {
  var list = document.querySelector(".list");

  list.classList.remove("disabled");
  list.classList.add("fadeAnimation");
}
function hideList() {
  var list = document.querySelector(".list");

  list.classList.add("disabled");
}
function handleEvent(event) {
  event.preventDefault();
  var list = document.querySelector(".list");
  console.log(list.getAttribute("id"));
  list.classList.toggle("disabled");
}
function handleLinkEvent(e) {
  e.preventDefault();
  console.log("link clicked");
}
