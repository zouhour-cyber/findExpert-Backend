const mongoose = require('mongoose')
const Schema = mongoose.Schema
 const expertSchema = new Schema({
    googleId: String,

   fullName:{
        type:String,
       required:true,
       trim:true,
       min:3,
       max:20 ,
       index:true,
       lowercase:true
    },
    email:{
        type:String, unique:true,
        trim:true,
        lowercase:true
       
   },
   
   password:{
       type:String,
       trim:true,
       min:6,
       max:20 
   },
    phone:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20 
    },
    Spécialité:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20 
    },
  
    Description:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:30 
    },
    image:{
        type:String
    },
    status:{
        type:String,
        enum:['en attente', 'validé'],
        default:'en attente'

    }
    
},{timestamps:true})

  
 
module.exports = mongoose.model('expert',expertSchema)