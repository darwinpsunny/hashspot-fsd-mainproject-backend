const mongoose=require("mongoose")

mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb+srv://user1:user1@fsdlibapp.lcvhf.mongodb.net/libray?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
const Schema=mongoose.Schema;
const adminSchema= new Schema({
    post:String,
    
  
    password:String,
   

    
    
});
const admindata=mongoose.model("admindata",adminSchema);
module.exports=admindata;