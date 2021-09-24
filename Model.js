'use strict';
const mongoose = require('mongoose');

class MakeUp {
    constructor(items){
        this.image_link = items.image_link;
        this.name = items.name;
        this.description = items.description;
        this.price = items.price;
        
    }
}

const MakeupSchema = new mongoose.Schema({
    email :String,
    image_link : String ,
    name : String ,
    description : String ,
    price : String
  });

  const MakeupModel = mongoose.model('MakeupCollection', MakeupSchema);

  module.exports = {MakeupModel,MakeUp}