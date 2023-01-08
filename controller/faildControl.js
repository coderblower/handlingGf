
let Fail = require('../Model/Faild_status')

module.exports = {

    async fetchAllData (req, res){

        // const client = new MongoClient(uri);
        async function run() {
          try {
            let arr = [];
           Fail.find( {},  function(err, data) { 
              console.log('times')
              data.forEach( e => {
               arr.push(e)
            }); 
            res.json(arr.length?arr:"no date is there :( ... please Add some Data ")
          }).sort({time:1})
            
          } finally {
            // Ensures that the client will close when you finish/error
            
          }
        }
        run().catch(console.dir);
      },
      
      async create (req, res){
        // const client = new MongoClient(uri);
        async function run() {
          try {
            let x = req.query.time || 0;
            Fail.create({time: new Date(new Date().getTime()-x*60*60*1000), type:0} ).then((x)=>{
              res.json("added successfully")
            });
      
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
            Fail.findOne({_id:req.query.id} ).deleteOne().then((x)=>{
              res.send(x['deletedCount']?'successfully deleted ':'requested Data not there :( ')
            });
      
          } finally {
            // Ensures that the client will close when you finish/error
            
          }
        }
        run().catch(console.dir);
      }, 

      async info(req, res){
        // const client = new MongoClient(uri);
        async function run() {
          try {
            let arr = [], obj = {};

             let data = await Fail.find({}).sort({time:-1}).then(x=>{
                x.forEach(x=>{
                  arr.push(x)
                })
             })

             //  Last Occurs since now

             function convertMs(ms) {
                let s, m, h, d;
                s = Math.floor(ms/1000)%60
                m = Math.floor(ms/(1000*60))%60
                h = Math.floor(ms/(1000*60*60))%24
                d  = Math.floor(ms/(1000*60*60*24))
                return `${d} days ${h} Hours ${m} minutes ${s} seconds`
             }

             obj.lastHandling = { time : convertMs(new Date().getTime() -  arr[0].time.getTime() )}
             
             // highest and lowest duration between two date
             let high = 0, low, hightArr, lowArr;
             arr.reduce((acc, val)=>{
              c = acc.time.getTime() - val.time.getTime();
              h = high; l = low;
              high = Math.max(c, high||c);
              low = Math.min(c, low||c);
              if(h!==high){
                highArr=[acc, val];
                
              }
              if(l!==low){
                lowArr =[acc, val]
              }
              return val;
             })
             obj.high = {
              high: convertMs(high), highArr, low: convertMs(low), lowArr
             }

             res.json(obj)      
             
            
         } finally {
            // Ensures that the client will close when you finish/error
            
          }
        }
        run().catch(console.dir);
      },
      async dif(req, res){
        // const client = new MongoClient(uri);
        async function run() {
          try {
            let arr = [];

             let data = await Fail.find({}).sort({time:-1}).then(x=>{
                x.forEach(x=>{
                  arr.push(x)
                })
             })

             //  Last Occurs since now

             function convertMs(ms) {
                let s, m, h, d;
                s = Math.floor(ms/1000)%60
                m = Math.floor(ms/(1000*60))%60
                h = Math.floor(ms/(1000*60*60))%24
                d  = Math.floor(ms/(1000*60*60*24))
                return `${d} days ${h} Hours ${m} minutes ${s} seconds`
             }

             let dafaultv = 'max'; 

             let arrs = [], Q= req.query.min || req.query.max || dafaultv; 
             console.log(Q)

             // highest and lowest duration between two date
             
            arr.reduce((acc, val)=>{
                console.log()
                let c = acc.time.getTime() - val.time.getTime();
                let obj = {}
                obj.time = convertMs(c)
                obj.timeMS = c;
                // obj.timeBetween = [acc.time, val.time]
                arrs.push(obj)
              return val;
             })
             arrs.sort((x,y)=> Q=='min'? x.timeMS>y.timeMS ? 1: -1: Q=='max'?x.timeMS>y.timeMS ?-1:1:``  )
             

             console.log(arr)
             res.json(arrs)      
             
            
         } finally {
            // Ensures that the client will close when you finish/error
            
          }
        }
        run().catch(console.dir);
      },
      
      async pass(req, res){
        // const client = new MongoClient(uri);
        async function run() {
          try {
            
            res.send('updated @dyh3#GD@u93D39&@s8u#S830D9s#8#3o0s9#S389%*#4us359hjfDHxdu9e8s3#%873fjg')
      
          } finally {
            // Ensures that the client will close when you finish/error
            
          }
        }
        run().catch(console.dir);
      }, 



}
