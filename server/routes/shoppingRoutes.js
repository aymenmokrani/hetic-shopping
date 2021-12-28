const { Router } = require("express");
const { add_to_cart } = require("../controllers/shoppingController");

const shoppingRoutes = Router();

shoppingRoutes.post("/addtocart", add_to_cart);

module.exports = shoppingRoutes;
