function on() {
    document.getElementById("feedback").style.display = "block";
}

function off() {
    document.getElementById("feedback").style.display = "none";
}

function play() {
    var audio = document.getElementById('audio1');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 1
    }
}
function titou() {
    var audio = document.getElementById('audio2');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 1
    }
}
function scar() {
    var audio = document.getElementById('audio3');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 1
    }
}

$( function() {
    $( ".fenetrecp" ).draggable();
} );
$( function() {
    $( ".fenetrecp2" ).draggable();
} );
$( function() {
    $( ".fenetrecp3" ).draggable();
} );
$( function() {
    $( ".fenetrecp4" ).draggable();
} );
$( function() {
    $( ".documents" ).draggable();
} );

$( function() {
    $( "#site" ).draggable();
} );

$( function() {
    $( ".setup" ).draggable();
} );

$( function() {
    $( ".notepad" ).draggable();
} );

$( function() {
    $( ".shutdown" ).draggable();
} );

$( function() {
    $( ".achievement" ).draggable();
} );



function yolo(id) {

    var divelement = document.getElementById(id);

    if(divelement.style.display == 'none')
        divelement.style.display = 'block';
    else
        divelement.style.display = 'none';
}
function yulu(id) {

    var divelement = document.getElementById(id);

    if(divelement.style.display == 'block')
        divelement.style.display = 'none';
    else
        divelement.style.display = 'block';
}
function smj(id) {

    var divelement = document.getElementById(id);

    if(divelement.style.display == 'none')
        divelement.style.display = 'block';
    else
        divelement.style.display = 'none';
}
function ouais(id){

    var divelement = document.getElementById(id);

    if(divelement.style.display == 'none')
        divelement.style.display = 'block';
    else
        divelement.style.display = 'none';
}
function prout(id){

    var divelement = document.getElementById(id);

    if(divelement.style.display == 'none')
        divelement.style.display = 'block';
    else
        divelement.style.display = 'none';
}
function ouep(id){

    var divelement = document.getElementById(id);

    if(divelement.style.display == 'none')
        divelement.style.display = 'block';
    else
        divelement.style.display = 'none';
}
function popo(id){

    var divelement = document.getElementById(id);

    if(divelement.style.display == 'none')
        divelement.style.display = 'block';
    else
        divelement.style.display = 'none';
}


$('#slideshow > *:first').addClass('active');

$('#slideshowContainer #next').click(function(e) {
    e.preventDefault();

    $('#slideshow > .active').fadeOut('slow');

    var index = $('#slideshow > *.active').index();

    if(index === $('#slideshow > *').size() -1) {
        index = -1;
    }

    $('#slideshow > .active').removeClass('active');

    var nextSlide = $('#slideshow > *').get(index + 1);  
    $(nextSlide).addClass('active');

    $('#slideshow > .active').fadeIn('slow');
});

$('#slideshowContainer #prev').click(function(e) {
    e.preventDefault();

    $('#slideshow .active').fadeOut('slow');

    var index = $('#slideshow img.active').index();

    if(index === 0) {
        index = $('#slideshow img').size();
    }

    $('#slideshow .active').removeClass('active');

    var prevSlide = $('#slideshow img').get(index - 1);  
    $(prevSlide).addClass('active');

    $('#slideshow .active').fadeIn('slow');
});




function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ":" + m;
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();


function showDiv() {
    document.getElementById('terminal').style.display = "block";

    document.getElementById('beta_1').style.display = "none";

    document.getElementById('show_more').style.display = "none";
}
