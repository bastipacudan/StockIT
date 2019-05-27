const Item = require('../model/model.js');
const db = require('../index.js');

const selectAll = (req, res) => {
    Item.find({}, (err, result) => {
       if(err) 
         res.sendStatus(500);
 
       res.send(result);
    })
 }

 const selectByDept = (req, res) => {

  Item.find({department: req.params.department}, (err, result) => {
 
     if(err) 
       res.sendStatus(500);

     res.send(result);
  })
}
 
 const save = (req, res) => {

     Item.create(req.body, (err, result) => {
          if(err)
            res.sendStatus(500);
         
          res.send(result);
      })
 
 }


 const deleteOne = (req, res) => {
    Item.deleteOne({_id: req.body}, (err, result) => {
       if(err)
         res.sendStatus(500);
     
        res.send(result);
    })
 }
 
 const updateOne = (req, res) => {
        Item.findByIdAndUpdate(req.params.id, req.body, (err, response) => {
          if(err)
           res.sendStatus(500);
    
         res.send(response);
            
       })
 }
 
 module.exports = {
     selectAll,
     selectByDept,
     save,
     deleteOne,
     updateOne
 }