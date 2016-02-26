var data = require("../userItems.json");

exports.addItem = function(req, res){
    console.log(req.body);
    var newItem = {
        "name": req.body.itemName
    }
    
    console.log("Posting to addItem");
    data["items"].unshift(newItem);
    res.redirect('/cook');
};
