const mongoose = require('mongoose')
const { Model, Schema } = mongoose

const uri ="mongodb+srv://saiful:saif1994@cluster0.vxj27.mongodb.net/App?retryWrites=true&w=majority";
mongoose.connect(uri);

module.exports = mongoose.model('faild_status', new Schema({time:Date, type:Number}), 'Faild_status');   

 