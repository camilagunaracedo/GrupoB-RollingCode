const detalle_juego = document.getElementById("detalle_juego");

const urlParams = new URLSearchParams(window.location.search);
const paramsId = urlParams.get("id");

const local_storage_videojuego = {
  productos: "productos",
};

const videojuego = JSON.parse(
  localStorage.getItem(local_storage_videojuego.productos)
);

let juegoFiltrado = videojuego.filter(
  (juego) => juego.id === parseInt(paramsId)
);
console.log(paramsId);


juegoFiltrado = juegoFiltrado[0];

detalle_juego.innerHTML = CrearProducto();

function CrearProducto() {
  return `<div class="container tarjeta_detalle">
    <img src="${juegoFiltrado.foto}" class="foto_detalle"/>
    <div class="info_detalle">
      <div class="nomre_meGusta">
        <h3 class="nombre_detalle">${juegoFiltrado.nombre}</h3>
        <svg id="meGusta" class="meGusta" stroke="f24244" fill="white" xmlns="http://www.w3.org/2000/svg" width="24" viewbox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
      </div>
      <h5 class="categoria_detalle">${juegoFiltrado.categoria}</h5>
      <p class="descripcion_detalle">${juegoFiltrado.descripcion}</p>
      <p class="precio_detalle">$${juegoFiltrado.precio_str}</p>
      <button class="btn boton_comprar">Comprar ahora</button>
      <button class="btn boton_agregar">Agregar al carrito</button>
    </div>
    </div>`;
}

const meGusta = document.getElementById("me_gusta");
meGusta?.addEventListener("click", () => {
  if (!meGustaClicked) {
    meGusta.style.fill = "f24244";
    meGusta.style.stroke = "f24244";
    meGusta.style.transition = "ease 1s fill";
    meGustaClicked = true;
  } else {
    meGusta.style.fill = "white";
    meGusta.style.transition = "ease 1s fill";
    meGustaClicked = false;
  }
});




