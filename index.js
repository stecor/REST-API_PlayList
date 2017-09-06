const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');


// set up express app
const app = express();

app.use(bodyParser.json());

// initialize routes
app.use('/api',routes);

// app.get('/api', function(req, res){
//   console.log('GET request');
//   res.send({name:'Yoshi'});
// });

//listen for requests
app.listen(process.env.port || 4000,function(){
  console.log('now listening for requests');
});
