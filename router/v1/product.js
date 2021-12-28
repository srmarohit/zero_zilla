
const express = require("express");
const router = express.Router();
const productController = require("../../controller/v1/product");
const { admin } = require("../../middleware");

router.post("/create", admin, productController().add) ;
router.put("/edit/:id", admin, productController().update) ;
router.delete("/remove/:id", admin, productController().delete) ;
router.get("/find/:id", admin, productController().getProduct) ;
router.get("/", admin, productController().getAllProduct) ;


module.exports = router ;