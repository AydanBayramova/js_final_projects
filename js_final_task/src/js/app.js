
const ShowIcon = document.querySelector("#show-icon"); //goster
const HideIcon = document.querySelector("#hide-icon");  //gizle
const PasswordField = document.querySelector("#password");  ///input
//const PasswordStrength = document.querySelector("#password-strength");

ShowIcon.addEventListener("click", function(){ //gostere basanda  cliclimde 
    PasswordField.setAttribute("type", "text");  //inputun taypi text olsun
    ShowIcon.style.display = "none";   //goz isaresi gorunmesin
    HideIcon.style.display = "inline"; //hide gorunsun
});

HideIcon.addEventListener("click", function(){
    PasswordField.setAttribute("type", "password");
    ShowIcon.style.display = "inline";
    HideIcon.style.display = "none";
});


const PasswordStrength = document.querySelector("#password-strength");
const StrengthIndicator = document.querySelector(".strength-indicator");


PasswordField.addEventListener("input", function(){
    const password = PasswordField.value;
    let strength = 0;

    if (password.length >= 8) {
        strength++;
    }

    if (password.match(/[0-9]/)) {
        strength++;
    }

    if (password.match(/[^A-Za-z0-9]/)) {
        strength++;
    }

    const strengthPercentage = (strength / 3) * 100;
    StrengthIndicator.style.width = strengthPercentage + "%";
    StrengthIndicator.style.backgroundColor = getStrengthColor(strength);
    
    
    PasswordStrength.style.display = "block";
});

function getStrengthColor(strength) {
    switch (strength) {
        case 0:
        case 1:
            return "red";
        case 2:
            return "orange";
        case 3:
            return "green";
        default:
            return "black";
    }
}

