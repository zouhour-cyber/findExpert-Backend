const mongoose = require('mongoose')
const Schema = mongoose.Schema
const newsletterSchema = new Schema({

email:{
    type:String,
},

})

module.exports = newsletter = mongoose.model('newsletter',newsletterSchema)