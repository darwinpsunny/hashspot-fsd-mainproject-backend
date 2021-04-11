const express=require("express")
const adminrouter=express.Router()
const admindata=require("../model/admindata")
const jwt=require("jsonwebtoken")
function router()
{
    adminrouter.post("/login",function(req,res){
        res.header("Access-Control-Allow-Orgin","*")
        res.header("Access-Control-Allow-Methods,GET,POST,PATCH,PUT,DELETE,OPTIONS")
        console.log(req.body)
        post=req.body.post
        passwrd=req.body.password
        console.log(req.body)
       
        admindata.findOne({$and:[{post:post},{password:passwrd}]})
        .then(function(admin){
            console.log(admin)
            if(!admin){
                res.status(401).send("invalid pass")
            }
            
            else{ let payload={subject:post+passwrd}
            let token=jwt.sign(payload,'secretKey')
            res.status(200).send({token,admin})
                
            }
         })
    })



    adminrouter.post("/masterchange",function(req,res){
        res.header("Access-Control-Allow-Orgin","*")
        res.header("Access-Control-Allow-Methods,GET,POST,PATCH,PUT,DELETE,OPTIONS")
        console.log(req.body)
        
        passwrd=req.body.mpassword
        console.log(req.body)
        admindata.findOne({$and:[{post:"Master"},{password:req.body.ompassword}]})
        .then(function(admin){
            console.log(admin)
            if(!admin){
                res.status(401).send("invalid pass")
            }
            
            else{ 
               admindata.updateOne({post:"Master"},
            {$set:{"password":passwrd
         
          }
            },
            )
              .then(result => {
                console.log(result)
                console .log("result")
                message="password successfuly changed"
                res.status(200).send({message})
               
              })
              .catch(error => console.error(error))
            }
         })
       
        
    })
    adminrouter.post("/creditchange",function(req,res){
      res.header("Access-Control-Allow-Orgin","*")
      res.header("Access-Control-Allow-Methods,GET,POST,PATCH,PUT,DELETE,OPTIONS")
      console.log(req.body)
      
      passwrd=req.body.cpassword
      console.log(req.body)
      admindata.findOne({$and:[{post:"Credits"},{password:req.body.ocpassword}]})
      .then(function(admin){
          console.log(admin)
          if(!admin){
              res.status(401).send("invalid pass")
          }
          
          else{ 
             admindata.updateOne({post:"Credits"},
          {$set:{"password":passwrd
       
        }
          },
          )
            .then(result => {
              console.log(result)
              console .log("result")
              message="password successfuly changed"
              res.status(200).send({message})
             
            })
            .catch(error => console.error(error))
          }
       })
     
      
  })
  adminrouter.post("/accountchange",function(req,res){
    res.header("Access-Control-Allow-Orgin","*")
    res.header("Access-Control-Allow-Methods,GET,POST,PATCH,PUT,DELETE,OPTIONS")
    console.log(req.body)
    
    passwrd=req.body.apassword
    console.log(req.body)
    admindata.findOne({$and:[{post:"Accounts"},{password:req.body.oapassword}]})
    .then(function(admin){
        console.log(admin)
        if(!admin){
            res.status(401).send("invalid pass")
        }
        
        else{ 
           admindata.updateOne({post:"Accounts"},
        {$set:{"password":passwrd
     
      }
        },
        )
          .then(result => {
            console.log(result)
            console .log("result")
            message="password successfuly changed"
            res.status(200).send({message})
           
          })
          .catch(error => console.error(error))
        }
     })
   
    
})
    return adminrouter;
}
module.exports=router;