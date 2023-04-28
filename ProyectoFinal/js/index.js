export const carga_producto = [
  {
    id: 1,
    foto: "../img/wildhearts.jpg",
    nombre: "Wild Hearts",
    categoria: "",
    descripcion: `Wild Hearts es una novedad del género de caza donde la tecnología te da una oportunidad de luchar 
    contra temibles bestias infundidas con el feroz poder de la naturaleza misma.
     Enfréntate a estas criaturas por tu cuenta o dales caza con tus amigos en un modo cooperativo fluido.`,
    precio: 15700,
    precio_str: "15.700",
    stock: 4,
  },
  {
    id: 2,
    foto: "../img/deadspace.jpg",
    nombre: "Dead Space 2",
    categoria: "Horror, supervivencia",
    descripcion: `Dead Space 2 es un videojuego de Horror de supervivencia en tercera persona, 
    secuela de Dead Space, desarrollado por Visceral Games y publicado por Electronic Arts para Xbox 360, PC y PlayStation
     3.6​ Situado tres años después de los acontecimientos del primer Dead Space, el juego sigue la lucha del protagonista
      Isaac Clarke contra un nuevo brote de necromorfos en Sprawl, una estación espacial sobre la luna más grande de 
      Saturno, Titán, sin embargo la lucha de Isaac no se limita solamente a detener a los Necromorfos, 
      sino también para salvarse a sí mismo de una demencia mortal.`,
    precio: 5649,
    precio_str: "5.649",
    stock: 7,
  },
  {
    id: 3,
    foto: "../img/nfs.jpg",
    nombre: "NFS Unbound",
    categoria: "Carrera",
    descripcion: `Need for Speed Unbound es un videojuego de conducción a cargo de Criterion Games y Electronic Arts
      para PC, PlayStation 5 y Xbox Series. Corre hasta lo más alto, sin llevarte chascos.
      Supera a la policía y participa en las eliminatorias semanales del Grand, la carrera callejera definitiva.`,
    precio: 28100,
    precio_str: "28.100",
    stock: 8,
  },
  {
    id: 4,
    foto: "../img/sims4.jpg",
    nombre: "Los Sims 4",
    categoria: "Simulación social",
    descripcion: `Los Sims 4 es el esperadísimo juego de simulación social que permite jugar a la vida como nunca antes.
       Crea y controla nuevos Sims con mente, cuerpo y corazón propios.`,
    precio: 13200,
    precio_str: "13.200",
    stock: 6,
  },
  {
    id: 5,
    foto: "../img/apex.jpg",
    nombre: "Apex Legends",
    categoria: "Acción",
    descripcion: `Apex Legends es un shooter de Battle Royale basado en escuadrones y con énfasis en los personajes 
    donde el trabajo en equipo marca la diferencia entre la victoria y la derrota.`,
    precio: 1799,
    precio_str: "1.799",
    stock: 3,
  },
  {
    id: 6,
    foto: "../img/sackboy.jpg",
    nombre: "Sackboy",
    categoria: "Simulación social",
    descripcion: `Sackboy: Una aventura a lo grande, el simpático plataformas en tres dimensiones que fue lanzado 
    originalmente en exclusiva para PlayStation 4 y PlayStation 5, aterrizó en PC a través de Steam el pasado 
    27 de octubre.`,
    precio: 16999,
    precio_str: "16.999",
    stock: 2,
  },
];

// ----------------------------

// window.onload = function () {
//   const datosAlmacenados = localStorage.getItem(carga_producto);

//   if (!datosAlmacenados) {
//     localStorage.setItem(carga_producto, JSON.stringify(carga_producto));
//   }
// };

// ----------------------------

const local_storage_videojuego = {
  productos: "productos",
};

window.onload = function () {
  const videojuegos = obtenerDatos(local_storage_videojuego.productos);

  if (!videojuegos) {
    almacenarDatos(local_storage_videojuego.productos, carga_producto);
  }
};

function obtenerDatos(videojuego_clave) {
  const respuesta = localStorage.getItem(videojuego_clave);
  return JSON.parse(respuesta);
}

function almacenarDatos(videojuego_clave, videojuego) {
  localStorage.setItem(videojuego_clave, JSON.stringify(videojuego));
}

// ------------------

