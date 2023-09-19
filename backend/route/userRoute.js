const express = require("express")
const router = express.Router();
const {registerUser , loginUser, allUser} = require("../controller/registerUser");
const { protect } = require("../midleware/authMiddleware");

router.route("/sign").post(registerUser).get(protect , allUser);
router.route("/login").post(loginUser);

module.exports = router;