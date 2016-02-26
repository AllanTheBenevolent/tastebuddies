var data = require('../recipes.json');
var mainBud = require("../mainbuddy.json");

/*
 * GET recipes page.
 */

exports.recipesPage = function(req, res){
  res.render('recipes', {allchicken:data["recipes"], mainbuddy:mainBud.mainbuddy});
};
