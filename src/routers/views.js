import {Router} from 'express'
import { addProductService } from '../services/products.js';


const router = Router();

router.get('/', async (req,res)=>{
    const {payload} = await addProductService();
    return res.render('home', {productos, payload, styles:'styles.css', title:'Home', style:'chat.css'});
});

router.get('/realtimeproducts',(req,res)=>{
    return res.render('realTimeProducts',{title: 'Real Time', style:'chat.css'});
});

router.get('/chat',(req,res)=>{
    return res.render('chat',{styles:'chat.css', title:'Chat', style:'chat.css'});
});


export default router;