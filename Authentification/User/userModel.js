const mongoose = require('mongoose')
const Schema = mongoose.Schema
 const userSchema = new Schema({
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
    phone:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20 
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
    Spécialité:{
        type:String,
         required:function(){
            return this.role === "expert";
        }
     
    },
  
    Description:{
        type:String,
        required:function(){
            return this.role === "expert";
        }
    },
    image:{
        type:String
    },
    status:{
        type:String,
        enum:['en attente', 'validé'],
        default:'en attente',
        required:function(){
            return this.role === "expert";
        }

    },
    role:{
        type:String,
        enum:['user','expert','admin'],
        default: 'user',
        required:true,
    }
},{timestamps:true})

  
 
module.exports = mongoose.model('users',userSchema)