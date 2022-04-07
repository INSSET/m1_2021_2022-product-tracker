import express from 'express';
import routes from './routes/routes.js';

import dotenv from 'dotenv'
dotenv.config()


const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json());

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})
