// MENU
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// BIENVENIDA
window.addEventListener("load", () => {
    alert("Bienvenido a mi portafolio");
});

// CAMBIAR TEXTO
const btnCambiar = document.getElementById("btn-cambiar");
const texto = document.getElementById("texto");

btnCambiar.addEventListener("click", () => {
    texto.textContent = "Ahora estás viendo una versión interactiva.";
});

// TOGGLE
const btnToggle = document.getElementById("btn-toggle");
const extra = document.getElementById("extra");

btnToggle.addEventListener("click", () => {
    extra.classList.toggle("hidden");
});