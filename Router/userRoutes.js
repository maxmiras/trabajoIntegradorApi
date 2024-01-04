const express=require('express');
const route=express.Router();
const{traerUsers,cargarUser,traerTipo,actualizarUser}=require('../Controller/userController')

route.get("/",traerUsers)
route.get("/:tipoUsuario",traerTipo)
route.post("/",cargarUser)
route.patch("/",actualizarUser)


module.exports=route;