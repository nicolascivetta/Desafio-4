const ProductManager = require("./ProductManager");

const producto = new ProductManager();



console.log(producto.addProduct("notebook","hp 19",150000,"https://img-hp.com","hp19swg",15));
console.log(producto.addProduct("notebook","samsung 22",200000,"https://img-smng22.com","smng22asd",12));
console.log(producto.addProduct("notebook","noblex 20",170000,"https://img-nblx20.com","nblx20afj",20));
console.log(producto.getProducts());