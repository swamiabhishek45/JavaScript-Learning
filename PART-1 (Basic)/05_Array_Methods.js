/*

// important array methods

// *****forEach*****
const num = [3, 5, 2, 6];

function mulBy2(num, index) {
    console.log("index is ", index);
    console.log(`${num} * 2 = `, num * 2);
}

// for (let i = 0; i < num.length; i++) {
//     mulBy2(num[i], i);
// }

num.forEach(mulBy2);


// *****map method*****
const num = [3, 5, 4, 6, 5];

// const square = function (number) {
//     return number * number;
// }
// const sqrNum = num.map(square); // gives new array

const sqrNum = num.map((number) => {
    return number * number;
});

console.log(sqrNum);

*/
// **********filter method***********
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    };
}


console.log(numbers.filter(isEven));

/*
// ***********reduce method***************
const numbers = [1, 2, 3, 4, 5, 10];

const sum = numbers.reduce((accumulator, currVal) => {
    return accumulator + currVal;
}, 100);

console.log(sum);

const userCart = [
    { Id: 1, name: "mobile", price: 20000 },
    { Id: 2, name: "watch", price: 1200 },
    { Id: 3, name: "shoes", price: 2000 },
]

const ans = userCart.reduce((totalPrice, currprice) => {
    return totalPrice + currprice.price;
}, 0);


console.log(ans);


// *********sort method*********
const arr = [5, 7, 6, 1200, 3000, 45, 99];
// ["5", "7", "6", "1200", "3000", "45", "99"]
// [53, 55, 54, 49, 51, 52, 57]

// '0' = 48
// '1' = 49
// '2' = 50
// '3' = 51
// '4' = 52
// '5' = 53
// '6' = 54
// '7' = 55
// '8' = 56
// '9' = 57

arr.sort();

console.log(arr);

const num = [5,4,7,1200,1,890];
num.sort((a,b)=>a-b); // ascending order
num.sort((a,b)=>b-a); // descending order

console.log(num);

// 1200 , 1
// a-b ----> 1199
// a-b ----> positive(greater than 0) ---> b, a
// 1, 1200

// 4, 7 -----> -3
// a-b ----> negative -----> a, b


// *****find method******
const myArray = ["Hello", "cat", "Dog", "Lion"];

function isLength(string){
    return string.length === 3;
}

const ans = myArray.find(isLength);

console.log(ans);

// *****every method*****

const arr = [2,4,6,8,10];

const ans = arr.every((num)=> num%2 === 0)

console.log(ans);
// *****some method*****

const arr = [1,3,5,2];

const ans = arr.some((num)=> num%2 === 0)

console.log(ans);

// *****fill method*****
const myArray = new Array(10).fill(-1);
console.log(myArray);

const arr = [0,1,2,3,4,5,6,7];
//  val, StartInd, EndInd
arr.fill(0, 2, 4);
console.log(arr);

// ***** splice method*****
// startInd, delete, insert
const myArray = ["item1", "item2", "item3"];

// delete
// myArray.splice(1, 1);

// insert
myArray.splice(1, 0, "item56");

console.log(myArray);

*/









