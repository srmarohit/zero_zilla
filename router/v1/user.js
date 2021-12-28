const { authorization, admin } = require("../../middleware");

const router = require("express").Router();

const userController = require("../../controller/v1/user")

router.put("/:id", authorization, userController().updateUser );

router.delete("/:id", admin, userController().deleteUser)

router.get("/find/:id", admin, userController().getUser)

router.get("/", admin, userController().getAllUsers)

router.get("/stats", admin, userController().usersStats)


module.exports = router ;