var mongoose = require('mongoose');

//  var mongoURI = "mongodb://localhost:27017/digital-App-1";

 var mongoURI = "mongodb://raja:raja1234@ds261096.mlab.com:61096/mapapp";
 var mongoatlasurl="mongodb+srv://raja:raja1234@cluster0-r8bqn.mongodb.net/test?retryWrites=true&w=majority"

// var mongoURI = "mongodb://localhost:27017/digital-App-2";


mongoose.Promise = global.Promise;
mongoose.connect(mongoatlasurl,{useNewUrlParser:true,useUnifiedTopology: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connection open");
});
exports.db = db;