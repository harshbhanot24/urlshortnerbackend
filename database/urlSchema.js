var mongoose = require('mongoose');
const conn=require('./connection')
const urlSchema=new mongoose.Schema({
    url:{type:String,required:true,unique:true},
    shortenedUrl:{type:String,required:true},
    Active:{type:Boolean,default:true}
}); 
module.exports=mongoose.model('url',urlSchema);
