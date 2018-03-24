	 jQuery(function ($) {
	'use strict';

	jQuery(document).ready(function ($) {
		parallaxEffect();

	$(window).on("load resize", function () {
        $('#loader-overlay').fadeOut('slow', function () {
            $(this).remove();
        });
	});


	/* ===== Fixed Footer ===== */

	var $window = $(window);

	$('<div class="footer-height"></div>').insertAfter('#footer-fixed');

	$window.on('resize', function() {
        $('.footer-height').css('height', $('#footer-fixed').height());
      })
      .trigger('resize');

	  if ($('#footer-fixed').length) {

    }

    /* ===== COUNTERS ===== */

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

	/* ===== COUNTDOWN ===== */


	if ($('.countdown').length > 0) {
        $(".countdown").countdown({
            date: "10 dec 2018 12:00:00",
            format: "on"
        });

	}

	/* ===== PROGRESS BAR ===== */

	$(window).scroll(function() {
		progress_bars();
	});

	function progress_bars() {
		$(".progress .progress-bar:in-viewport").each(function() {
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				$(this).width($(this).attr("data-width") + "%");
			}

		});
	}

	$('.progress-ring').waypoint(function () {
        var totalProgress, progress, circles;
        circles = document.querySelectorAll('.progress-svg');
            for(var i = 0; i < circles.length; i++) {
                totalProgress = circles[i].querySelector('circle').getAttribute('stroke-dasharray');
                progress = circles[i].parentElement.getAttribute('data-circle-percent');
                circles[i].querySelector('.bar').style['stroke-dashoffset'] = totalProgress * progress / 100;
            }
    }, { offset: '100%', triggerOnce: true });



	/* ===== One page Scroller ===== */

	$('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

	/* ===== Parallax Effect===== */

	function parallaxEffect() {
    	$('.parallax-effect').parallax();
	}


    /* ===== Flex & Owl Sliders ===== */


	/* ~~~ Home Slider ~~~ */
    $('.slider-bg').flexslider({
        mode: 'fade',
        auto: true,
        controlNav: true,
        keyboard: true,
    });

	/* ~~~ Widget Slider ~~~ */
    $('.slider-bg-static').flexslider({
        mode: 'fade',
        auto: true,
        controlNav: true,
        keyboard: true
    });

	/* ~~~ Product Slider ~~~ */
    $('.product-slider').flexslider({
        mode: 'fade',
        slideshow: false,
        controlNav: 'thumbnails',
        keyboard: true,
		directionNav: false
    });

	/* ~~~ Team Slider ~~~ */
    $(".team-slider").owlCarousel({
		items : 1,
	    singleItem	: true,
		pagination : false,
		autoPlay:3000,
		stopOnHover:true,
		navigation:false,
		transitionStyle : "fadeUp",
	});


	/* ~~~ Testimonials Slider ~~~ */
	$(".testimonial").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		centerPadding: '0'
      });

	/* ~~~ Client Slider ~~~ */
	$("#client-slider").owlCarousel({
		items : 6,
		itemsDesktop : [1199,6],
	    itemsDesktopSmall : [980,5],
	    itemsTablet: [768,4],
	    itemsMobile : [479,1],
		responsiveRefreshRate:0,
		pagination : false,
		loop:true,
		autoPlay:3000,
		stopOnHover:true
	});

	/* ~~~ Blog Slider ~~~ */
    $(".blog-slider").owlCarousel({
		items : 3,
	    itemsDesktop : [1199,4],
	    itemsDesktopSmall : [980,3],
	    itemsTablet: [768,2],
	    itemsMobile : [479,1],
		loop:true,
		responsiveRefreshRate:0,
		autoPlay:3000,
		stopOnHover:true
	});


	/* ~~~ Blog Slider ~~~ */
    $(".blog-grid-slider").owlCarousel({
		items : 1,
		singleItem	: true,
		pagination : false,
		autoPlay:3000,
		stopOnHover:true,
		navigation:true,
		transitionStyle : "fadeUp",
	 	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});

	/* ~~~ Porfolio Slider ~~~ */
    $(".portfolio-slider").owlCarousel({
		items : 1,
		singleItem	: true,
		pagination : true,
		autoPlay:3000,
		stopOnHover:true,
		navigation:true,
		transitionStyle : "fadeUp",
	 	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});

	/* ~~~ Porfolio Slider ~~~ */
    $(".resume-slider").owlCarousel({
		items : 2,
		itemsDesktop : [1199,2],
	    itemsDesktopSmall : [980,2],
	    itemsTablet: [768,1],
	    itemsMobile : [479,1],
		pagination : true,
		loop:true,
		responsiveRefreshRate:0,
		autoPlay:3000,
		stopOnHover:true
	});


	/* ~~~ Owl Slider ~~~ */
    $(".owl-slider").owlCarousel({
		items : 1,
		singleItem	: true,
		pagination : false,
		autoPlay:3000,
		stopOnHover:true,
		navigation:true,
		transitionStyle : "fadeUp",
	 	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});


    /* ===== Go to Top ===== */

    if ($('#back-to-top').length) {
        var scrollTrigger = 100,
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /* ===== Parallax Stellar ===== */


    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    jQuery(window).stellar({
        horizontalScrolling: false,
        hideDistantElements: true,
        verticalScrolling: !isMobile.any(),
        scrollProperty: 'scroll',
        responsive: true
    });


	/* ===== Animate Text ===== */

    if ($('.rotate').length > 0) {
        $(".rotate").textrotator({
            animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: "|", //  You can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 3000 // How many milliseconds until the next word show.
        });
    }

	/* ===== Search Overlay ===== */

	  var wHeight = window.innerHeight;
	  //search bar middle alignment
	  $('#fullscreen-searchform').css('top', wHeight / 2);
	  //reform search bar
	  jQuery(window).resize(function() {
		wHeight = window.innerHeight;
		$('#fullscreen-searchform').css('top', wHeight / 2);
	  });
	  // Search
	  $('#search-button').on('click', function () {
	 	$("div.fullscreen-search-overlay").addClass("fullscreen-search-overlay-show");
	  });
	  $('a.fullscreen-close').on('click', function () {
		$("div.fullscreen-search-overlay").removeClass("fullscreen-search-overlay-show");
	  });


    /* ===== Fullscreen Video ===== */

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });


    function scaleVideoContainer() {
        var height = $(window).height() + 5;
        var unitHeight = parseInt(height, 10) + 'px';
        $('.homepage-hero-module').css('height', unitHeight);

    }

    function initBannerVideoSize(element) {
        $(element).each(function () {
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });

        scaleBannerVideoSize(element);

    }

    function scaleBannerVideoSize(element) {
        var windowWidth = $(window).width(),
                windowHeight = $(window).height() + 5,
                videoWidth,
                videoHeight;

        $(element).each(function () {
            var videoAspectRatio = $(this).data('height') / $(this).data('width');

            $(this).width(windowWidth);

            if (windowWidth < 1000) {
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px'});

                $(this).width(videoWidth).height(videoHeight);
            }

            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });
    }


    /* ===== SKILLS BAR ===== */

	 $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
			},6000);
	});

    /* ===== CONTACT FORM ===== */

	$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            var url = "assets/php/contact.php";
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = data.class;
                    var messageText = data.message;

                    var alertBox = '<div class="' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
});

    /* ===== CBP PORTFOLIO ===== */
	 $(window).load(function(){

	 /* ~~~ Blog Masonry ~~~ */
		if ($('#blogMasonry').length > 0) {

			$('#blogMasonry').masonry({
			   //options
			  itemSelector: '.blog-masonry-item',
			});
		}

	/* ~~~ Portfolio Masonry ~~~ */
		if ($('#portfolioMasonry').length > 0) {

			$('#portfolioMasonry').masonry({
			   //options
			  itemSelector: '.portfolio-masonry-item',
		   });
	   }


		if ($('#portfolio-grid').length > 0) {
			/* initialize shuffle plugin */
			var $grid = $('#portfolio-grid');

			$grid.shuffle({
				itemSelector: '.portfolio-item' // the selector for the items in the grid
			});

			/* reshuffle when user clicks a filter item */
			$('#portfolio-filter li').on('click', function (e) {
				e.preventDefault();

				// set active class
				$('#portfolio-filter li').removeClass('active');
				$(this).addClass('active');

				// get group name from clicked item
				var groupName = $(this).attr('data-group');

				// reshuffle grid
				$grid.shuffle('shuffle', groupName );
			});
		}

		var wow = new WOW({
				offset: 100,
				mobile: false
			  }
			);
			wow.init();

		});


	/* === magnificPopup === */

		$('.alpha-lightbox').magnificPopup({
			type: 'image',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			fixedContentPos: false
			// other options
		});

		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

	});

	/* ===== GOOGLE MAPS  ===== */
	    if ($('#myMap').length > 0) {
        //set your google maps parameters
        var $latitude = 40.716304, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
            $longitude = -73.995763,
            $map_zoom = 16 /* ZOOM SETTING */

        //google map custom marker icon
        var $marker_url = 'assets/images/pin.png';

        //we define here the style of the map
        var style =
            [
		  {
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#f5f5f5"
			  }
			]
		  },
		  {
			"elementType": "labels.icon",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#616161"
			  }
			]
		  },
		  {
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#f5f5f5"
			  }
			]
		  },
		  {
			"featureType": "administrative.country",
			"elementType": "geometry.fill",
			"stylers": [
			  {
				"color": "#1ec0ff"
			  }
			]
		  },
		  {
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#bdbdbd"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#eeeeee"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#e5e5e5"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#ffffff"
			  }
			]
		  },
		  {
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#dadada"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#616161"
			  }
			]
		  },
		  {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  },
		  {
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#e5e5e5"
			  }
			]
		  },
		  {
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#eeeeee"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#c9c9c9"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  }
		];

        //set google map options
        var map_options = {
            center: new google.maps.LatLng($latitude, $longitude),
            zoom: $map_zoom,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style
        }
        //inizialize the map
        var map = new google.maps.Map(document.getElementById('myMap'), map_options);
        //add a custom marker to the map
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng($latitude, $longitude),
            map: map,
            visible: true,
            icon: $marker_url
        });

        var contentString = '<div id="mapcontent">' + '<p>Alpha Dot</p></div>';
        var infowindow = new google.maps.InfoWindow({
            maxWidth: 320,
            content: contentString
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });

    }

	if ($('#myMapTwo').length > 0) {
        //set your google maps parameters
        var $latitude = 40.716304, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
            $longitude = -73.995763,
            $map_zoom = 16 /* ZOOM SETTING */

        //google map custom marker icon
        var $marker_url = 'assets/images/pin.png';

        //we define here the style of the map
        var style =
            [
		  {
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#f5f5f5"
			  }
			]
		  },
		  {
			"elementType": "labels.icon",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#616161"
			  }
			]
		  },
		  {
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#f5f5f5"
			  }
			]
		  },
		  {
			"featureType": "administrative.country",
			"elementType": "geometry.fill",
			"stylers": [
			  {
				"color": "#1ec0ff"
			  }
			]
		  },
		  {
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#bdbdbd"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#eeeeee"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#e5e5e5"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#ffffff"
			  }
			]
		  },
		  {
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#dadada"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#616161"
			  }
			]
		  },
		  {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  },
		  {
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#e5e5e5"
			  }
			]
		  },
		  {
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#eeeeee"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#c9c9c9"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  }
		];

        //set google map options
        var map_options = {
            center: new google.maps.LatLng($latitude, $longitude),
            zoom: $map_zoom,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style
        }
        //inizialize the map
        var map = new google.maps.Map(document.getElementById('myMapTwo'), map_options);
        //add a custom marker to the map
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng($latitude, $longitude),
            map: map,
            visible: true,
            icon: $marker_url
        });


        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });

    }


	 });

/*End Jquery*/
