const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
        name :String,
        email:String,
        password:{
            type:String,
            select:false
        },
    blogs:[
        {
            type:mongoose.Schema.Types.ObjectId ,
            ref:"Blog"
        }
    ]

})

const userModel=mongoose.model("user",userSchema);


module.exports = userModel ; 