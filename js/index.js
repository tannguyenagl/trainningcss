$('.c-voiceman__wrap').each(function (index, sliderWrap) {
  var $slider = $(sliderWrap).find('.c-voicemain__slide');
  var $listdot = $(sliderWrap).find('.c-voicemain__listdot');
  var $prev = $(sliderWrap).find('.c-voicemain__prev');
  var $next = $(sliderWrap).find('.c-voicemain__next');

  $slider.slick({
    dots: true,
    appendDots: $listdot,
    nextArrow: $next,
    prevArrow: $prev,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1204,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$('.c-header__menu').click(function () {
  $('.c-header__nav').css('left', '0px');
  $('.c-header__close').css('left', '15px');
});

$('.c-header__close').click(function () {
  $('.c-header__nav').css('left', '-100%');
  $('.c-header__close').css('left', '-100%');
});
