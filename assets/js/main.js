;(function($){

$(document).ready(function(){

//========== HEADER ACTIVE STRATS ============= //
  var $header = $("#vl-header-sticky");
  var $window = $(window);
  function toggleStickyHeader() {
    var scrollTop = $window.scrollTop();
    if (scrollTop < 100) {
      $header.removeClass("header-sticky");
    } else {
      $header.addClass("header-sticky");
    }
  }
  $window.on("scroll", toggleStickyHeader);
  toggleStickyHeader();
//========== HEADER ACTIVE ENDS ============= //

//========== MOBILE MENU STARTS ============= //
  // Replace desktop/mobile menus with the right language (defaults to ES)
  var lang = (document.documentElement.lang || 'es').toLowerCase();
  lang = lang.indexOf('en') === 0 ? 'en' : 'es';

  var menuByLang = {
    es: {
      desktop: '<ul>'+
                '<li><a href="index.html">Inicio</a></li>'+
                '<li><a href="index.html#about">Nosotros</a></li>'+
                '<li class="has-dropdown">'+
                  '<a href="#">Servicios <span><i class="fa-solid fa-angle-down d-xl-inline d-none"></i></span></a>'+
                  '<ul class="sub-menu">'+
                    '<li><a href="service.html">Servicios Eléctricos</a></li>'+
                    '<li><a href="sistemas.html">Sistemas e Infraestructura</a></li>'+
                  '</ul>'+
                '</li>'+
                '<li><a href="faq-es.html">Preguntas Frecuentes</a></li>'+
                '<li><a href="contact.html">Contacto</a></li>'+
                '</ul>',
      mobile:  '<ul>'+
                '<li><a href="index.html">Inicio</a></li>'+
                '<li><a href="index.html#about">Nosotros</a></li>'+
                '<li><a href="service.html">Servicios</a></li>'+
                '<li><a href="sistemas.html">Sistemas e Infraestructura</a></li>'+
                '<li><a href="faq-es.html">Preguntas Frecuentes</a></li>'+
                '<li><a href="contact.html">Contacto</a></li>'+
                '</ul>'
    },
    en: {
      desktop: '<ul>'+
                '<li><a href="index-en.html">Home</a></li>'+
                '<li><a href="index-en.html#about">About Us</a></li>'+
                '<li class="has-dropdown">'+
                  '<a href="#">Services <span><i class="fa-solid fa-angle-down d-xl-inline d-none"></i></span></a>'+
                  '<ul class="sub-menu">'+
                    '<li><a href="service-en.html">Electrical Services</a></li>'+
                    '<li><a href="sistemas-en.html">Systems & Infrastructure</a></li>'+
                  '</ul>'+
                '</li>'+
                '<li><a href="faq-en.html">FAQ</a></li>'+
                '<li><a href="contact-en.html">Contact</a></li>'+
                '</ul>',
      mobile:  '<ul>'+
                '<li><a href="index-en.html">Home</a></li>'+
                '<li><a href="index-en.html#about">About Us</a></li>'+
                '<li><a href="service-en.html">Services</a></li>'+
                '<li><a href="sistemas-en.html">Systems & Infrastructure</a></li>'+
                '<li><a href="faq-en.html">FAQ</a></li>'+
                '<li><a href="contact-en.html">Contact</a></li>'+
                '</ul>'
    }
  };
  var activeMenu = menuByLang[lang] || menuByLang.es;

  $('.vl-mobile-menu-active').each(function(){
    $(this).html(activeMenu.desktop);
  });

  var vlSideMenu = $('.vl-offcanvas-menu nav');
  if (vlSideMenu.length) {
    vlSideMenu.empty().html(activeMenu.mobile);
    // As a safeguard, ensure only one UL exists
    setTimeout(function(){
      vlSideMenu.html(activeMenu.mobile);
    }, 50);
  }

  // Add language switcher to mobile/offcanvas header
  var currentFile = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  function buildLangPath(targetLang) {
    if (targetLang === lang) return currentFile;
    if (targetLang === 'en') {
      if (currentFile.indexOf('-en.html') !== -1) return currentFile;
      if (currentFile.indexOf('-es.html') !== -1) return currentFile.replace('-es.html','-en.html');
      return currentFile.replace('.html','-en.html');
    }
    // spanish
    if (currentFile.indexOf('-es.html') !== -1) return currentFile;
    if (currentFile.indexOf('-en.html') !== -1) return currentFile.replace('-en.html','-es.html');
    return currentFile.indexOf('faq.html') !== -1 ? currentFile.replace('.html','-es.html') : currentFile;
  }
  var esHref = buildLangPath('es');
  var enHref = buildLangPath('en');
  var mobileLangHTML = '<div class="mobile-language-switcher" style="display:flex; gap:8px; margin-bottom:20px;">'+
                        '<a href="'+esHref+'" style="color: #0F1D40; padding: 8px 12px; background:'+(lang === 'es' ? 'rgba(24,115,204,0.12)' : 'rgba(24,115,204,0.06)')+'; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight:'+(lang === 'es' ? '700' : '500')+';">ES</a>'+
                        '<a href="'+enHref+'" style="color: #0F1D40; padding: 8px 12px; background:'+(lang === 'en' ? 'rgba(24,115,204,0.12)' : 'rgba(24,115,204,0.06)')+'; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight:'+(lang === 'en' ? '700' : '500')+';">EN</a>'+
                       '</div>';
  var $offcanvasWrapper = $('.vl-offcanvas-wrapper');
  if ($offcanvasWrapper.length && !$offcanvasWrapper.find('.mobile-language-switcher').length) {
    $offcanvasWrapper.find('.vl-offcanvas-header').after(mobileLangHTML);
  }
  var desktopLangHTML = '<div class="language-switcher" style="display: inline-flex; align-items: center; margin-right: 15px; gap: 8px;">'+
                        '<a class="lang-es" href="'+esHref+'" style="color: #fff; padding: 8px 12px; background:'+(lang === 'es' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)')+'; border-radius: 4px; text-decoration: none; font-size: 14px; font-weight:'+(lang === 'es' ? 'bold' : 'normal')+'; white-space: nowrap;">ES</a>'+
                        '<a class="lang-en" href="'+enHref+'" style="color: #fff; padding: 8px 12px; background:'+(lang === 'en' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)')+'; border-radius: 4px; text-decoration: none; font-size: 14px; font-weight:'+(lang === 'en' ? 'bold' : 'normal')+'; white-space: nowrap;">EN</a>'+
                       '</div>';
  $('.sidebar_btn-area').each(function(){
    var $wrapper = $(this).find('.language-switcher');
    if (!$wrapper.length) {
      $(this).prepend(desktopLangHTML);
      $wrapper = $(this).find('.language-switcher');
    }
    var $es = $wrapper.find('.lang-es'), $en = $wrapper.find('.lang-en');
    if ($es.length) {
      $es.attr('href', esHref)
         .css('background', lang === 'es' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)')
         .css('font-weight', lang === 'es' ? 'bold' : 'normal');
    }
    if ($en.length) {
      $en.attr('href', enHref)
         .css('background', lang === 'en' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)')
         .css('font-weight', lang === 'en' ? 'bold' : 'normal');
    }
  });
  
  if ($(vlSideMenu).find('.sub-menu, .vl-mega-menu').length !== 0) {
    $(vlSideMenu).find('.sub-menu, .vl-mega-menu').parent().append('<button class="vl-menu-close"><i class="fas fa-chevron-right"></i></button>');
  }

  var sideMenuList = $('.vl-offcanvas-menu nav > ul > li button.vl-menu-close, .vl-offcanvas-menu nav > ul li.has-dropdown > a');
  $(sideMenuList).on('click', function (e) {
    e.preventDefault();
    var $parent = $(this).parent();

    if (!$parent.hasClass('active')) {
      $parent.addClass('active');
      $(this).siblings('.sub-menu, .vl-mega-menu').slideDown();
    } else {
      $(this).siblings('.sub-menu, .vl-mega-menu').slideUp();
      $parent.removeClass('active');
    }
  });

  $(".vl-offcanvas-toggle").on('click', function() {
    $(".vl-offcanvas").addClass("vl-offcanvas-open");
    $(".vl-offcanvas-overlay").addClass("vl-offcanvas-overlay-open");
  });

  $(".vl-offcanvas-close-toggle, .vl-offcanvas-overlay").on('click', function() {
    $(".vl-offcanvas").removeClass("vl-offcanvas-open");
    $(".vl-offcanvas-overlay").removeClass("vl-offcanvas-overlay-open");
  });
//========== MOBILE MENU ENDS ============= //

//========== SIDEBAR/SEARCH AREA ============= //
$(".header-search-btn").on("click", function (e) {
  e.preventDefault();
  $(".header-search-form-wrapper").addClass("open");
  $('.header-search-form-wrapper input[type="search"]').focus();
  $('.body-overlay').addClass('active');
});

$(".tx-search-close, .body-overlay").on("click", function (e) {
  e.preventDefault();
  $(".header-search-form-wrapper").removeClass("open");
  $('.body-overlay').removeClass('active');
});
//========== SIDEBAR/SEARCH AREA ============= //

//========== SIDEBAR/SEARCH AREA ============= //
  $(".hamburger_menu").on("click", function (e) {
  e.preventDefault();
  $(".slide-bar").toggleClass("show");
  $("body").addClass("on-side");
  $('.body-overlay').addClass('active');
  $(this).addClass('active');
  });
  $(".close-mobile-menu > a").on("click", function (e) {
  e.preventDefault();
  $(".slide-bar").removeClass("show");
  $("body").removeClass("on-side");
  $('.body-overlay').removeClass('active');
  $('.hamburger_menu').removeClass('active');
  });
//========== SIDEBAR/SEARCH AREA ============= //

//========== PRICING AREA ============= //

//========== PAGE PROGRESS STARTS ============= // 
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition =
  "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
//========== PAGE PROGRESS STARTS ============= // 

//========== VIDEO POPUP STARTS ============= //
   if ($(".popup-youtube").length > 0) {
    $(".popup-youtube").magnificPopup({
    type: "iframe",
    });
    }
//========== VIDEO POPUP ENDS ============= //
AOS.init;
AOS.init({disable: 'mobile'});

//========== NICE SELECT ============= //
$('select').niceSelect();

});

//========== COUNTER UP============= //
const ucounter = $('.counter');
if (ucounter.length > 0) {
  ucounter.countUp();
};

//========== TESTIMONIAL AREA ============= //
// SLIDER //
$(".hero-main-slider-widget").slick({
  autoplay:true,
  autoplaySpeed:1500,
  speed:2000,
  slidesToShow:1,
  slidesToScroll:1,
  pauseOnHover:false,
  dots:true,
  arrows:false,
  pauseOnDotsHover:true,
  cssEase:'linear',
  fade:true,
  draggable:true,
}); 

// SLIDER //
$(".hero-main-slider-widget2").slick({
  autoplay:true,
  autoplaySpeed:1500,
  speed:2000,
  slidesToShow:1,
  slidesToScroll:1,
  pauseOnHover:false,
  dots:true,
  arrows:false,
  pauseOnDotsHover:true,
  cssEase:'linear',
  fade:true,
  draggable:true,
}); 

// SLIDER //
$(".project-slider-area").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// SLIDER //
$(".testimonai2-slider-area").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// SLIDER //
$(".testimonai3-slider-area").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// SLIDER //
$(".service3-slider-widget").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// SLIDER //
$(".brand-slider-area").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  speed: 5000,
  infinite: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

// SLIDER //
$(".testimonial4-images-area").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay:true,
  autoplaySpeed:2000,
  loop: true,
  focusOnSelect: true,
  vertical:false,
  asNavFor: ".testimonial4-content-slider",
  infinite: true,
  fade:true,
});

$(".testimonial4-content-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".testimonial4-images-area",
  dots: false,
  arrows: true,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  prevArrow: $(".prev-arrow-testi4"),
  nextArrow: $(".next-arrow-testi4"), 
});

// SLIDER //
$(".hero4-main-slider").slick({
  autoplay:true,
  autoplaySpeed:1500,
  speed:2000,
  slidesToShow:1,
  slidesToScroll:1,
  pauseOnHover:false,
  dots:false,
  arrows:true,
  pauseOnDotsHover:true,
  cssEase:'linear',
  fade:true,
  draggable:true,
  prevArrow: $(".prev-arrow-hero4"),
  nextArrow: $(".next-arrow-hero4"), 
}); 

//========== PRELOADER ============= //
$(window).on("load", function (event) {
  setTimeout(function () {
    $(".preloader").fadeToggle();
  }, 200);
});

})(jQuery);

// SWIPER SLIDER //
document.addEventListener("DOMContentLoaded", function () {
  var swiper3 = new Swiper(".swiper-thumb2", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  var swiper4 = new Swiper(".swiper-testimonial-2", {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiper3,
    },
  });
});

