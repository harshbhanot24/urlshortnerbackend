const express=require('express')
const route=express();

const urlschema=require('./database/urlSchema')
route.use(express.json());
route.post('/',(req,res)=>{
    expandURL(req.body.url).then(
        (data)=>{
            if(data!='URL doesnot exist')
            res.status(200).json({url:data})
            else{
                res.status(404).json({err:data})
            }
})

})
async function expandURL(url)
{   
    console.log('here is the shortned url  '+url)
 let newURL=makeurl(url.length/2)+'.com';
 const urlObj=new urlschema({
    url:url,
    shortenedUrl:newURL
})

const checkURL=await urlschema.findOne({shortenedUrl:url})//here we check if url is already there or not based on the email address
if(!checkURL){
    return "URL doesnot exist";
    
}else{
    return checkURL;
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