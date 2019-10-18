 var inside = require('point-in-polygon');
var lat=26.859823;
var lng=75.762569;
var _=require('underscore')
var request = require('request');
request('http://localhost:8080/api/all', function (error, response, body) {
  var data=JSON.parse(body);

    for(var i=0;i<data.length;i++){
        var arr=[]
        var polygon=(data[i].cc);
        for(var j=0;j<polygon.length;j++){

            var arr1=[polygon[j].lat,polygon[j].lng];

          arr.push(arr1)
            
        }
            

        
        var check=inside([lat,lng],arr);
        if(check==true){
            console.log(data[i].zone,'  is the zone ')
        }
    }
    

});



