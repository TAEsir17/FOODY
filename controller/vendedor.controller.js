const vendedor=require("../models/vendedor.model");

function createvendedor(req,res){
const vendedor=new vendedor(req.body);

vendedor.save((error, vendedorStored)=>{
    if(error){
        res.status(400).send({msg: "Error al guardar los datos"})
    }else{
        res.status(200).send(vendedorStored)
    }
})

}

function getvendedores(req,res){
    vendedor.find((error, vendedoresStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(vendedoresStored)
        }
    })
}


function deletevendedor(req,res){
    const {id}=req.params;

    vendedor.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el alumno"})
        }else{
            res.status(200).send({msg: "Alumno eliminado"})
        }
    })
}

function updatevendedor(req,res){
    const {id}=req.params;
    const datosvendedor=req.body;
 
    vendedor.findByIdAndUpdate({_id:id},datosvendedor, (error)=>{
     if(error){
         res.status(400).send({msg: "Datos no actualizados"})
     }else{
         res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
     }
    })
 }

 async function getvendedor(req,res){
    console.log("Obtener los alumnos");
}



module.exports={

    createvendedor,
    updatevendedor,
    deletevendedor,
    getvendedor,
    getvendedores


}