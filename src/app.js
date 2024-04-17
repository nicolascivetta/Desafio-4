import express from "express";
import {Server, Socket} from 'socket.io';
import {engine} from 'express-handlebars';



import productos from './routers/products.js';
import carro from './routers/carts.js';
import views from './routers/views.js';
import __dirname from './utils.js';
import ProductManager from './ProductManager.js';


const app = express();
const PORT = 8080;

const p= new ProductManager();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');



app.use('/', views );
app.use('/api/products', productos );
app.use('/api/carts', carro);

const expressServer = app.listen(PORT,()=>{console.log(`Ejecutando aplicacion en el puerto ${PORT}`);});
const socketServer = new Server(expressServer);

socketServer.on('connection', socket=>{

    const productos = p.getProducts();
    socket.emit('productos', productos);

    socket.on('agregarProducto', producto=>{
        console.log({producto});
        const result = p.addProduct(producto);
        if(result.producto)
        socket.emit('productos', productos);
    });
});




