const mongoose = require("mongoose")

mongoose.connect(`mongodb://127.0.0.1:27017/userinfo`);

const userSchema = mongoose.Schema({
    name:String,
    password:String,
    email:String,
   gender:String,
});
module.exports =mongoose.model("user",userSchema)
