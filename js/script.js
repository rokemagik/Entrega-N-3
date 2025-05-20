const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    nav.classList.remove("ocultar");
});

cerrar.addEventListener("click", () => {
    nav.classList.add("ocultar");

    setTimeout(() => {
        nav.classList.remove("visible");
    }, 300);
});