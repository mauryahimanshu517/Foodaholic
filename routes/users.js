const mongoose=require('mongoose')
const passportlocalmongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/foodaholic");

const userSchema=mongoose.Schema({
  username:String,
  email:String,
  password:String,
 
})

userSchema.plugin(passportlocalmongoose);

module.exports=mongoose.model("user",userSchema)