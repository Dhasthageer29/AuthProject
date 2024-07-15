const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontoller');

router.get('/', userController.renderIndex);
router.post('/register', userController.register);
router.get('/login', userController.renderLogin);
router.post('/login', userController.login);
router.get('/delete', userController.renderDelete);
router.post('/delete', userController.deleteUser);

module.exports = router;
