var express = require('express');
var router = express.Router();
var helpers = require("../helpers/tea");

router.route('/')
 .get(helpers.getTeas)
 .post(helpers.createTea)
 
router.route('/:id')
  .get(helpers.getTea)
  .put(helpers.updateTea)
  .delete(helpers.deleteTea)
  


module.exports = router;