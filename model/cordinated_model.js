var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CordSchema = new Schema({
   cc:{type:mongoose.Schema.Types.Mixed}
   
   
});

module.exports = mongoose.model('Cord', CordSchema);