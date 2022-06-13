import express from 'express'
import { loginAction, registerAction, getProductsByUuidAction, getProductByIdAction, addProductInDbAction } from '../controllers/controllers.js';


const router = express.Router()

router.post('/login', loginAction);
router.post('/register', registerAction);
router.get('/products', getProductsByUuidAction);
router.get('/product/:id', getProductByIdAction);
router.post('/add-product', addProductInDbAction);


export default router;
