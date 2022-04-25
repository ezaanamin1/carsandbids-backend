import mongoose from "mongoose";

const CarSchema=mongoose.Schema({
    name:String,
    description:String,
    image:String,
})

export default mongoose.model('car',CarSchema)