const tabla = document.getElementById("tabla");

const urlParams = new URLSearchParams(window.location.search);
const paramId = urlParams.get("id");

const local_storage_llaves = {
  PRODUCTOS: "productos",

};

const objeto = JSON.parse(localStorage.getItem(local_storage_llaves.PRODUCTOS));

let elementoFiltrado = objeto.filter(
  (producto) => producto.id === parseInt(paramId)
);

elementoFiltrado = elementoFiltrado[0];

function CreateProduct() {
  return 
    const producto = {
        id: 2,
        descripción: vdescripcion,
        precio: vprecio,
        nombre: vnombre,
        stock: vstock,
        permite_stock_negativo: vstocknegativo,
        
      };
}
