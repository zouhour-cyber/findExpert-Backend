const USER = require('./userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


module.exports={
register:async(req,res)=>{
USER.findOne({email:req.body.email})
.exec((error,user)=>{
    if(user) return  res.status(400).json({
        message:'Email already been used'
    });
     const hashedPasswor =  bcrypt.hashSync(req.body.password, 10);
    const password = hashedPasswor;
    const fullName = req.body.fullName
    const email = req.body.email
    const phone = req.body.phone
    const Spécialité= req.body.Spécialité
    const Description= req.body.Description
    const image= req.body.image
    const status= req.body.status
    const role= req.body.role

    const _user = new USER({
        fullName,
        email,phone,Spécialité,Description,image,status,role,password
    })

    _user.save((error,data) =>{
        if(error){
            return res.status(400).json({
                message:'Somthing went wrong!'
            })
        }
        if(data){
            return res.status(201).json({
                message:'User is created Successfuly..!'  ,
            data          })

        }
    })
});

},
signIn:async(req,res)=>{
    USER.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error){
            return res.status(400).json({error}) }
            if(user){
            const comp= bcrypt.compare(user.password === req.body.password)
            if (comp){
                    const token = jwt.sign({_id:user._id,role:user.role},'MEARNSECRET',{expiresIn:'1h'})
                    const {_id,fullName,
                        email,phone,Spécialité,Description,image,status,role} = user
                   
                    res.status(200).json({
                        token,
                        user:{
                          _id,fullName,
                          email,phone,Spécialité,Description,image,status,role
                        }                
                    })
                } else{
                    return res.status(400).json({
                        message:'Invalid Password'
                    })
                }

            }else{
                return res.status(400).json({message:'SomeThing went wrong !'})
            }
       
    })
} ,
//Get user
getuser:async (req,res)=>{
    try{
        const user=await USER.find()
      
        res.json(user)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send('server error')
    }
   },
   
   updateUser:async(req,res) =>{
           try{
               const user= await USER.findByIdAndUpdate(req.params.id , req.body , {new:true})
               res.json(user)
           }
           catch(error){
               console.error(error.message)
       
               }
       },
           //deleteUser
       deleteUser:async(req,res) => {
        try{
            const user =await USER.findByIdAndDelete(req.params.id)
            res.json(user)
        }
        catch(error){
        console.error(error.message)

        }},
        
//getUserbyId
getUserbyId:async(req,res) => {
    try{
        const user =await USER.findById(req.params.id)
        res.json(user)
    }
    catch(error){
    console.error(error.message)

    }}

}

