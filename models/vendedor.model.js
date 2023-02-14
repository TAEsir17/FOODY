const mongoose=require("mongoose");


const vendedor=moongoose.Schema({

    nombre: String,
    apellidos: String,
    telefono: {
        type:Number,
        unique:true
    }, 
    created_at:Date.now();

})

module.exports=mongoose.model("vendedor",vendedor);