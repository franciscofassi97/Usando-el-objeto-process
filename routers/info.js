const express = require('express');
const router = express.Router();
const { recuperarInfo } = require('../controllers/infoController');


router.get('/', recuperarInfo);

module.exports = router;