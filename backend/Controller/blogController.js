

const blogModel = require("../Model/blogModel");
const BlogModel = require("../Model/blogModel");



async function getBlogs(req,res){
    try {
    
        const data_from_db = await BlogModel.find({})
    
        return res.status(200).json({
          status: "success",
          message: "get successfully",
          allBlogs: data_from_db})
      } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
      }
}

async function getBlog(req,res){
    try {
        let usrID=req.params.id ;

        let Blog_from_DB =blogModel.findOne({_id:usrID})

        console.log(Blog_from_DB)
        res.status(200).json({message:done,blog:Blog_from_DB})
    } catch (error) {
        
    }
}

async function postBlog(req,res){
    try {
    const BlogData = req.body;
  
    const data_TO_Database = await BlogModel.create({...BlogData });

    const blogs = await BlogModel.find({auther:"684de2bb73ef9944867a9d0a"}).populate();
      console.log(blogs)

    return res.status(200).json({
      status: "success",
      message: "post successfully",
      data: data_TO_Database,
  
    });
  } catch (error) {
    res.status(404).send("error");
  }
}

async function updateBlog( req,res){
try {

    const {id} = req.params
    console.log(id)

    return res.status(200).json({
      status: "success",
      message: "update successfully",
      })
  } catch (error) {
    res.status(404).send("error");
  }
}
    
 async function deleteBlog(req,res){
try {

    const {id} = req.params
    console.log(id)

    return res.status(200).json({
      status: "success",
      message: "delete successfully",
      })
  } catch (error) {
    res.status(404).send("error");
  }
} 

module.exports={getBlogs,getBlog,postBlog,updateBlog,deleteBlog}