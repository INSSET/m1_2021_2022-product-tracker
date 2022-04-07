import express from 'express'
import { mainPage } from '../controllers/controllers.js';

const router = express.Router()

router.get('/', mainPage);

export default router;
