$(document).ready(function () {
    // Nav Toggler
    $('.nav-toggler').click(function () {
        $(this).toggleClass('mobile_active');
        $('.sidebar').toggleClass('mobile_active');
        $('.fixed_content').toggleClass('nav_active');

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
            const theme = $(this).attr('theme_name');
            let theme_name = theme.toUpperCase();

            // color variable
            let primary = "#ec1839";
            let scroll_bg = "#ffd7dd";


            if (theme_name === "DEFAULT") {
                primary = "#ec1839";
                scroll_bg = "#ffd7dd";
            } else if (theme_name === "BLUE") {
                primary = "#0646d2";
                scroll_bg = "#bdd2ff";
            } else if (theme_name === "GREEN") {
                primary = "#39a47b";
                scroll_bg = "#c4e0d5";
            } else if (theme_name === "PINK") {
                primary = "#f618b4";
                scroll_bg = "#ffd7f3";
            } else if (theme_name === "ORANGE") {
                primary = "#ff3b19";
                scroll_bg = "#ffd9d2";
            }

            $(':root').css({
                '--skin-color': primary,
                '--scrollbar-bg': scroll_bg
            });


        });
    });


    // Remove Active Fixed Cmponents To Scroll
    $('.main-content').scroll(function () {
        if ($('.theme_color_wraper').hasClass('active')) {
            $('.theme_color_wraper').removeClass('active');
            $('.theme_changer_toggler').removeClass('active');
        }

        if ($('.sidebar').hasClass('mobile_active')) {
            $('.nav-toggler').removeClass('mobile_active');
            $('.sidebar').removeClass('mobile_active');
            $('.fixed_content').removeClass('nav_active');
        }
    });
});


// Theme Function
function setTheme(theme) {
    /*
       default = #ec1839
       blue =  #0646d2
       green = #39a47b
       pink = #f618b4
       orange = #ff3b19
   */

}