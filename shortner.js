const express=require('express')
const route=express();

const urlschema=require('./database/urlSchema')
route.use(express.json());
route.post('/',(req,res)=>{
    saveURL(req.body.url).then(
        (data)=>{
            if(data!='URL already exist')
            res.status(200).json({url:data})
            else{
                res.status(404).json({err:data})
            }
    }
      ).catch(
          (err)=>res.send(err)
      )
  
})
async function saveURL(url)
{   
    console.log('here is input'+url)
 let newURL=makeurl(url.length/2)+'.com';
 const urlObj=new urlschema({
    url:url,
    shortenedUrl:newURL
})

const checkURL=await urlschema.findOne({url:url}).select('_id');//here we check if url is already there or not based on the email address
if(!checkURL){
   
    const result=await urlObj.save();//save the url to db and return the result
    console.log('the db '+result)
    return result;
}else{
    return    "URL already exist"
    
}

    return (newURL)
}

function makeurl(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 
module.exports=route;