$('a.right').click(clickRight);
$('a.left').click(clickLeft);

var rightCount = 0;
var leftCount = 0;

function clickRight(e) {
    rightCount +=1;
    
    if(rightCount == 1){
         $('img.speechbubble').attr('src', 'img/help.buddystep2.png')
    }
    else if(rightCount == 2){
         $('img.speechbubble').attr('src', 'img/help.buddystep3.png')
    }
}

function clickLeft(e) {
    leftCount +=1;
    if(leftCount == 1){
         $('img.speechbubble').attr('src', 'img/help.buddystep2.png')
    }
    else if(leftCount == 2){
         $('img.speechbubble').attr('src', 'img/help.buddystep1.png')
    }
}
   
