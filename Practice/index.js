
setTimeout(() => {
    console.log("hi");
}, 1000);

setInterval(() => {
    console.log("Good");
}, 1000);


let original = { a: 1, b: { c: 2 } };
let copy = { ...original }; // spread operator


let deepCopy = JSON.parse(JSON.stringify(original));


const numbers = [1, 2, 3];
const [a, b] = numbers; // a=1, b=2


const person = { name: 'Abhishek', age: 22 };
const { name, age } = person; // name='Abhishek', age=22



const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]


function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // 6
