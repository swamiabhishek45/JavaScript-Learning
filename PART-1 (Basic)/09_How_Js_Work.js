/*
// compilation 
// code execution

console.log(this);
console.log(window);

console.log(firstName);
var firstName = "Abhishek"; 


//  Global Execution context

console.log(this);
console.log(window);
console.log(myFunction); // gives function as it is
console.log(fullName); // undefined

function myFunction() {
    console.log("This is my function");
}


var firstName = "Abhishek";
var lastName = "Swami";
var fullName = firstName + " " + lastName;
console.log(fullName);


console.log(myFunc); // undefined

var myFunc = function() {
    console.log("Inside myFunc");
}


console.log(midName); // uninitialized

let midName = "Baswaraj"

console.log(midName); 


// Function execution context

let firstName = "Abhi";
console.log(firstName);
function getFullName(firstName, lastName){
    console.log(arguments);
    let myVar = "var inside function";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
} 

const personName  = getFullName("Abhishek", "Swami");
console.log(personName);

// Scope chain and lexical environment

const lastName = "Swami";

const printName = function(){
    const firstName = "Abhishek";
    console.log(firstName);
    console.log(lastName);
}

printName();


// closures

// functioncan return function

function outerFunc() {
    function innerFunc() {
        console.log("Hello world");
    }

    return innerFunc;
}

const ans = outerFunc();
// console.log(ans);
ans();

function hello(x){
    const a = "VarA";
    const b = "VarB";
    
    return function(){
        console.log(a,b,x);
    }
}

const ans = hello("arg");
ans();


function myFunc(power){
    return function(num){
        return num ** power;
    }
    
}

const cube = myFunc(3);
const ans = cube(2);

console.log(ans);


function myFunc() {
    let counter = 0;
    return function() {
        if(counter < 1){
            console.log("Hi, You called me");
            counter++;
        }
        else {
            console.log("You already called me!!");
        }
    }
}

const func = myFunc();
func();
func();



*/







