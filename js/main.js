$(document).ready(function(){

    $('.main-menu .arrow').click(function(){
        $(this).parent().toggleClass('act');
        $(this).next().slideToggle();
    });

    $('.mm-btn').click(function () {
        $('.main-nav').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.mm-close').click(function () {
            $('.main-nav').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
/*
    $(document).on('click', "html", function(e) {
        if (!$(e.target).closest(".main-nav.open").length) {
            $(".main-nav.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });

 */

    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        fade:true,
    });


    $(".select li span").click(function(){
        $(this).parents(".dropdown").find('.dropdown-toggle').html($(this).text());
        $(this).parents(".dropdown").find('.dropdown-toggle').val($(this).data('value'));
    });


});


