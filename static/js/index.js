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

$("#itens-site.row .col").hover(  
    function() {
        var imagem = $(this).find("img");
        imagem.css("opacity", "0.5");
        var titulo = $(this).find("h4");
        titulo.css("display", "block");

    }, function() {
        var imagem = $(this).find("img");
        imagem.css("opacity", "1");
        var titulo = $(this).find("h4");
        titulo.css("display", "none");
    }
);


