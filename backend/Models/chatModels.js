const mongoose = require("mongoose")


const chatModel = mongoose.Schema({
    chatName : {
        type: String,
        trim : true
    },
    isGroupChat :{
        type : Boolean,
        default:false
    },
    user:[{
        type:mongoose.Schema.Types.ObjectID,
        ref:"User",
    }],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectID,
        ref:"message",
    },
    GroupAdmin:{
        type:mongoose.Schema.Types.ObjectID,
        ref:"User",
    },
},
{
    timestamps: true,
}

);

const Chat = mongoose.model("chat",chatModel);
module.exports = Chat ;