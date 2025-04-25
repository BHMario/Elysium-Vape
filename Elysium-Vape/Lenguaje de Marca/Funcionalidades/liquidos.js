document.addEventListener("DOMContentLoaded", () => {
  const botonesFiltro = document.querySelectorAll(".btn-filtro"); // Botones de las categorías
  const submenus = document.querySelectorAll(".submenu"); // Submenús desplegables
  const productos = document.querySelectorAll(".producto"); // Productos en la galería

  // Alternar visibilidad del menú desplegable al hacer clic
  botonesFiltro.forEach((boton, index) => {
    boton.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita que el clic se propague
      const submenu = submenus[index];

      // Cierra otros submenús abiertos
      submenus.forEach((menu) => {
        if (menu !== submenu) {
          menu.style.display = "none";
        }
      });

      // Alterna la visibilidad del submenú actual
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
  });

  // Filtrar productos al hacer clic en una categoría
  submenus.forEach((submenu) => {
    const opciones = submenu.querySelectorAll("a"); // Opciones dentro del submenú

    opciones.forEach((opcion) => {
      opcion.addEventListener("click", (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
        const categoria = opcion.textContent.toLowerCase(); // Obtiene la categoría seleccionada

        productos.forEach((producto) => {
          // Muestra u oculta productos según la categoría
          if (producto.dataset.categoria === categoria || categoria === "todos") {
            producto.style.display = "block";
          } else {
            producto.style.display = "none";
          }
        });
      });
    });
  });

  // Cierra los submenús si haces clic fuera de ellos
  document.addEventListener("click", () => {
    submenus.forEach((submenu) => {
      submenu.style.display = "none";
    });
  });
});