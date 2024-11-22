const email = document.getElementById("email");
const password = document.getElementById("password");
const buttonSubmit = document.getElementById("submit");


email.addEventListener("input", () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Por favor, insira um e-mail valido!");
    } else {
        email.setCustomValidity("");
    }
});

password.addEventListener("input", () => {
    if (password.validity.patternMismatch) {
        password.setCustomValidity("Por favor, insira uma senha valida!");
    } else {
        password.setCustomValidity("");
    }
});