
let FaildController = require('./controller/faildControl');

module.exports = (app)=>{ 

    app.get('/', FaildController.fetchAllData)
      
    app.get('/add', FaildController.create)
      
    app.get('/del', FaildController.deleteOne)

    app.get('/info', FaildController.info) 

    app.get('/dif', FaildController.dif)

    app.get('/pass', FaildController.pass)
 
    
    // time difference low to high and  high to low .. using query value 

      
      
}