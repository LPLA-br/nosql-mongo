const express = require('express');
const mongoose = require('mongoose');

const { uri } = require('../configs/mongo');
const { Notas } = require('../models/schemas');

const criar = ( req, res, next ) =>
{
	const { titulo, corpo } = req.body;
	const instancia = new Notas( { titulo: titulo, corpo: corpo });

	mongoose.connect( uri );
	instancia.save();
	mongoose.disconnect();

	res.send('<h1> criado </h1>');
};

const visualizar = ( req, res, next ) =>
{
	const { titulo } = req.body;

	mongoose.connect( uri );
	Notas.find( { titulo: titulo } );
	mongoose.disconnect();

	res.send( "<h1> visualizado <h1>" );
};

module.exports = { criar, visualizar };
