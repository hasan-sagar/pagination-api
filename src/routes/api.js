const express = require("express");
const ProductsList = require("../controllers/ProductsController");
const router = express.Router();

router.get("/ProductsList/:pageNo/:perPage/:searchKeyword?", ProductsList);

module.exports = router;
