/**
 * Created by Vincent on 22/08/2015.
 */
var Article = require("../models/article.js");

module.exports = function(req, res) {

    Article.find(function(err, articles){
        if (err)
        {
            return res.send(err);
        }

        if (!articles)
        {
            return res.send("No article");
        }
        return res.send(articles);
    });
};