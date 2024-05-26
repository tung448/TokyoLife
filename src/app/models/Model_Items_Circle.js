
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Item_Circle = new Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  imageURL: { type: String, default: '' },
  
},{
    timestamps : true,
});

module.exports = mongoose.model('Item_Circle', Item_Circle);