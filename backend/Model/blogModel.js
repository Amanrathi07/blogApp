const mongoose=require('mongoose');
const userModel = require('./userModel');

const blogSchema=new mongoose.Schema({
    title:String,
    content:String,
    draft:Boolean,
    auther:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const blogModel=mongoose.model("Blog",blogSchema);

module.exports=blogModel 