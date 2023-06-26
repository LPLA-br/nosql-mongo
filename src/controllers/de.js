const express = require('express');
const mongoose = require('mongoose');

const { uri } = require('../configs/mongo');
const { Notas } = require('../models/schemas');

const deletar = ( req, res, next )=>
{
	const { titulo } = req.body;

	mongoose.connect( uri );
	Notas.deleteOne( { titulo: titulo } )
	mongoose.disconnect();

	res.send('<h1> deleção </h1>');

};

const editar = ( req, res, next )=>
{
	const { titulo, corpo } = req.body;

	mongoose.connect( uri ).catch( (reason)=>{console.log(reason)} );
	Notas.find( { titulo: titulo }, { $set: { corpo: corpo } });
	mongoose.disconnect();
};

module.exports = { editar, deletar };
