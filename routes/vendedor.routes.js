const express=require("express");
const vendedorController=require("../controller/vendedor.controller")

const api=express.Router();

api.post("/vendedor",vendedorController.createvendedor);
api.get("/vendeddor",vendedorController.getvendedor);
api.delete("/vendedor:id",vendedorController.deletevendedor);
api.put("vendedor",vendedorController.updatevendedor);


module.exports=api;