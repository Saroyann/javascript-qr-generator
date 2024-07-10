let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");
let button = document.querySelector("#button");

const generateQR = () => {
    let qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`;

    qrImage.src = qrCodeUrl;

    imgBox.classList.add("show-img");
}

if (button) {
    button.addEventListener('click', () => {
        if (qrText.value.trim() !== "") {
            generateQR();
        } else {
            alert("Please enter some text to generate QR code.");
        }
    });
}

if (qrText) {
    qrText.addEventListener('input', () => {
        if (qrText.value.trim() === "") {
            imgBox.classList.remove("show-img");
            qrImage.src = "";
        }
    });
}
