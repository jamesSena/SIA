var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './app/views')

module.exports =app;