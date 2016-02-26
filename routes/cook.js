var data = require("../userItems.json");
var mainBud = require("../mainbuddy.json");

/*
 * GET cook page.
 */

exports.cookPage = function(req, res){
  res.render('cook', {userItems:data["items"], mainbuddy:mainBud.mainbuddy});
};