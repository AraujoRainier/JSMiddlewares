const express = require('express');
const server = express();
const bodyParser = require("body-parser");

server.listen(3000,function(){
    console.log('Servidor iniciado...');
});

function middlewarePrueba(req,res,next){
    console.log("Middleware de prueba");
    next();
}

function middlewareUnaRuta(req,res,next){
    console.log("Middleware para solo 1 ruta");
    next();
}

function middlewarePrueba2(req,res,next){
    console.log("Middleware de prueba 2");
    next();
}

server.use(middlewarePrueba,middlewarePrueba2,bodyParser.json());

server.get('/contacto',function(req,res){
    res.json("Modulo de contacto");
});

server.get('/inicio',middlewareUnaRuta,function(req,res){
    res.json("Modulo principal");
});

server.post('/registro',middlewareUnaRuta,function(req,res){
    res.json(req.body);
    //es necesario el header content type
});
