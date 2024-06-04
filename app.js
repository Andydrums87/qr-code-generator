const inputContainer = document.querySelector(".input-container");
const qrContainer = document.querySelector(".qr-container");
const nav = document.querySelector(".nav");
const userInput = document.getElementById("user-input");
const image = document.getElementById("image")


document.getElementById("btn").addEventListener("click", function () {

    qrCode();
    toggleDiv();
    toggleNav();
 
    });

function qrCode () {
  if (userInput.value == '') return;
  let linkQR = 'https://api.qrserver.com/v1/create-qr-code/';
  image.src = linkQR + '?size=500x500&data=' + userInput.value;
}

    function toggleDiv () {
        inputContainer.classList.add("none");
        qrContainer.classList.add("active");
    }

    function toggleNav() {
        nav.classList.toggle("active");

    }

let downloadImg = document.getElementById("image");

document.getElementById("download").addEventListener("click", function () {

let imagePath = downloadImg.getAttribute('src');
let fileName = getFileName(imagePath);
saveAs(imagePath, fileName);

});

function getFileName(str) {
  let gostr = str.substring(str.lastIndexOf('=') + 1);
  let format = ".jpg";
  return gostr.concat(format);
}
   


    





