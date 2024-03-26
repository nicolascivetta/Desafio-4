
import fs from 'fs';




class ProductManager{
    #products;
    #path;
    static idProducto = 0;

    constructor() {
        this.#path = './src/data/productos.json';
        this.#products = this.#leerProductosInFile();
    }

    #asignarIdProducto(){
        let id = 1;
        if(this.#products != 0)
            id = this.#products[this.#products.length - 1].id + 1;
        return id;
    }


    #leerProductosInFile(){
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
            fs.writeFileSync(this.#path, JSON.stringify(this.#products));
        } catch (error){
            console.log (`ocurrio un error al momento de guardar el archivo productos ${error}`);
        }

    }

    addProduct(title,description,price,thumbnail,code,stock){

        if(!title || !description || !price || !thumbnail || !code || !stock)
            return `Todos los parametros son requeridos [title,description,price,thumbnail,code,stock]`;
        
        const codRepetido = this.#products.some(p=> p.code == code);
        if(codRepetido)
            return `El codigo ${code} ya esta registrado en otro producto`;

        ProductManager.idProducto = ProductManager.idProducto + 1;
        const id = this.#asignarIdProducto();

        const nuevoProducto = {
            id, title, description, price, thumbnail, code, stock,
        };
        this.#products.push(nuevoProducto);
        this.#guardarArchivo();

        return `Producto agregado correctamente! `;
    }

    getProducts(limit = 0){
        limit = Number(limit);
        if(limit > 0)
            return this.#products.slice(0,limit)

        return this.#products;
    }

    getProductById(id){
        const producto = this.#products.find(p => p.id == id);
        if(producto)
            return producto;
        else
            return `Not found productos con id = ${id}`
    }

    updateProduct(id, objetupdate){
        let msg = `El producto con id ${id} no existe`

        const index = this.#products.findIndex(p=> p.id === id);

        if (index !== -1){
            const{id, ...rest} = objetupdate;
            this.#products[index]= {...this.#products[index], ...rest}
            this.#guardarArchivo();
            msg = 'Producto actualizado';

        }

        return msg;
    }

    deleteProduct(id){
        let msg = `El producto con d ${id} no existe`

        const index = this.#products.findIndex(p=> p.id === id);
        if(index !== -1){
            this.#products = this.#products.filter(p=> p.id !== id);
            this.#guardarArchivo();
            msg = `Producto Eliminado`

        }

        return msg;
    }
}








export default ProductManager;