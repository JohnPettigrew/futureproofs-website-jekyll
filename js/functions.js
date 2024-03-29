// Page loader
$(window).on("load", function() {
  "use strict";
  $(".loader").fadeOut(800);
  $('.side-menu').removeClass('opacity-0');
});


jQuery(function($) {
  "use strict";
  let $window = $(window);
  let body = $("body");
  let $root = $("html, body");

  // Back to Top
  let amountScrolled = 700;
  let backBtn = $("a.back-top");
  $window.on("scroll", function() {
    if ($window.scrollTop() > amountScrolled) {
      backBtn.addClass("back-top-visible");
    } else {
      backBtn.removeClass("back-top-visible");
    }
  });
  backBtn.on("click", function() {
    $root.animate({
      scrollTop: 0
    }, 700);
    return false;
  });

  // Smooth scroll
  $("a.pagescroll").on("click", function(event) {
    event.preventDefault();
    let action = $(this.hash).offset().top;
    if ($('body').hasClass('offset-nav'))
      action -= 70;
    if ($(this).hasClass('scrollupto'))
      action -= 65;
    $("html,body").animate({
      scrollTop: action
    }, 1200);
  });

  // Navbar menu position dynamically
  $(".dropdown").on("mouseenter", function() {
    let $elem = $(this).find('.dropdown-menu'),
      left = $elem.offset().left,
      width = $elem.width(),
      docW = $(window).width();

    if ((left + width) > docW) {
      $elem.addClass("right-show");
    } else if ((left + (width * 2)) < docW) {
      $elem.removeClass("right-show");
    }
  });

  // Sticky menu Fixed
  let headerHeight = $("header").outerHeight();
  $window.scroll(function() {
    let $scroll = $window.scrollTop();
    let $navbar = $(".static-nav");
    let nextSection = $(".section-nav-smooth");
    if ($scroll > 75) {
      $navbar.addClass("fixedmenu");
      nextSection.css("margin-top", headerHeight);
    } else {
      $navbar.removeClass("fixedmenu");
      nextSection.css("margin-top", 0);
    }
  });
  $(function() {
    if ($window.scrollTop() >= $(window).height()) {
      $(".static-nav").addClass('fixedmenu');
    }
  })

  // Menu onclick
  let sideMenuToggle = $("#sidemenu_toggle");
  let sideMenu = $(".side-menu");
  if (sideMenuToggle.length) {
    sideMenuToggle.on("click", function() {
      $("body").addClass("overflow-hidden");
      sideMenu.addClass("side-menu-active");
      $(function() {
        setTimeout(function() {
          $("#close_side_menu").fadeIn(300);
        }, 300);
      });
    });
    $("#close_side_menu , #btn_sideNavClose , .side-nav .nav-link.pagescroll").on("click", function() {
      $("body").removeClass("overflow-hidden");
      sideMenu.removeClass("side-menu-active");
      $("#close_side_menu").fadeOut(200);
      $(function() {
        setTimeout(function() {
          $('.sideNavPages').removeClass('show');
          $('.fas').removeClass('rotate-180');
        }, 400);
      });
    });
    $(document).keyup(function(e) {
      if (e.keyCode === 27) { // escape key maps to keycode `27`
        if (sideMenu.hasClass("side-menu-active")) {
          $("body").removeClass("overflow-hidden");
          sideMenu.removeClass("side-menu-active");
          $("#close_side_menu").fadeOut(200);
          $(function() {
            setTimeout(function() {
              $('.sideNavPages').removeClass('show');
              $('.fas').removeClass('rotate-180');
            }, 400);
          });
        }
      }
    });
  }

  // Side menu collapse opener
  $(".collapsePagesSideMenu").on('click', function() {
    $(this).find('.fas').toggleClass("rotate-180");
  });


  // Parallax and responsive plugins
  if ($(".wow").length && $(window).outerWidth() >= 567) {
    let wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true
    });
    wow.init();
  }
  if ($(window).width() > 992) {
    $(".parallax").parallaxie({
      //speed value btw (-1 to 1)
      speed: 0.55,
      offset: 0,
    });
    $(".parallax.parallax-slow").parallaxie({
      speed: 0.31,
    });
  }

  // Pricing table

  function currentProSubPrice() {
    let value = 0;
    let basePrice, incrementPrice;
    if ($('#annually').hasClass('active')) {
      basePrice = 329; // When Annual sub is selected
      incrementPrice = 279;
    } else {
      basePrice = 379; // When Monthly sub is selected
      incrementPrice = 329;
    }
    switch (parseInt($("#priceVolume").val())) {
      case 500:
        value = basePrice;
        break;
      case 1000:
        value = basePrice + incrementPrice;
        break;
      case 1500:
        value = basePrice + incrementPrice * 2;
        break;
      case 2000:
        value = basePrice + incrementPrice * 3;
        break;
      case 2500:
        value = basePrice + incrementPrice * 4;
        break;
      case 3000:
        value = basePrice + incrementPrice * 5;
        break;
      default:
        break;
    }
    return value;
  }

  $('.pricing-toggle-button').on('click', function() {
    let volume = $("#priceVolume").val();
    if (!$(this).hasClass('active')) {
      $(this).addClass('active').siblings().removeClass('active');
    }
    $('#priceCaveat').html('');
    $('#calculatedPrice').html("£" + currentProSubPrice());
  });

  $('#priceVolume').on('click', function() {
    let volume = $("#priceVolume").val();
    $('#priceOutput').html(volume);
    $('#priceCaveat').html('');
    $('#planPrefix').html('Up to');
    $('#planPages').html(volume);
    $('#calculatedPrice').html("£" + currentProSubPrice());
  });

  $('.pricing-item').on('mouseenter', function() {
    $('.pricing-item').removeClass('active');
    $(this).addClass('active');
  }).on('mouseleave', function() {
    $('.pricing-item').removeClass('active');
    $('.pricing-item.selected').addClass('active');
  });

  // OWL sliders
  $("#key-messages-slider").owlCarousel({
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1200,
    loop: true,
    nav: true,
    navText: ["<div class='d-md-none'><i class='fa fa-chevron-left'></i></div>", "<div class='d-md-none'><i class='fa fa-chevron-right'></i></div>"],
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 3
      }
    }
  });

  $("#customers-slider").owlCarousel({
    items: 4,
    autoplay: false,
    autoplayHoverPause: true,
    slideBy: 1,
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    autoHeight: true,
    responsive: {
      991: {
        items: 4,
      },
      767: {
        items: 3,
      },
      480: {
        items: 2,
      },
      0: {
        items: 1,
      },
    }
  });

  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: 2500,
    smartSpeed: 2500,
    autoplayHoverPause: true,
    mouseDrag: false,
    loop: true,
    margin: 30,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    dots: false,
    nav: true,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
    responsive: {
      980: {
        items: 1,
      },
      600: {
        items: 1,
      },
      320: {
        items: 1,
      },
    }
  });

  // Revolution slider
  $("#rev_main").show().revolution({
    sliderType: "standard",
    jsFileLocation: "js/revolution/",
    sliderLayout: "auto",
    dottedOverlay: "none",
    delay: 9000,
    navigation: {
      keyboardNavigation: "off",
      keyboard_direction: "horizontal",
      mouseScrollNavigation: "off",
      mouseScrollReverse: "default",
      onHoverStop: "off",
      touch: {
        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      },
      bullets: {
        enable: true,
        hide_onmobile: true,
        style: "numbered",
        hide_onleave: false,
        hide_under: 576,
        direction: "vertical",
        h_align: "left",
        v_align: "center",
        h_offset: 20,
        v_offset: 0,
        space: 5,
        tmp: '<div class="tp-bullet-number"><span class="tp-count">{{param1}}</span><span class="tp-bullet-line"></span></div>'
      },
      arrows: {
        style: "",
        enable: false,
      }
    },
    viewPort: {
      enable: true,
      outof: "pause",
      visible_area: "80%",
      presize: false
    },
    responsiveLevels: [1200, 992, 768, 576],
    visibilityLevels: [1200, 992, 768, 576],
    lazyType: "none",
    parallax: {
      type: "mouse",
      origo: "slidercenter",
      speed: 2000,
      speedbg: 0,
      speedls: 0,
      levels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 25, 55],
      disable_onmobile: "on"
    },
    shadow: 0,
    spinner: "off",
    stopLoop: "off",
    stopAfterLoops: -1,
    stopAtSlide: -1,
    shuffle: "off",
    autoHeight: "off",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLimit: 0,
    debugMode: false,
    fallbacks: {
      simplifyAll: "off",
      nextSlideOnWindowFocus: "off",
      disableFocusListener: false,
    }
  });

  // Accordion for how-it-works page
  $(function() { tabsToggle(); });

  function tabsToggle() {
    var animSpeed = 500;
    var tabWrap = $(".tab-to-accordion");
    var tabItem = tabWrap.find(".tab-container").children("div[id]");
    tabItem.hide();
    $('#tab1').show();
    $(tabWrap).on("click", 'a[href^="#tab"]', function(e) {
      e.preventDefault();
      var $this = $(this);
      var activeId = $this.attr("href");
      var activeOpener = tabWrap.find('a[href="' + activeId + '"]');
      $('a[href^="#tab"]').parent().removeClass("active");
      activeOpener.parent().addClass("active");
      tabItem.stop().slideUp(animSpeed);
      $(activeId).stop().slideDown(animSpeed);
    });
  }
});
