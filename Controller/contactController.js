

const CONTACT =require('../Model/contactModel')


module.exports ={

        //add CONTACT

        addCONTACT:async(req,res) =>{

            const fullName = req.body.fullName 
            const email = req.body.email 

            const message =req.body.message

    
            try{
                contact =new CONTACT ({
                fullName,email,message
                })
                await contact.save()
                res.json(contact)
            }
            catch(error) {
                console.error(error.message)
            }
        },
       //Get contact
       getCONTACT:async (req,res)=>{
        try{
            const contact=await CONTACT.find()
          
            res.json(contact)
        }
        catch(error){
            console.error(error.message)
            res.status(500).send('server error')
        }
    },

    //delete 
    deleteCONTACT:async(req,res) => {
        try{
            const contact =await CONTACT.findByIdAndDelete(req.params.id)
            res.json(contact)
        }
        catch(error){
        console.error(error.message)

        }}
        ,
    updateCONTACT:async(req,res) =>{
            try{
                const contact= await CONTACT.findByIdAndUpdate(req.params.id , req.body , {new:true})
                res.json(contact)
            }
            catch(error){
                console.error(error.message)
        
                }
        }
}