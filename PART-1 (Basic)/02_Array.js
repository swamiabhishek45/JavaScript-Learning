/*

// *****Array*****
let fruits = ["apple","mango","grapes"];
console.log(fruits);

let numbers = [1,2,3,4,5];
console.log(numbers);

let mixed = [1,2,3, "string", null, undefined];
console.log(mixed);

console.log(typeof mixed);
console.log(Array.isArray(mixed));

// Array push / pop / shift / unshift
let fruits = ["apple","mango","grapes"];
console.log(fruits);

fruits.push("banana"); // bcz array is mutable
console.log(fruits);

let one = fruits.pop();
console.log(fruits);
console.log(one);

fruits.unshift("Guava");
console.log(fruits);

fruits.shift();
console.log(fruits);

// primitive vs reference data types
// primitive
let num1 = 5;
let num2 = num1;
console.log(num1);
console.log(num2);
num1++;
console.log(num1);
console.log(num2);

// Reference
let arr1 = [1,2,3,4,5];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr1.push(6);
console.log(arr1);
console.log(arr2);

// how to clone array
let arr1 = [1,2,3,4,5];
// let arr2 = arr1.slice(0);
// let arr2 = [].concat(arr1);

// spread operator
let arr2 = [...arr1,6,7 ];

console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);

// for loop in array
let fruits = ["apple", "mango", "guava", "papaya"];
let tokery = [];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    // console.log(fruits[i].toUpperCase());
    tokery.push(fruits[i].toUpperCase());
}

console.log(fruits);
console.log(tokery);

// for of loop in Array
const fruits = ["Apple", "Grapes", "Mango", "Leechi"];

for(let fruit of fruits){
    console.log(fruit);
}

// for in loop in Array
const fruits = ["Apple", "Grapes", "Mango", "Leechi"];

for(let index in fruits){
    console.log(index);
}

// array destructuring
const myArray = [1,2,3,4,5];
let [var1, ,var3, ...myNewArray] = myArray;
console.log(var1);
console.log(var3);
console.log(myNewArray);

*/
