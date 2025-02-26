var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");
var scrollButton = document.getElementById("scroll-down-button")

menuButton.addEventListener("click", function() {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    menuButton.textContent = "+";
  } else {
    menu.style.display = "flex";
    menuButton.textContent = "-";
  }
});

scrollButton.addEventListener("click", function() {
  window.scrollTo(0, document.body.scrollHeight);
})