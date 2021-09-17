const mongoose = require('mongoose')
const Schema = mongoose.Schema
const publicationSchema = new Schema({
titre:{
    type:String,
    
},
description :{
    type:String,
},
image :{
    type:String,
}


})

module.exports = publication = mongoose.model('publication',publicationSchema)