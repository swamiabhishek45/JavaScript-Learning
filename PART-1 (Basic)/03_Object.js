/*
// *****Object*****
// It is a reference data type
// It stores {key: value} pairs
// keys are stored in string
// Objects dont't have index

const person = { 
    "person name": "Abhishek", 
    age: 20,
    hobbies: ["Coding", "Chess", "Reading", "Exercise"]
};
console.log(person);
console.log(person["person name"]); // bracket notation
console.log(person.age); // dot notation
console.log(person.hobbies[3]);

person.gender = "male"; // add item to the object
console.log(person);

const key = "email";
person[key] = "abhi@1435"
console.log(person);

// for in loop
const person = {
    "person name": "Abhishek",
    age: 20,
    hobbies: ["Coding", "Chess", "Reading", "Exercise"]
};

for (let key in person) {
    
    console.log(`${key} : ${person[key]}`);
    // console.log(key, " : ", person[key]);
    
}

console.log(Object.keys(person));

// for of loop
const person = {
    "person name": "Abhishek",
    age: 20,
    hobbies: ["Coding", "Chess", "Reading", "Exercise"]
};

for(let key of Object.keys(person)){
    // console.log(key);
    // console.log(person[key]);
    console.log(key, person[key]);
}

// computed properties
const key1 = "obj1";
const key2 = "obj2";

const val1 = "myVal1";
const val2 = "myVal2";

const obj = {
    [key1] : val1,
    [key2] : val2
}

console.log(obj);

// spread operator
const array1 = [1,2,3];
const array2 = [5,6,7];

// const newArr = [...array1, ...array2]; // clone array
const newArr = [..."abc123"];
console.log(newArr);

// spread operator in Objects
const obj1 = {
    key1 : "val1",
    key2 : "val2"
}

const obj2 = {
    key3 : "val3",
    key4 : "val4"
}

// const newObj = {...obj1, ...obj2, key5: "val5"};
const newObj = {..."abc"};
console.log(newObj);

// Object destructuring
const bank = {
    bankName : "State Bank of India",
    year: 2003,
    famSong: "Cheap Thrills"
}

// const bankName = bank.bankName;
// const famSong = bank.famSong;
// console.log(bankName, famSong);

const {bankName:var1, famSong, ...restProperties} = bank;
console.log(var1, famSong);
console.log(restProperties);

// objects inside array

const users = [
    { user_id: 101, firstName: "Abhishek", gender: "Male" },
    { user_id: 201, firstName: "Rushikesh", gender: "Male" },
    { user_id: 301, firstName: "Shubham", gender: "Male" },
    
]

for(let user of users){
    
    console.log(user.firstName);
}

// nested destructuring
const users = [
    { user_id: 101, firstName: "Abhishek", gender: "Male" },
    { user_id: 201, firstName: "Rushikesh", gender: "Male" },
    { user_id: 301, firstName: "Shubham", gender: "Male" },
    
]

const [user1, user2, user3] = users;
console.log(user2.firstName);
console.log(user1.gender);



*/







