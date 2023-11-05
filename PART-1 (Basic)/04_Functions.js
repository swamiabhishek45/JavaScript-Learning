/*
// *****Function*****
// function declaration
function singBdaySong() {
    console.log("Happy b'day to you.........");

}

singBdaySong(); // function call / invoke / run

function add() {
    let a = 5;
    let b = 5;
    console.log(a + b);
}

add();

function sum() {
    return 10 + 10;
}

console.log(sum());

function addition(a, b) { // parameters
    return a + b;
}

const val = addition(5, 55); // arguments
console.log(val);

console.log(undefined + undefined);

// *****function expression*****
const isEven = function (n) {
    if (n % 2 === 0) {
        return true;
    }
    return false;
}

const num = isEven(5);
console.log(num);

// *****Arrow function******
var x = () => "Hello";   // no parameter and single line of code
console.log(x());

let y = n => n * 3;     // one parameter and single line of code
console.log(y(6));

const z = (m,n) => {          // multiple lines of codes in body block
    return m * n + 4;
}         // last statement will be returned as output from the arrow function
console.log(z(7, 4))

// hoisting
// This happens only in function declaration not in FE or Arrow Futn
hello();

function hello() {
    console.log('hello world');
}

// function inside function
const app = () => {
    const myFunct = () => {
        console.log("Inside myFunct");
    }
    
    myFunct();
    
    const add = () => {
        
    }
    
    
}

app();

// lexical scope
function myApp() {
    const myVar = "val1"
    
    function myFunc(){
        console.log("inside function 1", myVar);
    }
    // const myFunc2 = function(){}
    // const myFunc3 = () => { }
    
    console.log(myVar);
    myFunc();
    
}

myApp();

// block scope vs function scope
// let and const are block scope
// var is function scope

{
    var name = "Abhi";
    console.log(name);
}

{
    console.log(name);
}

// default parameters

function add(a,b=0){
    return a+b;
}

const ans = add(4,5);
console.log(ans);

// rest parameters

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`a is `,b);
    console.log(`a is `,c);
}

myFunc(1,2,3,4,5,6,7);


function addAll(...num){
    let total = 0;
    for(let n of num){
        total += n;
    }
    return total;
}

const ans = addAll(1,2,3,4,5);
console.log(ans);

// parameter destructuring

const person = {
    firstName: "Abhishek",
    gender: "Male",
}

// function printDetails(obj){
    //     console.log(obj.firstName);
    //     console.log(obj.gender);
    // }
    function printDetails({firstName, gender}){
        console.log(firstName);
        console.log(gender);
    }
    
    printDetails(person);

    
    // callback functions
    function myFunc(callback){
        console.log('hello world');
        callback("Abhishek");
    }
    
    function myFunc2(name){
        console.log("Inside my func 2");
        console.log(`my name is ${name}`);
}

myFunc(myFunc2);

// function returing function

function myFunc(){
    function myFunc2() {
        return "hello world";
    }
    return myFunc2;
}

const ans = myFunc();
console.log(ans());

*/






