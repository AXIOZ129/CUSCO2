const express = require('express');
const router = express.Router();
const datosController = require('../controllers/datos.controller');
const authController = require('../controllers/auth.controller');


router.get('/', datosController.getDatos);
router.post('/', datosController.addDatos);
router.put('/:limite', datosController.updateDatos);
router.delete('/:id', datosController.deleteDatos);
router.post('/signin', authController.signIn);
//router.put('/:id', datosController.updateLimite);
module.exports = router;