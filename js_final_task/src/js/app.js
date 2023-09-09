
const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");

togglePasswordButton.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.innerHTML = '<i class="fas fa-eye"></i>';
  } else {
    passwordInput.type = "password";
    togglePasswordButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
  }
});

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);
  passwordInput.className = strength; 
});

function checkPasswordStrength(password) {

  if (password.length < 6) {
    return "weak";
  } else if (password.length < 10) {
    return "medium";
  } else {
    return "strong";
  }
}


