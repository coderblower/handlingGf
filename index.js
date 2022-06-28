let express = require('express');
require('dotenv').config();
// const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let Fail = require('./Faild_status')
// var ObjectId = require('mongodb').ObjectID;
let app = express();





app.get('/', async (req, res)=>{
  // const client = new MongoClient(uri);
  async function run() {
    try {
      Fail.find({}, function(err, data) { res.json( data); });

    } finally {
      // Ensures that the client will close when you finish/error
      
    }
  }
  run().catch(console.dir);
})

app.get('/add', async (req, res)=>{
  // const client = new MongoClient(uri);
  async function run() {
    try {
      let x = req.query.time || 0;
      Fail.create({time: new Date(new Date().getTime()-x*60*60*1000), type:0} ).then((x)=>{
        res.json(x)
      });

    } finally {
      // Ensures that the client will close when you finish/error
      
    }
  }
  run().catch(console.dir);
})
app.get('/del', async (req, res)=>{
  // const client = new MongoClient(uri);
  async function run() {
    try {
      Fail.findOne({_id:req.query.id} ).remove().then((x)=>{
        res.send(x)
      });

    } finally {
      // Ensures that the client will close when you finish/error
      
    }
  }
  run().catch(console.dir);
})


app.listen(3000 || process.env.PORT, process.env.HOST ||'0.0.0.0');


// Replace the uri string with your MongoDB deployment's connection string.

