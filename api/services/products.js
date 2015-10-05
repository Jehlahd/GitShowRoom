/**
 * Created by Vincent on 25/08/2015.
 */
var Product = require("../models/product.js");

module.exports = function(req, res) {

    Product.find(function(err, products){
        if (err)
        {
            return res.send(err);
        }

        if (!products)
        {
            return res.send("No products");
        }
        return res.send(products);
    });
};