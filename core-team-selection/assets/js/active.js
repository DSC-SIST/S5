// Index of jQuery Active Code

// :: 1.0 PRELOADER ACTIVE CODE
// :: 2.0 STICKY HEADER ACTIVE CODE
// :: 3.0 SCROLL TO TOP ACTIVE CODE
// :: 4.0 SCROLL LINK ACTIVE CODE
// :: 5.0 SMOOTH SCROLLING ACTIVE CODE
// :: 6.0 AOS ACTIVE CODE
// :: 7.0 TOOLTIP ACTIVE CODE
// :: 8.0 PREVENT DEFAULT ACTIVE CODE
// :: 9.0 BRANDING SLIDER ACTIVE CODE
// :: 10.0 TESTIMONIALS ACTIVE CODE
// :: 11.0 TEAM SLIDER ACTIVE CODE
// :: 12.0 APP SCREENSHOTS ACTIVE CODE
// :: 13.0 WORK SLIDER ACTIVE CODE
// :: 14.0 LOGIN SLIDER ACTIVE CODE
// :: 15.0 COUNTDOWN ACTIVE CODE
// :: 16.0 COUNTERUP ACTIVE CODE
// :: 17.0 JARALLAX ACTIVE CODE
// :: 18.0 FANCYBOX IMAGE GALLERY
// :: 19.0 CONTACT FORM ACTIVE CODE

(function ($) {
    'use strict';

    var $window = $(window);
    var zero = 0;

    // :: 1.0 PRELOADER ACTIVE CODE
    $window.on('load', function () {
        $('#loader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 STICKY HEADER ACTIVE CODE
    $window.on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.main-header-area').addClass('navbar-sticky');
        } else {
            $('.main-header-area').removeClass('navbar-sticky');
        }
    });

    $window.on('scroll', function () {
        $('.navbar-sticky').toggleClass('hide', $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
    })

    // :: 3.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });

    // :: 4.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');

    // SCROLLSPY ACTIVE CODE
    $('body').scrollspy({
        target: '#appo-header'
    });

    // :: 5.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // :: 6.0 AOS ACTIVE CODE
    AOS.init();

    // :: 7.0 TOOLTIP ACTIVE CODE
    $('[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'top',
        container: 'body'
    });

    // :: 8.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 9.0 BRANDING SLIDER ACTIVE CODE
    $('.branding-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });

    // :: 10.0 TESTIMONIALS ACTIVE CODE
    var testimonialSlider = $('.testimonials');
    testimonialSlider.owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 500,
        autoplay: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            }
        }
    });

    testimonialSlider.on("translate.owl.carousel", function () {
        $(".single-testimonial img, .single-testimonial-thumb img, .client-rating").removeClass("animated zoomIn").css("opacity", "0");
    });
    testimonialSlider.on("translated.owl.carousel", function () {
        $(".single-testimonial img, .single-testimonial-thumb img, .client-rating").addClass("animated zoomIn").css("opacity", "1");
    });
    $('.thumb-next').on('click', function () {
        testimonialSlider.trigger('next.owl.carousel', [300]);
        return false;
    });
    $('.thumb-prev').on('click', function () {
        testimonialSlider.trigger('prev.owl.carousel', [300]);
        return false;
    });

    // :: 11.0 TEAM SLIDER ACTIVE CODE
    $('.team-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    // :: 12.0 APP SCREENSHOTS ACTIVE CODE
    $('.app-screenshots').slick({
        dots: true,
        arrows: false,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
          ]
    });

    // :: 13.0 WORK SLIDER ACTIVE CODE
    $('.work-slider.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        dotsContainer: '.work-content'
    });

    // :: 14.0 LOGIN SLIDER ACTIVE CODE
    $('.login-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // :: 16.0 COUNTERUP ACTIVE CODE
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // :: 17.0 JARALLAX ACTIVE CODE
    $('.jarallax').jarallax({
        speed: 0.2
    });

    // :: 18.0 FANCYBOX IMAGE GALLERY
    $('[data-fancybox="images"]').fancybox({
        afterLoad: function (instance, current) {
            var pixelRatio = window.devicePixelRatio || 1;

            if (pixelRatio > 1.5) {
                current.width = current.width / pixelRatio;
                current.height = current.height / pixelRatio;
            }
        }
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });

    // :: 19.0 CONTACT FORM ACTIVE CODE
    // Get the form.
    var form = $('#contact-form');
    // Get the messages div.
    var formMessages = $('.form-message');
    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        // Serialize the form data.
        var formData = $(form).serialize();
        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });

}(jQuery));