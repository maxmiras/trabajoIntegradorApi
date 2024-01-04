let modelo= require("../Schema/schemaRepar");

const traerTodasRep= async (req,res)=>{
    let resultado= await modelo.find();
    console.log(resultado)
    res.send(resultado)
    
}
const nuevaRep= async (req,res)=>{
    let{dominio,fecha,tipoDeRep,observaciones}=req.body;
    let nuevaRepar = new modelo({
        dominio:dominio,
        fecha:fecha, 
        tipoDeRep:tipoDeRep,
        observaciones:observaciones,
    })
    let resultado= await modelo.collection.insertOne(nuevaRepar);
    res.send(resultado)
    
}
const buscarDominio= async (req,res)=>{
    let info=req.params.dominio;
    let resultado= await modelo.collection.find({dominio:info});
    console.log(resultado)
    res.send(resultado)

}








module.exports={traerTodasRep,nuevaRep,buscarDominio}