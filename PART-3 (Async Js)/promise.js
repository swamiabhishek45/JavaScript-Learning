/*
// Promise

// const { reject } = require("async");

// Promise produce/create

const bucket = ["coffee", "sugar", "teaPowder", "vegetables", "milk", "rice", "salt", "chips"];

// function returing promise
function friedRice() {
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve("Fried Rice");
        } else {
            reject(new Error("something missing from bucket"))
        }
    })
}

// Promise consume
friedRice().then(
    (ans) => { // resolve
        console.log(ans);
    }
).catch(
    (error) => { // reject
        console.log(error);
    }
)

// promise & setTimeout

const tea = new Promise((resolve, reject) => {
    const value = true;
    setTimeout(() => {
        if (value) {
            resolve("Tea is ready !!!");
        } else {
            reject("something is error please find it first");
        }
    }, 2000);
})

tea.then(
    (ans) => {
        console.log(ans);
    }
).catch(
    (error) => {
        console.log(error);
    }
)


// Promise.resolve
Promise.resolve(5).then(val => {
    console.log(val);
})

// then() --> then method always return Promise

// Promimse Chaining

function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("Abhishek");
    })
}

myPromise()
    .then(val => {
        console.log(val);
        val += " Swami";
        return val; // return Promise.resolve(val);
    })
    .then(val => {
        console.log(val);
    })

    
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(elem, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (elem) {
                elem.textContent = text;
                elem.style.color = color;
                resolve();
            } else {
                reject("Your element is absent");
            }
        }, time);
    })
}

changeText(heading1, "one", "red", 1000)
    .then(() => {
        return changeText(heading2, "two", "blue", 1000)
    })
    .then(() => changeText(heading3, "three", "green", 1000))
    .then(() => changeText(heading4, "four", "orange", 1000))
    .then(() => changeText(heading5, "five", "violet", 1000))
    .then(() => changeText(heading6, "six", "orangered", 1000))
    .then(() => changeText(heading7, "seven", "pink", 1000))
    .catch((error)=>{
        alert(error);
    })

    */