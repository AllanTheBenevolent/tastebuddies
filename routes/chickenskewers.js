var data = require("../chickenskewers.json")

/*
 * GET chickensandwichrecipe page.
 */

exports.chickenskewersPage = function(req, res){
  res.render('chickenskewers', {chickenskewersrecipe:data["chickenskewersing"]});
};
