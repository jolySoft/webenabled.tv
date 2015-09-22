var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/arc', function(request, response, next){
  response.render('arc');
});

router.get('/stratmed', function(request, response, next){
  response.render('stratmed');
});

router.get('/bento', function(request, response, next){
  response.render('bento');
});

router.get('/siseditor', function(request, response, next){
  response.render('siseditor');
});

router.get('/website', function(request, response, next) {
  response.render('website');
});

router.get('/nodetracker', function(request, response, next){
  response.render('nodetracker');
});

module.exports = router;
