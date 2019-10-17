var express = require('express');
var router = express.Router();
var IndexControoler=require('../controller/index_controller')

/* GET home page. */
router.get('/',IndexControoler.create);

module.exports = router;