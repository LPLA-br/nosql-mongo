const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORTA = 80;
const rota = require('../routes/tudo.js');

app.use( bodyParser.json );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( '/', rota );

module.exports = { app, PORTA };
