/**
 * Created by Vincent on 25/08/2015.
 */
var Product = require("../models/product.js");

module.exports = function(req, res) {

    var id = req.query.productId;
    Product.findById(id).exec(function(err, product){
        if (err)
        {
            return res.send(err);
        }

        if (!product)
        {
            return res.send("No Product");
        }
        return res.send(product);
    });
};