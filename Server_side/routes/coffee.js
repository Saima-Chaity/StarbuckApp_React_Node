var express = require('express');
var router = express.Router();
var Coffee = require("../models/coffee");
var helpers = require("../helpers/coffee");
var parseString = require ("xml2js");
var request = require ("request-promise");



router.route('/')
 .get(helpers.getCoffees)
 .post(helpers.createCoffee)
 
router.route('/:id')
  .get(helpers.getCoffee)
  .put(helpers.updateCoffee)
  .delete(helpers.deleteCoffee)
  


module.exports = router;