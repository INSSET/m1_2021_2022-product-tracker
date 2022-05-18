import express from 'express'
import { loginAction, registerAction } from '../controllers/controllers.js';

const router = express.Router()

router.post('/login', loginAction);
router.post('/register', registerAction);

export default router;
