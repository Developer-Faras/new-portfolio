$(document).ready(function () {
    // Nav Toggler
    $('.nav-toggler').click(function () {
        $(this).toggleClass('mobile_active');
        $('.sidebar').toggleClass('mobile_active');

    });


    // Navigation
    $('.navigation li a').click(function (e) {
        e.preventDefault();

        $(this).addClass('active').parent('li').siblings().children('a').removeClass('active');
    });



});
