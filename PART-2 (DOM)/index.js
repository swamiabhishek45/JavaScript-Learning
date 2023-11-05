/*
// DOM - Document Object Model

console.dir(document);

// select element using getElementById

const mainheading = document.getElementById("main-heading");
console.log(mainheading);

// select element by querySelector

const mainheading = document.querySelector("#main-heading");
console.log(mainheading);

const navItem = document.querySelectorAll(".nav-item");
console.log(navItem);

// change text
// textContent and innerText
const mainheading = document.querySelector("#main-heading");

console.log(mainheading.textContent); // gives hidden text also
mainheading.textContent = "Manage My Task"
console.log(mainheading.innerText); // do not gives hidden text

// change style of the element

const mainheading = document.querySelector("div.headline h2");
mainheading.style.color = "#ff0000";
mainheading.style.backgroundColor = "yellow"

// get and set attributes

const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));

const input = document.querySelector(".form-todo input");
console.log(input.getAttribute("type"));

input.setAttribute("type", "Enter your task here...")
console.log(input.getAttribute("type"));

// get multiple elements by class Name

const navItems = document.getElementsByClassName("nav-item"); // HTML Collection
console.log(navItems[0]);

// get multile elements by querySelectorAll
const navItems = document.querySelectorAll(".nav-item"); // NodeList
console.log(navItems);


// loop
//we can't use forEach loop with HTMLCollection
const navItems = document.getElementsByTagName("a");

// for(let i = 0; i<navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.color = "blue";
//     navItem.style.backgroundColor = "white";
// }

// for (let navItem of navItems) {
//     navItem.style.color = "blue";
//     navItem.style.backgroundColor = "white";
// }

// navItem = Array.from(navItems); // HTMLCollection --> Array
// console.log(Array.isArray(navItem));
navItem.forEach((navItem) => {
    navItem.style.color = "blue";
    navItem.style.backgroundColor = "white";
}) 


const navItems = document.querySelectorAll("a")

// for(let i = 0; i<navItems.length;i++){
//     const navItem = navItems[i];
//     navItem.style.color = "blue";
//     navItem.style.backgroundColor = "white";
// }

// for (let navItem of navItems) {
//     navItem.style.color = "blue";
//     navItem.style.backgroundColor = "white";
// }


navItems.forEach((navItem) => {
    navItem.style.color = "blue";
    navItem.style.backgroundColor = "white";
}) 

// innerHTML
// you can change innerHTML but don't use for adding new elements
const headline = document.querySelector(".headline");
headline.innerHTML = "<h1> change innerHTML </h1>"
headline.innerHTML += "<button class = \"btn\"> Learn More </button>"

const todoList = document.querySelector(".todo-list");
todoList.innerHTML += "<li> New Todo </li>"
todoList.innerHTML += "<li>teach students</li>"

// classList --> add, remove, toggle

const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);

sectionTodo.classList.add("bg-dark");
sectionTodo.classList.remove("container");

console.log(sectionTodo.classList.contains("container"));
sectionTodo.classList.toggle("bg-dark");

const header = document.querySelector(".header"); // specificity in CSS

// createElement() ---> append, prepend, remove, before, after

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "New Todo";

const newTodoText = document.createTextNode("New todo");
newTodoItem.append(newTodoText);

const newTodoItem2 = document.createElement("li");
newTodoItem2.textContent = "New Todo 2";

const todoList = document.querySelector(".todo-list");
todoList.append(newTodoItem);
todoList.prepend(newTodoItem2);

const todo1 = document.querySelector(".todo-list li");
todo1.remove();

// before, after
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "New Todo";
const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem);
todoList.after(newTodoItem);

// elem.insertAdjacentHTml(where, html)
// beforebegin;
// afterbegin;
// beforend;
// afterend;

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforebegin", "<li> New Todo </li>");
todoList.insertAdjacentHTML("afterbegin", "<li> New Todo </li>"); // prepend
todoList.insertAdjacentHTML("beforeend", "<li> New Todo </li>"); // append
todoList.insertAdjacentHTML("afterend", "<li> New Todo </li>");

// clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New Todo";
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);

// static list vs live list
// querySelectorAll --> static list
// getElementBySomething --> live list

const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const li6 = document.createElement("li");
li6.textContent = "Item 6";

ul.append(li6);

console.log(listItems);

// how to get the dimensions of the element
const sectionTodo = document.querySelector(".section-todo");

// console.log(sectionTodo.getBoundingClientRect());
console.log(sectionTodo.getBoundingClientRect().width);
*/