const express = require("express");
const app = express();
const mongoose = require("mongoose")
const path = require("path");
const userRoutes = require("../../routes/userRoutes");
const serverless = require("serverless-http")
// const router = Router();
// router.get("/hello", (req, res) => res.send("Hello World!"));

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

api.use("/", userRoutes);

app.listen(3000, () => {
    console.log("Server is running");
});

export const handler = serverless(app);
