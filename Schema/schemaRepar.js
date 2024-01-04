const mongoose=require ("mongoose");

const reparSchema= new mongoose.Schema({
    dominio:String,
    fecha:String,
    tipoDeRep:String,
    observaciones:String,
     
})

module.exports=mongoose.model("reparaciones",reparSchema);