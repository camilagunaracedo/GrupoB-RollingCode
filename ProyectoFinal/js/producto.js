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
      videojuego.foto_videojuego,
      videojuego.nombre,
      Url(videojuego.id),
      videojuego.precio_str
    );
  });
  tarjeta_juego.innerHTML = htmlString;
} else {
  tarjeta_juego.innerHTML = "<h1>NO HAY PRODUCTOS CARGADOS</h1>";
}

function CrearTarjetas(imagen, titulo, url, precio) {
  return `<div class="tarjeta" style="width: 18rem;">
      <div class="espacio_imagen">
        <a href="${url}" class="a-imagen"><img src="${imagen}" class="card-img-top imagen-tarjeta" alt="..."></a>
      </div>
      <hr>
      <div class="card-body cuerpo-tarjeta">
        <h5 class="col-12 card-title titulo-tarjeta">${titulo}</h5>
        <img class="col-3 carrito" src="../img/1490129319-rounded09_82169.png" style="width: 30px; height: 30px; color: rgb(249, 97, 42);" />
        <p class="col-5 precio_producto">$${precio}</p>
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

