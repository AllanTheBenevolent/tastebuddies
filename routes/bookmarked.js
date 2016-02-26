var data = require('../bookmarked.json');

/*
 * GET chickensandwichrecipe page.
 */

exports.bookmarkedPage = function(req, res){
  res.render('bookmarked', {bookmarkedrecipes:data["recipes"]});
};

exports.bookmarkedAction = function (req, res) {
	var recipe = req.body; // { 'mainbuddy': link }
	data.recipes.push(recipe);
};