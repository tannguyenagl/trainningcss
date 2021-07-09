$('.c-faqpage__top').click(function () {
  $(this)
    .parent('.c-faqpage__item')
    .children('.c-faqpage__main')
    .toggle('slow');
  $(this).find('.c-cross__column').toggle('slow');
});
