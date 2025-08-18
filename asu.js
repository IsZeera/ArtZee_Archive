const boton_menu = document.querySelector('.button_btn');
const links = document.querySelector('.link_2_nav');


boton_menu.addEventListener("click", () => {
    links.classList.toggle("active");
})