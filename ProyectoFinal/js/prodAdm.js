const div_productos = document.querySelector("#lista");

const productos = localStorage.getItem(local_storage_llaves.PRODUCTOS);

if (productos) {
  const lista = JSON.parse(productos);
  let htmlString = "";
  lista.forEach((producto) => {
    htmlString += CreateCards(
      producto.nombre,
      producto.precio_unitario
    );
  });
  div_productos.innerHTML = htmlString;
} else {
  div_productos.innerHTML = "<h1>NO HAY PRODUCTOS CARGADOS </h1>";
}




