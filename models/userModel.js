const mongoose = require("mongoose")

// mongoose.connect(`mongodb://127.0.0.1:27017/userinfo`);
// mongoose.connect("mongodb+srv://sharukshayaimmu:Y8FwOMfSBRIt8nyP@cluster0.tb9js1n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = mongoose.Schema({
    name:String,
    password:String,
    email:String,
   gender:String,
});
module.exports =mongoose.model("user",userSchema)
