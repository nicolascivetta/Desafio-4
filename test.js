const ProductManager = require("./ProductManager");

const producto = new ProductManager();


//ejecutar para cargar los productos a /data/productos.json

console.log(producto.addProduct("notebook","hp 19",150000,"https://img-hp.com","hp19swg",15));
console.log(producto.addProduct("notebook","samsung 22",200000,"https://img-smng22.com","smng22asd",12));
console.log(producto.addProduct("notebook","noblex 20",170000,"https://img-nblx20.com","nblx20afj",20));


console.log(producto.getProducts());


//ejecutar y cambiar el numero de id del producto que desea borrar
//console.log(producto.deleteProduct(3)); 

const actualizarProducto = {
    "id":10,
    "title":"notebook",
    "description":"hp 23",
    "price":1000,
    "thumbnail":"https://img-hp.com2",
    "code":"hp19swg2",
    "stock":150

}

//cabiar los valores de la variable de arriba para actualizar los datos del producto del id que se seleccione
//console.log(producto.updateProduct(3, actualizarProducto));