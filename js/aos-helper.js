(function ($) {
    "use strict";
    $.fn.scrollAnimation = function (customConfig) {

        let config = $.extend({
            deaclare: $('[scroll_animation]'),
            animateClass: 'animeted',
            ofset: 150,
            mirror: false,
        }, customConfig);

        let { deaclare, animateClass, ofset, mirror } = config;

        $(this).scroll(function () {
            $(deaclare).each(function () {
                let animationName = $(this).attr('scroll_anim');
                let element_ofset = $(this).offset().top - $(window).height() + ofset;

                // Set Animation Name
                $(this).addClass(animationName);

                // Toggle Animated Class
                if (mirror == true) {
                    if (element_ofset <= 0) {
                        $(this).addClass(animateClass);
                    } else {
                        $(this).removeClass(animateClass);
                    }
                } else if (mirror == false) {
                    if (element_ofset <= 0) {
                        $(this).addClass(animateClass);
                    }
                }

            })
        })
    }

})(jQuery)
