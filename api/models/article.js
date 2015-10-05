/**
 * Created by Vincent on 22/08/2015.
 */
var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    title: String,
    m_desc: String,
    desc: String
});

module.exports = mongoose.model('Article', ArticleSchema);