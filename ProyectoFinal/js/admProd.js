const tabla = document.getElementById("tabla");
const nombre = document.getElementById("nombre");
const stock = document.getElementById("stock");
const stocknegativo = document.getElementById("stocknegativo");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");
const save = document.getElementById("save");

console.log(nombre,stock,stocknegativo,descripcion,precio);

//#region  Variables
let vnombre = "";
let vstock = 0;
let vprecio = 0;
let vstocknegativo = false;
let vdescripcion = "";
//#endregion

//#region Event Listeners

nombre.addEventListener("change", function (e) {
 console.log(e.target.value);
  vnombre = e.target.value;
});
stock.addEventListener("change", function (e) {
  console.log(e.target.value);
  vstock = +e.target.value;
});
stocknegativo.addEventListener("change", function (e) {
  console.log(e.target.value);
  vstocknegativo = stocknegativo.checked;
});
descripcion.addEventListener("change", function (e) {
  console.log(e.target.value);
  vdescripcion = e.target.value;
});
precio.addEventListener("change", function (e) {
  console.log(e.target.value);
  vprecio = +e.target.value;
});

save.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(vnombre,vdescripcion,vprecio,vstocknegativo,vstock)
  
  
  //verifica que todos los datos estén correctos
  if (vdescripcion === "") {
    alert("Por favor complete el campo de la descripción");
    return;
  }
  const producto = {
    id: 2,
    descripción: vdescripcion,
    precio: vprecio,
    nombre: vnombre,
    stock: vstock,
    permite_stock_negativo: vstocknegativo,
    
  };

  const productos = localStorage.getItem(producto_key);
  const productosObjeto = JSON.parse(productos);
  productosObjeto.push(producto);
  localStorage.setItem(productos_key, JSON.stringify(productosObjeto));
  
});
//#endregion

const productos_key = "productos";
const productos = JSON.parse(localStorage.getItem(productos_key));

let htmlString = `<table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Nombre</th>
    <th scope="col">Precio Unitario</th>
    <th scope="col">Stock</th>
  </tr>
</thead> <tbody>`;

productos.forEach((producto) => {
    htmlString += CreateItem(producto);
});

htmlString += "</tbody> </table>";

tabla.innerHTML = htmlString;
const btnsEliminar = document.querySelectorAll("#btn-eliminar");

btnsEliminar.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const lista = localStorage.getItem(productos);
    const listaObjeto = JSON.parse(lista);
    const nuevaLista = listaObjeto.filter(
      (producto) => producto.id != +e.target.name
    );
    localStorage.setItem(producto, JSON.stringify(nuevaLista));
  });
});

function CreateItem(producto){
        return `
          <tr>
            <th scope="row">${producto.id}</th>
            <td>${producto.nombre}</td>
            <td>${producto.precio_unitario}</td>
            <td>${producto.stock}</td>
          </tr>`;
}
