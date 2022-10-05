$(document).ready(function () {
    // Nav Toggler
    $('.nav-toggler').click(function () {
        $(this).toggleClass('mobile_active');
        $('.sidebar').toggleClass('mobile_active');
        $('.fixed_content').toggleClass('nav_active')

    });


    // Navigation
    $('.navigation li a').click(function (e) {
        e.preventDefault();

        $(this).addClass('active').parent('li').siblings().children('a').removeClass('active');
    });


    // Theme Changer
    $('.theme_changer_toggler').click(function (e) {
        e.preventDefault();

        $(this).toggleClass('active');
        $('.theme_color_wraper').toggleClass('active');
    });

    // Theme Color Changer
    $('.theme_color').each(function () {
        $(this).click(function () {
            console.log('color')
        });
    });

});
