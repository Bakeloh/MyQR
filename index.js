document.addEventListener("DOMContentLoaded", function () {

    const generateQRButton = document.getElementById("generateQRButton");
    const downloadQRButton = document.getElementById("downloadQRButton");
    const qrText = document.getElementById("qrText");


    generateQRButton.addEventListener("click", generateQR);
    downloadQRButton.addEventListener("click", downloadQR);
    qrText.addEventListener("focus", clearInputField);
});

function generateQR() {
    const downloadLink = document.getElementById("downloadLink");
    const qrText = document.getElementById("qrText");
    const qrImage = document.getElementById("qrImage");
    const imgBox = document.getElementById("imgBox");

    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imgBox.classList.add("show-img");

        /* Enabling download */
        // downloadLink.href = qrImage.src;
        // downloadLink.style.display = "block";

        qrText.value = ""; /* clearing input field */
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

function downloadQR() {
    const qrImage = document.getElementById("qrImage");
    const error = document.getElementById("error");

    if (qrImage.src && qrImage.src !== "") {
        const newTab = window.open();
        newTab.document.write('<img src="' + qrImage.src + '">');
    } else {
        error.style.display = "block";
    }
}

function clearInputField() {
    const qrText = document.getElementById("qrText");
    qrText.value = "";
}
