const express =require('express')
const router= express.Router()
const Sample=require('../models/sample')
router.post('/',async(req,res)=>{
    console.log(req.body)
    try{
   await Sample.create({
       title:req.body.title,
       body:req.body.body
   })
   res.json({message:"sample database created"})
}catch(e){
    console.log(e)
    res.json({message:e})
}
})

module.exports=router