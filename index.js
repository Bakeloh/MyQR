
document.addEventListener("DOMContentLoaded", function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }else{
        qrText.classList.add(`error`);
        setTimeout(()=>{
            qrText.classList.remove(`error`);
        },1000);
    }




    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");

    // function generateQR(){
    //     qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

    // 00009.36*60
    imgBox.classList.add("show-img");
    // comment on above
});