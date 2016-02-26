$('img').click(function() {
	$('img').removeClass('active');
    $(this).toggleClass("active");
});

$('a.tastebuddy').click(function(){
	console.log($(this).find('img').attr("src"));
	var img = $(this).find('img').attr("src");
	var send = {
		"mainbuddy": img
	}

	$.post('/tastebuddies', send , function (res) {});


});

/*
$('a.tastebuddy').click(mainbuddy);

var data = $.getJSON("../../mainbuddy.json", function() {
	console.log("success");
});

function mainbuddy(e) {
	e.preventDefault();
	data.push({
		"name": "$(this).text()"
	});
}
*/

//$('a.tastebuddy').click(nameClick);

function nameClick(e) {
    e.preventDefault();
 	var friendName = dubMainBuddy($(this).find('p#tastebuddy').text());
    $(this).find('p#tastebuddy').text(friendName);   
}

function dubMainBuddy(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Pandacake") {
		return "Main Buddy";
	} 
	else if (name == "Bearger") {
		return "Main Buddy";
	}
	else if (name == "Eggy") {
		return "Main Buddy";
	}
    else if (name == "PanPan") {
		return "Main Buddy";
	}
    else if (name == "Locked") {
        return "Locked";
    }
}