let express = require('express');
require('dotenv').config();
let app = express();

const mongoose = require('mongoose')

const uri ="mongodb+srv://saiful:saif1994@cluster0.vxj27.mongodb.net/App2?retryWrites=true&w=majority";
mongoose.connect(uri);

require('./routes')(app)

app.listen( process.env.PORT||3000, process.env.HOST || '0.0.0.0', ()=>{
  console.log(process.env.PORT)
});

