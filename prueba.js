// Animaciones

// Animación de la imagen de introducción

var imagenIntroduccion = document.querySelector("#introduccion img");

imagenIntroduccion.addEventListener("mouseover", function() {
  this.style.transform = "scale(1.2)";
});

imagenIntroduccion.addEventListener("mouseout", function() {
  this.style.transform = "scale(1)";
});

// Animación de la imagen del tema 1

var imagenTema1 = document.querySelector("#tema-1 img");

imagenTema1.addEventListener("mouseover", function() {
  this.style.border = "2px solid red";
});

imagenTema1.addEventListener("mouseout", function() {
  this.style.border = "none";
});
