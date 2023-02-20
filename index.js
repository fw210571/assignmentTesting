const express = require("express") ;
const cors = require("cors") ;
const {connection} = require("./configs/db") ;
const {proRouter} = require("./routes/productRoute") ;

require("dotenv").config() ;

const app = express() ;
app.use(cors()) ;
app.use(express.json()) ;

app.get("/" , (req , res)=>{
    res.send("welcome to backend") ;
}) ;
app.use("/product" , proRouter ) ;

app.listen(process.env.port , async()=>{

    try{

        await connection ;
        console.log("connected to DB") ;
    }catch(err){

    }
    console.log("server is running (2040)") ;
})