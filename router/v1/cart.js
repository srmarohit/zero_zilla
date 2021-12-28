
const express = require("express");
const router = express.Router();
const cartController = require("../../controller/v1/cart");
const { admin, auth, authorization } = require("../../middleware");

router.post("/create", auth, cartController().create) ;
router.put("/edit/:id", authorization, cartController().update) ;
router.delete("/remove/:id", authorization, cartController().delete) ;
router.get("/find/:userId", authorization, cartController().getCart) ;
router.get("/", admin, cartController().getAllCarts) ;


module.exports = router ;