var data = require('../completed.json');

/*
 * GET chickensandwichrecipe page.
 */

exports.completedPage = function(req, res){
  res.render('completed', {completedrecipes:data["recipes"]});
};

exports.completedAction = function (req, res) {
	var recipe = req.body; // { 'mainbuddy': link }
	
	var dupe = false;
    data.recipes.map(function (obj) {
        if (obj.name === recipe.name)
            dupe = true;
    });
    
    if (!dupe)
		data.recipes.push(recipe);
};