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


app.post('/mail/send/:id', (req, res) => {
    
    let userEmail

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "notifier@ccmprojetinsset.tech",
            pass: "jY06bhMuyJcp@",
        },
        tls: {
            rejectUnauthorized: false
        }
        
    });

    if(ObjectId.isValid(req.params.id)){
        db.collection('users')
        .findOne({_id: ObjectId(req.params.id)})
        .then( user => {

            console.log(user['email'])

            userEmail = JSON.stringify(user.email)


            // send mail with defined transport object
            let info = {
                from: '"Product Tracker" <notifier@ccmprojetinsset.tech>', // sender address
                to: userEmail, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Notification de prix", // plain text body
                html: "Bonjour, Le prix de votre article a baissé" // html body
            }
            
            transporter.sendMail(info,(err) => {
                if(err){
                    console.log(err)
                }else{
                    console.log("Notification Envoyé")
                    return res.status(200)
                }
            })
        })
        .catch( err => {
            res.status(500).json({error: 'Could not fetch the document'})
        })    
    }else{
        res.status(500).json({error: 'Not a valid doc id'})
    }

    

    //console.log("Message sent: %s", info.messageId);
    
    //main().catch(console.error);
})