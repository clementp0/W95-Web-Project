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
function showone(id) {

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
function showthree(id){

    var divelement = document.getElementById(id);

    if(divelement.style.display == 'none')
        divelement.style.display = 'block';
    else
        divelement.style.display = 'none';
}
function showtwo(id){

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


$('#slideshowone > *:first').addClass('active');

$('#slideshowoneContainer #next').click(function(e) {
    e.preventDefault();

    $('#slideshowone > .active').fadeOut('slow');

    var index = $('#slideshowone > *.active').index();

    if(index === $('#slideshowone > *').size() -1) {
        index = -1;
    }

    $('#slideshowone > .active').removeClass('active');

    var nextSlide = $('#slideshowone > *').get(index + 1);  
    $(nextSlide).addClass('active');

    $('#slideshowone > .active').fadeIn('slow');
});

$('#slideshowoneContainer #prev').click(function(e) {
    e.preventDefault();

    $('#slideshowone .active').fadeOut('slow');

    var index = $('#slideshowone img.active').index();

    if(index === 0) {
        index = $('#slideshowone img').size();
    }

    $('#slideshowone .active').removeClass('active');

    var prevSlide = $('#slideshowone img').get(index - 1);  
    $(prevSlide).addClass('active');

    $('#slideshowone .active').fadeIn('slow');
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


function showoneDiv() {
    document.getElementById('terminal').style.display = "block";

    document.getElementById('beta_1').style.display = "none";

    document.getElementById('show_more').style.display = "none";
}




$(document).ready(function(){

    $(document).on('mousemove',function(e){
        var parentOffset = $('.error-main').offset();
        var iCount=$('.clone').length;
        var amount=$('#amountTo').val()-1;
        var pStyle={'top':e.pageY -10,'left':e.pageX - (448/2)};
        var cStyle={'top':e.pageY -10,'left':e.pageX - (448/2),'z-index':2};
        $('.error-main').css(pStyle);

        var gg=$('.error-main').clone().removeClass('error-main').addClass('clone');
        $(gg).appendTo('body').css(cStyle);
        $('#amount').html(iCount);
        $('.clone').each(function(i, elee){
            if(iCount>amount){
                $(elee).remove();
            }

            iCount--;
        });
    });
    $('#chords')[0].play();

});

function justNumbers(e)
{
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;

    return /\d/.test(String.fromCharCode(keynum));
}


function virus(){
    document.getElementById('error-message').style.display = 'block';
}
function bsod(){
    window.location.replace("#restart");
    document.getElementById('bsod').style.display = 'block';
    setTimeout(location.reload.bind(location), 6000);
}
function restart(){
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('screen').style.display = 'block';
    document.getElementById('bsod').style.display = 'none';
}

function redirect(){
     window.location.replace("#restart");
}