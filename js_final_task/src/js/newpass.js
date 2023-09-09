const togglePasswordButton = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePasswordButton.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = "password";
    togglePasswordButton.innerHTML = '<i class="fas fa-eye"></i>';
  }
});

passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);
  showPasswordStrength(strength);
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

function showPasswordStrength(strength) {
  const passwordStrength = document.querySelector(".password-strength");
  const weakSpan = document.querySelector(".weak");
  const mediumSpan = document.querySelector(".medium");
  const strongSpan = document.querySelector(".strong");

  passwordStrength.style.borderColor = "red"; 
  weakSpan.style.display = "none";
  mediumSpan.style.display = "none";
  strongSpan.style.display = "none";

  if (strength === "weak") {
    passwordStrength.style.borderColor = "red";
    weakSpan.style.display = "inline";
  } else if (strength === "medium") {
    passwordStrength.style.borderColor = "orange";
    mediumSpan.style.display = "inline";
  } else if (strength === "strong") {
    passwordStrength.style.borderColor = "green";
    strongSpan.style.display = "inline";
  }
}
