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