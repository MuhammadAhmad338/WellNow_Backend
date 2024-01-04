const express = require('express');
const medicalRouter = express.Router();
const { get_medical, post_medical } = require('../Controller/medicalController');

medicalRouter.post('/post_medical', post_medical);
medicalRouter.get('/get_medical', get_medical);

module.exports = medicalRouter;

