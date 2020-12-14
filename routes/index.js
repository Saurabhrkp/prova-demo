const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET About page. */
router.get('/about', (req, res, next) => {
  res.render('aboutus');
});

/* GET Contact us page. */
router.get('/contactus', (req, res, next) => {
  res.render('contactus');
});

module.exports = router;
