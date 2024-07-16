const express = require("express");
const app = express();
const mongoose = require("mongoose")
const path = require("path");
const userModel=require("./models/userModel")
const userRoutes = require("./routes/userRoutes");

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
 

mongoose.connect("mongodb+srv://sharukshayaimmu:Y8FwOMfSBRIt8nyP@cluster0.tb9js1n.mongodb.net/sharuk-test-db?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Connection error', err);
});

app.use('/', userRoutes);

app.listen(3000, () => {
    console.log("Server is running");
});
