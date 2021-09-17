const mongoose = require('mongoose')
const Schema = mongoose.Schema
const rdvSchema = new Schema({
date:{
    type:Date,   
},
heure:{
    type:String, 
},
idExpert:{
    type:String,
},

nameExpert:{
 type:String,

},

nameUser:{
 type:String,

},
idUser:{
    type:String,
    // type:mongoose.Schema.Types.ObjectId,
    // ref:"users"

},
statusRDV:{
    type:String,
    default:'En attente'
}


})

module.exports = rdv = mongoose.model('rdv',rdvSchema)