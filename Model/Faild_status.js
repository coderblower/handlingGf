const mongoose = require('mongoose')
const { Model, Schema } = mongoose

module.exports = mongoose.model('faild_status', new Schema({time:Date, type:Number},{timestamps:true}), 'Faild_status');   

 