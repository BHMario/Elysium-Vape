window.onload = () => {
  document.getElementById("modal-edad").style.display = "flex";
};

function confirmarEdad(esMayor) {
  if (esMayor) {
      document.getElementById("modal-edad").style.display = "none";
      document.getElementById("popup-cookies").style.display = "block";
  } else {
      window.location.href = "https://www.google.com";
  }
}

function aceptarCookies() {
  document.getElementById("popup-cookies").style.display = "none";
}

// Actualización en tiempo real del valor de nicotina
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("nicotina");
  const output = document.getElementById("valor-nicotina");

  // Inicializa el valor mostrado
  output.textContent = `${slider.value} mg`;

  // Cambia el valor a medida que se mueve la barra
  slider.addEventListener("input", function () {
      output.textContent = `${slider.value} mg`;
  });
});
