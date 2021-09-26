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

mongoose.connect(`${process.env.MONGOOSE}`);


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
