const vendedor=require("../models/vendedor.model");

async function createvendedor(req,res){ 

const vendedor=new Alumnos(req.body);
console.log(req.body);

},

async function updatevendedor(req,res){

    console.log("Actualizacion de vendedor");

}

async function deletevendedor(req,res){

    console.log("Eliminar vendedor");

}

async function getvendedor(req,res){

    console.log("Obtener Vendedores");

}

module.exports={

    createvendedor,
    updatevendedor,
    deletevendedor,
    getvendedor


}