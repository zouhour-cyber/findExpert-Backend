const express=require('express')
const app=express()
const cors = require('cors')
const bp = require("body-parser");
//connect db
const connectDB=require('./config/db')
connectDB()
app.use(cors())
app.use(express.json());
// dotenv.config()
const PORT =process.env.PORT || "4000"
app.use(bp.json());


//routes

const RDVRouter =require('./Routes/RDVRoute')
app.use('/app/rdv', RDVRouter )

const PUBRouter =require('./Routes/PublicationRoute')
app.use('/app/PUB', PUBRouter )


const user = require('./Authentification/User/userRoute')
app.use('/user',user)

const admin = require('./Authentification/Admin/adminRoute')
app.use('/admin',admin)

const expert = require('./Authentification/Expert/ExpertRoute')
app.use('/expert',expert)

const contact =require('./Routes/contactRoute')
app.use('/contact',contact)

const newsletter =require('./Routes/NewsletterRoute')
app.use('/newsletter',newsletter)


//config server
app.listen(PORT ,(err)=>{
    if (err){
        console.log('server is not running ')
    }
    else {
        console.log(`server is running on port ${PORT}`)
    }
    })