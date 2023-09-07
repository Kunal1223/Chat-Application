const express = require('express');
const dotenv = require('dotenv');
const Connection = require('./config.js/Db');
const colors = require("colors");
const userRouter = require("./route/userRoute")

const app = express();
dotenv.config();
Connection();

app.get('/' , (req,res)=>{
    res.send("This is about page by me");
})

app.use('/api/user', userRouter)

PORT = process.env.PORT
app.listen(PORT, (req , res) =>{  
    console.log("Listing on the 5000 port");
})