'use strict';
const axios = require('axios');
const {MakeupModel,MakeUp} = require('./Model')

const getMakeup=(req,res)=>{
    let url =`${process.env.API}`
    axios.get(url).then(item=>{
        console.log(item.data)
        let makeupData = item.data
        res.json(makeupData)
    })
}

const addMakeup=(req,res)=>{
    console.log('byeeeeeeeeeeeeeeeeeeeee' , req.body)
    let makeupData = req.body
    const newMakeup = new MakeupModel({...makeupData})
    newMakeup.save();
}


const getData=(req,res)=>{
    let email = req.params.email
   MakeupModel.find({email:email},(error,item)=>{
       res.send(item)
   }) 
}

const deleteMakeup=(req,res)=>{
    let index = req.params.id
    MakeupModel.findByIdAndRemove(index,(error,item)=>{
        MakeupModel.find({},(error,item)=>{
            res.send(item)
        })
    })
}

const updateMakeup=(req,res)=>{
    let index = req.params.id
    let updateData = req.body
    MakeupModel.findByIdAndUpdate(index,{...updateData},(error,item)=>{
        MakeupModel.find({},(error,item)=>{
            res.send(item)
        })
    })
}

module.exports ={getMakeup,addMakeup,getData,deleteMakeup,updateMakeup}
