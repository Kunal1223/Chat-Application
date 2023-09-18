const asynchandler = require("express-async-handler");
const User = require("../Models/UserModel");
const generateToken = require("../config.js/jsonwebtoken");
const bcrypt = require("bcryptjs")

const registerUser = asynchandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please fill all the details"); 
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw Error("User already Exist");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    if (user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            pic: user.pic,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw Error("User not found");
    } 
});

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }); 

    if (user) {
        const check = await bcrypt.compare(password, user.password); 
        if (check) {
            res.status(200).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                pic: user.pic,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ error: "Email or Password does not match" });
        }
    } else {
        res.status(400).json({ error: "Email or Password does not match" });
    }
};


module.exports = { registerUser , loginUser};