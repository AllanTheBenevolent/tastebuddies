var data = require('../tastebuddiesdata.json');
var mainBud = require('../mainbuddy.json');
/*
 * GET tastebuddies page.
 */

exports.tastebuddiesPage = function(req, res){
	res.render('tastebuddies', {alltastebuddies:data["alltastebuddies"]});
};

exports.selectBuddy = function (req, res) {
	var buddy = req.body.mainbuddy; // { 'mainbuddy': link }
	mainBud.mainbuddy = buddy;
};

/*
$('a.tastebuddy').click(mainbuddy);

function mainbuddy(e) {
	e.preventDefault();
	main.push({
		"name": $(this).text()
	});
}*/