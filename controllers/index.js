let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index')

module.exports.displayHomePage = (req, res, next ) => {
    res.render('index', { title: 'Home' });
  }

module.exports.displayAboutPage = (req, res, next ) => {
    res.render('index', { title: 'About' });
  }

module.exports.displayProductPage = (req, res, next ) => {
    res.render('index', { title: 'Projects' });
  }

module.exports.displayServicePage = (req, res, next ) => {
    res.render('index', { title: 'Services' });
  }

module.exports.displayCredential = (req, res, next ) => {
    res.render('index', {title: 'Credential'});
}

module.exports.displayContactPage = (req, res, next ) => {
    res.render('index', { title: 'Contact' });
  }
  