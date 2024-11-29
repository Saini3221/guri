const express = require("express");
const {getAlluser,createUser, loginUser} = require("../controllers/userControllers");

const Router = express.Router();

Router.get("/",getAlluser)
Router.post("/createuser", createUser)
Router.post("/login", loginUser)
module.exports = Router;