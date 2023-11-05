/*
// JavaScript is a synchronous programming with single threaded

// setTimeout() --> 

console.log("script start");

function hello() {
    console.log("Hello world!");
    console.log(Math.random());
}

const id = setTimeout(hello, 1000); // Event LOOP stops

for(let i = 1; i<100; i++){
    console.log("Inside for loop");
}

console.log("setTimeout id is : ", id);

// clearTimeout()
clearTimeout(id);

console.log("script end");

// setInterval() --> on every time it will give output

const id2 = setInterval(() => {
    console.log(Math.random());
}, 1000);

console.log(id2);
// clearInterval(id2);

// callback in synchronous js

function getAndAdd(num1, num2, onS, onF){
    if(typeof num1 === "number" && typeof num2 === "number"){
        onS(num1, num2);
    } else {
        onF();
    }
}

function addTwoNums (num1, num2){
    console.log(num1 + num2);
}

function onFail(){
    console.log("Wrong data type");
    console.log("Please pass numbers only");
}

getAndAdd(4, 5, addTwoNums, onFail);


// callback in Asynchronous js

// callback hell / pyramid of doom
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

setTimeout(() => {
    
    heading1.textContent = "Heading 1";
    heading1.style.color = "violet";
    
    setTimeout(() => {

        heading2.textContent = "Heading 2";
        heading2.style.color = "indigo";
        
        setTimeout(() => {
            
            heading3.textContent = "Heading 3";
            heading3.style.color = "blue";
            
            setTimeout(() => {
                
                heading4.textContent = "Heading 4";
                heading4.style.color = "green";
                
                setTimeout(() => {

                    heading5.textContent = "Heading 5";
                    heading5.style.color = "red";
                    
                    setTimeout(() => {
                        
                        heading6.textContent = "Heading 6";
                        heading6.style.color = "orange";
                        
                        setTimeout(() => {
                            
                            heading7.textContent = "Heading 7";
                            heading7.style.color = "orangered";
                            
                        },1000)
                        
                    },3000)

                },2000)
                
            },1000)

        },2000)

    },2000)

}, 1000);


function changeText(elem, text, color, time){
    setTimeout(() => {
        if(elem){
            elem.textContent = text;
            elem.style.color = color;
        } else {
            console.log("Your element is absent");
        }
    }, time);
}

changeText(heading1, "one", "violet", 1000);
changeText(heading2, "two", "indigo", 2000);
changeText(heading3, "three", "blue", 3000);
changeText(heading4, "four", "green", 4000);
changeText(heading5, "five", "orangered", 5000);
changeText(heading6, "six", "orange", 6000);
changeText(heading7, "seven", "red", 7000);


*/


