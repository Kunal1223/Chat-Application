const asynchandler = require("express-async-handler");
const User = require("../Models/UserModel");

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
            pic: user.pic
        })
    } else {
        res.status(400);
        throw Error("User not found");
    }
});

module.exports = { registerUser };