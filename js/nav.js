$(function () {
  if (window.location.pathname !== "/")
    $("#functional-nav").load("/layout/functional-nav.html");
});

function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-nav-body");
  const toggleButton = document.getElementById("mobile-menu-toggle-button");
  toggleButton.classList.toggle("close");
  mobileMenu.classList.toggle("hidden");
}
