const express = require("express") ;
const {ProModel} = require("../models/productModel") ;
const proRouter = express.Router() ;


// >>>> getting movie data
proRouter.get("/" , async(req , res)=>{

    try{
        const data = await ProModel.find() ;
        res.send({"msg"  : data}) ;
    }catch(err){
        res.send({"msg"  : err.massage}) ;
    }

}) ;


// >>>> getting product data by query
proRouter.get("/q" , async(req , res)=>{

    const query = req.query ;

    try{
        const data = await ProModel.find(query) ;
        res.send({"msg"  : data}) ;
    }catch(err){
        res.send({"msg"  : err.massage}) ;
    }

}) ;


// >>>>> Adding product  
// structure for posting data 
// {
//     "img"         : "String" ,
//     "title"       : "String" ,
//     "discription" : "String" ,
//     "price"       : 5 ,
//     "rating"      : 5 
//  } 
proRouter.post("/" , async(req , res)=>{

    const { title , img , description , price , rating } = req.body ;

    try{
        const data = new ProModel({ title , img , description , price , rating }) ;
        await data.save() ;

        res.send({"msg"  : "product added"}) ;
    }catch(err){
        res.send({"msg"  : err.massage}) ;
    }

}) ;


// >>>> updating product by ID
proRouter.patch("/:id" , async(req , res)=>{

    const payload = req.body ;
    const ID = req.params.id ;

    try{

        await ProModel.findByIdAndUpdate( {_id : ID} , payload ) ;
      
        res.send({"msg"  : "product updated"}) ;
    }catch(err){
        res.send({"msg"  : err.massage}) ;
    }

}) ;


// >>>> deleting product by ID
proRouter.delete("/:id" , async(req , res)=>{

    const ID = req.params.id ;

    try{
        await ProModel.findByIdAndDelete( {_id : ID} ) ;
        res.send({"msg"  : "product deleting"}) ;

    }catch(err){
        res.send({"msg"  : err.message }) ;
    }

}) ;


module.exports = { proRouter } ;