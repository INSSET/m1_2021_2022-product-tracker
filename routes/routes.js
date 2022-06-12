import express from 'express'
import { loginAction, registerAction } from '../controllers/controllers.js';
import { getProductsByUuidAction, getProductByIdAction } from '../controllers/controllers.js';


const router = express.Router()

router.post('/login', loginAction);
router.post('/register', registerAction);
router.get('/products', getProductsByUuidAction);
router.get('/product/:id', getProductByIdAction);

export default router;
