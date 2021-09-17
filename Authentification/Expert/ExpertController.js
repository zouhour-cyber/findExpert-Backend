const EXPERT = require('./ExpertModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
 module.exports={
register:async(req,res)=>{

    EXPERT.findOne({email:req.body.email})
.exec((error,expert)=>{
    if(expert) return  res.status(400).json({
        message:'Email has already been used'
    });
    const hashedPasswor =  bcrypt.hashSync(req.body.password, 10);
    const password = hashedPasswor;
    const fullName = req.body.fullName
    const email = req.body.email
    const phone = req.body.phone
    const Spécialité = req.body.Spécialité
    const Description = req.body.Description
    const image = req.body.image
    const status = req.body.status
    const role = req.body.role


    const _expert = new EXPERT({
        fullName,
        email,phone,password,Spécialité,Description,image,status,role
    })

    _expert.save((error,data) =>{
        if(error){
            return res.status(400).json({
                message:'Somthing went wrong!'
            })
        }
        if(data){
            return res.status(201).json({
                message:'expert is created Successfuly..!'  ,
            data          })

        }
    })
});

},

signIn:async(req,res)=>{
    EXPERT.findOne({email:req.body.email})
    .exec((error,expert)=>{
        if(error){
            return res.status(400).json({error}) }
            if(expert){
                if (bcrypt.compare(expert.password === req.body.password )){
                    const token = jwt.sign({_id:expert._id, status:expert.status },'MEARNSECRET',{expiresIn:'1h'})

                    res.status(200).json({
                        token
                
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
},
//Get expert
getExpert:async (req,res)=>{
 try{
     const expert=await EXPERT.find()
   
     res.json(expert)
 }
 catch(error){
     console.error(error.message)
     res.status(500).send('server error')
 }
},

validation:async(req,res) =>{
    try{
        const expert= await EXPERT.findByIdAndUpdate(req.params.id , req.body , {new:true})
        res.json(expert)
    }
    catch(error){
        console.error(error.message)

     }

},
//getExpertbyId
getExpertbyId:async(req,res) => {
    try{
        const expert =await EXPERT.findById(req.params.id)
        res.json(expert)
    }
    catch(error){
    console.error(error.message)

    }}

 

}