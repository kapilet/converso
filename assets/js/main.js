(function () {
    'use strict';
    
    // :: Loading
    $(window).on('load', function () {
        $('.loading').fadeOut();
    });
    
    // :: Scroll Smooth To Go Section
    $('.move-section').on('click', function (e) {
        e.preventDefault();
        var anchorLink = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchorLink.attr('href')).offset().top + 1
        }, 1000);
    });
    
    $(function() {
        $('.pageDown').on('click', function(e) {
            /* debugger */
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 150
            }, 500, 'linear');
        });
    });

    // :: Add Class Active For ('.nav-bar')
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 350) {
            $('.nav-bar').addClass('active');
        } else {
            $('.nav-bar').removeClass('active');
        }
    });
    
    // :: Varables Navbar
    $( document ).ready(function() {        
        $(document).on('click','.open-nav-bar', function (e) {
            var $navbarMenu = $('#open-nav-bar-menu');
            var $menuLink = $('.open-nav-bar');            
            e.preventDefault();
            $($menuLink).toggleClass('active');
            $($navbarMenu).toggleClass('active');
        });
        // :: Add Class Active For $menuTriggerLink
        $(document).on('click','.has-menu > .toggle-btn', function (e) {
            //var $menuTriggerLink = $('.has-menu > .toggle-btn');
            e.preventDefault();
            var $this = $(this);
            $this.toggleClass('active').next('ul').toggleClass('active');
        });
    });
    $(function(){
        $("#nav-placeholder").load("nav.html");
        $("#footer-placeholder").load("footer.html");
    });    
    
    // :: Add Class Active On Go To Header
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.scroll-up').addClass('active');
        } else {
            $('.scroll-up').removeClass('active');
        }
    });
    
    // :: OWL Carousel Js Header Hero
    $('.header-owl').owlCarousel({
        loop: true,
        nav:true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });
    // :: OWL Carousel Js Testimonial
    $('.owl-testimonial').owlCarousel({
        loop: true,
        nav:true,        
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 3,
                margin: 70,
            }
        }
    });
    // :: OWL Carousel Js Blogs
    $('.owl-blogs').owlCarousel({
        loop: true,
        nav:true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
        responsive: {
            0: {
                items: 1,
                nav:false,
                dots:false,
            },
            768: {
                items: 2,
                dots:false,
            },
            991: {
                items: 3,
                margin: 20,
            }
        }
    });

    $('.owl-partner').owlCarousel({
        loop: true,
        nav:true,
        dots:true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
        responsive: {
            0: {
                items: 2,
                nav:false,
                dots:false,
                margin: 10,
            },
            768: {
                items: 3,
                dots:false,
                margin: 10,
            },
            991: {
                items: 5,
                margin: 30,
            }
        }
    });

        //function onScrollAnimations() {
            $('.wp-1').waypoint(function() {
                $('.wp-1').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-2').waypoint(function() {
                $('.wp-2').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-3').waypoint(function() {
                $('.wp-3').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-4').waypoint(function() {
                $('.wp-4').addClass('animated fadeIn');
            }, {offset: '75%'});

            $('.wp-5').waypoint(function() {
                $('.wp-5').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-6').waypoint(function() {
                $('.wp-6').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-7').waypoint(function() {
                $('.wp-7').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-8').waypoint(function() {
                $('.wp-8').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-9').waypoint(function() {
                $('.wp-9').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-10').waypoint(function() {
                $('.wp-10').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-11').waypoint(function() {
                $('.wp-11').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-12').waypoint(function() {
                $('.wp-12').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-13').waypoint(function() {
                $('.wp-13').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-14').waypoint(function() {
                $('.wp-14').addClass('animated fadeInUp');
            }, {offset: '75%'});

            $('.wp-15').waypoint(function() {
                $('.wp-15').addClass('animated fadeInUp');
            }, {offset: '60%'});

            $('.wp-16').waypoint(function() {
                $('.wp-16').addClass('animated fadeInUp');
            }, {offset: '60%'});

            $('.wp-17').waypoint(function() {
                $('.wp-17').addClass('animated fadeInUp');
            }, {offset: '60%'});

            $('.wp-18').waypoint(function() {
                $('.wp-18').addClass('animated fadeInUp');
            }, {offset: '60%'});

            $('.wp-19').waypoint(function() {
                $('.wp-19').addClass('animated fadeIn');
            }, {offset: '75%'});
            $(document).ready(function () {
                $(window).on('resize',function(){
                    var win = $(window);
                    if(win.width() <= 991){
                        $(document).find('.wp').removeClass('wp wp-1 wp-2 wp-3 wp-4 wp-5 wp-7 wp-6 wp-8 wp-9 wp-10 wp-11 wp-12 wp-13 wp-14 wp-15 wp-16 wp-17 wp-18 wp-19');
                        waypoint.destroyAll();
                    }else{
                        Waypoint.refreshAll()
                    }                    
                });
                jQuery(window).trigger('resize');
            });
            
        //}
            /*============================================
            Refresh waypoints function
            ==============================================*/
            /* function waypointsRefresh(){
                setTimeout(function(){
                    $.waypoints('refresh');
                },1000);
            }
            $(window).load(function(){
                waypointsRefresh();
            })  */            
            $('.modal-backdrop').remove();
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })

            //////////////////////////////////////////////////////////////
            
}());