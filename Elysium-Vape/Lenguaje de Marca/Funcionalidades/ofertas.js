const contenedor = document.getElementById("ofertas");
  
ofertas.forEach(oferta => {
    const div = document.createElement("div");
    div.classList.add("oferta");
  
    div.innerHTML = `
      <img src="${oferta.imagen}" alt="${oferta.nombre}">
      <h3>${oferta.nombre}</h3>
      <div class="precio">
        <span class="precio-original">${oferta.precioOriginal}€</span> 
        <br><strong>${oferta.precioOferta}€</strong>
      </div>
      <button class="boton-oferta" onclick="añadirAlCarrito('${oferta.nombre}', ${oferta.precioOferta})">Añadir al carrito</button>
    `;
  
    contenedor.appendChild(div);
});
  
function añadirAlCarrito(nombre, precio) {
    alert(`¡Has añadido "${nombre}" al carrito por ${precio}€!`);
    // Aquí puedes integrar lógica real de carrito si quieres
}  