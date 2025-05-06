document.addEventListener("DOMContentLoaded", () => {
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const direccion = document.getElementById("direccion");
  const pago = document.getElementById("pago");
  const avatarUpload = document.getElementById("avatar-upload");
  const avatarPreview = document.getElementById("avatar-preview");

  // Cargar datos del usuario
  nombre.value = localStorage.getItem("nombreUsuario") || "";
  correo.value = localStorage.getItem("correoUsuario") || "";
  direccion.value = localStorage.getItem("direccionUsuario") || "";
  pago.value = localStorage.getItem("pagoUsuario") || "";

  // Imagen de perfil
  const avatarData = localStorage.getItem("avatarUsuario");
  if (avatarData) {
    avatarPreview.src = avatarData;
  }

  // Cambiar avatar
  avatarUpload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      localStorage.setItem("avatarUsuario", evt.target.result);
      avatarPreview.src = evt.target.result;

      // También actualizar la imagen de usuario en otras páginas si existe
      const usuarioBtn = document.getElementById("user-icon-img");
      if (usuarioBtn) usuarioBtn.src = evt.target.result;
    };
    reader.readAsDataURL(file);
  });

  // Guardar cambios
  document.getElementById("form-cuenta").addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("nombreUsuario", nombre.value);
    localStorage.setItem("correoUsuario", correo.value);
    localStorage.setItem("direccionUsuario", direccion.value);
    localStorage.setItem("pagoUsuario", pago.value);
    alert("Datos guardados correctamente.");
  });

  // Historial simulado
  const pedidos = [
    "Pedido #12345 - 2x Fresa Salvaje - $20",
    "Pedido #12346 - 1x Mentol Ice - $10"
  ];
  const listaPedidos = document.getElementById("lista-pedidos");
  listaPedidos.innerHTML = "";
  pedidos.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    listaPedidos.appendChild(li);
  });

  // Verificación de sesión
  if (localStorage.getItem("usuarioLogeado") !== "true") {
    alert("Debes iniciar sesión para acceder.");
    window.location.href = "login.html";
  }

  // Cerrar sesión
  document.getElementById("cerrar-sesion").addEventListener("click", () => {
    localStorage.clear();
    alert("Sesión cerrada.");
    window.location.href = "index.html";
  });
});