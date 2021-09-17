

const PUBLICATION=require('../Model/PUBLICATIONModel')


module.exports ={

        //add PUBLICATION

        addPUB:async(req,res) =>{

            const titre = req.body.titre 
            const description =req.body.description
            const image =req.body.image


    
            try{
                publication =new PUBLICATION({
                titre, description, image  
                })
                await publication.save()
                res.json(publication)
            }
            catch(error) {
                console.error(error.message)
            }
        },
       //Get publication
       getPUB:async (req,res)=>{
        try{
            const publication=await PUBLICATION.find()
          
            res.json(publication)
        }
        catch(error){
            console.error(error.message)
            res.status(500).send('server error')
        }
    },

    //delete 
    deletePUB:async(req,res) => {
        try{
            const publication =await PUBLICATION.findByIdAndDelete(req.params.id)
            res.json(publication)
        }
        catch(error){
        console.error(error.message)

        }}
        ,
    updatePUB:async(req,res) =>{
            try{
                const publication= await PUBLICATION.findByIdAndUpdate(req.params.id , req.body , {new:true})
                res.json(publication)
            }
            catch(error){
                console.error(error.message)
        
                }
        },
        //getPUBbyId
     getPUBbyId:async(req,res) => {
        try{
            const publication =await PUBLICATION.findById(req.params.id)
            res.json(publication)
        }
        catch(error){
        console.error(error.message)

        }}


}