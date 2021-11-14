const navToggle = document.querySelector(".nav-toggle");
const item = document.querySelector(".item");

navToggle.addEventListener("click",() =>{
    item.classList.toggle("nav-menu-visible");

    if (item.classList.contains("nav-menu-visible")) {
        navToggle.setAttribute("aria-label","Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label","Abrir menú");
    }
});
