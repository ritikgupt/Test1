const express =require('express')
const router= express.Router()
const Screen=require('../models/screen')
router.post('/addscreen',async(req,res)=>{
    console.log(req.body)
    try{
   await Screen.create({
       name:req.body.name,
       num_of_seats:req.body.num_of_seats,
       types_of_seat:req.body.types_of_seat
   })
   res.json({message:"sample database created"})
}catch(e){
    console.log(e)
    res.json({message:e})
}
})

router.get('/showscreen',async(req,res)=>{
    try{
        await Screen.find({},(err,screens)=>{
            if(err)
            {
                console.log(err)
            }
            else{
                res.json(screens)
            }
        })
    }catch(e){
        res.json({message:e})
    }
})

module.exports=router