const express=require('express');
const route=express.Router();
const{traerTodasRep,nuevaRep}=require('../Controller/reparController')

route.get("/",traerTodasRep)
route.get("/:tipoUsuario",)
route.post("/",nuevaRep)


module.exports=route;