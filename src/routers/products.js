import {Router} from 'express'
import { addProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/products.js';


const router = Router();

router.get('/',getProducts);
router.get('/products/:pid',getProductById);
router.post('/',addProduct);
router.put('/:pid', updateProduct)
router.delete('/:pid', deleteProduct)


export default router;