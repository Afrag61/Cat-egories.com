var inputName = document.getElementById("input-name");
var inputMail = document.getElementById("input-mail");
var inputMessage = document.getElementById("input-message");
var button = document.querySelector(".submit-button");
var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector(".form");

function checkInput() {
  if (
    inputName.value.trim() !== "" &&
    regEx.test(inputMail.value) &&
    inputMessage.value.trim() !== ""
  ) {
    button.style.backgroundColor = "#F1CE06";
    button.style.color = "black";
    button.disabled = false;
  } else {
    button.style.backgroundColor = "#3a0000";
    button.style.color = "#947e03";
    button.disabled = true;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("submitted");
});
