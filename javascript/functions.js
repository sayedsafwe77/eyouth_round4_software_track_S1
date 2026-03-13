// Array functions push, pop, shift, unshift, map, filter, reduce, find, includes, some, every, forEach, indexOf, lastIndexOf, join, reverse, sort, slice, splice, replace, trim, toLowerCase, toUpperCase, indexOf, lastIndexOf, charAt, charCodeAt, substring, substr, concat, startsWith, endsWith, includes, repeat, padStart, padEnd

// String functions split, join, reverse, sort, slice, splice, replace, trim, toLowerCase, toUpperCase, indexOf, lastIndexOf, charAt, charCodeAt, substring, substr, concat, startsWith, endsWith, includes, repeat, padStart, padEnd

// Date functions getFullYear, getMonth, getDate, getDay, getHours, getMinutes, getSeconds, getMilliseconds, getTime, toDateString, toTimeString, toLocaleString, toLocaleDateString, toLocaleTimeString
// Math functions abs, ceil, floor, round, max, min, random, pow, sqrt, sin, cos, tan, log, exp
// string array date
// var arr = [1, 2, 3, 4, 5];
// var age = 15;
// var student1 = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   getName: (message) => {
//     return {
//       name: "menna",
//       getName: () => {
//         console.log(this);
//         console.log(this.name);
//       },
//     };
//   },
// };
// var student2 = {
//   name: "abdelrahman",
//   age: 22,
//   city: "cairo",
// };

// student1.getName().getName();

// document.querySelector(".parent").addEventListener("click", function (event) {
//   console.log(this, event.target);
// });

// Array functions push, pop, shift, unshift, map, filter, reduce, find, includes, some, every, forEach, indexOf, lastIndexOf, join, reverse, sort, slice, splice, replace, trim, toLowerCase, toUpperCase, indexOf, lastIndexOf, charAt, charCodeAt, substring, substr, concat, startsWith, endsWith, includes, repeat, padStart, padEnd
var employers = [
  {
    id: 1,
    name: "ahmed",
    gender: "male",
    salary: 5000,
  },
  {
    id: 2,
    name: "mohamed",
    gender: "male",
    salary: 7000,
  },
  {
    id: 3,
    name: "sayed",
    gender: "male",
    salary: 3000,
  },
  {
    id: 4,
    name: "nada",
    gender: "female",
    salary: 9000,
  },
  {
    id: 5,
    name: "menna",
    gender: "female",
    salary: 8000,
  },
  {
    id: 6,
    name: "manar",
    gender: "female",
    salary: 4000,
  },
];
// arr.splice(2, 0, "ahmed", "abdelrahman", "mohamed", "sayed");

// var el = arr.splice(2, 2, "sayed", "safwet");

// employers = employers.filter((employer) => employer.gender === "male");
// console.log(employers);

// var getName = () => "sayed";
// console.log(getName());

// var hasMales = employers.every((employer) => employer.gender === "male");
// var btns = document.querySelectorAll('button');
// btns.forEach((btn)=> btn.addEventListener('click'),()=>{

// })
// var arr = ["sayed", "ahmed", "mohamed", "safwet", "menna", "ahmed", "manar"];
// console.log(arr.reverse());
var leads = [
  {
    name: "ahmed",
    channel: "facebook",
    campaign: "summer_sale",
  },
  {
    name: "mohamed",
    channel: "google",
    campaign: "summer_sale",
  },
  {
    name: "sayed",
    channel: "facebook",
    campaign: "newsletter",
  },
  {
    name: "nada",
    channel: "google",
    campaign: "newsletter",
  },
  {
    name: "menna",
    channel: "facebook",
    campaign: "request_callback",
  },
  {
    name: "manar",
    channel: "google",
    campaign: "request_callback",
  },
  {
    name: "mahmoud",
    channel: "youtube",
    campaign: "contact_us",
  },
  {
    name: "selim",
    channel: "facebook",
    campaign: "ramadan",
  },
];
/******** start first approach */
// var campain_tags = [];
// leads.forEach((lead) => {
//   if (campain_tags.includes(lead.campaign)) return;
//   campain_tags.push(lead.campaign);
// });
// console.log(campain_tags);

// addTagsToList(campain_tags);
// function addTagsToList(tags) {
//   var tagList = "";
//   tags.forEach((tag) => (tagList += `<li class='campain'>${tag}</li>`));
//   document.querySelector(".campains").innerHTML = tagList;

//   document.querySelectorAll(".campain").forEach((tag) => {
//     tag.addEventListener("click", insertLeadsIntoDom);
//   });
// }
// function insertLeadsIntoDom(event) {
//   var tagLead = leads.filter(
//     (lead) => lead.campaign === event.target.textContent
//   );
//   var leadList = "";
//   tagLead.forEach((lead) => (leadList += `<h3>${lead.name}</h3>`));
//   document.querySelector(".leads").innerHTML = leadList;
// }
// get campain names
// display it into ul
/******** end first approach */

var groupedLeads = leads.reduce((acc, lead) => {
  if (acc[lead.campaign]) {
    acc[lead.campaign].push(lead);
  } else {
    acc[lead.campaign] = [lead];
  }
  return acc;
}, {});

addTagsToList(Object.keys(groupedLeads));
function addTagsToList(tags) {
  var tagList = "";
  tags.forEach((tag) => (tagList += `<li class='campain'>${tag}</li>`));
  document.querySelector(".campains").innerHTML = tagList;

  document.querySelectorAll(".campain").forEach((tag) => {
    tag.addEventListener("click", insertLeadsIntoDom);
  });
}

function insertLeadsIntoDom(event) {
  var tagLead = groupedLeads[event.target.textContent];
  // document.querySelector(".leads").innerHTML = "";
  getNextSiblings(document.querySelector(".lead-section-title")).forEach(
    (sibling) => sibling.remove()
  );
  tagLead.forEach((lead) => {
    var leadElement = document.createElement("h3");
    leadElement.textContent = lead.name;
    leadElement.classList.add("lead");
    console.log(document.querySelector(".lead-section-title"));

    document
      .querySelector(".leads")
      .insertBefore(
        leadElement,
        document.querySelector(".lead-section-title").nextSibling
      );
  });
}

function getNextSiblings(element) {
  var siblings = [];
  var next = element.nextElementSibling;

  while (next) {
    siblings.push(next);
    next = next.nextElementSibling;
  }

  return siblings;
}

// Array functions push,unshift,splice, pop, shift, splice, map, filter, reduce, find, includes, some, every, forEach, indexOf, lastIndexOf, join, reverse, sort, slice, splice
// String functions split, replace, trim, toLowerCase, toUpperCase, indexOf, lastIndexOf, charAt, substring, substr, concat, startsWith, endsWith, includes

var email = "sayed@hotmail.eg";
var last_name = "azzam";
console.log(email.includes("gmail"));

// Date functions getFullYear, getMonth, getDate, getDay, getHours, getMinutes, getSeconds, getMilliseconds, getTime, toDateString, toTimeString, toLocaleString, toLocaleDateString, toLocaleTimeString
// Math functions abs, ceil, floor, round, max, min, random, pow, sqrt, sin, cos, tan, log, exp
// date -> time
// var number = [1000, 2000, 3000, 4000, 5000, 6000];
// console.log(Math.abs(-9));
// sunday -> monday -> tuesday -> wednesday -> thursday -> friday
// 03-10
