const express = require("express");
const userModel= require("./models/userModel")
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const userRoutes = require("./routes/userRoutes");

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



const mongoUri = "mongodb+srv://sharukshayaimmu:Y8FwOMfSBRIt8nyP@cluster0.tb9js1n.mongodb.net/sharuk-test-db?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected MongoDB");
}).catch((error) => {
    console.error("Error connecting:", error);
});



app.use('/', userRoutes);

app.listen(3000, () => {
    console.log("Server is running");
});

















