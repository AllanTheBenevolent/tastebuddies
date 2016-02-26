$('button.bookmark').click(function(){
	console.log($('h1').text());
	console.log($('img.recipes').attr("src"));
	console.log($(this).attr("formaction"));
	var name = $('h1').text();
	var img = $('img.recipes').attr("src");
	var url = $(this).attr("formaction");
	var send = {
		"name": name,
		"img": img,
		"url": url
	}
	console.log(send);

	$.post('/bookmarked', send , function (res) {});


});