import express = require('express');
let router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET Home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About Us', page: 'about' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Projects', page: 'projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Services', page: 'services' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact', page: 'contact' });
});

/* GET Login page. */
router.get('/login', function(req, res, next) 
{
  res.render('index', { title: 'Login', page: 'login' });
});

module.exports = router;
