var data = require("../userItems.json");
var mainBud = require("../mainbuddy.json");

/*
 * GET cook page.
 */

exports.completionPage = function(req, res){
  res.render('completion', {mainbuddy:mainBud.mainbuddy});
};
