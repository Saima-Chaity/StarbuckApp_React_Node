var express = require('express');
var router = express.Router();
var Bakery = require("../models/bakery");
var helpers = require("../helpers/bakery");
var parseString = require ("xml2js");
var request = require ("request-promise");



router.route('/')
 .get(helpers.getBakerys)
 .post(helpers.createBakery)
 
router.route('/:id')
  .get(helpers.getBakery)
  .put(helpers.updateBakery)
  .delete(helpers.deleteBakery)
  


module.exports = router;