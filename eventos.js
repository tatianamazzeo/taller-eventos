document.addEventListener("DOMContentLoaded", function () {
  const divBoton = document.querySelector("boton");

  divBoton.addEventListener("click", function (event) {
    event.stopPropagation();
    alert("Hola! soy el div");
  });
});
