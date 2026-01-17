var express = require('express');
//const { act } = require('react');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    name: 'John Doe',
    activityPage: 'index' 
  });
});
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About',
    name: 'John Doe',
    activityPage: 'about' 
  });
});
router.get('/services', function(req, res, next) {
  res.render('services', { 
    title: 'Services',
    name: 'John Doe',
    activityPage: 'services' 
  });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact',
    name: 'John Doe',
    activityPage: 'contact' 
  });
});

module.exports = router;
