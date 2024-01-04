let modelo= require("../Schema/schemaUser");


const traerUsers= async (req,res)=>{
    let resultado= await modelo.find();
    console.log(resultado)
    res.send(resultado)
    
}
// const traerTipo = async (req, res) => {
//     let info = req.params.tipoUsuario;
//     console.log('Tipo de usuario:', info);
  
//     try {
//       let resultado = await modelo.find({ tipoUsuario: info });
//       console.log('Resultado:', resultado);
//       res.send(resultado);
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ error: error.message });
//     }
//   };
const traerTipo= async (req,res)=>{
    let info=req.params.tipoUsuario;
    let resultado= await modelo.find({tipoUsuario:info});
    res.send(resultado)

}

const cargarUser= async (req,res)=>{
    let{usuario,passwordUsuario,tipoUsuario}=req.body;
    let nuevoUsuario = new modelo({
        usuario:usuario,
        password:passwordUsuario, 
        tipoUsuario:tipoUsuario,
    })
    let resultado= await modelo.collection.insertOne(nuevoUsuario);
    res.send(resultado)
    
}


// Actualizar password y/o tipoUsuario de un usuario 
const actualizarUser = async (req, res) => {
    const usuario = req.params.usuario;
    const { passwordUsuario, tipoUsuario } = req.body;
    try {
      const datosUser = await modelo.collection.findByIdAndUpdate(
        usuario,
        {
          $set: {
            passwordUsuario: passwordUsuario || undefined,
            tipoUsuario: tipoUsuario || undefined,
          }
        },
        { new: true } 
      );
      console.log(datosUser)
      if (!datosUser) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json(datosUser);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: error.message });
    }
  };
  
  




module.exports={traerUsers,cargarUser,traerTipo,actualizarUser}