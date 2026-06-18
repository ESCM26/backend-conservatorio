const express = require('express');
const router = express.Router();
const controller = require('../controllers/clasesController');

router.get('/', controller.getClases);
router.post('/', controller.createClase);

module.exports = router;// JavaScript Document