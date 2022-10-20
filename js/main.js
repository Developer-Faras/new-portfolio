// Loader
$(window).on('load', function () {
    setTimeout(function () {
        $('.loader').addClass('loaded');
    }, 1000);

    setTimeout(function () {
        $('.loader').remove();
    }, 1500);
});

// All Jquery Event
$(document).ready(function () {
    // Nav Toggler
    $('.nav-toggler').click(function () {
        $(this).toggleClass('mobile_active');
        $('.sidebar').toggleClass('mobile_active');
        $('.fixed_content').toggleClass('nav_active');
        $('.mobile_menu_overlay').toggleClass('nav_active');
    });


    // Navigation
    let curentAnimation = '';

    $('.navigation li a').click(function (e) {
        e.preventDefault();

        // Nav Active Class
        $(this).addClass('active').parent('li').siblings().children('a').removeClass('active');

        $('.nav-toggler').removeClass('mobile_active');
        $('.sidebar').removeClass('mobile_active');
        $('.fixed_content').removeClass('nav_active');
        $('.mobile_menu_overlay').removeClass('nav_active');


        // Section Toggle  With Animation
        let target = $(this).attr('href');
        let animationNumber = Math.floor(Math.random() * 26);


        let animationIn = ['animate__backInDown', 'animate__backInLeft', 'animate__backInRight', 'animate__backInUp', 'animate__bounceIn', 'animate__bounceInDown', 'animate__bounceInLeft', 'animate__bounceInRight', 'animate__bounceInUp', 'animate__fadeInDown', 'animate__fadeInDown', 'animate__fadeInRight', 'animate__fadeInUp', 'animate__fadeInTopLeft', 'animate__fadeInTopRight', 'animate__fadeInBottomLeft', 'animate__fadeInBottomLeft', 'animate__flipInX', 'animate__flipInY', 'animate__rotateIn', 'animate__rotateInDownLeft', 'animate__rotateInDownRight', 'animate__rotateInUpLeft', 'animate__rotateInUpRight', 'animate__rollIn', 'animate__zoomIn'];

        let animationOut = ['animate__backOutDown', 'animate__backOutLeft', 'animate__backOutRight', 'animate__backOutUp', 'animate__bounceOut', 'animate__bounceOutDown', 'animate__bounceOutLeft', 'animate__bounceOutRight', 'animate__bounceOutUp', 'animate__fadeOutDown', 'animate__fadeOutDown', 'animate__fadeOutRight', 'animate__fadeOutUp', 'animate__fadeOutTopLeft', 'animate__fadeOutTopRight', 'animate__fadeOutBottomLeft', 'animate__fadeOutBottomLeft', 'animate__flipOutX', 'animate__flipOutY', 'animate__rotateOut', 'animate__rotateOutDownLeft', 'animate__rotateOutDownRight', 'animate__rotateOutUpLeft', 'animate__rotateOutUpRight', 'animate__rollOut', 'animate__zoomOut'];


        $('.section.active').removeClass(curentAnimation).addClass(`animate__animated ${animationOut[animationNumber]}`);
        setTimeout(function () {
            $('.section.active').addClass('hidden').removeClass(`${animationOut[animationNumber]} active animate__animated`);
        }, 1000);


        setTimeout(function () {
            let newAnimation = animationIn[animationNumber];
            curentAnimation = newAnimation;

            $(`section${target}`).removeClass('hidden').addClass(`${newAnimation} animate__animated active`);

            $('.main-content').scrollTop(0);
        }, 1000);

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

    // Remove Active Fixed Main Content Click
    $('.main-content').click(function () {
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

    // Dummy Anchor
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


// // Components Animation
// AOS.init({
//     // Global settings:
//     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//     startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//     // initClassName: 'aos-init', // class applied after initialization
//     // animatedClassName: 'aos-animate', // class applied on animation
//     // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//     // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//     // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//     // throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


//     // // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//     // offset: 120, // offset (in px) from the original trigger point
//     // delay: 0, // values from 0 to 3000, with step 50ms
//     // duration: 800, // values from 0 to 3000, with step 50ms
//     easing: 'ease', // default easing for AOS animations
//     once: false, // whether animation should happen only once - while scrolling down
//     mirror: false, // whether elements should animate out while scrolling past them
//     // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
// });