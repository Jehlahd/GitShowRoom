/**
 * Created by Vincent on 23/08/2015.
 */
var Article = require("../models/article.js");

exports.article = function(req, res) {

    var id = req.query.articleId;
    Article.findById(id).exec(function(err, article){
        if (err)
        {
            return res.send(err);
        }

        if (!article)
        {
            return res.send("No article");
        }
        return res.send(article);
    });
};

exports.delete = function(req, res) {
    var id = req.query.articleId;
    Article.findByIdAndRemove(id).exec(function(err){
        if (err)
        {
            console.log(err);
            return res.status(403).send(err);
        }

        return res.status(200).send({message:"success"});
    });
};

exports.update = function(req, res){
    var article = req.body;
console.log("test: " + article.id);
    Article.findByIdAndUpdate(article.id, article, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("succesfully updated");
    });
};

exports.createArticle = function(req, res){
    var article = req.body;

    var searchArticle = {title: article.title};
    Article.findOne(searchArticle, function(err, found) {
        if (err) {
            return res.send(err);
        }

        if (found) {
            return res.status(403).send({message: "Article already exists"});
        }


        var newArticle = new Article({
            title: article.title,
            m_desc: article.desc,
            desc: article.body
        });
        newArticle.save(function (err) {
            res.send(newArticle);
        })
    });
};