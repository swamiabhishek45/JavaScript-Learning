/*
// "use strict"; // strict mode 

console.log("Good Morning Abhishek"); // semicolon ; is optional

// *******VARIABLE*******
// declare variable
var firstname = "Abhishek";

// use a variable
console.log(firstname);

// change value 
firstname = "Swami";
console.log(firstname);

// Rules for naming variables
var val1 = 5;
console.log(val1 ** 2); // get square **
console.log(val1 ** 0.5); // get square root **

// let keyword
var name = "Prajakta";
var name = "Soni";
console.log(name); // Soni

let Name = "Abhishek";
Name = "Abhi";
console.log(Name);

// declare constants
const pi = 3.14; // cannot change the value 
console.log(pi);

// String indexing
let fullName = "Abhishek Baswaraj Swami";
console.log(fullName[2]);
n = fullName;
console.log(n.length);
console.log(n[n.length-1]);

// trim()
let str = '   Hello World    ';
console.log(str.length);

str = str.trim();
console.log(str.length);

// toUpperCase()
let str = "Think Positive";
console.log(str.toUpperCase());

// toLowerCase()
let str = "HI ABHI";
console.log(str.toLowerCase());

// slice
let str = "Abhishek";
str = str.slice();
console.log(str);
console.log(str.slice(3));
console.log(str.slice(2,5));
console.log(str.slice(0,4));

// ***typeof operator***
let age = 20;
let firstname = "Abhishek";
let height = "5"

console.log(typeof age);
console.log(typeof firstname);

// convert number to string
console.log(typeof age); // number
console.log(typeof (age + "")); // 20 -> "20"
console.log(typeof age); // string

// convert string to number
console.log(typeof +height); // "5" -> 5

console.log(height); // "5"
console.log(+height); // 5

// string concatenation
let str1 = "12";
let str2 = "8";

console.log(str1 + str2); // "128"
console.log(+str1 + +str2); // 20

// template string
let age = 20;
let name = "Abhishek";

// "my name is Abhishek and my age is 20"
// let aboutMe = "my name is " + name + " and my age is " + age;

let aboutMe = `my name is ${name} and my age is ${age}`; // use backstricks `` 
console.log(aboutMe);

// undefined
var name1;
let name2;
// const name2; // Error❌❌

console.log(typeof name1); // undefined
console.log(typeof name2); // undefined

name2 = 45;
console.log(typeof name2); // number

// null
let myVar = null; 
console.log(myVar);
console.log(typeof null); // bug in js ❌❌

// BigInt
let num = BigInt(347537863489245654675);
console.log(num);

let num2 = 12345n;
console.log(num2);

console.log(num + num2); // for con of BigInt need same datatype

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

// booleans
let num1 = 6;
let num2 = "6";

console.log(num1 > num2);

// == vs ===
console.log(num1 == num2); // true
console.log(num1 === num2); // false

// != vs !==
let num1 = 6;
let num2 = "6";

console.log(num1 != num2); // false
console.log(num1 !== num2); // true

// truthy and falsy values
// falsy values
let name;
// let name = false;
// let name = 0;
// let name = "";
// let name = null;

if(name){
    console.log("Name is defined");
}else{
    console.log('No Name');
}

// *****if else condition*****
let age = 18;

if(age >= 18){
    console.log("You are eligible to vote");
}

// ternary / conditional operator
let age = 8;
let drink = age >= 5 ? "coffee" : "milk";
console.log(drink);


// switch statement
let day = +prompt("Enter value"); 
// let day = 5;


switch (day) {
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Satuarday");
        break;
    case 7: 
        console.log("Sunday");
        break;

    default:
        console.log("Invalid number");
        break;
}

let i = 0;

while(i<=3){
    console.log(i); // 0, 1, 2, 3
    // *****loop*******
    i++;
}

console.log(i); // 4

// sum of first n natural number
let n = 0
let ans = 0;
while(n<=10){
    ans += n;
    n++;
}

console.log(ans);

let num = 10;
let total = (num*(num+1))/2;
console.log(total);

let num = 100;
let total = 0;
for(let i = 1; i<=num; i++){
    console.log(total += i);
}

// break and continue
for(let i = 0; i<= 10; i++){
    if(i%2 === 0){
        continue;
    }
    console.log(i);
}

let i = 10;
do{
    console.log(i);
    i++;
}while(i<=9); 

*/


















