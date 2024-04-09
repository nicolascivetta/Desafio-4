
import fs from 'fs';
import ProductManager from './ProductManager.js';




class CartsManager{
    #carts;
    #path;
    static idProducto = 0;

    constructor() {
        this.#path = './src/data/carritos.json';
        this.#carts = this.#leerCarritosInFile();
    }

    #asignarIdCart(){
        let id = 1;
        if(this.#carts != 0)
            id = this.#carts[this.#carts.length - 1].id + 1;
        return id;
    }


    #leerCarritosInFile(){
        try{
            if(fs.existsSync(this.#path))
                return JSON.parse(fs.readFileSync(this.#path,'utf-8'));

            return[];
        }catch (error) {
            console.log (`ocurrio un error al momento de leer el archivo productos ${error}`)
        }

    }

    #guardarArchivo() {
        try {
            fs.writeFileSync(this.#path, JSON.stringify(this.#carts));
        } catch (error){
            console.log (`ocurrio un error al momento de guardar el archivo productos ${error}`);
        }

    }

    createCart(){
        const newCart = {
            id: this.#asignarIdCart(),
            products: []
        };

        this.#carts.push()
        this.#guardarArchivo();

        return newCart;
    }

    getCartById(id){
        const producto = this.#carts.find(p => p.id == id);
        if(producto)
            return producto;
        else
            return `Not found productos con id = ${id}`
    }


    addProductInCart(cid, pid){

        let respuesta = `El carrito con id ${cid} no existe`
        const indexCarrito = this.#carts.findIndex(c=> c.id === cid);

        if(indexCarrito !==-1){
            const indexProductoInCart = this.#carts[indexCarrito].products.findIndex(p=> p.id == pid);
            const p = new ProductManager();
            const producto = p.getProductById(pid);

            if(producto.status && indexProductoInCart ===-1){
                this.#carts[indexCarrito].products.push({ id: pid, 'quantity': 1 });
                this.#guardarArchivo();
                respuesta='Producto agregado al carrito'
            }
            else if(producto.status && indexProductoInCart !==-1){
                ++this.#carts[indexCarrito].products[indexProductoInCart].quantity;
                this.#guardarArchivo();
                respuesta='Producto agregado al carrito'
            }else{
                respuesta = `El producto con id ${pid} no existe`
            }

        }

        return respuesta;

    }





}





export default CartsManager;