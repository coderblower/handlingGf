let express = require('express');
require('dotenv').config();
let app = express();

const mongoose = require('mongoose')

const uri =process.env.dataURI;
mongoose.connect(uri);

require('./routes')(app)

app.listen( process.env.PORT,'0.0.0.0', ()=>{
  console.log(process.env.PORT)
});

