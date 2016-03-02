var data = require("../userItems.json");
var mainBud = require("../mainbuddy.json");

/*
 * GET cook page.
 */

exports.cookPage = function(req, res){
  var model =  { userItems:data["items"], mainbuddy:mainBud.mainbuddy};
  model.itemsAreNotEmpty = data.items.length !== 0;
  res.render('cook', model);
};