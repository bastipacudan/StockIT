const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    quantity: String,
    name: String,
    price: String,
    department: String,
  });
  
  
  
  const Item = mongoose.model('Item', itemSchema);

  module.exports = Item;