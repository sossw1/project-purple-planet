// Requiring path to so we can use relative routes to our HTML files
// let path = require('path');

// Requiring our custom middleware for checking if a user is logged in
let isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function(app) {

  app.get('/', function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect('home');
    }
    res.render('index');
  });

  app.get('/signup', function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect('home');
    }
    res.render('signup');
  });

  app.get('/login', function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect('/home');
    }
    res.render('login');
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get('/home', isAuthenticated, function(req, res) {
    let member = req.user;

    res.render('home', member);
  });

};
