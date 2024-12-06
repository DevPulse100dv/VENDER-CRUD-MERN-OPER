import mongoose from  "mongoose";
const venderSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    employee_name:{
        type:String,
        required:true,
    },
    contact_number:{
        type:String,
        required:true,
    },
});
export default mongoose.model("Vender",venderSchema);