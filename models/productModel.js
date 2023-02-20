
const mongoose = require("mongoose");

const proSchema = mongoose.Schema({

    img         : String ,
    title       : String ,
    description : String ,
    price       : Number ,
    rating      : Number 

}) ;

const ProModel = mongoose.model( "productCollection" , proSchema ) ;

module.exports = { ProModel } ;