const express = require("express");
const app = express();
const path = require("path");
const userRoutes = require("./routes/userRoutes");

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes);

app.listen(3000, () => {
    console.log("Server is running");
});
