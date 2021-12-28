const router = require("express").Router();
const paymentController = require("../../controller/v1/payment")

router.post("/payment", paymentController().payByCard)