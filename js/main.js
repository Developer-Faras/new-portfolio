$(document).ready(function () {
    // Nav Toggler
    $('.nav-toggler').click(function () {
        $(this).toggleClass('mobile_active');
        $('.sidebar').toggleClass('mobile_active');
        $('.fixed_content').toggleClass('nav_active');
        $('.mobile_menu_overlay').toggleClass('nav_active');
    });


    // Navigation
    $('.navigation li a').click(function (e) {
        e.preventDefault();

        // Nav Active Class
        $(this).addClass('active').parent('li').siblings().children('a').removeClass('active');

        // Section Toggle 
        let target = $(this).attr('href');
        let animation = [''];

        $(`section${target}`).each(function () {
            $(this).removeClass('hidden').addClass('animated').siblings('section').addClass('hidden').removeClass('animated');
        });
    });


    // Theme Changer Toggle
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
            let primary = "#0646d2";
            let scroll_bg = "#bdd2ff";


            if (theme_name === "DEFAULT") {
                primary = "#0646d2";
                scroll_bg = "#bdd2ff";
            } else if (theme_name === "RED") {
                primary = "#ec1839";
                scroll_bg = "#ffd7dd";
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

    // Dark Mode Toggler
    let dark_mode = false;

    $(".mode_changer").click(function (e) {
        e.preventDefault();
        $(this).children('i').toggleClass('fa-moon fa-sun');
        $('body').toggleClass('dark_mode_active');



        let bg_900 = "#f2f2fc",
            bg_100 = "#fdf9ff",
            bg_50 = "#e8dfec",
            text_900 = "#302c4d",
            text_700 = "#504e70";

        if (dark_mode) {
            dark_mode = false;

            bg_900 = "#f2f2fc";
            bg_100 = "#fdf9ff";
            bg_50 = "#e8dfec";
            text_900 = "#302c4d";
            text_700 = "#504e70";
        } else {
            dark_mode = true

            bg_900 = "#151515";
            bg_100 = "#222222";
            bg_50 = "#393939";
            text_900 = "#ffffff";
            text_700 = "#e9e9e9";
        }

        $(':root').css({
            '--bg-900': bg_900,
            '--bg-100': bg_100,
            '--bg-50': bg_50,
            '--text-900': text_900,
            '--text-700': text_700
        });

    });

    // Contact Class Toggle
    $('input, textarea').each(function (e) {
        $(this).keyup(function () {
            let value = $(this).val();

            if (value !== '') {
                $(this).parent('.input-box').addClass('active');
            } else {
                $(this).parent('.input-box').removeClass('active');
            }
        });
    });

    $('a').click(function (e) {
        e.preventDefault();

        console.log("Clicked An Anchor");
    });

});

// Testimonials  Slider
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    loop: true,
    speed: 300,
    coverflowEffect: {
        rotate: 70,
        stretch: 3,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        100: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        900: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    },
    // autoplay: {
    //     delay: 2000,
    // },
});