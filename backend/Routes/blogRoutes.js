const express = require("express");
const blogModel = require("../Model/blogModel");
const { getBlogs,getBlog,postBlog,updateBlog,deleteBlog} = require("../Controller/blogController");
const route = express.Router();

route.get("/blogs", getBlogs);

route.get("/blog/:id",getBlog)

route.post("/blog", postBlog);

route.patch("/blog/:id", updateBlog );

route.delete("/blog/:id",deleteBlog );

module.exports = route;
