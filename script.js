const imgBox = document.querySelector("#imgBox");
const qrImage = document.querySelector("#qrImage");
const qrText = document.querySelector("#qrText");
const button = document.querySelector("#button");

const generateQR = () => {
qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`
}

button.addEventListener(onclick, () => {
    return generateQR();
})