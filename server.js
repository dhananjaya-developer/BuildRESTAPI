require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology: true});

const db=mongoose.connection;
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('connected to database'))

app.use(express.json())

const subscribeRouter=require('./routers/subscribers')
app.use('/subscribers',subscribeRouter)


app.listen(4000,()=>console.log('Server started'))