const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
        usuario:String,
        password:String, 
        tipoUsuario:String,    
})

module.exports=mongoose.model("usuarios",userSchema);