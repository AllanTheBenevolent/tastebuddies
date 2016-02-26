$(document).ready(function() {
	initializePage();
})

function initializePage() {
    $('#addBtn').submit(checkRecipeList);
}

function checkRecipeList(e) {
    console.log("Checking recipe list!");
}

//$('input.solid').click(clickAdd); // remove if you want to use the above code

//function clickAdd(e){   
    // To Disable Submit Button By Default
    
    /*if( jQuery.isEmptyObject(data) == true ){
        document.getElementById("item").style.display = "none";
        $('button.submit').prop('disabled', true);
    }
    else{
        $('button.submit').prop('disabled', false);
        return;
    }*/
//}

$("li#item").on("click", function(){
    $(this).css('display','none');
});