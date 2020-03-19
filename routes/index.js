var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Oscar Rodríguez' });
});

router.get('/plantilla', function(req, res, next) {
  res.render('plantilla');
});

module.exports = router;
