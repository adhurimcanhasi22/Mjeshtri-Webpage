const menu = document.querySelector("#ac-mobile-menu");
const menuLinks = document.querySelector(".ac-navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
