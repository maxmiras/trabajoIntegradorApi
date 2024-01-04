const express=require('express');
const server=express();
const port=4000;
const cors=require('cors');
const userRauter = require("../API/Router/userRoutes");
const reparRouter = require("../API/Router/reparRoutes");
const vehicRouter = require("../API/Router/vehicRoutes");

require('../API/config/db')

server.use(express.json());
server.use(cors());
server.use("/api/user",userRauter);
server.use("/api/rep",reparRouter);
server.use("/api/vehic",vehicRouter);



server.listen(port,()=>{
    console.log("server corriendo en el puerto" + port)
})
