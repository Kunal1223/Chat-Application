const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/' , (req,res)=>{
    res.send("This is about page by me");
})

app.get('/test' , (req,res)=>{
    res.send("This is about page");
})

PORT = process.env.PORT
app.listen(PORT, (req , res) =>{  
    console.log("Listing on the 5000 port");
})