

const NEWSLETTER =require('../Model/NewsletterModel')


module.exports ={

        //add newsletter

        addNEWSLETTER:async(req,res) =>{

            const email = req.body.email 

            try{
                newsletter =new NEWSLETTER ({
                email
                })
                await newsletter.save()
                res.json(newsletter)
            }
            catch(error) {
                console.error(error.message)
            }
        },
       //Get newsletter
       getNEWSLETTER:async (req,res)=>{
        try{
            const newsletter=await NEWSLETTER.find()
          
            res.json(newsletter)
        }
        catch(error){
            console.error(error.message)
            res.status(500).send('server error')
        }
    },

    //delete 
    deleteNEWSLETTER:async(req,res) => {
        try{
            const newsletter =await NEWSLETTER.findByIdAndDelete(req.params.id)
            res.json(newsletter)
        }
        catch(error){
        console.error(error.message)

        }}

 
}