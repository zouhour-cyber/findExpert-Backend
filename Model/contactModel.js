const mongoose = require('mongoose')
const Schema = mongoose.Schema
const contactSchema = new Schema({
fullName:{
    type:String,
    
},
email:{
    type:String,
    
},

message :{
    type:String,
}


})

module.exports = contact = mongoose.model('contact',contactSchema)