const mongoose =require ("mongoose")
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://zouhour:zouhour1994@cluster0.uywhh.mongodb.net/Expertise?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
        console.log('MongoDB connected ....')
    } 
    catch(error){console.error(error.message)}
   
        
}
module.exports=connectDB