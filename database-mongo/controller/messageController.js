const Message = require('../model/message.js');
const db = require('../index.js');

const selectAll = (req, res) => {
    Message.find({}, (err, result) => {
       if(err) 
         res.sendStatus(500);
 
       res.send(result);
    })
 }

 const save = (req, res) => {

     Message.create(req.body, (err, result) => {
          if(err)
            res.sendStatus(500);
         
          res.send(result);
      })
 
 }

 
 module.exports = {
     selectAll,
     save,
 }