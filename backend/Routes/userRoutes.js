const express = require("express");
const userModel = require("../Model/userModel");
const { getUser,postUser,updateUser,deleteUser} = require("../Controller/userController");
const route = express.Router();

route.get("/user", getUser);

route.post("/user", postUser);

route.patch("/user/:id", updateUser );

route.delete("/user/:id",deleteUser );

module.exports = route;
