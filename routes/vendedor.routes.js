const express=require("express");
const vendedorController=require("../controller/vendedor.controller")

const api=express.Router();

api.post("/vendedor",vendedorController.createvendedor);
api.get("/vendedores",vendedorController.getvendedores);
api.delete("/vendedor:id",vendedorController.deletevendedor);
api.patch("/vendedor:id",vendedorController.updatevendedor);
api.get("/vendedor/:id",vendedorController.getvendedor);



module.exports=api;