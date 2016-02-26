var data = require("../sundriedtomatochicken.json")

/*
 * GET chickensandwichrecipe page.
 */

exports.sundriedtomatochickenPage = function(req, res){
  res.render('sundriedtomatochicken', {sundriedtomatochickenrecipe:data["sundriedtomatochickening"]});
};
