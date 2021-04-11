const express=require("express")
const cuserrouter=express.Router()
const cuserdata=require("../model/userdata")
const jwt=require("jsonwebtoken")
function router()
{
    cuserrouter.post("/login",function(req,res){
        console.log(req.body)
        eid=req.body.email
        passwrd=req.body.password
       
        cuserdata.findOne({$and:[{email:eid},{password:passwrd}]})
        .then(function(user){
            console.log(user)
            if(!user){
                res.status(401).send("invalid pass")
            }
            
            else{ let payload={subject:eid+passwrd}
            let token=jwt.sign(payload,'secretKey')
            res.status(200).send({token,user})
                
            }
         })
    })
    cuserrouter.get("/:i",function(req,res){
        const i=req.params.i
        cuserdata.findOne({_id:i})
        .then(function(user){
            res.send(user)
        

        })
    })
    function verifytoken(req,res,next){
        console.log(req.headers.authorization)
        if(!req.headers.authorization)
        {
            return res,status(401).send("unauhtorised req")
        }
        let token=req.headers.authorization.split(' ')[1]
        console.log(token)
        if(token=='null')
        {
            return res.status(401).send("unauhtorised req")
        }
        let payload=jwt.verify(token,'secretKey')
        console.log(payload)
        if(!payload)
        {
            return res,status(401).send("unauhtorised req")
        }
        req.userId=payload.subject
        next()
    }
    cuserrouter.post("/tokenverify",function(req,res){
        console.log("called")
        verifytoken()
    })
    return cuserrouter;
}
module.exports=router;