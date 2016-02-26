var data = require("../friedchicken.json")

/*
 * GET chickensandwichrecipe page.
 */

exports.friedchickenPage = function(req, res){
  res.render('friedchicken', {friedchickenrecipe:data["friedchickening"]});
};
