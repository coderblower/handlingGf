
let CampModel = require('../Model/Campain')

module.exports = {

      async create (req, res){
        // const client = new MongoClient(uri);
        async function run() {
          try {
            let x = req.query.days || 40;

            CampModel.create({
                startDate: new Date(),
                endDate: new Date(new Date().getTime()+x*60*60*1000*24),
                campainTask: "prevent from Handling and watching Adlut things ",
                successStatus: false,
                campType:  "once"} ).then((x)=>{
              res.json("added successfully")
            });
      
          } finally {
            // Ensures that the client will close when you finish/error
            
          }
        }
        run().catch(console.dir);
      },

      async fetchAllData (req, res){

        // const client = new MongoClient(uri);
        async function run() {
          try {
            let arr = [];
           CampModel.find( {},  function(err, data) { 
              
              data.forEach( e => {
               arr.push(e)
            }); 
            res.json(arr.length?arr:"no date is there :( ... please Add some Data ")
          })
            
          } finally {
            // Ensures that the client will close when you finish/error
            
          }
        }
        run().catch(console.dir);
      },

      async deleteOne(req, res){
        // const client = new MongoClient(uri);
        async function run() {
          try {
            CampModel.findOne({_id:req.query.id} ).deleteOne().then((x)=>{
              res.send(x['deletedCount']?'successfully deleted ':'requested Data not there :( ')
            });
      
          } finally {
            // Ensures that the client will close when you finish/error
            
          }
        }
        run().catch(console.dir);
      }, 
}