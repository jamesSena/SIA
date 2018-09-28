var express = require('express');
var consign = require ('consign');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', './app/views')

//Carregar as routas
consign()
    .include('app/routes') //Adiciona as rotas
    .then('dao') //Adicona os bancos
    .then('app/models')//Carregar o DB connection
    .into(app);

module.exports =app;