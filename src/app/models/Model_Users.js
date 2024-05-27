
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./SchemaItem');


const User = new Schema({
    user_name: { type: String, require: true },
    pass_word: { type: String, default: '' },
    cart_user: [Item],
},{
    timestamps : true,
});

module.exports = mongoose.model('User', User);