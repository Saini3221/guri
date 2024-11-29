const express = require("express");

const { addItemToCart } = require("../controllers/cartControllers");
const Router = express.Router();

Router.post('/', addItemToCart)


module.exports = Router;
