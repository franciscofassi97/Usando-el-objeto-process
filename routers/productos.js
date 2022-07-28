const express = require('express');
const router = express.Router();
const { formProductos } = require('../controllers/productosController');
const { estaAutenticado } = require('../middleware');


router.get('/', estaAutenticado, formProductos);

module.exports = router;