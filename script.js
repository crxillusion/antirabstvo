const menuIcon = document.querySelector(".hamburger__menu");
const nav = document.querySelector(".header-menu");

menuIcon.addEventListener("click", function () {
    nav.classList.toggle("active");
    this.classList.toggle("active");
});