var data = require("../users.json");
var mainBud = require("../mainbuddy.json");

/*
 * GET profile page.
 */

exports.profilePage = function(req, res){
  res.render('profile', {currentuser:data["users"], mainbuddy:mainBud.mainbuddy});
};
