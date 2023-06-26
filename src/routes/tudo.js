const express = require('express');
const router = express.router;
const mongoose = require('mongoose');

const Cr = require('../controllers/cr');
const De = require('../controllers/de');

router.post( '/criar', Cr.criar );
router.post( '/deletar', De.deletar );
router.post( '/visualizar', Cr.visualizar ); 
router.post( '/editar', De.editar );

module.exports = { router };
