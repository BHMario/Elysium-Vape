// Mostrar el modal de edad al cargar
window.onload = () => {
  document.getElementById("modal-edad").style.display = "flex";
};

// Confirmar edad
function confirmarEdad(esMayor) {
  if (esMayor) {
    document.getElementById("modal-edad").style.display = "none";
    document.getElementById("popup-cookies").style.display = "block";
  } else {
    window.location.href = "https://www.google.com";
  }
}

// Aceptar o rechazar cookies
function aceptarCookies() {
  document.getElementById("popup-cookies").style.display = "none";
}

// Comprobar si el usuario está logeado (guardado en localStorage)
function estaLogeado() {
  return localStorage.getItem("usuarioLogeado") === "true";
}

// Mostrar modal de login si no está logeado
function verificarLogin() {
  if (!estaLogeado()) {
    document.getElementById("login-modal").style.display = "flex";
  } else {
    // Acción si ya está logeado
    window.location.href = "miCuenta.html";
  }
}

// Cerrar modal de login
function cerrarModal() {
  document.getElementById("login-modal").style.display = "none";
}

// Mostrar datos del usuario en la página miCuenta.html
function mostrarDatosUsuario() {
  const nombre = localStorage.getItem("nombreUsuario");
  const correo = localStorage.getItem("correoUsuario");

  const nombreElem = document.getElementById("nombreUsuario");
  const correoElem = document.getElementById("correoUsuario");

  if (nombreElem && correoElem) {
    nombreElem.textContent = nombre || "No disponible";
    correoElem.textContent = correo || "No disponible";
  }
}

// Cerrar sesión y limpiar datos
function cerrarSesion() {
  localStorage.clear();
  window.location.href = "index.html";
}

function mostrarDatosUsuario() {
  const nombre = localStorage.getItem("nombreUsuario");
  const correo = localStorage.getItem("correoUsuario");

  const nombreElem = document.getElementById("nombreUsuario");
  const correoElem = document.getElementById("correoUsuario");

  if (nombreElem && correoElem) {
    nombreElem.textContent = nombre || "No disponible";
    correoElem.textContent = correo || "No disponible";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const userImg = document.getElementById("user-icon-img");
  const avatar = localStorage.getItem("avatarUsuario");
  if (userImg && avatar) {
    userImg.src = avatar;
  }
});