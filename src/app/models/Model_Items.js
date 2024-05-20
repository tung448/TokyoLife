
const mongoose = require('mongoose');
const Item = require('./SchemaItem');

module.exports = mongoose.model('Item', Item);