var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CordSchema = new Schema({
   cc:{type:mongoose.Schema.Types.Mixed},
   zone:{type:mongoose.Schema.Types.String}
   
   
});

module.exports = mongoose.model('Cord', CordSchema);