const router = require("express").Router();
const authController = require("../../controller/v1/auth")


router.post("/register", authController().register);
router.post("/login", authController().login);



module.exports = router ;