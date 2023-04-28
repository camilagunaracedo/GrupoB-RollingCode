// const tarjeta_juego = document.querySelector("#tarjeta_juego");

// const obtenerDatos = localStorage.getItem(parse(carga_producto));
// console.log(obtenerDatos);

// -----------------

const tarjeta_juego = document.querySelector("#tarjeta_juego");
let meGustaClicked = false;

const local_storage_videojuego = {
  productos: "productos",
};

const videojuegos = localStorage.getItem(local_storage_videojuego.productos);

if (videojuegos) {
  const lista = JSON.parse(videojuegos);

  let htmlString = "";
  lista.forEach((videojuego) => {
    htmlString += CrearTarjetas(
      videojuego.foto,
      videojuego.nombre,
      Url(videojuego.id),
      videojuego.precio_str
    );
  });
  tarjeta_juego.innerHTML = htmlString;
} else {
  tarjeta_juego.innerHTML = "<h1>NO HAY PRODUCTOS CARGADOS</h1>";
}

function CrearTarjetas(image, title, url) {
  return `<div class="tarjeta" style="width: 18rem;">
          <img src="${image}" class="card-img-top imagen-tarjeta" alt="...">
          <div class="card-body cuerpo-tarjeta">
            <h5 class="card-title titulo-tarjeta">${title}</h5>
            <a href="${url}" class="btn btn-dark boton-tarjeta">Detalle</a>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart meGusta" viewBox="0 0 16 16" id="meGusta">
            <path d="M7.997.293c-.403-.82-1.564-.82-1.966 0l-.978 1.977c-.346.699-1.502 2.05-2.708 3.448C1.77 7.336 0 9.69 0 12.035c0 2.206 1.794 4 4 4 1.341 0 2.596-.657 3.343-1.759a5.76 5.76 0 0 0 3.657 1.334c2.206 0 4-1.794 4-4 0-2.345-1.77-4.699-3.345-6.317C13.501 3.342 10.444.576 7.997.293z"/>
            </svg>          
            </span>
          </div>
        </div>`;
}

//<svg id="meGusta" class="meGusta" stroke="f24244" fill="white" xmlns="http://www.w3.org/2000/svg" width="24" viewbox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>

function Url(id) {
  return `../páginas/detalle_producto.html?id=${id}`;
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

// // ----------------------

// // const detalle_juego = document.getElementById("detalle_juego");

// // const urlParams = new URLSearchParams(window.location.search);
// // const paramId = urlParams.get("id");

// // const local_storage_videojuego = {
// //   productos: "productos",
// // };

// // const videojuego = JSON.parse(
// //   localStorage.getItem(local_storage_videojuego.productos)
// // );

// // let juegoFiltrado = videojuego.filter(
// //   (juego) => juego.id === parseInt(paramId)
// // );

// // juegoFiltrado = juegoFiltrado[0];

// // detalle_juego.innerHTML = CrearProducto();

// // function CrearProducto() {
// //   return `<div class="container tarjeta_detalle">
// //     <h3>${juegoFiltrado.nombre}</h3>
// //     <h5>${juegoFiltrado.categoria}</h5>
// //     <img src="${juegoFiltrado.foto_url}"/>
// //     <p>${juegoFiltrado.descripcion}</p>
// //     <p>${juegoFiltrado.precio_str}</p>
// //     </div>`;
// // }
