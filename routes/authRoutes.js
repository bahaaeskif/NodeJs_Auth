const { Router } = require('express');



const authController = require('../controllers/authController');

const router = Router();

router.get('/signup', authController.signup_get);
router.post('/api/v1/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/api/v1/login', authController.login_post);

module.exports = router;
