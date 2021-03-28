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
  res.render('index', { title: 'Our Projects', page: 'projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Our Services', page: 'services' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Us', page: 'contact' });
});

/* GET Login page. */
router.get('/login', function(req, res, next) 
{
  res.render('index', { title: 'Login', page: 'login' });
});

/* GET Register page. */
router.get('/register', function(req, res, next) 
{
  res.render('index', { title: 'Register', page: 'register' });
});


/***************************| TEMPORARY ROUTING |***********************************/

/* GET Contact List page. */
router.get('/contact-list', function(req, res, next) 
{
  res.render('index', { title: 'Contact List', page: 'contact-list' });
});

/* GET Edit page. */
router.get('/edit', function(req, res, next) 
{
  res.render('index', { title: 'Add', page: 'add' });
});

/* GET Register page. */
router.get('/edit/:id', function(req, res, next) 
{
  let id = req.params.id;
  res.render('index', { title: 'Edit', page: 'edit' });
});

module.exports = router;
