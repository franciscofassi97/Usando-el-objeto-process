const express = require('express');
const router = express.Router();
const { randoms } = require('../controllers/randomsController');


router.get('/:cantidad?', randoms);

module.exports = router;