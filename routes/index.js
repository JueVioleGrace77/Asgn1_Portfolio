let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/projects', indexController.displayProductPage);

/* GET services page. */
router.get('/services', indexController.displayServicePage);

/* GET credential page. */
router.get('/credential', indexController.displayCredential);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);


module.exports = router;
