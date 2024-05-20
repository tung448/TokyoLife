
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Item = new Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    imageURL: { type: String, default: '' },
    cost: { type: Number, min: 0},
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = Item;