$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown();

    $(window).scroll(function(){
        if($(window).scrollTop() > 0) {
            $('nav').css('background-color', 'black');
        } else {
            $('nav').css('background-color', 'rgba(0, 0, 0, 0.3)');
        }
    });

    if($(window).scrollTop() > 0) {
        $('nav').css('background-color', 'black');
    } else {
        $('nav').css('background-color', 'rgba(0, 0, 0, 0.3)');
    }
});