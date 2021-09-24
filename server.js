"use strict";
const express = require('express') 
const app = express()
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const axios = require('axios');
app.use(express.json());
const PORT=process.env.PORT;
const {getMakeup,addMakeup,getData,deleteMakeup,updateMakeup} = require('./Controller')

const mongoose = require('mongoose');

mongoose.connect('mongodb://balqees:12345@cluster0-shard-00-00.oh7ji.mongodb.net:27017,cluster0-shard-00-01.oh7ji.mongodb.net:27017,cluster0-shard-00-02.oh7ji.mongodb.net:27017/MakeupDatabase?ssl=true&replicaSet=atlas-e444n5-shard-0&authSource=admin&retryWrites=true&w=majority');


app.listen(PORT,()=>{
    console.log(`its listen to port ${PORT}`)
})

//localhost:4005/
app.get('/',(req,res)=>{
    res.send('hello balqees , its working fine')
})

//localhost:4005/getMakeup
app.get('/getMakeup', getMakeup);
app.post('/addMakeup', addMakeup);
app.get('/getData/:email', getData);
app.delete('/deleteMakeup/:id', deleteMakeup);
app.put('/updateMakeup/:id', updateMakeup);
