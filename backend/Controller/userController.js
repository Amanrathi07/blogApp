const  bcrypt=require("bcrypt")

const userModel = require("../Model/userModel");
const { post } = require("../Routes/userRoutes");



async function getUser(req,res){
    try {
    
        const data_from_db = await userModel.find({},"-password")
    
        return res.status(200).json({
          status: "success",
          message: "get successfully",
          allUsers: data_from_db})
      } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
      }
}

async function postUser(req,res){
    try {
    const userData = req.body;
    const hashpassword=await bcrypt.hash(req.body.password,10)
    const data_TO_Database = await userModel.create({...userData , password:hashpassword});

    return res.status(200).json({
      status: "success",
      message: "post successfully",
    //   data: data_TO_Database
    });
  } catch (error) {
    res.status(404).send("error");
  }
}

async function updateUser( req,res){
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
    
 async function deleteUser(req,res){
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

module.exports={getUser,postUser,updateUser,deleteUser}