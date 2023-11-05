const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

/*
// Event capturing
child.addEventListener("click", () => {
    console.log("Capturing child");
}, true)
parent.addEventListener("click", () => {
    console.log("Capturing parent");
}, true)
grandparent.addEventListener("click", () => {
    console.log("Capturing grandparent");
}, true)
document.body.addEventListener("click", () => {
    console.log("Capturing body");
}, true)

// Event Bubbling / event propagation
child.addEventListener("click", () => {
    console.log("bubbling child");
})
parent.addEventListener("click", () => {
    console.log("bubbling parent");
})
grandparent.addEventListener("click", () => {
    console.log("bubbling grandparent");
})
document.body.addEventListener("click", () => {
    console.log("bubbling body");
})
// event delegation
grandparent.addEventListener("click", (e) => {
    console.log(e.target);
})

*/

