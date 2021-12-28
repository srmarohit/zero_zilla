
const express = require("express");
const router = express.Router();
const orderController = require("../../controller/v1/order");
const { admin, authorization, auth } = require("../../middleware");

router.post("/create", auth, orderController().create) ;
router.put("/edit/:id", admin, orderController().update) ;
router.delete("/remove/:id", admin, orderController().delete) ;
router.get("/find/:userId", authorization, orderController().getOrder) ;
router.get("/", admin, orderController().getAllOrders) ;
router.get("/income", admin, orderController().income) ;



module.exports = router ;