var express = require('express');
var router = express.Router();
var IndexControoler=require('../controller/index_controller')

/* GET home page. */
router.post('/create',IndexControoler.create);

router.get('/all',IndexControoler.getAllCordinate);

module.exports = router;