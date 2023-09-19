const express = require('express');
const dotenv = require('dotenv');
const Connection = require('./config.js/Db');
const colors = require("colors");
const cors = require("cors");
const userRouter = require("./route/userRoute");
const { errorHandler, notFound } = require('./midleware/errorHandler');

const app = express();

app.use(cors());
dotenv.config();
Connection();
app.use(express.json());

app.get('/' , (req,res)=>{
    res.send("This is about page by me");
})

app.use('/api/user', userRouter); 
app.use(errorHandler);
app.use(notFound);
 


PORT = process.env.PORT
app.listen(PORT, (req , res) =>{  
    console.log("Listing on the 5000 port");
})