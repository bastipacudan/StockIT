const express = require('express');
const bodyParser = require('body-parser');
const item = require('../database-mongo/controller/index.js');
const message = require('../database-mongo/controller/messageController')
const app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/items', item.save);
app.get('/items', item.selectAll);
app.get('/items/:department', item.selectByDept);
app.delete('/items',item.deleteOne);
app.put('/items/:id', item.updateOne);
// 

app.get('/messages', message.selectAll);
app.post('/messages', message.save)
app.listen(3000, function() {
  console.log('listening on port 3000!');
});

