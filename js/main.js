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

    $(document).on('click', "html", function(e) {
        if (!$(e.target).closest(".main-nav.open").length) {
            $(".main-nav.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });

    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        fade:true,
    });
/*


    $('.main-menu .arrow').click(function(){
        $(this).parent().toggleClass('act');
        $(this).next().slideToggle();
    });



    $('.product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-slider__nav',
    });
    $('.product-slider__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slider',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0
    });


    $('.sidebar-menu .arrow').click(function(){
       $(this).next().slideToggle();
       $(this).parent().toggleClass('active');
    });


*/


});


