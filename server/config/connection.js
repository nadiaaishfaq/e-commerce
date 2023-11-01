const mongoose =require("mongoose")


const Url="mongodb+srv://nabeelahmad12345:nabeelahmad12345@cluster0.4bl8pjt.mongodb.net/"
mongoose.connect(Url,{
    useNewUrlParser:true,
    useUnifiedTopology:true


}).then(()=>{
    console.log("db connected")
})

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection failed"))

module.exports=mongoose