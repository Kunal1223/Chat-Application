const express = require("express")
const router = express.Router();
const {registerUser} = require("../controller/registerUser")

router.route("/").post(registerUser);


module.exports = router;