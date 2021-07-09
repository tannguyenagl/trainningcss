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
  });
});
