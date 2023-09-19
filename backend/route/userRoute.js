const express = require("express")
const router = express.Router();
const {registerUser , loginUser} = require("../controller/registerUser")

router.route("/sign").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;