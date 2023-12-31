import mongoose from 'mongoose'

const planSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
    },
    category:{
        type:mongoose.ObjectId,
        ref:'Category',
        required:true
    },
    address:{
        type:String,
        required:true,
     },
    city:{
        type:String,
        required:true,
    },
    sampleimage:{
        data:Buffer,
        contentType:String
    }
},
{timestamps:true})
export default mongoose.model("Plans", planSchema)