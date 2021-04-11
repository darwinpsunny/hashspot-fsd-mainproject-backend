const express= require('express');
const fileUpload = require('express-fileupload');
var bodyparser=require('body-parser');
const cors=require('cors');
const jwt=require("jsonwebtoken")
const app=new express();
app.use(cors());
app.use(bodyparser.json());
const port=process.env.PORT || 3000
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use(express.static('./public/imgs'));
app.use(fileUpload());
const csignuprouter=require("./src/routes/csignup")();
const masterrouter=require("./src/routes/masterroutes")();
const cuserrouter=require("./src/routes/cuserroutes")();
const applicationrouter=require("./src/routes/applicationroutes")();
const adminrouter=require("./src/routes/adminroutes")();
app.use("/csignup",csignuprouter)
app.use("/master",masterrouter)
app.use("/cuser",cuserrouter)
app.use("/applications",applicationrouter)
app.use("/admin",adminrouter)
app.get("/",function(req,res){
    res.send("Sss")
})



app.listen(port,()=>{console.log(port)});