const team = new Swiper('.swiper-block3', {
    spaceBetween: 18,
    loop: false,
    navigation: {
        nextEl: '.swiper-block3-next',
        prevEl: '.swiper-block3-prev',
      },
    breakpoints: {
      0: {
          slidesPerView: 1.1,
          spaceBetween: 18,
      },
      576: {
          slidesPerView: 2,
      },
        768: {
            slidesPerView: 2.8,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
  });


  $(document).ready(function() {
    // $('.prays-box').hide();
    // $('.prays-box:first-child').show();
    $('.sort-doc').click(function() {
      let pageInfo = $(this).attr('data-sort');
      $('.slide-doc').hide();
      $('.' + pageInfo).show();
    })
  });