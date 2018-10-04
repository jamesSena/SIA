var express = require('express');
var consign = require ('consign');
var app = express();
var bodyParser = require('body-parser')
var expressValidator = require('express-validator');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

app.set('view engine', 'ejs');
app.set('views', './app/views')
app.use(express.static('./app/public'));
//Carregar as routas
consign()
    .include('app/routes') //Adiciona as rotas
    .then('dao') //Adicona os bancos
    .then('app/models')//Carregar o DB connection
    .then('app/controllers')
    .into(app);

module.exports =app;