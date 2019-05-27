const mongoose = require('mongoose');


const messageSchema = mongoose.Schema({
    department: String,
    context: String,
    date: Date
 })
  
  
  
  const Message = mongoose.model('Message',messageSchema);
  module.exports = Message;