const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./db')

//init app & middleware

const app = express()
app.use(express.json())

//db connection
let db

connectToDb((err) => {
    if(!err){
        app.listen(3000, ()=> {
            console.log('app listening on port 3000')
        })   
        
        db = getDb()
    }
})

//routes
app.get('/', (req, res) => {

    console.log("Home page")

    let users = [] 

    db.collection('users')
        .find()
        .sort({ email: 1 })
        .forEach(user => users.push(user))
        .then(() => {
            res.status(200).json(users)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents'})
        })
})