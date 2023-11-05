/*
// ***** Object Oriented Javascipt *****
// methods
// this keyword
const person = {
    firstName: "Abhishek",
    age: 20,
    about: function() {
        console.log(`person name is ${this.firstName} and age is ${person.age}`);
        console.log("Method means function inside object");
        
        console.log(this); // this === person(object name)
    }
}

person.about();

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: "Abhishek",
    age: 20,
    about: personInfo
}
const person2 = {
    firstName: "Soni",
    age: 19,
    about: personInfo
}
const person3 = {
    firstName: "Shubham",
    age: 26,
    about: personInfo
}

person1.about();
person2.about();
person3.about();

// window object
"use strict";   
console.log(this)


// call, apply, bind
const user1 = {
    firstName: "Abhishek",
    age: 20,
    about : function(hobby, singer) {
        console.log(this.firstName, this.age, hobby, singer);
    }
}

const user2 = {
    firstName: "Ram",
    age: 22,
}

// call
user1.about.call();
user1.about.call(user1);
user1.about.call(user2, "Reading", "Arj");

// apply
user1.about.apply(user2, ["Reading", "Arj"]);

// bind
const func = user1.about.bind(user1, "Reading", "Arj");
func();




// This inside arrow functions - Error❓❓

// const user1 = {
//     firstName : "Abhishek",
//     lastName : "Swami",
//     age: 20,
//     email: "abhi@gmail.com",
//     address: "Latur, Maharashtra",
//     about : function (){
//         return `${this.firstName} is ${this.age} years old`;
//     },

//     is18(){
//         return this.age >= 18;
//     }
// }

// 1. function (that function create object)
// 2. add key: value pair
// 3. return object

// __proto__ / [[prototype]] --> reference of object

const userMethods = {
    about : function () {
        return `${this.firstName} is ${this.age} years old`;
    },

    is18 : function () {
        return this.age >= 18;
    }
}
*************************************
*************************************
// Constructor Function
*/
function CreateUser(firstName, lastName, age, email, address) {
    // const user = Object.create(createUser.prototype);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;

    // return user;
}

CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
}

CreateUser.prototype.is18 = function () {
    return this.age >= 18;
}

const user1 = new CreateUser("Abhishek", "Swami", 20, "abhi@gmail.com", "Latur");
console.log(user1);
console.log(user1.about());
console.log(user1.is18());

for(let key in user1){
    // console.log(key); // gives --> all property even prototype

    if(user1.hasOwnProperty(key)){ // only gives -> user1 property
        console.log(key);
    }
}

const user2 = new CreateUser("Abhishek", "Swami", 20, "abhi@gmail.com", "Latur");
console.log(user2);


/*
**************************************

// *******PROTOTYPE*******
// an empty object {}

function hello() {
    console.log('hello world');
}

// javascript function = function + object

// console.log(hello.name); 
// you can add your own properties
// hello.property = "Me create property";
// console.log(hello.property);

console.log(hello.prototype); // gives -> empty obj {}

// only function provide portotype property

hello.prototype.property1 = "This is first property";
hello.prototype.property2 = "This is second property";
hello.prototype.sing = function () {
    return "Lalalala"
}

console.log(hello.prototype.sing); // give function as it is
console.log(hello.prototype.sing()); // function output
console.log(hello.prototype);


// *****new keyword*****
// 1. create an empty object   this = {}
// 2. return this  
// 3. Object.create(createUser.prototype)

function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function() {

    console.log(this.firstName, this. age);
}


const user1 = new createUser("Abhishek", 20);

console.log(user1);



*/





