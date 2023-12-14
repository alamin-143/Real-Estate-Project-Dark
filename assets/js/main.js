
    $(document).ready(function () {


      // property slider active
        $('.propert__type--slide').owlCarousel({
            loop:true,
            margin:0,
            responsiveClass:true,
            nav:false,
            dots: true,
            dotsEach: 3,
            autoplay: true,
            smartSpeed: 1000,
            responsive:{
                0: {
                    items:2
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1200:{
                    items:5,
                    loop:false
                }
            }
        });


        // testimonial active
        $('.testimonial__area--wrapper').owlCarousel({
            loop:true,
            margin:24,
            responsiveClass:true,
            nav:false,
            dots: true,
            dotsEach: 3,
            stagePadding: 0,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                }
            }
        });


         // blog active
         $('.blog__area--wrapper').owlCarousel({
            loop:true,
            margin:24,
            responsiveClass:true,
            nav: true,
            dots: false,
            smartSpeed: 1000,
            stagePadding: 0,
            navText: ['<i class="far fa-long-arrow-alt-left"></i>', '<i class="far fa-long-arrow-alt-right"></i>'],
            responsive:{
                0:{
                    items:1,
                },
                786:{
                    items:2,
                    margin:15,
                },
                992:{
                    items:3,
                }
            }
        });


        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });


    }); //---document-ready-----
