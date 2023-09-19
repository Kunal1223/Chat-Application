const asynchandler = require("express-async-handler");
const User = require("../Models/UserModel");
const generateToken = require("../config.js/jsonwebtoken");
const bcrypt = require("bcryptjs");
 
const registerUser = asynchandler(async (req, res) => {
    const { name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, error: "Please fill all the details" });
    }
    const userExist = await User.findOne({ email });

    if (userExist) {
        return res.status(400).json({ success: false, error: "User already exists" });
    }  
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        if (user) {
            res.status(200).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                token: generateToken(user._id),
                success: true,
            });
        } else {
             res.status(400).json({ success: false, error: "User not found" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, error: "Server error" });
    }
});

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({success:true , error:"Please fill all the details"})
    }

    const user = await User.findOne({ email });

    if (user) {
        const check = await bcrypt.compare(password, user.password);
        if (check) {
            res.status(200).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                token: generateToken(user._id),
                success: true,
            });
        } else {
            return res.status(400).json({ success: false, error: "Email or Password does not match" });
        }
    } else {
        return res.status(400).json({ success: false, error: "Email or Password does not match" });
    }
};
 
module.exports = { registerUser, loginUser };
 