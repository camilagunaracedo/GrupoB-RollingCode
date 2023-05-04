/* Filtro de búsqueda */

document.getElementById("busqueda").addEventListener("input", function () {
  // Obtener valor del campo de búsqueda
  var valorBusqueda = this.value.toLowerCase();

  // Obtener todas las tarjetas
  var tarjetas = document.getElementsByClassName("card-juego");

  // Variable para contar las coincidencias
  var coincidencias = 0;

  // Recorrer todas las tarjetas y ocultar las que no coinciden con el valor de búsqueda
  for (var i = 0; i < tarjetas.length; i++) {
    var tarjeta = tarjetas[i];
    var nombreTarjeta = tarjeta.querySelector("p").textContent.toLowerCase();
    if (nombreTarjeta.indexOf(valorBusqueda) === -1) {
      tarjeta.style.display = "none";
    } else {
      tarjeta.style.display = "block";
      coincidencias++;
    }
  }

  // Mostrar mensaje de no existen coincidencias si no se encontró ninguna
  var mensaje = document.getElementById("mensaje");
  if (coincidencias === 0) {
    mensaje.style.display = "block";
  } else {
    mensaje.style.display = "none";
  }
});


/* Filtro por categoría */

const filterBtns = document.querySelectorAll(".filter-btn");
const gameList = document.querySelector(".game-list");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter || "all";

    gameList.querySelectorAll(".card").forEach((card) => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
