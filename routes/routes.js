import express from 'express'
import { mainPage, registerAction } from '../controllers/controllers.js';

const router = express.Router()

router.post('/login', mainPage);
router.post('/register', registerAction);

export default router;
