
function generateQR() {
    let qrText = document.getElementById("qrText");
    let qrImage = document.getElementById("qrImage");
    let imgBox = document.getElementById("imgBox");

    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imgBox.classList.add("show-img");

        /* Enabling download */
        downloadLink.href = qrImage.src;
        downloadLink.style.display = "block";

        qrText.value = ""; /* clearing input field */
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

// download QR
// function downloadQR() {
//     let qrImage = document.getElementById("qrImage");
//     let error = document.getElementById("error")

//     if (qrImage.src && qrImage.src !== "") {
//         const newTab = window.open();
//         newTab.document.write('<img src="' + qrImage.src + '">');
//     } else {
//         error.style.display = "block";
//     }
// }



// Add autoclear textbox.
// Add download button.