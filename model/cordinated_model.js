var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CordSchema = new Schema({
   lang:{type:String},
   lot:{type:String}
   
});

module.exports = mongoose.model('Cord', CordSchema);