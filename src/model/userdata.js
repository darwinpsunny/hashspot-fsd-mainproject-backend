const mongoose=require("mongoose")

mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb+srv://user1:user1@fsdlibapp.lcvhf.mongodb.net/libray?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
const Schema=mongoose.Schema;
const userSchema= new Schema({
    email:String,
    name:String,
    phonenumber:Number,
    password:String,
    application:{
        vehicleloan:{
            status:String,
            aadharno:Number,
            address:String,
            pincode:Number,
            age:Number,
            gender:String,
            occupation:String,
            monthlyincome:String,
            neworold:String,
            fuel:String,
            manufacturingyear:Number,
            marketprice:Number,
            company:String,
            model:String,
            amountrequired:Number,
            date:String,
            approvedamount:Number,
            emi:Number



        }

    }
    
});
const cuserdata=mongoose.model("cuserdata",userSchema);
module.exports=cuserdata;