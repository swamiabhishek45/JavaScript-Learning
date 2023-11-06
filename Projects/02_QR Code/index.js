const qrformEl = document.getElementById("qrForm");
const qrImageEl = document.getElementById("qrImage");
const qrContainerEl = document.getElementById("qrContainer");
const qrInputTextEl = document.getElementById("qrInputText");
const generateBtnEl = document.getElementById("generate-btn");

const renderQRCode = (url) => {
    if(!url) return;
    generateBtnEl.innerText = "Generating QR Code...";
    qrImageEl.src = url;
    
    const onImgeLoad = () => {
        const interval = setInterval(() => {
            qrContainerEl.classList.add("show");
            clearInterval(interval);
            generateBtnEl.innerText = "Generate QR Code"
        },400);

    }

    qrImageEl.addEventListener('load', onImgeLoad);


}

qrformEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(qrformEl);
    const text = formData.get("qrText");
    const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${text}`;

    renderQRCode(URL);
});

qrInputTextEl.addEventListener("keyup", () => {
    if(!qrInputTextEl.value.trim()){
        qrContainerEl.classList.remove("show")
    }

});