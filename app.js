import express from "express"
import mongoose from "mongoose";
import  Cors from "cors"
import Car from "./dbdata.js"

const port=process.env.PORT||9000
const app=express();
app.use(express.json())
app.use(Cors())

//mongodb+srv://EzaanAmin:itsmeagain99@cluster0.xi0l8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const connetion_url='mongodb+srv://EzaanAmin:itsmeagain99@cluster0.xi0l8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(connetion_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

  
    
})


const db=mongoose.connection;
db.once("open",()=>{
    console.log("Db connected")


})


const carsCollections = db.collection("cars");
app.get("/",(req,res)=>{

    res.send("Hello Word")
})
app.get("/data",(req,res)=>{
    Car.find((err,data)=>{
if(err)
{
    res.send(err)
}
else{
    res.send(data)
}
    })
})


app.listen(port,()=>{
    console.log("Listen on localHost")
})
