const express = require('express');
const router = express.Router();
const passwordController= require('../controllers/password.controller');

//passwordcontroller
router.get('/', passwordController.getPassword);
router.post('/', passwordController.addPassword);
router.put('/:id', passwordController.updatePassword);
router.delete('/:id', passwordController.deletePassword);
router.post('/:id', passwordController.signIn);

module.exports = router;