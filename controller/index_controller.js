var Cords=require('../model/cordinated_model');

exports.create=function(req,res,next){
    var data=req.body.first;
    var data2=req.body.second;
    // console.log(data);
    // console.log(data2)

    
    var cord=new Cords({
        cc:data,
        zone:data2.zonename
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