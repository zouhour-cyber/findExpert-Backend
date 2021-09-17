

const RDV =require('../Model/RDVModel')


module.exports ={

        //add RDV

        addRDV:async(req,res) =>{

            const date = req.body.date 
            const heure = req.body.heure 
            const idExpert=req.body.idExpert
            const nameExpert =req.body.nameExpert
            const nameUser =req.body.nameUser
            const idUser =req.body.idUser
    
            const statusRDV =req.body.statusRDV


    
            try{
                rdv =new RDV ({
                 date,heure,idExpert,nameExpert,nameUser,idUser,statusRDV
                })
                await rdv.save()
                res.json(rdv)
            }
            catch(error) {
                console.error(error.message)
            }
        },
       //Get rdv
       getRDV:async (req,res)=>{
        try{
            const rdv=await RDV.find()
            // .populate("users")
          
            res.json(rdv)
        }
        catch(error){
            console.error(error.message)
            res.statusRDV(500).send('server error')
        }
    },

    //delete 
    deleteRDV:async(req,res) => {
        try{
            const rdv =await RDV.findByIdAndDelete(req.params.id)
            res.json(rdv)
        }
        catch(error){
        console.error(error.message)

        }}
        ,
    updateRDV:async(req,res) =>{
            try{
                const rdv= await RDV.findByIdAndUpdate(req.params.id , req.body , {new:true})
                res.json(rdv)
            }
            catch(error){
                console.error(error.message)
        
                }
        }
}