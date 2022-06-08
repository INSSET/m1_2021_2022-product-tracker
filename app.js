"use strict";

const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./db')
const nodemailer = require("nodemailer");

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
    res.send("Home page")
})

app.get('/users', (req, res) => {
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

app.post('/mail/send', (req, res) => {
    
    //let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "tproducttrackerccm@gmail.com",
            pass: "6RsXhHV5L0Kh",
        },
        tls: {
            rejectUnauthorized: false
        }
        
    });

    // send mail with defined transport object
    let info = {
        from: '"Product Tracker" <producttrackerccm@gmail.com>', // sender address
        to: "khechinibakr20@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Notification de prix", // plain text body
        html: "Output" // html body
    }
    
    transporter.sendMail(info,(err) => {
        if(err){
            console.log(err)
        }else{
            console.log("Email has sent")
        }
    })

    //console.log("Message sent: %s", info.messageId);
    
    //main().catch(console.error);
})