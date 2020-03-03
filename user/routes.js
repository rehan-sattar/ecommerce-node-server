const express = require('express');
const router = express.Router();

const controller = require('./controllers/userControllers');

router.post('/signUp', controller.signUpAttempt);
router.post('/signIn', controller.signInAttempt);
router.post('/addToFavorite', controller.addToFavoriteAttempt);
router.post('/getAllFavoritProducts', controller.getAllFavoritProducts);
router.post('/delete/:id', controller.deleteUserAttempt);
router.get('/getAllUsers', controller.getAllUsers);

module.exports = router;
