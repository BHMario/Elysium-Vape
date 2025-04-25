const sabores = [
  "Vainilla", "","", "", "", "", "", "", "", "", "", "", "Fresa",
  "Mango", "Sandía", "", "", "", "", "", "Uva", "Menta", "Lenteja", "Piña colada", "Chocolate", "Café",
  "Caramelo", "Canela", "", "", "", "", "", "Limón", "Naranja", "Manzana verde", "Manzana roja", "Blueberry", "Frambuesa",
  "Melón", "Coco", "Chicle", "Yogur", "Galleta", "Pastel", "Helado de vainilla", "Tiramisú", "Cheescake", "Mocca", "Capuccino", "Té verde", "Té negro",
  "Red bull", "Monster", "Coca-Cola", "Cerveza", "Cerveza de raíz", "Whisky", "RonCola", "Vino", "Sangría", "Mojito", "Margarita", "Limonada", "Pepino y Limón",
  "Granada", "Maracuyá", "Guayaba", "Kiwi", "Lychee", "Níspero", "Durazno", "Almendra", "Pistacho", "Avellana", "Nuez", "Miel", "Azúcar tostada",
  "Dulce de Leche", "Crema irlandesa", "Menta y chocoalte", "Galleta de avena", "Donut glaseado", "Cotton candy", "Marshmallow", "Chicle uva", "Blue razz", "Mango y chile", "Tamarindo", "Chamoy", "Pepino enchilado"
];
  
const maxSeleccion = 3;
let seleccionados = [];
  
const tabla = document.getElementById("tabla-sabores");
  
sabores.forEach(sabor => {
  const div = document.createElement("div");
  div.classList.add("sabor");

  if (sabor === "") {
    div.classList.add("espacio-vacio"); // clase especial
  } else {
    div.textContent = sabor;
    div.onclick = () => seleccionarSabor(div, sabor);
  }

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