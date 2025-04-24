const sabores = [
    "Fresa", "Menta", "Mango", "Chocolate", "Limón", "Vainilla",
    "Café", "Coco", "Manzana", "Canela", "Bourbon", "Sandía",
    "Piña", "Frambuesa", "Uva", "Caramelo", "Melón"
];
  
const maxSeleccion = 3;
let seleccionados = [];
  
const tabla = document.getElementById("tabla-sabores");
  
sabores.forEach(sabor => {
    const div = document.createElement("div");
    div.classList.add("sabor");
    div.textContent = sabor;
    div.onclick = () => seleccionarSabor(div, sabor);
    tabla.appendChild(div);
});
  
function seleccionarSabor(elemento, sabor) {
    const index = seleccionados.indexOf(sabor);
    if (index !== -1) {
      seleccionados.splice(index, 1);
      elemento.classList.remove("seleccionado");
    } else if (seleccionados.length < maxSeleccion) {
      seleccionados.push(sabor);
      elemento.classList.add("seleccionado");
    } else {
      alert("Solo puedes elegir hasta 3 sabores.");
    }
}
  
function reiniciarSeleccion() {
    seleccionados = [];
    document.querySelectorAll(".sabor").forEach(el => el.classList.remove("seleccionado"));
}
  
function añadirAlCarrito() {
    if (seleccionados.length === 0) {
      alert("Selecciona al menos un sabor.");
      return;
    }
    alert("Has añadido al carrito el sabor: " + seleccionados.join(", "));
}  