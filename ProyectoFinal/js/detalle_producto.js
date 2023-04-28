const detalle_juego = document.getElementById("detalle_juego");

// const urlParams = new URLSearchParams(window.location.search);
// const paramsId = urlParams.get("id");

import { carga_producto } from "./index.js";

const videojuego = localStorage.getItem("almacenarDatos");

let localstorage_videojuego;

if (videojuego) {
  const localstorage_videojuego = JSON.parse(videojuego);
} else {
  localstorage_videojuego = carga_producto;
}

function buscarVideojuegoPorId(idVideojuego) {
  return carga_producto.filter(
    (obj_videojuego) => obj_videojuego.id === idVideojuego
  );
}

buscarVideojuegoPorId = buscarVideojuegoPorId[0];

console.log(buscarVideojuegoPorId);

// const local_storage_videojuego = {
//   productos: "productos",
// };

// const videojuego = JSON.parse(
//   localStorage.getItem(local_storage_videojuego.productos)
// );

// let juegoFiltrado = videojuego.filter(
//   (juego) => juego.id === parseInt(paramsId)
// );

// juegoFiltrado = juegoFiltrado[0];

detalle_juego.innerHTML = CrearProducto();

// function CrearProducto() {
//   return `<div class="container tarjeta_detalle">
//     <img src="${juegoFiltrado.foto}" class="foto_detalle"/>
//     <div class="info_detalle">
//       <div class="nomre_meGusta">
//         <h3 class="nombre_detalle">${juegoFiltrado.nombre}</h3>
//         <svg id="meGusta" class="meGusta" stroke="f24244" fill="white" xmlns="http://www.w3.org/2000/svg" width="24" viewbox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
//       </div>
//       <h5 class="categoria_detalle">${juegoFiltrado.categoria}</h5>
//       <p class="descripcion_detalle">${juegoFiltrado.descripcion}</p>
//       <p class="precio_detalle">$${juegoFiltrado.precio_str}</p>
//       <button class="btn boton_comprar">Comprar ahora</button>
//       <button class="btn boton_agregar">Agregar al carrito</button>
//     </div>
//     </div>`;
// }

//  <div class="col-lg-6 col-12 imagen">
//  <img src="${juegoFiltrado.foto}" class="foto_detalle"/>
//  </div>
function CrearProducto() {
  return `<div class="container tarjeta_detalle">
      <div class="row imagen">
        <div class="foto_detalle" style="width: 550px; height: 450px; background-image: url(${juegoFiltrado.foto}); background-size: cover; background-position: center;">
      </div>
        <div class="col-lg-5 col-12 informacion_detalle">
          <div class="row info_detalle">
            <h3 class="nombre_detalle">${juegoFiltrado.nombre}</h3>
            <p class="descripcion_detalle" style="text-align: justify;">${juegoFiltrado.descripcion}</p>
            <h4 class="precio_detalle">$${juegoFiltrado.precio_str}</h4>
            <span class="link"
              ><a
                href="#abrir_modal"
                data-bs-toggle="modal"
                data-bs-target="#abrir_modal"
                >VER MEDIOS DE PAGO</a
              ></span
            >
            <span
              ><i class="fa-solid fa-truck-fast"></i>ENVÍOS A DOMICILIO</span
            >
            <span class="separacion"
              ><i class="fa-solid fa-box-open"></i>RETIRO EN LOCAL</span
            >
          </div>
          <div class="botones_detalle">
            <button class="btn boton_comprar">Comprar ahora</button>
            <button class="btn boton_agregar">Agregar al carrito</button>
          </div>
          <div class="row redes_detalle">
            <h6>COMPARTIR</h6>
            <div class="iconos_detalle">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

/*<div class="container contenedor_contenido">
      <!--Contenedor foto e info-->
      <div class="container contenedor-suculenta">
        <div class="row suculenta">
          <div class="col-lg-6 col-12 imagen">
            <img src="${juegoFiltrado.foto}" class="foto_detalle"/>
          </div>
            */

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
