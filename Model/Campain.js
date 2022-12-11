const mongoose = require('mongoose')
const { Model, Schema } = mongoose

let data = {
    startDate: Date,
    endDate: Date,
    campainTask: String,
    // campinTime: Number, later this value will be aggregate adde property by start and end date .. 
    successStatus: Boolean,
    campType:  [{
        type:String,
        enum: ["daily", "weekly", "monthly", "yearly", "once"] 
      }]
}


module.exports = mongoose.model('campain', new Schema(data ,{timestamps:true}), 'Faild_status');   

 