$('a.bookmark').click(clickBookmark);

var count = 0;

function clickBookmark(e){
    count +=1;
    if(count == 1){
	   $(this).find('img').attr('src', 'img/bookmark-after.png');
    }
    else if(count == 2){
        $(this).find('img').attr('src', 'img/bookmark-before.png');
        count = 0;
    }
}


/*
    //code never reaches this area because field becomes empty very quickly :(
    count += 1;
    if(count == 1){
        $('img.speechbubble').attr("src", "img/yumhomepage.png");
        $('img.submit').attr("src", "img/submit.png");
        $('a#submit').unbind('click', false);
        $('a#submit').removeAttr('class');
    }
    else if(count == 2){
        count = 0;
        $('img.speechbubble').attr("src", "img/defaulthomepage.png");
        $('img.submit').attr("src", "img/submit.png");
        $('a#submit').unbind('click', false);*/