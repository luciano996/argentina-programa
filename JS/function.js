// Bloque de JavaScript para mostrar un mensaje de saludo
window.onload = function() {
    alert("¡Hola! Bienvenido a mi currículum vitae en línea.");
};
// Evento de click en el botón
document.getElementById("boton").addEventListener("click", function() {
    document.getElementById("js").setAttribute("style", "background-color : blue");
    document.getElementById("saludo").style.display = "block";
    document.getElementById("java").style.display = "none";
    document.getElementById("boton").style.display = "none";
});