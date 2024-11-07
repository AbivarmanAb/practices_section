const express =require('express');
const app =express();
const cors =require('cors');
const User =require('./models/User')

const bcrypt=require('bcryptjs')
const { default: mongoose } = require('mongoose');
const salt=bcrypt.genSaltSync(10);
 const jwt =require('jsonwebtoken')
 const cookieParser=require('cookie-parser') 
 const secret='asghsgfuefhjefiejfknkenvkej';
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser())
 mongoose.connect('mongodb+srv://blogss:gVQ3zCzHReaRUwKt@cluster0.dh0yq5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
app.post('/register',async (req,res)=>{
  const {username,password}=req.body;
  try {
 const userDoc=await User.create({
    username,
    password:bcrypt.hashSync(password,salt),
  })
    res.json(userDoc) 
    } catch (e) {
      res.status(400).json(e)
    }
    });

app.post('/login',async (req,res)=>{
  const {username,password}=req.body;
  const userDoc=await User.findOne({username});
  const passOk=bcrypt.compareSync(password,userDoc.password)

if(passOk){
  jwt.sign({username,id:userDoc._id},secret,{},(err,token)=>{
    if(err) throw err;
    res.cookie('token',token).json('ok');
  })
}else{
  res.status(400).json('wrong credentials')
}

})
 
app.get('/profile',(req,res)=>{
  res.json(req.cookie)
})


//gVQ3zCzHReaRUwKt

//mongodb+srv://blogss:gVQ3zCzHReaRUwKt@cluster0.dh0yq5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



//7418384789