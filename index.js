const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors());
const conn=require("./database/connection")
const shortner=require('./shortner');
const expand=require('./expand');

app.use('/shortner',shortner)
app.use('/expand',expand)
app.get('/',(req,res)=>{
    res.json({"message":"Currently I am not serving you this sorry try something other I have to offer"})
})
app.listen((process.env.PORT || 4000),()=>{
  console.log('connected')  
})
