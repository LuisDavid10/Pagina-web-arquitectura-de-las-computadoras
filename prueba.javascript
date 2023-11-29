// Este código añade una animación al título de la página

window.onload = function() {
  var title = document.querySelector("h1");
  title.style.transition = "transform 0.5s";

  title.addEventListener("click", function() {
    title.style.transform = "rotate(360deg)";
  });
};
