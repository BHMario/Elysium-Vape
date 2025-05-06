// ========== LOGIN ==========
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("login-error");

    if (!email.includes("@") || password.length < 6) {
      errorElement.textContent = "Correo o contraseña inválidos.";
      return;
    }

    // Simular login exitoso
    localStorage.setItem("usuarioLogeado", "true");
    alert("Inicio de sesión exitoso");
    window.location.href = "index.html";
  });
}

// ========== REGISTRO ==========
const registroForm = document.getElementById("registro-form");
if (registroForm) {
  registroForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("registro-error");

    if (nombre.length < 3) {
      errorElement.textContent = "Por favor, ingresa un nombre válido.";
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errorElement.textContent = "El correo electrónico no es válido.";
      return;
    }

    if (password.length < 6) {
      errorElement.textContent = "La contraseña debe tener al menos 6 caracteres.";
      return;
    }

    // Simular registro exitoso
    localStorage.setItem("usuarioLogeado", "true");
    localStorage.setItem("nombreUsuario", nombre);
    localStorage.setItem("correoUsuario", email);
    alert("Registro exitoso");
    window.location.href = "index.html";
  });
}