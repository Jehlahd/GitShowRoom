/**
 * Created by Vincent on 25/08/2015.
 */
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    title: String,
    price: String,
    desc: String
});

module.exports = mongoose.model('Product', ProductSchema);