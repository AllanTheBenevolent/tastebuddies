var data = require("../users.json");
var mainBud = require("../mainbuddy.json");

/*
 * GET editProfile page.
 */

exports.editProfilePage = function(req, res){
  res.render('editProfile', {currentuser:data["users"], mainbuddy:mainBud.mainbuddy});
};
