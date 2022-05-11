import express from 'express'
import { loginAction, registerAction, verifyAction } from '../controllers/controllers.js';

const router = express.Router()

router.post('/login', loginAction);
router.post('/register', registerAction);
router.post('/verify',  verifyAction);

export default router;
