import express from "express";
import {Server, Socket} from 'socket.io';
import {engine} from 'express-handlebars';



import productos from './routers/products.js';
import carro from './routers/carts.js';
import views from './routers/views.js';
import __dirname from './utils.js';
import { dbConnection } from "./database/config.js";
import { productModel } from "./models/products.js";
import { messageModel } from "./models/messages.js";


const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');



app.use('/', views );
app.use('/api/products', productos );
app.use('/api/carts', carro);

await dbConnection();

const expressServer = app.listen(PORT,()=>{console.log(`Ejecutando aplicacion en el puerto ${PORT}`);});
const io = new Server(expressServer);

io.on('connection', async (socket)=>{

    // Products
    const productos = await productModel.find();
    socket.emit('productos', productos);
    socket.on('agregarProducto', async (producto)=>{
        const newProduct = await productModel.create({...producto});
        if(newProduct){
            productos.push(newProduct)
            socket.emit('productos', productos);
        }
    });

    // Chat messages
    const messages = await messageModel.find();
    socket.emit('message', messages);

    socket.on('message', async (data) =>{
        const newMessage = await messageModel.create({...data});
        if(newMessage){
            const messages = await messageModel.find();
            io.emit('messageLogs', messages);
        };

    });
});




