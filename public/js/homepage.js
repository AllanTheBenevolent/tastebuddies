$(document).ready(function() {
	initializePage();
})

function initializePage() {
    $('#addBtn').submit(checkRecipeList);
}

function checkRecipeList(e) {
    console.log("Checking recipe list!");
}

$('li#item').on('click', function(){
    $(this).css('display','none');
    var item = $(this).text();
    item = item.slice(0, item.length - 2);
    $.post('/delete', {'item': item});
});

$('.submit-disabled').on('click', (function(){
    $('.speechbubble').attr('src', 'img/submit-oops.png').addClass("jello");
    $('.maintastebuddy').addClass("shake");
}));


$('#addBtn').click(function(){
    $('.speechbubble').attr('src', 'img/yumhomepage.png');
});