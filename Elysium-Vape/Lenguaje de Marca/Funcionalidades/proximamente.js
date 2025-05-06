function avisar() {
    if (isLoggedIn) {
        alert("Te avisaremos en cuanto esté disponible. ¡Gracias por tu interés!");
    } else {
        mostrarModal();
    }
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

document.addEventListener("DOMContentLoaded", () => {
  const userImg = document.getElementById("user-icon-img");
  const avatar = localStorage.getItem("avatarUsuario");
  if (userImg && avatar) {
    userImg.src = avatar;
  }
});