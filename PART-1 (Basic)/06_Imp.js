/*
// *****iterables - string, array
// jispe ham for of loop laga sakte hai

const firstName = "Abhishek";

for(let char of firstName){
    console.log(char);
}

const items = ["item1", "item2", "item3"];
for (let item of items[2]) {
    console.log(`Item: ${item}`);
}

// *****array like objects*****
// who has length property
// jinko ham index se access kar sakate hai
// ex- string

const str = "Abhishek";
console.log(str.length);
console.log(str[5]);

// Sets (It is iterable)
// sets also have its own methods
// No index based access
// order is note guaranteed
// unique elements only(no duplicates allowed)

const num = new Set([1,2,3]);
num.add(4);

const item = ["item1", "item2"];
num.add(item);

num.add(["item1", "item2"])
num.add(["item1", "item2"])

console.log(num.has(1));
console.log(num);

for(let nums of num){
    console.log(nums);
}

const myArray = [1,2,3,4,4,5,5,4,3];
const uniqueElem = new Set(myArray);

console.log(uniqueElem);

let len = 0;
for(let elem of uniqueElem){
    len++;
}
console.log(len);

// ***** Map ******
const person = {
    name : "Abhi",
    age : 20,
    1 : "one"
}

console.log(person[1]);

const person = new Map();

person.set('firstName', 'Abhishek');
person.set('age', 20);
person.set(1, 'one');
person.set([1,2,3], 'OneTwoThree');

console.log(person);
console.log(person.get('age'));

for(let key of person.keys()){
    
    console.log(key, typeof key);
}

for(let [key, value] of person){
    console.log(key, value);
}

const user = {
    id: 101,
    name: "Soni"
}

const userInfo = new Map();

userInfo.set(user, {age: 19, gender: "Female"});
console.log(user);
console.log(userInfo);

console.log(user.name);
console.log(userInfo.get(user).gender);


// ********Clone using Object.assign********

const obj ={
    key1: "val1",
    key2: "val2",
}

// const obj2 = {...obj};

const obj2 = Object.assign({}, obj);

obj.key3 = "val3";
console.log(obj);

obj2.key = "val";
console.log(obj2);


// *****Optional chaining*****

const user = {
    firstName: "Abhisehk",
    address: {houseNumber : '1234'}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber);


let numbers = new Array(1,2,3);

Object.getPrototypeOf(numbers)

console.log(Array.prototype);
console.log(numbers);

*/