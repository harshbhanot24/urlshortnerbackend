const mongoose=require('mongoose')
const url="mongodb+srv://admin:Samsung@24@cluster0-njc4r.mongodb.net/test?retryWrites=true";
    mongoose.connect(url, {useNewUrlParser: true}).
    then(()=>{console.log('connectd')}).catch(err=>console.log(err))
  
    module.exports=mongoose;