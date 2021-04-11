const express=require("express")
const applicationrouter=express.Router()
const cuserdata=require("../model/userdata")
var ObjectId = require('mongodb').ObjectID;
const jwt=require("jsonwebtoken")
function router()
{    
    
    applicationrouter.post("/vehicleloansubmit",function(req,res){

        console.log(req.body)
        id=req.body.id;
        console.log(id)
        cuserdata.findOne({_id:ObjectId(id)})
        .then(function(user){
            console.log(user)
        })
        cuserdata.updateOne({_id:ObjectId(id)},
              {$set:{"application.vehicleloan":req.body.vehicleloan}
              },
              )
                .then(result => {
                  console.log(result)
                  console .log("result")
                })
                .catch(error => console.error(error))
      

   })
   applicationrouter.post("/statustoverify",function(req,res){
     id=req.body.id;
     console.log(req.body)
     cuserdata.updateOne({_id:ObjectId(id)},
     {$set:{"application.vehicleloan.status":"verified"}
     },
     )
       .then(result => {
         console.log(result)
         console .log("result")
       })
       .catch(error => console.error(error))
   })
   applicationrouter.post("/reject",function(req,res){
    
    vehicleloan={
      status:"rejected",
      aadharno:null,
      address:"",
      pincode:null,
      age:null,
      gender:"",
      occupation:"",
      monthlyincome:"",
      neworold:"",
      fuel:"",
      manufacturingyear:null,
      marketprice:null,
      company:"",
      model:"",
      amountrequired:null,
      date:"",
      approvedamount:null,
      emi:null

  
  }
    console.log(req.body)
    id=req.body.id;
    cuserdata.updateOne({_id:ObjectId(id)},
    {$set:{"application.vehicleloan":vehicleloan}
    },
    )
      .then(result => {
        console.log(result)
        console .log("result")
      })
      .catch(error => console.error(error))
   })

  applicationrouter.post("/wait",function(req,res){
    console.log(req.body)
    id=req.body.id;
    cuserdata.updateOne({_id:ObjectId(id)},
    {$set:{"application.vehicleloan.status":"wait",
    "application.vehicleloan.approvedamount":req.body.approvedamount,
    "application.vehicleloan.emi":req.body.emi
  }
    },
    )
      .then(result => {
        console.log(result)
        console .log("result")
      })
      .catch(error => console.error(error))
    })
    applicationrouter.post("/amountaccept",function(req,res){
      console.log(req.body)
      id=req.body.id;
      cuserdata.updateOne({_id:ObjectId(id)},
      {$set:{"application.vehicleloan.status":"accepted"
   
    }
      },
      )
        .then(result => {
          console.log(result)
          console .log("result")
        })
        .catch(error => console.error(error))
      })
     

   return applicationrouter
}
module.exports=router;