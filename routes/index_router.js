var express = require('express');
var router = express.Router();
var IndexControoler=require('../controller/index_controller')

/* GET home page. */
router.post('/create',IndexControoler.create);

router.get('/all',IndexControoler.getAllCordinate);

router.post('/test',function(req,res){
    console.log(req.body)
});

module.exports = router;