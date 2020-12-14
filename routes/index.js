const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { current: 'home' });
});

/* GET Products page. */
router.get('/products', (req, res, next) => {
  res.render('products', { current: 'products' });
});

/* GET Product page. */
router.get('/product', (req, res, next) => {
  res.render('product', { current: 'products' });
});

/* GET About page. */
router.get('/aboutus', (req, res, next) => {
  res.render('aboutus', { current: 'aboutus' });
});

/* GET Contact us page. */
router.get('/contactus', (req, res, next) => {
  res.render('contactus', { current: 'contactus' });
});

module.exports = router;
