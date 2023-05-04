const productos_base = [
    {
        id:1,
        nombre: "WILD HEARTS",
        descripcion: "permite enfrentarte a temibles bestias dotadas de los brutales poderes de la naturaleza. Dales caza en solitario o en compañía con el modo cooperativo",
        precio_unitario: 70,
        precio_unitario_str:"70 USD",
        stock: 5,
        permite_stock_negativo: false,        
    },
    {
        id:2,
        nombre: "DEAD SPACE 2",
        descripcion: "permite En Dead Space™ 2, te vuelves a poner en la piel de Isaac Clarke, el ingeniero de sistemas de Dead Space, tras despertarse tres años después de los horribles sucesos ocurridos en la USG Ishimura. La Ishimura era una nave minera de categoría Destructor de Planetas asediada por los grotescos cadáveres vivientes de su tripulación, conocidos como los “Necromorfos”. Tras desenterrar un misterioso artefacto conocido como la Efigie, Isaac se encuentra en la Sprawl, una gigantesca estación espacial en la órbita de Saturno. Incapaz de recordar cómo llegó ahí y atormentado por visiones de su novia muerta, Nicole, deberá sobrevivir a otra espeluznante plaga de Necromorfos mientras se abre paso luchando en busca de una esperanzadora respuesta que le indique cómo terminar con todo el caos. a temibles bestias dotadas de los brutales poderes de la naturaleza. Dales caza en solitario o en compañía con el modo cooperativo",
        precio_unitario: 62,
        precio_unitario_str:"62 USD",
        stock: 3,
        permite_stock_negativo: false,
    },

];
const local_storage = {
    PRODUCTOS: "productos",
};
    window.onload = function () {
        const productos = ObtenerLocalStorage(local_storage.PRODUCTOS);

    if (!productos) {
        AgregarLocalStorage(local_storage.PRODUCTOS, productos_base);
    }

};

    function ObtenerLocalStorage(key) {
         const res = localStorage.getItem(key)
         return JSON.parse(res);
}

    function AgregarLocalStorage(key, objeto){
    localStorage.setItem(key, JSON.stringify(objeto));
}
