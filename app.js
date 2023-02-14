    const express=require("express");
    const cors=require("cors");
    const bodyParser=require("body-parser");

    const app=express();

    //importaciones de las rutas de la aplicacion
    const vendedorRoutes=require("./routes/vendedor.routes");
    const { 
        API_VERSION 
    } = require("./constants");

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(cors());

    //configuracion de las rutas
    app.use(`/api/${API_VERSION}`,vendedorRoutes);
    module.exports=app;

