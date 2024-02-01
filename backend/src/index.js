const  dotenv =require('dotenv')
//config .env file
dotenv.config()
//import additional modules
const  express = require('express');
require('./database/configuration')
const { reviewRouting } = require('./v1/review/review.controller');
const app=express()//express instance
//use middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//initialize routing
app.use('/api/review/',reviewRouting)
const port=process.env.PORT||5000
//server
app.listen(port,()=>{
    console.log(`Server is running on port:${port}`)
})