const mongoose=require("mongoose");

const vehicSchema= new mongoose.Schema({
    dominio:String,
    marca:String,
    Tipo:String,
    modelo:String,

     
})

module.exports=mongoose.model("vehiculos",vehicSchema);