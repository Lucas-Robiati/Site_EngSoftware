/* Abir servidor apenas com node
var http = require('http');
http.createServer(function(req, res){
    res.end("Ola");
}).listen(8081);
console.log("Servidor rodando");*/

const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/blog", function(req, res){
    res.send("Bem vindo!");
});

app.get('/ola/:cargo/:nome', function(req, res){
    res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h2> Seu cargo e "+req.params.cargo+"</h2>");
});

app.listen(8081, function(){
    console.log("Servidor rodando")
}) //sempre tem que ser a ultima linha sem ";"
//rota caminho para aplicacao