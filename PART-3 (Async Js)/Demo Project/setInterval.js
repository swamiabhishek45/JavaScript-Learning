
const body = document.body;
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", ()=>{
    const id = setInterval(() => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
    
        const rgb = `rgb(${red}, ${green}, ${blue})`;
        body.style.background = rgb;
        btn3.textContent = "rgb value"
    }, 1000);
    
    btn2.addEventListener("click", () => {
        clearInterval(id);
        btn3.textContent = body.style.background;
    })
})

