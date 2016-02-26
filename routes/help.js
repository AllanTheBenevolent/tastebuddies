var mainBud = require("../mainbuddy.json");
/*
 * GET help page.
 */

exports.helpPage = function(req, res){
  res.render('help', {mainbuddy:mainBud.mainbuddy});
};
