let express = require('express');
require('dotenv').config();
const { MongoClient } = require("mongodb");
const { get } = require('mongoose');
var ObjectId = require('mongodb').ObjectID;

let app = express();
const uri ="mongodb+srv://saiful:saif1994@cluster0.vxj27.mongodb.net/?retryWrites=true&w=majority";

app.get('/', async (req, res)=>{
  const client = new MongoClient(uri);
  async function run() {
    try {
      await client.connect();
      // database and collection code goes here
      const db = client.db("App");
      const coll = db.collection("Faild_status");
      // find code goes here
      const cursor = coll.find();
      // iterate code goes here
      let arr  = [], count=0;
      await cursor.forEach(function(x){

        arr.push(x)
        count++;
      })
      arr.push({total: count})
    //  await console.log(cursor)
    res.json(arr)


    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
})

app.get('/add', async (req, res)=>{
  const client = new MongoClient(uri);
  async function run() {
    try {
      await client.connect();
      // database and collection code goes here
      const db = client.db("App");
      const coll = db.collection("Faild_status");
      // find code goes here
    let p = await  coll.insertOne({time: new Date(new Date().getTime()-3*60*60*1000), type:0})
     res.json(p)



    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
})

app.get('/dellast', async (req, res)=>{
  const client = new MongoClient(uri);
  async function run() {
    try {
      await client.connect();
      // database and collection code goes here
      const db = client.db("App");
      const coll = db.collection("Faild_status");
      // find code goes here
     p = await coll.deleteOne({_id:ObjectId("62b84599fe589c90bdb234da")})
    res.send(p)
    



    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
})

app.get('/update', async (req, res)=>{
  const client = new MongoClient(uri);
  async function run() {
    try {
      await client.connect();
      // database and collection code goes here
      const db = client.db("App");
      const coll = db.collection("Faild_status");
      // find code goes here
    await  coll.findOneAndUpdate({"_id": ObjectId("57a9aa24e93864e02d91283c")},
    {$set:{type:"1"}},
    {upsert:true})
    res.send('done')
    



    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
})

app.listen(process.env.PORT, '0.0.0.0');


// Replace the uri string with your MongoDB deployment's connection string.

