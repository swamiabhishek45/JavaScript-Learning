/*
// AJAX : Asynchronous js and XML

// HTTP request : Hyper Text Transport Protocal


// we have 3 most commom ways to create and send request to server
// 1. XMLHttpRequest (old way)
// 2. fetch API (new way)
// 3. axios (third party library)

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// step 1
xhr.open("GET", URL, true);

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         const response= xhr.response; // string
//         const data = JSON.parse(response);
//         console.log(data); // object
//     }
// }

xhr.onload = function () {
    const response = xhr.response; // string
    const data = JSON.parse(response);
    console.log(data); // object
}


xhr.send();
*/

// Error handeling

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        console.log(data);
    } else {
        console.log("someting went wrong");
    }
}

xhr.onerror = () => {
    console.log("network error");
}

xhr.send();