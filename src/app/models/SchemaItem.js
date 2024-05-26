
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Item = new Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    imageURL: { type: String, default: '' },
    cost: { type: String },
    adminPost: {type: String, default: ''},
},{
    timestamps: true,
});

module.exports = Item;