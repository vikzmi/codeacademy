// prisijungimo linkai
let helpLinks = document.querySelector(".help .linkai");
let toggleHelp = document.getElementById("toggleHelp");
toggleHelp.addEventListener("click", function () {
  toggleHelp.classList.toggle("active");
  helpLinks.classList.toggle("active");
});

// slaptažodis

let passwordInput = document.getElementById("passwordInput");
let showPasswordButton = document.querySelector(".sh-pswd");
let eyeIcon = showPasswordButton.querySelector("i");
let isPasswordVisible = false;

showPasswordButton.addEventListener("mousedown", function () {
  if (!isPasswordVisible) {
    passwordInput.type = "text";
    eyeIcon.classList.remove("ph-eye");
    eyeIcon.classList.add("ph-eye-slash");
    isPasswordVisible = true;
  }
});

showPasswordButton.addEventListener("mouseup", function () {
  if (isPasswordVisible) {
    passwordInput.type = "password";
    eyeIcon.classList.remove("ph-eye-slash");
    eyeIcon.classList.add("ph-eye");
    isPasswordVisible = false;
  }
});