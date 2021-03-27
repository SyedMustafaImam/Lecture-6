var express = require('express');
var router = express.Router();
var student_controller = require("../controllers/student.controller");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'Home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About us', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact us', menuId:'contact'});
});

router.get('/student', student_controller.list);

module.exports = router;
