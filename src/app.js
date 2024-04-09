import express from "express"; 
import productos from './routers/products.js';
import carro from './routers/carts.js';


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    return res.send('Primera pre entrega');
});

app.use('/api/products', productos );
app.use('/api/carts', carro);

app.listen(PORT,()=>{
    console.log(`Ejecutando aplicacion en el puerto ${PORT}`);
});