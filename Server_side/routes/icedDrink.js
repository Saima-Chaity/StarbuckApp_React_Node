var express = require('express');
var router = express.Router();
var IcedDrink = require("../models/icedDrink");
var helpers = require("../helpers/icedDrink");
var parseString = require ("xml2js");
var request = require ("request-promise");



router.route('/')
 .get(helpers.getIcedDrinks)
 .post(helpers.createIcedDrink)
 
router.route('/:id')
  .get(helpers.getIcedDrink)
  .put(helpers.updateIcedDrink)
  .delete(helpers.deleteIcedDrink)
  


module.exports = router;