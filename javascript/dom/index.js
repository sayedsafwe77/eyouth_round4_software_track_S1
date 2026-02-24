/********* start increment buttons example ********** */
// var btns = document.querySelectorAll(".btn");

// for (var btn of btns) {
//   btn.addEventListener("click", increment);
// }
// function increment(event) {
//   +event.target.textContent++;
// }
/********* end increment buttons example ********** */

/********* start event propagation example ********** */
// var grandparent = document.querySelector(".grandparent");
// var parent = document.querySelector(".parent");
// var child = document.querySelector(".child");
// grandparent.addEventListener("click", grandparentHandler, true);

// parent.addEventListener("click", parentHandler, true);

// child.addEventListener("click", childHandler, true);
// document.body.addEventListener(
//   "click",
//   function () {
//     console.log("body clicked");
//   },
//   true
// );
// function grandparentHandler() {
//   console.log("grandparent clicked");
// }
// function parentHandler() {
//   console.log("parent clicked");
// }
// function childHandler() {
//   console.log("child clicked");
// }
/********* end event propagation example ********** */

/********* start add fallback image example ********** */
// document.body.addEventListener("error", addFallbackImage, true);
// function addFallbackImage(event) {
//   if (event.target.tagName == "IMG") {
//     if (event.target.id == "fallback-image") {
//       return;
//     }
//     event.target.src = "../../images/2211.w018.n002.1473B.p15.14733.avif";
//     event.target.id = "fallback-image";
//     console.log("error inside", event.target.tagName);
//   }
// }
/********* end add fallback image example ********** */

/********* start keyboard events example ********** */
// var input = document.querySelector("input[name=username]");
// input.addEventListener("focus", (event) => {
//   document.querySelector(".message").classList.remove("disabled");
// });

// input.addEventListener("blur", function (event) {
//   document.querySelector(".message").classList.add("disabled");
// });
/********* end keyboard events example ********** */
// var i = 1;
// var timer = setTimeout(function () {
//   if (i == 5) {
//     clearInterval(timer);
//   }
//   i++;
//   console.log("Timer is done");
// }, 200);
// clearTimeout(timer);

// console.log("welcome");

/********* start fetching data from backend ********** */

/********* end fetching data from backend ********** */
