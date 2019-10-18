var Cords=require('../model/cordinated_model');

exports.create=function(req,res,next){
    var data=req.body;
    console.log(data);
    // res.send(data);
    var cord=new Cords({
        cc:data
    })
    cord.save(function(err,result){
        if(!err && result){
            res.send(result)
        }else{
            console.log(err)
        }
    })
    
}

exports.getAllCordinate=function(req,res,next){
    Cords.find(function(err,result){
        if(!err && result){
            res.send(result)
        }else{
            res.send(err)
        } 
    })
}