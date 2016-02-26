var data = require("../chickensandwich.json")

/*
 * GET chickensandwichrecipe page.
 */

exports.chickensandwichPage = function(req, res){
  res.render('chickensandwich', {chickensandwichrecipe:data["chickensandwiching"]});
};
