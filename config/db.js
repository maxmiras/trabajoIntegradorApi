const mongoose=require("mongoose");

const host="127.0.0.1:27017";
const database='BaseLubri';

const main=async()=>{
    await  mongoose.connect(`mongodb://${host}/${database}`);
}

main().then(()=>{
    console.log("conexion exitosa a db mongo")
})
.catch((error)=>{
    console.log(error)
})