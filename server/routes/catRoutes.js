const express = require('express');
const { getCatFact } = require('../controllers/catController');

const router = express.Router();

router.get('/fact', getCatFact);

module.exports = router;
