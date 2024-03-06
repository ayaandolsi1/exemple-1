const togglePasswordButton = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePasswordButton.addEventListener("click", function() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePasswordButton.textContent = "Masquer le mot de passe";
    } else {
        passwordField.type = "password";
        togglePasswordButton.textContent = "Voir le mot de passe";
    }
});
