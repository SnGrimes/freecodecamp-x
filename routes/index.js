var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Free Code Camp Dallas | Learn To Code' });
});
/* GET job board. */
router.get('/jobs', function(req, res) {
     res.render('jobs', { title: 'Free Code Camp Dallas | Learn To Code' });
});

module.exports = router;
