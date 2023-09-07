const mongoose = require("mongoose");

const Connection = async() =>{
    try{
        fetch = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected".yellow.bold);
    }catch(error){
        console.log(error);
    }
}

module.exports = Connection;