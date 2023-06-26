const mongoose = require('mongoose');

const nota =
{
	titulo: String,
	corpo: String
};

const notasEsquema = new mongoose.Schema( nota );
const Notas = mongoose.model( 'Notas' , notasEsquema );

module.exports = { Notas };
