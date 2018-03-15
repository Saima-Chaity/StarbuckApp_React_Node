var express = require('express');
var router = express.Router();
var Tea = require("../models/tea");
var helpers = require("../helpers/tea");
var parseString = require ("xml2js");
var request = require ("request-promise");



router.route('/')
 .get(helpers.getTeas)
 .post(helpers.createTea)
 
router.route('/:id')
  .get(helpers.getTea)
  .put(helpers.updateTea)
  .delete(helpers.deleteTea)
  


module.exports = router;