document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll(".btn-carrito");
  
    botones.forEach((boton) => {
      boton.addEventListener("click", () => {
        alert("Producto añadido al carrito");
        // Aquí podrías añadir lógica real de carrito si tienes uno implementado
      });
    });
  });
  
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