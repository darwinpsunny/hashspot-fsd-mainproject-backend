const express=require("express")
const cuserdata=require("../model/userdata")
const csignuprouter=express.Router();
function router()
{    csignuprouter.get("/ab",function(req,res){
    res.send("ab")
})
    csignuprouter.post("/signup",function(req,res){
        res.header("Access-Control-Allow-Orgin","*")
        res.header("Access-Control-Allow-Methods,GET,POST,PATCH,PUT,DELETE,OPTIONS")
        
        console.log(req.body)
        var item={
            email:req.body.user.email,
            name:req.body.user.name,
            phonenumber:req.body.user.phonenumber,
            password:req.body.user.password,
            application:{
                vehicleloan:{
                    status:"notsubmitted"
                   
                    
                }
        
            }
        }
        console.log(item)
        var user=cuserdata(item)
        user.save();

    })
    return csignuprouter;
}
module.exports=router;
