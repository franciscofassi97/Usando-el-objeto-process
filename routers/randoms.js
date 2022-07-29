const express = require('express');
const router = express.Router();
const { randoms } = require('../controllers/randomsController');


router.get('/', randoms);

module.exports = router;