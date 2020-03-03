const express = require('express');
const multer = require('multer');
const productController = require('./controllers/productControllers');
// const authCheckAccessMiddleware = require('../middleware/auth-access-middleware');

const router = express.Router();

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         var fileFormat = (file.originalname).split(".");
//         cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1]);

//     }
// // });
// const upload = multer({ storage: storage });
// authCheckAccessMiddleware
// upload.single('productImage')

router.post('/addProduct', productController.addProductAttempt);
router.post('/deleteProduct/:id', productController.deleteProduct);
router.get('/allProducts', productController.getAllProductAttempt);
router.get('/:productId', productController.getProductAttempt);
router.get('/searchProduct/:name', productController.searchProductAttempt);
router.post(
  '/searchProductViaCatagory',
  productController.searchViaCatagoryAttempt
);

module.exports = router;
