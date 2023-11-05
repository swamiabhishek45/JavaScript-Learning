/*

// intro to events
// click event
const btn = document.querySelector(".btn-headline");

function clickMe(){
    console.log("you click me!!!!!!!!!");
    console.log(this); // this --> button
}

btn.addEventListener("click", clickMe);


btn.addEventListener("click", ()=>{
    console.log(this); // this --> window
});

// Add events on multiple elements
const allBtns = document.querySelectorAll(".my-btns button");

// for(let btn of allBtns){
    //     btn.addEventListener("click", function(){
        //         console.log(btn.textContent);
        //     })
        // }
        
        // for(let i = 0; i< allBtns.length; i++){
            //     allBtns[i].addEventListener("click", function(){
                //         console.log(this);
                //     })
                // }
                
                // allBtns.forEach(function(btn){
                    //     btn.addEventListener("click", function(){
                        //         btn.style.backgroundColor = "red";
                        //     })
                        // })
                        
                        allBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "red";
    })
})


// on index.html
// keypress event

const body = document.body;

body.addEventListener("keypress", (e) => {
    console.log(e.key);
})

// mouseover, mouseleave
const headline = document.querySelector(".btn-headline");

headline.addEventListener("mouseover", (e) => {
    console.log("mouseover event occur");
})

*/