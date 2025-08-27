const mongoose = require('mongoose')


const User = new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    trim:true
},
password:{
    type:String,
    required:true,
    trim:true
},
CreatedAt:{
    type:Date,
    default:Date.now
}
})


module.exports = mongoose.model("User",User)