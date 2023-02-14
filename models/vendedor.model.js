const mongoose=require("mongoose");


const vendedor=mongoose.Schema({

    id_vendedor: {

        type: Number,
        unique:true
    },
    nombre: String,
    apellidos: String,
    fechana: Date,
    genero: String,
    nombre_tienda: String,
    telefono: Number,
    created_at:Date

})

module.exports=mongoose.model("vendedor",vendedor);
