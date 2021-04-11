const express=require("express")
const masterrouter=express.Router();
const cuserdata=require("../model/userdata");

function router()
{

    masterrouter.get("/userdata",function(re,res){
        res.header("Access-Control-Allow-Orgin","*")
        res.header("Access-Control-Allow-Methods,GET,POST,PATCH,PUT,DELETE,OPTIONS")
        cuserdata.find().then(function(users){
            res.send(users)
        })
    })
    return masterrouter
}
module.exports =router;