var data = require("../userItems.json");

exports.addItem = function(req, res){
    console.log(req.body);
    var newItem = {
        "name": req.body.itemName
    }
    
    console.log("Posting to addItem");
    console.log(data.items.indexOf(newItem));
    console.log(data.items);
    
    var dupe = false;
    data.items.map(function (obj) {
        if (obj.name === newItem.name)
            dupe = true;
    });
    
    if (!dupe)
        data["items"].unshift(newItem);
    res.redirect('/cook');
};

exports.deleteItem = function (req, res) {
    console.log(req.body.item);
    var newItems = []
    data.items.map(function (obj) {
        if (obj.name === req.body.item)
            return;
        newItems.push(obj);
    });
    
    data.items = newItems;
    
    console.log(data.items);
    
};
