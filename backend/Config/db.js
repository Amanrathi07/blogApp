
const mongoose =require("mongoose");


async function dbConect(){
    await mongoose.connect("mongodb://localhost:27017/blogApp");
    await console.log('db connect successfully ');
    
}


module.exports = dbConect ;
