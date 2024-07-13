const express =require ("express");
const app=express();
const path= require('path');
const userModel= require('./views/User')
const bcrypt = require("bcrypt");



app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req, res) => {
    res.render('index')
})
app.post('/register', (req, res) => {
     let {name,email,password,gender} = req.body;
bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,async(err,hash)=>{
        console.log(hash)
        let userCreated = await userModel.create({
            name,
            email,
            password:hash,
            gender
         })
         res.send(userCreated)
    })
})
});
app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login',async (req, res) => {
    let user= await userModel.findOne({email:req.body.email})
    if(!user)return res.send("your email is wrong")
        bcrypt.compare(req.body.password,user.password,(err,result)=>{
             if(result)return res.send(" login success")
                else res.send("your password is wrong")
        })
})

app.get('/delete', (req, res) => {
    res.render('delete')
})
app.post("/delete",async(req,res)=>{
    let deleteUser= await userModel.findOneAndDelete({name:req.body.username})
   res.send(deleteUser)
})
app.listen(3000,()=>{
    console.log("server is runing")
})