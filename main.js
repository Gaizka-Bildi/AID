
// center bloc

//  rotation
var min = -20;
var max = 20
var random = Math.random() * (max - min) + min;
console.log(random);

$('.bestline').css('transform', 'rotate(' + random + 'deg)');

// bg colour
var colormin = 1;
var colormax = 4;
var colorrandom = Math.random() * (colormax - colormin) + colormin;
var colorRound = Math.round(colorrandom)
console.log(colorRound);


if (colorRound == 1) {
    var bgColor = "#E30071";
} else if (colorRound == 2) {
    var bgColor = "#B23EEC";
} else if (colorRound == 3) {
    var bgColor = "#00CC99";
} else {
    var bgColor = "#FFD300";
};


$('.bestline').css('background-color', bgColor);


// logo block


//  rotation
var min = -20;
var max = 20

console.log(random);
$('.logo').each( function() {
    var random = Math.random() * (max - min) + min;
    $(this).css('transform', 'rotate(' + random + 'deg)');
});

// color
var colormin = 0.5;
var colormax = 4.5;

$('.logo').each( function() {
    var colorrandom = Math.random() * (colormax - colormin) + colormin;
    var colorRound = Math.round(colorrandom);
    if (colorRound == 1) {
        var bgColor = "#E30071";
    } else if (colorRound == 2) {
        var bgColor = "#B23EEC";
    } else if (colorRound == 3) {
        var bgColor = "#00CC99";
    } else {
        var bgColor = "#FFD300";
    };
    $(this).css('background-color', bgColor);
});

// position
var xmin = -20;
var xmax = 120;
var ymin = -20;
var ymax = 120;

$('.logo-block').each( function() {
    var positionX = Math.random() * (xmax - xmin) + xmin;
    var positionY = Math.random() * (ymax - ymin) + ymin;
    $(this).css('left', positionX + '%');
    $(this).css('top', positionY + '%');

});

// VIDEO 1

var xmin = 10;
var xmax = 90;
var ymin = 20;
var ymax = 80;


    var positionX = Math.random() * (xmax - xmin) + xmin;
    var positionY = Math.random() * (ymax - ymin) + ymin;
    $('.media-01').css('left', positionX + '%');
    $('.media-01').css('top', positionY + '%');



// VIDEO 2

var xmin = 10;
var xmax = 90;
var ymin = 20;
var ymax = 80;

var positionX = Math.random() * (xmax - xmin) + xmin;
var positionY = Math.random() * (ymax - ymin) + ymin;
$('.media-02').css('left', positionX + '%');
$('.media-02').css('top', positionY + '%');

//  rotation
var min = -20;
var max = 20

console.log(random);
$('video').each( function() {
    var random = Math.random() * (max - min) + min;
    $(this).css('transform', 'translate(-50%,-50%) rotate(' + random + 'deg)');
});

// video varibale
var minVideo = 0.5;
var maxVideo = 6.5;
var videoNum = Math.random() * (maxVideo - minVideo) + minVideo;
var videoRound = Math.round(videoNum);
console.log(videoRound);

$("#video").attr('src', 'img/'+ videoRound + '.mp4');




