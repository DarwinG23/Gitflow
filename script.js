const form = document.getElementById("login-form");
const feedback = document.querySelector(".feedback");


//comentario
const messages = {
    success: "¡Bienvenido de nuevo! Redirigiendo...",
    missing: "Completa todos los campos para continuar.",
    invalidEmail: "Revisa el formato de tu correo.",
    shortPassword: "La contraseña debe tener al menos 6 caracteres."
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
        showFeedback(messages.missing);
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFeedback(messages.invalidEmail);
        return;
    }

    if (password.length < 6) {
        showFeedback(messages.shortPassword);
        return;
    }

    showFeedback(messages.success, true);
    form.reset();
});

function showFeedback(message, isSuccess = false) {
    feedback.textContent = message;
    feedback.style.color = isSuccess ? "#62ffa1" : "#ff5b7c";
}
